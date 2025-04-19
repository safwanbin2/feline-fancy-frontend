
import React from 'react';

interface TemperamentBadgeProps {
  trait: string;
}

const TemperamentBadge: React.FC<TemperamentBadgeProps> = ({ trait }) => {
  return (
    <span className="inline-block bg-accent/20 text-cat-neon px-3 py-1 rounded-full text-sm border border-cat-neon/30 shadow-sm hover:border-cat-neon/60 hover:bg-accent/30 transition-all duration-300 animate-fade-in">
      {trait}
    </span>
  );
};

export default TemperamentBadge;
