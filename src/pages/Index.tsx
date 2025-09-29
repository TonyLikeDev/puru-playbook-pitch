import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { DashboardTabs } from "@/components/DashboardTabs";
import { ContactModal } from "@/components/ContactModal";
import { CompanyInfoModal } from "@/components/CompanyInfoModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12">
        <DashboardTabs />
      </main>
      
      {/* Sticky CTA Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-border p-4 z-50">
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
              Get Free Strategy Call
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
