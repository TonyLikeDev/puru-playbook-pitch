import { useState } from "react";
import { ArrowLeft, Play, Download, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BusGame() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      {/* Game Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <img src="/BusGame.png" alt="Bus Game" className="h-32 w-32 mx-auto rounded-lg shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">Bus Game</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              City bus management simulation where you control routes, pick up passengers, 
              and optimize your transportation network for maximum efficiency.
            </p>
          </div>

          {/* Game Area */}
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <div className="aspect-square max-w-md mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
              {isPlaying ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-warning rounded-lg mx-auto mb-4 animate-pulse"></div>
                  <p className="text-muted-foreground">Game Loading...</p>
                </div>
              ) : (
                <div className="text-center">
                  <Play className="w-16 h-16 text-warning mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">Click Play to start the game</p>
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="hero-button px-6 py-3"
                  >
                    Play Now
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Game Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-2">Game Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Realistic city simulation</li>
                <li>• Multiple bus types</li>
                <li>• Route optimization</li>
                <li>• Economic management</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-2">How to Play</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Plan bus routes</li>
                <li>• Pick up waiting passengers</li>
                <li>• Manage fuel and maintenance</li>
                <li>• Expand your network</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-2">Bus Types</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 🚌 Standard: Basic capacity</li>
                <li>• 🚎 Articulated: High capacity</li>
                <li>• 🚐 Minibus: Quick routes</li>
                <li>• 🚍 Electric: Eco-friendly</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="hero-button px-8 py-3 flex items-center gap-2">
              <Play className="w-4 h-4" />
              Play Game
            </button>
            <button className="cta-button px-8 py-3 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button className="outline-button px-8 py-3 flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
