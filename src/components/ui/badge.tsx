import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "navy" | "gold" | "success" | "warning" | "danger" | "info" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "gold",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    gold: "bg-gold/15 text-gold-dark border-gold/30",
    navy: "bg-navy-50 text-navy-800 border-navy-200",
    success: "bg-success-50 text-success-700 border-success-100",
    warning: "bg-warning-50 text-warning-700 border-warning-100",
    danger: "bg-error-50 text-error-700 border-error-100",
    info: "bg-info-50 text-info-700 border-info-100",
    neutral: "bg-surface-muted text-text-secondary border-border",
  };

  const dotColorStyles = {
    gold: "bg-gold",
    navy: "bg-navy",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-error",
    info: "bg-info",
    neutral: "bg-text-secondary",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-semibold uppercase tracking-wider select-none",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotColorStyles[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
