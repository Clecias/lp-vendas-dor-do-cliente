import { Link } from "react-router-dom";
import { SeoHead } from "@/components/seo/SeoHead";
import { PageSeo } from "@/lib/seo";

const seoFallback: PageSeo = {
  title: "Página não encontrada | Único Drop",
  description: "Não encontramos a página solicitada. Volte para a home da Único Drop.",
  slug: "404",
  canonicalUrl: "",
  robotsIndex: "noindex",
  robotsFollow: "nofollow",
  ogTitle: "Página não encontrada | Único Drop",
  ogDescription: "Não encontramos a página solicitada. Volte para a home da Único Drop.",
  ogImage:
    "https://storage.googleapis.com/gpt-engineer-file-uploads/Qu0Q8nEeNcUkpUtHGIeqPmP3dNE2/uploads/1767803427543-PNGS - LOGO UNICODROP_8.png",
  twitterCard: "summary_large_image",
};

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SeoHead
        seo={seoFallback}
        fallbackTitle={seoFallback.title}
        fallbackDescription={seoFallback.description}
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">Oops! Página não encontrada</p>
        <Link to="/" className="text-primary hover:underline">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
