import React from "react";
import { cn } from "@/lib/utils";
import { Container, ContainerProps } from "./container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "warm" | "white" | "muted" | "navy-dark" | "subtle-grid";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  contained?: boolean;
  containerSize?: ContainerProps["size"];
}

export function Section({
  className,
  variant = "warm",
  padding = "lg",
  contained = true,
  containerSize = "lg",
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    warm: "bg-background text-text-primary",
    white: "bg-surface text-text-primary border-y border-border-subtle",
    muted: "bg-surface-muted text-text-primary",
    "navy-dark": "bg-navy-dark text-white",
    "subtle-grid": "bg-background bg-subtle-grid text-text-primary",
  };

  const paddingStyles = {
    none: "py-0",
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-24",
    xl: "py-20 sm:py-32",
  };

  const content = contained ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <section
      className={cn(variantStyles[variant], paddingStyles[padding], className)}
      {...props}
    >
      {content}
    </section>
  );
}
