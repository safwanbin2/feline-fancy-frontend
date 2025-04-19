
import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Search } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-cat-feline">
          <Cat size={28} />
          <span className="font-bold text-xl">Feline Fancy</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-cat-feline transition-colors">
            Home
          </Link>
          <Link to="/breeds" className="text-gray-700 hover:text-cat-feline transition-colors">
            Breeds
          </Link>
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cat-feline/20 focus:border-cat-feline text-sm w-[180px]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
