import { SeoHead } from '@/components/seo/SeoHead';
import { getPageBySlug } from '@/lib/seo-data';

export default function Terms() {
  const page = getPageBySlug('termos');

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
        <h1 className="text-3xl font-bold text-foreground mb-6">Termos de Uso</h1>
        <p className="text-muted-foreground">
          Esta página detalha os termos de uso da plataforma Único Drop.
        </p>
      </div>
    </main>
  );
}
