
import React from 'react';
import { Cat } from '@/types/cat';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface CatCardProps {
  cat: Cat;
  index?: number;
}

const CatCard: React.FC<CatCardProps> = ({ cat, index = 0 }) => {
  const animationDelay = `${index * 0.05}s`;

  return (
    <div 
      className="isomorphic-card animate-fade-in" 
      style={{ animationDelay }}
    >
      <Link to={`/cat/${cat.id}`} className="block relative group">
        <div className="overflow-hidden rounded-lg">
          <img
            src={cat.url}
            alt={cat.breeds && cat.breeds.length > 0 ? cat.breeds[0].name : 'Cat image'}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <button
          className="absolute top-3 right-3 glass-panel p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:border-cat-neon/30 transform group-hover:translate-y-0 translate-y-2"
          aria-label="Like"
        >
          <Heart size={18} className="text-cat-neon" />
        </button>
        
        {cat.breeds && cat.breeds.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 glass-panel backdrop-blur-md p-4">
            <h3 className="text-white font-medium">{cat.breeds[0].name}</h3>
            <p className="text-white/80 text-sm truncate">{cat.breeds[0].origin}</p>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CatCard;
