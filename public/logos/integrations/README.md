# Logos de integrações

Coloque os logos oficiais (SVG/PNG) em `public/logos/integrations/{id}.svg`.

## Como adicionar manualmente
1. Baixe o logo oficial (preferencialmente SVG).
2. Renomeie para o `id` correspondente.
3. Salve em `public/logos/integrations/`.

## Gerar logos via script
Use `node scripts/fetch-integration-logos.mjs` para tentar baixar via Simple Icons.
Os itens que não existirem serão listados como pendentes.
