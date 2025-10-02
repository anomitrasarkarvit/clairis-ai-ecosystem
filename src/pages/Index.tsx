import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AIShowcase } from "@/components/ai-showcase";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ChatDrawer } from "@/components/chat-drawer";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection onChatOpen={() => setIsChatOpen(true)} />
        <AIShowcase />
        <ContactSection />
      </main>
      <Footer />
      <ChatDrawer open={isChatOpen} onOpenChange={setIsChatOpen} />
    </div>
  );
};

export default Index;
