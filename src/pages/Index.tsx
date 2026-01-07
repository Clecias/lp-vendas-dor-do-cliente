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

const Index = () => {
  // Landing page for Único Drop
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-card">
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
    </div>
  );
};

export default Index;
