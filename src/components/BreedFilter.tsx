
import React from 'react';
import { Breed } from '@/types/cat';
import { X } from 'lucide-react';

interface BreedFilterProps {
  breeds: Breed[];
  selectedBreed: string | null;
  onSelectBreed: (breedId: string | null) => void;
}

const BreedFilter: React.FC<BreedFilterProps> = ({ 
  breeds, 
  selectedBreed, 
  onSelectBreed 
}) => {
  return (
    <div className="py-4">
      <h2 className="text-lg font-medium mb-3">Filter by Breed</h2>
      
      <div className="flex flex-wrap gap-2 animate-slide-in">
        {selectedBreed ? (
          <button
            onClick={() => onSelectBreed(null)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-cat-feline text-white"
          >
            {breeds.find(breed => breed.id === selectedBreed)?.name}
            <X size={16} />
          </button>
        ) : (
          breeds.slice(0, 10).map((breed) => (
            <button
              key={breed.id}
              onClick={() => onSelectBreed(breed.id)}
              className="px-3 py-1.5 rounded-full bg-gray-100 hover:bg-cat-light hover:text-cat-secondary transition-colors"
            >
              {breed.name}
            </button>
          ))
        )}
        
        {!selectedBreed && breeds.length > 10 && (
          <select
            className="px-3 py-1.5 rounded-full bg-gray-100 focus:outline-none"
            onChange={(e) => onSelectBreed(e.target.value)}
            value=""
          >
            <option value="" disabled>
              More breeds...
            </option>
            {breeds.slice(10).map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default BreedFilter;
