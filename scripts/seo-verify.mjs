import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = resolve(process.cwd());
const pagesPath = resolve(projectRoot, 'src/data/pages.json');
const pagesRaw = await readFile(pagesPath, 'utf-8');
const pages = JSON.parse(pagesRaw);

const requiredFields = [
  'title',
  'description',
  'slug',
  'robotsIndex',
  'robotsFollow',
  'ogTitle',
  'ogDescription',
  'ogImage',
  'twitterCard',
];

const errors = [];

pages.forEach((page) => {
  const seo = page.seo || {};
  requiredFields.forEach((field) => {
    if (seo[field] === undefined || seo[field] === null) {
      errors.push(`Page ${page.id} missing seo.${field}`);
    }
  });

  if (seo.schemaJsonLd && seo.schemaJsonLd.trim().length > 0) {
    try {
      JSON.parse(seo.schemaJsonLd);
    } catch (error) {
      errors.push(`Page ${page.id} has invalid schemaJsonLd`);
    }
  }

  if (!seo.title) {
    errors.push(`Page ${page.id} missing seo.title`);
  }

  if (!seo.description) {
    errors.push(`Page ${page.id} missing seo.description`);
  }
});

if (errors.length > 0) {
  console.error('SEO verification failed:\n' + errors.join('\n'));
  process.exit(1);
}

console.log('SEO verification passed.');
