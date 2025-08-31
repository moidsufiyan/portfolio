import React from "react";

interface ProgressRingProps {
  value: number; // 0-100
  size?: number; // px
  stroke?: number; // px
  className?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({ value, size = 56, stroke = 6, className }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className={className} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={`hsl(var(--muted-foreground) / 0.2)`}
        strokeWidth={stroke}
        fill="transparent"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={`hsl(var(--primary))`}
        strokeWidth={stroke}
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="web-fill-animation"
        style={{ 
          transition: "stroke-dashoffset 800ms ease",
          filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.4))'
        }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={12}
        fill="hsl(var(--foreground))"
      >
        {Math.round(value)}%
      </text>
    </svg>
  );
};

export default ProgressRing;
