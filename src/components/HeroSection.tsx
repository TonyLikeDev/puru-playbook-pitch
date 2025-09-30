import { Button } from "./ui/enhanced-button";
import { MetricCard } from "./MetricCard";
import { Play, Rocket, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onBuildGameClick?: () => void;
  onPlayDemoClick?: () => void;
}

export function HeroSection({ onBuildGameClick, onPlayDemoClick }: HeroSectionProps) {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-warning/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Why Work With{" "}
              <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                Purus Games?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-success">20% faster delivery</span> •{" "}
              <span className="font-semibold text-primary">95% satisfaction</span> •{" "}
              <span className="font-semibold text-warning">+40% campaign engagement</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="xl"
              onClick={() => {
                if (onPlayDemoClick) {
                  onPlayDemoClick();
                  return;
                }
                const el = document.getElementById("portfolio");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <Play className="w-5 h-5" />
              Play a Demo
            </Button>
            
            <Button
              variant="cta"
              size="xl"
              onClick={() => {
                if (onBuildGameClick) {
                  onBuildGameClick();
                  return;
                }
                // Fallback: dispatch global event to open contact modal
                window.dispatchEvent(new CustomEvent("open-contact-modal"));
              }}
            >
              <Rocket className="w-5 h-5" />
              Let's Build Your Game Together
            </Button>
          </div>
          
          <div className="flex justify-center">
            <Button variant="ghost" size="sm">
              <ArrowRight className="w-4 h-4" />
              Download Purus Playbook
            </Button>
          </div>
        </div>

        {/* Trusted By Logos Slider */
        // Expanded to 10 brands with simple logo placeholders
        }
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-muted-foreground mb-6">Trusted by brands</p>
          <div className="relative overflow-hidden">
            <div className="brands-marquee flex items-center gap-10 opacity-70 hover:opacity-100">
              {(() => {
                const base = [
                  { name: "Amazon", src: "/brands/amazon.svg", iconSrc: "/amazon_logo.png" },
                  { name: "Shopee", src: "/brands/shopee.svg", iconSrc: "/Shopee_logo.png" },
                  { name: "Brand X", src: "/brands/brandx.svg" },
                  { name: "TechCorp", src: "/brands/techcorp.svg" },
                  { name: "EduLearn", src: "/brands/edulearn.svg" },
                  { name: "GameFlow", src: "/brands/gameflow.svg" },
                  { name: "NovaLabs", src: "/brands/novalabs.svg" },
                  { name: "MarketHub", src: "/brands/markethub.svg" },
                  { name: "Skyline", src: "/brands/skyline.svg" },
                  { name: "Brightly", src: "/brands/brightly.svg" },
                ];
                const doubled = base.concat(base);
                return doubled.map((b, idx) => (
                  <div key={`${b.name}-${idx}`} className="shrink-0 flex flex-col items-center">
                    <img src={b.src} alt={b.name} className="h-8 w-auto opacity-80" />
                    {b.iconSrc && (
                      <img
                        src={b.iconSrc}
                        alt={`${b.name} icon`}
                        className="h-4 w-auto mt-1 opacity-70"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                    )}
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}