import React from "react";
import { cn } from "@/lib/utils";

export interface PremiumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "navy";
  goldAccent?: "top" | "border" | "glow" | "none";
  badge?: React.ReactNode;
}

export function PremiumCard({
  variant = "light",
  goldAccent = "top",
  badge,
  className,
  children,
  ...props
}: PremiumCardProps) {
  const isNavy = variant === "navy";

  const accentStyles = {
    top: "before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-gold-dark before:via-gold before:to-gold-light",
    border: "border-gold/40 hover:border-gold/80 shadow-gold-glow",
    glow: "gold-border-glow border-gold/30",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden p-6 sm:p-8 transition-all duration-200 interactive-hover",
        isNavy
          ? "bg-navy-dark text-white border border-navy-700 shadow-institutional-lg"
          : "bg-surface text-text-primary border border-border shadow-institutional",
        accentStyles[goldAccent],
        className
      )}
      {...props}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          {badge}
        </div>
      )}
      {children}
    </div>
  );
}
