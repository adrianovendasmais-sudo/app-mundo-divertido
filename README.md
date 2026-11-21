# Pequenos Gênios — PWA

Todos os arquivos ficam na mesma pasta (sem subpastas). O `index.html` precisa ficar na raiz do repositório.

## Publicar: GitHub + Cloudflare Pages
1. No GitHub, crie um repositório e envie **todos os arquivos** deste ZIP (*Add file → Upload files*).
2. No Cloudflare: *Workers & Pages → Create → Pages → Connect to Git* → escolha o repositório.
3. Configuração do build: **Framework preset: None**, **Build command: (vazio)**, **Build output directory: `/`** (ou deixe em branco).
4. *Save and Deploy*. O endereço será `https://nome.pages.dev` (https é necessário para instalar o app e usar offline).

Cada vez que você enviar uma alteração ao GitHub, o Cloudflare publica de novo sozinho.

## Instalar no celular
- **Android (Chrome):** abra o endereço → menu ⋮ → *Instalar app*.
- **iPhone (Safari):** Compartilhar → *Adicionar à Tela de Início*.
Depois de aberto uma vez com internet, funciona sem internet.

## Atualizar o app
Troque os arquivos no GitHub e, no `sw.js`, aumente o número: `const VERSAO = "v12"` → `"v13"`. Os celulares atualizam na próxima abertura.

## Observações
- A voz é a do próprio aparelho.
- Backup: Painel dos pais (segure o título "Pequenos Gênios" por 2 segundos) → *Salvar arquivo* / *Recuperar arquivo*.
- Temas: Menina (Maia), Menino (Teo) e Neutro (Capi).
