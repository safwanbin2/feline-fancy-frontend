
import React from 'react';

interface TemperamentBadgeProps {
  trait: string;
}

const TemperamentBadge: React.FC<TemperamentBadgeProps> = ({ trait }) => {
  return (
    <span className="inline-block neo-glass bg-neon-green/10 text-neon-green px-3 py-1 rounded-full text-sm border border-neon-green/30 hover:border-neon-green/60 hover:bg-neon-green/20 transition-all duration-300 animate-fade-in">
      {trait}
    </span>
  );
};

export default TemperamentBadge;
