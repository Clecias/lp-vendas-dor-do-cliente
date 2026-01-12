import { useEffect } from 'react';
import {
  buildCanonicalUrl,
  DEFAULT_OG_IMAGE,
  getRobotsContent,
  getSeoValue,
  safeParseJsonLd,
  SITE_NAME,
  SITE_TWITTER,
} from '@/lib/seo';
import { PageSeo } from '@/lib/seo';

interface SeoHeadProps {
  seo: PageSeo;
  fallbackTitle: string;
  fallbackDescription: string;
}

function setMetaTag(selector: string, attributes: Record<string, string>) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    tag?.setAttribute(key, value);
  });
}

function setLinkTag(selector: string, attributes: Record<string, string>) {
  let tag = document.head.querySelector<HTMLLinkElement>(selector);
  if (!tag) {
    tag = document.createElement('link');
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    tag?.setAttribute(key, value);
  });
}

export function SeoHead({ seo, fallbackTitle, fallbackDescription }: SeoHeadProps) {
  const title = getSeoValue(seo.title, fallbackTitle);
  const description = getSeoValue(seo.description, fallbackDescription);
  const canonicalUrl = buildCanonicalUrl(seo.slug, seo.canonicalUrl);
  const robots = getRobotsContent(seo.robotsIndex, seo.robotsFollow);
  const ogTitle = getSeoValue(seo.ogTitle, title);
  const ogDescription = getSeoValue(seo.ogDescription, description);
  const ogImage = getSeoValue(seo.ogImage, DEFAULT_OG_IMAGE);
  const twitterCard = getSeoValue(seo.twitterCard, 'summary_large_image');
  const parsedJsonLd = safeParseJsonLd(seo.schemaJsonLd || undefined);

  useEffect(() => {
    document.title = title;

    setMetaTag('meta[name="description"]', { name: 'description', content: description });
    setMetaTag('meta[name="robots"]', { name: 'robots', content: robots });

    setMetaTag('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMetaTag('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    setMetaTag('meta[property="og:title"]', { property: 'og:title', content: ogTitle });
    setMetaTag('meta[property="og:description"]', { property: 'og:description', content: ogDescription });
    setMetaTag('meta[property="og:image"]', { property: 'og:image', content: ogImage });
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });

    setMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: twitterCard });
    setMetaTag('meta[name="twitter:site"]', { name: 'twitter:site', content: SITE_TWITTER });
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: ogTitle });
    setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: ogDescription });
    setMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage });

    setLinkTag('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    const existingJsonLd = document.head.querySelector<HTMLScriptElement>(
      'script[data-seo-jsonld="true"]'
    );
    if (parsedJsonLd) {
      const script = existingJsonLd || document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoJsonld = 'true';
      script.textContent = JSON.stringify(parsedJsonLd);
      if (!existingJsonLd) {
        document.head.appendChild(script);
      }
    } else if (existingJsonLd) {
      existingJsonLd.remove();
    }
  }, [canonicalUrl, description, ogDescription, ogImage, ogTitle, parsedJsonLd, robots, title, twitterCard]);

  return null;
}
