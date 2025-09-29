import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, TrendingUp, Users, Clock, DollarSign, Gamepad2 } from "lucide-react";

const portfolioItems = [
  {
    id: "brand-x",
    title: "EcoChallenge Quest",
    client: "Brand X (Sustainability)",
    description: "Interactive sustainability challenge game driving eco-conscious behavior",
    impact: "+30% user playtime increase",
    metrics: { engagement: "40%", retention: "25%", conversion: "12%" },
    thumbnail: "/placeholder-game1.jpg",
    category: "Engagement Campaign",
    duration: "6 weeks",
    cost: "$25,000",
    genre: "Puzzle Adventure"
  },
  {
    id: "brand-y", 
    title: "Product Discovery Adventure",
    client: "Brand Y (E-commerce)",
    description: "Gamified product discovery experience boosting catalog exploration",
    impact: "+45% product page visits",
    metrics: { engagement: "35%", retention: "30%", conversion: "18%" },
    thumbnail: "/placeholder-game2.jpg", 
    category: "Lead Generation",
    duration: "8 weeks",
    cost: "$45,000",
    genre: "Exploration RPG"
  },
  {
    id: "brand-z",
    title: "Skills Mastery Arena", 
    client: "Brand Z (EdTech)",
    description: "Competitive learning platform increasing course completion rates",
    impact: "+60% course completion",
    metrics: { engagement: "55%", retention: "45%", conversion: "22%" },
    thumbnail: "/placeholder-game3.jpg",
    category: "User Retention",
    duration: "10 weeks",
    cost: "$60,000",
    genre: "Strategy Simulation"
  }
];

export function PortfolioShowcase() {
  const [selectedCase, setSelectedCase] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Portfolio Showcase</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real campaigns, real results. See how we've helped brands achieve measurable growth through engaging game experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="space-y-3">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-success/10 rounded-lg flex items-center justify-center relative overflow-hidden">
                <Play className="w-12 h-12 text-primary/60 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <Badge variant="secondary" className="w-fit">{item.category}</Badge>
              <div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{item.client}</CardDescription>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{item.description}</p>
              
              <div className="flex items-center gap-2 text-sm font-semibold text-success">
                <TrendingUp className="w-4 h-4" />
                {item.impact}
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center p-2 bg-primary/5 rounded">
                  <div className="font-semibold text-primary">+{item.metrics.engagement}</div>
                  <div className="text-muted-foreground">Engagement</div>
                </div>
                <div className="text-center p-2 bg-success/5 rounded">
                  <div className="font-semibold text-success">+{item.metrics.retention}</div>
                  <div className="text-muted-foreground">Retention</div>
                </div>
                <div className="text-center p-2 bg-warning/5 rounded">
                  <div className="font-semibold text-warning">+{item.metrics.conversion}</div>
                  <div className="text-muted-foreground">Conversion</div>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => setSelectedCase(item)}
                  >
                    View Game
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl">{item.title}</DialogTitle>
                    <DialogDescription>{item.client}</DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-success/10 rounded-lg flex items-center justify-center">
                      <Play className="w-16 h-16 text-primary/60" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          Development Time
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.duration} from concept to launch
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-success" />
                          Investment
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.cost} total project cost
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Gamepad2 className="w-4 h-4 text-warning" />
                          Genre
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.genre}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-success/10 to-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Key Results</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-2xl font-bold text-success">+{item.metrics.engagement}</div>
                          <div className="text-muted-foreground">Engagement Boost</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">+{item.metrics.retention}</div>
                          <div className="text-muted-foreground">Retention Increase</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-warning">+{item.metrics.conversion}</div>
                          <div className="text-muted-foreground">Conversion Lift</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}