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
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  eyebrow,
  badge,
  actions,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "pb-6 mb-6 border-b border-border-subtle space-y-4",
        className
      )}
      {...props}
    >
      {breadcrumbs && <Breadcrumb items={breadcrumbs} />}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          {eyebrow && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
              {eyebrow}
            </span>
          )}
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-dark font-sans">
              {title}
            </h1>
            {badge && <div>{badge}</div>}
          </div>
          {description && (
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {actions && <div className="flex items-center gap-3 shrink-0">{actions}</div>}
      </div>
    </div>
  );
}
