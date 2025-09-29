import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Download, BookOpen, TrendingUp, Target, Zap, CheckCircle } from "lucide-react";

const resources = [
  {
    title: "The Gamification Marketing Playbook",
    description: "5 proven tactics for branded games that drive engagement and conversions",
    type: "PDF Guide",
    size: "24 pages",
    downloadCount: "2.3k+",
    topics: ["Strategy Framework", "Engagement Mechanics", "ROI Benchmarks", "Case Studies"]
  },
  {
    title: "Gaming Campaign Benchmark Report", 
    description: "Industry data on engagement rates, conversion metrics, and campaign performance",
    type: "Research Report",
    size: "16 pages", 
    downloadCount: "1.8k+",
    topics: ["Industry Benchmarks", "Performance Metrics", "Cost Analysis", "Trend Insights"]
  },
  {
    title: "Branded Game Design Templates",
    description: "Ready-to-use game mechanics and UI components for rapid prototyping",
    type: "Design Kit",
    size: "12 templates",
    downloadCount: "950+", 
    topics: ["Game Mechanics", "UI Templates", "Brand Integration", "Mobile Optimization"]
  }
];

const pricingTiers = [
  {
    name: "Starter",
    range: "$15k - $25k",
    description: "Perfect for testing gamification with your audience",
    features: ["Simple game mechanics", "2-week development", "Basic analytics", "Email support"],
    popular: false
  },
  {
    name: "Growth", 
    range: "$30k - $60k",
    description: "Full-featured campaigns with custom integrations",
    features: ["Custom game design", "4-6 week development", "Advanced analytics", "Priority support", "A/B testing"],
    popular: true
  },
  {
    name: "Flagship",
    range: "$100k+",
    description: "Enterprise campaigns with maximum impact",
    features: ["Fully custom experience", "8+ week development", "Real-time analytics", "Dedicated PM", "6-month optimization"],
    popular: false
  }
];

export function ResourcesSection() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate download
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Resources & Pricing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Free resources to get started, plus transparent pricing to help you plan your budget.
        </p>
      </div>

      {/* Resources Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Free Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="border-0 bg-gradient-to-br from-card to-muted/30 hover:shadow-lg transition-all duration-300">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary">{resource.type}</Badge>
                </div>
                <div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">{resource.description}</CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{resource.size}</span>
                  <span>{resource.downloadCount} downloads</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm font-medium">What's Inside:</div>
                  <div className="flex flex-wrap gap-1">
                    {resource.topics.map((topic, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4" />
                      Download Free
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Download {resource.title}</DialogTitle>
                      <DialogDescription>
                        Enter your details to receive the download link instantly.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <form onSubmit={handleDownload} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@company.com"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Your Company"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        variant="hero" 
                        className="w-full"
                        disabled={downloadSuccess}
                      >
                        {downloadSuccess ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            Download Started!
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Get Instant Access
                          </>
                        )}
                      </Button>
                      
                      <p className="text-xs text-muted-foreground text-center">
                        We'll also send you 2 bonus emails with exclusive gaming marketing insights.
                      </p>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground">Investment Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`border-0 relative ${
              tier.popular 
                ? 'bg-gradient-to-br from-primary/10 to-success/10 ring-2 ring-primary/20' 
                : 'bg-gradient-to-br from-card to-muted/30'
            }`}>
              {tier.popular && (
                <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center space-y-3">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{tier.range}</div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={tier.popular ? "hero" : "outline"} 
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-0 bg-gradient-to-r from-primary/5 to-success/5 p-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">Ready to Get Started?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download our free playbook and schedule a strategy call to discuss your specific needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg">
              <Zap className="w-4 h-4" />
              Let's Build Your Game Together
            </Button>
            <Button variant="outline" size="lg">
              <Target className="w-4 h-4" />
              Schedule 20-min Strategy Call
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-4 border-t border-border/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Fixed</div>
              <div className="text-sm text-muted-foreground">Pricing model</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">6 weeks</div>
              <div className="text-sm text-muted-foreground">Average delivery</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">Free</div>
              <div className="text-sm text-muted-foreground">Strategy consultation</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}