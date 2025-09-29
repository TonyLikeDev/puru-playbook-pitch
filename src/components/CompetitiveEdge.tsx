import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Wrench, DollarSign } from "lucide-react";

const competitiveMetrics = [
  {
    metric: "Delivery Speed",
    purusScore: 85,
    industryScore: 60,
    icon: Clock,
    description: "Average project delivery time vs industry standard",
    purusText: "6-8 weeks",
    industryText: "12-16 weeks"
  },
  {
    metric: "Customization Options", 
    purusScore: 90,
    industryScore: 45,
    icon: Wrench,
    description: "Flexibility in game mechanics and brand integration",
    purusText: "Fully custom",
    industryText: "Template-based"
  },
  {
    metric: "Post-Launch Support",
    purusScore: 95,
    industryScore: 35,
    icon: CheckCircle, 
    description: "Ongoing optimization and feature updates",
    purusText: "6 months included",
    industryText: "30 days typical"
  },
  {
    metric: "Cost Efficiency",
    purusScore: 80,
    industryScore: 55,
    icon: DollarSign,
    description: "Value delivered per dollar invested",
    purusText: "Fixed pricing",
    industryText: "Variable costs"
  }
];

export function CompetitiveEdge() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Choose Purus Games?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We outperform industry standards across key metrics that matter to CMOs and marketing teams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {competitiveMetrics.map((item) => (
          <Card key={item.metric} className="border-0 bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{item.metric}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">Purus Games</span>
                  <span className="text-sm font-bold text-primary">{item.purusText}</span>
                </div>
                <Progress value={item.purusScore} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-muted-foreground">Industry Average</span>
                  <span className="text-sm text-muted-foreground">{item.industryText}</span>
                </div>
                <Progress value={item.industryScore} className="h-2 opacity-50" />
              </div>
              
              <div className="flex justify-center">
                <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-semibold">
                  +{item.purusScore - item.industryScore}% advantage
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="border-0 bg-gradient-to-r from-primary/5 to-success/5 p-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">The Purus Advantage</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            While others focus on one-size-fits-all solutions, we deliver custom gaming experiences 
            that align with your specific brand goals and audience needs. Our data-driven approach 
            ensures measurable ROI from day one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">20%</div>
              <div className="text-sm text-muted-foreground">Faster delivery than competitors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">95%</div>
              <div className="text-sm text-muted-foreground">Client satisfaction rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">40%</div>
              <div className="text-sm text-muted-foreground">Average engagement boost</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}