export type RobotsSetting = 'index' | 'noindex';
export type RobotsFollowSetting = 'follow' | 'nofollow';

export interface PageSeo {
  title: string;
  description: string;
  slug: string;
  canonicalUrl?: string;
  robotsIndex: RobotsSetting;
  robotsFollow: RobotsFollowSetting;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  schemaJsonLd?: string;
  updatedAt?: string;
  published?: boolean;
}

export interface PageRecord {
  id: string;
  title: string;
  summary: string;
  slug: string;
  published: boolean;
  seo: PageSeo;
}

export interface RedirectRule {
  from: string;
  to: string;
  status: number;
}

export const SITE_BASE_URL = 'https://unicodrop.com.br';
export const SITE_NAME = 'Único Drop';
export const SITE_TWITTER = '@unicodrop';
export const DEFAULT_OG_IMAGE = 'https://lovable.dev/opengraph-image-p98pqg.png';

export function getSeoValue<T>(value: T | undefined | null, fallback: T): T {
  if (typeof value === 'string') {
    return (value.trim().length > 0 ? value : fallback) as T;
  }
  return value ?? fallback;
}

export function buildCanonicalUrl(slug: string, canonicalUrl?: string): string {
  if (canonicalUrl && canonicalUrl.trim().length > 0) {
    return canonicalUrl;
  }
  if (!slug || slug === '/') {
    return SITE_BASE_URL;
  }
  return `${SITE_BASE_URL}/${slug.replace(/^\//, '')}`;
}

export function getRobotsContent(index: RobotsSetting, follow: RobotsFollowSetting): string {
  return `${index}, ${follow}`;
}

export function safeParseJsonLd(jsonLd?: string): object | null {
  if (!jsonLd) return null;
  try {
    return JSON.parse(jsonLd);
  } catch (error) {
    throw new Error('schema_jsonld must be valid JSON');
  }
}
