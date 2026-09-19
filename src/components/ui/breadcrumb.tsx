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
  theme?: "light" | "dark";
}

export function Breadcrumb({
  items,
  showHome = true,
  className,
  theme = "light",
}: BreadcrumbProps) {
  const isDark = theme === "dark";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex items-center text-xs",
        isDark ? "text-white/70" : "text-text-secondary",
        className
      )}
    >
      <ol className="flex items-center gap-1.5 flex-wrap">
        {showHome && (
          <li className="flex items-center">
            <Link
              href="/"
              className={cn(
                "flex items-center transition-colors",
                isDark ? "text-gold/80 hover:text-gold" : "text-navy-500 hover:text-navy"
              )}
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
                <ChevronRight
                  className={cn(
                    "h-3 w-3 shrink-0",
                    isDark ? "text-white/40" : "text-navy-300"
                  )}
                  aria-hidden="true"
                />
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(
                    "font-bold",
                    isDark
                      ? isLast ? "text-gold" : "text-white/90"
                      : isLast ? "text-navy-dark" : "text-text-secondary"
                  )}
                >
                  {item.icon && <span className="mr-1 inline-block">{item.icon}</span>}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors flex items-center gap-1 font-medium",
                    isDark ? "text-white/80 hover:text-gold" : "text-navy-600 hover:text-navy"
                  )}
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
