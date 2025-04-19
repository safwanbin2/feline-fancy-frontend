
import React from 'react';

interface LoadingGridProps {
  count?: number;
}

const LoadingGrid: React.FC<LoadingGridProps> = ({ count = 8 }) => {
  return (
    <div className="grid-container">
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index} 
          className="neo-glass animate-pulse overflow-hidden"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="w-full h-64 bg-neon-green/5 overflow-hidden relative">
            {/* Animated scanning line */}
            <div 
              className="absolute h-px w-full bg-neon-green/50 top-0 animate-scan-line"
              style={{ animationDelay: `${index * 0.2}s` }}
            ></div>
          </div>
          <div className="p-4">
            <div className="h-5 bg-neon-green/10 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-neon-green/5 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingGrid;
