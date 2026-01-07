import pages from '@/data/pages.json';
import redirects from '@/data/redirects.json';
import { PageRecord, RedirectRule } from '@/lib/seo';

export const pageRecords = pages as PageRecord[];
export const redirectRules = redirects as RedirectRule[];

export function getPageBySlug(slug: string): PageRecord | undefined {
  return pageRecords.find((page) => page.slug === slug);
}
