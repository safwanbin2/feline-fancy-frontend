
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
      className="animate-fade-in flex flex-col group bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay }}
    >
      {breed.image && (
        <img 
          src={breed.image.url} 
          alt={breed.name} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      )}
      
      <div className="p-4">
        <h3 className="font-medium text-lg text-cat-dark">{breed.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{breed.origin}</p>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{breed.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {breed.temperament.split(', ').slice(0, 3).map((trait) => (
            <span 
              key={trait} 
              className="text-xs bg-cat-light text-cat-secondary rounded-full px-2 py-1"
            >
              {trait}
            </span>
          ))}
          {breed.temperament.split(', ').length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-1">
              +{breed.temperament.split(', ').length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default BreedCard;
