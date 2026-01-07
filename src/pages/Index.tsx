import { useState } from 'react';
import { HeroSection } from '@/components/landing/HeroSection';
import { PainPointsSection } from '@/components/landing/PainPointsSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { CTASection } from '@/components/landing/CTASection';

const Index = () => {
  // Landing page for Único Drop
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-card">
      <HeroSection onShowVideo={() => setShowVideo(true)} />
      <PainPointsSection />
      <SolutionSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;