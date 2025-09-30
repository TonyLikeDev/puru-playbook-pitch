import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, Palette, Rocket, Handshake, Users } from "lucide-react";

export function CompetitiveEdge() {
  return (
    <div className="space-y-8">
      {/* Our Mission */}
      <Card className="border-0 bg-gradient-to-r from-primary/5 to-success/5 p-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Purus Games, we believe games are more than just entertainment — they're powerful experiences that connect people, inspire creativity, and deliver real value.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We specialize in game development that blends technical excellence, creative design, and a player-first mindset. From fast-paced mobile games to lightweight HTML5 browser experiences, every project we build is crafted with quality, care, and innovation.
          </p>
        </div>
      </Card>

      {/* Core Values */}
      <div className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-warning" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">🎨 Creative Excellence</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We design and develop unique, engaging gaming experiences with originality and purpose. Every game we make is more than just play — it's a carefully crafted journey.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-success/10 rounded-lg">
                  <Rocket className="w-6 h-6 text-success" />
                </div>
                <div>
                  <CardTitle className="text-xl">🚀 Scalability & Flexibility</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our team has hands-on expertise in both large-scale Unity game development and lightweight HTML5 game projects. Whether you need a branded advergame, a mobile app, or a cross-platform solution, we adapt to your vision and market.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card to-muted/30">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-warning/10 rounded-lg">
                  <Handshake className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <CardTitle className="text-xl">🤝 Reliable Partnership</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We see every client as a long-term collaborator. With transparent processes and full-cycle development support, we make game creation stress-free and rewarding. Your goals become our mission.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Our Team */}
      <Card className="border-0 bg-gradient-to-r from-primary/5 to-success/5 p-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">👾 Our Team</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're a passionate group of game developers, designers, and creators who live and breathe gaming. With diverse backgrounds and a shared love for play, we work together to turn ideas into exceptional games that truly matter.
          </p>
        </div>
      </Card>
    </div>
  );
}