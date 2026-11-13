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

O andamento é guardado no `localStorage` deste navegador e perfil, na chave `rotaFiscalProgress.v1`. Isso inclui blocos concluídos, respostas, erros, revisões agendadas, simulados e rascunhos discursivos. Não há conta, sincronização ou backend. Limpar os dados do navegador, trocar de perfil ou mover o app para outra origem pode deixar os dados anteriores inacessíveis.

Use **Exportar** para baixar uma cópia JSON e **Importar** para restaurá-la. A importação substitui o progresso atual. O arquivo exportado inclui suas respostas e textos de estudo de caso; mantenha-o privado. **Apagar meu progresso** remove os dados locais depois de uma confirmação.

O endereço do GitHub Pages, o servidor local e cada dispositivo mantêm armazenamentos separados. Para levar seu progresso ao Pages, exporte-o no endereço antigo e importe a cópia no novo endereço. O site não envia esse arquivo para o GitHub.

## Limites do material

O plano de 90 dias é indicativo e pré-edital, com base fiscal comum e ICMS/BA. A referência a Administração Tributária e à Prova III Discursiva da FCC é histórica, do concurso de 2019; não define o programa, banca, formato, limites ou critérios de uma prova futura. As propostas, questões, resumos e rubrica são autorais e formativos. Confira a redação vigente nas fontes oficiais antes de usar uma regra em contexto jurídico.

Os resumos de Contabilidade referenciam materiais oficiais, como o CPC 00 (R2). Eles são recortes de estudo e não constituem um curso completo. Materiais comerciais ou outros documentos baixados de terceiros não são distribuídos neste repositório.
