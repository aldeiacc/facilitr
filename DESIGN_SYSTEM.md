# Design system — facilitr.org

Fonte da auditoria: HTML público da home e CSS compilado pelo LiteSpeed/Elementor, coletados em 2026-09-03. Evidências: `evidence/html/home.html` e `evidence/home.css`.

## Identidade visual

Tokens globais declarados pelo Elementor:

| Token | Valor |
|---|---|
| primary | `#6EC1E4` |
| secondary | `#54595F` |
| text | `#7A7A7A` |
| accent | `#61CE70` |
| custom green | `#91E80C` |
| custom purple | `#BB0EE5` |

Tipografia global:

| Papel | Família | Peso |
|---|---|---|
| primary | Roboto | 600 |
| secondary | Roboto Slab | 400 |
| text | Roboto | 400 |
| accent | Roboto | 500 |

## Implementação observada

- WordPress com tema Hello Elementor e layouts Elementor.
- Layout responsivo usa os breakpoints e containers gerados pelo Elementor; preservar o CSS capturado como referência visual durante a reconstrução.
- Componentes recorrentes identificáveis no HTML: cabeçalho com navegação, hero, blocos de conteúdo, CTAs, accordions/toggles, cards, carrosséis Swiper, ícones sociais e rodapé.
- Assets de marca e imagens estão relacionados em `asset_manifest.json`, incluindo URL original, MIME, dimensões, texto alternativo e legenda quando disponíveis.

## Limitação

Esta primeira leitura reflete apenas CSS/HTML publicados. Valores internos não publicados do Site Settings do Elementor exigiriam export do WordPress ou acesso read-only ao host.
