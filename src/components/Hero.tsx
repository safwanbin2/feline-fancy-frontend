
import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, PawPrint, Hexagon, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 cyber-grid">
      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-neon-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1.5 h-1.5 bg-neon-green/40 rounded-full animate-float"
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        ></div>
      ))}
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full neo-glass border border-neon-green/20 text-neon-green text-sm animate-pulse-glow">
              <Hexagon size={14} className="mr-2" />
              <span>Next Generation Feline Explorer</span>
            </div>
            
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-green to-white text-shadow-glow">
              Discover the <span className="neo-glow">Cyber</span> World of Cats
            </h1>
            
            <p className="text-muted-foreground mb-8 md:pr-12 text-lg leading-relaxed text-white/70">
              Explore our futuristic platform featuring stunning cat visuals, detailed breed information, and interactive experiences in an immersive cyber environment.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/breeds"
                className="neo-button flex items-center gap-2 animate-slide-in font-orbitron group"
                style={{ animationDelay: '0.2s' }}
              >
                <PawPrint className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Explore Breeds</span>
              </Link>
              
              <Link
                to="/cat/random"
                className="neo-button flex items-center gap-2 animate-slide-in font-orbitron group"
                style={{ animationDelay: '0.4s' }}
              >
                <ExternalLink className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Random Cat</span>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-float">
            <div className="relative">
              <div className="absolute -top-6 -left-6 neo-glass p-4 animate-pulse-glow z-10">
                <Cat size={32} className="text-neon-green" />
              </div>
              
              <div className="neo-card p-2 animate-rotate-3d max-w-lg mx-auto">
                <img
                  src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                  alt="Cat hero"
                  className="rounded-lg w-full h-auto"
                />
                
                {/* HUD-style overlay elements */}
                <div className="absolute top-4 right-4 text-xs font-orbitron text-neon-green border border-neon-green/30 px-2 py-1 rounded-sm bg-black/30">
                  ID:XR-7849
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm border border-neon-green/30 p-2 rounded-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-orbitron text-neon-green">Species: Felis Catus</div>
                    <div className="text-xs text-white/70">Status: Active</div>
                  </div>
                </div>
                
                {/* Scan lines */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-green/5 to-transparent opacity-30"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 neo-glass p-4 animate-pulse-glow" style={{ animationDelay: '1s' }}>
                <PawPrint size={32} className="text-neon-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
