# Rota Fiscal · SEFAZ-BA

Apostila e painel de estudos estático, feito em HTML, CSS e JavaScript. O conteúdo de estudo fica em `dist/content.js`; a interface e as interações ficam em `dist/index.html`, `dist/styles.css` e `dist/app.js`.

Os módulos da apostila trazem traduções curtas dos termos técnicos no contexto da aula. O glossário completo permite buscar por termo ou filtrar por matéria, com exemplos, alertas de confusão e links para fontes.

## Abrir localmente

Você pode abrir `dist/index.html` no navegador. Como alguns navegadores tratam o armazenamento de páginas `file://` de formas diferentes, também é possível servir apenas a pasta `dist` pelo servidor estático que acompanha o Python:

```sh
python3 -m http.server 8000 --bind 0.0.0.0 --directory dist
```

Depois, abra `http://localhost:8000`. Isso não instala dependências. Com `--bind 0.0.0.0`, o servidor disponibiliza os arquivos estáticos a outros aparelhos na mesma rede enquanto estiver em execução; ele não recebe nem sincroniza o progresso, que fica no navegador.

Para abrir pelo celular, conecte-o à mesma rede Wi-Fi e acesse `http://IP-DO-COMPUTADOR:8000`. O computador precisa continuar ligado e o firewall deve permitir essa conexão.

## GitHub Pages

O site público será publicado em [https://brendaalcantara.github.io/sefaz-bahia/](https://brendaalcantara.github.io/sefaz-bahia/) a partir da pasta `dist/`, usando o workflow em `.github/workflows/pages.yml`. Atualizações enviadas para `main` publicam uma nova versão. GitHub Pages deixa o conteúdo do site acessível publicamente; não coloque dados pessoais, exportações de progresso ou apostilas de terceiros no repositório.

## Progresso e privacidade

O andamento é guardado no `localStorage` deste navegador e perfil, na chave `rotaFiscalProgress.v1`. Isso inclui blocos concluídos, respostas, erros, revisões agendadas, simulados, sessões de estudo, notas e rascunhos discursivos. Não há conta, sincronização ou backend. Limpar os dados do navegador, trocar de perfil ou mover o app para outra origem pode deixar os dados anteriores inacessíveis.

Em **Estudar agora**, abra o [catálogo privado JSON no Google Drive](https://drive.google.com/file/d/19VMkog1xvU2G83dduhwgzPjiGLTOgDmf/view), baixe o arquivo e use **Importar catálogo JSON**. Repita em cada navegador e aparelho. O catálogo é salvo em `rotaFiscalDriveCatalog.v1`, separado do progresso, e não entra na exportação/importação de progresso. Ele contém metadados privados dos PDFs; o site não baixa nem armazena os documentos.

Filtre por Auditor TI, Agente de Tributos — geral ou matérias comuns e pesquise títulos e matérias do catálogo sem diferença de acentos. Para buscar texto dentro de um PDF, use a busca do Google Drive. O app cria o link do arquivo selecionado a partir do ID validado do catálogo; login e permissões são tratados pelo Drive. O site não usa OAuth nem API do Drive.

Na sessão de 45 minutos, o roteiro é: 5 minutos de recordação ativa e revisões vencidas, 20 de estudo dirigido, 15 de questões e correção, e 5 para erros e próxima revisão. Sessões de 25 e 60 minutos mantêm suas próprias divisões. Os tempos são uma heurística prática, não uma prescrição exata comprovada. A tela mostra a etapa e o tempo restante; o cronômetro continua entre abas e recargas, e a pausa conserva o tempo restante. Sessões vinculadas a um PDF criam revisões para 1, 7 e 30 dias. **Lembrei** avança para o próximo intervalo; **Preciso retomar** agenda para o dia seguinte.

Em **Estudar agora**, a semana-base tem 10 sessões de 45 minutos (7h30): 5 de Auditor TI, 3 de matérias comuns e 2 do curso geral de Agente — Administração e Finanças. Segunda, terça, quinta e sábado têm duas sessões; quarta e sexta têm uma; domingo fica livre ou serve de reposição leve. O plano separa Tecnologia da Informação para Auditor e não cria uma trilha de TI para Agente. Se perder um bloco, retome pelo próximo da sequência sem dobrar a carga. A divisão 5/3/2 é uma heurística baseada nos editais históricos da Bahia de 2019 e 2022; ajuste-a pelo caderno de erros e substitua-a quando sair o novo edital. A **Biblioteca de fontes** reúne arquivos oficiais e identifica a cópia espelhada do edital de 2019. Para praticar Cesgranrio, a tela distingue o CNU federal de AFT das provas de SEFAZ estadual.

O histórico, a sessão ativa, as notas curtas, os erros e as revisões dos PDFs ficam no progresso local e entram na exportação JSON; mantenha essa cópia privada. Esses dados não alteram os blocos nem as métricas do cronograma, que continuam representando períodos de 75 minutos. No celular, importe o catálogo também nesse aparelho e entre no Drive pela sua conta. Catálogo e progresso não sincronizam entre dispositivos.

A metodologia usa prática de recuperação e espaçamento como princípios gerais de aprendizagem. Consulte [Karpicke e Blunt (2011)](https://pubmed.ncbi.nlm.nih.gov/21252317/) sobre recuperação ativa e [Cepeda et al. (2006)](https://pubmed.ncbi.nlm.nih.gov/16719566/) sobre prática distribuída; esses estudos não validam os minutos exatos definidos no app.

Use **Exportar** para baixar uma cópia JSON e **Importar** para restaurá-la. A importação substitui o progresso atual. O arquivo exportado inclui respostas, textos de estudo de caso, notas e metadados dos PDFs estudados; mantenha-o privado. **Apagar meu progresso** remove o progresso local depois de uma confirmação e mantém o catálogo, que é armazenado separadamente.

O endereço do GitHub Pages, o servidor local e cada dispositivo mantêm armazenamentos separados. Para levar seu progresso ao Pages, exporte-o no endereço antigo e importe a cópia no novo endereço. O site não envia esse arquivo para o GitHub.

## Plano de treino discursivo para Auditor TI

Use um dos cinco blocos semanais de Auditor TI para a discursiva. Em **Estudar agora**, o bloco de treino abre a prova histórica na seção **Discursiva**. Comece pelo [caderno da FCC de 2019, página 17](https://arquivos.qconcursos.com/prova/arquivo_prova/62222/fcc-2019-sefaz-ba-auditor-fiscal-tecnologia-da-informacao-prova-ii-prova.pdf#page=17), com BPMN e gestão de incidentes, SQL em Oracle e gerenciamento do valor agregado.

1. **Primeira sessão:** faça a questão real sem consultar o espelho. Se o diagrama for feito no papel, use o rascunho para registrar as decisões de modelagem, os comandos e os cálculos.
2. **Três sessões seguintes:** trabalhe um caso autoral por vez, na ordem BPMN, SQL e valor agregado. Compare com o espelho, registre o erro que mais afetou a resposta e refaça o item sem consultar.
3. **Quinta sessão:** refaça os itens que errou na prova real. Use a autoavaliação para conferir se respondeu a todos os comandos e justifique as decisões ou cálculos pedidos.

Em cada bloco de 45 minutos, reserve 5 para ler os comandos, 30 para responder e 10 para comparar com o espelho e registrar um erro a corrigir. Se a primeira tentativa pedir mais tempo, anote quanto você levou e faça a revisão no bloco seguinte.

Mantenha Direito Tributário nas sessões de matérias comuns. A auditoria de escrituração, os recursos no CONSEF e a transição detalhada para o IBS ficam como complemento até a confirmação do próximo programa. O espelho do site é didático e o tempo sugerido serve para treino.

## Trilha prática de legislação baiana

Para estudar legislação estadual, abra **Apostila**, filtre por **Legislação Tributária da Bahia** e selecione **ICMS na prática · venda, transferência e transporte**. Siga para cálculo e créditos, DIFAL e substituição tributária, Simples Nacional, IPVA, ITD, taxas e processo fiscal. Em cada caso, responda antes de abrir o gabarito e escreva qual detalhe da situação mudaria a conclusão. Registre separadamente o resultado da primeira tentativa e o da revisão. Use 8 acertos em 10 casos inéditos como meta inicial de treino.

O [edital de Auditor de 2019](https://www.concursosfcc.com.br/concursos/govba118/index.html), itens 8.2.2 e 8.2.3 e Anexo II, dá referências diferentes para cada área. Administração Tributária teve 25 questões de Legislação Tributária entre as 55 específicas, com peso 3 naquele bloco. Em Auditor TI, Informática teve 35 das 55 específicas, seguida de Gestão Organizacional (15) e Matemática e Raciocínio Lógico (5). Para quem estuda Auditor TI, use a trilha de legislação junto com Direito Tributário nos blocos de base e preserve a prioridade de TI no ciclo pré-edital.

O acervo local fica em `downloads/legislacao-sefaz-ba/`, com os PDFs estaduais do [índice da SEFAZ](https://www.sefaz.ba.gov.br/legislacao/textos-legais/), o inventário com links de origem e textos extraídos para busca. Use o PDF para conferir o dispositivo e as notas de redação ou vigência. As versões do RICMS anteriores a 2021 e os anexos de anos anteriores servem para questões com recorte histórico. O acervo fica fora da pasta publicada.

Na trilha, ainda faltam casos aprofundados de benefícios fiscais, regimes específicos do RICMS, escrituração e auditoria de documentos fiscais, julgamento e recursos no CONSEF, e transição de ICMS para IBS. Quando houver edital novo, valide a abrangência por tópico do programa e compare o desempenho em questões inéditas e cronometradas.

## Limites do material

O plano de 90 dias é indicativo e pré-edital, com base fiscal comum e ICMS/BA. O edital e os cadernos da FCC de 2019 servem como referência histórica. Os casos de treino, os resumos, os espelhos e a rubrica são materiais didáticos do site. Confira a redação vigente nas fontes oficiais antes de usar uma regra em contexto jurídico.

Os resumos de Contabilidade referenciam materiais oficiais, como o CPC 00 (R2). Eles são recortes de estudo e não constituem um curso completo. Materiais comerciais ou outros documentos baixados de terceiros não são distribuídos neste repositório.
