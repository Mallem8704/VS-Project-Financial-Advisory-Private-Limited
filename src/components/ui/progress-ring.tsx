import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressRingProps {
  progress: number; // 0 to 100
  size?: "sm" | "md" | "lg" | "xl";
  strokeWidth?: number;
  variant?: "gold" | "navy" | "success" | "warning";
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function ProgressRing({
  progress,
  size = "md",
  strokeWidth,
  variant = "gold",
  showLabel = true,
  label,
  className,
}: ProgressRingProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  const sizeConfig = {
    sm: { dimension: 48, defaultStroke: 4, textSize: "text-[11px]" },
    md: { dimension: 72, defaultStroke: 6, textSize: "text-sm" },
    lg: { dimension: 104, defaultStroke: 8, textSize: "text-lg" },
    xl: { dimension: 140, defaultStroke: 10, textSize: "text-2xl" },
  }[size];

  const stroke = strokeWidth || sizeConfig.defaultStroke;
  const radius = (sizeConfig.dimension - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;

  const colorConfig = {
    gold: "stroke-gold text-gold-dark",
    navy: "stroke-navy text-navy-dark",
    success: "stroke-success text-success-700",
    warning: "stroke-warning text-warning-700",
  }[variant];

  return (
    <div className={cn("relative inline-flex items-center justify-center select-none", className)}>
      <svg
        width={sizeConfig.dimension}
        height={sizeConfig.dimension}
        className="transform -rotate-90"
      >
        {/* Track circle */}
        <circle
          cx={sizeConfig.dimension / 2}
          cy={sizeConfig.dimension / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          className="text-navy-100"
        />
        {/* Progress stroke */}
        <circle
          cx={sizeConfig.dimension / 2}
          cy={sizeConfig.dimension / 2}
          r={radius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          className={cn("transition-all duration-500 ease-out", colorConfig)}
        />
      </svg>

      {showLabel && (
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className={cn("font-extrabold font-sans leading-none", sizeConfig.textSize)}>
            {label || `${Math.round(clampedProgress)}%`}
          </span>
        </div>
      )}
    </div>
  );
}
