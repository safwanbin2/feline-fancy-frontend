
import React from 'react';

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
}

const StatBar: React.FC<StatBarProps> = ({ 
  label, 
  value, 
  maxValue = 5 
}) => {
  // Calculate percentage
  const percentage = (value / maxValue) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-white/80">{label}</span>
        <span className="text-sm text-neon-green font-medium">{value}/{maxValue}</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-neon-green/70 to-neon-green rounded-full animate-pulse-glow"
          style={{ width: `${percentage}%` }}
        ></div>
        
        {/* Animated highlights */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-shimmer rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StatBar;
