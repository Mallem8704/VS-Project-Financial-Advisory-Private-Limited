import React from "react";
import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
  theme?: "light" | "dark";
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  eyebrow,
  badge,
  actions,
  className,
  theme = "light",
  ...props
}: PageHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "pb-6 mb-6 border-b space-y-4",
        isDark ? "border-navy-700/80 text-white" : "border-border-subtle text-navy-dark",
        className
      )}
      {...props}
    >
      {breadcrumbs && <Breadcrumb items={breadcrumbs} theme={theme} />}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1.5">
          {eyebrow && (
            <span
              className={cn(
                "text-[11px] font-bold uppercase tracking-wider",
                isDark ? "text-gold" : "text-gold-dark"
              )}
            >
              {eyebrow}
            </span>
          )}
          <div className="flex items-center gap-3 flex-wrap">
            <h1
              className={cn(
                "text-2xl sm:text-4xl font-bold tracking-tight font-serif",
                isDark ? "text-white" : "text-navy-dark"
              )}
            >
              {title}
            </h1>
            {badge && <div>{badge}</div>}
          </div>
          {description && (
            <p
              className={cn(
                "text-xs sm:text-sm leading-relaxed max-w-3xl",
                isDark ? "text-navy-100" : "text-text-secondary"
              )}
            >
              {description}
            </p>
          )}
        </div>

        {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
      </div>
    </div>
  );
}
