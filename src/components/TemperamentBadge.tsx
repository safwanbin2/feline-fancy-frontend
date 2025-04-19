
import React from 'react';

interface TemperamentBadgeProps {
  trait: string;
}

const TemperamentBadge: React.FC<TemperamentBadgeProps> = ({ trait }) => {
  return (
    <span className="inline-block bg-muted text-cat-neon px-3 py-1 rounded-full text-sm border border-cat-neon/30 shadow-sm">
      {trait}
    </span>
  );
};

export default TemperamentBadge;
