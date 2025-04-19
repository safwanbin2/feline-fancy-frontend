
import React from 'react';
import { Cat } from '@/types/cat';
import { Link } from 'react-router-dom';
import { Heart, Hexagon, Info } from 'lucide-react';

interface CatCardProps {
  cat: Cat;
  index?: number;
}

const CatCard: React.FC<CatCardProps> = ({ cat, index = 0 }) => {
  const animationDelay = `${index * 0.05}s`;

  return (
    <div 
      className="neo-glass-hover animate-fade-in group relative overflow-hidden rounded-lg" 
      style={{ animationDelay }}
    >
      <Link to={`/cat/${cat.id}`} className="block relative">
        <div className="overflow-hidden">
          <img
            src={cat.url}
            alt={cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Cyber Cat'}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent opacity-30 pointer-events-none"></div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-20 cyber-dots pointer-events-none"></div>
        </div>
        
        {/* Top HUD elements */}
        <div className="absolute top-3 left-3 flex items-center space-x-2 z-10">
          <div className="bg-black/50 backdrop-blur-sm border border-neon-green/30 p-1 rounded flex items-center">
            <Hexagon size={14} className="text-neon-green mr-1" />
            <span className="text-xs font-orbitron text-neon-green">
              ID:{cat.id.substring(0, 6)}
            </span>
          </div>
        </div>
        
        <button
          className="absolute top-3 right-3 neo-glass p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-neon-green/50 transform group-hover:translate-y-0 translate-y-2 z-10"
          aria-label="Like"
        >
          <Heart size={18} className="text-neon-green" />
        </button>
        
        {cat.breeds && cat.breeds.length > 0 ? (
          <div className="absolute bottom-0 left-0 right-0 neo-glass backdrop-blur-lg p-4 border-t border-neon-green/20">
            <h3 className="text-white font-orbitron font-medium flex items-center">
              <Info size={14} className="text-neon-green mr-2" />
              {cat.breeds[0].name}
            </h3>
            <p className="text-white/70 text-sm mt-1">{cat.breeds[0].origin}</p>
          </div>
        ) : (
          <div className="absolute bottom-0 left-0 right-0 neo-glass backdrop-blur-lg p-4 border-t border-neon-green/20">
            <h3 className="text-white font-orbitron font-medium flex items-center">
              <Info size={14} className="text-neon-green mr-2" />
              Cyber Cat
            </h3>
            <p className="text-white/70 text-sm mt-1">Unknown Origin</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CatCard;
