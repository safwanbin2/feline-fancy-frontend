
import React from 'react';
import { Breed } from '@/types/cat';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Database } from 'lucide-react';

interface BreedCardProps {
  breed: Breed;
  index?: number;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed, index = 0 }) => {
  const animationDelay = `${index * 0.05}s`;
  
  return (
    <Link 
      to={`/breeds/${breed.id}`} 
      className="neo-glass-hover animate-fade-in flex flex-col group overflow-hidden transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay }}
    >
      {breed.image && (
        <div className="overflow-hidden relative">
          <img 
            src={breed.image.url} 
            alt={breed.name} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-green/5 to-transparent opacity-30 pointer-events-none"></div>
          
          {/* HUD display for cat id */}
          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm border border-neon-green/30 px-2 py-1 rounded text-xs font-orbitron text-neon-green">
            <Code size={10} className="inline mr-1" /> {breed.id}
          </div>
        </div>
      )}
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-orbitron text-lg text-white">{breed.name}</h3>
          <div className="bg-neon-green/10 p-1 rounded">
            <ChevronRight size={16} className="text-neon-green" />
          </div>
        </div>
        
        <div className="flex items-center mb-2">
          <Database size={12} className="text-neon-green mr-1" />
          <p className="text-white/60 text-sm">{breed.origin}</p>
        </div>
        
        <p className="text-white/80 text-sm line-clamp-2 mb-4 flex-grow">{breed.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {breed.temperament.split(', ').slice(0, 3).map((trait) => (
            <span 
              key={trait} 
              className="text-xs bg-neon-green/10 text-neon-green rounded-full px-2 py-1 border border-neon-green/20"
            >
              {trait}
            </span>
          ))}
          {breed.temperament.split(', ').length > 3 && (
            <span className="text-xs bg-muted text-white/60 rounded-full px-2 py-1">
              +{breed.temperament.split(', ').length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BreedCard;
