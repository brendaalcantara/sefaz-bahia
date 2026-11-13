(() => {
  "use strict";

  const storageKey = "rotaFiscalProgress.v1";
  const content = window.STUDY_CONTENT || {};
  const appShell = document.querySelector(".app-shell");
  const appView = document.querySelector("#app-view");
  const header = document.querySelector(".topbar");
  const toast = document.querySelector("#toast");
  const sidebar = document.querySelector("#sidebar");
  const navLinks = Array.from(document.querySelectorAll(".route-nav [data-view]"));
  const menuToggle = document.querySelector("#menu-toggle");
  const importInput = document.querySelector("#import-file");
  const exportButton = document.querySelector("#export-progress");
  const importButton = document.querySelector("#import-progress");
  const resetButton = document.querySelector("#reset-progress");
  const topbarSection = document.querySelector("#topbar-section");

  if (!appShell || !appView || !header) return;

  const lessons = Array.isArray(content.lessons) ? content.lessons : [];
  const questions = Array.isArray(content.questions) ? content.questions : [];
  const cases = Array.isArray(content.cases) ? content.cases : [];
  const weeks = Array.isArray(content.weeks) ? content.weeks : [];
  const sources = Array.isArray(content.sources) ? content.sources : [];
  const glossary = Array.isArray(content.glossary) ? content.glossary : [];
  const lessonById = new Map(lessons.map((item) => [item.id, item]));
  const questionById = new Map(questions.map((item) => [item.id, item]));
  const caseById = new Map(cases.map((item) => [item.id, item]));
  const sourceById = new Map(sources.map((item) => [item.id, item]));
  const lessonIds = new Set(lessons.map((item) => item.id));
  const questionIds = new Set(questions.map((item) => item.id));
  const caseIds = new Set(cases.map((item) => item.id));
  const rubricKeys = ["command", "content", "grounds", "organization", "language"];
  const blockMinutes = [75, 75, 30];
  const reviewIntervals = [1, 7, 30];
  const todayKey = dateKey(new Date());
  let toastTimer = 0;
  let currentView = "today";
  let selectedDay = 1;
  let selectedLessonId = lessons[0]?.id || "";
  let lessonFilter = "Todas as matérias";
  let lessonSearch = "";
  let showGlossary = false;
  let showReviewAnswer = false;
  let showActiveReviewAnswer = false;
  let selectedReviewLessonId = "";
  let selectedQuestionId = questions[0]?.id || "";
  let questionSubjectFilter = "Todas as matérias";
  let onlyWrongQuestions = false;
  let questionMode = "practice";
  let lessonQuestionFilter = "";
  let selectedCaseId = cases[0]?.id || "";
  let draftSaveTimer = 0;
  let essayTimerInterval = 0;
  let essayTimerStartedAt = 0;
  let essayTimerBaseSeconds = 0;
  let regionRefs = {};
  let heroSurface = null;
  let heroControls = null;

  function dateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function parseDateKey(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
    const parts = value.split("-").map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    if (date.getFullYear() !== parts[0] || date.getMonth() !== parts[1] - 1 || date.getDate() !== parts[2]) return null;
    return date;
  }

  function dateAfter(dateString, days) {
    const date = parseDateKey(dateString) || new Date();
    date.setDate(date.getDate() + days);
    return dateKey(date);
  }

  function formatDate(dateString, options) {
    const date = parseDateKey(dateString);
    if (!date) return "Data não definida";
    return new Intl.DateTimeFormat("pt-BR", options || { day: "2-digit", month: "long", year: "numeric" }).format(date);
  }

  function isRecord(value) {
    return Boolean(value && typeof value === "object" && !Array.isArray(value));
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function baseProgress() {
    return {
      version: 1,
      startDate: todayKey,
      selectedDay: 1,
      completedBlocks: {},
      completedDays: {},
      studyMinutesByDay: {},
      answersByQuestion: {},
      wrongQuestionIds: [],
      readLessonIds: [],
      reviews: {},
      drafts: {},
      activeSimulation: null,
      simulations: []
    };
  }

  function validDateTime(value) {
    return typeof value === "string" && Number.isFinite(Date.parse(value));
  }

  function normalizeProgress(raw) {
    const source = isRecord(raw) ? raw : {};
    const next = baseProgress();
    next.startDate = parseDateKey(source.startDate) ? source.startDate : todayKey;
    const selected = Number(source.selectedDay);
    next.selectedDay = Number.isInteger(selected) ? Math.max(1, Math.min(90, selected)) : 1;

    const legacyCompleted = isRecord(source.completedDays) ? source.completedDays : {};
    const inputBlocks = isRecord(source.completedBlocks) ? source.completedBlocks : {};
    for (let day = 1; day <= 90; day += 1) {
      const key = String(day);
      const blockInput = inputBlocks[key];
      let blockValues;
      if (Array.isArray(blockInput)) {
        blockValues = [Boolean(blockInput[0]), Boolean(blockInput[1]), Boolean(blockInput[2])];
      } else if (legacyCompleted[key] === true || legacyCompleted[key]?.completed === true) {
        blockValues = [true, true, true];
      } else {
        blockValues = [false, false, false];
      }
      if (blockValues.some(Boolean)) next.completedBlocks[key] = blockValues;
      if (blockValues.every(Boolean)) next.completedDays[key] = true;
      const minutes = blockValues.reduce((sum, complete, index) => sum + (complete ? blockMinutes[index] : 0), 0);
      if (minutes) next.studyMinutesByDay[key] = minutes;
    }

    const rawAnswers = isRecord(source.answersByQuestion) ? source.answersByQuestion : {};
    for (const [id, entry] of Object.entries(rawAnswers)) {
      const question = questionById.get(id);
      if (!question || !isRecord(entry)) continue;
      const option = Number(entry.option);
      if (!Number.isInteger(option) || option < 0 || option >= question.options.length) continue;
      const attemptsValue = Number(entry.attempts);
      const attempts = Number.isInteger(attemptsValue) ? Math.max(1, Math.min(10000, attemptsValue)) : 1;
      next.answersByQuestion[id] = {
        option,
        correct: option === Number(question.answer),
        answeredAt: validDateTime(entry.answeredAt) ? entry.answeredAt : new Date().toISOString(),
        attempts
      };
    }
    next.wrongQuestionIds = Object.keys(next.answersByQuestion).filter((id) => !next.answersByQuestion[id].correct);

    if (Array.isArray(source.readLessonIds)) {
      next.readLessonIds = Array.from(new Set(source.readLessonIds.filter((id) => lessonIds.has(id))));
    }

    const rawReviews = isRecord(source.reviews) ? source.reviews : {};
    for (const [id, entry] of Object.entries(rawReviews)) {
      if (!lessonIds.has(id) || !isRecord(entry) || !validDateTime(entry.completedAt)) continue;
      const completedCycles = Array.isArray(entry.completedCycles)
        ? Array.from(new Set(entry.completedCycles.map(Number).filter((value) => reviewIntervals.includes(value))))
        : [];
      const retryAt = validDateTime(entry.retryAt) ? entry.retryAt : null;
      const cycleIndex = Number.isInteger(Number(entry.cycleIndex))
        ? Math.max(0, Math.min(reviewIntervals.length, Number(entry.cycleIndex)))
        : Math.min(reviewIntervals.length, completedCycles.length);
      const dueAt = cycleIndex < reviewIntervals.length
        ? (retryAt || new Date(Date.parse(entry.completedAt) + reviewIntervals[cycleIndex] * 86400000).toISOString())
        : null;
      next.reviews[id] = {
        completedAt: entry.completedAt,
        completedCycles,
        cycleIndex,
        retryAt,
        dueAt
      };
    }

    const rawDrafts = isRecord(source.drafts) ? source.drafts : {};
    for (const [id, entry] of Object.entries(rawDrafts)) {
      if (!caseIds.has(id) || !isRecord(entry)) continue;
      const rawText = typeof entry.text === "string" ? entry.text : "";
      const checks = {};
      for (const key of rubricKeys) checks[key] = Boolean(isRecord(entry.checks) && entry.checks[key]);
      const elapsed = Number(entry.elapsedSeconds);
      next.drafts[id] = {
        text: rawText.slice(0, 30000),
        updatedAt: validDateTime(entry.updatedAt) ? entry.updatedAt : null,
        elapsedSeconds: Number.isFinite(elapsed) ? Math.max(0, Math.min(86400, Math.floor(elapsed))) : 0,
        checks,
        score: rubricKeys.filter((key) => checks[key]).length
      };
    }
    const rawSimulations = Array.isArray(source.simulations) ? source.simulations : [];
    next.simulations = rawSimulations.slice(0, 30).filter(isRecord).map((entry) => {
      const total = Number(entry.total);
      const correct = Number(entry.correct);
      return {
        id: typeof entry.id === "string" ? entry.id.slice(0, 80) : "simulado-importado",
        startedAt: validDateTime(entry.startedAt) ? entry.startedAt : new Date().toISOString(),
        completedAt: validDateTime(entry.completedAt) ? entry.completedAt : new Date().toISOString(),
        total: Number.isInteger(total) ? Math.max(1, Math.min(10, total)) : 1,
        correct: Number.isInteger(correct) ? Math.max(0, Math.min(Number.isInteger(total) ? total : 1, correct)) : 0
      };
    });
    if (isRecord(source.activeSimulation)) {
      const simulation = source.activeSimulation;
      const ids = Array.isArray(simulation.questionIds)
        ? Array.from(new Set(simulation.questionIds.filter((id) => questionIds.has(id)))).slice(0, 10)
        : [];
      if (ids.length) {
        const choices = {};
        const rawChoices = isRecord(simulation.choices) ? simulation.choices : {};
        ids.forEach((id) => {
          const option = Number(rawChoices[id]);
          const question = questionById.get(id);
          if (Number.isInteger(option) && option >= 0 && option < question.options.length) choices[id] = option;
        });
        const cursor = Number(simulation.cursor);
        next.activeSimulation = {
          id: typeof simulation.id === "string" ? simulation.id.slice(0, 80) : "simulado-local",
          questionIds: ids,
          cursor: Number.isInteger(cursor) ? Math.max(0, Math.min(ids.length - 1, cursor)) : 0,
          choices,
          startedAt: validDateTime(simulation.startedAt) ? simulation.startedAt : new Date().toISOString()
        };
      }
    }
    return next;
  }

  function readProgress() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return baseProgress();
      return normalizeProgress(JSON.parse(raw));
    } catch {
      return baseProgress();
    }
  }

  let progress = readProgress();
  selectedDay = progress.selectedDay;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }

  function updateProgress(mutator) {
    const draft = clone(progress);
    if (typeof mutator === "function") mutator(draft);
    progress = normalizeProgress(draft);
    selectedDay = progress.selectedDay;
    try {
      localStorage.setItem(storageKey, JSON.stringify(progress));
    } catch {
      showToast("O navegador não conseguiu salvar. Verifique o espaço disponível ou exporte uma cópia.");
    }
    window.dispatchEvent(new CustomEvent("rotafiscal:progresschange", { detail: clone(progress) }));
    renderProgressMetrics();
    return clone(progress);
  }

  function makeIcon(name, className) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.8");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    if (className) svg.setAttribute("class", className);
    const shapes = {
      calendar: [["rect", { x: 3.4, y: 5.2, width: 17.2, height: 15.2, rx: 1.5 }], ["line", { x1: 7.4, y1: 3.5, x2: 7.4, y2: 7.2 }], ["line", { x1: 16.6, y1: 3.5, x2: 16.6, y2: 7.2 }], ["line", { x1: 3.8, y1: 9.1, x2: 20.2, y2: 9.1 }]],
      book: [["path", { d: "M12 6.1C9.5 3.9 6 3.6 3.2 4.8v14.5c2.8-1.2 6.3-.9 8.8 1.3V6.1Z" }], ["path", { d: "M12 6.1c2.5-2.2 6-2.5 8.8-1.3v14.5c-2.8-1.2-6.3-.9-8.8 1.3V6.1Z" }]],
      route: [["circle", { cx: 5, cy: 18.5, r: 2.1 }], ["circle", { cx: 18.8, cy: 5.4, r: 2.1 }], ["path", { d: "M7.2 18.1h4.2a3 3 0 0 0 3-3V8.8a3 3 0 0 1 3-3" }]],
      layers: [["path", { d: "m12 3.7 9 5-9 5-9-5 9-5Z" }], ["path", { d: "m3.7 12.3 8.3 4.6 8.3-4.6" }], ["path", { d: "m3.7 15.9 8.3 4.6 8.3-4.6" }]],
      document: [["path", { d: "M6 3.5h8.4l4.2 4.2v12.8H6a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z" }], ["path", { d: "M14 3.8v4.5h4.4M8 11.3h7.8M8 15h7.8" }]],
      link: [["path", { d: "M9.2 14.8 7 17a3.7 3.7 0 0 1-5.2-5.2l4.3-4.3a3.7 3.7 0 0 1 5.2 0" }], ["path", { d: "m14.8 9.2 2.2-2.2a3.7 3.7 0 0 1 5.2 5.2l-4.3 4.3a3.7 3.7 0 0 1-5.2 0" }], ["line", { x1: 8.8, y1: 15.2, x2: 15.2, y2: 8.8 }]],
      left: [["path", { d: "m14.8 5.5-6.5 6.5 6.5 6.5" }]],
      right: [["path", { d: "m9.2 5.5 6.5 6.5-6.5 6.5" }]],
      down: [["path", { d: "m5.5 9 6.5 6 6.5-6" }]],
      arrow: [["path", { d: "M4 12h15M13 5.8l6.2 6.2-6.2 6.2" }]]
    };
    (shapes[name] || []).forEach(([tag, attributes]) => {
      const shape = document.createElementNS("http://www.w3.org/2000/svg", tag);
      Object.entries(attributes).forEach(([key, value]) => shape.setAttribute(key, String(value)));
      svg.append(shape);
    });
    return svg;
  }

  function el(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = String(text);
    return element;
  }

  function button(label, className, action) {
    const element = el("button", className, label);
    element.type = "button";
    if (action) element.dataset.action = action;
    return element;
  }

  function addRegion(parent, id, kind, tag) {
    const element = el(tag || "div", "region region-" + kind + " r-" + id);
    element.dataset.region = id;
    parent.append(element);
    return element;
  }

  function setNavRegions() {
    const names = ["today", "apostila", "plan", "review", "questions", "essay", "sources"];
    const icons = ["calendar", "book", "route", "route", "layers", "document", "link"];
    navLinks.forEach((link, index) => {
      link.dataset.region = "nav-" + names[index];
      link.classList.add("region", "region-control", "r-nav-" + names[index]);
      const symbol = link.querySelector(".nav-symbol");
      if (symbol) symbol.replaceChildren(makeIcon(icons[index]));
    });
    const brand = document.querySelector(".brand");
    if (brand) {
      brand.dataset.region = "brand-title";
      brand.classList.add("region", "region-text", "r-brand-title");
      const strong = brand.querySelector(".brand-copy strong");
      const small = brand.querySelector(".brand-copy small");
      if (strong) strong.textContent = "ROTA FISCAL ·";
      if (small) small.textContent = "SEFAZ-BA";
    }
  }

  function addHeroSession(parent, index, actionText, actionClass) {
    const labels = ["one", "two", "three"];
    const id = labels[index];
    const outline = addRegion(parent, "session-" + id + "-outline", "chrome");
    outline.setAttribute("aria-hidden", "true");

    const label = addRegion(parent, "session-" + id + "-label", "text");
    const subject = el("strong", "session-subject", "");
    subject.dataset.sessionSubject = String(index);
    const duration = el("span", "session-duration", "· " + blockMinutes[index] + " min");
    label.append(subject, duration);

    const action = addRegion(parent, "session-" + id + "-action", "control", "button");
    action.type = "button";
    action.classList.add(actionClass);
    action.dataset.sessionAction = String(index);
    action.setAttribute("aria-label", actionText);
    action.append(el("span", "session-action-label", actionText), makeIcon("arrow", "action-arrow"));
  }

  function buildHeroSurface() {
    const surface = el("section", "today-surface");
    surface.setAttribute("aria-label", "Painel do dia");
    const brandRule = addRegion(surface, "brand-rule", "chrome");
    brandRule.setAttribute("aria-hidden", "true");
    const sidebarDivider = addRegion(surface, "sidebar-divider", "chrome");
    sidebarDivider.setAttribute("aria-hidden", "true");
    const mainDivider = addRegion(surface, "main-side-divider", "chrome");
    mainDivider.setAttribute("aria-hidden", "true");

    const headlineAccent = addRegion(surface, "headline-accent", "chrome");
    headlineAccent.setAttribute("aria-hidden", "true");
    const headline = addRegion(surface, "daily-headline", "text", "h1");
    headline.id = "today-headline";
    headline.tabIndex = -1;

    const spine = addRegion(surface, "session-route-spine", "chrome");
    spine.setAttribute("aria-hidden", "true");
    ["active", "", ""].forEach((state) => spine.append(el("span", "route-node " + state)));

    addHeroSession(surface, 0, "Estudar agora", "action-primary");
    addHeroSession(surface, 1, "Próxima atividade", "action-secondary");
    addHeroSession(surface, 2, "Treinar questões", "action-review");

    const weekRule = addRegion(surface, "week-section-rule", "chrome");
    weekRule.setAttribute("aria-hidden", "true");
    const weekAccent = addRegion(surface, "week-heading-accent", "chrome");
    weekAccent.setAttribute("aria-hidden", "true");
    const weekHeading = addRegion(surface, "week-heading", "text", "h2");
    weekHeading.append(el("strong", "week-heading-strong", "Rota da semana"), el("span", "week-heading-days", ""));

    const routeLine = addRegion(surface, "week-route-line", "chrome");
    routeLine.setAttribute("aria-hidden", "true");
    const routeStops = addRegion(surface, "week-route-stops", "control", "nav");
    routeStops.setAttribute("aria-label", "Dias da semana");
    for (let day = 1; day <= 7; day += 1) {
      const stop = el("button", "week-stop");
      stop.type = "button";
      stop.dataset.selectDay = String(day);
      stop.append(el("span", "week-stop-dot"), el("span", "week-stop-label", ""));
      routeStops.append(stop);
    }

    const daysAccent = addRegion(surface, "metric-days-accent", "chrome");
    daysAccent.setAttribute("aria-hidden", "true");
    const daysMetric = addRegion(surface, "metric-days", "text");
    daysMetric.id = "days-progress";
    daysMetric.setAttribute("aria-live", "polite");
    const daysBar = addRegion(surface, "metric-days-bar", "chrome");
    daysBar.setAttribute("aria-hidden", "true");
    daysBar.append(el("span", "progress-fill"));

    const hoursAccent = addRegion(surface, "metric-hours-accent", "chrome");
    hoursAccent.setAttribute("aria-hidden", "true");
    const hoursMetric = addRegion(surface, "metric-hours", "text");
    hoursMetric.id = "hours-progress";
    hoursMetric.setAttribute("aria-live", "polite");
    const hoursBar = addRegion(surface, "metric-hours-bar", "chrome");
    hoursBar.setAttribute("aria-hidden", "true");
    hoursBar.append(el("span", "progress-fill"));

    const questionsAccent = addRegion(surface, "metric-questions-accent", "chrome");
    questionsAccent.setAttribute("aria-hidden", "true");
    const questionMetric = addRegion(surface, "metric-questions", "text");
    questionMetric.id = "questions-progress";
    questionMetric.append(el("span", "questions-value"), el("span", "questions-label", "questões"), el("span", "review-status-metric", "0 revisões pendentes"));

    const dividerUpper = addRegion(surface, "metric-divider-upper", "chrome");
    dividerUpper.setAttribute("aria-hidden", "true");
    const dividerLower = addRegion(surface, "metric-divider-lower", "chrome");
    dividerLower.setAttribute("aria-hidden", "true");
    const preBadge = addRegion(surface, "pre-edital-badge", "text");
    preBadge.append(el("strong", "pre-edital-text", "PRÉ-EDITAL"));
    const preNote = addRegion(surface, "pre-edital-note", "text", "p");
    preNote.textContent = "Plano de estudos pré-edital.";

    const controls = el("div", "today-header-controls");
    controls.setAttribute("role", "group");
    controls.setAttribute("aria-label", "Navegação do plano");
    const today = addRegion(controls, "top-select-today", "control", "button");
    today.type = "button";
    today.setAttribute("aria-label", "Ir para o dia de hoje");
    today.append(el("span", "control-label", "Hoje"), makeIcon("down", "small-chevron"));
    const divider = addRegion(controls, "top-divider", "chrome", "span");
    divider.setAttribute("aria-hidden", "true");
    const previous = addRegion(controls, "top-day-previous", "control", "button");
    previous.type = "button";
    previous.setAttribute("aria-label", "Dia anterior");
    previous.append(makeIcon("left"));
    const dayLabel = addRegion(controls, "top-day-label", "control", "output");
    dayLabel.id = "current-day-label";
    dayLabel.setAttribute("aria-live", "polite");
    const next = addRegion(controls, "top-day-next", "control", "button");
    next.type = "button";
    next.setAttribute("aria-label", "Próximo dia");
    next.append(makeIcon("right"));
    const plan = addRegion(controls, "top-plan-select", "control", "div");
    plan.setAttribute("role", "status");
    plan.append(el("span", "plan-prefix", "Plano: "), el("strong", "plan-name", "PRÉ-EDITAL"), makeIcon("down", "small-chevron"));
    const topRule = addRegion(controls, "topbar-rule", "chrome", "span");
    topRule.setAttribute("aria-hidden", "true");
    const localStatus = el("p", "today-local-status");
    localStatus.setAttribute("role", "status");
    localStatus.append(el("span", "today-local-dot", ""), el("span", "", "Pré-edital · dados salvos neste navegador"));
    controls.append(localStatus);
    header.append(controls);

    regionRefs = { surface, headline, routeStops, daysMetric, hoursMetric, questionMetric, daysBar, hoursBar, weekHeading };
    heroControls = { today, previous, dayLabel, next };
    heroSurface = surface;
    return surface;
  }

  function normalizeText(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function getDayData(dayNumber) {
    const day = Math.max(1, Math.min(90, Number(dayNumber) || 1));
    const weekIndex = Math.floor((day - 1) / 7);
    const dayOfWeek = (day - 1) % 7;
    const week = weeks[weekIndex] || weeks[weeks.length - 1] || { title: "Plano indicativo", days: [] };
    const sundayReview = weekIndex < 12 && dayOfWeek === 6;
    let topics;
    if (sundayReview) {
      topics = ["Revisão acumulada · ciclos de 24h, 7d e 30d", "Simulado curto · questões do banco local"];
    } else {
      const topicLine = Array.isArray(week.days) ? week.days[dayOfWeek] : "";
      topics = String(topicLine || "Revisão de conteúdos anteriores|Questões de fixação")
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);
    }
    if (!topics.length) topics = ["Revisão de conteúdos anteriores", "Questões de fixação"];
    const subjects = topics.slice(0, 2).map((topic) => topic.split("·")[0].trim());
    const headline = day === 1
      ? "Dia 1 · Comece pelo fato gerador"
      : sundayReview
        ? "Dia " + day + " · Revisão acumulada"
        : "Dia " + day + " · " + (subjects[0] || week.title || "Estudo do ciclo");
    const startDate = parseDateKey(progress.startDate) ? progress.startDate : todayKey;
    return {
      day,
      weekNumber: weekIndex + 1,
      dayOfWeek,
      week,
      topics,
      subjects,
      sundayReview,
      date: dateAfter(startDate, day - 1),
      headline
    };
  }

  function subjectAliases(subject) {
    const value = normalizeText(subject);
    if (value.includes("icms")) return ["legislacao tributaria da bahia", "icms ba", "icms"];
    if (value.includes("administrativo")) return ["direito administrativo", "administrativo"];
    if (value.includes("portugues")) return ["lingua portuguesa", "portugues"];
    if (value.includes("raciocinio")) return ["raciocinio logico", "raciocinio"];
    if (value.includes("matematica financeira")) return ["matematica financeira"];
    if (value.includes("tecnologia")) return ["tecnologia da informacao", "tecnologia"];
    if (value.includes("economia")) return ["economia e financas publicas", "economia"];
    if (value.includes("tributario")) return ["direito tributario"];
    if (value.includes("constitucional")) return ["direito constitucional"];
    if (value.includes("contabilidade")) return ["contabilidade geral", "contabilidade"];
    return [value];
  }

  function findLessonForTopic(topic) {
    const parts = String(topic || "").split("·");
    const subject = normalizeText(parts[0]);
    const detail = normalizeText(parts.slice(1).join(" "));
    const aliases = subjectAliases(parts[0]);
    const candidates = lessons.filter((lesson) => {
      const lessonSubject = normalizeText(lesson.subject);
      return aliases.some((alias) => lessonSubject.includes(alias) || alias.includes(lessonSubject));
    });
    const pool = candidates.length ? candidates : lessons;
    let best = null;
    let bestScore = -1;
    const words = detail.split(/\s+/).filter((word) => word.length > 3);
    for (const lesson of pool) {
      const text = normalizeText(lesson.title + " " + lesson.goal);
      let score = candidates.length ? 1 : 0;
      words.forEach((word) => { if (text.includes(word)) score += 2; });
      if (detail.includes("conceito de tributo") && lesson.id === "tributo") score += 10;
      if (detail.includes("fato gerador") && lesson.id === "tributo") score += 5;
      if (detail.includes("patrimonio") && lesson.id === "patrimonio") score += 8;
      if (detail.includes("obrigacao") && lesson.id === "obrigacao") score += 8;
      if (detail.includes("competencia") && lesson.id === "competencia") score += 8;
      if (detail.includes("interpretacao") && normalizeText(lesson.subject).includes("portugues")) score += 5;
      if (score > bestScore) {
        best = lesson;
        bestScore = score;
      }
    }
    return best;
  }

  function dayBlocks(day) {
    const value = progress.completedBlocks[String(day)];
    return Array.isArray(value) ? value : [false, false, false];
  }

  function completedDaysCount() {
    return Object.keys(progress.completedDays).filter((day) => progress.completedDays[day]).length;
  }

  function totalStudyMinutes() {
    return Object.values(progress.studyMinutesByDay).reduce((sum, minutes) => sum + Number(minutes || 0), 0);
  }

  function answeredQuestionCount() {
    return Object.keys(progress.answersByQuestion).filter((id) => questionIds.has(id)).length;
  }

  function reviewStatusText() {
    const pending = Object.values(progress.reviews)
      .filter((review) => review && review.cycleIndex < reviewIntervals.length && validDateTime(review.dueAt))
      .sort((left, right) => Date.parse(left.dueAt) - Date.parse(right.dueAt));
    if (!pending.length) return "0 revisões pendentes";
    const overdue = pending.filter((review) => Date.parse(review.dueAt) <= Date.now()).length;
    const overdueLabel = overdue === 1 ? "1 vencida" : overdue > 1 ? overdue + " vencidas" : "";
    if (overdueLabel) return pending.length + " pendentes · " + overdueLabel;
    const nextDate = formatDate(dateKey(new Date(pending[0].dueAt)), { day: "2-digit", month: "short" });
    const pendingLabel = pending.length === 1 ? "1 pendente" : pending.length + " pendentes";
    return "Próxima " + nextDate + " · " + pendingLabel;
  }

  function renderProgressMetrics() {
    if (!regionRefs.daysMetric) return;
    const days = completedDaysCount();
    const minutes = totalStudyMinutes();
    const hours = Math.floor(minutes / 60);
    const answered = answeredQuestionCount();
    const totalQuestions = questions.length;
    regionRefs.daysMetric.textContent = days + "/90 dias";
    regionRefs.hoursMetric.textContent = hours + "h/270h";
    const value = regionRefs.questionMetric.querySelector(".questions-value");
    const reviewStatus = regionRefs.questionMetric.querySelector(".review-status-metric");
    if (value) value.textContent = answered + "/" + totalQuestions;
    if (reviewStatus) reviewStatus.textContent = reviewStatusText();
    regionRefs.questionMetric.setAttribute("aria-label", answered + " de " + totalQuestions + " questões respondidas no banco local");
    regionRefs.daysBar.querySelector(".progress-fill").style.width = ((days / 90) * 100) + "%";
    regionRefs.hoursBar.querySelector(".progress-fill").style.width = (Math.min(100, (hours / 270) * 100)) + "%";
  }

  function setHeaderMode(view) {
    const today = view === "today";
    document.documentElement.classList.toggle("reading-page", !today);
    document.body.classList.toggle("reading-page", !today);
    [menuToggle, header.querySelector(".topbar-context"), header.querySelector(".topbar-actions")].forEach((element) => {
      if (!element) return;
      if (today) element.setAttribute("hidden", "");
      else element.removeAttribute("hidden");
    });
  }

  function updateHeroDay(dayNumber, persist) {
    selectedDay = Math.max(1, Math.min(90, Number(dayNumber) || 1));
    const data = getDayData(selectedDay);
    regionRefs.headline.textContent = data.headline;
    heroControls.dayLabel.textContent = "Dia " + selectedDay + " de 90";
    const firstDay = Math.floor((selectedDay - 1) / 7) * 7 + 1;
    const weekEnd = Math.min(90, firstDay + 6);
    regionRefs.weekHeading.querySelector(".week-heading-days").textContent = " (Dias " + firstDay + " a " + weekEnd + ")";
    regionRefs.routeStops.querySelectorAll(".week-stop").forEach((stop, index) => {
      const day = firstDay + index;
      const label = stop.querySelector(".week-stop-label");
      const dot = stop.querySelector(".week-stop-dot");
      if (label) label.textContent = day <= 90 ? "Dia " + day : "—";
      stop.dataset.selectDay = String(day);
      stop.disabled = day > 90;
      stop.classList.toggle("is-current", day === selectedDay);
      if (day === selectedDay) stop.setAttribute("aria-current", "step");
      else stop.removeAttribute("aria-current");
      stop.setAttribute("aria-label", day <= 90 ? "Selecionar Dia " + day : "Dia fora do plano");
      stop.title = day <= 90 ? formatDate(dateAfter(progress.startDate, day - 1), { weekday: "long", day: "2-digit", month: "long" }) : "";
      if (dot) dot.setAttribute("aria-hidden", "true");
    });
    const subjects = [data.subjects[0] || "Estudo dirigido", data.subjects[1] || "Questões e revisão", data.sundayReview ? "Revisão + questões" : "Revisão + questões"];
    regionRefs.surface.querySelectorAll("[data-session-subject]").forEach((subjectNode) => {
      const index = Number(subjectNode.dataset.sessionSubject);
      subjectNode.textContent = index === 2 ? subjects[2] : subjects[index] || "Estudo dirigido";
    });
    const selectedBlocks = dayBlocks(selectedDay);
    regionRefs.surface.querySelectorAll("[data-session-action]").forEach((action) => {
      const index = Number(action.dataset.sessionAction);
      const text = action.querySelector(".session-action-label");
      const done = selectedBlocks[index] === true;
      action.classList.toggle("is-complete", done);
      if (text) text.textContent = done ? "Concluído" : ["Estudar agora", "Próxima atividade", "Treinar questões"][index];
      action.setAttribute("aria-label", done ? "Bloco " + (index + 1) + " concluído; abrir conteúdo" : ["Estudar agora", "Próxima atividade", "Treinar questões"][index]);
      action.setAttribute("aria-pressed", done ? "true" : "false");
    });
    renderProgressMetrics();
    if (persist) {
      updateProgress((draft) => { draft.selectedDay = selectedDay; });
    }
  }

  function renderDashboard(focusTitle) {
    currentView = "today";
    appShell.dataset.view = "today";
    setHeaderMode("today");
    if (!heroSurface) buildHeroSurface();
    appView.replaceChildren(heroSurface);
    updateHeroDay(selectedDay, false);
    if (heroControls) {
      heroControls.today.onclick = () => {
        const start = parseDateKey(progress.startDate) || new Date();
        const offset = Math.floor(((parseDateKey(todayKey) || new Date()) - start) / 86400000) + 1;
        const today = Math.max(1, Math.min(90, offset));
        updateHeroDay(today, true);
      };
      heroControls.previous.onclick = () => {
        if (selectedDay > 1) updateHeroDay(selectedDay - 1, true);
      };
      heroControls.next.onclick = () => {
        if (selectedDay < 90) updateHeroDay(selectedDay + 1, true);
      };
    }
    regionRefs.routeStops.onclick = (event) => {
      const stop = event.target.closest("[data-select-day]");
      if (stop && !stop.disabled) updateHeroDay(Number(stop.dataset.selectDay), true);
    };
    if (topbarSection) topbarSection.textContent = "Hoje";
    if (focusTitle) regionRefs.headline.focus();
  }

  function pageShell(view, title, lead) {
    const page = el("section", "page-view page-" + view);
    page.dataset.page = view;
    const heading = el("header", "page-header");
    const h1 = el("h1", "page-title", title);
    h1.tabIndex = -1;
    h1.dataset.pageTitle = "true";
    heading.append(h1);
    if (lead) heading.append(el("p", "page-lead", lead));
    page.append(heading);
    return { page, heading, title: h1 };
  }

  function pageStatus(text, className) {
    return el("span", "status-tag " + (className || ""), text);
  }

  function externalLink(source, label) {
    if (!source || !source.url) return el("span", "text-muted", "Fonte oficial não vinculada neste módulo.");
    const link = el("a", "text-link", label || "Abrir fonte");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", (label || "Abrir fonte") + ": " + source.title + " (abre em nova aba)");
    return link;
  }

  function sourceFor(id) {
    return sourceById.get(id) || null;
  }

  function lessonListMatches(lesson) {
    const subjectMatch = lessonFilter === "Todas as matérias" || lesson.subject === lessonFilter;
    const search = normalizeText(lessonSearch.trim());
    const searchMatch = !search || normalizeText(lesson.title + " " + lesson.subject + " " + lesson.goal).includes(search);
    return subjectMatch && searchMatch;
  }

  function renderGlossaryView() {
    const view = el("section", "glossary-browser");
    view.setAttribute("aria-labelledby", "glossary-heading");
    view.append(el("h2", "glossary-heading", "Glossário em linguagem simples"));
    view.append(el("p", "glossary-intro", "Leia primeiro a tradução; use o exemplo para fixar e o cuidado para perceber o que costuma ser confundido. A fonte oficial continua sendo a referência final."));

    const controls = el("div", "glossary-controls");
    const searchLabel = el("label", "search-field");
    searchLabel.append(el("span", "field-label", "Buscar termo"));
    const search = el("input", "field-control");
    search.type = "search";
    search.id = "glossary-search";
    search.placeholder = "Ex.: fato gerador, multa, ativo…";
    search.autocomplete = "off";
    search.setAttribute("aria-label", "Buscar no glossário");
    searchLabel.append(search);

    const subjectLabel = el("label", "field-group");
    subjectLabel.append(el("span", "field-label", "Filtrar matéria"));
    const subjectSelect = el("select", "field-control");
    subjectSelect.setAttribute("aria-label", "Filtrar termos por matéria");
    const subjects = ["Todas as matérias", ...Array.from(new Set(glossary.map((term) => term.subject).filter(Boolean))).sort((a, b) => a.localeCompare(b, "pt-BR"))];
    subjects.forEach((subject) => {
      const option = el("option", "", subject);
      option.value = subject;
      subjectSelect.append(option);
    });
    subjectLabel.append(subjectSelect);
    controls.append(searchLabel, subjectLabel);
    view.append(controls);

    const count = el("p", "glossary-result-count", "");
    count.setAttribute("aria-live", "polite");
    const grid = el("div", "glossary-grid");
    const empty = el("div", "empty-state glossary-empty is-filtered-out");
    empty.append(el("strong", "", "Não encontrei esse termo"), el("p", "", "Tente outra palavra ou remova o filtro de matéria."));
    const cardRefs = [];

    [...glossary].sort((a, b) => a.term.localeCompare(b.term, "pt-BR")).forEach((term) => {
      const card = el("article", "glossary-entry");
      const head = el("div", "glossary-entry-head");
      head.append(el("h3", "", term.term));
      head.append(el("span", "glossary-subject", term.subject || "Conceito geral"));
      card.append(head);

      const simple = el("section", "glossary-definition");
      simple.append(el("span", "glossary-label", "EM PALAVRAS SIMPLES"), el("p", "", term.plain));
      card.append(simple);

      const example = el("section", "glossary-example");
      example.append(el("strong", "", "Exemplo"), el("p", "", term.example));
      card.append(example);

      if (term.caution) {
        const caution = el("section", "glossary-caution");
        caution.append(el("strong", "", "Cuidado com esta confusão"), el("p", "", term.caution));
        card.append(caution);
      }

      const meta = el("div", "glossary-entry-meta");
      if (term.reference) meta.append(el("span", "", term.reference));
      const source = sourceFor(term.source);
      if (source) meta.append(externalLink(source, "Conferir fonte"));
      card.append(meta);

      const lesson = lessonById.get((term.lessonIds || [])[0]);
      if (lesson) {
        const openLesson = button("Ver na apostila: " + lesson.title, "button-secondary glossary-open-lesson", "open-lesson");
        openLesson.dataset.lessonId = lesson.id;
        card.append(openLesson);
      }

      const searchable = [term.term, ...(term.aliases || []), term.subject, term.plain, term.example, term.caution, term.reference].join(" ");
      cardRefs.push({ card, subject: term.subject, searchable: normalizeText(searchable) });
      grid.append(card);
    });
    view.append(count, grid, empty);

    const applyFilters = () => {
      const query = normalizeText(search.value.trim());
      const subject = subjectSelect.value;
      let visibleCount = 0;
      cardRefs.forEach(({ card, subject: cardSubject, searchable }) => {
        const matches = (subject === "Todas as matérias" || subject === cardSubject) && (!query || searchable.includes(query));
        card.classList.toggle("is-filtered-out", !matches);
        if (matches) visibleCount += 1;
      });
      count.textContent = visibleCount + (visibleCount === 1 ? " termo" : " termos");
      empty.classList.toggle("is-filtered-out", visibleCount > 0);
    };
    search.addEventListener("input", applyFilters);
    subjectSelect.addEventListener("change", applyFilters);
    applyFilters();
    return view;
  }

  function renderLessonGlossary(lesson) {
    const relatedTerms = glossary.filter((term) => Array.isArray(term.lessonIds) && term.lessonIds.includes(lesson.id));
    if (!relatedTerms.length) return null;

    const section = el("section", "lesson-glossary");
    section.append(el("h3", "", "Tradução rápida dos termos"));
    section.append(el("p", "lesson-glossary-intro", "Uma primeira leitura em linguagem comum; depois, confira a definição e a fonte oficial."));
    const grid = el("div", "lesson-glossary-grid");
    relatedTerms.forEach((term) => {
      const card = el("article", "lesson-glossary-card");
      card.append(el("h4", "", term.term), el("p", "", term.plain));
      const details = el("details", "lesson-glossary-details");
      details.append(el("summary", "", "Ver exemplo e cuidado de prova"));
      details.append(el("p", "", term.example));
      if (term.caution) details.append(el("p", "glossary-inline-caution", term.caution));
      card.append(details);
      grid.append(card);
    });
    section.append(grid);
    return section;
  }

  function renderApostila(focusTitle) {
    currentView = "apostila";
    appShell.dataset.view = "apostila";
    setHeaderMode("apostila");
    const { page, title } = pageShell("apostila", "Apostila por matéria", "Resumos autorais para iniciar o estudo, com tradução didática dos termos técnicos, exemplos, armadilhas frequentes e fontes para conferir a norma.");
    const progressLine = el("div", "content-strip");
    progressLine.append(el("span", "strip-label", "TRILHA DE LEITURA"), el("strong", "", progress.readLessonIds.length + " de " + lessons.length + " módulos lidos"));
    const glossaryToggle = button(showGlossary ? "Voltar à apostila" : "Abrir glossário", "button-secondary glossary-toggle", "toggle-glossary");
    glossaryToggle.setAttribute("aria-expanded", showGlossary ? "true" : "false");
    progressLine.append(glossaryToggle);
    page.append(progressLine);

    if (showGlossary) {
      page.append(renderGlossaryView());
      appView.replaceChildren(page);
      if (focusTitle) title.focus();
      else appView.querySelector("#glossary-search")?.focus();
      return;
    }

    const layout = el("div", "lesson-layout");
    const index = el("aside", "lesson-index");
    index.setAttribute("aria-label", "Índice da apostila");
    const controls = el("div", "lesson-filters");
    const subjects = ["Todas as matérias", ...Array.from(new Set(lessons.map((lesson) => lesson.subject))).sort((a, b) => a.localeCompare(b, "pt-BR"))];
    const select = el("select", "field-control");
    select.setAttribute("aria-label", "Filtrar módulos por matéria");
    subjects.forEach((subject) => {
      const option = el("option", "", subject);
      option.value = subject;
      option.selected = subject === lessonFilter;
      select.append(option);
    });
    const searchWrap = el("label", "search-field");
    searchWrap.append(el("span", "field-label", "Buscar módulo"));
    const search = el("input", "field-control");
    search.type = "search";
    search.value = lessonSearch;
    search.placeholder = "Tema, matéria ou objetivo";
    search.autocomplete = "off";
    searchWrap.append(search);
    controls.append(select, searchWrap);
    index.append(controls);

    const list = el("div", "lesson-list");
    const matchingLessons = lessons.filter(lessonListMatches);
    if (!matchingLessons.some((lesson) => lesson.id === selectedLessonId)) selectedLessonId = matchingLessons[0]?.id || "";
    matchingLessons.forEach((lesson) => {
      const item = button("", "lesson-index-item" + (lesson.id === selectedLessonId ? " is-selected" : ""), "select-lesson");
      item.dataset.lessonId = lesson.id;
      item.setAttribute("aria-current", lesson.id === selectedLessonId ? "page" : "false");
      const read = progress.readLessonIds.includes(lesson.id);
      item.append(el("span", "lesson-index-state" + (read ? " is-read" : "")), el("span", "lesson-index-copy", lesson.title), el("span", "lesson-index-subject", lesson.subject));
      list.append(item);
    });
    if (!matchingLessons.length) {
      const empty = el("div", "empty-state");
      empty.append(el("strong", "", "Nenhum módulo encontrado"), el("p", "", "Ajuste a matéria ou tente outro termo."));
      list.append(empty);
    }
    index.append(list);

    const reader = el("article", "lesson-reader");
    const lesson = lessonById.get(selectedLessonId);
    if (lesson) {
      const lessonHead = el("header", "lesson-reader-head");
      lessonHead.append(el("h2", "lesson-title", lesson.title));
      lessonHead.append(el("p", "lesson-subject-meta", lesson.subject));
      lessonHead.append(el("p", "lesson-goal", lesson.goal));
      const wasRead = progress.readLessonIds.includes(lesson.id);
      lessonHead.append(pageStatus(wasRead ? "Lido" : "Leitura pendente", wasRead ? "is-complete" : ""));
      reader.append(lessonHead);

      const body = el("div", "lesson-body");
      (Array.isArray(lesson.body) ? lesson.body : []).forEach((paragraph) => body.append(el("p", "", paragraph)));
      reader.append(body);

      const termTranslations = renderLessonGlossary(lesson);
      if (termTranslations) reader.append(termTranslations);

      const example = el("section", "lesson-callout example-callout");
      example.append(el("h3", "", "Exemplo"));
      example.append(el("p", "", lesson.example || "Consulte a fonte indicada para um exemplo normativo."));
      reader.append(example);

      const traps = el("section", "lesson-callout traps-callout");
      traps.append(el("h3", "", "Erros comuns"));
      const trapList = el("ul", "");
      (lesson.traps || []).forEach((trap) => trapList.append(el("li", "", trap)));
      traps.append(trapList);
      reader.append(traps);

      const review = el("section", "lesson-review");
      review.append(el("h3", "", "Revisão ativa · " + (lesson.review || "Explique a regra com suas palavras.")));
      const reveal = button(showReviewAnswer ? "Ocultar resposta sugerida" : "Ver resposta sugerida", "button-secondary", "toggle-review");
      review.append(reveal);
      if (showReviewAnswer) review.append(el("p", "review-answer", lesson.reviewAnswer || "Consulte os fundamentos na fonte indicada."));
      reader.append(review);

      const source = sourceFor(lesson.source);
      const sourceArea = el("div", "source-line");
      sourceArea.append(el("span", "field-label", "LEITURA RECOMENDADA NA FONTE"));
      if (source) sourceArea.append(externalLink(source, source.title));
      else sourceArea.append(el("span", "text-muted", "Este módulo não tem link externo específico; revise o conteúdo autoral e confira a legislação vigente."));
      reader.append(sourceArea);

      const actions = el("div", "lesson-actions");
      const mark = button(wasRead ? "Módulo lido · atualizar revisão" : "Marcar leitura como concluída", "button-primary", "mark-lesson-read");
      mark.dataset.lessonId = lesson.id;
      const related = questions.filter((question) => question.lesson === lesson.id);
      const practice = button(`Treinar ${related.length} ${related.length === 1 ? "questão" : "questões"} deste módulo`, "button-secondary", "practice-lesson");
      practice.dataset.lessonId = lesson.id;
      practice.disabled = !related.length;
      actions.append(mark, practice);
      if (wasRead) {
        const reviewState = progress.reviews[lesson.id];
        const reviewText = reviewState?.dueAt
          ? "Próxima revisão: " + formatDate(dateKey(new Date(reviewState.dueAt)), { day: "2-digit", month: "long" }) + " · ciclo " + reviewIntervals[Math.min(reviewState.cycleIndex, 2)] + "d"
          : "Ciclos de revisão concluídos";
        actions.append(el("span", "review-due-label", reviewText));
      }
      reader.append(actions);
    } else {
      reader.append(el("div", "empty-state", "Selecione uma matéria ou termo para abrir um módulo."));
    }

    layout.append(index, reader);
    page.append(layout);
    appView.replaceChildren(page);
    select.addEventListener("change", () => {
      lessonFilter = select.value;
      renderApostila(false);
    });
    search.addEventListener("input", () => {
      lessonSearch = search.value;
      const start = search.selectionStart;
      renderApostila(false);
      const newSearch = appView.querySelector('input[type="search"]');
      if (newSearch) {
        newSearch.focus();
        try { newSearch.setSelectionRange(start, start); } catch {}
      }
    });
    if (focusTitle) title.focus();
  }

  function availableSubjects(items) {
    return Array.from(new Set(items.map((item) => item.subject))).sort((a, b) => a.localeCompare(b, "pt-BR"));
  }

  function makeCheckInput(id, checked, label, className) {
    const wrapper = el("label", "check-row " + (className || ""));
    const input = el("input", "check-input");
    input.type = "checkbox";
    input.id = id;
    input.checked = Boolean(checked);
    wrapper.append(input, el("span", "checkmark"), el("span", "check-copy", label));
    return { wrapper, input };
  }

  function getBlocksForDay(day) {
    return dayBlocks(day);
  }

  function updateCompletedBlock(day, index, checked) {
    updateProgress((draft) => {
      const key = String(day);
      if (!Array.isArray(draft.completedBlocks[key])) draft.completedBlocks[key] = [false, false, false];
      draft.completedBlocks[key][index] = Boolean(checked);
    });
  }

  function sessionLabelForDay(data, index) {
    if (index === 0) return data.topics[0] || "Estudo dirigido";
    if (index === 1) return data.topics[1] || "Questões de fixação";
    return data.sundayReview ? "Revisão acumulada + questões do banco" : "Revisão + questões do banco";
  }

  function dueReviewQueue() {
    return lessons.map((lesson) => ({ lesson, state: progress.reviews[lesson.id] }))
      .filter((item) => item.state && item.state.cycleIndex < reviewIntervals.length && validDateTime(item.state.dueAt) && dateKey(new Date(item.state.dueAt)) <= todayKey)
      .sort((a, b) => Date.parse(a.state.dueAt) - Date.parse(b.state.dueAt));
  }

  function upcomingReviewQueue() {
    return lessons.map((lesson) => ({ lesson, state: progress.reviews[lesson.id] }))
      .filter((item) => item.state && item.state.cycleIndex < reviewIntervals.length && validDateTime(item.state.dueAt) && dateKey(new Date(item.state.dueAt)) > todayKey)
      .sort((a, b) => Date.parse(a.state.dueAt) - Date.parse(b.state.dueAt));
  }

  function renderReview(focusTitle) {
    currentView = "review";
    appShell.dataset.view = "review";
    setHeaderMode("review");
    const { page, title } = pageShell("review", "Revisão ativa", "Tente responder de memória antes de abrir a resposta. Revisões vencidas aparecem primeiro; você decide se lembrou ou se precisa retomar amanhã.");
    const dueReviews = dueReviewQueue();
    const upcomingReviews = upcomingReviewQueue();
    const overdueCount = dueReviews.filter((item) => dateKey(new Date(item.state.dueAt)) < todayKey).length;
    const summary = el("div", "content-strip");
    summary.append(el("span", "strip-label", "FILA DE HOJE"), el("strong", "", dueReviews.length + (dueReviews.length === 1 ? " revisão" : " revisões")));
    if (overdueCount) summary.append(el("span", "", overdueCount + (overdueCount === 1 ? " atrasada" : " atrasadas")));
    page.append(summary);

    if (dueReviews.length) {
      const active = dueReviews.find((item) => item.lesson.id === selectedReviewLessonId) || dueReviews[0];
      selectedReviewLessonId = active.lesson.id;
      const activeDate = dateKey(new Date(active.state.dueAt));
      const card = el("section", "review-active-card");
      card.setAttribute("aria-labelledby", "review-active-title");
      const top = el("div", "review-active-top");
      top.append(pageStatus(activeDate < todayKey ? "Atrasada" : "Para hoje", activeDate < todayKey ? "is-overdue" : "is-review"));
      top.append(el("span", "review-active-subject", active.lesson.subject));
      card.append(top);
      const heading = el("h2", "review-active-title", active.lesson.title);
      heading.id = "review-active-title";
      card.append(heading, el("p", "review-active-prompt", active.lesson.review || "Explique a ideia principal com suas palavras."));
      const links = el("div", "review-active-actions");
      const openLesson = button("Abrir módulo na Apostila", "button-secondary", "open-lesson");
      openLesson.dataset.lessonId = active.lesson.id;
      links.append(openLesson);
      const relatedQuestions = questions.filter((question) => question.lesson === active.lesson.id);
      if (relatedQuestions.length) {
        const practice = button("Treinar " + relatedQuestions.length + " " + (relatedQuestions.length === 1 ? "questão" : "questões"), "button-secondary", "practice-lesson");
        practice.dataset.lessonId = active.lesson.id;
        links.append(practice);
      }
      card.append(links);
      const reveal = button(showActiveReviewAnswer ? "Ocultar resposta sugerida" : "Ver resposta sugerida", "button-secondary", "toggle-active-review-answer");
      reveal.setAttribute("aria-expanded", showActiveReviewAnswer ? "true" : "false");
      card.append(reveal);
      if (showActiveReviewAnswer) {
        card.append(el("p", "review-active-answer", active.lesson.reviewAnswer || "Consulte o módulo e a fonte oficial indicada."));
        const actions = el("div", "review-active-actions");
        const success = button("Lembrei", "button-primary", "complete-review");
        success.dataset.lessonId = active.lesson.id;
        const retry = button("Preciso rever amanhã", "button-secondary", "postpone-review");
        retry.dataset.lessonId = active.lesson.id;
        actions.append(success, retry);
        card.append(actions);
      }
      const activeSource = sourceFor(active.lesson.source);
      if (activeSource) {
        const sourceLine = el("div", "source-line");
        sourceLine.append(el("span", "field-label", "FONTE DE APOIO"), externalLink(activeSource, "Abrir fonte original"));
        card.append(sourceLine);
      }
      page.append(card);

      const queue = el("section", "review-queue");
      queue.append(el("h2", "", "Tópicos na fila"));
      const list = el("div", "review-queue-list");
      dueReviews.forEach((item) => {
        const date = dateKey(new Date(item.state.dueAt));
        const isSelected = item.lesson.id === active.lesson.id;
        const row = el("div", "review-queue-row" + (isSelected ? " is-selected" : ""));
        row.append(el("span", "", item.lesson.title));
        row.append(pageStatus(date < todayKey ? "Atrasada" : "Hoje", date < todayKey ? "is-overdue" : "is-review"));
        const select = button(isSelected ? "Em revisão" : "Revisar agora", "text-button", "select-active-review");
        select.dataset.lessonId = item.lesson.id;
        select.disabled = isSelected;
        row.append(select);
        list.append(row);
      });
      queue.append(list);
      page.append(queue);
    }

    if (!dueReviews.length) {
      selectedReviewLessonId = "";
      showActiveReviewAnswer = false;
    }

    if (upcomingReviews.length) {
      const section = el("section", "review-unscheduled");
      section.append(el("h2", "", "Próximas revisões"));
      section.append(el("p", "page-lead", "O ciclo segue os intervalos de 24 horas, 7 dias e 30 dias depois que você marca que lembrou."));
      const list = el("div", "review-unscheduled-list");
      upcomingReviews.forEach((item) => {
        const row = el("div", "review-unscheduled-row");
        const label = el("span", "");
        label.append(el("strong", "", item.lesson.title), el("small", "", item.lesson.subject));
        row.append(label, pageStatus(formatDate(dateKey(new Date(item.state.dueAt)), { day: "2-digit", month: "long" }), "is-review"));
        list.append(row);
      });
      section.append(list);
      page.append(section);
    }

    const unscheduled = lessons.filter((lesson) => !progress.reviews[lesson.id]);
    if (unscheduled.length) {
      const section = el("section", "review-unscheduled");
      section.append(el("h2", "", "Módulos para começar"));
      section.append(el("p", "page-lead", "Estude um módulo pela Apostila e marque a leitura concluída para iniciar o ciclo de revisão."));
      const list = el("div", "review-unscheduled-list");
      unscheduled.forEach((lesson) => {
        const row = el("div", "review-unscheduled-row");
        const label = el("span", "");
        label.append(el("strong", "", lesson.title), el("small", "", lesson.subject));
        const open = button("Estudar e agendar", "button-secondary", "open-unscheduled-review");
        open.dataset.lessonId = lesson.id;
        row.append(label, open);
        list.append(row);
      });
      section.append(list);
      page.append(section);
    }
    if (!dueReviews.length && !upcomingReviews.length && !unscheduled.length) {
      page.append(el("div", "empty-state", "Nenhuma revisão vence hoje e todos os módulos já concluíram o ciclo."));
    }
    appView.replaceChildren(page);
    if (focusTitle) title.focus();
  }

  function renderPlan(focusTitle) {
    currentView = "plan";
    appShell.dataset.view = "plan";
    setHeaderMode("plan");
    const { page, title } = pageShell("plan", "Sua rota de 90 dias", "Plano indicativo pré-edital: 12 semanas e uma última semana de seis dias. O último dia de cada ciclo semanal fica para revisão; escolha uma segunda-feira para que essa revisão caia no domingo.");
    const banner = el("div", "notice-banner");
    banner.append(el("strong", "", "Carga diária: 3 horas"), el("span", "", "75 min + 75 min + 30 min. No último dia do ciclo semanal: revisão acumulada e simulado curto."));
    const bannerNote = el("p", "notice-note", "Base fiscal comum e ICMS/BA. Administração Tributária aparece como referência histórica do edital de 2019; o próximo programa ainda é desconhecido.");
    banner.append(bannerNote);
    page.append(banner);

    const topControls = el("div", "plan-toolbar");
    const startLabel = el("label", "date-field");
    startLabel.append(el("span", "field-label", "Início do plano"));
    const startInput = el("input", "field-control");
    startInput.type = "date";
    startInput.value = progress.startDate;
    startInput.setAttribute("aria-label", "Data de início do plano");
    startLabel.append(startInput);
    const goToday = button("Selecionar o dia de hoje", "button-secondary", "plan-today");
    topControls.append(startLabel, goToday);
    page.append(topControls);

    const planLayout = el("div", "plan-layout");
    const weeksRail = el("nav", "weeks-rail");
    weeksRail.setAttribute("aria-label", "Semanas do plano");
    for (let weekIndex = 0; weekIndex < 13; weekIndex += 1) {
      const week = weeks[weekIndex] || { title: weekIndex === 12 ? "Fechamento e revisão" : "Semana " + (weekIndex + 1), phase: "Plano indicativo" };
      const startDay = weekIndex * 7 + 1;
      const endDay = Math.min(90, startDay + (weekIndex === 12 ? 5 : 6));
      const current = selectedDay >= startDay && selectedDay <= endDay;
      const section = el("section", "week-group" + (current ? " is-current" : ""));
      const head = el("div", "week-group-head");
      head.append(el("span", "week-index", "SEMANA " + String(weekIndex + 1).padStart(2, "0")), el("strong", "", week.title));
      head.append(el("span", "week-theme", (week.phase || "Plano") + " · " + (week.theme || (weekIndex === 12 ? "6 dias de fechamento" : "6 tópicos + revisão"))));
      section.append(head);
      const daysGrid = el("div", "week-days-grid");
      for (let day = startDay; day <= endDay; day += 1) {
        const data = getDayData(day);
        const selected = day === selectedDay;
        const dayButton = button("", "day-route-button" + (selected ? " is-selected" : ""), "select-plan-day");
        dayButton.dataset.day = String(day);
        dayButton.setAttribute("aria-current", selected ? "date" : "false");
        dayButton.append(el("span", "day-route-number", "D" + String(day).padStart(2, "0")), el("span", "day-route-name", data.sundayReview ? "Revisão" : data.subjects[0] || "Estudo"));
        const doneCount = getBlocksForDay(day).filter(Boolean).length;
        dayButton.append(el("span", "day-route-state", doneCount + "/3 blocos"));
        daysGrid.append(dayButton);
      }
      section.append(daysGrid);
      weeksRail.append(section);
    }

    const detail = el("section", "day-detail");
    detail.setAttribute("aria-label", "Detalhes do dia selecionado");
    const data = getDayData(selectedDay);
    const detailHead = el("header", "day-detail-head");
    detailHead.append(el("h2", "", data.headline.replace(" · ", " — ")));
    detailHead.append(el("p", "detail-date", "Semana " + data.weekNumber + " · " + formatDate(data.date, { weekday: "long", day: "numeric", month: "long", year: "numeric" })));
    detail.append(detailHead);

    const selectedDayBlocks = getBlocksForDay(data.day);
    const checklist = el("div", "study-blocks");
    for (let index = 0; index < 3; index += 1) {
      const label = sessionLabelForDay(data, index);
      const row = el("article", "study-block" + (selectedDayBlocks[index] ? " is-complete" : ""));
      const check = makeCheckInput("block-" + data.day + "-" + index, selectedDayBlocks[index], label, "study-block-check");
      check.input.dataset.blockDay = String(data.day);
      check.input.dataset.blockIndex = String(index);
      row.append(check.wrapper);
      row.append(el("span", "block-duration", blockMinutes[index] + " min"));
      const topic = index < 2 ? data.topics[index] : "";
      const lesson = topic ? findLessonForTopic(topic) : null;
      if (lesson) {
        const lessonButton = button("Abrir módulo", "text-button", "open-lesson");
        lessonButton.dataset.lessonId = lesson.id;
        row.append(lessonButton);
      } else if (index === 2) {
        row.append(button("Abrir questões", "text-button", "open-questions"));
      }
      checklist.append(row);
    }
    detail.append(checklist);

    const daySummary = el("div", "day-summary-strip");
    const minutes = progress.studyMinutesByDay[String(data.day)] || 0;
    daySummary.append(el("strong", "", minutes + " de 180 min concluídos"));
    daySummary.append(el("span", "", selectedDayBlocks.every(Boolean) ? "Dia concluído" : "Marque cada bloco ao terminar"));
    detail.append(daySummary);

    planLayout.append(weeksRail, detail);
    page.append(planLayout);
    const reviewCycles = el("section", "review-cycles");
    reviewCycles.append(el("h2", "", "Ciclo de revisão espaçada"));
    reviewCycles.append(el("p", "", "Ao marcar um módulo como lido, ele entra nas revisões de 24 horas, 7 dias e 30 dias. As datas são lembretes locais."));
    const reviewList = el("div", "review-list");
    const dueReviews = lessons.map((lesson) => ({ lesson, state: progress.reviews[lesson.id] })).filter((item) => item.state && item.state.dueAt);
    if (!dueReviews.length) {
      reviewList.append(el("p", "empty-inline", "Nenhuma revisão agendada ainda. Marque um módulo como lido na Apostila."));
    } else {
      dueReviews.sort((a, b) => Date.parse(a.state.dueAt) - Date.parse(b.state.dueAt)).forEach((item) => {
        const row = el("div", "review-row");
        const label = el("span", "", item.lesson.title);
        const date = dateKey(new Date(item.state.dueAt));
        const due = date <= todayKey;
        row.append(label, pageStatus((due ? "Venceu · " : "Próxima · ") + formatDate(date, { day: "2-digit", month: "short" }), due ? "is-overdue" : "is-review"));
        const reviewDone = button("Concluir revisão", "button-secondary", "complete-review");
        reviewDone.dataset.lessonId = item.lesson.id;
        row.append(reviewDone);
        reviewList.append(row);
      });
    }
    reviewCycles.append(reviewList);
    page.append(reviewCycles);

    appView.replaceChildren(page);
    checklist.addEventListener("change", (event) => {
      const input = event.target.closest("[data-block-day]");
      if (!input) return;
      updateCompletedBlock(Number(input.dataset.blockDay), Number(input.dataset.blockIndex), input.checked);
      const row = input.closest(".study-block");
      if (row) row.classList.toggle("is-complete", input.checked);
      const nowBlocks = dayBlocks(data.day);
      const summary = page.querySelector(".day-summary-strip");
      if (summary) {
        summary.querySelector("strong").textContent = (progress.studyMinutesByDay[String(data.day)] || 0) + " de 180 min concluídos";
        summary.querySelector("span").textContent = nowBlocks.every(Boolean) ? "Dia concluído" : "Marque cada bloco ao terminar";
      }
    });
    startInput.addEventListener("change", () => {
      const startDate = parseDateKey(startInput.value);
      if (!startDate) {
        showToast("Informe uma data válida para iniciar o plano.");
        startInput.value = progress.startDate;
        return;
      }
      updateProgress((draft) => { draft.startDate = dateKey(startDate); });
      renderPlan(false);
    });
    goToday.addEventListener("click", () => {
      const start = parseDateKey(progress.startDate) || new Date();
      const offset = Math.floor(((parseDateKey(todayKey) || new Date()) - start) / 86400000) + 1;
      const day = Math.max(1, Math.min(90, offset));
      updateProgress((draft) => { draft.selectedDay = day; });
      renderPlan(false);
    });
    if (focusTitle) title.focus();
  }

  function markLessonRead(id) {
    if (!lessonIds.has(id)) return;
    updateProgress((draft) => {
      if (!draft.readLessonIds.includes(id)) draft.readLessonIds.push(id);
      draft.reviews[id] = {
        completedAt: new Date().toISOString(),
        completedCycles: [],
        cycleIndex: 0,
        retryAt: null
      };
    });
    showToast("Leitura marcada. Revisões de 24h, 7d e 30d agendadas neste navegador.");
    renderApostila(false);
  }

  function markReviewComplete(id) {
    const state = progress.reviews[id];
    if (!state || state.cycleIndex >= reviewIntervals.length) {
      showToast("Este módulo não tem revisão pendente.");
      return;
    }
    updateProgress((draft) => {
      const review = draft.reviews[id];
      const cycle = reviewIntervals[review.cycleIndex];
      if (!review.completedCycles.includes(cycle)) review.completedCycles.push(cycle);
      review.cycleIndex += 1;
      review.completedAt = new Date().toISOString();
      review.retryAt = null;
    });
    showToast("Revisão concluída. A próxima data foi atualizada.");
    showActiveReviewAnswer = false;
    if (currentView === "plan") renderPlan(false);
    if (currentView === "apostila") renderApostila(false);
    if (currentView === "review") renderReview(false);
  }

  function postponeReview(id) {
    const review = progress.reviews[id];
    if (!review || review.cycleIndex >= reviewIntervals.length) return;
    const tomorrow = new Date(Date.now() + 86400000).toISOString();
    updateProgress((draft) => { draft.reviews[id].retryAt = tomorrow; });
    showToast("Revisão adiada para amanhã.");
    showActiveReviewAnswer = false;
    if (currentView === "review") renderReview(false);
  }

  function renderQuestions(focusTitle) {
    currentView = "questions";
    appShell.dataset.view = "questions";
    setHeaderMode("questions");
    if (questionMode === "simulation") {
      renderSimulation(focusTitle);
      return;
    }
    const { page, title } = pageShell("questions", "Treine com o banco local", "Questões autorais de múltipla escolha. Cada tentativa registra a alternativa marcada e explica o fundamento; não são questões atribuídas a bancas.");
    const modeSwitch = el("div", "question-mode-switch");
    modeSwitch.append(button("Treino livre", "mode-tab is-selected", "mode-practice"), button(progress.activeSimulation ? "Retomar simulado" : "Simulado curto", "mode-tab", "mode-simulation"));
    page.append(modeSwitch);
    const stats = el("div", "content-strip question-progress-strip");
    const answered = answeredQuestionCount();
    stats.append(el("span", "strip-label", onlyWrongQuestions ? "REFAZER ERROS" : "BANCO LOCAL"), el("strong", "", answered + "/" + questions.length + " respondidas"), el("span", "", progress.wrongQuestionIds.length + " com erro na última tentativa"));
    page.append(stats);

    const filters = el("div", "question-filters");
    const modeLabel = el("label", "toggle-filter");
    const mode = el("input", "");
    mode.type = "checkbox";
    mode.checked = onlyWrongQuestions;
    mode.setAttribute("aria-label", "Mostrar apenas questões respondidas incorretamente");
    modeLabel.append(mode, el("span", "", "Refazer apenas erros"));
    const subjectLabel = el("label", "field-group");
    subjectLabel.append(el("span", "field-label", "Matéria"));
    const subjectSelect = el("select", "field-control");
    subjectSelect.setAttribute("aria-label", "Filtrar questões por matéria");
    ["Todas as matérias", ...availableSubjects(questions)].forEach((subject) => {
      const option = el("option", "", subject);
      option.value = subject;
      option.selected = subject === questionSubjectFilter;
      subjectSelect.append(option);
    });
    subjectLabel.append(subjectSelect);
    filters.append(modeLabel, subjectLabel);
    page.append(filters);

    let filtered = questions.filter((question) => questionSubjectFilter === "Todas as matérias" || question.subject === questionSubjectFilter);
    if (onlyWrongQuestions) filtered = filtered.filter((question) => progress.wrongQuestionIds.includes(question.id));
    if (lessonQuestionFilter) filtered = filtered.filter((question) => question.lesson === lessonQuestionFilter);
    if (!filtered.some((question) => question.id === selectedQuestionId)) selectedQuestionId = filtered[0]?.id || "";
    const selected = questionById.get(selectedQuestionId);
    const workspace = el("div", "question-workspace");
    const list = el("nav", "question-list");
    list.setAttribute("aria-label", "Lista de questões");
    const filteredQuestionIds = new Set(filtered.map((question) => question.id));
    if (!filtered.length) {
      const empty = el("div", "empty-state");
      empty.append(el("strong", "", onlyWrongQuestions ? "Nenhum erro registrado" : "Nenhuma questão encontrada"), el("p", "", onlyWrongQuestions ? "Responda uma questão incorretamente para ela aparecer aqui." : "Remova filtros ou selecione outra matéria."));
      list.append(empty);
    }
    filtered.forEach((question, index) => {
      const item = button("", "question-list-item" + (question.id === selectedQuestionId ? " is-selected" : ""), "select-question");
      item.dataset.questionId = question.id;
      const answer = progress.answersByQuestion[question.id];
      item.append(el("span", "question-list-number", "Q" + String(index + 1).padStart(2, "0")));
      item.append(el("span", "question-list-subject", question.subject));
      item.append(el("span", "question-list-state", answer ? (answer.correct ? "Correta" : "Rever") : "Nova"));
      list.append(item);
    });
    workspace.append(list);

    const panel = el("article", "question-panel");
    if (selected) {
      const answerState = progress.answersByQuestion[selected.id];
      const questionHeader = el("header", "question-panel-head");
      questionHeader.append(el("p", "question-subject-meta", selected.subject));
      questionHeader.append(el("p", "question-count", "QUESTÃO " + String(questions.indexOf(selected) + 1).padStart(2, "0") + " / " + String(questions.length).padStart(2, "0")));
      panel.append(el("h2", "question-prompt", selected.prompt), questionHeader);
      const form = el("form", "answer-form");
      form.noValidate = true;
      const fieldset = el("fieldset", "answer-options");
      const legend = el("legend", "sr-only", "Escolha uma alternativa");
      fieldset.append(legend);
      selected.options.forEach((optionText, index) => {
        const label = el("label", "answer-option" + (answerState && answerState.option === index ? (answerState.correct ? " is-correct" : " is-wrong") : ""));
        const input = el("input", "");
        input.type = "radio";
        input.name = "answer-" + selected.id;
        input.value = String(index);
        input.checked = Boolean(answerState && answerState.option === index);
        input.required = true;
        label.append(input, el("span", "answer-letter", String.fromCharCode(65 + index)), el("span", "answer-copy", optionText));
        fieldset.append(label);
      });
      form.append(fieldset);
      const formActions = el("div", "answer-actions");
      const submit = el("button", "button-primary", answerState ? "Confirmar nova tentativa" : "Confirmar resposta");
      submit.type = "submit";
      formActions.append(submit);
      const attemptCount = answerState ? el("span", "attempt-count", "Tentativas: " + answerState.attempts) : el("span", "attempt-count", "Treino sem tempo limite");
      formActions.append(attemptCount);
      form.append(formActions);
      if (answerState) {
        const correct = answerState.correct;
        const feedback = el("section", "answer-feedback " + (correct ? "is-correct" : "is-wrong"));
        feedback.setAttribute("aria-live", "polite");
        feedback.append(el("strong", "", correct ? "Resposta correta" : "Revise este ponto"));
        feedback.append(el("p", "", selected.explanation || "Releia o módulo relacionado e confira a fonte indicada."));
        const source = sourceFor(selected.source);
        if (source) feedback.append(externalLink(source, "Conferir " + source.title));
        feedback.append(el("span", "attempt-count", "Respondida em " + formatDate(dateKey(new Date(answerState.answeredAt)), { day: "2-digit", month: "short" })));
        form.append(feedback);
      }
      panel.append(form);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const choice = form.querySelector('input[type="radio"]:checked');
        if (!choice) {
          showToast("Selecione uma alternativa antes de confirmar.");
          return;
        }
        recordAnswer(selected, Number(choice.value));
        renderQuestions(false);
      });
    } else {
      const empty = el("div", "empty-state");
      empty.append(el("strong", "", "Sem questões para exibir"), el("p", "", "Retire o filtro de erros ou selecione outra matéria para continuar."));
      const allQuestions = button("Mostrar todas as questões", "button-secondary", "show-all-questions");
      panel.append(empty, allQuestions);
    }
    workspace.append(panel);
    const pager = el("div", "question-pager");
    const previous = button("Questão anterior", "button-secondary", "previous-question");
    const next = button("Próxima questão", "button-secondary", "next-question");
    previous.disabled = !selected || filtered.indexOf(selected) <= 0;
    next.disabled = !selected || filtered.indexOf(selected) >= filtered.length - 1;
    pager.append(previous, next);
    panel.append(pager);
    page.append(workspace);
    if (lessonQuestionFilter) {
      const lesson = lessonById.get(lessonQuestionFilter);
      const clear = button("Limpar filtro do módulo", "text-button", "clear-lesson-filter");
      const info = el("div", "filter-context");
      info.append(el("span", "", "Questões ligadas a: " + (lesson ? lesson.title : "módulo selecionado")), clear);
      page.insertBefore(info, workspace);
    }
    appView.replaceChildren(page);

    mode.addEventListener("change", () => {
      onlyWrongQuestions = mode.checked;
      renderQuestions(false);
    });
    subjectSelect.addEventListener("change", () => {
      questionSubjectFilter = subjectSelect.value;
      renderQuestions(false);
    });
    if (focusTitle) title.focus();
  }

  function renderSimulation(focusTitle) {
    currentView = "questions";
    appShell.dataset.view = "questions";
    setHeaderMode("questions");
    const { page, title } = pageShell("questions", "Simulado de 10 questões", "Faça uma rodada curta sem ver comentários entre as respostas. Ao concluir, o total e os acertos ficam registrados no seu progresso local.");
    const modeSwitch = el("div", "question-mode-switch");
    modeSwitch.append(button("Treino livre", "mode-tab", "mode-practice"), button("Simulado curto", "mode-tab is-selected", "mode-simulation"));
    page.append(modeSwitch);

    const history = progress.simulations || [];
    const latest = history[0];
    const stats = el("div", "content-strip simulation-stats");
    stats.append(el("span", "strip-label", "HISTÓRICO LOCAL"));
    stats.append(el("strong", "", latest ? (latest.correct + "/" + latest.total + " acertos") : "Nenhum simulado concluído"));
    stats.append(el("span", "", history.length + " rodada" + (history.length === 1 ? "" : "s") + " registrada" + (history.length === 1 ? "" : "s")));
    page.append(stats);

    const active = progress.activeSimulation;
    if (!active) {
      const startPanel = el("section", "simulation-start-panel");
      startPanel.append(el("h2", "", "Treino curto · 10 questões sem comentários entre respostas"));
      startPanel.append(el("p", "", "O simulado mistura matérias do banco local. O tempo é livre; o cronograma reserva o último dia de cada ciclo semanal para revisão acumulada e simulado curto. Escolha uma segunda-feira como início para que esse dia seja domingo."));
      startPanel.append(button("Iniciar simulado curto", "button-primary", "start-simulation"));
      if (latest) startPanel.append(el("p", "simulation-last-result", "Última rodada: " + latest.correct + " de " + latest.total + " acertos · " + formatDate(dateKey(new Date(latest.completedAt)), { day: "2-digit", month: "long", year: "numeric" }) + "."));
      page.append(startPanel);
    } else {
      const question = questionById.get(active.questionIds[active.cursor]);
      if (question) {
        const progressLine = el("div", "simulation-progress-line");
        progressLine.append(el("strong", "", "Questão " + (active.cursor + 1) + " de " + active.questionIds.length));
        progressLine.append(el("span", "", Object.keys(active.choices).length + " resposta" + (Object.keys(active.choices).length === 1 ? " registrada" : "s registradas")));
        page.append(progressLine);
        const panel = el("article", "question-panel simulation-panel");
        const questionHeader = el("header", "question-panel-head");
        questionHeader.append(el("p", "question-subject-meta", question.subject));
        questionHeader.append(el("p", "question-count", "SIMULADO · SEM COMENTÁRIOS INTERMEDIÁRIOS"));
        panel.append(el("h2", "question-prompt", question.prompt));
        panel.append(questionHeader);
        const form = el("form", "answer-form");
        form.noValidate = true;
        const fieldset = el("fieldset", "answer-options");
        fieldset.append(el("legend", "sr-only", "Escolha uma alternativa"));
        const currentChoice = active.choices[question.id];
        question.options.forEach((optionText, index) => {
          const label = el("label", "answer-option");
          const input = el("input", "");
          input.type = "radio";
          input.name = "simulation-answer-" + question.id;
          input.value = String(index);
          input.checked = currentChoice === index;
          input.required = true;
          label.append(input, el("span", "answer-letter", String.fromCharCode(65 + index)), el("span", "answer-copy", optionText));
          fieldset.append(label);
        });
        form.append(fieldset);
        const actions = el("div", "answer-actions");
        const previous = button("Anterior", "button-secondary", "simulation-previous");
        previous.disabled = active.cursor === 0;
        const submit = el("button", "button-primary", active.cursor === active.questionIds.length - 1 ? "Finalizar simulado" : "Salvar e avançar");
        submit.type = "submit";
        actions.append(previous, submit, button("Encerrar rodada", "text-button", "simulation-abandon"));
        form.append(actions);
        form.addEventListener("submit", (event) => {
          event.preventDefault();
          const choice = form.querySelector('input[type="radio"]:checked');
          if (!choice) {
            showToast("Selecione uma alternativa para avançar.");
            return;
          }
          saveSimulationAnswer(question, Number(choice.value));
        });
        panel.append(form, el("p", "simulation-privacy-note", "As respostas só entram no histórico de questões quando você finalizar a rodada."));
        page.append(panel);
      }
    }

    if (history.length) {
      const table = el("section", "simulation-history");
      table.append(el("h2", "", "Rodadas concluídas"));
      const list = el("ol", "simulation-history-list");
      history.forEach((item, index) => {
        const row = el("li", "simulation-history-item");
        row.append(el("span", "simulation-history-number", String(index + 1).padStart(2, "0")));
        row.append(el("span", "", formatDate(dateKey(new Date(item.completedAt)), { day: "2-digit", month: "short", year: "numeric" })));
        row.append(el("strong", "", item.correct + "/" + item.total + " acertos"));
        list.append(row);
      });
      table.append(list);
      page.append(table);
    }
    appView.replaceChildren(page);
    if (focusTitle) title.focus();
  }

  function startSimulation() {
    if (progress.activeSimulation) {
      showToast("Há um simulado em andamento. Você pode retomá-lo nesta tela.");
      renderQuestions(false);
      return;
    }
    const pool = questions.slice();
    for (let index = pool.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
    }
    const selected = pool.slice(0, Math.min(10, pool.length));
    if (!selected.length) {
      showToast("O banco ainda não tem questões para iniciar um simulado.");
      return;
    }
    updateProgress((draft) => {
      draft.activeSimulation = {
        id: "sim-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8),
        questionIds: selected.map((question) => question.id),
        cursor: 0,
        choices: {},
        startedAt: new Date().toISOString()
      };
    });
    questionMode = "simulation";
    renderQuestions(false);
  }

  function saveSimulationAnswer(question, option) {
    const active = progress.activeSimulation;
    if (!active) return;
    const finalQuestion = active.cursor >= active.questionIds.length - 1;
    updateProgress((draft) => {
      const simulation = draft.activeSimulation;
      if (!simulation) return;
      simulation.choices[question.id] = option;
      if (!finalQuestion) {
        simulation.cursor += 1;
        return;
      }
      const completedAt = new Date().toISOString();
      let correct = 0;
      simulation.questionIds.forEach((id) => {
        const item = questionById.get(id);
        const chosen = simulation.choices[id];
        const isCorrect = Number(chosen) === Number(item.answer);
        if (isCorrect) correct += 1;
        const previous = draft.answersByQuestion[id];
        draft.answersByQuestion[id] = {
          option: chosen,
          correct: isCorrect,
          answeredAt: completedAt,
          attempts: previous ? previous.attempts + 1 : 1
        };
      });
      draft.simulations.unshift({
        id: simulation.id,
        startedAt: simulation.startedAt,
        completedAt,
        total: simulation.questionIds.length,
        correct
      });
      draft.simulations = draft.simulations.slice(0, 30);
      draft.activeSimulation = null;
    });
    if (finalQuestion) {
      questionMode = "simulation";
      showToast("Simulado finalizado. O total de acertos foi salvo; abra o treino para ver os comentários.");
    }
    renderQuestions(false);
  }

  function abandonSimulation() {
    if (!progress.activeSimulation) return;
    if (!window.confirm("Encerrar este simulado sem registrar as respostas no histórico?")) return;
    updateProgress((draft) => { draft.activeSimulation = null; });
    showToast("Rodada encerrada sem registro de resultado.");
    renderQuestions(false);
  }

  function recordAnswer(question, option) {
    const previous = progress.answersByQuestion[question.id];
    updateProgress((draft) => {
      draft.answersByQuestion[question.id] = {
        option,
        correct: option === Number(question.answer),
        answeredAt: new Date().toISOString(),
        attempts: previous ? previous.attempts + 1 : 1
      };
    });
    showToast(option === Number(question.answer) ? "Resposta correta. Fundamento e fonte estão logo abaixo." : "Erro registrado para refazer na fila de revisão.");
  }

  function moveQuestion(filtered, direction) {
    const index = filtered.findIndex((question) => question.id === selectedQuestionId);
    const next = filtered[index + direction];
    if (!next) return;
    selectedQuestionId = next.id;
    renderQuestions(false);
  }

  function elapsedEssaySeconds() {
    return essayTimerBaseSeconds + (essayTimerStartedAt ? Math.floor((Date.now() - essayTimerStartedAt) / 1000) : 0);
  }

  function formatTimer(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainder = seconds % 60;
    return [hours, minutes, remainder].map((value) => String(value).padStart(2, "0")).join(":");
  }

  function currentRubricChecks() {
    const checks = {};
    rubricKeys.forEach((key) => {
      const input = appView.querySelector('[data-rubric="' + key + '"]');
      checks[key] = Boolean(input && input.checked);
    });
    return checks;
  }

  function currentEssayText() {
    const textarea = appView.querySelector("#essay-draft");
    return textarea ? textarea.value.slice(0, 30000) : (progress.drafts[selectedCaseId]?.text || "");
  }

  function saveEssayDraft() {
    if (currentView !== "essay" || !caseById.has(selectedCaseId)) return;
    window.clearTimeout(draftSaveTimer);
    const status = appView.querySelector("#draft-save-status");
    if (status) status.textContent = "Salvando…";
    const text = currentEssayText();
    const checks = currentRubricChecks();
    const seconds = elapsedEssaySeconds();
    updateProgress((draft) => {
      draft.drafts[selectedCaseId] = {
        text,
        updatedAt: new Date().toISOString(),
        elapsedSeconds: seconds,
        checks,
        score: rubricKeys.filter((key) => checks[key]).length
      };
    });
    if (status) status.textContent = "Rascunho salvo neste navegador · " + new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date());
  }

  function scheduleEssaySave() {
    const status = appView.querySelector("#draft-save-status");
    if (status) status.textContent = "Alterações não salvas";
    window.clearTimeout(draftSaveTimer);
    draftSaveTimer = window.setTimeout(saveEssayDraft, 500);
  }

  function stopEssayTimer(save) {
    if (essayTimerStartedAt) {
      essayTimerBaseSeconds = elapsedEssaySeconds();
      essayTimerStartedAt = 0;
    }
    window.clearInterval(essayTimerInterval);
    essayTimerInterval = 0;
    const buttonElement = appView.querySelector('[data-action="toggle-timer"]');
    if (buttonElement) buttonElement.textContent = "Iniciar cronômetro";
    if (save && currentView === "essay") saveEssayDraft();
  }

  function startEssayTimer() {
    if (essayTimerStartedAt) {
      stopEssayTimer(true);
      return;
    }
    essayTimerStartedAt = Date.now();
    const buttonElement = appView.querySelector('[data-action="toggle-timer"]');
    if (buttonElement) buttonElement.textContent = "Pausar cronômetro";
    const tick = () => {
      const display = appView.querySelector("#essay-timer-value");
      if (display) display.textContent = formatTimer(elapsedEssaySeconds());
      const activeCase = caseById.get(selectedCaseId);
      const status = appView.querySelector("#essay-timer-note");
      if (activeCase && status && elapsedEssaySeconds() >= activeCase.duration * 60) status.textContent = "Tempo sugerido atingido; você pode continuar.";
      if (elapsedEssaySeconds() % 5 === 0) scheduleEssaySave();
    };
    tick();
    essayTimerInterval = window.setInterval(tick, 1000);
  }

  function renderEssay(focusTitle) {
    currentView = "essay";
    appShell.dataset.view = "essay";
    setHeaderMode("essay");
    const { page, title } = pageShell("essay", "Escreva um estudo de caso", "Propostas originais para treinar análise, fundamento e comunicação. O cronômetro, rascunho e autoavaliação ficam salvos apenas neste navegador.");
    const notice = el("div", "notice-banner essay-notice");
    notice.append(el("strong", "", "Treino formativo · critérios próprios"), el("span", "", "O edital futuro definirá o gênero, limites e critérios reais da prova."));
    page.append(notice);

    const casePicker = el("div", "case-picker-wrap");
    const caseLabel = el("label", "field-group");
    caseLabel.append(el("span", "field-label", "Selecione uma proposta"));
    const caseSelect = el("select", "field-control");
    caseSelect.setAttribute("aria-label", "Selecionar caso discursivo");
    cases.forEach((caseItem) => {
      const option = el("option", "", caseItem.title);
      option.value = caseItem.id;
      option.selected = caseItem.id === selectedCaseId;
      caseSelect.append(option);
    });
    caseLabel.append(caseSelect);
    casePicker.append(caseLabel);
    page.append(casePicker);

    const caseItem = caseById.get(selectedCaseId) || cases[0];
    if (!caseItem) {
      page.append(el("div", "empty-state", "Ainda não há propostas discursivas cadastradas."));
      appView.replaceChildren(page);
      if (focusTitle) title.focus();
      return;
    }
    const caseDraft = progress.drafts[caseItem.id] || { text: "", elapsedSeconds: 0, checks: {}, score: 0 };
    essayTimerBaseSeconds = caseDraft.elapsedSeconds || 0;
    const caseHeader = el("div", "case-heading");
    caseHeader.append(el("h2", "", caseItem.title));
    caseHeader.append(el("p", "case-area-meta", caseItem.area || "Estudo de caso"));
    caseHeader.append(el("p", "case-prompt", caseItem.prompt));
    page.append(caseHeader);

    const caseLayout = el("div", "essay-layout");
    const editor = el("section", "essay-editor");
    editor.append(el("h3", "", "Seu rascunho"));
    const timer = el("div", "essay-timer");
    const timerDisplay = el("output", "timer-value", formatTimer(essayTimerBaseSeconds));
    timerDisplay.id = "essay-timer-value";
    timerDisplay.setAttribute("aria-live", "off");
    const timerControls = el("div", "timer-controls");
    timerControls.append(button("Iniciar cronômetro", "button-secondary", "toggle-timer"), button("Zerar", "text-button", "reset-timer"));
    const timerNote = el("p", "timer-note", "Tempo sugerido: " + caseItem.duration + " minutos. Treino sem padrão oficial de duração.");
    timerNote.id = "essay-timer-note";
    timer.append(timerDisplay, timerControls, timerNote);
    editor.append(timer);

    const textareaLabel = el("label", "field-group essay-input-label");
    textareaLabel.append(el("span", "field-label", "Redação do caso"));
    const textarea = el("textarea", "essay-textarea");
    textarea.id = "essay-draft";
    textarea.maxLength = 30000;
    textarea.placeholder = "Escreva uma resposta completa: apresente o problema, fundamente, aplique a regra aos fatos e conclua com limites claros.";
    textarea.value = caseDraft.text || "";
    textarea.setAttribute("aria-describedby", "essay-word-count draft-save-status");
    textareaLabel.append(textarea);
    editor.append(textareaLabel);
    const textMeta = el("div", "essay-meta");
    const wordCount = el("span", "", "0 palavras");
    wordCount.id = "essay-word-count";
    const saveStatus = el("span", "save-status", "Rascunho salvo neste navegador");
    saveStatus.id = "draft-save-status";
    textMeta.append(wordCount, saveStatus);
    editor.append(textMeta);
    caseLayout.append(editor);

    const guide = el("aside", "essay-guide");
    guide.append(el("h3", "", "Estrutura de resposta"));
    const outline = el("ol", "response-outline");
    ["Apresente a questão e delimite os fatos conhecidos.", "Indique as normas e os fundamentos que se aplicam.", "Relacione cada regra aos elementos do caso.", "Conclua com encaminhamento e ressalvas sobre o que falta confirmar."].forEach((step) => outline.append(el("li", "", step)));
    guide.append(outline);
    guide.append(el("h3", "guide-subhead", "Pontos do enunciado"));
    const steps = el("ol", "case-steps");
    (caseItem.steps || []).forEach((step) => steps.append(el("li", "", step)));
    guide.append(steps);
    const caseSource = sourceFor(caseItem.source);
    const sourceLine = el("div", "source-line");
    sourceLine.append(el("span", "field-label", "FONTE DE APOIO"));
    if (caseSource) sourceLine.append(externalLink(caseSource, caseSource.title));
    guide.append(sourceLine);
    caseLayout.append(guide);
    page.append(caseLayout);

    const rubric = el("section", "essay-rubric");
    const rubricHead = el("div", "rubric-header");
    const rubricTitle = el("div", "");
    rubricTitle.append(el("h2", "", "Autoavaliação formativa"), el("p", "rubric-title-meta", "Rubrica própria · não oficial"));
    rubricHead.append(rubricTitle);
    const initialScore = rubricKeys.filter((key) => Boolean(caseDraft.checks && caseDraft.checks[key])).length;
    const rubricScore = el("strong", "rubric-score", initialScore + "/5");
    rubricScore.id = "rubric-score";
    rubricHead.append(rubricScore);
    rubric.append(rubricHead);
    const rubricItems = [
      ["command", "Atendimento ao comando", "Respondi a todos os itens pedidos no enunciado."],
      ["content", "Conteúdo", "Expliquei os conceitos relevantes com precisão."],
      ["grounds", "Fundamentação", "Apontei a regra, artigo ou fonte pertinente."],
      ["organization", "Organização", "A resposta tem sequência lógica e conclusão."],
      ["language", "Linguagem", "Usei texto claro, objetivo e adequado."]
    ];
    const rubricGrid = el("div", "rubric-grid");
    rubricItems.forEach(([key, label, description]) => {
      const check = makeCheckInput("rubric-" + key, Boolean(caseDraft.checks && caseDraft.checks[key]), label + " — " + description, "rubric-check");
      check.input.dataset.rubric = key;
      rubricGrid.append(check.wrapper);
    });
    rubric.append(rubricGrid);
    rubric.append(el("p", "rubric-note", "Cada item marcado vale um ponto apenas para reflexão pessoal. Essa escala não representa a correção nem a nota oficial de qualquer concurso."));
    page.append(rubric);

    appView.replaceChildren(page);
    const updateWordCount = () => {
      const words = textarea.value.trim().split(/\s+/).filter(Boolean).length;
      wordCount.textContent = words + (words === 1 ? " palavra" : " palavras");
    };
    updateWordCount();
    textarea.addEventListener("input", () => {
      updateWordCount();
      scheduleEssaySave();
    });
    caseSelect.addEventListener("change", () => {
      stopEssayTimer(true);
      saveEssayDraft();
      selectedCaseId = caseSelect.value;
      essayTimerBaseSeconds = progress.drafts[selectedCaseId]?.elapsedSeconds || 0;
      renderEssay(false);
    });
    rubric.addEventListener("change", (event) => {
      if (!event.target.matches("[data-rubric]")) return;
      const checks = currentRubricChecks();
      const score = rubricKeys.filter((key) => checks[key]).length;
      rubricScore.textContent = score + "/5";
      scheduleEssaySave();
    });
    if (focusTitle) title.focus();
  }

  function renderSources(focusTitle) {
    currentView = "sources";
    appShell.dataset.view = "sources";
    setHeaderMode("sources");
    const { page, title } = pageShell("sources", "Biblioteca de fontes", "Links oficiais e gratuitos para conferir normas, conteúdo técnico e o histórico do concurso. As notas indicam o uso recomendado e os limites de cada referência.");
    const checkedDate = el("div", "source-check-banner");
    checkedDate.append(el("strong", "", "Conferência registrada: 04/11/2026"), el("span", "", "Páginas oficiais consultadas nessa data não exibiam novo edital de Auditor Fiscal. É um registro da busca, não uma afirmação universal de inexistência; confira os canais oficiais."));
    page.append(checkedDate);

    const groups = el("div", "source-library");
    sources.forEach((source, index) => {
      const card = el("article", "source-entry");
      card.append(el("span", "source-index", String(index + 1).padStart(2, "0")));
      const main = el("div", "source-entry-main");
      main.append(el("h2", "", source.title));
      main.append(el("p", "source-organization", source.organization || "Fonte"));
      main.append(el("p", "source-note", source.note || "Consulte o texto original e confira a data de atualização."));
      if (source.subjects?.length) {
        const subjects = el("ul", "subject-tags");
        subjects.setAttribute("aria-label", "Matérias relacionadas");
        source.subjects.forEach((subject) => subjects.append(el("li", "", subject)));
        main.append(subjects);
      }
      const link = externalLink(source, "Abrir fonte original");
      card.append(main, link);
      groups.append(card);
    });
    page.append(groups);
    const historical = el("aside", "historical-note");
    historical.append(el("strong", "", "Referência histórica: concurso de 2019"));
    historical.append(el("p", "", "O arquivo da FCC registra o cargo e a Prova III — Discursiva de Conhecimentos Específicos daquele concurso. Isso não indica banca, programa, formato, quantidade de linhas ou critérios futuros."));
    const fcc = sourceFor("fcc-2019");
    if (fcc) historical.append(externalLink(fcc, "Abrir arquivo histórico da FCC"));
    page.append(historical);
    appView.replaceChildren(page);
    if (focusTitle) title.focus();
  }

  function renderCurrentView(focusTitle) {
    if (currentView === "today") renderDashboard(focusTitle);
    else if (currentView === "apostila") renderApostila(focusTitle);
    else if (currentView === "plan") renderPlan(focusTitle);
    else if (currentView === "review") renderReview(focusTitle);
    else if (currentView === "questions") renderQuestions(focusTitle);
    else if (currentView === "essay") renderEssay(focusTitle);
    else renderSources(focusTitle);
  }

  function flushCurrentDraft() {
    window.clearTimeout(draftSaveTimer);
    if (currentView === "essay") {
      stopEssayTimer(false);
      saveEssayDraft();
    }
  }

  function navigate(view, payload) {
    if (!["today", "apostila", "plan", "review", "questions", "essay", "sources"].includes(view)) return;
    flushCurrentDraft();
    showGlossary = false;
    if (payload && payload.lessonId && lessonIds.has(payload.lessonId)) {
      selectedLessonId = payload.lessonId;
      lessonQuestionFilter = "";
    }
    if (payload && payload.questionId && questionIds.has(payload.questionId)) selectedQuestionId = payload.questionId;
    if (payload && payload.lessonQuestionId && lessonIds.has(payload.lessonQuestionId)) {
      lessonQuestionFilter = payload.lessonQuestionId;
      onlyWrongQuestions = false;
      questionSubjectFilter = "Todas as matérias";
      const first = questions.find((question) => question.lesson === lessonQuestionFilter);
      if (first) selectedQuestionId = first.id;
    }
    if (view === "today") {
      selectedDay = progress.selectedDay;
    }
    currentView = view;
    appShell.dataset.view = view;
    navLinks.forEach((link) => {
      const active = link.dataset.view === view;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    const labels = { today: "Hoje", apostila: "Apostila", plan: "Cronograma", review: "Revisão", questions: "Questões", essay: "Discursiva", sources: "Fontes" };
    if (topbarSection) topbarSection.textContent = labels[view];
    appShell.classList.remove("menu-open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    renderCurrentView(true);
  }

  function exportProgress() {
    const envelope = {
      app: "rota-fiscal",
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: clone(progress)
    };
    const blob = new Blob([JSON.stringify(envelope, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = el("a");
    link.href = url;
    link.download = "rota-fiscal-progresso-" + todayKey + ".json";
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast("Cópia JSON do progresso baixada.");
  }

  function importProgressFile(file) {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      showToast("O arquivo excede o limite de 3 MB.");
      return;
    }
    file.text().then((text) => {
      let envelope;
      try {
        envelope = JSON.parse(text);
      } catch {
        throw new Error("O arquivo não contém JSON válido.");
      }
      if (!isRecord(envelope) || envelope.app !== "rota-fiscal" || envelope.version !== 1 || !isRecord(envelope.progress)) {
        throw new Error("Esse arquivo não é uma exportação compatível da Rota Fiscal.");
      }
      const candidate = normalizeProgress(envelope.progress);
      if (!window.confirm("Importar este arquivo substituirá o progresso salvo neste navegador. Deseja continuar?")) return;
      updateProgress((draft) => {
        Object.keys(draft).forEach((key) => delete draft[key]);
        Object.assign(draft, candidate);
      });
      selectedDay = progress.selectedDay;
      showToast("Progresso importado para este navegador.");
      renderCurrentView(false);
    }).catch((error) => showToast(error.message || "Não foi possível importar o arquivo."));
  }

  function resetProgress() {
    if (!window.confirm("Apagar o progresso, respostas, revisões e rascunhos salvos neste navegador?")) return;
    updateProgress((draft) => {
      Object.keys(draft).forEach((key) => delete draft[key]);
      Object.assign(draft, baseProgress());
    });
    selectedDay = 1;
    showToast("Progresso local apagado.");
    renderCurrentView(false);
  }

  function initializeHeader() {
    setNavRegions();
    exportButton?.addEventListener("click", exportProgress);
    importButton?.addEventListener("click", () => importInput?.click());
    importInput?.addEventListener("change", () => {
      importProgressFile(importInput.files && importInput.files[0]);
      importInput.value = "";
    });
    resetButton?.addEventListener("click", resetProgress);
    menuToggle?.addEventListener("click", () => {
      const open = appShell.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (event) => {
      const nav = event.target.closest("[data-view]");
      if (nav && (nav.matches(".route-nav [data-view]") || nav.matches(".brand[data-view]"))) {
        event.preventDefault();
        navigate(nav.dataset.view);
        return;
      }
      const session = event.target.closest("[data-session-action]");
      if (session) {
        const index = Number(session.dataset.sessionAction);
        if (index === 2 || getDayData(selectedDay).sundayReview) {
          navigate("questions");
        } else {
          const topic = getDayData(selectedDay).topics[index];
          const lesson = findLessonForTopic(topic);
          navigate("apostila", lesson ? { lessonId: lesson.id } : {});
        }
        return;
      }
      const action = event.target.closest("[data-action]");
      if (!action) return;
      const name = action.dataset.action;
      if (name === "mode-practice") {
        questionMode = "practice";
        renderQuestions(false);
      } else if (name === "mode-simulation") {
        questionMode = "simulation";
        renderQuestions(false);
      } else if (name === "start-simulation") {
        startSimulation();
      } else if (name === "simulation-previous") {
        if (progress.activeSimulation && progress.activeSimulation.cursor > 0) {
          updateProgress((draft) => { draft.activeSimulation.cursor -= 1; });
          renderQuestions(false);
        }
      } else if (name === "simulation-abandon") {
        abandonSimulation();
      } else if (name === "select-lesson") {
        selectedLessonId = action.dataset.lessonId;
        showReviewAnswer = false;
        renderApostila(false);
      } else if (name === "toggle-glossary") {
        showGlossary = !showGlossary;
        renderApostila(false);
        if (!showGlossary) appView.querySelector('[data-action="toggle-glossary"]')?.focus();
      } else if (name === "toggle-review") {
        showReviewAnswer = !showReviewAnswer;
        renderApostila(false);
      } else if (name === "mark-lesson-read") {
        markLessonRead(action.dataset.lessonId);
      } else if (name === "practice-lesson") {
        navigate("questions", { lessonQuestionId: action.dataset.lessonId });
      } else if (name === "select-plan-day") {
        const day = Number(action.dataset.day);
        updateProgress((draft) => { draft.selectedDay = day; });
        renderPlan(false);
      } else if (name === "open-lesson") {
        navigate("apostila", { lessonId: action.dataset.lessonId });
      } else if (name === "open-questions") {
        navigate("questions");
      } else if (name === "toggle-active-review-answer") {
        showActiveReviewAnswer = !showActiveReviewAnswer;
        renderReview(false);
      } else if (name === "select-active-review") {
        selectedReviewLessonId = action.dataset.lessonId;
        showActiveReviewAnswer = false;
        renderReview(false);
      } else if (name === "postpone-review") {
        postponeReview(action.dataset.lessonId);
      } else if (name === "open-unscheduled-review") {
        navigate("apostila", { lessonId: action.dataset.lessonId });
      } else if (name === "complete-review") {
        markReviewComplete(action.dataset.lessonId);
      } else if (name === "select-question") {
        selectedQuestionId = action.dataset.questionId;
        renderQuestions(false);
      } else if (name === "previous-question" || name === "next-question") {
        const filtered = questions.filter((question) => (questionSubjectFilter === "Todas as matérias" || question.subject === questionSubjectFilter) &&
          (!onlyWrongQuestions || progress.wrongQuestionIds.includes(question.id)) &&
          (!lessonQuestionFilter || question.lesson === lessonQuestionFilter));
        moveQuestion(filtered, name === "next-question" ? 1 : -1);
      } else if (name === "show-all-questions") {
        onlyWrongQuestions = false;
        questionSubjectFilter = "Todas as matérias";
        lessonQuestionFilter = "";
        renderQuestions(false);
      } else if (name === "clear-lesson-filter") {
        lessonQuestionFilter = "";
        renderQuestions(false);
      } else if (name === "toggle-timer") {
        startEssayTimer();
      } else if (name === "reset-timer") {
        stopEssayTimer(false);
        essayTimerBaseSeconds = 0;
        const display = appView.querySelector("#essay-timer-value");
        if (display) display.textContent = "00:00:00";
        scheduleEssaySave();
      }
    });
    window.addEventListener("storage", (event) => {
      if (event.key !== storageKey) return;
      progress = readProgress();
      selectedDay = progress.selectedDay;
      renderProgressMetrics();
      renderCurrentView(false);
    });
    window.addEventListener("rotafiscal:progresschange", (event) => {
      if (!event.detail) return;
      progress = normalizeProgress(event.detail);
      selectedDay = progress.selectedDay;
      renderProgressMetrics();
    });
    window.addEventListener("pagehide", flushCurrentDraft);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden" && currentView === "essay") flushCurrentDraft();
    });
  }

  const initialView = "today";
  appShell.dataset.view = initialView;
  initializeHeader();
  renderDashboard();
  window.RotaFiscalProgress = {
    storageKey,
    read: () => clone(progress),
    update: updateProgress,
    export: () => ({
      app: "rota-fiscal",
      version: 1,
      exportedAt: new Date().toISOString(),
      progress: clone(progress)
    }),
    refresh: renderProgressMetrics
  };
})();
