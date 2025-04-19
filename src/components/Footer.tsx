
import React from 'react';
import { Cat, Github, Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="neo-glass border-t border-neon-green/20 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative mr-2">
              <Cat size={24} className="text-neon-green animate-pulse-glow" />
              <div className="absolute h-8 w-8 -inset-2 rounded-full border border-neon-green/30 animate-ping opacity-20"></div>
            </div>
            <span className="font-orbitron text-lg text-neon-green">CyberFeline</span>
          </div>
          
          <div className="text-white/60 text-sm flex items-center gap-1">
            Crafted with <Heart size={14} className="text-neon-green fill-neon-green/30 animate-pulse" /> using <a href="https://thecatapi.com" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:underline">The Cat API</a>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-neon-green transition-colors group">
              <Github size={20} className="group-hover:animate-pulse" />
            </a>
            <a href="https://thecatapi.com/docs" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-neon-green transition-colors group">
              <Code size={20} className="group-hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
