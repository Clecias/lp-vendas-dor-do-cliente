import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { resolve } from 'node:path';

const projectRoot = resolve(process.cwd());
const pagesPath = resolve(projectRoot, 'src/data/pages.json');
const redirectsPath = resolve(projectRoot, 'src/data/redirects.json');
const indexPath = resolve(projectRoot, 'index.html');

const pagesRaw = await readFile(pagesPath, 'utf-8');
const redirectsRaw = await readFile(redirectsPath, 'utf-8');

const pages = JSON.parse(pagesRaw);
const redirects = JSON.parse(redirectsRaw);

const port = process.env.SEO_SERVER_PORT || 4174;

const DEFAULT_OG_IMAGE = 'https://lovable.dev/opengraph-image-p98pqg.png';
const SITE_NAME = 'Único Drop';
const SITE_TWITTER = '@unicodrop';
const SITE_URL = 'https://unicodrop.com.br';

const getValue = (value, fallback) => {
  if (typeof value === 'string') {
    return value.trim().length > 0 ? value : fallback;
  }
  return value ?? fallback;
};

const buildCanonicalUrl = (slug, canonicalUrl) => {
  if (canonicalUrl && canonicalUrl.trim().length > 0) {
    return canonicalUrl;
  }
  if (!slug || slug === '/') {
    return SITE_URL;
  }
  return `${SITE_URL}/${slug.replace(/^\//, '')}`;
};

const buildHeadTags = (page) => {
  const title = getValue(page.seo?.title, page.title);
  const description = getValue(page.seo?.description, page.summary);
  const canonicalUrl = buildCanonicalUrl(page.seo?.slug ?? page.slug, page.seo?.canonicalUrl);
  const robotsIndex = getValue(page.seo?.robotsIndex, 'index');
  const robotsFollow = getValue(page.seo?.robotsFollow, 'follow');
  const robots = `${robotsIndex}, ${robotsFollow}`;
  const ogTitle = getValue(page.seo?.ogTitle, title);
  const ogDescription = getValue(page.seo?.ogDescription, description);
  const ogImage = getValue(page.seo?.ogImage, DEFAULT_OG_IMAGE);
  const twitterCard = getValue(page.seo?.twitterCard, 'summary_large_image');

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}">`,
    `<link rel="canonical" href="${canonicalUrl}">`,
    `<meta name="robots" content="${robots}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    `<meta property="og:title" content="${ogTitle}">`,
    `<meta property="og:description" content="${ogDescription}">`,
    `<meta property="og:image" content="${ogImage}">`,
    `<meta property="og:url" content="${canonicalUrl}">`,
    `<meta name="twitter:card" content="${twitterCard}">`,
    `<meta name="twitter:site" content="${SITE_TWITTER}">`,
    `<meta name="twitter:title" content="${ogTitle}">`,
    `<meta name="twitter:description" content="${ogDescription}">`,
    `<meta name="twitter:image" content="${ogImage}">`,
  ];

  if (page.seo?.schemaJsonLd && page.seo.schemaJsonLd.trim().length > 0) {
    try {
      JSON.parse(page.seo.schemaJsonLd);
      tags.push(`<script type="application/ld+json">${page.seo.schemaJsonLd}</script>`);
    } catch (error) {
      console.warn(`Invalid schemaJsonLd for page ${page.id}`);
    }
  }

  return tags.join('\n');
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://localhost:${port}`);
  const path = url.pathname;

  if (path.startsWith('/api/pages')) {
    const slug = path.replace('/api/pages', '').replace(/^\//, '');
    const page = pages.find((item) => item.slug === slug);
    if (!page) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(page));
    return;
  }

  if (path === '/redirects.json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(redirects));
    return;
  }

  const redirectMatch = redirects.find((rule) => rule.from === path);
  if (redirectMatch) {
    res.writeHead(redirectMatch.status || 301, { Location: redirectMatch.to });
    res.end();
    return;
  }

  try {
    const html = await readFile(indexPath, 'utf-8');
    const slug = path.replace(/^\//, '');
    const page = pages.find((item) => item.slug === slug) || pages.find((item) => item.slug === '');
    const headTags = page ? buildHeadTags(page) : '';
    const response = html.includes('<!-- seo-head -->')
      ? html.replace('<!-- seo-head -->', headTags)
      : html.replace('</head>', `${headTags}\n</head>`);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(response);
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(port, () => {
  console.log(`SEO dev server running on http://localhost:${port}`);
});
