import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  unit?: string;
  trend?: {
    value: string;
    direction: "up" | "down" | "neutral";
    label?: string;
  };
  icon?: React.ReactNode;
  variant?: "light" | "navy";
  progress?: number; // 0 to 100
}

export function MetricCard({
  label,
  value,
  unit,
  trend,
  icon,
  variant = "light",
  progress,
  className,
  ...props
}: MetricCardProps) {
  const isNavy = variant === "navy";

  return (
    <div
      className={cn(
        "rounded-xl border p-5 sm:p-6 transition-all duration-200 interactive-hover shadow-subtle",
        isNavy
          ? "bg-navy-dark border-navy-700 text-white"
          : "bg-surface border-border text-text-primary",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={cn(
            "text-xs font-bold uppercase tracking-wider",
            isNavy ? "text-navy-300" : "text-text-secondary"
          )}
        >
          {label}
        </span>
        {icon && (
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg shrink-0",
              isNavy ? "bg-navy-800 text-gold border border-gold/20" : "bg-warm-100 text-navy border border-border"
            )}
          >
            {icon}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
          {value}
        </span>
        {unit && (
          <span
            className={cn(
              "text-xs sm:text-sm font-semibold",
              isNavy ? "text-navy-300" : "text-text-secondary"
            )}
          >
            {unit}
          </span>
        )}
      </div>

      {/* Progress Bar (if provided) */}
      {typeof progress === "number" && (
        <div className="mt-3 w-full bg-navy-100/50 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-gold h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      )}

      {/* Trend Info */}
      {trend && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          <span
            className={cn(
              "inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 font-bold text-[10px]",
              trend.direction === "up" && "bg-success-50 text-success-700 border border-success-100",
              trend.direction === "down" && "bg-error-50 text-error-700 border border-error-100",
              trend.direction === "neutral" && "bg-surface-muted text-text-secondary border border-border"
            )}
          >
            {trend.direction === "up" && <TrendingUp className="h-3 w-3" />}
            {trend.direction === "down" && <TrendingDown className="h-3 w-3" />}
            {trend.direction === "neutral" && <Minus className="h-3 w-3" />}
            <span>{trend.value}</span>
          </span>
          {trend.label && (
            <span
              className={cn(
                "text-[11px]",
                isNavy ? "text-navy-400" : "text-text-secondary"
              )}
            >
              {trend.label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
