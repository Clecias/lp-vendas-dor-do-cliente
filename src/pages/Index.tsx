import { useState } from 'react';
import { Header } from '@/components/landing/Header';
import { HeroSection } from '@/components/landing/HeroSection';
import { PainPointsSection } from '@/components/landing/PainPointsSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { IntegrationsSection } from '@/components/landing/IntegrationsSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { SeoHead } from '@/components/seo/SeoHead';
import { getPageBySlug } from '@/lib/seo-data';

const Index = () => {
  // Landing page for Único Drop
  const [showVideo, setShowVideo] = useState(false);
  const page = getPageBySlug('');

  return (
    <div className="min-h-screen bg-card">
      {page && (
        <SeoHead
          seo={page.seo}
          fallbackTitle={page.title}
          fallbackDescription={page.summary}
        />
      )}
      <Header />
      <div className="pt-16">
        <HeroSection onShowVideo={() => setShowVideo(true)} />
        <PainPointsSection />
        <SolutionSection />
        <TestimonialsSection />
        <PricingSection />
        <IntegrationsSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {showVideo && (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/M8O4vOj-UOE?autoplay=1"
                title="Vídeo Único Drop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
