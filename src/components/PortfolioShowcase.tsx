import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, TrendingUp, Users, Clock, DollarSign, Gamepad2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolioItems = [
  {
    id: "block-game",
    title: "Block Game",
    client: "Purus Games",
    description: "Strategic block puzzle game that challenges spatial reasoning and problem-solving skills",
    impact: "+35% user engagement",
    metrics: { engagement: "45%", retention: "30%", conversion: "15%" },
    thumbnail: "/BlockGame.png",
    category: "Engagement",
    duration: "4 weeks",
    cost: "$15,000",
    genre: "Puzzle"
  },
  {
    id: "fruit-game",
    title: "Fruit Game",
    client: "Purus Games",
    description: "Colorful fruit matching adventure combining strategy with fun gameplay",
    impact: "+40% session duration",
    metrics: { engagement: "50%", retention: "35%", conversion: "18%" },
    thumbnail: "/FruitGame.png",
    category: "Engagement",
    duration: "5 weeks",
    cost: "$18,000",
    genre: "Match-3"
  },
  {
    id: "bus-game",
    title: "Bus Game",
    client: "Purus Games",
    description: "City bus management simulation for route optimization and passenger satisfaction",
    impact: "+55% repeat play",
    metrics: { engagement: "60%", retention: "45%", conversion: "22%" },
    thumbnail: "/BusGame.png",
    category: "Retention",
    duration: "6 weeks",
    cost: "$22,000",
    genre: "Simulation"
  },
  {
    id: "sort-game",
    title: "Sort Game",
    client: "Purus Games",
    description: "Mind-bending sorting challenges testing logical thinking and pattern recognition",
    impact: "+30% completion rate",
    metrics: { engagement: "42%", retention: "28%", conversion: "12%" },
    thumbnail: "/SortGame.png",
    category: "Engagement",
    duration: "3 weeks",
    cost: "$12,000",
    genre: "Puzzle"
  },
  {
    id: "brand-x",
    title: "EcoChallenge Quest",
    client: "Brand X (Sustainability)",
    description: "Interactive sustainability challenge game driving eco-conscious behavior",
    impact: "+30% user playtime increase",
    metrics: { engagement: "40%", retention: "25%", conversion: "12%" },
    thumbnail: "/placeholder-game1.jpg",
    category: "Engagement",
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
    category: "Leads",
    duration: "8 weeks",
    cost: "$45,000",
    genre: "Exploration RPG"
  }
];

export function PortfolioShowcase() {
  const navigate = useNavigate();
  const [selectedCase, setSelectedCase] = useState<typeof portfolioItems[0] | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [expanded, setExpanded] = useState<boolean>(false);

  const categories = useMemo(() => ["All", "Engagement", "Leads", "Retention", "Awareness"], []);
  const filtered = useMemo(() => {
    if (activeTab === "All") return portfolioItems;
    return portfolioItems.filter(i => i.category === activeTab);
  }, [activeTab]);
  const itemsToShow = expanded ? filtered : filtered.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">Portfolio Showcase</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real campaigns, real results. See how we've helped brands achieve measurable growth through engaging game experiences.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:max-w-3xl mx-auto mb-4">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="text-xs sm:text-sm">{cat}</TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsToShow.map((item) => (
          <Card key={item.id} className="group tilt-card transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-card to-muted/30 neon-border">
            <CardHeader className="space-y-3">
              <div 
                className="aspect-video bg-gradient-to-br from-primary/10 to-success/10 rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer ring-1 ring-white/20"
                onClick={() => {
                  // Check if it's one of our 4 games and navigate to their page
                  if (['block-game', 'fruit-game', 'bus-game', 'sort-game'].includes(item.id)) {
                    navigate(`/${item.id}`);
                  }
                }}
              >
                {/* Default poster frame when not hovering */}
                {(item.id === 'fruit-game' || item.id === 'block-game' || item.id === 'bus-game') && (
                  <img
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                    src={
                      item.id === 'fruit-game'
                        ? '/FruitGame.png'
                        : item.id === 'block-game'
                        ? '/BlockGame.png'
                        : '/BusGame.png'
                    }
                    alt={`${item.title} poster`}
                  />
                )}
                {/* Hover video previews for specific games */}
                {item.id === 'fruit-game' && (
                  <video
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src="/fruits.mov"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                )}
                {item.id === 'block-game' && (
                  <video
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src="/puzzle.mov"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                )}
                {item.id === 'bus-game' && (
                  <video
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src="/Busgame.mov"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                )}

                <Play className="w-12 h-12 text-primary/60 group-hover:scale-110 transition-transform relative z-10" />
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

      {filtered.length > 3 && (
        <div className="flex justify-center">
          <Button variant="outline" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
}