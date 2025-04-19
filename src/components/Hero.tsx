
import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Heart, PawPrint } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-cat-dark mb-4 leading-tight">
            Discover the Wonderful World of <span className="text-cat-feline">Cats</span>
          </h1>
          <p className="text-gray-600 mb-8 md:pr-12 text-lg">
            Explore beautiful cat photos, learn about different breeds, and fall in love with our feline friends.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              to="/breeds"
              className="px-6 py-3 bg-cat-feline text-white rounded-lg shadow-md hover:shadow-lg hover:bg-cat-secondary transition-all flex items-center gap-2"
            >
              <PawPrint size={20} />
              Explore Breeds
            </Link>
            
            <Link
              to="/"
              className="px-6 py-3 bg-white text-cat-feline border border-cat-feline rounded-lg hover:bg-cat-light transition-all flex items-center gap-2"
            >
              <Heart size={20} />
              Random Cats
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-12 md:mt-0 animate-float">
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-cat-light rounded-full p-4">
              <Cat size={32} className="text-cat-feline" />
            </div>
            <img
              src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
              alt="Cat hero"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-cat-light rounded-full p-4">
              <PawPrint size={32} className="text-cat-feline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
