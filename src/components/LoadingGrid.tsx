
import React from 'react';

interface LoadingGridProps {
  count?: number;
}

const LoadingGrid: React.FC<LoadingGridProps> = ({ count = 8 }) => {
  return (
    <div className="image-grid">
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="w-full h-64 bg-gray-200"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingGrid;
