
import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Heart, PawPrint } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight bg-gradient-to-r from-white via-white/90 to-cat-neon bg-clip-text text-transparent">
            Discover the Wonderful World of <span className="text-cat-neon neon-text">Cats</span>
          </h1>
          <p className="text-muted-foreground mb-8 md:pr-12 text-lg leading-relaxed">
            Explore beautiful cat photos, learn about different breeds, and fall in love with our feline friends.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/breeds"
              className="isomorphic-card px-6 py-3 text-cat-neon hover:text-white flex items-center gap-2 animate-slide-in group"
              style={{ animationDelay: '0.2s' }}
            >
              <PawPrint className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Explore Breeds</span>
            </Link>
            
            <Link
              to="/breeds"
              className="isomorphic-card px-6 py-3 text-white/80 hover:text-cat-neon flex items-center gap-2 animate-slide-in group"
              style={{ animationDelay: '0.4s' }}
            >
              <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Discover Cats</span>
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-float">
          <div className="relative">
            <div className="absolute -top-6 -left-6 glass-panel p-4 animate-pulse z-10">
              <Cat size={32} className="text-cat-neon" />
            </div>
            <div className="isomorphic-card p-2">
              <img
                src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
                alt="Cat hero"
                className="rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-panel p-4 animate-pulse" style={{ animationDelay: '1s' }}>
              <PawPrint size={32} className="text-cat-neon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
