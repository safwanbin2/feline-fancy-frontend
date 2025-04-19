
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cat, Search } from 'lucide-react';
import { Command, CommandInput } from '@/components/ui/command';

const NavBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/breeds?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-card/95 backdrop-blur-md shadow-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 neon-text">
          <Cat size={28} className="animate-pulse" />
          <span className="font-bold text-xl">Feline Fancy</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-cat-neon transition-colors">
            Home
          </Link>
          <Link to="/breeds" className="text-foreground/80 hover:text-cat-neon transition-colors">
            Breeds
          </Link>
          <form onSubmit={handleSearch} className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
            <input
              type="text"
              placeholder="Search breeds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-muted border border-border focus:outline-none focus:neon-border focus:border-cat-neon text-sm w-[180px] text-foreground"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
