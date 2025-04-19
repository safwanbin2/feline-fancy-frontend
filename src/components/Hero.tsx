
import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Heart, PawPrint } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Discover the Wonderful World of <span className="text-cat-neon neon-text">Cats</span>
          </h1>
          <p className="text-muted-foreground mb-8 md:pr-12 text-lg">
            Explore beautiful cat photos, learn about different breeds, and fall in love with our feline friends.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/breeds"
              className="px-6 py-3 bg-cat-neon text-background rounded-lg shadow-[0_0_15px_rgba(198,123,255,0.3)] hover:shadow-[0_0_20px_rgba(198,123,255,0.5)] hover:bg-cat-neon/90 transition-all flex items-center gap-2 animate-slide-in"
              style={{ animationDelay: '0.2s' }}
            >
              <PawPrint size={20} />
              Explore Breeds
            </Link>
            
            <Link
              to="/"
              className="px-6 py-3 bg-muted text-cat-neon border border-cat-neon rounded-lg hover:bg-cat-neon/10 transition-all flex items-center gap-2 animate-slide-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Heart size={20} />
              Random Cats
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 animate-float">
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-cat-neon/20 rounded-full p-4 animate-pulse">
              <Cat size={32} className="text-cat-neon" />
            </div>
            <img
              src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
              alt="Cat hero"
              className="rounded-lg shadow-xl border border-border/50"
            />
            <div className="absolute -bottom-6 -right-6 bg-cat-neon/20 rounded-full p-4 animate-pulse" style={{ animationDelay: '1s' }}>
              <PawPrint size={32} className="text-cat-neon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
