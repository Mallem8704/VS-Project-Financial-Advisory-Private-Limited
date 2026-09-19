import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "navy" | "gold" | "outline" | "ghost" | "danger";
  size?: "xs" | "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "navy",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 ease-in-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none motion-reduce:transition-none";

    const variantStyles = {
      // Primary Navy
      navy: "bg-navy text-white hover:bg-navy-light shadow-sm active:scale-[0.99] border border-transparent",
      // Premium Gold (Dark Navy text for high WCAG contrast > 7:1)
      gold: "bg-gold text-navy-dark hover:bg-gold-light hover:shadow-gold-glow shadow-sm active:scale-[0.99] border border-gold-dark/20",
      // Outline
      outline: "border border-border-strong bg-white/60 text-navy-800 hover:bg-navy-50/80 hover:border-navy-400 active:scale-[0.99]",
      // Ghost
      ghost: "bg-transparent text-navy-700 hover:bg-navy-50 hover:text-navy-900 border border-transparent active:scale-[0.99]",
      // Danger
      danger: "bg-error text-white hover:bg-error-700 shadow-sm active:scale-[0.99] border border-transparent",
    };

    const sizeStyles = {
      xs: "px-2.5 py-1 text-[11px] gap-1.5 rounded-sm",
      sm: "px-3.5 py-1.5 text-xs gap-2 rounded-md",
      md: "px-4 py-2 text-xs sm:text-sm gap-2 rounded-lg",
      lg: "px-6 py-3 text-sm sm:text-base gap-2.5 rounded-xl font-bold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          isLoading && "cursor-wait",
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
