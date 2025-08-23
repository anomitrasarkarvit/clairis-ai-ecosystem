import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AIShowcase } from "@/components/ai-showcase";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AIShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
