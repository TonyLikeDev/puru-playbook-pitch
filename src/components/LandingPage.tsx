import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";

const games = [
  {
    id: "block-game",
    name: "Block Game",
    image: "/BlockGame.png",
    description: "Strategic block puzzle game",
    path: "/block-game"
  },
  {
    id: "fruit-game", 
    name: "Fruit Game",
    image: "/FruitGame.png",
    description: "Colorful fruit matching adventure",
    path: "/fruit-game"
  },
  {
    id: "bus-game",
    name: "Bus Game", 
    image: "/BusGame.png",
    description: "City bus management simulation",
    path: "/bus-game"
  },
  {
    id: "sort-game",
    name: "Sort Game",
    image: "/SortGame.png", 
    description: "Mind-bending sorting challenges",
    path: "/sort-game"
  }
];

export function LandingPage() {
  const navigate = useNavigate();
  const [hoveredGame, setHoveredGame] = useState<string | null>(null);

  const handleGameClick = (gamePath: string) => {
    navigate(gamePath);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-success/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Purus Games makes every game matter by crafting creative and interactive HTML5 experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Purus Games, we create games not just for entertainment but to connect, inspire, and deliver real value. 
            Every product is crafted with care, creativity, and a player-first mindset.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="hero-button text-lg px-8 py-4 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Explore Our Games
            </button>
            <button className="cta-button text-lg px-8 py-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Game Showcase Slider */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Featured Games</h2>
          <p className="text-lg text-muted-foreground">Click on any game to play and explore</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="games-marquee flex items-center gap-12">
            {[...games, ...games].map((game, idx) => (
              <div
                key={`${game.id}-${idx}`}
                className="shrink-0 flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
                onClick={() => handleGameClick(game.path)}
              >
                <div className={`relative transition-all duration-300 ${hoveredGame === game.id ? 'transform -translate-y-4 scale-105' : ''}`}>
                  {/* Image */}
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="h-24 w-24 md:h-32 md:w-32 object-contain rounded-lg shadow-lg group-hover:shadow-xl"
                  />
                  {/* Hover video previews for specific games */}
                  {game.id === 'fruit-game' && (
                    <video
                      className={`absolute inset-0 h-24 w-24 md:h-32 md:w-32 object-cover rounded-lg ${hoveredGame === game.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                      src="/fruits.mov"
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                  )}
                  {game.id === 'block-game' && (
                    <video
                      className={`absolute inset-0 h-24 w-24 md:h-32 md:w-32 object-cover rounded-lg ${hoveredGame === game.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                      src="/puzzle.mov"
                      muted
                      autoPlay
                      loop
                      playsInline
                    />
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground">{game.name}</h3>
                  <p className="text-sm text-muted-foreground">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
