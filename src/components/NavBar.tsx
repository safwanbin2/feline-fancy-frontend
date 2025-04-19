
import React from 'react';
import { Link } from 'react-router-dom';
import { Cat } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 glass-panel shadow-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Cat size={28} className="text-cat-neon animate-pulse" />
          <span className="font-bold text-xl bg-gradient-to-r from-white to-cat-neon bg-clip-text text-transparent">
            Feline Fancy
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white/80 hover:text-cat-neon transition-colors">
            Home
          </Link>
          <Link to="/breeds" className="text-white/80 hover:text-cat-neon transition-colors">
            Breeds
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
