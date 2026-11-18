window.STUDY_CONTENT = {
  studyStrategy: {
    title: "Trilha priorizada de 24 semanas",
    intro: "São 10 aulas de 45 minutos por semana para percorrer os 226 PDFs do catálogo. A sequência começa por Auditor TI e matérias comuns, conclui os PDFs desse cargo e só então entra no acervo de Agente. A ordem considera pesos e questões comprovadas em provas anteriores; não prevê o próximo edital.",
    cycle: [
      {
        "title": "Auditor TI · núcleo específico",
        "detail": "A prova de 2019 teve 35 de 55 questões específicas de Tecnologia da Informação. Os tópicos comprovados da Prova II aparecem nas aulas correspondentes; isso confirma cobrança naquele caderno, não recorrência em concursos futuros."
      },
      {
        "title": "Gestão, raciocínio e matérias comuns",
        "detail": "Em 2019, Gestão Organizacional teve 15 das 55 específicas e Matemática/Raciocínio Lógico teve 5. Constitucional, Administrativo e as demais disciplinas comuns entram junto ao ciclo prioritário de Auditor."
      },
      {
        "title": "Agente · etapa complementar",
        "detail": "Os PDFs de Agente começam depois da cobertura do acervo Auditor. O recorte específico da prova de 2022 organiza os temas do complemento, sem pressupor que o próximo edital repetirá o programa."
      }
    ],
    weeklySchedule: [
      {
        "day": "Segunda-feira",
        "sessions": [
          {
            "track": "auditor-ti",
            "subject": "Tecnologia da Informação",
            "focus": "Estude um tópico do PDF, desenhe seu funcionamento e resolva questões.",
            "durationMinutes": 45
          },
          {
            "track": "comuns",
            "subject": "Língua Portuguesa",
            "focus": "Identifique tese e evidências no texto; justifique três respostas com trechos.",
            "durationMinutes": 45
          }
        ]
      },
      {
        "day": "Terça-feira",
        "sessions": [
          {
            "track": "auditor-ti",
            "subject": "Tecnologia da Informação",
            "focus": "Compare conceitos e aplique-os a um cenário de serviço fiscal.",
            "durationMinutes": 45
          },
          {
            "track": "auditor-ti",
            "subject": "Tópico específico prioritário",
            "focus": "Resolva a questão histórica vinculada ao tema quando houver referência comprovada; depois corrija com o PDF.",
            "durationMinutes": 45
          }
        ]
      },
      {
        "day": "Quarta-feira",
        "sessions": [
          {
            "track": "comuns",
            "subject": "Direito Constitucional e Administrativo",
            "focus": "Extraia regra, competência, exceções e consequência; aplique a um caso curto.",
            "durationMinutes": 45
          }
        ]
      },
      {
        "day": "Quinta-feira",
        "sessions": [
          {
            "track": "auditor-ti",
            "subject": "Discursiva de Tecnologia da Informação",
            "focus": "Treine a questão histórica de 2019 e depois escreva um caso autoral com revisão pela rubrica.",
            "caseId": "fcc-2019-ti-discursiva",
            "durationMinutes": 45
          },
          {
            "track": "auditor-ti",
            "subject": "Tecnologia da Informação",
            "focus": "Produza um artefato concreto do tema: diagrama, matriz, consulta ou plano de teste.",
            "durationMinutes": 45
          }
        ]
      },
      {
        "day": "Sexta-feira",
        "sessions": [
          {
            "track": "auditor-ti",
            "subject": "Gestão Organizacional",
            "focus": "Aplique o conceito a uma unidade fiscal e defina indicador, responsável e prazo.",
            "durationMinutes": 45
          }
        ]
      },
      {
        "day": "Sábado",
        "sessions": [
          {
            "track": "auditor-ti",
            "subject": "Matemática e Raciocínio Lógico",
            "focus": "Resolva problemas mostrando hipótese, cálculo e conferência.",
            "durationMinutes": 45
          },
          {
            "track": "comuns",
            "subject": "Contabilidade, Estatística e Igualdade",
            "focus": "Alterne o tópico comum previsto na aula e registre a evidência do acerto ou erro.",
            "durationMinutes": 45
          }
        ]
      },
      {
        "day": "Domingo",
        "sessions": [],
        "rest": "Descanso ou reposição leve, se necessário."
      }
    ],
    sessionFlow: [
      { minutes: 5, title: "Recordação ativa e revisões vencidas", detail: "Tente lembrar o conteúdo sem abrir o PDF e faça uma revisão pendente." },
      { minutes: 20, title: "Estudo dirigido", detail: "Estude um trecho do material com uma pergunta em mente." },
      { minutes: 15, title: "Questões e correção", detail: "Resolva questões do tópico e explique por que errou ou acertou." },
      { minutes: 5, title: "Erros e próxima revisão", detail: "Anote uma dúvida ou erro e agende revisões para 1, 7 e 30 dias." }
    ],
    missedSession: "Se perder um bloco, retome pelo próximo bloco da sequência no dia seguinte; não precisa dobrar a carga para compensar.",
    assumption: "O plano assume 10 sessões semanais de 45 minutos e usa o catálogo fechado em 226 PDFs. Ele prioriza Auditor TI e matérias comuns; Agente entra como complemento após esses PDFs. O edital oficial definirá disciplinas e pesos futuros, então a sequência deverá ser revista quando publicado.",
    method: "Em cada bloco, estude um tópico, resolva questões e registre os erros no caderno de estudo. No fim da semana, reforce os assuntos com menor percentual de acerto e erros recorrentes; mantenha as revisões de 1, 7 e 30 dias.",
    historical: "Referência histórica: no Auditor TI de 2019, Tecnologia da Informação teve 35 das 55 questões específicas (peso 3), Gestão Organizacional 15 e Matemática/Raciocínio Lógico 5. No Agente — Administração e Finanças — de 2022, as 35 questões específicas cobraram Administração/Economia/Finanças Públicas (15), Contabilidade Pública (10), Matemática Financeira (5) e Informática Básica (5), também com peso 3. Os editais novos podem mudar disciplinas, pesos e formato."
  },
  preparedStudyWeeks: [
    {
      "id": "semana-1",
      "title": "Semana 1 · Fundamentos",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s1-d1-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Ciclo de desenvolvimento e artefatos",
              "focus": "Separe etapas, entregáveis e controles no PDF; desenhe um fluxo de quatro etapas para um sistema tributário e aponte onde cada requisito pode ser rastreado.",
              "pdfKey": "3dc7d1a2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-portugues-s1-d1-2",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Compreensão e inferência",
              "focus": "Leia o texto do PDF, escreva a tese em uma frase e localize duas evidências. Resolva três itens de inferência e justifique cada resposta com o trecho correspondente.",
              "pdfKey": "fb638d1d",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s1-d2-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Métodos ágeis e entrega incremental",
              "focus": "Compare a abordagem iterativa com a sequencial no material; produza uma tabela com quando escolher cada uma, risco de mudança e evidência de aceite.",
              "pdfKey": "8beeba57",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-001",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Questão de 2019 · Q7 · Maturidade de processos e análise de riscos",
              "focus": "Na questão 7 da Prova II, tipo 001, de Auditor TI (2019), reconstrua o raciocínio cobrado sobre maturidade de processos e análise de riscos. Resolva primeiro sem consulta; depois compare sua justificativa com o material e registre o ponto que faltou.",
              "pdfKey": "a2a394e9",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "comuns-direito-tributario-s1-d3-1",
              "track": "comuns",
              "subject": "Direito Tributário",
              "goalId": "comuns:direito-tributario",
              "title": "Obrigação tributária e fato gerador",
              "focus": "Diferencie obrigação principal e acessória com um exemplo fiscal. Depois, classifique três fatos do material e indique sujeito ativo, sujeito passivo e momento de ocorrência.",
              "pdfKey": "6f7820a7",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-discursiva-s1-d4-1",
              "track": "auditor-ti",
              "subject": "Discursiva de Tecnologia da Informação",
              "goalId": "auditor-ti:discursiva",
              "title": "Prova histórica: BPMN, SQL e valor agregado",
              "focus": "Resolva a questão histórica sem consultar o espelho. Sublinhe cada comando, distribua o tempo entre os itens e use a rubrica do app para conferir cobertura e justificativas.",
              "pdfKey": "7265b0aa",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45,
              "caseId": "fcc-2019-ti-discursiva",
              "sourceId": "fcc-2019-ti-discursiva"
            },
            {
              "id": "auditor-ti-acervo-002",
              "track": "comuns",
              "subject": "Direito Constitucional",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Competências entre os entes federativos",
              "focus": "Para competências entre os entes federativos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "b967293c",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-gestao-s1-d5-1",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Estrutura e desenho organizacional",
              "focus": "Desenhe um organograma simples para uma unidade fiscal. Identifique cadeia de comando, amplitude de controle e dois riscos de sobreposição de responsabilidade com base no material.",
              "pdfKey": "d1153b16",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-matematica-s1-d6-1",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Razão, proporção e regra de três",
              "focus": "Resolva dois problemas de proporcionalidade com unidades explícitas. Antes de calcular, diga se a relação é direta ou inversa; confira o resultado por estimativa.",
              "pdfKey": "3828adbd",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-contabilidade-s1-d6-2",
              "track": "comuns",
              "subject": "Contabilidade Geral",
              "goalId": "comuns:contabilidade",
              "title": "Patrimônio, contas e equação contábil",
              "focus": "Classifique cinco fatos em ativo, passivo ou patrimônio líquido. Registre o efeito na equação patrimonial e explique por que o resultado fecha.",
              "pdfKey": "4df71c7a",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-2",
      "title": "Semana 2 · Processos e aplicação",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s2-d1-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Modelagem de processos de negócio",
              "focus": "Modele um fluxo simples de atendimento em quatro passos usando início, tarefa, decisão e fim. Marque o ponto de controle e explique qual evidência provaria a execução.",
              "pdfKey": "54745677",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-portugues-s2-d1-2",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Coesão e coerência",
              "focus": "Reescreva um parágrafo do PDF usando dois conectores diferentes sem alterar a tese. Identifique a referência de três pronomes e resolva três questões do tema.",
              "pdfKey": "4a947708",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s2-d2-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Engenharia de software: qualidade e processo",
              "focus": "Monte uma matriz requisito–teste para três requisitos. Inclua um caso positivo, um limite e um erro; registre o critério objetivo de aprovação para cada teste.",
              "pdfKey": "59cd44ce",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-003",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Aplicação guiada · Ativos, ameaças, controles e resposta a riscos",
              "focus": "Para ativos, ameaças, controles e resposta a riscos, separe ativo, ameaça, vulnerabilidade, impacto e controle. Monte um cenário de serviço fiscal, classifique o risco e indique evidência para verificar a mitigação.",
              "pdfKey": "a5b3aedc",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "comuns-direito-tributario-s2-d3-1",
              "track": "comuns",
              "subject": "Direito Tributário",
              "goalId": "comuns:direito-tributario",
              "title": "Constituição do crédito tributário",
              "focus": "Organize em sequência ocorrência, lançamento e constituição do crédito. Diferencie lançamento de declaração e de ofício usando um exemplo e indique o efeito de uma omissão.",
              "pdfKey": "6d3090df",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-discursiva-s2-d4-1",
              "track": "auditor-ti",
              "subject": "Discursiva de Tecnologia da Informação",
              "goalId": "auditor-ti:discursiva",
              "title": "Caso discursivo: processo e incidente",
              "focus": "Abra o caso BPMN, desenhe o processo proposto com raias e decisões, e escreva duas regras para tratamento de exceções. Compare seu diagrama ao espelho e registre uma correção.",
              "pdfKey": "54745677",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45,
              "caseId": "ti-bpmn-incidentes"
            },
            {
              "id": "auditor-ti-acervo-004",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Decisão de gestão · Avaliação de desempenho",
              "focus": "Aplique avaliação de desempenho a uma unidade de fiscalização: descreva o problema, escolha uma ação de gestão, defina responsável e prazo, e indique um indicador observável para avaliar o resultado.",
              "pdfKey": "2e0db8e4",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-gestao-s2-d5-1",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Planejamento e desdobramento de objetivos",
              "focus": "Transforme um objetivo amplo em três metas mensuráveis. Para cada meta, defina responsável, prazo e indicador que permitiria acompanhar o resultado.",
              "pdfKey": "704d8d66",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-matematica-s2-d6-1",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Operadores lógicos e negação",
              "focus": "Traduza três afirmações para símbolos, negue cada uma sem trocar o sentido e monte a tabela-verdade de uma proposição composta do material.",
              "pdfKey": "32c1d95f",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-estatistica-s2-d6-2",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Variáveis e leitura de dados",
              "focus": "Classifique exemplos como qualitativos ou quantitativos e discretos ou contínuos. Leia uma tabela do PDF e escreva duas conclusões válidas e uma conclusão que os dados não permitem.",
              "pdfKey": "8f21928d",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-3",
      "title": "Semana 3 · Dados e responsabilidade",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s3-d1-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Business intelligence e remodelagem de dados",
              "focus": "Esboce um fluxo da origem ao painel, marcando transformação, validação e consumo. Aponte dois riscos de qualidade e proponha uma verificação reproduzível para cada um.",
              "pdfKey": "c07f190f",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-portugues-s3-d1-2",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Período simples: termos e relações",
              "focus": "Analise três frases do PDF, localize núcleo do sujeito e predicado e classifique os complementos pedidos. Reescreva uma frase preservando a relação sintática.",
              "pdfKey": "c17c02ee",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s3-d2-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Banco de dados: modelos e consistência",
              "focus": "Compare no PDF os modelos de dados apresentados. Desenhe entidades e relações para um cadastro fiscal e aponte uma regra de integridade que precisa ser testada.",
              "pdfKey": "604abcab",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-005",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Decisão de gestão · Excelência nos serviços públicos",
              "focus": "Aplique excelência nos serviços públicos a uma unidade de fiscalização: descreva o problema, escolha uma ação de gestão, defina responsável e prazo, e indique um indicador observável para avaliar o resultado.",
              "pdfKey": "c1234ddf",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "comuns-direito-tributario-s3-d3-1",
              "track": "comuns",
              "subject": "Direito Tributário",
              "goalId": "comuns:direito-tributario",
              "title": "Responsabilidade tributária",
              "focus": "Separe responsabilidade por substituição e por transferência. Aplique os critérios do PDF a dois casos e indique qual fato adicional mudaria a conclusão.",
              "pdfKey": "2fa72483",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-discursiva-s3-d4-1",
              "track": "auditor-ti",
              "subject": "Discursiva de Tecnologia da Informação",
              "goalId": "auditor-ti:discursiva",
              "title": "Caso discursivo: acesso a uma conta Oracle",
              "focus": "Resolva o caso Oracle distinguindo alteração de senha, desbloqueio e privilégio de conexão. Escreva os comandos pedidos e justifique cada etapa com a documentação de apoio.",
              "pdfKey": "3dc7d1a2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45,
              "caseId": "ti-sql-oracle",
              "sourceId": "oracle-alter-user"
            },
            {
              "id": "auditor-ti-acervo-006",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Decisão de gestão · Gestão do conhecimento e aprendizagem organizacional",
              "focus": "Aplique gestão do conhecimento e aprendizagem organizacional a uma unidade de fiscalização: descreva o problema, escolha uma ação de gestão, defina responsável e prazo, e indique um indicador observável para avaliar o resultado.",
              "pdfKey": "d5be5ff9",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-gestao-s3-d5-1",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Grupos, equipes e coordenação",
              "focus": "Compare grupo e equipe em uma situação de fiscalização. Identifique objetivo comum, interdependência e uma ação de coordenação que possa ser observada.",
              "pdfKey": "229ce2b8",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-matematica-s3-d6-1",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Probabilidade e eventos",
              "focus": "Defina o espaço amostral de dois problemas e calcule as probabilidades solicitadas. Mostre o evento favorável e confira se o resultado está entre zero e um.",
              "pdfKey": "c2ba0ed9",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-igualdade-s3-d6-2",
              "track": "comuns",
              "subject": "Igualdade racial e de gênero",
              "goalId": "comuns:igualdade",
              "title": "Estatuto da Igualdade Racial: direitos e instrumentos",
              "focus": "Localize no PDF um direito e um instrumento de política pública. Explique como cada um se diferencia de uma conduta discriminatória e responda três itens de fixação.",
              "pdfKey": "1ed60c1c",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-4",
      "title": "Semana 4 · Governança e controle",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s4-d1-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Governança e planejamento de TI",
              "focus": "Construa um quadro objetivo entre objetivo estratégico, serviço de TI, indicador e responsável. Use o material para apontar um risco de desalinhamento e o controle correspondente.",
              "pdfKey": "0ebbb4a9",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-portugues-s4-d1-2",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Concordância, regência e pontuação",
              "focus": "Resolva quatro itens do PDF e explique a regra em uma linha cada. Reescreva duas frases corrigindo a norma sem mudar a informação principal.",
              "pdfKey": "b1ee2ac7",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s4-d2-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "COBIT: objetivos, processos e evidências",
              "focus": "Escolha um objetivo de governança do material e ligue-o a uma evidência verificável. Diferencie atividade de controle, indicador e resultado em um exemplo curto.",
              "pdfKey": "d76ee236",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-007",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Decisão de gestão · Processo decisório",
              "focus": "Aplique processo decisório a uma unidade de fiscalização: descreva o problema, escolha uma ação de gestão, defina responsável e prazo, e indique um indicador observável para avaliar o resultado.",
              "pdfKey": "f002badd",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "comuns-direito-tributario-s4-d3-1",
              "track": "comuns",
              "subject": "Direito Tributário",
              "goalId": "comuns:direito-tributario",
              "title": "Normas gerais de direito tributário",
              "focus": "Diferencie vigência, aplicação e interpretação da legislação tributária. Aplique cada conceito a um caso de alteração normativa e justifique a conclusão com o material.",
              "pdfKey": "7b1d0006",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-discursiva-s4-d4-1",
              "track": "auditor-ti",
              "subject": "Discursiva de Tecnologia da Informação",
              "goalId": "auditor-ti:discursiva",
              "title": "Caso discursivo: valor agregado e desvios",
              "focus": "Calcule os indicadores pedidos no caso, identifique desvio de prazo e custo e proponha uma ação corretiva vinculada ao diagnóstico. Confira fórmulas e justificativas no espelho.",
              "pdfKey": "2fccaaec",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45,
              "caseId": "ti-valor-agregado",
              "sourceId": "pmi-valor-agregado"
            },
            {
              "id": "auditor-ti-acervo-008",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Decisão de gestão · Gestão de conflitos",
              "focus": "Aplique gestão de conflitos a uma unidade de fiscalização: descreva o problema, escolha uma ação de gestão, defina responsável e prazo, e indique um indicador observável para avaliar o resultado.",
              "pdfKey": "41d04a63",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-gestao-s4-d5-1",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Gestão da qualidade e melhoria",
              "focus": "Defina um problema de serviço, proponha indicador, causa provável e ação de melhoria. Use o ciclo mostrado no PDF e indique como verificaria se a ação funcionou.",
              "pdfKey": "c6983c10",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-matematica-s4-d6-1",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Análise combinatória: contagem e escolha",
              "focus": "Resolva dois problemas identificando se a ordem importa e se há repetição. Registre a regra de contagem antes da operação para tornar o raciocínio auditável.",
              "pdfKey": "fa8aab47",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-contabilidade-s4-d6-2",
              "track": "comuns",
              "subject": "Contabilidade Geral",
              "goalId": "comuns:contabilidade",
              "title": "Fatos contábeis e escrituração",
              "focus": "Registre um fato permutativo, um modificativo e um misto. Mostre contas debitadas e creditadas e confira o efeito no patrimônio e no resultado.",
              "pdfKey": "4ce73a76",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-5",
      "title": "Semana 5 · Consolidação e resposta",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s5-d1-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Segurança da informação e backup",
              "focus": "Liste ameaça, ativo, impacto e controle para um serviço fiscal. Diferencie cópia de segurança de recuperação testada e descreva a evidência que comprovaria o teste.",
              "pdfKey": "4a5ea385",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "comuns-portugues-s5-d1-2",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Gêneros e tipologias textuais",
              "focus": "Classifique objetivo e organização de três trechos. Identifique marcas de narração, exposição ou argumentação e responda qual evidência textual sustenta cada classificação.",
              "pdfKey": "25aea03a",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-tecnologia-s5-d2-1",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Serviços e operações de TI",
              "focus": "Organize um incidente em registro, prioridade, escalonamento, solução e encerramento. Compare seu fluxo ao material e indique o controle que evita fechar ocorrência sem evidência.",
              "pdfKey": "315b34eb",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-009",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Questão de 2019 · Q8 · Maturidade de processos e análise estratégica",
              "focus": "Na questão 8 da Prova II, tipo 001, de Auditor TI (2019), reconstrua o raciocínio cobrado sobre maturidade de processos e análise estratégica. Resolva primeiro sem consulta; depois compare sua justificativa com o material e registre o ponto que faltou.",
              "pdfKey": "bf89fc0a",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "comuns-direito-tributario-s5-d3-1",
              "track": "comuns",
              "subject": "Direito Tributário",
              "goalId": "comuns:direito-tributario",
              "title": "Legislação tributária: aplicação e limites",
              "focus": "Resolva um caso de aplicação temporal da norma. Identifique a regra geral, eventual exceção e fato decisivo; depois confira a justificativa no PDF.",
              "pdfKey": "7b1d0006",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-discursiva-s5-d4-1",
              "track": "auditor-ti",
              "subject": "Discursiva de Tecnologia da Informação",
              "goalId": "auditor-ti:discursiva",
              "title": "Revisão discursiva da prova histórica",
              "focus": "Refaça a questão FCC sem consultar o espelho. Compare sua resposta à primeira tentativa, liste os comandos atendidos e reescreva o trecho que antes ficou incompleto.",
              "pdfKey": "7265b0aa",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45,
              "caseId": "fcc-2019-ti-discursiva",
              "sourceId": "fcc-2019-ti-discursiva"
            },
            {
              "id": "auditor-ti-acervo-010",
              "track": "comuns",
              "subject": "Direito Constitucional",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Vínculos de nacionalidade e seus efeitos",
              "focus": "Para vínculos de nacionalidade e seus efeitos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "b572adc0",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-gestao-s5-d5-1",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Liderança, responsabilidade e comunicação",
              "focus": "Analise uma situação de equipe, identifique o problema de coordenação e escreva uma intervenção observável. Depois indique qual resultado mostraria que a intervenção funcionou.",
              "pdfKey": "f082f9e7",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-matematica-s5-d6-1",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Raciocínio sequencial e padrões",
              "focus": "Resolva três sequências sem olhar o gabarito, descrevendo a regra em cada passo. Em uma delas, invente um distrator plausível e explique por que está errado.",
              "pdfKey": "8acb6a6c",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "comuns-estatistica-s5-d6-2",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Medidas de posição",
              "focus": "Calcule média e mediana para o conjunto proposto, explique qual medida representa melhor os dados e mostre como um valor extremo altera a leitura.",
              "pdfKey": "44b45ef9",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-6",
      "title": "Semana 6 · Gestão e raciocínio quantitativo",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-011",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Questão de 2019 · Q12 · Testes de regressão após mudanças",
              "focus": "Na questão 12 da Prova II, tipo 001, de Auditor TI (2019), reconstrua o raciocínio cobrado sobre testes de regressão após mudanças. Resolva primeiro sem consulta; depois compare sua justificativa com o material e registre o ponto que faltou.",
              "pdfKey": "638031c9",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-012",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Decisão de gestão · Comunicacao",
              "focus": "Aplique comunicacao a uma unidade de fiscalização: descreva o problema, escolha uma ação de gestão, defina responsável e prazo, e indique um indicador observável para avaliar o resultado.",
              "pdfKey": "46946a9e",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-013",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Decisão de gestão · Clima e cultura organizacional",
              "focus": "Aplique clima e cultura organizacional a uma unidade de fiscalização: descreva o problema, escolha uma ação de gestão, defina responsável e prazo, e indique um indicador observável para avaliar o resultado.",
              "pdfKey": "02f94d88",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-014",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Problema aplicado · Equações e relações entre variáveis",
              "focus": "Resolva dois problemas de equações e relações entre variáveis. Escreva os dados e a regra antes da conta, explicite unidades ou hipótese lógica e confira cada resposta por estimativa ou caso contrário.",
              "pdfKey": "885408d2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-015",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Problema aplicado · Funções, gráficos e interpretação de resultados",
              "focus": "Resolva dois problemas de funções, gráficos e interpretação de resultados. Escreva os dados e a regra antes da conta, explicite unidades ou hipótese lógica e confira cada resposta por estimativa ou caso contrário.",
              "pdfKey": "b8e010f2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-016",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Problema aplicado · Conjuntos numéricos e operações",
              "focus": "Resolva dois problemas de conjuntos numéricos e operações. Escreva os dados e a regra antes da conta, explicite unidades ou hipótese lógica e confira cada resposta por estimativa ou caso contrário.",
              "pdfKey": "412a5760",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-017",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Problema aplicado · Operador condicional",
              "focus": "Resolva dois problemas de operador condicional. Escreva os dados e a regra antes da conta, explicite unidades ou hipótese lógica e confira cada resposta por estimativa ou caso contrário.",
              "pdfKey": "b5e83b2d",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-018",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Problema aplicado · Conjuntos numéricos e operações",
              "focus": "Resolva dois problemas de conjuntos numéricos e operações. Escreva os dados e a regra antes da conta, explicite unidades ou hipótese lógica e confira cada resposta por estimativa ou caso contrário.",
              "pdfKey": "0b577cc4",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-acervo-019",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Problema aplicado · Funções, gráficos e interpretação de resultados",
              "focus": "Resolva dois problemas de funções, gráficos e interpretação de resultados. Escreva os dados e a regra antes da conta, explicite unidades ou hipótese lógica e confira cada resposta por estimativa ou caso contrário.",
              "pdfKey": "d57819aa",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-020",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Problema aplicado · Expansão algébrica e coeficientes",
              "focus": "Resolva dois problemas de expansão algébrica e coeficientes. Escreva os dados e a regra antes da conta, explicite unidades ou hipótese lógica e confira cada resposta por estimativa ou caso contrário.",
              "pdfKey": "6d72e873",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-7",
      "title": "Semana 7 · Conhecimentos comuns do Auditor",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-021",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Proteção de direitos e aplicação da norma",
              "focus": "Para proteção de direitos e aplicação da norma, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "334a0b5a",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-022",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Proteção de direitos e aplicação da norma",
              "focus": "Para proteção de direitos e aplicação da norma, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "2d10adca",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-023",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Proteção de direitos e aplicação da norma",
              "focus": "Para proteção de direitos e aplicação da norma, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "b499427e",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-024",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Lei n 2 889 1956 crime de genocidio",
              "focus": "Para lei n 2 889 1956 crime de genocidio, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "595a4261",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-025",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Lei n 9 459 1997",
              "focus": "Para lei n 9 459 1997, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "3c2b4b51",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-026",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Lei n 7 716 1989 crimes resultantes de preconceitos de raca ou de cor",
              "focus": "Para lei n 7 716 1989 crimes resultantes de preconceitos de raca ou de cor, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "fd1e9747",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-027",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Lei n 11 340 2006 lei maria da penha",
              "focus": "Para lei n 11 340 2006 lei maria da penha, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "1b88a116",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-028",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Lei n 7 437 1985 contravencoes penais a prática de atos resultantes de preconceito de raca de cor de sexo ou de estado civil",
              "focus": "Para lei n 7 437 1985 contravencoes penais a prática de atos resultantes de preconceito de raca de cor de sexo ou de estado civil, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "8ecce124",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-acervo-029",
              "track": "comuns",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "comuns:igualdade",
              "title": "Aplicação guiada · Proteção de direitos e aplicação da norma",
              "focus": "Para proteção de direitos e aplicação da norma, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "3a7adf6d",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-030",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Medidas de assimetria e curtose",
              "focus": "Para medidas de assimetria e curtose, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "a6953f5e",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-8",
      "title": "Semana 8 · Conhecimentos comuns do Auditor",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-031",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Intervalos de confianca",
              "focus": "Para intervalos de confianca, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "a73db265",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-032",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Distribuicoes conjuntas de probabilidade",
              "focus": "Para distribuicoes conjuntas de probabilidade, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "1f102750",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-033",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Testes de hipoteses e estatistica inferencial",
              "focus": "Para testes de hipoteses e estatistica inferencial, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "0635d69b",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-034",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Outras distribuicoes de probabilidade",
              "focus": "Para outras distribuicoes de probabilidade, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "353ed452",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-035",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Distribuicao de probabilidade",
              "focus": "Para distribuicao de probabilidade, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "860c668b",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-036",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Covariancia e correlacao",
              "focus": "Para covariancia e correlacao, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "d03508c6",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-037",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Variancia e desvio padrao",
              "focus": "Para variancia e desvio padrao, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "9d9ebde7",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-038",
              "track": "comuns",
              "subject": "Estatística",
              "goalId": "comuns:estatistica",
              "title": "Aplicação guiada · Probabilidades",
              "focus": "Para probabilidades, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "79570a34",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-acervo-039",
              "track": "comuns",
              "subject": "Contabilidade Geral",
              "goalId": "comuns:contabilidade",
              "title": "Aplicação guiada · Patrimonio liquido",
              "focus": "Para patrimonio liquido, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "a487c870",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-040",
              "track": "comuns",
              "subject": "Contabilidade Geral",
              "goalId": "comuns:contabilidade",
              "title": "Aplicação guiada · Demonstracoes obrigatorias e balanco patrimonial",
              "focus": "Para demonstracoes obrigatorias e balanco patrimonial, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "175a816e",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-9",
      "title": "Semana 9 · Direito público aplicado",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-041",
              "track": "comuns",
              "subject": "Contabilidade Geral",
              "goalId": "comuns:contabilidade",
              "title": "Aplicação guiada · Analise das demonstracoes contabeis",
              "focus": "Para analise das demonstracoes contabeis, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "6fbbfafd",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-042",
              "track": "comuns",
              "subject": "Contabilidade Geral",
              "goalId": "comuns:contabilidade",
              "title": "Aplicação guiada · Principios e normas brasileiras de contabilidade emanadas pelo conselho federal de contabilidade",
              "focus": "Para principios e normas brasileiras de contabilidade emanadas pelo conselho federal de contabilidade, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "00645f85",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-043",
              "track": "comuns",
              "subject": "Contabilidade Geral",
              "goalId": "comuns:contabilidade",
              "title": "Aplicação guiada · Ajustes trazidos pelas leis n 11 638 2007 e 11 941 2009",
              "focus": "Para ajustes trazidos pelas leis n 11 638 2007 e 11 941 2009, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "c1691018",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-044",
              "track": "comuns",
              "subject": "Contabilidade Geral",
              "goalId": "comuns:contabilidade",
              "title": "Aplicação guiada · Contas patrimoniais e de resultado plano de contas",
              "focus": "Para contas patrimoniais e de resultado plano de contas, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "5678870e",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-045",
              "track": "comuns",
              "subject": "Direito Tributário",
              "goalId": "comuns:direito-tributario",
              "title": "Aplicação guiada · Normas gerais de direito tributário",
              "focus": "Para normas gerais de direito tributário, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "f0720318",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-046",
              "track": "comuns",
              "subject": "Direito Tributário",
              "goalId": "comuns:direito-tributario",
              "title": "Aplicação guiada · Competencia tributária",
              "focus": "Para competencia tributária, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "c62a6d66",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-047",
              "track": "comuns",
              "subject": "Direito Tributário",
              "goalId": "comuns:direito-tributario",
              "title": "Aplicação guiada · Limitacoes constitucionais ao poder de tributar",
              "focus": "Para limitacoes constitucionais ao poder de tributar, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "f0757cb3",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-048",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Lei n 9 433 1997 e suas alteracoes politica nacional de recursos hidricos parte i",
              "focus": "Para lei n 9 433 1997 e suas alteracoes politica nacional de recursos hidricos parte i, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "d46db4b7",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-acervo-049",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Organização administrativa",
              "focus": "Para organização administrativa, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "a529961d",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-050",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Lei n 13 303 2016 lei das estatais",
              "focus": "Para lei n 13 303 2016 lei das estatais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "2f3dc8a7",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-10",
      "title": "Semana 10 · Direito público aplicado",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-051",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Fases, critérios e controles da contratação pública",
              "focus": "Para fases, critérios e controles da contratação pública, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "82a4813b",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-052",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Falhas de mercado e respostas públicas",
              "focus": "Para falhas de mercado e respostas públicas, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "f9aa3baa",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-053",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Lei n 9 433 1997 e suas alteracoes politica nacional de recursos hidricos parte ii",
              "focus": "Para lei n 9 433 1997 e suas alteracoes politica nacional de recursos hidricos parte ii, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "1898f602",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-054",
              "track": "comuns",
              "subject": "Direito Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Fases, critérios e controles da contratação pública",
              "focus": "Para fases, critérios e controles da contratação pública, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "d463ba69",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-055",
              "track": "comuns",
              "subject": "Direito Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Controle da administração publica",
              "focus": "Para controle da administração publica, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "3ec2e05d",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-056",
              "track": "comuns",
              "subject": "Direito Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Competência, procedimento e controle administrativo",
              "focus": "Para competência, procedimento e controle administrativo, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "08b8c257",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-057",
              "track": "comuns",
              "subject": "Direito Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Competência, procedimento e controle administrativo",
              "focus": "Para competência, procedimento e controle administrativo, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "93de9577",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-058",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Poder executivo",
              "focus": "Para poder executivo, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "3a2ebc0b",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-acervo-059",
              "track": "comuns",
              "subject": "Direito Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Administração publica",
              "focus": "Para administração publica, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "9f5c2c32",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-060",
              "track": "comuns",
              "subject": "Direito Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Competência, procedimento e controle administrativo",
              "focus": "Para competência, procedimento e controle administrativo, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "8fb0183e",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-11",
      "title": "Semana 11 · Direito público aplicado",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-061",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Direitos politicos e partidos politicos",
              "focus": "Para direitos politicos e partidos politicos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "21b695cd",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-062",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Direitos e deveres individuais e coletivos",
              "focus": "Para direitos e deveres individuais e coletivos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "917602a2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-063",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Defesa do estado e das instituicoes democraticas",
              "focus": "Para defesa do estado e das instituicoes democraticas, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "4de1eccb",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-064",
              "track": "comuns",
              "subject": "Direito Constitucional",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Competências, direitos e limites constitucionais",
              "focus": "Para competências, direitos e limites constitucionais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "0c2177f0",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-065",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Organização politico administrativa do estado",
              "focus": "Para organização politico administrativa do estado, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "d5be609f",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-066",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Principios fundamentais",
              "focus": "Para principios fundamentais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "4f05187a",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-067",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Direitos sociais",
              "focus": "Para direitos sociais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "576df58f",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-068",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Atos administrativos",
              "focus": "Para atos administrativos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "18083ff9",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-acervo-069",
              "track": "comuns",
              "subject": "Direito Constitucional e Administrativo",
              "goalId": "comuns:direito-publico",
              "title": "Caso de direito público · Poder constituinte",
              "focus": "Para poder constituinte, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "08cf6d35",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-070",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "eeca386c",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-12",
      "title": "Semana 12 · Conhecimentos comuns do Auditor",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-071",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Aplicação guiada · Estrutura e processos de formacao de palavras",
              "focus": "No estudo de estrutura e processos de formacao de palavras, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "c0b6269c",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-072",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Aplicação guiada · Funções, gráficos e interpretação de resultados",
              "focus": "No estudo de funções, gráficos e interpretação de resultados, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "3ce6fae2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-073",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Aplicação guiada · Tecnicas de redacao",
              "focus": "No estudo de tecnicas de redacao, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "1fdbd8af",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-acervo-074",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "dd848170",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-075",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "c4cf5566",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "auditor-ti-acervo-076",
              "track": "comuns",
              "subject": "Língua Portuguesa",
              "goalId": "comuns:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "c7c0cab6",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-revisao-01",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Revisão espaçada · Tecnologia da Informação",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Ciclo de desenvolvimento e artefatos” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "3dc7d1a2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "auditor-ti-revisao-02",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Revisão espaçada · Tecnologia da Informação",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Ciclo de desenvolvimento e artefatos” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "3dc7d1a2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "auditor-ti-revisao-03",
              "track": "auditor-ti",
              "subject": "Tecnologia da Informação",
              "goalId": "auditor-ti:tecnologia",
              "title": "Revisão espaçada · Tecnologia da Informação",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Ciclo de desenvolvimento e artefatos” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "3dc7d1a2",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-revisao-04",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Revisão espaçada · Gestão Organizacional",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Estrutura e desenho organizacional” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "d1153b16",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-13",
      "title": "Semana 13 · Revisão e transição ao complemento",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "auditor-ti-revisao-05",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Revisão espaçada · Gestão Organizacional",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Estrutura e desenho organizacional” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "d1153b16",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-revisao-06",
              "track": "auditor-ti",
              "subject": "Gestão Organizacional",
              "goalId": "auditor-ti:gestao",
              "title": "Revisão espaçada · Gestão Organizacional",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Estrutura e desenho organizacional” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "d1153b16",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "auditor-ti-revisao-07",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Revisão espaçada · Matemática e Raciocínio Lógico",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Razão, proporção e regra de três” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "3828adbd",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            },
            {
              "id": "auditor-ti-revisao-08",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Revisão espaçada · Matemática e Raciocínio Lógico",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Razão, proporção e regra de três” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "3828adbd",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "auditor-ti-revisao-09",
              "track": "auditor-ti",
              "subject": "Matemática e Raciocínio Lógico",
              "goalId": "auditor-ti:matematica",
              "title": "Revisão espaçada · Matemática e Raciocínio Lógico",
              "focus": "Sem abrir o PDF, reconstrua os critérios estudados em “Razão, proporção e regra de três” e aplique-os a um exemplo diferente. Depois confira o material, corrija uma lacuna e resolva duas questões sem consulta.",
              "pdfKey": "3828adbd",
              "pdfTrack": "auditor-ti",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-economia-s2-d2-2",
              "track": "agente-geral",
              "subject": "Economia e Finanças Públicas",
              "goalId": "agente-geral:economia",
              "title": "Dívida pública e política fiscal",
              "focus": "Desenhe a relação entre receita, despesa, resultado e dívida. Interprete um cenário do PDF e identifique qual indicador mudaria primeiro e por quê.",
              "pdfKey": "73590d03",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-economia-s4-d2-2",
              "track": "agente-geral",
              "subject": "Economia e Finanças Públicas",
              "goalId": "agente-geral:economia",
              "title": "Política fiscal e agregados macroeconômicos",
              "focus": "Explique a cadeia entre gasto público, demanda agregada e resultado fiscal. Resolva um cenário do PDF e explicite qual hipótese macroeconômica sustenta a resposta.",
              "pdfKey": "38c5d34c",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-001",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Causas, indicadores e respostas à inflação",
              "focus": "Para causas, indicadores e respostas à inflação, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "446d950e",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-002",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 11 18 48 ed9418d7038c42aea55e248edcbb509e",
              "focus": "Para 11 18 48 ed9418d7038c42aea55e248edcbb509e, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "1af9e704",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-003",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · A3bf44ed9679778fb4539f1b",
              "focus": "Para a3bf44ed9679778fb4539f1b, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "523d37e1",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-14",
      "title": "Semana 14 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-004",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Introducao a macroeconomia",
              "focus": "Para introducao a macroeconomia, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "19aa92c5",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-005",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 10 38 12 b6fc66a6b31147ec93d5942e10a93261",
              "focus": "Para 10 38 12 b6fc66a6b31147ec93d5942e10a93261, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "e351f23d",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-006",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 10 52 08 a569a5ca823f4478a0ae5b5c28951927",
              "focus": "Para 10 52 08 a569a5ca823f4478a0ae5b5c28951927, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "4f96ea48",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-007",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 08 21 06 9daa1449752b40099cb51bb77381d2e3",
              "focus": "Para 08 21 06 9daa1449752b40099cb51bb77381d2e3, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "3f258e97",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-008",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 10 50 28 aef1304dad0b4da5b516aa5b8c85b8af",
              "focus": "Para 10 50 28 aef1304dad0b4da5b516aa5b8c85b8af, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "3f44a739",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-009",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 10 39 51 2c380ce691ae4f348b526d5ab27b323f",
              "focus": "Para 10 39 51 2c380ce691ae4f348b526d5ab27b323f, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "253af4b2",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-010",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 09 22 31 d27aaa9251a74bdb8f113bda7ea74e6a",
              "focus": "Para 09 22 31 d27aaa9251a74bdb8f113bda7ea74e6a, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "37e4f431",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-011",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 09 20 38 4ce4498e6d6e4146b4148c7c23e15fde",
              "focus": "Para 09 20 38 4ce4498e6d6e4146b4148c7c23e15fde, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "bd7915e4",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-012",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 11 31 44 85556e374ed84ce98ea59b3c9907b737",
              "focus": "Para 11 31 44 85556e374ed84ce98ea59b3c9907b737, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "ae1b1d38",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-013",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 11 33 36 93b62a93a861414b98ca38697e3ac0e2",
              "focus": "Para 11 33 36 93b62a93a861414b98ca38697e3ac0e2, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "0059ee1e",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-15",
      "title": "Semana 15 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-014",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 11 13 49 2f843d0aecf04894a9bb0efd62ce4b41",
              "focus": "Para 11 13 49 2f843d0aecf04894a9bb0efd62ce4b41, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "2331a67c",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-015",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Contas nacionais",
              "focus": "Para contas nacionais, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "2e70a7c7",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-016",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Falhas de mercado e respostas públicas",
              "focus": "Para falhas de mercado e respostas públicas, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "5dc7d5f3",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-017",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Relações macroeconômicas e efeitos de política",
              "focus": "Para relações macroeconômicas e efeitos de política, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "0549cabd",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-018",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Agregados monetarios",
              "focus": "Para agregados monetarios, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "c46d531b",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-019",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Introducao a macroeconomia",
              "focus": "Para introducao a macroeconomia, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "95fa4449",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-020",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Escolhas, restrições e equilíbrio econômico",
              "focus": "Para escolhas, restrições e equilíbrio econômico, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "8eedb891",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-021",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Escolhas, restrições e equilíbrio econômico",
              "focus": "Para escolhas, restrições e equilíbrio econômico, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "832e139c",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-022",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Comportamento dos custos e decisão econômica",
              "focus": "Para comportamento dos custos e decisão econômica, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "80b0c4fe",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-023",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Falhas de mercado e respostas públicas",
              "focus": "Para falhas de mercado e respostas públicas, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "662bdfbe",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-16",
      "title": "Semana 16 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-024",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · 11 19 08 38738d0a5e034a2b9d98554a4cf366b5",
              "focus": "Para 11 19 08 38738d0a5e034a2b9d98554a4cf366b5, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "311efa8e",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-025",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Contas nacionais",
              "focus": "Para contas nacionais, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "1127cddd",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-026",
              "track": "agente-geral",
              "subject": "Economia",
              "goalId": "agente-geral:economia",
              "title": "Aplicação guiada · Agregados monetarios",
              "focus": "Para agregados monetarios, desenhe a cadeia causa–efeito entre variáveis, explicite a hipótese usada e resolva dois cenários alterando apenas uma condição de cada vez.",
              "pdfKey": "b6615cdb",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-casp-s1-d4-2",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Estrutura conceitual da CASP",
              "focus": "Do PDF, extraia objetivo, usuário e característica qualitativa da informação pública. Aplique os três pontos a um exemplo de decisão orçamentária e confira se cada resposta tem fundamento.",
              "pdfKey": "398a032b",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-casp-s4-d4-2",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Receitas e despesas públicas",
              "focus": "Classifique os estágios da receita e da despesa no exemplo do PDF. Monte uma sequência de registros e explique o que ainda não representa pagamento.",
              "pdfKey": "a79ade44",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-027",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Nbc tsp 01 e 02 receita com e sem contraprestacao",
              "focus": "Para nbc tsp 01 e 02 receita com e sem contraprestacao, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "6987768d",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-028",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Nbc tsp 04",
              "focus": "Para nbc tsp 04, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "fe8f317e",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-029",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Dfc e dmpl",
              "focus": "Para dfc e dmpl, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "38aeb1d3",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-030",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Nbc tsp 03 provisoes passivos contingentes ativos contingentes",
              "focus": "Para nbc tsp 03 provisoes passivos contingentes ativos contingentes, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "d1f3ef45",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-031",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Balanco orcamentario e financeiro",
              "focus": "Para balanco orcamentario e financeiro, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "a8d3c6f6",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-17",
      "title": "Semana 17 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-032",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Balanco patrimonial e dvp",
              "focus": "Para balanco patrimonial e dvp, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "09a2aa85",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-033",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Registro, classificação e efeito patrimonial público",
              "focus": "Para registro, classificação e efeito patrimonial público, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "e6fb299b",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-034",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Nbc tsp estrutura conceitual",
              "focus": "Para nbc tsp estrutura conceitual, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "6417154f",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-035",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Variacoes patrimoniais",
              "focus": "Para variacoes patrimoniais, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "11832bb6",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-036",
              "track": "agente-geral",
              "subject": "Contabilidade Aplicada ao Setor Público",
              "goalId": "agente-geral:casp",
              "title": "Aplicação guiada · Mensuracao do patrimonio publico",
              "focus": "Para mensuracao do patrimonio publico, registre um fato contábil completo, indique contas e efeito no patrimônio ou orçamento, e confira em qual demonstração a informação aparece.",
              "pdfKey": "9b6238ca",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-matematica-financeira-s2-d4-2",
              "track": "agente-geral",
              "subject": "Matemática Financeira",
              "goalId": "agente-geral:matematica-financeira",
              "title": "Juros simples e valor final",
              "focus": "Resolva um problema do PDF indicando capital, taxa, prazo e unidade temporal. Faça o cálculo por fórmula e por decomposição; explique a diferença entre juros e montante.",
              "pdfKey": "5596df07",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-matematica-financeira-s5-d4-2",
              "track": "agente-geral",
              "subject": "Matemática Financeira",
              "goalId": "agente-geral:matematica-financeira",
              "title": "Sistemas de amortização",
              "focus": "Compare a evolução de saldo e parcela em dois períodos. Identifique no PDF a diferença entre amortização e juros e confira o saldo após cada pagamento.",
              "pdfKey": "4fa12860",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-037",
              "track": "agente-geral",
              "subject": "Matemática Financeira",
              "goalId": "agente-geral:matematica-financeira",
              "title": "Aplicação guiada · Calculo financeiro",
              "focus": "Para calculo financeiro, identifique capital, taxa, prazo e unidade temporal. Resolva um exemplo e confira o resultado por uma segunda forma de cálculo.",
              "pdfKey": "d46cbf38",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-038",
              "track": "agente-geral",
              "subject": "Matemática Financeira",
              "goalId": "agente-geral:matematica-financeira",
              "title": "Aplicação guiada · Rendas uniformes e variaveis",
              "focus": "Para rendas uniformes e variaveis, identifique capital, taxa, prazo e unidade temporal. Resolva um exemplo e confira o resultado por uma segunda forma de cálculo.",
              "pdfKey": "de8b5bbc",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-039",
              "track": "agente-geral",
              "subject": "Matemática Financeira",
              "goalId": "agente-geral:matematica-financeira",
              "title": "Aplicação guiada · Descontos",
              "focus": "Para descontos, identifique capital, taxa, prazo e unidade temporal. Resolva um exemplo e confira o resultado por uma segunda forma de cálculo.",
              "pdfKey": "9626915f",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-18",
      "title": "Semana 18 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-040",
              "track": "agente-geral",
              "subject": "Matemática Financeira",
              "goalId": "agente-geral:matematica-financeira",
              "title": "Aplicação guiada · Equivalencia de capitais",
              "focus": "Para equivalencia de capitais, identifique capital, taxa, prazo e unidade temporal. Resolva um exemplo e confira o resultado por uma segunda forma de cálculo.",
              "pdfKey": "e1d1e2fa",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-041",
              "track": "agente-geral",
              "subject": "Matemática Financeira",
              "goalId": "agente-geral:matematica-financeira",
              "title": "Aplicação guiada · Juros, taxas e valor do dinheiro no tempo",
              "focus": "Para juros, taxas e valor do dinheiro no tempo, identifique capital, taxa, prazo e unidade temporal. Resolva um exemplo e confira o resultado por uma segunda forma de cálculo.",
              "pdfKey": "7e240796",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-informatica-s3-d4-2",
              "track": "agente-geral",
              "subject": "Informática Básica",
              "goalId": "agente-geral:informatica",
              "title": "Sistema operacional e organização de arquivos",
              "focus": "No ambiente descrito no material, execute mentalmente o fluxo de criar, localizar, mover e recuperar um arquivo. Registre atalhos ou menus e a consequência de cada ação.",
              "pdfKey": "661125c5",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-042",
              "track": "agente-geral",
              "subject": "Informática Básica",
              "goalId": "agente-geral:informatica",
              "title": "Aplicação guiada · Engenharia de requisitos de software parte ii",
              "focus": "Para engenharia de requisitos de software parte ii, escreva o procedimento em etapas, o resultado esperado e um erro comum. Aplique o procedimento a um arquivo ou dado de trabalho e explique como recuperar uma falha.",
              "pdfKey": "22b97ea8",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-043",
              "track": "agente-geral",
              "subject": "Informática Básica",
              "goalId": "agente-geral:informatica",
              "title": "Aplicação guiada · Engenharia de requisitos de software parte i",
              "focus": "Para engenharia de requisitos de software parte i, escreva o procedimento em etapas, o resultado esperado e um erro comum. Aplique o procedimento a um arquivo ou dado de trabalho e explique como recuperar uma falha.",
              "pdfKey": "9f6735b3",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-044",
              "track": "agente-geral",
              "subject": "Informática Básica",
              "goalId": "agente-geral:informatica",
              "title": "Aplicação guiada · Pmbok 7",
              "focus": "Para pmbok 7, escreva o procedimento em etapas, o resultado esperado e um erro comum. Aplique o procedimento a um arquivo ou dado de trabalho e explique como recuperar uma falha.",
              "pdfKey": "2fccaaec",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-045",
              "track": "agente-geral",
              "subject": "Informática Básica",
              "goalId": "agente-geral:informatica",
              "title": "Aplicação guiada · Libreoffice 7 calc",
              "focus": "Para libreoffice 7 calc, escreva o procedimento em etapas, o resultado esperado e um erro comum. Aplique o procedimento a um arquivo ou dado de trabalho e explique como recuperar uma falha.",
              "pdfKey": "f0331892",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-046",
              "track": "agente-geral",
              "subject": "Informática Básica",
              "goalId": "agente-geral:informatica",
              "title": "Aplicação guiada · Libreoffice 7 impress",
              "focus": "Para libreoffice 7 impress, escreva o procedimento em etapas, o resultado esperado e um erro comum. Aplique o procedimento a um arquivo ou dado de trabalho e explique como recuperar uma falha.",
              "pdfKey": "539a4e7b",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-047",
              "track": "agente-geral",
              "subject": "Informática Básica",
              "goalId": "agente-geral:informatica",
              "title": "Aplicação guiada · Libreoffice 7 writer",
              "focus": "Para libreoffice 7 writer, escreva o procedimento em etapas, o resultado esperado e um erro comum. Aplique o procedimento a um arquivo ou dado de trabalho e explique como recuperar uma falha.",
              "pdfKey": "b21184a1",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-048",
              "track": "agente-geral",
              "subject": "Informática Básica",
              "goalId": "agente-geral:informatica",
              "title": "Aplicação guiada · Hardware e software",
              "focus": "Para hardware e software, escreva o procedimento em etapas, o resultado esperado e um erro comum. Aplique o procedimento a um arquivo ou dado de trabalho e explique como recuperar uma falha.",
              "pdfKey": "5ab90ae0",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-19",
      "title": "Semana 19 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-049",
              "track": "agente-geral",
              "subject": "Direito Tributário",
              "goalId": "agente-geral:tributario",
              "title": "Aplicação guiada · Responsabilidade tributária",
              "focus": "Para responsabilidade tributária, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "2fa72483",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-050",
              "track": "agente-geral",
              "subject": "Direito Tributário",
              "goalId": "agente-geral:tributario",
              "title": "Aplicação guiada · 14 26 19 a8fb3e98e7bc497c923f8d39b1706edc",
              "focus": "Para 14 26 19 a8fb3e98e7bc497c923f8d39b1706edc, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "f8e783aa",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-051",
              "track": "agente-geral",
              "subject": "Direito Tributário",
              "goalId": "agente-geral:tributario",
              "title": "Aplicação guiada · Da1fc049b59cb71ec9cf31cdb7",
              "focus": "Para da1fc049b59cb71ec9cf31cdb7, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "7a0c338e",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-052",
              "track": "agente-geral",
              "subject": "Direito Tributário",
              "goalId": "agente-geral:tributario",
              "title": "Aplicação guiada · 13 50 57 9aa44773bea341a7925e5197972fcfcb",
              "focus": "Para 13 50 57 9aa44773bea341a7925e5197972fcfcb, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "ae1bb655",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-053",
              "track": "agente-geral",
              "subject": "Direito Tributário",
              "goalId": "agente-geral:tributario",
              "title": "Aplicação guiada · 13 27 59 1f97844a7c2a4f558cb8476c9b74fff3",
              "focus": "Para 13 27 59 1f97844a7c2a4f558cb8476c9b74fff3, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "4672600b",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-054",
              "track": "agente-geral",
              "subject": "Direito Tributário",
              "goalId": "agente-geral:tributario",
              "title": "Aplicação guiada · Credito tributário",
              "focus": "Para credito tributário, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "fb026738",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-055",
              "track": "agente-geral",
              "subject": "Direito Tributário",
              "goalId": "agente-geral:tributario",
              "title": "Aplicação guiada · Introducao ao direito tributário",
              "focus": "Para introducao ao direito tributário, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "598c7c08",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-056",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Atos administrativos",
              "focus": "Para atos administrativos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "53b8fe45",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-057",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Organização administrativa",
              "focus": "Para organização administrativa, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "76036ef2",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-058",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Lei n 8 987 1995 serviços públicos",
              "focus": "Para lei n 8 987 1995 serviços públicos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "564ae536",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-20",
      "title": "Semana 20 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-059",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Falhas de mercado e respostas públicas",
              "focus": "Para falhas de mercado e respostas públicas, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "13c8a133",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-060",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Lei n 8 429 1992 improbidade administrativa",
              "focus": "Para lei n 8 429 1992 improbidade administrativa, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "f2e820af",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-061",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Controle administrativo",
              "focus": "Para controle administrativo, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "9ac38039",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-062",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Introducao ao direito administrativo",
              "focus": "Para introducao ao direito administrativo, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "57437714",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-063",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Responsabilidade civil do estado",
              "focus": "Para responsabilidade civil do estado, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "7e1c74ae",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-064",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Intervencao do estado na propriedade",
              "focus": "Para intervencao do estado na propriedade, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "0df58e98",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-065",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Poderes administrativos",
              "focus": "Para poderes administrativos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "fcab677a",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-066",
              "track": "agente-geral",
              "subject": "Direito Administrativo",
              "goalId": "agente-geral:administrativo",
              "title": "Aplicação guiada · Agentes públicos especie e classificacao",
              "focus": "Para agentes públicos especie e classificacao, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "7c9cc56e",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-067",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Competências, direitos e limites constitucionais",
              "focus": "Para competências, direitos e limites constitucionais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "d85050e6",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-068",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Competências, direitos e limites constitucionais",
              "focus": "Para competências, direitos e limites constitucionais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "83d2aa5f",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-21",
      "title": "Semana 21 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-069",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Ordem social",
              "focus": "Para ordem social, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "43dcbc93",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-070",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Ordem economica e financeira",
              "focus": "Para ordem economica e financeira, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "1b694a85",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-071",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Funcoes essenciais a justica",
              "focus": "Para funcoes essenciais a justica, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "8e2accbd",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-072",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Poder judiciario",
              "focus": "Para poder judiciario, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "697d4ca9",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-073",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Poder legislativo",
              "focus": "Para poder legislativo, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "fb0a27dd",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-074",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Teoria geral dos direitos e garantias fundamentais",
              "focus": "Para teoria geral dos direitos e garantias fundamentais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "697b317b",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-075",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Organização politico administrativa do estado",
              "focus": "Para organização politico administrativa do estado, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "d0e099b2",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-076",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Direitos politicos e partidos politicos",
              "focus": "Para direitos politicos e partidos politicos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "cc1b443e",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-077",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Direitos sociais",
              "focus": "Para direitos sociais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "d2883ce9",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-078",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Direitos e deveres individuais e coletivos",
              "focus": "Para direitos e deveres individuais e coletivos, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "c7006589",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-22",
      "title": "Semana 22 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-079",
              "track": "agente-geral",
              "subject": "Direito Constitucional",
              "goalId": "agente-geral:constitucional",
              "title": "Aplicação guiada · Principios fundamentais",
              "focus": "Para principios fundamentais, extraia regra, competência, condições, exceções e consequência. Aplique a sequência a dois casos curtos e indique qual fato mudaria a conclusão.",
              "pdfKey": "f89661bb",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-080",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Funções, gráficos e interpretação de resultados",
              "focus": "No estudo de funções, gráficos e interpretação de resultados, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "3ce6fae2",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-081",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Concordancia regencia colocacao crase e pontuacao",
              "focus": "No estudo de concordancia regencia colocacao crase e pontuacao, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "b1ee2ac7",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-082",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "c4cf5566",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-083",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "eeca386c",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-084",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "dd848170",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-085",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "c7c0cab6",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-086",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "c17c02ee",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-087",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "fb638d1d",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-088",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Leitura, estrutura e precisão textual",
              "focus": "No estudo de leitura, estrutura e precisão textual, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "4a947708",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-23",
      "title": "Semana 23 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-089",
              "track": "agente-geral",
              "subject": "Língua Portuguesa",
              "goalId": "agente-geral:portugues",
              "title": "Aplicação guiada · Tipologias e generos textuais",
              "focus": "No estudo de tipologias e generos textuais, identifique a ideia central e as pistas textuais. Resolva três questões e justifique cada resposta com uma regra ou trecho; reescreva uma frase sem alterar o sentido.",
              "pdfKey": "25aea03a",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-090",
              "track": "agente-geral",
              "subject": "Estatística",
              "goalId": "agente-geral:estatistica",
              "title": "Questão de 2019 · Q12 · Testes de regressão após mudanças",
              "focus": "Na questão 12 da Prova II, tipo 001, de Auditor TI (2019), reconstrua o raciocínio cobrado sobre testes de regressão após mudanças. Resolva primeiro sem consulta; depois compare sua justificativa com o material e registre o ponto que faltou.",
              "pdfKey": "638031c9",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-091",
              "track": "agente-geral",
              "subject": "Estatística",
              "goalId": "agente-geral:estatistica",
              "title": "Aplicação guiada · Testes de hipoteses e estatistica inferencial",
              "focus": "Para testes de hipoteses e estatistica inferencial, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "0635d69b",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-092",
              "track": "agente-geral",
              "subject": "Estatística",
              "goalId": "agente-geral:estatistica",
              "title": "Aplicação guiada · Tecnicas de amostragem",
              "focus": "Para tecnicas de amostragem, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "07f37eab",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-093",
              "track": "agente-geral",
              "subject": "Estatística",
              "goalId": "agente-geral:estatistica",
              "title": "Aplicação guiada · Intervalos de confianca",
              "focus": "Para intervalos de confianca, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "a73db265",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-094",
              "track": "agente-geral",
              "subject": "Estatística",
              "goalId": "agente-geral:estatistica",
              "title": "Aplicação guiada · Probabilidades",
              "focus": "Para probabilidades, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "79570a34",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-095",
              "track": "agente-geral",
              "subject": "Estatística",
              "goalId": "agente-geral:estatistica",
              "title": "Aplicação guiada · Medidas de posicao",
              "focus": "Para medidas de posicao, classifique os dados, resolva um exemplo com cálculo explícito e explique o que a medida permite concluir e o que ela não permite afirmar.",
              "pdfKey": "44b45ef9",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-096",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · Proteção de direitos e aplicação da norma",
              "focus": "Para proteção de direitos e aplicação da norma, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "b499427e",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-acervo-097",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · D2318d443896e5721de91ff139",
              "focus": "Para d2318d443896e5721de91ff139, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "2d7926a1",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-098",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · E5fbc4255a2d76f859f1c2224",
              "focus": "Para e5fbc4255a2d76f859f1c2224, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "db462c81",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    },
    {
      "id": "semana-24",
      "title": "Semana 24 · Complemento de Agente",
      "days": [
        {
          "day": 1,
          "label": "Segunda-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-099",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · Lei n 11 340 2006 lei maria da penha",
              "focus": "Para lei n 11 340 2006 lei maria da penha, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "1b88a116",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-100",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · 15 24 04 7ce06d30fc0d4e5583c25776e6b78376",
              "focus": "Para 15 24 04 7ce06d30fc0d4e5583c25776e6b78376, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "e9760630",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 2,
          "label": "Terça-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-101",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · Proteção de direitos e aplicação da norma",
              "focus": "Para proteção de direitos e aplicação da norma, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "e7a11a5a",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-102",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · Lei n 7 437 1985 contravencoes penais a prática de atos resultantes de preconceito de raca de cor de sexo ou de estado civil",
              "focus": "Para lei n 7 437 1985 contravencoes penais a prática de atos resultantes de preconceito de raca de cor de sexo ou de estado civil, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "8ecce124",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 3,
          "label": "Quarta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-103",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · Lei n 2 889 1956 define e pune o crime de genocidio",
              "focus": "Para lei n 2 889 1956 define e pune o crime de genocidio, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "190fe152",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 4,
          "label": "Quinta-feira",
          "lessons": [
            {
              "id": "agente-geral-acervo-104",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · Convencao internacional sobre a eliminacao de todas as formas de discriminacao racial",
              "focus": "Para convencao internacional sobre a eliminacao de todas as formas de discriminacao racial, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "5d33ce61",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-acervo-105",
              "track": "agente-geral",
              "subject": "Noções de Igualdade Racial e de Gênero",
              "goalId": "agente-geral:igualdade",
              "title": "Aplicação guiada · Convencao sobre a eliminacao de todas as formas de discriminacao contra a mulher",
              "focus": "Para convencao sobre a eliminacao de todas as formas de discriminacao contra a mulher, identifique o direito protegido, a conduta ou situação que ativa a norma e a resposta institucional. Aplique a regra a um caso e fundamente cada conclusão no material.",
              "pdfKey": "6af90bef",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 5,
          "label": "Sexta-feira",
          "lessons": [
            {
              "id": "agente-geral-administracao-publica-s1-d2-2",
              "track": "agente-geral",
              "subject": "Administração Pública",
              "goalId": "agente-geral:administracao-publica",
              "title": "Organização da Administração Pública",
              "focus": "Classifique os entes e entidades apresentados no PDF em administração direta ou indireta. Para cada exemplo, registre personalidade, vínculo e uma consequência prática.",
              "pdfKey": "aee5931c",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        },
        {
          "day": 6,
          "label": "Sábado",
          "lessons": [
            {
              "id": "agente-geral-microeconomia-s3-d2-2",
              "track": "agente-geral",
              "subject": "Microeconomia",
              "goalId": "agente-geral:microeconomia",
              "title": "Preferências, escolha e demanda",
              "focus": "Represente a decisão de consumo descrita no material e explique como uma mudança de renda ou preço altera a escolha. Resolva duas questões identificando a hipótese usada.",
              "pdfKey": "6af089ce",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            },
            {
              "id": "agente-geral-administracao-publica-s5-d2-2",
              "track": "agente-geral",
              "subject": "Administração Pública",
              "goalId": "agente-geral:administracao-publica",
              "title": "Administração Pública: princípios e atuação",
              "focus": "Separe princípio, agente, órgão e entidade nos exemplos do PDF. Escolha um caso e justifique qual princípio orienta a decisão e qual evidência permite revisá-la.",
              "pdfKey": "aee5931c",
              "pdfTrack": "agente-geral",
              "durationMinutes": 45
            }
          ]
        }
      ]
    }
  ],
  sources: [
    {
      "id": "fcc-2019-ti-discursiva",
      "title": "Auditor TI 2019 · caderno da FCC, página 17",
      "organization": "Fundação Carlos Chagas · caderno em cópia espelhada",
      "subjects": [
        "Auditor TI",
        "Discursiva",
        "FCC"
      ],
      "note": "Enunciado histórico de BPMN, Oracle e controle de custos. O espelho do site é didático.",
      "url": "https://arquivos.qconcursos.com/prova/arquivo_prova/62222/fcc-2019-sefaz-ba-auditor-fiscal-tecnologia-da-informacao-prova-ii-prova.pdf#page=17"
    },
    {
      "id": "omg-bpmn",
      "title": "BPMN 2.0.2 · especificação",
      "organization": "Object Management Group",
      "subjects": [
        "Auditor TI",
        "BPMN"
      ],
      "note": "Consulte participantes, raias, fluxos de sequência, mensagens e decisões exclusivas.",
      "url": "https://www.omg.org/spec/BPMN/2.0.2/"
    },
    {
      "id": "oracle-alter-user",
      "title": "Oracle SQL Language Reference · ALTER USER",
      "organization": "Oracle",
      "subjects": [
        "Auditor TI",
        "Banco de dados"
      ],
      "note": "Consulte alteração de senha e desbloqueio. O direito de conexão é concedido separadamente pelo privilégio CREATE SESSION.",
      "url": "https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/ALTER-USER.html"
    },
    {
      "id": "pmi-valor-agregado",
      "title": "Gerenciamento do valor agregado · desempenho de prazo e custo",
      "organization": "Project Management Institute",
      "subjects": [
        "Auditor TI",
        "Gestão de projetos"
      ],
      "note": "Compare valor agregado com valor planejado para prazo e com custo real para custo.",
      "url": "https://www.pmi.org/learning/library/evm-cpm-evaluate-project-performance-6355"
    },
    {
      "id": "lc123",
      "title": "LC nº 123/2006 · Simples Nacional",
      "organization": "Senado Federal",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Compare os tributos do documento único com as hipóteses de recolhimento específico do art. 13, § 1º, e confira o regime de crédito do art. 23.",
      "url": "https://legis.senado.leg.br/norma/572878/publicacao/34621013"
    },
    {
      "id": "ricms-st-2026",
      "title": "RICMS-BA · Anexo 1 de substituição tributária (2026)",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Confira a descrição da mercadoria e os códigos adotados pelo anexo. Para fatos de outros períodos, busque a versão indicada no índice oficial.",
      "url": "https://mbusca.sefaz.ba.gov.br/DITRI/normas_complementares/decretos/decreto_2012_13780_ricms_anexo_1_vigente_2026.pdf"
    },
    {
      "id": "sefaz-textos-legais",
      "title": "Textos Legais da SEFAZ-BA",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Índice oficial de ICMS, IPVA, ITD, taxas, Código Tributário estadual, RPAF e normas complementares. Confira o período indicado em cada versão.",
      "url": "https://www.sefaz.ba.gov.br/legislacao/textos-legais/"
    },
    {
      "id": "lei-7014-ba",
      "title": "Lei nº 7.014/1996 · ICMS na Bahia",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Comece pelos arts. 2º a 5º, 17, 28 e 29. O PDF inclui redações anteriores com as respectivas datas.",
      "url": "https://mbusca.sefaz.ba.gov.br/DITRI/leis/leis_estaduais/legest_1996_7014_icmscomnotas.pdf"
    },
    {
      "id": "lc87",
      "title": "LC nº 87/1996 · Lei Kandir",
      "organization": "Senado Federal",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Normas gerais do ICMS. Compare os arts. 2º, 3º, 12, 13 e 19 a 23 com a lei baiana.",
      "url": "https://legis.senado.leg.br/norma/572842/publicacao/34621002"
    },
    {
      "id": "lei-ipva-ba",
      "title": "Lei nº 6.348/1991 · IPVA na Bahia",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Localize o fato gerador no art. 1º e compare imunidades e isenções nos arts. 3º e 4º.",
      "url": "https://mbusca.sefaz.ba.gov.br/DITRI/leis/leis_estaduais/legest_1991_6348_lei_ipva.pdf"
    },
    {
      "id": "lei-itd-ba",
      "title": "Lei nº 4.826/1989 · ITD na Bahia",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Use os arts. 1º, 2º, 5º e 6º para identificar transmissão, contribuinte e responsabilidade. Cruze com a Constituição e as normas gerais da LC nº 227/2026.",
      "url": "https://mbusca.sefaz.ba.gov.br/DITRI/leis/leis_estaduais/legest_1989_4826_lei_itd.pdf"
    },
    {
      "id": "lc227",
      "title": "LC nº 227/2026 · normas gerais do ITCMD",
      "organization": "Câmara dos Deputados",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "O Livro II trata das normas gerais do ITCMD. Na Bahia, o tributo aparece como ITD na lei estadual.",
      "url": "https://www2.camara.leg.br/legin/fed/leicom/2026/leicomplementar-227-13-janeiro-2026-798657-normaatualizada-pl.html"
    },
    {
      "id": "lei-taxas-ba",
      "title": "Lei nº 11.631/2009 · taxas estaduais",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "O art. 1º distingue poder de polícia (Anexo I) de serviço público específico e divisível (Anexo II). Confira o item aplicável no anexo.",
      "url": "https://mbusca.sefaz.ba.gov.br/DITRI/leis/leis_estaduais/legest_2009_11631_lei_taxas.pdf"
    },
    {
      "id": "rpaf-ba",
      "title": "Decreto nº 7.629/1999 · RPAF da Bahia",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Leia os arts. 39 e 121 para distinguir requisitos do auto de infração e instauração do processo administrativo fiscal.",
      "url": "https://mbusca.sefaz.ba.gov.br/DITRI/normas_complementares/decretos/decreto_1999_7629_paf_regulamento.pdf"
    },
    {
      "id": "codigo-tributario-ba",
      "title": "Lei nº 3.956/1981 · Código Tributário da Bahia",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Use as notas do texto para identificar revogações e alterações. Para cada tributo, confira também a lei específica.",
      "url": "https://mbusca.sefaz.ba.gov.br/DITRI/leis/leis_estaduais/legest_1981_3956_codtribbahia_texto.pdf"
    },
    {
      "id": "consef-regimento",
      "title": "Decreto nº 7.592/1999 · Regimento do CONSEF",
      "organization": "SEFAZ-BA",
      "subjects": [
        "Legislação Tributária da Bahia"
      ],
      "note": "Consulte a organização e as competências do Conselho de Fazenda Estadual em conjunto com o RPAF.",
      "url": "https://mbusca.sefaz.ba.gov.br/DITRI/normas_complementares/decretos/decreto_1999_7592_rconsef_regimento.pdf"
    },
    {
      id: "cf",
      title: "Constituição Federal — texto compilado",
      organization: "Presidência da República · legislação federal",
      subjects: ["Direito Constitucional", "Direito Tributário"],
      note: "Use a versão atualizada indicada pelo Senado Federal e confira as emendas e regras de transição. O PDF aberto no chat é uma edição de 2016 e não deve ser tratado como texto vigente.",
      url: "https://www25.senado.leg.br/web/atividade/legislacao/constituicao-federal"
    },
    {
      id: "ctn",
      title: "Código Tributário Nacional — Lei nº 5.172/1966",
      organization: "Senado Federal · Legislação Federal",
      subjects: ["Direito Tributário"],
      note: "Texto compilado consultado no portal do Senado em 04/11/2026, já com alterações recentes, inclusive a LC nº 236/2026. Compare sempre a redação vigente; provas antigas não substituem a lei atual.",
      url: "https://legis.senado.leg.br/norma/547034/publicacao/34620375"
    },
    {
      id: "lc236",
      title: "Lei Complementar nº 236/2026 — texto original",
      organization: "Senado Federal · Legislação Federal",
      subjects: ["Direito Tributário", "Administração Tributária"],
      note: "Lei complementar que alterou o CTN, incluindo regras de fiscalização, conformidade, solução de controvérsias e processo administrativo fiscal. Consulte o texto original e compare com o CTN compilado.",
      url: "https://legis.senado.gov.br/norma/43756276/publicacao/43760629"
    },
    {
      id: "sefaz-icms",
      title: "ICMS na Bahia — portal de legislação e serviços",
      organization: "Secretaria da Fazenda do Estado da Bahia",
      subjects: ["Legislação Tributária da Bahia", "Documentos Fiscais", "Escrituração Fiscal Digital"],
      note: "Portal de entrada da SEFAZ-BA para legislação, documentos fiscais, EFD/SPED, declarações e fiscalização. É um índice de páginas oficiais; confira a data e a norma vigente antes de usar orientações operacionais.",
      url: "https://www.sefaz.ba.gov.br/inspetoria-eletronica/icms/"
    },
    {
      id: "efd-sefaz-ba",
      title: "Escrituração Fiscal Digital (EFD ICMS/IPI)",
      organization: "Secretaria da Fazenda do Estado da Bahia",
      subjects: ["ICMS/BA", "Escrituração Fiscal Digital"],
      note: "Página oficial com orientações da SEFAZ-BA sobre EFD. Use-a para estudar a escrituração fiscal e sua relação com documentos e apuração do ICMS; confirme prazos, obrigatoriedade e regras no texto vigente.",
      url: "https://www.sefaz.ba.gov.br/inspetoria-eletronica/icms/escrituracao-sped/escrituracao-fiscal-digital/"
    },
    {
      id: "ricms",
      title: "Regulamento do ICMS da Bahia — Decreto nº 13.780/2012",
      organization: "SEFAZ-BA · Base de legislação tributária",
      subjects: ["Legislação Tributária da Bahia"],
      note: "A base indica atualização até o Decreto nº 24.150/2025 e avisa que tem caráter informativo. Para uso jurídico, prevalecem os atos originais e alterações publicados no Diário Oficial.",
      url: "https://mbusca.sefaz.ba.gov.br/DITRI/normas_complementares/decretos/decreto_2012_13780_ricms_texto_2021.pdf"
    },
    {
      id: "cfc",
      title: "Normas Brasileiras de Contabilidade",
      organization: "Conselho Federal de Contabilidade",
      subjects: ["Contabilidade Geral", "Auditoria"],
      note: "Índice oficial das NBCs e de suas revisões. Leia o texto da norma indicada pelo conteúdo; não é necessário começar por normas avançadas.",
      url: "https://cfc.org.br/tecnica/normas-brasileiras-de-contabilidade/"
    },
    {
      id: "cpc00-r2",
      title: "CPC 00 (R2) — Estrutura Conceitual para Relatório Financeiro",
      organization: "Comitê de Pronunciamentos Contábeis",
      subjects: ["Contabilidade Geral"],
      note: "Fonte oficial para os elementos contábeis (cap. 4), reconhecimento (cap. 5), mensuração (cap. 6) e características qualitativas (cap. 2). Os resumos são introdutórios: não cobrem toda a Contabilidade nem substituem normas específicas.",
      url: "https://www.cpc.org.br/Arquivos/Documentos/573_CPC00%28R2%29.pdf"
    },
    {
      id: "fcc-2019",
      title: "Arquivo do concurso Auditor Fiscal SEFAZ-BA (2019)",
      organization: "Fundação Carlos Chagas · arquivo histórico",
      subjects: ["Questões", "Discursiva"],
      note: "Referência histórica: a página lista Administração Tributária entre as áreas do cargo em 2019 e registra a Prova III — Discursiva de Conhecimentos Específicos. Não confirma área, banca, formato ou critérios do próximo concurso.",
      url: "https://www.concursosfcc.com.br/concursos/govba118/index.html"
    },
    {
      id: "auditor-edital-2019",
      title: "Edital de Auditor Fiscal SEFAZ-BA (2019)",
      organization: "SEFAZ-BA · edital publicado no Diário Oficial; cópia do documento",
      subjects: ["Auditor TI", "Edital histórico", "FCC"],
      note: "Edital histórico organizado pela FCC. Para Auditor TI, a prova específica listava 35 questões de Informática, 15 de Gestão Organizacional e 5 de Matemática e Raciocínio Lógico, com peso 3. A Prova I comum tinha peso 2. Use o conteúdo como referência, não como programa confirmado do próximo concurso.",
      url: "https://dhg1h5j42swfq.cloudfront.net/2019/02/27163226/edital_de_abertura_de_inscricoes_versao_final_doe_de_27.02.2019__1_.pdf"
    },
    {
      id: "fgv-2022-arquivo",
      title: "Concurso de Agente de Tributos SEFAZ-BA (2022)",
      organization: "FGV Conhecimento · arquivo oficial do concurso",
      subjects: ["Agente de Tributos", "Edital histórico", "Provas e gabaritos"],
      note: "A página reúne o edital retificado, as quatro versões da prova de Administração e Finanças e os gabaritos. Use o edital e a prova da área correspondente ao seu cargo; o concurso é referência histórica da FGV.",
      url: "https://conhecimento.fgv.br/concursos/saebba22"
    },
    {
      id: "fgv-2022-edital",
      title: "Edital retificado de Agente de Tributos SEFAZ-BA (2022)",
      organization: "FGV Conhecimento · documento oficial",
      subjects: ["Agente de Tributos", "Administração e Finanças", "Edital histórico"],
      note: "Na área de Administração e Finanças, o edital previa 35 questões comuns com peso 2 e 35 específicas com peso 3. Confira o anexo do conteúdo programático e as retificações no arquivo oficial do concurso.",
      url: "https://conhecimento.fgv.br/sites/default/files/concursos/edital_retificado_22-05-18.pdf"
    },
    {
      id: "fgv-2022-prova-af",
      title: "Prova de Agente — Administração e Finanças (2022), Tipo 1",
      organization: "FGV Conhecimento · prova oficial",
      subjects: ["Agente de Tributos", "Administração e Finanças", "Questões"],
      note: "Caderno oficial com 70 questões objetivas e uma questão discursiva. Pratique a prova completa e confira o gabarito definitivo na página oficial do concurso.",
      url: "https://conhecimento.fgv.br/sites/default/files/concursos/agente_de_tributos_estaduais_administracao_e_financascns001_tipo_1.pdf"
    },
    {
      id: "autorizacao",
      title: "Autorização dos concursos da SEFAZ-BA (outubro de 2025)",
      organization: "SAEB · Governo da Bahia",
      subjects: ["Acompanhamento do concurso"],
      note: "A autorização oficial anunciou 100 vagas para Auditor Fiscal e 100 para Agente de Tributos. Até 15/11/2026, não localizei um novo edital nos canais oficiais consultados. Confira o Diário Oficial e a SAEB para atualizações.",
      url: "https://www.ba.gov.br/administracao/noticias/2025-10/8642/governador-jeronimo-autoriza-concursos-para-contratacao-de-890-novos"
    },
    {
      id: "cesgranrio-ba-banca",
      title: "Notícia sobre a escolha da banca Cesgranrio para SEFAZ-BA",
      organization: "Sindsefaz · informação secundária, publicada em 22/09/2026",
      subjects: ["Acompanhamento do concurso", "Cesgranrio"],
      note: "O sindicato noticiou a escolha da Cesgranrio e informou que o contrato e o cronograma ainda seriam formalizados naquela data. Não é edital nem ato oficial; confirme a contratação e os detalhes no Diário Oficial.",
      url: "https://www.sindsefaz.org.br/destaque/cesgranrio-organizara-concursos-da-sefaz-ba-para-auditor-fiscal-e-agente-de-tributos/"
    },
    {
      id: "cesgranrio-aft-cpnu",
      title: "CNU 2024 — cadernos e gabaritos oficiais do Bloco 4 (Cesgranrio)",
      organization: "Governo Federal · arquivo oficial do CPNU",
      subjects: ["Cesgranrio", "Treino de estilo", "Auditoria fiscal do trabalho"],
      note: "O Auditor-Fiscal do Trabalho é um cargo federal do Bloco 4, não uma SEFAZ estadual. Nas buscas em acervos oficiais não localizei edital ou prova da Cesgranrio para SEFAZ de outro estado. Use os cadernos do CNU apenas para observar enunciados e treinar o formato; eles não substituem o programa fiscal estadual.",
      url: "https://www.gov.br/gestao/pt-br/concursonacional/caderno-de-provas/caderno-de-provas"
    },
    {
      id: "diario-ba",
      title: "Diário Oficial do Estado da Bahia",
      organization: "EGBA · portal oficial de publicações",
      subjects: ["Acompanhamento do concurso", "Legislação estadual"],
      note: "Use a busca do acervo para confirmar resoluções, portarias, contratos e editais publicados. Confira a data, edição e número do ato antes de atualizar o plano de estudos.",
      url: "https://www.do.ba.gov.br/"
    },
    {
      id: "pci",
      title: "Busca de concursos por órgão",
      organization: "PCI Concursos · índice complementar",
      subjects: ["Acompanhamento do concurso", "Provas anteriores"],
      note: "Agregador complementar de concursos. Para confirmar autorização, banca, contrato e edital da SEFAZ-BA, priorize os atos do Diário Oficial e os portais oficiais do Governo da Bahia.",
      url: "https://www.pciconcursos.com.br/pesquisa/sefaz"
    }
  ],

  glossary: [
    { id:"prestacao-pecuniaria", term:"Prestação pecuniária", aliases:["pecuniária"], subject:"Direito Tributário", plain:"Dever de entregar dinheiro — ou um valor que possa ser medido em dinheiro.", example:"Pagar R$ 100 de um tributo devido é uma prestação pecuniária.", caution:"O fato de uma cobrança ser paga em dinheiro não basta para ela ser tributo; uma multa também é paga em dinheiro.", reference:"CTN, art. 3º", source:"ctn", lessonIds:["tributo"] },
    { id:"compulsoria", term:"Compulsória", aliases:["compulsoriedade"], subject:"Direito Tributário", plain:"A obrigação nasce da lei quando a situação prevista acontece; não depende de a pessoa ter aceitado ou assinado um contrato com o Estado.", example:"Se alguém realiza o fato descrito na lei, pode surgir o dever de pagar mesmo sem ter escolhido essa cobrança.", caution:"A cobrança ainda precisa respeitar a lei e os limites constitucionais.", reference:"CTN, art. 3º", source:"ctn", lessonIds:["tributo"] },
    { id:"carater-punitivo", term:"Caráter punitivo (sanção por ato ilícito)", aliases:["caráter punitivo", "sanção de ato ilícito", "sanção por ato ilícito"], subject:"Direito Tributário", plain:"É algo criado para punir uma infração. Essa finalidade é o que diferencia uma multa de um tributo.", example:"Uma multa aplicada por atraso tem finalidade punitiva; o tributo que a empresa já devia continua sendo outra cobrança.", caution:"O CTN exclui a multa do conceito de tributo, embora trate a penalidade em dinheiro como obrigação principal em relação à própria multa.", reference:"CTN, arts. 3º e 113, § 1º", source:"ctn", lessonIds:["tributo","obrigacao"] },
    { id:"instituido-em-lei", term:"Instituído em lei", aliases:["instituição legal", "instituído por lei", "legalidade tributária"], subject:"Direito Tributário", plain:"O tributo precisa ser criado por lei, dentro da competência do ente público. Um regulamento não pode inventar um tributo por conta própria.", example:"Para saber se uma cobrança foi criada corretamente, procure a lei que a instituiu e confira quem tinha competência para isso.", caution:"A Constituição prevê exceções específicas sobre como algumas alíquotas podem ser alteradas; elas não autorizam criar tributos sem base legal.", reference:"CTN, arts. 3º e 6º; Constituição, art. 150, I", source:"cf", lessonIds:["tributo","limites"] },
    { id:"atividade-vinculada", term:"Atividade administrativa plenamente vinculada", aliases:["atividade vinculada", "cobrança vinculada"], subject:"Direito Tributário", plain:"Ao aplicar e cobrar o tributo, a autoridade deve seguir os critérios que a lei definiu; não decide por preferência pessoal.", example:"Se a lei define os requisitos de uma cobrança, o agente confere os fatos e aplica esses requisitos.", caution:"Isso não dispensa a análise dos fatos nem a explicação dos motivos da decisão.", reference:"CTN, arts. 3º e 142, § 1º", source:"ctn", lessonIds:["tributo","administracao-tributaria"] },
    { id:"fato-gerador", term:"Fato gerador", aliases:["fatos geradores"], subject:"Direito Tributário", plain:"É a situação que a lei descreve e que, quando acontece, faz nascer uma obrigação tributária.", example:"A lei do imposto de renda define quais situações de obtenção de renda podem gerar a obrigação, com os critérios e exceções próprios.", caution:"O nome do fato, sozinho, não resolve o caso: confira a regra aplicável, o período e os detalhes da situação.", reference:"CTN, arts. 4º e 114–118", source:"ctn", lessonIds:["tributo","obrigacao","competencia"] },
    { id:"obrigacao-principal", term:"Obrigação principal", aliases:["obrigação tributária principal"], subject:"Direito Tributário", plain:"É o dever de pagar o tributo ou uma penalidade em dinheiro.", example:"Pagar o imposto devido é cumprir a obrigação principal.", caution:"A obrigação principal pode envolver a multa; isso não transforma a multa em tributo.", reference:"CTN, art. 113, § 1º", source:"ctn", lessonIds:["obrigacao"] },
    { id:"obrigacao-acessoria", term:"Obrigação acessória", aliases:["obrigações acessórias"], subject:"Direito Tributário", plain:"É um dever de fazer ou deixar de fazer algo para ajudar a arrecadação ou a fiscalização.", example:"Entregar uma declaração ou emitir um documento fiscal são exemplos de deveres instrumentais previstos em lei.", caution:"“Acessória” não quer dizer opcional nem menos importante.", reference:"CTN, art. 113, § 2º", source:"ctn", lessonIds:["obrigacao","icms-ba"] },
    { id:"dever-instrumental", term:"Dever instrumental", aliases:["deveres instrumentais", "dever instrumental", "obrigação acessória"], subject:"Direito Tributário", plain:"É uma tarefa ou proibição que organiza informações e permite ao Fisco acompanhar as operações. É outro nome usado para obrigação acessória.", example:"Emitir nota, manter registros e enviar uma declaração podem ser deveres instrumentais.", caution:"Se o dever for descumprido, pode haver multa; a multa não significa automaticamente que o tributo principal também é devido.", reference:"CTN, art. 113, §§ 2º e 3º", source:"ctn", lessonIds:["obrigacao","icms-ba"] },
    { id:"penalidade-pecuniaria", term:"Penalidade pecuniária", aliases:["penalidade em dinheiro", "multa pecuniária"], subject:"Direito Tributário", plain:"É uma multa paga em dinheiro por causa de uma infração.", example:"Uma multa prevista para o atraso de uma obrigação é uma penalidade pecuniária.", caution:"A multa é sanção, não tributo. Pelo CTN, ela entra na obrigação principal quanto ao dever de pagar a própria penalidade.", reference:"CTN, art. 113, §§ 1º e 3º", source:"ctn", lessonIds:["tributo","obrigacao"] },
    { id:"competencia-tributaria", term:"Competência tributária", aliases:["competência para instituir tributos"], subject:"Direito Tributário", plain:"É o poder que a Constituição dá a cada ente público para criar os tributos que cabem a ele.", example:"A Constituição atribui aos Estados e ao Distrito Federal a competência para instituir o ICMS.", caution:"Dividir a arrecadação ou delegar tarefas de fiscalização não transfere o poder de criar o tributo.", reference:"CTN, arts. 6º–8º; Constituição, art. 155, II", source:"cf", lessonIds:["competencia","icms"] },
    { id:"capacidade-tributaria-ativa", term:"Capacidade tributária ativa", aliases:["capacidade ativa"], subject:"Direito Tributário", plain:"É a aptidão para figurar como credor e exigir o cumprimento da obrigação quando a lei lhe atribui essa função.", example:"Uma pessoa jurídica de direito público pode receber de outra funções de arrecadação ou fiscalização previstas em lei.", caution:"Não confunda com competência tributária: a capacidade ativa permite exigir ou administrar; a competência é o poder constitucional de instituir.", reference:"CTN, arts. 7º e 119", source:"ctn", lessonIds:["competencia"] },
    { id:"sujeito-ativo", term:"Sujeito ativo", aliases:["sujeito ativo da obrigação"], subject:"Direito Tributário", plain:"É a pessoa jurídica de direito público que pode exigir o cumprimento da obrigação tributária.", example:"Depois de identificar a regra do tributo, pergunte qual ente público tem direito de exigi-lo.", caution:"Não presuma que quem recebe uma parte da arrecadação é, por isso, quem instituiu o tributo.", reference:"CTN, art. 119", source:"ctn", lessonIds:["competencia"] },
    { id:"sujeito-passivo", term:"Sujeito passivo", aliases:["sujeito passivo da obrigação"], subject:"Direito Tributário", plain:"É quem tem o dever legal de cumprir a obrigação: pagar o tributo ou realizar o dever previsto.", example:"Pode ser a pessoa que praticou a situação tributada ou alguém que a lei apontou como responsável.", caution:"A responsabilidade de uma pessoa depende da regra legal; não basta ela estar relacionada ao fato.", reference:"CTN, arts. 121 e 122", source:"ctn", lessonIds:["competencia","obrigacao"] },
    { id:"lancamento-tributario", term:"Lançamento tributário", aliases:["lançamento"], subject:"Direito Tributário", plain:"É o procedimento em que a autoridade verifica o fato, identifica quem deve, calcula o valor e formaliza o crédito tributário.", example:"Antes de registrar uma cobrança, a autoridade confere o período, a operação, a regra e os dados necessários ao cálculo.", caution:"Um indício ou uma divergência inicial não prova, sozinho, que houve infração.", reference:"CTN, art. 142", source:"ctn", lessonIds:["administracao-tributaria"] },
    { id:"credito-tributario", term:"Crédito tributário", aliases:["crédito"], subject:"Direito Tributário", plain:"É o valor que o Fisco pode exigir depois que a obrigação é constituída conforme o procedimento previsto em lei.", example:"O lançamento formaliza o crédito ao determinar o valor e identificar o sujeito passivo.", caution:"Crédito constituído, obrigação e dinheiro já recebido são coisas diferentes.", reference:"CTN, arts. 139 e 142", source:"ctn", lessonIds:["administracao-tributaria","obrigacao"] },
    { id:"irretroatividade", term:"Irretroatividade tributária", aliases:["irretroatividade"], subject:"Direito Constitucional", plain:"Uma lei nova que cria ou aumenta tributo não pode ser usada para cobrar por uma situação que aconteceu antes de ela existir.", example:"Se uma regra nova passa a valer em janeiro, ela não pode aumentar retroativamente o imposto sobre um fato ocorrido em dezembro anterior.", caution:"Irretroatividade é diferente de anterioridade: uma olha para o passado; a outra estabelece prazo para começar a cobrar.", reference:"Constituição, art. 150, III, a", source:"cf", lessonIds:["limites"] },
    { id:"anterioridade", term:"Anterioridade tributária", aliases:["anterioridade anual", "noventena", "anterioridade nonagesimal"], subject:"Direito Constitucional", plain:"É uma regra de espera: em geral, um tributo recém-criado ou aumentado só pode ser cobrado depois dos prazos constitucionais aplicáveis.", example:"Ao analisar um aumento, verifique se incidem a espera até o exercício seguinte, a de 90 dias, ou ambas.", caution:"Há exceções na própria Constituição. Identifique o tributo e o tipo de mudança antes de concluir.", reference:"Constituição, art. 150, III, b e c", source:"cf", lessonIds:["limites"] },
    { id:"imunidade", term:"Imunidade tributária", aliases:["imunidade"], subject:"Direito Constitucional", plain:"É uma proteção escrita na Constituição que impede cobrar determinados impostos dentro do alcance previsto.", example:"A Constituição protege certas situações ou entidades de alguns impostos, desde que os requisitos constitucionais sejam atendidos.", caution:"Imunidade vem da Constituição; isenção é um benefício criado por lei. Não são sinônimos.", reference:"Constituição, art. 150, VI", source:"cf", lessonIds:["limites"] },
    { id:"nao-cumulatividade", term:"Não cumulatividade do ICMS", aliases:["não cumulatividade"], subject:"Legislação Tributária da Bahia", plain:"Em linhas gerais, o imposto devido em uma etapa pode considerar créditos das etapas anteriores, conforme as regras aplicáveis.", example:"Na apuração, a empresa compara débitos das saídas e créditos admitidos das entradas.", caution:"Nem toda compra gera crédito. É preciso conferir Constituição, lei complementar e legislação estadual vigente.", reference:"Constituição, art. 155, § 2º, I", source:"cf", lessonIds:["icms","icms-ba"] },
    { id:"patrimonio", term:"Patrimônio", aliases:["patrimônio da entidade"], subject:"Contabilidade Geral", plain:"É o conjunto de recursos e direitos que a entidade controla e das obrigações que precisa cumprir.", example:"Caixa, equipamentos e valores a receber se relacionam com dívidas e com o patrimônio líquido.", caution:"Patrimônio não é apenas o dinheiro disponível na conta.", reference:"Conceitos introdutórios de Contabilidade", source:"cfc", lessonIds:["patrimonio"] },
    { id:"ativo", term:"Ativo", aliases:["ativos"], subject:"Contabilidade Geral", plain:"É um recurso controlado pela entidade, como dinheiro, equipamento ou um valor que ela tem direito a receber.", example:"Um computador usado pela empresa pode ser reconhecido como ativo quando atende aos critérios contábeis.", caution:"Ativo não significa necessariamente dinheiro disponível agora.", reference:"Conceitos introdutórios de Contabilidade", source:"cfc", lessonIds:["patrimonio","demonstracoes"] },
    { id:"passivo", term:"Passivo", aliases:["passivos"], subject:"Contabilidade Geral", plain:"É uma obrigação que a entidade terá de cumprir, como pagar um fornecedor ou quitar um empréstimo.", example:"Uma conta de fornecedor ainda não paga representa uma obrigação registrada no passivo.", caution:"Passivo não é sinônimo de prejuízo: é uma obrigação, e pode existir mesmo em uma entidade lucrativa.", reference:"Conceitos introdutórios de Contabilidade", source:"cfc", lessonIds:["patrimonio","demonstracoes"] },
    { id:"patrimonio-liquido", term:"Patrimônio líquido", aliases:["PL"], subject:"Contabilidade Geral", plain:"É o valor que sobra dos ativos depois de descontar os passivos.", example:"Se uma entidade tem R$ 100 em ativos e R$ 65 em obrigações, o patrimônio líquido é R$ 35.", caution:"Não é necessariamente o saldo em caixa nem o valor pelo qual a entidade poderia ser vendida.", reference:"Equação patrimonial: Ativo = Passivo + Patrimônio Líquido", source:"cfc", lessonIds:["patrimonio"] },
    { id:"partidas-dobradas", term:"Partidas dobradas", aliases:["método das partidas dobradas"], subject:"Contabilidade Geral", plain:"Cada lançamento registra os dois lados da operação, mantendo o total de débitos igual ao total de créditos.", example:"Uma compra à vista aumenta a conta do equipamento e reduz a conta de caixa pelo mesmo valor.", caution:"Débito e crédito são lados do registro contábil; não significam automaticamente saída e entrada de dinheiro.", reference:"Método contábil de escrituração", source:"cfc", lessonIds:["lancamentos"] },
    { id:"regime-competencia", term:"Regime de competência", aliases:["competência contábil"], subject:"Contabilidade Geral", plain:"Receitas e despesas são registradas quando acontecem, mesmo que o dinheiro seja recebido ou pago em outra data.", example:"Uma venda a prazo pode gerar receita agora e entrada de caixa somente no mês seguinte.", caution:"Resultado contábil e saldo de caixa respondem a perguntas diferentes.", reference:"Conceitos introdutórios de Contabilidade", source:"cfc", lessonIds:["demonstracoes"] },
    { id:"dfc", term:"Demonstração dos Fluxos de Caixa (DFC)", aliases:["DFC", "fluxo de caixa"], subject:"Contabilidade Geral", plain:"É o relatório que mostra de onde veio e para onde foi o dinheiro e seus equivalentes durante um período.", example:"A DFC organiza fluxos ligados às atividades operacionais, de investimento e de financiamento.", caution:"A DFC mostra movimentação de caixa; não substitui a DRE, que apresenta o resultado do período.", reference:"Demonstração contábil", source:"cfc", lessonIds:["demonstracoes"] },
    { id:"evidencia-suficiente", term:"Evidência suficiente", aliases:["suficiência da evidência"], subject:"Auditoria", plain:"É a quantidade de evidência reunida para sustentar uma conclusão.", example:"Uma amostra maior pode aumentar a quantidade de evidência, mas precisa ser planejada com método.", caution:"Mais documentos não significam automaticamente evidência melhor.", reference:"Normas Brasileiras de Auditoria — NBC TA 500", source:"cfc", lessonIds:["auditoria"] },
    { id:"evidencia-adequada", term:"Evidência adequada", aliases:["adequação da evidência"], subject:"Auditoria", plain:"É a qualidade da evidência: o quanto ela é relevante e confiável para responder à pergunta examinada.", example:"Um documento obtido diretamente de uma fonte confiável pode ser mais relevante que uma anotação sem origem identificada.", caution:"Quantidade (suficiência) e qualidade (adequação) se complementam; não são a mesma coisa.", reference:"Normas Brasileiras de Auditoria — NBC TA 500", source:"cfc", lessonIds:["auditoria"] },
    { id:"proposicao", term:"Proposição", aliases:["proposição lógica", "proposições"], subject:"Raciocínio Lógico", plain:"É uma frase que pode ser classificada como verdadeira ou falsa.", example:"“A empresa entregou a declaração” pode ser verificada como verdadeira ou falsa; “Entregue a declaração!” é uma ordem, não uma proposição.", caution:"Perguntas, ordens e frases sem valor de verdade definido não são proposições simples.", reference:"Lógica proposicional — conceito introdutório", source:null, lessonIds:["rlm"] },
    { id:"media", term:"Média aritmética", aliases:["média"], subject:"Estatística", plain:"É a soma dos valores dividida pela quantidade de valores.", example:"A média de 2, 4 e 6 é 4: (2 + 4 + 6) ÷ 3.", caution:"Valores muito altos ou baixos podem puxar a média para um lado.", reference:"Estatística descritiva — conceito introdutório", source:null, lessonIds:["estatistica"] },
    { id:"mediana", term:"Mediana", aliases:[], subject:"Estatística", plain:"É o valor que fica no meio depois que os dados são colocados em ordem.", example:"Na sequência 2, 3, 3, 4 e 28, a mediana é 3.", caution:"Ordene os dados primeiro. Com quantidade par de valores, use a média dos dois valores centrais.", reference:"Estatística descritiva — conceito introdutório", source:null, lessonIds:["estatistica"] },
    { id:"receita-prevista", term:"Receita prevista", aliases:["previsão de receita"], subject:"Economia e Finanças Públicas", plain:"É uma estimativa do valor que o governo espera arrecadar; não quer dizer que o dinheiro já entrou no caixa.", example:"Uma previsão orçamentária pode ser diferente do valor efetivamente arrecadado ao longo do ano.", caution:"Separe previsão, arrecadação realizada e dinheiro disponível.", reference:"Orçamento público — conceito introdutório", source:null, lessonIds:["economia"] }
  ],

  lessons: [
    {
      id: "tributo",
      subject: "Direito Tributário",
      title: "O que caracteriza um tributo",
      minutes: 8,
      goal: "Reconhecer os elementos do conceito legal de tributo e distingui-lo de uma multa.",
      body: [
        "O art. 3º do CTN define tributo como prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir, que não seja sanção por ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.",
        "A definição reúne cinco pistas: pagamento em dinheiro; obrigação imposta por lei; ausência de caráter punitivo; instituição legal; e cobrança vinculada às regras legais, sem escolha livre da autoridade. O nome dado à cobrança não resolve sua natureza: o fato gerador e o regime jurídico importam."
      ],
      example: "Uma multa aplicada porque houve infração é sanção. Um imposto sobre renda lícita não pune a obtenção da renda: é uma obrigação tributária definida em lei.",
      traps: ["Confundir multa com tributo porque ambos podem gerar pagamento ao Estado.", "Achar que a destinação do dinheiro arrecadado, sozinha, define a espécie tributária."],
      source: "ctn",
      review: "Por que uma multa não é tributo, mesmo sendo uma prestação em dinheiro?",
      reviewAnswer: "Porque a multa é sanção por ato ilícito; o art. 3º do CTN exclui essa natureza do conceito de tributo."
    },
    {
      id: "obrigacao",
      subject: "Direito Tributário",
      title: "Obrigação principal e obrigação acessória",
      minutes: 9,
      goal: "Separar o dever de pagar do dever de fazer, não fazer ou informar.",
      body: [
        "No CTN, a obrigação principal tem por objeto pagar tributo ou penalidade pecuniária e surge com a ocorrência do fato gerador. A obrigação acessória decorre da legislação tributária e envolve prestações positivas ou negativas de interesse da arrecadação ou da fiscalização.",
        "Escriturar documentos, emitir nota fiscal e entregar declaração são exemplos de deveres instrumentais. O descumprimento de uma obrigação acessória pode gerar penalidade pecuniária; conforme o art. 113, § 3º, do CTN, essa penalidade converte-se em obrigação principal relativamente à multa."
      ],
      example: "A empresa entrega uma declaração no prazo: cumpre obrigação acessória. Se a declaração indicar imposto devido, o pagamento é obrigação principal.",
      traps: ["Chamar toda obrigação acessória de facultativa; ela é juridicamente obrigatória.", "Dizer que a declaração, por si só, é sempre o pagamento do tributo."],
      source: "ctn",
      review: "Uma obrigação acessória pode gerar obrigação principal? Em que sentido?",
      reviewAnswer: "Sim. O descumprimento pode gerar penalidade pecuniária, que passa a ser tratada como obrigação principal em relação à multa."
    },
    {
      id: "competencia",
      subject: "Direito Tributário",
      title: "Competência tributária e capacidade ativa",
      minutes: 9,
      goal: "Distinguir poder de instituir tributo das funções de fiscalizar e arrecadar.",
      body: [
        "A competência tributária é atribuída pela Constituição e permite que o ente competente institua tributos por lei. O CTN trata essa competência como indelegável. Isso não impede que funções administrativas de arrecadação, fiscalização ou execução sejam atribuídas a outra pessoa jurídica de direito público, nos termos do art. 7º.",
        "A prova pode inverter os termos: delegar a fiscalização não significa transferir a competência para criar o tributo. Também não confunda repartição da receita com transferência da competência legislativa."
      ],
      example: "Um ente pode receber a tarefa administrativa de arrecadar determinada receita sem ganhar o poder constitucional de instituir o tributo correspondente.",
      traps: ["Afirmar que a competência passa a outro ente quando a arrecadação é compartilhada.", "Confundir competência tributária com capacidade para executar atos de fiscalização."],
      source: "ctn",
      review: "O que pode ser delegado segundo o art. 7º do CTN, e o que permanece indelegável?",
      reviewAnswer: "Funções administrativas podem ser atribuídas a outra pessoa jurídica de direito público; a competência legislativa para instituir tributo é indelegável."
    },
    {
      id: "limites",
      subject: "Direito Constitucional",
      title: "Limitações ao poder de tributar: três princípios-base",
      minutes: 10,
      goal: "Identificar legalidade, irretroatividade e anterioridade como limites constitucionais.",
      body: [
        "A Constituição limita a atuação tributária dos entes. Em uma primeira revisão, organize três princípios: legalidade (instituição ou aumento depende de lei, observadas as exceções constitucionais); irretroatividade (não se cobra tributo por fato gerador anterior à lei que o instituiu ou aumentou); e anterioridade (há limites temporais à cobrança após publicação, com exceções expressas).",
        "A anterioridade anual e a noventena são regras diferentes e podem incidir em conjunto ou sofrer exceções previstas na Constituição. Em questões, primeiro identifique o tributo e a mudança normativa; depois confira o texto constitucional específico."
      ],
      example: "Se uma lei aumenta tributo, a pergunta não termina em ‘foi publicada’: é preciso identificar qual regra de anterioridade se aplica e se há exceção constitucional.",
      traps: ["Tratar toda regra como absoluta e ignorar exceções expressas.", "Usar ‘anterioridade’ como sinônimo de irretroatividade."],
      source: "cf",
      review: "Qual princípio impede cobrar tributo com base em lei posterior ao fato gerador?",
      reviewAnswer: "A irretroatividade tributária, prevista no art. 150, III, ‘a’, da Constituição, ressalvadas as hipóteses constitucionais de retroatividade benigna previstas em lei."
    },
    {
      id: "icms",
      subject: "Legislação Tributária da Bahia",
      title: "ICMS: competência e mapa de incidência",
      minutes: 11,
      goal: "Localizar o ICMS na Constituição e usar a lei complementar e a legislação estadual como trilha de leitura.",
      body: [
        "A Constituição atribui aos Estados e ao Distrito Federal competência para instituir o ICMS sobre operações relativas à circulação de mercadorias e sobre prestações de transporte interestadual e intermunicipal e de comunicação, nos termos do art. 155, II. A Lei Complementar nº 87/1996 estabelece normas gerais; a Bahia complementa o estudo com sua legislação estadual e o RICMS.",
        "Para resolver um caso, pergunte: qual é a operação ou prestação? Quem é o contribuinte ou responsável? Qual documento registra o fato? Em que momento ocorre o fato gerador? Que regra de crédito, benefício ou regime especial pode afetar o cálculo? As respostas dependem do texto vigente, da Constituição, da lei complementar e da norma baiana aplicável."
      ],
      example: "Uma prestação de transporte entre dois municípios da Bahia deve ser analisada dentro da competência descrita no art. 155, II; a incidência concreta exige conferir a LC 87/1996 e as regras estaduais vigentes.",
      traps: ["Tratar qualquer deslocamento físico como circulação tributável sem analisar a operação jurídica.", "Usar alíquota antiga de uma apostila como se fosse vigente.", "Ignorar a transição da reforma tributária ao ler materiais anteriores."],
      source: "sefaz-icms",
      review: "Quais três grandes grupos de operações e prestações aparecem no art. 155, II, da Constituição?",
      reviewAnswer: "Operações relativas à circulação de mercadorias, prestações de transporte interestadual e intermunicipal e prestações de comunicação."
    },
    {
      id: "icms-ba",
      subject: "Legislação Tributária da Bahia",
      title: "Como ler o RICMS-BA sem decorar uma versão vencida",
      minutes: 8,
      goal: "Criar um método de leitura da norma estadual e registrar a versão consultada.",
      body: [
        "O RICMS-BA é aprovado pelo Decreto nº 13.780/2012 e recebe alterações posteriores. A base da SEFAZ disponibiliza texto consolidado para consulta e informa atualizações. Use-o para encontrar a estrutura do regulamento, mas verifique a data de atualização e os atos publicados no Diário Oficial quando a questão envolver regra específica.",
        "Monte uma ficha por tema: dispositivo, hipótese, sujeito, prazo ou documento, exceção e fonte da alteração. Em estudo de ICMS, guarde também a data em que conferiu a norma. Isso evita misturar regra antiga com texto atualizado."
      ],
      example: "Ao estudar cadastro de contribuintes, anote capítulo e dispositivo do RICMS, consulte a versão consolidada e confirme se houve decreto posterior alterando aquele trecho.",
      traps: ["Tratar uma base informativa como substituta da publicação oficial.", "Memorizar regras de incidência, prazos ou alíquotas sem anotar a data e a fonte."],
      source: "ricms",
      review: "Por que uma ficha de legislação deve registrar a data e o ato consultado?",
      reviewAnswer: "Porque decretos podem alterar o regulamento e a data permite conferir se a regra memorizada continua vigente."
    },
    {
      "id": "ba-icms-incidencia",
      "subject": "Legislação Tributária da Bahia",
      "title": "ICMS na prática · venda, transferência e transporte",
      "minutes": 14,
      "goal": "Classificar a operação e separar a saída física do fato gerador.",
      "body": [
        "Comece por este módulo. Depois pratique cálculo e créditos, DIFAL, substituição tributária, Simples Nacional, IPVA, ITD, taxas e processo fiscal. Resolva os exercícios antes de ver o comentário. Em um bloco novo, use 8 acertos em 10 como meta de treino e explique por que a alternativa mais próxima está errada.",
        "Na Lei baiana nº 7.014/1996, o art. 2º trata das hipóteses de incidência e o art. 4º localiza o momento do fato gerador. Na venda regular de mercadoria do estoque a outro titular, confira primeiro a circulação e depois o momento da saída. Para transporte, identifique se existe prestação e se origem e destino ficam em municípios diferentes.",
        "Em transferência para outro estabelecimento de mesma titularidade, a regra é que a saída não configura fato gerador e se mantém o crédito das operações anteriores, nos termos do art. 4º, § 9º. O § 10 prevê opção pela equiparação à operação tributada. Em questão histórica, use a redação da data indicada."
      ],
      "example": "Uma rede leva caixas do estoque de Salvador para sua própria filial em Feira de Santana. Sem a opção do § 10, o deslocamento não gera ICMS sobre a mercadoria transferida. Se uma transportadora contratada faz o trajeto, essa prestação intermunicipal deve ser analisada à parte.",
      "traps": [
        "Tratar todo deslocamento de mercadoria entre municípios como venda.",
        "Aplicar a não incidência da transferência à prestação de transporte contratada."
      ],
      "source": "lei-7014-ba",
      "review": "Quais dois fatos você analisa quando a filial recebe mercadoria transportada por empresa contratada?",
      "reviewAnswer": "A transferência da mercadoria entre estabelecimentos do mesmo titular e a prestação autônoma de transporte intermunicipal."
    },
    {
      "id": "ba-icms-apuracao",
      "subject": "Legislação Tributária da Bahia",
      "title": "ICMS na prática · cálculo por dentro e créditos",
      "minutes": 14,
      "goal": "Identificar a base da operação e calcular o saldo do período com os créditos admitidos.",
      "body": [
        "Na operação, identifique primeiro a base e depois aplique a alíquota fornecida. Pela Lei nº 7.014/1996, art. 17, § 1º, I, o montante do próprio imposto integra a base. Se o enunciado já deu o valor da operação com ICMS incluído e sem outros ajustes, multiplique diretamente pela alíquota. Se deu um valor líquido sem ICMS e pede apenas a inclusão do próprio imposto, divida o valor líquido por 1 menos a alíquota em decimal.",
        "Na apuração, compare os débitos das saídas com os créditos de entrada admitidos pelas regras do caso. A compensação vem do art. 28. Use o art. 29 e suas condições para determinar quais entradas efetivamente geram crédito. Separe o cálculo do imposto de uma nota do saldo a recolher no período."
      ],
      "example": "Suponha uma saída com base de R$ 1.000 já com ICMS e alíquota didática de 20%. O débito é R$ 200. Se esse for o único débito e houver R$ 120 de créditos admitidos no período, o saldo devedor será R$ 80.",
      "traps": [
        "Somar o ICMS outra vez a uma base que já o inclui.",
        "Deduzir o total das compras em lugar do imposto creditável."
      ],
      "source": "lei-7014-ba",
      "review": "Se R$ 800 é o valor sem ICMS e a alíquota hipotética é de 20%, de quanto são a base e o imposto?",
      "reviewAnswer": "Base de R$ 1.000 (800 ÷ 0,80) e imposto de R$ 200."
    },
    {
      "id": "ba-icms-difal-st",
      "subject": "Legislação Tributária da Bahia",
      "title": "ICMS na prática · DIFAL e substituição tributária",
      "minutes": 14,
      "goal": "Descobrir quem recolhe e por que o imposto foi exigido.",
      "body": [
        "Para o DIFAL de consumidor final, confirme que a operação é interestadual, que o destino é consumidor final e se ele é contribuinte de ICMS. A diferença entre a alíquota interna do destino e a interestadual pertence ao Estado de destino. Em regra, a responsabilidade é do destinatário quando contribuinte e do remetente quando o destinatário não é contribuinte. Consulte a Constituição, art. 155, § 2º, VII e VIII, e a Lei baiana nº 7.014/1996, art. 15, § 7º.",
        "Na substituição tributária para operações seguintes, a lei atribui a alguém na cadeia a responsabilidade de reter e recolher o imposto dessas operações. Identifique a responsabilidade no art. 8º e o critério de base no art. 23 da Lei nº 7.014/1996. Para saber se uma mercadoria entra no regime, confira a descrição, os códigos e o período no Anexo 1 do RICMS."
      ],
      "example": "Uma loja de outro Estado vende para uma pessoa física da Bahia que vai usar o produto. A primeira análise é de operação interestadual a consumidor final não contribuinte. Se o enunciado trocar essa pessoa por uma loja que comprou para revenda, refaça a classificação antes de aplicar a mesma regra.",
      "traps": [
        "Tratar qualquer compra interestadual como DIFAL de consumidor final.",
        "Concluir que há substituição tributária pelo nome informal do produto."
      ],
      "source": "lei-7014-ba",
      "review": "Que mudança no destinatário altera o responsável pelo DIFAL em uma aquisição interestadual para consumo final?",
      "reviewAnswer": "A condição de contribuinte de ICMS. Em regra, sendo contribuinte, o destinatário responde. Sem essa condição, responde o remetente."
    },
    {
      "id": "ba-simples-icms",
      "subject": "Legislação Tributária da Bahia",
      "title": "Simples Nacional na prática · quando o DAS resolve?",
      "minutes": 12,
      "goal": "Identificar o ICMS no recolhimento unificado, as hipóteses fora dele e o crédito do adquirente.",
      "body": [
        "No Simples Nacional, a regra é recolher pelo documento único (DAS) os tributos abrangidos, entre eles o ICMS conforme o art. 13 da LC nº 123/2006. Antes de encerrar a análise, confira o § 1º, XIII. Ele lista hipóteses de ICMS devido conforme a legislação aplicável aos demais contribuintes ou responsáveis, com exemplos de substituição tributária, importação e antecipação nas condições previstas.",
        "O art. 23 distingue duas pontas da operação. A optante segue a regra do caput para créditos dos tributos abrangidos. Já o adquirente não optante pode ter crédito de ICMS se comprar mercadorias destinadas à comercialização ou industrialização e atender às condições da lei. O § 1º limita o crédito ao ICMS efetivamente devido pela optante em relação à aquisição."
      ],
      "example": "Uma indústria fora do Simples compra insumos de uma empresa optante. Confira a destinação à industrialização, as informações fiscais e o limite legal. Para uma compra que não satisfaça aquelas condições, a resposta precisa mudar.",
      "traps": [
        "Presumir que todos os valores de ICMS da optante são pagos pelo DAS.",
        "Calcular o crédito da não optante pela alíquota interna comum sem conferir o limite legal."
      ],
      "source": "lc123",
      "review": "Que detalhe você verifica antes de dizer que uma aquisição de empresa do Simples dá crédito para a compradora não optante?",
      "reviewAnswer": "Verifique a destinação à industrialização ou comercialização, as demais condições do art. 23 e o limite do ICMS efetivamente devido pela optante em relação à aquisição."
    },
    {
      "id": "ba-ipva",
      "subject": "Legislação Tributária da Bahia",
      "title": "IPVA na prática · qual data vale?",
      "minutes": 10,
      "goal": "Escolher o momento do fato gerador em cenários de veículo em circulação, novo ou importado.",
      "body": [
        "O IPVA é anual e tem por fato gerador a propriedade do veículo automotor. Na Lei nº 6.348/1991, art. 1º, § 1º, a data geral é 1º de janeiro. Em veículo novo alienado a consumidor final, o § 2º aponta a data da alienação. Se o consumidor final importa diretamente o veículo, novo ou usado, o § 4º aponta o desembaraço aduaneiro.",
        "Separe três perguntas. Qual é o evento que gera o imposto? Em que data ocorreu? A lei prevê imunidade ou isenção para o caso? Os arts. 3º e 4º são o ponto de partida para a terceira pergunta."
      ],
      "example": "Um consumidor adquire um veículo novo de uma revendedora em maio e o licencia em junho. Para o momento do fato gerador desse exercício, comece pela alienação em maio.",
      "traps": [
        "Aplicar 1º de janeiro sem conferir se o veículo é novo.",
        "Usar a data do licenciamento como resposta automática."
      ],
      "source": "lei-ipva-ba",
      "review": "Se o consumidor final importou diretamente um carro usado, qual evento indica a data do fato gerador?",
      "reviewAnswer": "O desembaraço aduaneiro, conforme o art. 1º, § 4º, da Lei nº 6.348/1991."
    },
    {
      "id": "ba-itd",
      "subject": "Legislação Tributária da Bahia",
      "title": "ITD na prática · quem recebe e quem responde",
      "minutes": 12,
      "goal": "Identificar a transmissão e distinguir contribuinte de responsável em casos de doação e herança.",
      "body": [
        "O ITD é o nome do ITCMD na lei baiana. Os arts. 1º e 2º da Lei nº 4.826/1989 tratam da transmissão por morte e da doação de bens ou direitos. Se há dois herdeiros ou donatários, conte as transmissões por beneficiário, conforme o art. 2º, § 2º.",
        "Na doação, o contribuinte é o donatário, quem recebe. Na transmissão por morte, são contribuintes os adquirentes. O art. 6º trata da responsabilidade solidária do doador ou inventariante, conforme o caso, quando a transmissão ocorre sem pagamento do imposto devido. Para questões de competência, situações com exterior ou cálculo, confronte a Constituição, a LC nº 227/2026 e a redação estadual aplicável na data."
      ],
      "example": "Uma pessoa doa gratuitamente um bem a Ana e outro a Lia. Antes de apurar a base ou a alíquota, identifique duas donatárias e dois fatos geradores, ressalvadas as regras de não incidência e isenção.",
      "traps": [
        "Contar apenas a escritura, mesmo quando há mais de um beneficiário.",
        "Confundir o contribuinte com quem pode responder solidariamente."
      ],
      "source": "lei-itd-ba",
      "review": "Em uma doação tributável, quem é o contribuinte e quem pode responder solidariamente se o imposto devido não foi pago?",
      "reviewAnswer": "O donatário é contribuinte. O doador responde solidariamente na hipótese do art. 6º da Lei nº 4.826/1989."
    },
    {
      "id": "ba-taxas",
      "subject": "Legislação Tributária da Bahia",
      "title": "Taxas da Bahia · fiscalização ou serviço?",
      "minutes": 10,
      "goal": "Classificar a hipótese e localizar o anexo antes de procurar valor.",
      "body": [
        "A Lei nº 11.631/2009, art. 1º, tem dois pontos de entrada. O Anexo I lista situações de exercício regular do poder de polícia. O Anexo II lista serviços públicos estaduais específicos e divisíveis. Poder de polícia é a atuação do Estado que condiciona ou fiscaliza o exercício de uma atividade ou direito.",
        "Pergunte o que motivou a cobrança. Se é fiscalização de atividade sujeita a controle estadual, investigue o item do Anexo I. Se é serviço, verifique a hipótese do Anexo II e se há uso efetivo ou, quando couber, potencial. Para a utilização potencial, confira também as condições do art. 79, I, b, do CTN."
      ],
      "example": "Uma empresa está sujeita à fiscalização estadual de atividade potencialmente poluidora. A análise começa pelo poder de polícia (art. 3º e Anexo I da Lei nº 11.631/2009). A emissão de um documento prestada como serviço exige checar o item aplicável no Anexo II.",
      "traps": [
        "Procurar o valor da taxa antes de enquadrar o fato.",
        "Tratar qualquer ação estatal de interesse coletivo como serviço específico e divisível."
      ],
      "source": "lei-taxas-ba",
      "review": "Que pergunta distingue os dois anexos?",
      "reviewAnswer": "A cobrança decorre de fiscalização ou de um serviço público específico e divisível previsto em lei?"
    },
    {
      "id": "ba-processo-fiscal",
      "subject": "Legislação Tributária da Bahia",
      "title": "Processo fiscal baiano · do auto à defesa",
      "minutes": 13,
      "goal": "Separar apuração, auto de infração, ciência e instauração do contencioso.",
      "body": [
        "No auto de infração, cheque a descrição dos fatos, o demonstrativo do débito e os dispositivos que fundamentam a exigência e a multa. O art. 39, III a V, do RPAF baiano permite conferir se a descrição e o cálculo sustentam a conclusão. Para alegar nulidade, examine as hipóteses do art. 18 e o caso concreto.",
        "Separe a data da lavratura, a ciência e a data de apresentação da defesa. Na hipótese estudada, o processo para solução do litígio se instaura com a defesa escrita que impugna o lançamento por auto de infração, conforme art. 121, I, do RPAF. O § 1º exclui a defesa intempestiva e aquela apresentada após a extinção do crédito pelo pagamento."
      ],
      "example": "A fiscalização aponta diferença entre documentos e escrituração. Antes de defender a cobrança, confronte quais operações foram imputadas, o período, os valores e o dispositivo indicado. Com a defesa escrita tempestiva contra o lançamento, o litígio segue para análise na via administrativa.",
      "traps": [
        "Achar que lavrar o auto inicia por si só o processo para solução do litígio do art. 121, I.",
        "Concluir que qualquer falha formal produz nulidade automaticamente."
      ],
      "source": "rpaf-ba",
      "review": "Qual dispositivo orienta o conteúdo do auto e qual trata da instauração pela defesa?",
      "reviewAnswer": "O art. 39 orienta o conteúdo do auto. O art. 121, I, trata da instauração pela apresentação da defesa escrita."
    },
    {
      id: "administracao-tributaria",
      subject: "Administração Tributária · referência histórica (2019)",
      title: "Fiscalização, conformidade e processo tributário",
      minutes: 14,
      goal: "Mapear poderes de fiscalização, garantias procedimentais e atualizações recentes do CTN.",
      body: [
        "A página do concurso baiano de 2019 registra Administração Tributária como uma das áreas do cargo de Auditor Fiscal. Isso é referência histórica escolhida para o plano, não previsão do próximo edital. No CTN vigente, o Título IV organiza temas de fiscalização, dívida ativa e certidões.",
        "O art. 194 remete à legislação tributária a definição dos poderes de fiscalização e alcança pessoas naturais ou jurídicas, contribuintes ou não, inclusive imunes ou isentas. A LC nº 236/2026 acrescentou medidas preventivas para possibilitar autorregularização antes do auto de infração e programas de conformidade orientados por voluntariedade, boa-fé, diálogo, transparência, busca da conformidade, prevenção de litígios e proporcionalidade.",
        "A mesma lei incluiu o art. 194-A, sobre efeitos de decisões vinculantes do STF e do STJ para a administração tributária, e detalhou no art. 196 o documento que precede a fiscalização. Esse documento identifica autoridades e contribuinte, objeto e período, documentos necessários, verificação de autenticidade e duração do procedimento. O texto também trata de sigilo fiscal, cooperação entre Fazendas, controle de legalidade da dívida ativa e processo administrativo fiscal.",
        "Para estudar, registre artigo e versão consultada. Separe texto vigente, regras locais ainda dependentes de legislação específica e o conteúdo histórico do edital de 2019; o próximo edital definirá o programa efetivo."
      ],
      example: "Uma equipe inicia fiscalização em um estabelecimento. Antes de concluir sobre infração, confira o documento de início, o escopo e o período, valide a origem dos dados e proteja informações fiscais. A conclusão deve se limitar às evidências e à legislação aplicável.",
      traps: ["Supor que imunidade ou isenção impede qualquer fiscalização.", "Tratar autorregularização e denúncia espontânea como sinônimos.", "Usar o conteúdo do edital de 2019 como se fosse o futuro programa."],
      source: "lc236",
      review: "Que informações o documento de início da fiscalização deve identificar, conforme o art. 196 atualizado?",
      reviewAnswer: "Autoridades, contribuinte e estabelecimentos; objeto e período da fiscalização; documentos necessários; forma de confirmar autenticidade; e prazo de duração."
    },
    {
      id: "patrimonio",
      subject: "Contabilidade Geral",
      title: "Patrimônio e equação fundamental",
      minutes: 10,
      goal: "Classificar ativos, passivos e patrimônio líquido e interpretar a igualdade contábil.",
      body: [
        "O patrimônio pode ser estudado por seus recursos controlados (ativos), obrigações presentes (passivos) e interesse residual dos proprietários (patrimônio líquido). A equação patrimonial básica é Ativo = Passivo + Patrimônio Líquido.",
        "Cada fato contábil altera elementos da equação, mas a igualdade permanece. Para resolver lançamentos, identifique o que entrou, o que saiu e se a entidade passou a ter uma obrigação ou um direito. Não comece escolhendo débito ou crédito por intuição; primeiro classifique as contas."
      ],
      example: "Uma empresa compra equipamento à vista por R$ 5 mil: o imobilizado aumenta e o caixa diminui no mesmo valor. O ativo total pode permanecer igual, embora sua composição mude.",
      traps: ["Tratar patrimônio líquido como sinônimo de dinheiro em caixa.", "Supor que toda aquisição aumenta o ativo total."],
      source: "cfc",
      review: "Uma compra de equipamento à vista altera necessariamente o ativo total?",
      reviewAnswer: "Não. Pode ocorrer apenas uma troca entre contas do ativo: equipamento aumenta e caixa diminui pelo mesmo valor."
    },
    {
      id: "lancamentos",
      subject: "Contabilidade Geral",
      title: "Débito e crédito: registro em partidas dobradas",
      minutes: 10,
      goal: "Entender a mecânica de igualdade dos lançamentos sem confundir débito com perda.",
      body: [
        "No método das partidas dobradas, cada lançamento mantém igualdade entre débitos e créditos. Débito e crédito indicam lados do registro, não significam automaticamente entrada e saída de dinheiro. O efeito depende da natureza da conta.",
        "Uma sequência útil: identificar o fato; separar contas afetadas; classificá-las; lembrar a natureza e o saldo normal; e verificar se a soma dos débitos coincide com a soma dos créditos."
      ],
      example: "No pagamento de uma dívida de fornecedor, debita-se a obrigação para reduzi-la e credita-se o caixa para reduzi-lo. O registro total continua equilibrado.",
      traps: ["Afirmar que débito sempre diminui e crédito sempre aumenta.", "Lançar só a conta de caixa porque foi a única movimentada em dinheiro."],
      source: "cfc",
      review: "O que precisa ser verificado ao final de um lançamento?",
      reviewAnswer: "A soma dos valores debitados deve ser igual à soma dos valores creditados."
    },
    {
      id: "demonstracoes",
      subject: "Contabilidade Geral",
      title: "Balanço, resultado e fluxo de caixa respondem a perguntas distintas",
      minutes: 9,
      goal: "Separar posição patrimonial, desempenho e movimentação de caixa.",
      body: [
        "O balanço patrimonial mostra ativos, passivos e patrimônio líquido em determinada data. A demonstração do resultado organiza receitas e despesas de um período para apurar o resultado. A demonstração dos fluxos de caixa evidencia entradas e saídas de caixa por atividades.",
        "Lucro não é a mesma coisa que caixa disponível. A entidade pode reconhecer receita pelo regime de competência antes do recebimento; por isso, as demonstrações se complementam."
      ],
      example: "Uma venda a prazo pode compor a receita do período e gerar um direito a receber, mesmo sem entrada imediata de dinheiro.",
      traps: ["Usar lucro e saldo de caixa como sinônimos.", "Confundir a fotografia em uma data com o desempenho ao longo do período."],
      source: "cfc",
      review: "Qual demonstração ajuda a localizar entradas e saídas de caixa no período?",
      reviewAnswer: "A Demonstração dos Fluxos de Caixa (DFC)."
    },
    {
      id: "elementos-contabeis",
      subject: "Contabilidade Geral",
      title: "Elementos contábeis: posição e desempenho",
      minutes: 12,
      goal: "Distinguir ativo, passivo e patrimônio líquido de receita e despesa com base na estrutura conceitual.",
      body: [
        "Ativo é um recurso econômico presente controlado pela entidade como resultado de eventos passados; recurso econômico é um direito com potencial de produzir benefícios. Passivo é uma obrigação presente de transferir recurso econômico, também decorrente de eventos passados. Patrimônio líquido é a participação residual nos ativos depois de deduzidos os passivos.",
        "Ativos, passivos e patrimônio líquido descrevem a posição financeira. Receitas e despesas descrevem o desempenho do período: receita aumenta o patrimônio líquido por aumento de ativo ou redução de passivo, exceto contribuição de proprietários; despesa o reduz por redução de ativo ou aumento de passivo, exceto distribuição aos proprietários."
      ],
      example: "A entrada de dinheiro aportado por uma sócia aumenta caixa e patrimônio líquido, mas é contribuição de proprietária, não receita. Uma distribuição de lucros reduz caixa e patrimônio líquido, mas não é despesa.",
      traps: ["Tratar ativo como sinônimo de dinheiro em caixa ou do benefício futuro, em vez do direito presente controlado.", "Classificar aporte de capital como receita ou distribuição aos proprietários como despesa."],
      source: "cpc00-r2",
      review: "Qual é a diferença entre ativo e receita na Estrutura Conceitual?",
      reviewAnswer: "Ativo é um recurso econômico presente controlado pela entidade. Receita é uma mudança que aumenta o patrimônio líquido por aumento de ativos ou redução de passivos, ressalvadas contribuições de proprietários."
    },
    {
      id: "informacao-contabil-util",
      subject: "Contabilidade Geral",
      title: "O que torna a informação contábil útil",
      minutes: 11,
      goal: "Reconhecer relevância e representação fidedigna como características fundamentais da informação financeira útil.",
      body: [
        "A informação financeira útil precisa ser relevante para as decisões e representar fidedignamente o fenômeno que pretende retratar. A representação é apoiada por informação completa, neutra e sem erros no processo; relevância inclui a capacidade de fazer diferença para os usuários e pode envolver valor preditivo, confirmatório ou ambos.",
        "Comparabilidade, capacidade de verificação, tempestividade e compreensibilidade aumentam a utilidade. Essas características não substituem as duas fundamentais. Materialidade é específica da entidade: uma omissão, distorção ou obscuridade é material quando pode influenciar razoavelmente as decisões dos principais usuários."
      ],
      example: "Um relatório divulgado a tempo, com critérios explicados e sem omitir uma obrigação relevante, ajuda a comparar períodos e avaliar a posição da entidade.",
      traps: ["Confundir características fundamentais com as características de melhoria.", "Supor que materialidade tem um limite quantitativo uniforme para todas as entidades."],
      source: "cpc00-r2",
      review: "Quais são as duas características qualitativas fundamentais da informação financeira útil?",
      reviewAnswer: "Relevância e representação fidedigna. Comparabilidade, capacidade de verificação, tempestividade e compreensibilidade são características de melhoria."
    },
    {
      id: "reconhecimento-contabil",
      subject: "Contabilidade Geral",
      title: "Reconhecimento: quando um item entra nas demonstrações",
      minutes: 11,
      goal: "Distinguir a definição de um elemento contábil da decisão de reconhecê-lo nas demonstrações.",
      body: [
        "Um item pode atender à definição de ativo, passivo, receita ou despesa e ainda exigir análise antes de ser reconhecido. A decisão deve produzir informação relevante e representar fidedignamente o fenômeno; incerteza, mensuração e custo de fornecer a informação podem afetar essa avaliação.",
        "Em termos simples, ‘reconhecer’ é incluir o item nas demonstrações com valor e descrição adequados. Um ativo deixa de ser reconhecido quando a entidade perde seu controle; um passivo, quando deixa de existir a obrigação presente. Normas específicas detalham o tratamento de cada tipo de item."
      ],
      example: "Uma empresa recebe um equipamento e assume uma obrigação de pagamento. A análise considera se ela controla o recurso e se existe obrigação presente; não se espera o caixa sair para começar a avaliar os registros.",
      traps: ["Supor que todo item que parece cumprir uma definição entra automaticamente nas demonstrações.", "Confundir reconhecimento com pagamento ou recebimento em dinheiro."],
      source: "cpc00-r2",
      review: "Que duas qualidades a informação precisa ter para apoiar o reconhecimento de um item?",
      reviewAnswer: "A decisão deve gerar informação relevante e representar fidedignamente o fenômeno, considerando também os custos e outras circunstâncias da informação disponível."
    },
    {
      id: "mensuracao-contabil",
      subject: "Contabilidade Geral",
      title: "Mensuração: custo histórico e valores correntes",
      minutes: 10,
      goal: "Entender que mensurar é atribuir um valor contábil e que diferentes bases respondem a perguntas distintas.",
      body: [
        "Mensuração é o processo de determinar o valor pelo qual um elemento será apresentado. O custo histórico parte do valor da transação ou evento que originou o item e pode ser atualizado por eventos posteriores. Bases de valor corrente refletem condições na data da mensuração; entre elas há medidas com objetivos distintos, como valor justo e valor em uso.",
        "Não existe uma regra geral de que todo ativo deva ser mostrado pelo preço de mercado atual. A estrutura conceitual ajuda a entender as bases, enquanto a norma específica aplicável define qual delas usar, como aplicar e que informações divulgar."
      ],
      example: "Uma máquina comprada por R$ 100 mil começa com custo da transação. O valor contábil posterior pode refletir depreciação ou outras regras da norma aplicável; não se troca automaticamente pelo preço de anúncio de uma máquina parecida.",
      traps: ["Tratar custo histórico como sinônimo de valor que nunca muda.", "Usar ‘valor de mercado’ como uma medida única e substituir automaticamente o critério exigido pela norma específica."],
      source: "cpc00-r2",
      review: "Qual é a diferença geral entre custo histórico e uma base de valor corrente?",
      reviewAnswer: "O custo histórico parte do valor da transação ou evento de origem; o valor corrente reflete condições na data da mensuração. A norma específica define a base aplicável."
    },
    {
      id: "admin",
      subject: "Direito Administrativo",
      title: "Princípios expressos da Administração Pública",
      minutes: 8,
      goal: "Reconhecer legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      body: [
        "O art. 37, caput, da Constituição lista princípios expressos para a Administração Pública direta e indireta: legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE). Eles orientam a atuação administrativa e aparecem em situações concretas, não apenas como uma sigla para decorar.",
        "Legalidade administrativa significa atuação conforme autorização e limites jurídicos. Impessoalidade veda promoção pessoal e exige finalidade pública. Publicidade permite transparência, observadas as hipóteses de sigilo. Eficiência busca boa prestação do serviço dentro da legalidade."
      ],
      example: "Um órgão publica dados de desempenho sem expor informação protegida: publicidade e transparência convivem com os deveres de sigilo previstos em lei.",
      traps: ["Achar que publicidade elimina toda hipótese legal de sigilo.", "Usar eficiência para justificar violação de uma regra legal."],
      source: "cf",
      review: "Quais são os cinco princípios expressos no art. 37, caput?",
      reviewAnswer: "Legalidade, impessoalidade, moralidade, publicidade e eficiência."
    },
    {
      id: "auditoria",
      subject: "Auditoria",
      title: "Evidência, risco e documentação de auditoria",
      minutes: 10,
      goal: "Compreender por que uma conclusão precisa de evidência suficiente e apropriada.",
      body: [
        "Em auditoria, a conclusão deve ser sustentada por evidência. ‘Suficiente’ se refere à quantidade; ‘apropriada’ à qualidade e relevância da evidência. O planejamento considera riscos para direcionar procedimentos, mas não transforma uma amostra em prova automática de todas as operações.",
        "A documentação permite compreender o trabalho realizado, os elementos examinados, os resultados e as conclusões. Em estudo tributário, isso ajuda a construir uma cadeia verificável entre fato, documento, regra e encaminhamento."
      ],
      example: "Se uma análise de dados apontar divergência entre notas e escrituração, o auditor precisa validar a origem dos dados, examinar documentos relevantes e registrar os testes e limites da conclusão.",
      traps: ["Tratar volume de documentos como sinônimo de qualidade.", "Concluir fraude a partir de uma inconsistência sem testar explicações alternativas."],
      source: "cfc",
      review: "Qual é a diferença entre suficiência e adequação de uma evidência?",
      reviewAnswer: "Suficiência trata da quantidade; adequação, da qualidade, relevância e confiabilidade da evidência."
    },
    {
      id: "portugues",
      subject: "Língua Portuguesa",
      title: "Interpretação: localizar a tese antes de julgar alternativas",
      minutes: 8,
      goal: "Identificar tema, tese, argumentos e relações entre partes do texto.",
      body: [
        "Em questões de interpretação, separe tema (assunto geral) de tese (posição defendida). Depois localize os argumentos, exemplos e conectores que mostram causa, oposição, consequência ou conclusão.",
        "Antes de escolher uma alternativa, volte ao trecho que sustenta a afirmação. Desconfie de opções que ampliam uma conclusão, trocam possibilidade por certeza ou atribuem ao autor uma opinião de uma fonte citada."
      ],
      example: "Se o texto afirma que uma medida ‘pode reduzir’ um problema, a alternativa que diz que ela ‘elimina’ o problema exagera a conclusão.",
      traps: ["Responder pelo que parece verdadeiro fora do texto.", "Ignorar palavras de restrição, como ‘em parte’, ‘principalmente’ e ‘pode’."],
      source: "fcc-2019",
      review: "O que muda quando uma alternativa substitui ‘pode contribuir’ por ‘garante’?",
      reviewAnswer: "Ela transforma uma possibilidade em certeza e pode extrapolar a afirmação original."
    },
    {
      id: "rlm",
      subject: "Raciocínio Lógico",
      title: "Proposições e conectivos básicos",
      minutes: 9,
      goal: "Traduzir enunciados simples para proposições e avaliar conectivos.",
      body: [
        "Uma proposição é uma sentença declarativa à qual se pode atribuir valor verdadeiro ou falso. Na conjunção ‘p e q’, a proposição composta é verdadeira apenas se ambas forem verdadeiras. Na disjunção inclusiva ‘p ou q’, basta ao menos uma ser verdadeira.",
        "A condicional ‘se p, então q’ só é falsa quando p é verdadeira e q é falsa. Negar ‘todo A é B’ produz ‘existe ao menos um A que não é B’; a negação não é ‘nenhum A é B’."
      ],
      example: "‘Se entreguei a declaração, então registrei o protocolo.’ A condicional só falha se a declaração foi entregue sem o protocolo descrito no consequente.",
      traps: ["Tratar o ‘ou’ lógico como necessariamente exclusivo.", "Negar uma universal sem usar um contraexemplo existencial."],
      source: null,
      review: "Quando a condicional ‘se p, então q’ é falsa?",
      reviewAnswer: "Somente quando p é verdadeira e q é falsa."
    },
    {
      id: "matematica-financeira",
      subject: "Matemática Financeira",
      title: "Juros simples e juros compostos",
      minutes: 9,
      goal: "Distinguir crescimento linear de capitalização por período.",
      body: [
        "Em juros simples, os juros incidem sobre o capital inicial: J = C × i × n. O montante é M = C + J. Em juros compostos, o saldo de cada período passa a ser a base do período seguinte: M = C × (1 + i)ⁿ.",
        "Converta a taxa para a mesma unidade do prazo antes de calcular. Uma taxa mensal não pode ser aplicada diretamente a um prazo em anos sem conversão ou formulação equivalente."
      ],
      example: "Capital de R$ 1.000, taxa simples de 2% ao mês, por 3 meses: J = 1.000 × 0,02 × 3 = R$ 60; M = R$ 1.060.",
      traps: ["Usar a taxa percentual como número inteiro em vez de decimal.", "Aplicar a fórmula simples a um enunciado de capitalização composta."],
      source: null,
      review: "Em juros simples, sobre qual base incidem os juros de cada período?",
      reviewAnswer: "Sobre o capital inicial."
    },
    {
      id: "ti",
      subject: "Tecnologia da Informação",
      title: "Segurança da informação: confidencialidade, integridade e disponibilidade",
      minutes: 8,
      goal: "Associar riscos e controles aos três objetivos clássicos da segurança.",
      body: [
        "Confidencialidade limita o acesso à informação a quem está autorizado. Integridade protege a informação contra alteração ou destruição indevida. Disponibilidade busca que sistemas e dados estejam acessíveis quando necessários.",
        "Controles como autenticação, gestão de perfis, cópias de segurança, logs, atualização e plano de continuidade contribuem para objetivos diferentes. Uma mesma medida pode apoiar mais de um objetivo, mas a questão costuma destacar o risco principal."
      ],
      example: "Uma cópia de segurança testada ajuda a recuperar dados após falha e apoia disponibilidade e resiliência; não substitui controle de acesso.",
      traps: ["Supor que backup, sozinho, garante confidencialidade.", "Confundir autenticação (confirmar identidade) com autorização (definir permissões)."],
      source: null,
      review: "Que objetivo é diretamente afetado se alguém altera um registro sem autorização?",
      reviewAnswer: "Integridade."
    },
    {
      id: "economia",
      subject: "Economia e Finanças Públicas",
      title: "Receita, despesa e equilíbrio fiscal: primeiros conceitos",
      minutes: 9,
      goal: "Diferenciar a função arrecadatória e a função alocativa do orçamento público.",
      body: [
        "A atuação fiscal envolve arrecadação de receitas e financiamento de políticas públicas. O orçamento estima receitas e fixa despesas para um período, dentro das regras constitucionais e legais. A análise de finanças públicas considera também distribuição de recursos, incentivos, estabilidade e sustentabilidade.",
        "Em um caso, separe previsão de arrecadação, ingresso efetivo e disponibilidade financeira. A classificação e o reconhecimento contábil dependem das normas aplicáveis ao setor público."
      ],
      example: "Uma previsão de receita no orçamento não prova que o recurso já foi arrecadado ou que existe caixa disponível naquele momento.",
      traps: ["Tratar previsão orçamentária como entrada de caixa.", "Confundir aumento de arrecadação com melhoria automática de todos os resultados fiscais."],
      source: null,
      review: "Por que uma previsão de receita não é o mesmo que dinheiro já disponível?",
      reviewAnswer: "Porque a previsão é uma estimativa orçamentária; o ingresso e a disponibilidade dependem da arrecadação e dos registros financeiros."
    },
    {
      id: "estatistica",
      subject: "Estatística",
      title: "Média e mediana diante de valores extremos",
      minutes: 8,
      goal: "Escolher uma medida de tendência central compatível com a distribuição.",
      body: [
        "A média aritmética é a soma dos valores dividida pela quantidade. A mediana é o valor central após ordenar os dados; com quantidade par, é a média dos dois valores centrais. Uma observação extrema pode deslocar bastante a média, enquanto a mediana costuma ser mais resistente.",
        "Antes de calcular, ordene quando necessário, observe o número de elementos e confira se a pergunta exige média, mediana ou outra medida."
      ],
      example: "Na série 2, 3, 3, 4 e 28, a mediana é 3 e a média é 8. O valor 28 eleva a média.",
      traps: ["Calcular a mediana sem ordenar os dados.", "Confundir resistência a extremos com imunidade total a qualquer alteração."],
      source: null,
      review: "Qual medida tende a ser menos afetada por um único valor muito alto: média ou mediana?",
      reviewAnswer: "A mediana, porque depende da posição central após a ordenação e não da soma de todos os valores."
    }
  ],

  questions: [
    {"id": "q-ba-icms-01", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-incidencia", "prompt": "Uma loja transfere mercadorias para sua filial no mesmo Estado, sem optar pela equiparação à operação tributada. No dia seguinte, a filial vende as mercadorias a outro titular. Em qual saída há fato gerador do ICMS sobre as mercadorias, nas condições comuns do enunciado?", "options": ["Em ambas, pela movimentação física", "Apenas na saída para a filial", "Apenas na saída pela venda ao outro titular", "Em nenhuma, pois a mercadoria ficou na Bahia"], "answer": 2, "explanation": "A transferência sem opção está no art. 4º, § 9º, da Lei nº 7.014/1996. A venda a outro titular se enquadra no art. 2º, I, e a saída é o momento da regra geral do art. 4º, I.", "source": "lei-7014-ba"},
    {"id": "q-ba-icms-02", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-incidencia", "prompt": "Uma transportadora é contratada para levar mercadoria de uma filial em Salvador para outra do mesmo titular em Feira de Santana. Após classificar a transferência da mercadoria, o que o auditor ainda precisa analisar?", "options": ["A prestação remunerada de transporte intermunicipal", "A prestação de transporte internacional", "A mudança de titularidade da mercadoria durante o trajeto", "A venda simbólica da mercadoria pela transportadora"], "answer": 0, "explanation": "A transferência da mercadoria e a prestação de transporte são fatos distintos. A LC nº 87/1996, art. 2º, II, inclui o transporte intermunicipal no campo do ICMS.", "source": "lc87"},
    {"id": "q-ba-icms-03", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-incidencia", "prompt": "Ao revisar sua ficha, uma candidata escreveu que a transferência entre estabelecimentos do mesmo titular jamais pode ser equiparada a uma operação tributada. Que informação muda a análise?", "options": ["O simples destaque de uma alíquota no relatório interno", "A existência de estoques em municípios diferentes", "O valor contábil do estoque", "O exercício da opção prevista no art. 4º, § 10"], "answer": 3, "explanation": "O § 9º traz a regra da transferência sem fato gerador. O § 10 da Lei nº 7.014/1996 prevê expressamente a equiparação por opção do contribuinte.", "source": "lei-7014-ba"},
    {"id": "q-ba-icms-04", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-apuracao", "prompt": "O valor de uma operação é R$ 1.500, já com o ICMS incluído. Use alíquota didática de 20% e desconsidere outros ajustes. Qual é o ICMS da operação?", "options": ["R$ 375", "R$ 300", "R$ 250", "R$ 1.800"], "answer": 1, "explanation": "R$ 1.500 × 20% = R$ 300. A base fornecida já inclui o imposto, conforme a lógica do art. 17, § 1º, I, da Lei nº 7.014/1996.", "source": "lei-7014-ba"},
    {"id": "q-ba-icms-05", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-apuracao", "prompt": "O único valor fornecido foi R$ 900, líquido de ICMS. A alíquota didática é 10% e o único ajuste é incluir o imposto na própria base. Qual par está correto?", "options": ["Base R$ 900 e imposto R$ 90", "Base R$ 990 e imposto R$ 90", "Base R$ 1.000 e imposto R$ 100", "Base R$ 1.000 e imposto R$ 90"], "answer": 2, "explanation": "A parte líquida representa 90% da base. R$ 900 ÷ 0,90 = R$ 1.000. O imposto é 10% da base, ou R$ 100. Lei nº 7.014/1996, art. 17, § 1º, I.", "source": "lei-7014-ba"},
    {"id": "q-ba-icms-06", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-apuracao", "prompt": "Uma empresa apurou R$ 430 em débitos de ICMS nas saídas. Dos R$ 250 de imposto informado nas entradas, apenas R$ 160 dão direito a crédito no período. Sem saldos anteriores ou ajustes, quanto deve recolher?", "options": ["R$ 180", "R$ 270", "R$ 430", "R$ 590"], "answer": 1, "explanation": "Compense apenas o crédito admitido. R$ 430 − R$ 160 = R$ 270. Os arts. 28 e 29 da Lei nº 7.014/1996 fundamentam a não cumulatividade e o direito ao crédito.", "source": "lei-7014-ba"},
    {"id": "q-ba-regime-01", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-difal-st", "prompt": "Uma loja em outro Estado vende mercadoria a consumidor final que não é contribuinte de ICMS, localizado na Bahia. Na regra constitucional geral, a quem pertence o DIFAL e quem o recolhe?", "options": ["Ao Estado de origem, recolhido pelo remetente", "À Bahia, recolhido pelo destinatário", "À Bahia, recolhido pelo remetente", "Ao município baiano, recolhido pelo destinatário"], "answer": 2, "explanation": "Pelo art. 155, § 2º, VII e VIII, b, da Constituição, a diferença cabe ao Estado de destino e o remetente responde pelo recolhimento se o destinatário não é contribuinte.", "source": "cf"},
    {"id": "q-ba-regime-02", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-difal-st", "prompt": "Um varejista compra de outro Estado para revender. Um colega quer aplicar a regra constitucional de DIFAL de consumidor final só porque a operação é interestadual. Qual é o erro?", "options": ["A compra para revenda não preenche a condição de destinação a consumidor final", "Somente municípios podem exigir diferença de alíquotas", "O DIFAL exige sempre importação do exterior", "A alíquota interna tem de ser igual à interestadual"], "answer": 0, "explanation": "A condição de consumidor final é expressa no art. 155, § 2º, VII, da Constituição. A compra para revenda pode exigir exame de outras hipóteses, como antecipação ou substituição, conforme a operação.", "source": "cf"},
    {"id": "q-ba-regime-03", "subject": "Legislação Tributária da Bahia", "lesson": "ba-icms-difal-st", "prompt": "Uma mercadoria aparece com nome parecido ao de um item de substituição tributária em material de 2023. O fato ocorreu em 2026. Qual é a primeira verificação adequada?", "options": ["Aplicar o anexo de 2023 porque o nome é parecido", "Exigir ST porque a mercadoria veio de outro Estado", "Dispensar ST se a empresa emitiu nota", "Comparar descrição e códigos com o anexo aplicável em 2026 e conferir a abrangência da operação"], "answer": 3, "explanation": "O Anexo 1 é apresentado em versões por período. O enquadramento exige examinar mercadoria e operação na versão aplicável. Depois localize a responsabilidade e a base previstas na legislação.", "source": "ricms-st-2026"},
    {"id": "q-ba-simples-01", "subject": "Legislação Tributária da Bahia", "lesson": "ba-simples-icms", "prompt": "Uma empresa optante realizou operação sujeita a ICMS por substituição tributária expressamente prevista no art. 13, § 1º, XIII, da LC nº 123/2006. Qual conclusão está correta?", "options": ["A opção pelo Simples substitui o documento fiscal", "O ICMS dessa hipótese segue a legislação específica aplicável e deve ser analisado fora do recolhimento unificado", "A substituição deixa de existir por opção da empresa", "O DAS cobre qualquer cobrança estadual sem exceção"], "answer": 1, "explanation": "O art. 13, § 1º, XIII, prevê hipóteses específicas de ICMS que seguem a legislação aplicável aos demais contribuintes ou responsáveis. A opção pelo regime não elimina essa análise.", "source": "lc123"},
    {"id": "q-ba-simples-02", "subject": "Legislação Tributária da Bahia", "lesson": "ba-simples-icms", "prompt": "Um comprador fora do Simples adquire mercadoria para revenda de empresa optante. Admitido o crédito e observadas as condições legais, qual é o limite pelo art. 23, § 1º, da LC nº 123/2006?", "options": ["Sempre o preço total da mercadoria", "Sempre a alíquota interna comum aplicada ao valor da nota", "O menor preço de venda do comprador", "O ICMS efetivamente devido pela optante em relação à aquisição"], "answer": 3, "explanation": "O art. 23, § 1º, limita o crédito do adquirente não optante ao ICMS efetivamente devido pela optante em relação à aquisição, atendidas as condições legais.", "source": "lc123"},
    {"id": "q-ba-ipva-01", "subject": "Legislação Tributária da Bahia", "lesson": "ba-ipva", "prompt": "Um consumidor compra um carro novo de uma revendedora baiana em 10 de abril e licencia o veículo em 2 de maio. Considerada a Lei nº 6.348/1991, qual data marca o fato gerador?", "options": ["1º de janeiro, por ser imposto anual", "2 de maio, no licenciamento", "31 de dezembro, no fechamento do exercício", "10 de abril, na alienação ao consumidor final"], "answer": 3, "explanation": "O art. 1º, § 2º, fixa a data da alienação ao consumidor final no caso descrito. A regra geral de 1º de janeiro e o licenciamento não determinam o momento dessa aquisição.", "source": "lei-ipva-ba"},
    {"id": "q-ba-ipva-02", "subject": "Legislação Tributária da Bahia", "lesson": "ba-ipva", "prompt": "Um consumidor final importa diretamente um carro usado. O contrato foi assinado em março, o desembaraço ocorreu em abril e o registro no Estado ocorreu em maio. Qual fato marca o momento indicado na lei baiana?", "options": ["Desembaraço em abril", "Assinatura em março", "Registro em maio", "Abertura do exercício seguinte"], "answer": 0, "explanation": "O art. 1º, § 4º, da Lei nº 6.348/1991 usa o desembaraço aduaneiro na importação direta pelo consumidor final, seja o veículo novo ou usado.", "source": "lei-ipva-ba"},
    {"id": "q-ba-itd-01", "subject": "Legislação Tributária da Bahia", "lesson": "ba-itd", "prompt": "Uma escritura formaliza doações tributáveis a três donatários distintos. Quantos fatos geradores de ITD são identificados pela regra do art. 2º, § 2º, da lei baiana?", "options": ["Um, porque há uma escritura", "Dois, porque a primeira doação absorve a seguinte", "Três, um para cada donatário", "O número de doadores, independentemente dos donatários"], "answer": 2, "explanation": "A Lei nº 4.826/1989 conta fatos geradores distintos conforme o número de donatários ou herdeiros. A unidade da escritura não muda essa contagem.", "source": "lei-itd-ba"},
    {"id": "q-ba-itd-02", "subject": "Legislação Tributária da Bahia", "lesson": "ba-itd", "prompt": "Em uma doação tributável sujeita à lei da Bahia, Marta doou um bem a Joana e o imposto devido não foi pago. Como identificar os papéis?", "options": ["Marta é contribuinte e Joana é responsável solidária", "Joana é contribuinte e Marta pode responder solidariamente", "Joana e Marta são contribuintes pelo mesmo fato", "Marta é a única pessoa vinculada à obrigação"], "answer": 1, "explanation": "Joana recebeu o bem e é contribuinte pelo art. 5º, II. Como o imposto devido não foi pago, Marta responde solidariamente na hipótese do art. 6º da Lei nº 4.826/1989.", "source": "lei-itd-ba"},
    {"id": "q-ba-taxas-01", "subject": "Legislação Tributária da Bahia", "lesson": "ba-taxas", "prompt": "A cobrança hipotética decorre de fiscalização estadual de atividade potencialmente poluidora. Antes de calcular, qual combinação deve ser consultada?", "options": ["Serviço público e Anexo II", "Poder de polícia e Anexo I", "IPVA e Anexo I", "ITD e Anexo II"], "answer": 1, "explanation": "É hipótese de exercício do poder de polícia. Consulte o art. 1º, I, e o art. 3º da Lei nº 11.631/2009, bem como o item aplicável do Anexo I.", "source": "lei-taxas-ba"},
    {"id": "q-ba-taxas-02", "subject": "Legislação Tributária da Bahia", "lesson": "ba-taxas", "prompt": "A Bahia pretende cobrar taxa por utilização potencial de um serviço público estadual. Quais requisitos devem ser verificados?", "options": ["Se o serviço é específico e divisível, de uso compulsório, está em funcionamento e é previsto no Anexo II", "Se o serviço gera receita suficiente para o Estado, mesmo que não esteja previsto em lei", "Se o benefício é indistinto para toda a sociedade", "Se a repartição responsável tem poder de polícia em qualquer matéria"], "answer": 0, "explanation": "Consulte o art. 1º, II, da Lei nº 11.631/2009 e o art. 79, I, b, do CTN. A utilização potencial pressupõe serviço compulsório posto à disposição mediante atividade administrativa em efetivo funcionamento.", "source": "ctn"},
    {"id": "q-ba-paf-01", "subject": "Legislação Tributária da Bahia", "lesson": "ba-processo-fiscal", "prompt": "A fiscalização lavrou um auto e o contribuinte tomou ciência. Ele então apresentou defesa escrita no prazo, antes de qualquer pagamento, impugnando o lançamento. Qual ato instaura o processo para solução desse litígio?", "options": ["A expedição do termo de fiscalização", "A lavratura do auto, em qualquer hipótese", "A ciência do auto, por si só", "A apresentação da defesa escrita"], "answer": 3, "explanation": "O art. 121, I, do RPAF trata da apresentação da defesa escrita contra o lançamento por auto de infração. A ciência serve para a cronologia de intimação e prazo.", "source": "rpaf-ba"},
    {"id": "q-ba-paf-02", "subject": "Legislação Tributária da Bahia", "lesson": "ba-processo-fiscal", "prompt": "Um auto informa o valor total exigido. Para conferir como o valor foi apurado e por que a conduta foi enquadrada na penalidade, o que deve ser procurado primeiro?", "options": ["Apenas a data em que o crédito foi inscrito em dívida ativa", "Somente a qualificação fiscal do autuado", "O demonstrativo do débito e os dispositivos da exigência e da penalidade", "A tabela do IPVA, mesmo quando o tributo lançado é ICMS"], "answer": 2, "explanation": "O art. 39, IV e V, do RPAF estabelece o demonstrativo do débito e a indicação dos dispositivos que fundamentam a exigência, a infração e a multa. A descrição da conduta vem no inciso III.", "source": "rpaf-ba"},
    { id:"q01", subject:"Direito Tributário", lesson:"tributo", prompt:"Pelo conceito do art. 3º do CTN, qual elemento afasta a multa do conceito de tributo?", options:["Ser paga em dinheiro","Decorrer de sanção por ato ilícito","Ser cobrada por atividade vinculada","Ser instituída em lei"], answer:1, explanation:"A multa é sanção por ato ilícito. O art. 3º do CTN exclui essa natureza da definição de tributo.", source:"ctn" },
    { id:"q02", subject:"Direito Tributário", lesson:"tributo", prompt:"Qual fator é expressamente indicado no CTN como irrelevante para determinar a natureza jurídica específica do tributo?", options:["Fato gerador","Denominação formal adotada pela lei","Base legal da obrigação","Sujeito passivo"], answer:1, explanation:"O art. 4º do CTN estabelece que a denominação e as características formais são irrelevantes; o fato gerador é central.", source:"ctn" },
    { id:"q03", subject:"Direito Tributário", lesson:"obrigacao", prompt:"A entrega de uma declaração tributária é, em regra, exemplo de:", options:["Obrigação acessória","Crédito tributário extinto","Imposto","Pagamento de penalidade"], answer:0, explanation:"É dever instrumental de fazer previsto na legislação tributária, portanto obrigação acessória.", source:"ctn" },
    { id:"q04", subject:"Direito Tributário", lesson:"obrigacao", prompt:"O descumprimento de obrigação acessória pode:", options:["Eliminar o fato gerador","Converter a penalidade pecuniária em obrigação principal quanto à multa","Transferir a competência tributária","Revogar automaticamente o lançamento"], answer:1, explanation:"O art. 113, § 3º, do CTN prevê que a obrigação acessória, pelo simples fato de sua inobservância, converte-se em obrigação principal relativamente à penalidade pecuniária.", source:"ctn" },
    { id:"q05", subject:"Direito Tributário", lesson:"competencia", prompt:"Segundo o CTN, a competência legislativa para instituir tributos é:", options:["Delegável a qualquer particular","Indelegável, sem impedir atribuições administrativas previstas em lei","Transferida sempre que a receita for repartida","Criada pelo regulamento estadual"], answer:1, explanation:"O art. 7º torna a competência indelegável, mas admite atribuição de funções de arrecadar, fiscalizar e executar a pessoa jurídica de direito público.", source:"ctn" },
    { id:"q06", subject:"Direito Constitucional", lesson:"limites", prompt:"A vedação de cobrar tributo por fato gerador ocorrido antes da lei que o instituiu ou aumentou corresponde à:", options:["Impessoalidade","Irretroatividade tributária","Eficiência","Anterioridade anual"], answer:1, explanation:"É a regra do art. 150, III, ‘a’, da Constituição. Anterioridade trata de prazo para cobrança após a publicação.", source:"cf" },
    { id:"q07", subject:"Direito Constitucional", lesson:"admin", prompt:"Qual alternativa contém somente princípios expressos no art. 37, caput, da Constituição?", options:["Legalidade, impessoalidade, moralidade, publicidade e eficiência","Legalidade, proporcionalidade, motivação, autotutela e eficiência","Moralidade, continuidade, supremacia, publicidade e finalidade","Publicidade, razoabilidade, segurança, eficiência e motivação"], answer:0, explanation:"O caput do art. 37 lista LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.", source:"cf" },
    { id:"q08", subject:"Legislação Tributária da Bahia", lesson:"icms", prompt:"O art. 155, II, da Constituição atribui competência para instituir ICMS a:", options:["Municípios","Estados e Distrito Federal","União exclusivamente","Conselhos de contribuintes"], answer:1, explanation:"A competência para instituir ICMS é dos Estados e do Distrito Federal, observados Constituição e normas gerais.", source:"cf" },
    { id:"q09", subject:"Legislação Tributária da Bahia", lesson:"icms", prompt:"Qual trilha normativa é mais adequada para estudar a regra geral de ICMS e a disciplina da Bahia?", options:["Somente um resumo comercial","Constituição, lei complementar nacional e legislação estadual vigente","Somente o RICMS antigo","Apenas o edital de outro estado"], answer:1, explanation:"A análise deve considerar Constituição, LC 87/1996 e norma estadual vigente, além de atualizações e regras de transição.", source:"sefaz-icms" },
    { id:"q10", subject:"Legislação Tributária da Bahia", lesson:"icms-ba", prompt:"A base de legislação do RICMS-BA se declara informativa. Para validade legal, a referência final são:", options:["Publicações originais e alterações no Diário Oficial","A apostila mais recente","Comentários em fórum","Material de aula sem fonte"], answer:0, explanation:"A própria base da SEFAZ adverte que os textos são informativos e que os atos publicados no Diário Oficial têm validade legal.", source:"ricms" },
    { id:"q11", subject:"Contabilidade Geral", lesson:"patrimonio", prompt:"A equação patrimonial básica é:", options:["Ativo = Passivo + Patrimônio Líquido","Passivo = Ativo + Receita","Ativo = Caixa + Lucro","Patrimônio Líquido = Despesa − Receita"], answer:0, explanation:"O patrimônio líquido representa a diferença residual entre ativos e passivos: Ativo = Passivo + Patrimônio Líquido.", source:"cfc" },
    { id:"q12", subject:"Contabilidade Geral", lesson:"patrimonio", prompt:"Uma aquisição de equipamento paga à vista pode:", options:["Aumentar um ativo e reduzir outro, sem aumentar o ativo total","Sempre elevar o ativo total pelo valor da compra","Reduzir simultaneamente todos os ativos","Eliminar o patrimônio líquido"], answer:0, explanation:"O equipamento aumenta e o caixa diminui. A composição muda; o ativo total pode permanecer igual.", source:"cfc" },
    { id:"q13", subject:"Contabilidade Geral", lesson:"lancamentos", prompt:"No método das partidas dobradas, ao final de um lançamento:", options:["Débitos e créditos devem ter totais iguais","Todo débito deve ser dinheiro recebido","O crédito deve ser maior que o débito","Apenas contas patrimoniais podem ser usadas"], answer:0, explanation:"A igualdade entre valores debitados e creditados é a regra de equilíbrio do lançamento.", source:"cfc" },
    { id:"q14", subject:"Contabilidade Geral", lesson:"demonstracoes", prompt:"Qual demonstração evidencia fluxos de caixa do período?", options:["Balanço Patrimonial","Demonstração do Resultado","Demonstração dos Fluxos de Caixa","Balancete de verificação"], answer:2, explanation:"A DFC evidencia entradas e saídas de caixa e equivalentes, organizadas por atividades.", source:"cfc" },
    { id:"q15", subject:"Contabilidade Geral", lesson:"demonstracoes", prompt:"Uma receita reconhecida pelo regime de competência pode:", options:["Existir antes do recebimento em caixa","Ser sempre igual ao saldo bancário","Eliminar uma obrigação","Ser reconhecida somente no pagamento"], answer:0, explanation:"O reconhecimento da receita e o recebimento podem ocorrer em momentos diferentes; pode haver direito a receber.", source:"cfc" },
    { id:"q16", subject:"Auditoria", lesson:"auditoria", prompt:"Em auditoria, evidência suficiente diz respeito principalmente à:", options:["Quantidade da evidência","Cor do documento","Forma de arquivamento","Velocidade do teste"], answer:0, explanation:"Suficiência é a medida da quantidade; adequação trata da qualidade, relevância e confiabilidade.", source:"cfc" },
    { id:"q17", subject:"Auditoria", lesson:"auditoria", prompt:"Ao encontrar divergência em registros fiscais, a conclusão adequada deve:", options:["Declarar fraude sem testes adicionais","Validar a origem dos dados, examinar evidências e registrar os procedimentos","Ignorar a divergência se houver muitos documentos","Substituir evidência por impressão pessoal"], answer:1, explanation:"A conclusão deve ser sustentada por evidência apropriada e documentada. Uma inconsistência inicial não prova, sozinha, fraude.", source:"cfc" },
    { id:"q18", subject:"Língua Portuguesa", lesson:"portugues", prompt:"Se um texto afirma que uma medida ‘pode contribuir para reduzir’ um problema, a alternativa que diz que ela ‘garante a eliminação’ do problema:", options:["Preserva o grau de certeza","Amplia indevidamente a conclusão","É sempre equivalente","É apenas uma paráfrase literal"], answer:1, explanation:"A alternativa troca possibilidade por certeza e reduzida contribuição por eliminação garantida: extrapola o texto.", source:"fcc-2019" },
    { id:"q19", subject:"Raciocínio Lógico", lesson:"rlm", prompt:"A condicional ‘se p, então q’ é falsa quando:", options:["p é falsa e q verdadeira","p e q são falsas","p é verdadeira e q falsa","p e q são verdadeiras"], answer:2, explanation:"A única linha falsa da tabela da condicional é antecedente verdadeiro e consequente falso.", source:null },
    { id:"q20", subject:"Raciocínio Lógico", lesson:"rlm", prompt:"A negação de ‘todos os relatórios foram revisados’ é:", options:["Nenhum relatório foi revisado","Pelo menos um relatório não foi revisado","Todos os relatórios não foram revisados","Algum relatório foi revisado"], answer:1, explanation:"A negação de uma universal é existencial: há ao menos um caso que não satisfaz a propriedade.", source:null },
    { id:"q21", subject:"Matemática Financeira", lesson:"matematica-financeira", prompt:"R$ 1.000 aplicados a juros simples de 2% ao mês por 3 meses geram juros de:", options:["R$ 20","R$ 60","R$ 61,21","R$ 120"], answer:1, explanation:"J = C × i × n = 1.000 × 0,02 × 3 = R$ 60. A capitalização é simples.", source:null },
    { id:"q22", subject:"Matemática Financeira", lesson:"matematica-financeira", prompt:"Antes de usar uma taxa mensal em um prazo de anos, é preciso:", options:["Ignorar a unidade da taxa","Converter ou compatibilizar taxa e prazo","Multiplicar o valor por 100","Trocar juros compostos por simples"], answer:1, explanation:"Taxa e prazo devem estar na mesma unidade temporal ou ser tratados por conversão/formulação equivalente.", source:null },
    { id:"q23", subject:"Tecnologia da Informação", lesson:"ti", prompt:"A alteração não autorizada de um registro afeta diretamente a:", options:["Disponibilidade","Integridade","Confidencialidade","Portabilidade"], answer:1, explanation:"Integridade protege contra alteração ou destruição indevida da informação.", source:null },
    { id:"q24", subject:"Tecnologia da Informação", lesson:"ti", prompt:"Qual frase distingue autenticação de autorização?", options:["Autenticação confirma identidade; autorização define permissões","Autenticação define permissões; autorização confirma identidade","São sinônimos perfeitos","Autenticação é backup"], answer:0, explanation:"Autenticação verifica quem é o usuário; autorização determina o que pode acessar ou fazer.", source:null },
    { id:"q25", subject:"Estatística", lesson:"estatistica", prompt:"Na série 2, 3, 3, 4, 28, qual é a mediana?", options:["2","3","8","28"], answer:1, explanation:"A série já está ordenada e o elemento central é 3.", source:null },
    { id:"q26", subject:"Economia e Finanças Públicas", lesson:"economia", prompt:"Uma previsão de receita no orçamento significa necessariamente que o dinheiro já entrou no caixa?", options:["Sim, previsão é ingresso efetivo","Não; é estimativa, distinta da arrecadação realizada e da disponibilidade financeira","Sim, se o orçamento foi aprovado","Não, porque orçamento não trata de receitas"], answer:1, explanation:"Previsão orçamentária, arrecadação efetiva e disponibilidade financeira são conceitos distintos.", source:null },
    { id:"q27", subject:"Administração Tributária · referência histórica (2019)", lesson:"administracao-tributaria", prompt:"Segundo o art. 194 do CTN, a legislação sobre fiscalização alcança:", options:["Somente contribuintes sem imunidade ou isenção","Pessoas naturais ou jurídicas, contribuintes ou não, inclusive imunes ou isentas","Apenas pessoas jurídicas inscritas no cadastro estadual","Somente quem já recebeu auto de infração"], answer:1, explanation:"O parágrafo único do art. 194 estende a aplicação às pessoas naturais ou jurídicas, contribuintes ou não, inclusive imunes ou isentas de caráter pessoal.", source:"ctn" },
    { id:"q28", subject:"Administração Tributária · referência histórica (2019)", lesson:"administracao-tributaria", prompt:"A LC nº 236/2026 acrescentou ao art. 194 do CTN a diretriz de:", options:["Priorizar métodos preventivos que possibilitem autorregularização antes do auto, nos termos da legislação específica","Dispensar qualquer fiscalização quando houver programa de conformidade","Converter toda divergência em denúncia espontânea","Afastar o dever de observar a legislação estadual"], answer:0, explanation:"O art. 194, § 2º, prevê métodos preventivos para possibilitar autorregularização antes da lavratura do auto, conforme legislação específica.", source:"lc236" },
    { id:"q29", subject:"Administração Tributária · referência histórica (2019)", lesson:"administracao-tributaria", prompt:"Qual princípio está entre os previstos para programas de conformidade no art. 194, § 3º, do CTN?", options:["Permanência obrigatória por prazo mínimo","Sigilo absoluto de todas as decisões","Voluntariedade de ingresso e de saída","Renúncia ao direito de defesa"], answer:2, explanation:"A lista começa pela voluntariedade de ingresso e de saída e também inclui boa-fé, diálogo, transparência, conformidade, prevenção de litígios e proporcionalidade.", source:"lc236" },
    { id:"q30", subject:"Administração Tributária · referência histórica (2019)", lesson:"administracao-tributaria", prompt:"O art. 194-A do CTN dispõe que determinadas decisões definitivas do STF e do STJ com efeito vinculante no âmbito judicial:", options:["Vinculam também a administração tributária","Só produzem efeito após autorização do Senado","Vinculam apenas o contribuinte que participou do processo","Nunca afetam a atuação fazendária"], answer:0, explanation:"O art. 194-A estende à administração tributária a vinculação das decisões definitivas com efeito vinculante no âmbito judicial.", source:"lc236" },
    { id:"q31", subject:"Administração Tributária · referência histórica (2019)", lesson:"administracao-tributaria", prompt:"Segundo o art. 196 atualizado, o documento que precede o procedimento de fiscalização deve indicar, entre outros dados:", options:["Somente o valor da multa provável","Autoridades, contribuinte, objeto, período, documentos necessários, verificação de autenticidade e duração","O resultado final antes de examinar os documentos","A concordância prévia do contribuinte com a fiscalização"], answer:1, explanation:"O art. 196, § 2º, enumera dados de identificação, escopo e duração; em fiscalização no estabelecimento ou domicílio, há regra própria de entrega de uma via.", source:"lc236" },
    { id:"q32", subject:"Administração Tributária · referência histórica (2019)", lesson:"administracao-tributaria", prompt:"O art. 199-A do CTN permite que as Fazendas Públicas, mediante convênio:", options:["Transfiram entre si a competência constitucional para instituir tributos","Compartilhem atividades de fiscalização, lançamento e cobrança e estrutura do processo administrativo fiscal","Dispensem o sigilo fiscal em qualquer situação","Substituam a legislação local por regulamento de outro ente"], answer:1, explanation:"O artigo prevê compartilhamento de atividades e estrutura mediante convênio, para otimizar a capacidade tributária; isso não equivale a transferir competência constitucional.", source:"lc236" },
    { id:"q33", subject:"Contabilidade Geral", lesson:"elementos-contabeis", prompt:"Segundo o CPC 00 (R2), qual descrição corresponde a ativo?", options:["Qualquer entrada de caixa do período","Recurso econômico presente controlado pela entidade como resultado de eventos passados","Toda despesa ainda não paga","Benefício econômico futuro, mesmo sem direito presente controlado"], answer:1, explanation:"A definição parte de um recurso econômico presente controlado em razão de eventos passados; recurso econômico é um direito com potencial de produzir benefícios.", source:"cpc00-r2" },
    { id:"q34", subject:"Contabilidade Geral", lesson:"elementos-contabeis", prompt:"O patrimônio líquido representa:", options:["O total de dinheiro disponível","A soma das receitas do período","A participação residual nos ativos após a dedução de todos os passivos","Toda obrigação de transferir recurso econômico"], answer:2, explanation:"A estrutura conceitual define patrimônio líquido como participação residual nos ativos depois de deduzidos todos os passivos.", source:"cpc00-r2" },
    { id:"q35", subject:"Contabilidade Geral", lesson:"elementos-contabeis", prompt:"Um aporte de capital feito por proprietária aumenta o caixa da entidade. Pela Estrutura Conceitual, esse aumento é:", options:["Receita operacional necessariamente","Contribuição de detentora de direito sobre o patrimônio, não receita","Despesa do período","Passivo até a distribuição"], answer:1, explanation:"Contribuições de detentores de direitos sobre o patrimônio são excluídas da definição de receita, embora possam aumentar o patrimônio líquido.", source:"cpc00-r2" },
    { id:"q36", subject:"Contabilidade Geral", lesson:"informacao-contabil-util", prompt:"Quais são as características qualitativas fundamentais da informação financeira útil?", options:["Comparabilidade e tempestividade","Relevância e representação fidedigna","Verificabilidade e compreensibilidade","Prudência e uniformidade"], answer:1, explanation:"O CPC 00 (R2) identifica relevância e representação fidedigna como características fundamentais; comparabilidade, verificação, tempestividade e compreensibilidade aumentam a utilidade.", source:"cpc00-r2" },
    { id:"q37", subject:"Contabilidade Geral", lesson:"informacao-contabil-util", prompt:"Como a Estrutura Conceitual caracteriza materialidade?", options:["Por um valor mínimo idêntico para todas as entidades","Como aspecto de relevância específico da entidade, conforme natureza ou magnitude e contexto","Como sinônimo de valor justo","Como requisito de divulgação apenas para itens em caixa"], answer:1, explanation:"A materialidade depende da natureza ou magnitude da informação no contexto da entidade; não há um limite quantitativo uniforme predeterminado.", source:"cpc00-r2" },
    { id:"q38", subject:"Contabilidade Geral", lesson:"reconhecimento-contabil", prompt:"Uma compra a prazo pode ser analisada para reconhecimento de um ativo antes de o pagamento sair do caixa?", options:["Não; só existe ativo depois do pagamento","Sim; é preciso avaliar o recurso controlado, a obrigação e se a informação é relevante e fidedigna","Não; todo lançamento depende de entrada de dinheiro","Sim; qualquer compra deve ser reconhecida pelo valor de mercado atual"], answer:1, explanation:"Reconhecimento não depende apenas de caixa. A análise considera a definição do elemento, a relevância da informação e a representação fidedigna, além das normas específicas.", source:"cpc00-r2" },
    { id:"q39", subject:"Contabilidade Geral", lesson:"mensuracao-contabil", prompt:"Qual afirmação descreve corretamente o custo histórico e a mensuração posterior?", options:["O custo histórico nunca sofre alterações","Todo item deve ser atualizado diariamente ao preço de mercado","O custo parte da transação de origem e pode ser ajustado por eventos posteriores conforme a norma aplicável","Valor justo, valor em uso e custo histórico são sinônimos"], answer:2, explanation:"O custo histórico parte do valor da transação ou evento inicial, mas pode mudar por depreciação, liquidação, impairment ou outros eventos conforme a norma específica.", source:"cpc00-r2" }
  ],

  cases: [
    {
      "id": "fcc-2019-ti-discursiva",
      "title": "Prova real · Auditor TI SEFAZ-BA 2019",
      "area": "Auditor TI · FCC · Questão 1",
      "prompt": "Abra o caderno na página 17 e resolva a questão 1. O item A pede um diagrama BPMN para atendimento de incidentes. O item B pede comandos Oracle para administrar uma conta. O item C pede cálculos e interpretação de desempenho de três atividades. Faça o diagrama no papel e use o rascunho para os demais itens.",
      "steps": [
        "A. Modele os participantes, o atendimento e os caminhos de escalonamento.",
        "B. Escreva os comandos na ordem solicitada pelo caderno.",
        "C. Mostre o cálculo de cada atividade e interprete os sinais."
      ],
      "outline": [
        "Responda em três partes e confira os verbos de comando.",
        "No diagrama, revise a comunicação entre participantes. No cálculo, identifique os valores de referência."
      ],
      "solution": [
        "A. Separe o usuário do atendimento. Represente a solicitação e a devolução da resposta como mensagens entre participantes. No atendimento, modele as decisões exclusivas sobre resolução no primeiro nível e necessidade de especialista. Faça os caminhos convergirem para a comunicação da solução pelo primeiro nível e o fechamento. Use os nomes e a convenção de pools indicados no caderno.",
        "B. Na ordem da questão, use ALTER USER Func22 ACCOUNT UNLOCK, GRANT CREATE SESSION TO Func22 e ALTER USER Func22 IDENTIFIED BY seguido da senha do caderno entre aspas duplas. Cada comando atende a uma etapa diferente: estado da conta, autorização de conexão e credencial.",
        "C. Usando o VP fornecido no caderno, calcule VA = percentual realizado × VP, VPR = VA − VP e VC = VA − CR. Em milhares de reais, atividade 1: VA 100, VPR 0, VC −10 (no prazo, acima do orçamento). Atividade 2: VA 49, VPR −21, VC −11 (atrasada, acima). Atividade 3: VA 50, VPR −50, VC −50 (atrasada, acima)."
      ],
      "source": "fcc-2019-ti-discursiva",
      "duration": 45,
      "sourceLabel": "Abrir caderno da FCC · página 17"
    },
    {
      "id": "ti-bpmn-incidentes",
      "title": "Caso autoral · BPMN e atendimento de incidentes",
      "area": "Auditor TI · BPMN",
      "prompt": "Um solicitante comunica uma falha no portal. A Central recebe a mensagem e tenta resolver. Se conseguir, registra a solução. Caso contrário, encaminha o chamado ao Especialista, que resolve e registra o resultado. Em ambos os caminhos, a Central envia a resposta ao solicitante e encerra o chamado. Desenhe uma colaboração BPMN com um pool Solicitante e um pool Atendimento, este com duas raias, Central e Especialista. Explique como representou as transições.",
      "steps": [
        "Desenhe os participantes e o caminho de cada resultado.",
        "Mostre como o atendimento começa, converge e termina."
      ],
      "outline": [
        "Faça o desenho no papel e descreva no rascunho os fluxos e a decisão."
      ],
      "solution": [
        "A mensagem do Solicitante inicia o processo do pool Atendimento. A Central executa a tentativa de solução, seguida de um gateway exclusivo com as saídas “resolveu” e “não resolveu”.",
        "No primeiro caminho, a Central registra a solução. No segundo, o fluxo de sequência cruza para a raia Especialista, que resolve e registra o resultado. Um gateway exclusivo de convergência reúne os caminhos.",
        "A Central envia a resposta e encerra. Use fluxo de mensagem para comunicação entre os pools e fluxo de sequência dentro de Atendimento, inclusive ao cruzar raias."
      ],
      "source": "omg-bpmn",
      "duration": 35
    },
    {
      "id": "ti-sql-oracle",
      "title": "Caso autoral · acesso de uma conta Oracle",
      "area": "Auditor TI · Banco de dados",
      "prompt": "Em um banco Oracle de treinamento, a conta LAB_RELATORIO já existe, está bloqueada, precisa de uma nova senha e não possui o privilégio de iniciar sessão. Em uma sessão administrativa autorizada, escreva os comandos para redefinir a senha (use \"SenhaDeExemplo#42\"), desbloquear a conta e permitir a conexão. Explique a função de cada comando.",
      "steps": [
        "Escreva um comando para cada requisito e explique seu efeito no cenário."
      ],
      "outline": [
        "Separe credencial, estado da conta e autorização de conexão."
      ],
      "solution": [
        "ALTER USER LAB_RELATORIO IDENTIFIED BY \"SenhaDeExemplo#42\"; redefine a credencial no exercício.",
        "ALTER USER LAB_RELATORIO ACCOUNT UNLOCK; retira o bloqueio da conta.",
        "GRANT CREATE SESSION TO LAB_RELATORIO; concede o privilégio de iniciar sessão. Desbloquear a conta não concede esse privilégio."
      ],
      "source": "oracle-alter-user",
      "duration": 30
    },
    {
      "id": "ti-valor-agregado",
      "title": "Caso autoral · valor agregado e desvios do projeto",
      "area": "Auditor TI · Gestão de projetos",
      "prompt": "Na data de controle de um projeto, a atividade A tem orçamento total de R$ 100 mil, avanço previsto de 60%, avanço realizado de 50% e custo real de R$ 45 mil. A atividade B tem orçamento de R$ 80 mil, avanço previsto de 50%, avanço realizado de 75% e custo real de R$ 66 mil. Calcule VP, VA, variação de prazo e variação de custo, por atividade e no total. Interprete os resultados.",
      "steps": [
        "Calcule VP e VA a partir dos percentuais e dos orçamentos.",
        "Compare prazo e custo por atividade antes de consolidar."
      ],
      "outline": [
        "Monte uma linha por atividade. Expresse os valores na mesma unidade e interprete o sinal de cada desvio."
      ],
      "solution": [
        "A, em milhares de reais: VP 60, VA 50 e CR 45. Desvio de prazo 50 − 60 = −10 (atrás do plano). Desvio de custo 50 − 45 = +5 (custo abaixo do valor do trabalho entregue).",
        "B, em milhares de reais: VP 40, VA 60 e CR 66. Desvio de prazo 60 − 40 = +20 (à frente). Desvio de custo 60 − 66 = −6 (custo acima).",
        "Total: VP 100, VA 110 e CR 111. O projeto está à frente no agregado (+10) e com custo desfavorável (−1). O desvio de prazo do valor agregado é expresso em valores monetários, e não em dias."
      ],
      "source": "pmi-valor-agregado",
      "duration": 35
    },
    {
      id:"caso-documentos",
      title:"Divergência entre documentos fiscais e escrituração",
      area:"Fiscalização · documentos e evidências",
      prompt:"Durante uma revisão, os totais de documentos fiscais eletrônicos de uma empresa parecem superiores aos valores registrados em sua escrituração. A equipe recebeu uma planilha extraída do sistema, mas ainda não confirmou filtros, cancelamentos ou período. Redija uma análise técnica breve, como treinamento, respondendo: (1) que validações faria antes de concluir; (2) que evidências e registros compararia; (3) como documentaria a limitação da análise e encaminharia o caso.",
      steps:["Delimite período, estabelecimento, operação e fonte de dados.","Valide integridade da extração, chaves, cancelamentos, ajustes e duplicidades.","Confronte documentos, escrituração e regras aplicáveis; diferencie hipótese de fato confirmado.","Descreva procedimentos, evidências, limitações e próximos passos sem antecipar conclusão não comprovada."],
      source:"ricms",
      duration:45
    },
    {
      id:"caso-obrigacao",
      title:"Declaração acessória omitida e penalidade",
      area:"Direito Tributário · obrigação e consequência",
      prompt:"Uma empresa deixou de apresentar uma declaração exigida pela legislação. O setor responsável quer cobrar multa e, no mesmo relatório, registrar que o tributo principal também estaria automaticamente devido. Redija uma resposta fundamentada que: (1) diferencie obrigação principal e acessória; (2) explique a consequência do descumprimento conforme o CTN; (3) indique quais fatos e regras ainda precisam ser conferidos antes de concluir sobre o tributo principal.",
      steps:["Defina obrigação principal e acessória com base no art. 113 do CTN.","Separe penalidade por descumprimento da obrigação tributária principal.","Identifique fato gerador, sujeito, período e regra legal do eventual tributo.","Conclua com ressalvas e indique a fonte normativa."],
      source:"ctn",
      duration:35
    },
    {
      id:"caso-contabil",
      title:"Resultado contábil e caixa disponível",
      area:"Contabilidade · competência e liquidez",
      prompt:"Um relatório aponta resultado positivo em determinado período, mas a equipe de gestão informa que não há caixa suficiente para cumprir pagamentos próximos. Explique, em texto técnico, por que lucro e caixa podem divergir; indique quais demonstrações e contas examinaria; e apresente duas verificações que ajudariam a explicar a situação sem presumir erro ou fraude.",
      steps:["Diferencie desempenho por competência de fluxo de caixa.","Consulte DRE, Balanço e DFC em conjunto.","Examine contas a receber, estoques, obrigações e classificação temporal.","Separe fatos observados de hipóteses e formule conclusão verificável."],
      source:"cfc",
      duration:35
    },
    {
      id:"caso-icms",
      title:"Como apurar uma dúvida de ICMS na Bahia",
      area:"Legislação BA · método de análise normativa",
      prompt:"Uma equipe recebeu consulta sobre a classificação de uma operação e sobre a possibilidade de apropriar crédito de ICMS. A descrição menciona mercadoria, destinatário e documento fiscal, mas não informa todos os detalhes da operação. Estruture uma resposta de treinamento que identifique as perguntas necessárias, organize a hierarquia de fontes a consultar e mostre como fundamentaria a conclusão sem inventar alíquota ou benefício.",
      steps:["Complete os fatos: natureza da operação, participantes, destino, período e documentos.","Consulte Constituição e lei complementar para o marco geral.","Confira a lei/regulamento da Bahia e alterações vigentes; registre data e dispositivo.","Explique a regra, exceções a conferir e conclusão limitada aos fatos fornecidos."],
      source:"sefaz-icms",
      duration:45
    },
    {
      id:"caso-fiscalizacao",
      title:"Início de fiscalização e documentação do procedimento",
      area:"Administração Tributária · referência histórica (2019)",
      prompt:"Uma equipe começa a fiscalizar um estabelecimento, mas a empresa recebeu apenas uma comunicação verbal, sem informação clara sobre período e objeto. Em texto técnico de treinamento: (1) indique o que deve ser verificado no documento de início previsto no art. 196 do CTN; (2) explique como delimitar dados e documentos relevantes; (3) trate do cuidado com informações fiscais; (4) conclua sem presumir infração antes da análise das evidências.",
      steps:["Confira identificação das autoridades, contribuinte e estabelecimentos abrangidos.","Delimite objeto, período, documentos, autenticidade e prazo do procedimento.","Proteja informações fiscais e confira as regras de sigilo e compartilhamento aplicáveis.","Separe fatos comprovados, hipóteses e conclusão; indique a fonte normativa consultada."],
      source:"lc236",
      duration:40
    }
  ],

  weeks: [
    { title:"Fundamentos essenciais", phase:"Construção da base", theme:"Conceito antes da exceção", days:[
      "Direito Tributário · conceito de tributo|Português · interpretação de texto",
      "Contabilidade · patrimônio e equação|Constitucional · organização e princípios",
      "Direito Tributário · espécies tributárias|Raciocínio Lógico · proposições",
      "ICMS/BA · competência e panorama|Administrativo · princípios do art. 37",
      "Contabilidade · contas e saldos|Direito Tributário · obrigação principal e acessória",
      "Português · coesão e conectores|Matemática Financeira · porcentagem e juros simples"
    ]},
    { title:"Obrigação e fato gerador", phase:"Construção da base", theme:"Ligar a hipótese ao dever", days:[
      "Direito Tributário · fato gerador e obrigação|Contabilidade · fatos contábeis",
      "ICMS/BA · legislação geral e sujeito passivo|Constitucional · competências tributárias",
      "Português · inferência e pressupostos|Raciocínio Lógico · negação de proposições",
      "Direito Tributário · sujeito ativo e passivo|Administrativo · poderes administrativos",
      "Contabilidade · débito e crédito|Estatística · leitura de tabelas",
      "Direito Tributário · revisão dos arts. 113–118 do CTN|Tecnologia · segurança e acesso"
    ]},
    { title:"Competência e limites", phase:"Construção da base", theme:"Constituição como mapa", days:[
      "Constitucional · limitações ao poder de tributar|Português · tese e argumento",
      "Direito Tributário · competência e capacidade ativa|Contabilidade · composição patrimonial",
      "ICMS/BA · campo constitucional do ICMS|Raciocínio Lógico · conectivos",
      "Constitucional · legalidade e irretroatividade|Administrativo · atos e elementos",
      "Direito Tributário · imunidades: leitura inicial|Estatística · média e mediana",
      "Contabilidade · lançamentos simples|Economia · receita e despesa públicas"
    ]},
    { title:"Crédito e lançamento", phase:"Construção da base", theme:"Da ocorrência ao registro", days:[
      "Direito Tributário · lançamento tributário|Contabilidade · regime de competência",
      "Direito Tributário · crédito tributário e constituição|Constitucional · anterioridade e exceções",
      "ICMS/BA · documentos e registro da operação|Português · precisão vocabular",
      "Direito Tributário · suspensão e extinção do crédito|Auditoria · evidência e documentação",
      "Contabilidade · balanço patrimonial|Matemática Financeira · equivalência de taxas",
      "Direito Administrativo · processo e motivação|Raciocínio Lógico · equivalências básicas"
    ]},
    { title:"Entrada no ICMS-BA", phase:"Aprofundamento", theme:"Usar a fonte estadual sem perder a trilha", days:[
      "ICMS/BA · estrutura da LC 87/1996|Direito Tributário · revisão de fato gerador",
      "ICMS/BA · Regulamento e organização do RICMS|Contabilidade · escrituração",
      "Constitucional · competências e repartição|Português · coesão referencial",
      "ICMS/BA · contribuintes e responsáveis|Auditoria · planejamento por risco",
      "Direito Tributário · responsabilidade tributária|Raciocínio Lógico · problemas condicionais",
      "Contabilidade · DRE e resultado|Tecnologia · dados, tabelas e qualidade"
    ]},
    { title:"Operações e apuração", phase:"Aprofundamento", theme:"Perguntar antes de calcular", days:[
      "ICMS/BA · operação e prestação: classificação|Matemática Financeira · juros compostos",
      "ICMS/BA · não cumulatividade: regra e cautelas|Contabilidade · estoques",
      "Direito Tributário · obrigação e crédito: revisão|Português · paráfrase e inferência",
      "ICMS/BA · documentos fiscais e escrituração|Auditoria · testes e amostragem",
      "ICMS/BA · alterações e atualização normativa|Estatística · proporções e gráficos",
      "Constitucional · reforma tributária: texto e transição|Economia · orçamento público"
    ]},
    { title:"Contabilidade em movimento", phase:"Aprofundamento", theme:"Do lançamento à demonstração", days:[
      "Contabilidade · partidas dobradas e balancete|Direito Tributário · revisão de lançamento",
      "Contabilidade · estoques e custo: conceitos|ICMS/BA · leitura orientada do RICMS",
      "Contabilidade · ativo imobilizado: conceitos-base|Raciocínio Lógico · conjuntos e contagem",
      "Contabilidade · demonstrações e estrutura|Constitucional · direitos e garantias relevantes",
      "Contabilidade · competência versus caixa|Auditoria · evidência suficiente e apropriada",
      "Português · síntese de texto técnico|Matemática Financeira · séries de pagamentos"
    ]},
    { title:"Demonstrações e análise", phase:"Aprofundamento", theme:"Interpretar relações entre números", days:[
      "Contabilidade · DRE e resultado|Estatística · medidas de posição",
      "Contabilidade · DFC e atividades|Economia · leitura de indicadores fiscais",
      "Contabilidade · balanço e liquidez|ICMS/BA · revisão de documentos",
      "Contabilidade · análise de saldos|Auditoria · trilha de auditoria",
      "Direito Administrativo · controle e responsabilidade|Português · argumentação objetiva",
      "Direito Tributário · revisão acumulada|Raciocínio Lógico · revisão de erros"
    ]},
    { title:"Direito Público aplicado", phase:"Consolidação", theme:"Resolver casos com regra e fato", days:[
      "Constitucional · princípios e limitações|Administrativo · princípios e atos",
      "Direito Tributário · aplicação da lei tributária|Português · interpretação de comando",
      "Administrativo · processo e controle|Tecnologia · segurança da informação",
      "ICMS/BA · consultar norma e dispositivo|Contabilidade · integração das demonstrações",
      "Direito Tributário · imunidade, isenção e não incidência|Economia · ciclo orçamentário",
      "Raciocínio Lógico · revisão por questão|Estatística · interpretação de gráficos"
    ]},
    { title:"Auditoria e qualidade da evidência", phase:"Consolidação", theme:"Mostrar como se sabe", days:[
      "Auditoria · risco e planejamento|Contabilidade · contas patrimoniais",
      "Auditoria · evidência, suficiência e adequação|Direito Tributário · responsabilidade",
      "ICMS/BA · análise documental: caso guiado|Português · parágrafo e concisão",
      "Auditoria · amostragem e limitações|Estatística · amostra e população",
      "Auditoria · documentação do trabalho|Tecnologia · logs, acesso e integridade",
      "Administração Tributária · fiscalização e sigilo (referência 2019)|Matemática Financeira · problemas mistos"
    ]},
    { title:"Integração fiscal e dados", phase:"Consolidação", theme:"Conectar norma, documento e cálculo", days:[
      "ICMS/BA · legislação, documento e fato|Contabilidade · estoque e resultado",
      "Direito Tributário · revisão do CTN|Português · leitura de texto normativo",
      "Auditoria · divergência e evidências|Tecnologia · qualidade de dados",
      "Estatística · medidas e interpretação|Matemática Financeira · revisão de fórmulas",
      "Economia · receita, despesa e resultado|Constitucional · competências e princípios",
      "Contabilidade · resolução de questões|Direito Administrativo · revisão de erros"
    ]},
    { title:"Consolidação pré-edital", phase:"Consolidação", theme:"Revisar lacunas e treinar explicação", days:[
      "Direito Tributário · mapa de conceitos|Português · questão de interpretação",
      "ICMS/BA · leitura atualizada de norma|Contabilidade · questão de demonstrações",
      "Constitucional e Administrativo · revisão|Raciocínio Lógico · simulado curto",
      "Auditoria · método e evidência|Estatística · revisão aplicada",
      "Contabilidade · pontos de erro|Matemática Financeira · lista mista",
      "Estudo de caso · plano de resposta e escrita|Revisão das matérias com menor acerto"
    ]},
    { title:"Fechamento dos 90 dias", phase:"Consolidação", theme:"Fechar o ciclo e preparar a próxima etapa", days:[
      "Direito Tributário · revisão ativa|Português · leitura e síntese",
      "Contabilidade · balanço, DRE e DFC|Constitucional · limites tributários",
      "ICMS/BA · revisão de fontes e legislação|Auditoria · evidência e documentação",
      "Questões mistas · revisar caderno de erros|Tecnologia · segurança e dados",
      "Estudo de caso · resposta completa cronometrada|Autoavaliação de desempenho",
      "Simulado de fechamento · 50 questões|Correção, caderno de erros e plano do próximo ciclo"
    ]}
  ]
};
