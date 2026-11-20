# Pequenos Gênios — PWA

## Subir no Netlify (1 minuto)
1. Acesse https://app.netlify.com/drop (faça login se pedir).
2. **Descompacte este ZIP** e arraste a **pasta inteira** (a que contém `index.html`) para a área "Drag and drop".
3. Pronto: o Netlify gera um endereço `https://nome-aleatorio.netlify.app`. Em *Site configuration → Change site name* você escolhe um nome melhor.

> O endereço precisa ser **https** (o Netlify já entrega assim) para o app poder ser instalado e funcionar offline.

## Instalar no celular
- **Android (Chrome):** abra o endereço → menu ⋮ → *Instalar app* / *Adicionar à tela inicial*.
- **iPhone (Safari):** abra o endereço → botão Compartilhar → *Adicionar à Tela de Início*.
Depois de aberto uma vez com internet, o app funciona **sem internet**.

## Diferenças em relação à versão Google Apps Script
- A voz é a do próprio aparelho (a voz do Google Cloud só existia no Apps Script).
- O backup é por **arquivo**: Painel dos pais (segure o título "Pequenos Gênios" por 2 segundos) → *Salvar arquivo* / *Recuperar arquivo*.
- O progresso fica guardado no navegador/aparelho onde a criança brinca.

## Atualizar o app depois
Altere os arquivos, troque `const VERSAO = "v3"` por `"v4"` em `sw.js` e arraste a pasta de novo no Netlify (Deploys → arraste na área de deploy). Os celulares atualizam na próxima abertura.

## Arquivos
`index.html` (o app) · `manifest.webmanifest` · `sw.js` (offline) · `netlify.toml` · `fonts/` · `icons/` · `mascotes/`

## Publicar via GitHub + Netlify
1. Envie estes arquivos para a raiz de um repositório no GitHub.
2. No Netlify: *Add new site → Import an existing project → GitHub* → escolha o repositório.
3. Deixe *Build command* vazio e *Publish directory* como `.` (o `netlify.toml` já configura). Cada commit publica automaticamente.
