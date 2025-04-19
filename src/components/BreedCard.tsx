
import React from 'react';
import { Breed } from '@/types/cat';
import { Link } from 'react-router-dom';

interface BreedCardProps {
  breed: Breed;
  index?: number;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed, index = 0 }) => {
  const animationDelay = `${index * 0.05}s`;
  
  return (
    <Link 
      to={`/breeds/${breed.id}`} 
      className="animate-fade-in flex flex-col group bg-card rounded-lg border border-border overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_5px_15px_rgba(198,123,255,0.3)] hover:neon-border"
      style={{ animationDelay }}
    >
      {breed.image && (
        <div className="overflow-hidden">
          <img 
            src={breed.image.url} 
            alt={breed.name} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      
      <div className="p-4">
        <h3 className="font-medium text-lg text-foreground">{breed.name}</h3>
        <p className="text-muted-foreground text-sm mt-1">{breed.origin}</p>
        <p className="text-foreground/80 text-sm mt-2 line-clamp-2">{breed.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {breed.temperament.split(', ').slice(0, 3).map((trait) => (
            <span 
              key={trait} 
              className="text-xs bg-accent/20 text-cat-neon rounded-full px-2 py-1 border border-cat-neon/20"
            >
              {trait}
            </span>
          ))}
          {breed.temperament.split(', ').length > 3 && (
            <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-1">
              +{breed.temperament.split(', ').length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BreedCard;
