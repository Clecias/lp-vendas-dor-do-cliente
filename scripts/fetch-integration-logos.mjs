import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import https from 'node:https';

const targetDir = resolve(process.cwd(), 'public/logos/integrations');
const baseUrl = 'https://cdn.simpleicons.org';

const integrations = [
  { id: 'shopify', name: 'Shopify', simpleIconsSlug: 'shopify' },
  { id: 'yampi', name: 'Yampi', simpleIconsSlug: null },
  { id: 'cartpanda', name: 'CartPanda', simpleIconsSlug: null },
  { id: 'woocommerce', name: 'WooCommerce', simpleIconsSlug: 'woocommerce' },
  { id: 'lpqv', name: 'LPQV', simpleIconsSlug: null },
  { id: 'nuvem-shop', name: 'Nuvem Shop', simpleIconsSlug: 'nuvemshop' },
  { id: 'unicopag', name: 'ÚnicoPag', simpleIconsSlug: null },
  { id: 'yever', name: 'Yever', simpleIconsSlug: null },
  { id: 'mercado-pago', name: 'Mercado Pago', simpleIconsSlug: 'mercadopago' },
  { id: 'appmax', name: 'AppMax', simpleIconsSlug: null },
  { id: 'kiwify', name: 'Kiwify', simpleIconsSlug: null },
  { id: 'hotmart', name: 'Hotmart', simpleIconsSlug: 'hotmart' },
  { id: 'kirvano', name: 'Kirvano', simpleIconsSlug: null },
  { id: 'braip', name: 'Braip', simpleIconsSlug: null },
  { id: 'ticto', name: 'Ticto', simpleIconsSlug: null },
  { id: 'eduzz', name: 'Eduzz', simpleIconsSlug: null },
  { id: 'monetizze', name: 'Monetizze', simpleIconsSlug: null },
  { id: 'pepper', name: 'Pepper', simpleIconsSlug: null },
  { id: 'lastlink', name: 'Lastlink', simpleIconsSlug: null },
  { id: 'facebook', name: 'Facebook', simpleIconsSlug: 'facebook' },
  { id: 'google', name: 'Google', simpleIconsSlug: 'google' },
  { id: 'tiktok', name: 'TikTok', simpleIconsSlug: 'tiktok' },
  { id: 'taboola', name: 'Taboola', simpleIconsSlug: 'taboola' },
  { id: 'shopee', name: 'Shopee', simpleIconsSlug: 'shopee' },
  { id: 'loggi', name: 'Loggi', simpleIconsSlug: null },
  { id: 'correios', name: 'Correios', simpleIconsSlug: null },
  { id: 'cainiao', name: 'Cainiao', simpleIconsSlug: null },
  { id: 'jadlog', name: 'Jadlog', simpleIconsSlug: null },
  { id: 'kangu', name: 'Kangu', simpleIconsSlug: null },
  { id: 'melhor-envio', name: 'Melhor Envio', simpleIconsSlug: null },
  { id: 'outras-transportadoras', name: 'Outras transportadoras', simpleIconsSlug: null },
];

const fetchSvg = (url) =>
  new Promise((resolvePromise, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Status ${res.statusCode}`));
          res.resume();
          return;
        }
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => resolvePromise(data));
      })
      .on('error', reject);
  });

await mkdir(targetDir, { recursive: true });

for (const integration of integrations) {
  if (!integration.simpleIconsSlug) {
    console.log(`PENDENTE: ${integration.name}`);
    continue;
  }

  const url = `${baseUrl}/${integration.simpleIconsSlug}`;
  try {
    const svg = await fetchSvg(url);
    const filePath = resolve(targetDir, `${integration.id}.svg`);
    await writeFile(filePath, svg, 'utf-8');
    console.log(`OK: ${integration.name}`);
  } catch (error) {
    console.log(`PENDENTE: ${integration.name}`);
  }
}
