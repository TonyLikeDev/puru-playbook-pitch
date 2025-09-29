import { Button } from "./ui/enhanced-button";
import { MetricCard } from "./MetricCard";
import { Play, Rocket, ArrowRight } from "lucide-react";

export function HeroSection() {
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
            <Button variant="hero" size="xl">
              <Play className="w-5 h-5" />
              Play a Demo
            </Button>
            
            <Button variant="cta" size="xl">
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

        {/* Trusted By Logos Slider */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground mb-6">Trusted by leading brands</p>
          <div className="flex justify-center items-center gap-8 md:gap-12 opacity-60 hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-success rounded"></div>
              Brand X
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <div className="w-8 h-8 bg-gradient-to-br from-warning to-primary rounded"></div>
              TechCorp
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <div className="w-8 h-8 bg-gradient-to-br from-success to-warning rounded"></div>
              EduLearn
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-warning rounded"></div>
              GameFlow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}