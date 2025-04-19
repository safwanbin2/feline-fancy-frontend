
import React from 'react';
import { Cat, Heart, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Cat size={24} className="text-cat-neon mr-2 animate-pulse" />
            <span className="font-medium text-lg text-foreground">Feline Fancy</span>
          </div>
          
          <div className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> using <a href="https://thecatapi.com" target="_blank" rel="noopener noreferrer" className="text-cat-neon hover:underline">The Cat API</a>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cat-neon transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
