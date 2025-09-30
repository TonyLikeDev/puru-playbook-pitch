import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Play, Download, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FruitGame() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const [playLocalDemo, setPlayLocalDemo] = useState(false);
  const [score, setScore] = useState(0);
  const [fruits, setFruits] = useState<{ id: number; leftPct: number; kind: string; duration: number }[]>([]);
  const fruitKinds = useMemo(() => ["🍎", "🍊", "🍇", "🍓", "🍍", "🍉"], []);
  const arenaRef = useRef<HTMLDivElement | null>(null);
  const nextIdRef = useRef(1);

  useEffect(() => {
    // If the iframe doesn't load quickly, fall back to local demo.
    const timer = setTimeout(() => {
      if (!iframeLoaded) {
        setEmbedFailed(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [iframeLoaded]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={() => navigate("/marketing")}
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
            <img src="/FruitGame.png" alt="Fruit Game" className="h-32 w-32 mx-auto rounded-lg shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">Fruit Game</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Colorful fruit matching adventure that combines strategy with fun. 
              Match three or more fruits to clear them and create amazing combos.
            </p>
          </div>

          {/* Game Area */}
          <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 lg:p-8 mb-8">
            <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden relative">
              {!iframeLoaded && !embedFailed && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-3"></div>
                    <p className="text-sm text-muted-foreground">Loading game…</p>
                  </div>
                </div>
              )}
              {!embedFailed && !playLocalDemo && (
                <iframe
                  title="Merge Fruit by Purus Games"
                  src="https://mergefruit.net/"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; clipboard-read; clipboard-write"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-forms"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIframeLoaded(true)}
                />
              )}
              {(embedFailed || playLocalDemo) && (
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="w-full max-w-2xl mx-auto">
                    <div className="mb-4 space-y-3">
                      <p className="text-sm text-muted-foreground">
                        The source site refused to embed. Here's a lightweight local demo so you can play right away.
                      </p>
                      <div className="flex gap-2 justify-center">
                        <a
                          className="cta-button inline-flex px-5 py-2"
                          href="https://mergefruit.net/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open Merge Fruit (New Tab)
                        </a>
                        <button
                          className="hero-button inline-flex px-5 py-2"
                          onClick={() => setPlayLocalDemo(true)}
                        >
                          Play Local Demo
                        </button>
                      </div>
                    </div>

                    {playLocalDemo && (
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-sm text-muted-foreground">Click anywhere in the box to drop a fruit</div>
                          <div className="text-sm font-semibold">Score: {score}</div>
                        </div>
                        <div
                          ref={arenaRef}
                          className="relative mx-auto bg-white rounded-lg border border-border overflow-hidden"
                          style={{ height: 360 }}
                          onClick={(e) => {
                            if (!arenaRef.current) return;
                            const rect = arenaRef.current.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const leftPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
                            const id = nextIdRef.current++;
                            const kind = fruitKinds[Math.floor(Math.random() * fruitKinds.length)];
                            const duration = 2.5 + Math.random() * 1.5;
                            setFruits((prev) => [...prev, { id, leftPct, kind, duration }]);
                            setScore((s) => s + 10);
                          }}
                        >
                          {fruits.map((f) => (
                            <div
                              key={f.id}
                              className="absolute top-0 text-3xl select-none"
                              style={{ left: `${f.leftPct}%`, transform: "translateX(-50%)" as const, animation: `fall ${f.duration}s linear forwards` }}
                              onAnimationEnd={() => setFruits((prev) => prev.filter((p) => p.id !== f.id))}
                            >
                              {f.kind}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="text-xs text-muted-foreground mt-3 text-center">
              Source: <a href="https://mergefruit.net/" className="underline" target="_blank" rel="noreferrer">mergefruit.net</a>
            </div>
          </div>

          {/* Game Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-2">Game Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Vibrant fruit graphics</li>
                <li>• Special fruit power-ups</li>
                <li>• Progressive difficulty</li>
                <li>• Achievement system</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-2">How to Play</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Swap adjacent fruits</li>
                <li>• Create matches of 3+</li>
                <li>• Clear all fruits to win</li>
                <li>• Use special fruits wisely</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-2">Special Fruits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 🍎 Apple: Basic fruit</li>
                <li>• 🍊 Orange: Line clearer</li>
                <li>• 🍇 Grape: Bomb effect</li>
                <li>• 🍓 Strawberry: Rainbow</li>
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
