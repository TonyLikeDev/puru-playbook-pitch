import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { DashboardTabs } from "@/components/DashboardTabs";
import { ContactModal } from "@/components/ContactModal";
import { CompanyInfoModal } from "@/components/CompanyInfoModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);

  // Subscribe to a global event to open contact modal
  if (typeof window !== "undefined") {
    window.addEventListener("open-contact-modal", () => setIsContactModalOpen(true));
  }

  return (
    <div className="min-h-screen bg-background pt-16 relative">
      <div className="arcade-bg"></div>
      <div className="scanlines"></div>
      {/* Header Logo Top-Left */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-2">
            <img src="/SiteLogo.png" alt="Purus Games" className="h-8 w-auto" />
          </a>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline mr-2">Our Social Media</span>
            <a href="https://www.tiktok.com/@purusgames" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
              <img src="/Tiktok-logo.png" alt="TikTok" className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575602795772" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
              <img src="/FB-logo.png" alt="Facebook" className="h-5 w-5" />
            </a>
            <button
              className="ml-3 text-xs border px-2 py-1 rounded-md hover:bg-accent"
              onClick={() => {
                const html = document.documentElement;
                html.classList.toggle('dark');
              }}
            >
              Toggle Dark
            </button>
          </div>
        </div>
      </header>

      <HeroSection
        onBuildGameClick={() => setIsContactModalOpen(true)}
        onPlayDemoClick={() => {
          const el = document.getElementById("portfolio");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      
      <main className="container mx-auto px-4 py-12 pb-28">
        <DashboardTabs />
      </main>
      
      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-neutral-900/90 backdrop-blur-sm border-t border-border p-4 z-50">
        <div className="container mx-auto flex flex-col sm:flex-row gap-3 justify-center items-center">
          <span className="text-sm font-medium text-muted-foreground">
            Ready to boost your campaign engagement by 40%?
          </span>
          <div className="flex gap-2">
            <button 
              className="hero-button text-sm px-4 py-2"
              onClick={() => setIsContactModalOpen(true)}
            >
              Let's Build Your Game
            </button>
            <button 
              className="cta-button text-sm px-4 py-2"
              onClick={() => setIsCompanyInfoOpen(true)}
            >
              Get Free Strategy Call <span className="ml-1 font-bold text-primary">(20‑min)</span>
            </button>
          </div>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <CompanyInfoModal 
        isOpen={isCompanyInfoOpen} 
        onClose={() => setIsCompanyInfoOpen(false)} 
      />
    </div>
  );
};

export default Index;
