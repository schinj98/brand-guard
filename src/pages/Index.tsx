import { HeroSection } from "@/components/trademark/HeroSection";
import { StatsSection } from "@/components/trademark/StatsSection";
import { TrademarkTypesSection } from "@/components/trademark/TrademarkTypesSection";
import { FeaturesSection } from "@/components/trademark/FeaturesSection";
import { PricingSection } from "@/components/trademark/PricingSection";
import { ProcessSection } from "@/components/trademark/ProcessSection";
import { BenefitsSection } from "@/components/trademark/BenefitsSection";
import { TestimonialsSection } from "@/components/trademark/TestimonialsSection";
import { FAQSection } from "@/components/trademark/FAQSection";
import { CTASection } from "@/components/trademark/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <StatsSection />
      <TrademarkTypesSection />
      <FeaturesSection />
      <PricingSection />
      <ProcessSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;
