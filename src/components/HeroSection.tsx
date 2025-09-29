import { Button } from "./ui/enhanced-button";
import { MetricCard } from "./MetricCard";
import { ContactModal } from "./ContactModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
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
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="xl">
                  <Play className="w-5 h-5" />
                  Play a Demo
                </Button>
              </DialogTrigger>
              <div className="hidden">
                {/* Demo modal would go here */}
              </div>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="cta" size="xl">
                  <Rocket className="w-5 h-5" />
                  Let's Build Your Game Together
                </Button>
              </DialogTrigger>
              <ContactModal />
            </Dialog>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Button variant="ghost" size="sm">
              <ArrowRight className="w-4 h-4" />
              See Case Studies
            </Button>
            <Button variant="ghost" size="sm">
              <ArrowRight className="w-4 h-4" />
              Download Purus Playbook
            </Button>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <MetricCard
            value="6-8 weeks"
            label="Avg Delivery Time"
            description="vs 12-16 weeks industry standard"
            delay={200}
          />
          <MetricCard
            value="95%"
            label="Client Satisfaction"
            description="with post-launch support included"
            delay={400}
          />
          <MetricCard
            value="+40%"
            label="Engagement Boost"
            description="average campaign performance lift"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
}