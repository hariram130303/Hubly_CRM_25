import React from "react";

export default function CircleProgress({ value = 80, size = 160 }) {
  const stroke = 14; 
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (value / 100) * circumference;

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 0 5px rgba(0,0,0,0.06)"
      }}
    >
      <svg width={size} height={size}>
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f0f5ff"
          strokeWidth={stroke}
          fill="none"
        />

        {/* Green progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#00d447"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />

        {/* Percentage Text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="28px"
          fontWeight="600"
          fill="#001133"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
}
