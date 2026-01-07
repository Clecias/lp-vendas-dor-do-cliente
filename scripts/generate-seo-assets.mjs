import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(process.cwd());
const pagesPath = resolve(projectRoot, 'src/data/pages.json');
const redirectsPath = resolve(projectRoot, 'src/data/redirects.json');
const publicDir = resolve(projectRoot, 'public');

const siteUrl = 'https://unicodrop.com.br';
const environment = process.env.SEO_ENV || process.env.NODE_ENV || 'production';

const [pagesRaw, redirectsRaw] = await Promise.all([
  readFile(pagesPath, 'utf-8'),
  readFile(redirectsPath, 'utf-8'),
]);

const pages = JSON.parse(pagesRaw);
const redirects = JSON.parse(redirectsRaw);

const now = new Date().toISOString();

const urlEntries = pages
  .filter((page) => page.published && page.seo?.robotsIndex === 'index')
  .map((page) => {
    const slug = page.slug ? `/${page.slug.replace(/^\//, '')}` : '';
    const loc = `${siteUrl}${slug}`;
    const lastmod = page.seo?.updatedAt || now;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const robots =
  environment === 'production'
    ? `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;

await mkdir(publicDir, { recursive: true });
await Promise.all([
  writeFile(resolve(publicDir, 'sitemap.xml'), sitemap),
  writeFile(resolve(publicDir, 'robots.txt'), robots),
  writeFile(resolve(publicDir, 'redirects.json'), JSON.stringify(redirects, null, 2)),
]);
