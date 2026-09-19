import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export function Breadcrumb({
  items,
  showHome = true,
  className,
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-xs text-text-secondary", className)}>
      <ol className="flex items-center gap-1.5 flex-wrap">
        {showHome && (
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center hover:text-navy transition-colors"
              aria-label="Home"
            >
              <Home className="h-3.5 w-3.5" />
            </Link>
          </li>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              {(showHome || index > 0) && (
                <ChevronRight className="h-3 w-3 text-navy-300 shrink-0" aria-hidden="true" />
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn("font-bold", isLast ? "text-navy-dark" : "text-text-secondary")}
                >
                  {item.icon && <span className="mr-1 inline-block">{item.icon}</span>}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-navy transition-colors flex items-center gap-1 font-medium"
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
