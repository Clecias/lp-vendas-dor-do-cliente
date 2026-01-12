import { SeoHead } from '@/components/seo/SeoHead';
import { getPageBySlug } from '@/lib/seo-data';

export default function Privacy() {
  const page = getPageBySlug('privacidade');

  if (!page) {
    return null;
  }

  return (
    <main className="min-h-screen bg-card px-6 py-16">
      <SeoHead
        seo={page.seo}
        fallbackTitle={page.title}
        fallbackDescription={page.summary}
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-foreground mb-6">Política de Privacidade</h1>
        <p className="text-muted-foreground">
          Esta página explica como coletamos, usamos e protegemos seus dados.
        </p>
      </div>
    </main>
  );
}
