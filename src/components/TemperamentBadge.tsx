
import React from 'react';

interface TemperamentBadgeProps {
  trait: string;
}

const TemperamentBadge: React.FC<TemperamentBadgeProps> = ({ trait }) => {
  return (
    <span className="inline-block bg-cat-light text-cat-secondary px-3 py-1 rounded-full text-sm">
      {trait}
    </span>
  );
};

export default TemperamentBadge;
