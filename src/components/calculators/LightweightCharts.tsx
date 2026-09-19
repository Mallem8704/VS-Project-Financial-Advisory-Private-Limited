"use client";

import React from "react";

interface DonutSlice {
  label: string;
  value: number;
  color: string;
}

interface LightweightDonutChartProps {
  data: DonutSlice[];
  size?: number;
  centerText?: string;
  centerSubtext?: string;
}

export function LightweightDonutChart({
  data,
  size = 180,
  centerText,
  centerSubtext,
}: LightweightDonutChartProps) {
  const total = data.reduce((sum, item) => sum + Math.max(0, item.value), 0);

  if (total <= 0) {
    return (
      <div className="flex h-36 items-center justify-center text-xs text-navy-400">
        No numeric data to display
      </div>
    );
  }

  const radius = 65;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;

  let cumulativeAngle = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full -rotate-90 transform"
        >
          {data.map((slice, idx) => {
            const fraction = Math.max(0, slice.value) / total;
            const strokeDasharray = `${fraction * circumference} ${circumference}`;
            const strokeDashoffset = -cumulativeAngle * circumference;
            cumulativeAngle += fraction;

            return (
              <circle
                key={idx}
                cx="80"
                cy="80"
                r={radius}
                fill="transparent"
                stroke={slice.color}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-500 hover:opacity-90"
              />
            );
          })}
        </svg>

        {(centerText || centerSubtext) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            {centerText && (
              <span className="text-sm sm:text-base font-bold text-navy-dark leading-none">
                {centerText}
              </span>
            )}
            {centerSubtext && (
              <span className="text-[10px] text-navy-500 font-semibold uppercase tracking-wider mt-1">
                {centerSubtext}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="space-y-1.5 text-xs text-navy-700">
        {data.map((slice, idx) => {
          const percent = Math.round((slice.value / total) * 100);
          return (
            <div key={idx} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full shrink-0"
                style={{ backgroundColor: slice.color }}
              />
              <span className="font-medium text-navy-800">{slice.label}:</span>
              <span className="font-bold text-navy-dark">
                {percent}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface LightweightBarProps {
  label: string;
  value: number;
  maxValue: number;
  displayValue: string;
  color?: string;
  sublabel?: string;
}

export function LightweightProgressBar({
  label,
  value,
  maxValue,
  displayValue,
  color = "bg-navy",
  sublabel,
}: LightweightBarProps) {
  const percent = maxValue > 0 ? Math.min(100, Math.max(0, (value / maxValue) * 100)) : 0;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-bold text-navy-dark">{label}</span>
        <span className="font-extrabold text-navy-900">{displayValue}</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-navy-100/60 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${percent}%` }}
        />
      </div>
      {sublabel && (
        <div className="text-[10px] text-navy-500 italic">{sublabel}</div>
      )}
    </div>
  );
}
