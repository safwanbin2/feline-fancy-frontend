
import React from 'react';
import { Link } from 'react-router-dom';
import { Cat, Hexagon, PawPrint, LayoutGrid } from 'lucide-react';

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 neo-glass border-b border-neon-green/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Hexagon size={32} className="text-neon-green animate-pulse-glow" />
            <Cat size={16} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-background" />
          </div>
          <span className="font-orbitron font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-green to-white neo-glow">
            CyberFeline
          </span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white/80 hover:text-neon-green transition-colors group"
          >
            <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-neon-green/20 rounded-sm scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <PawPrint size={18} className="relative z-10 group-hover:animate-pulse" />
            </div>
            <span className="group-hover:text-shadow-glow transition-all duration-300">Home</span>
          </Link>
          
          <Link 
            to="/breeds" 
            className="flex items-center gap-2 text-white/80 hover:text-neon-green transition-colors group"
          >
            <div className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-neon-green/20 rounded-sm scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <LayoutGrid size={18} className="relative z-10 group-hover:animate-pulse" />
            </div>
            <span className="group-hover:text-shadow-glow transition-all duration-300">Breeds</span>
          </Link>
        </div>
      </div>

      {/* Animated scan line */}
      <div className="absolute inset-x-0 h-0.5 bg-neon-green/30 animate-scan-line pointer-events-none"></div>
    </nav>
  );
};

export default NavBar;
