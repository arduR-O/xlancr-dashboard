import React from 'react';

interface RadialProgressBarProps {
    progress: number; // Progress in percentage
    height: number; // Height of the progress bar
    width: number; // Width of the progress bar
  }
  
  const RadialProgressBar: React.FC<RadialProgressBarProps> = ({ progress, height, width }) => {
    const radius = Math.min(height, width) / 2 - Math.min(height, width) * 0.1; // 10% padding
    const strokeWidth = Math.min(height, width) * 0.15; // 10% of the min(height, width)
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <svg height={height} width={width} className="radial-progress-bar" style={{ transform: 'rotate(-90deg)' }}>
      <circle
        stroke="url(#backgroundGradient)"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={width / 2}
        cy={height / 2}
      />
      <circle
        stroke="url(#progressGradient)"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeLinecap="round"
        style={{ strokeDashoffset }}
        r={radius}
        cx={width / 2}
        cy={height / 2}
      />
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#085129', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#002611', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1F1F1F', stopOpacity: 1 }} />
          <stop offset="49.5%" style={{ stopColor: '#3C3C3C', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#242424', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RadialProgressBar;