import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  dark?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  action,
  dark = false,
  className,
  ...props
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        isCenter ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end md:justify-between gap-4",
        className
      )}
      {...props}
    >
      <div className={cn(isCenter ? "mx-auto" : "max-w-2xl")}>
        {eyebrow && (
          <div className="mb-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest",
                dark
                  ? "bg-gold/15 text-gold-light border border-gold/30"
                  : "bg-gold/10 text-gold-dark border border-gold/25"
              )}
            >
              {eyebrow}
            </span>
          </div>
        )}

        <h2
          className={cn(
            "text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-sans",
            dark ? "text-white" : "text-navy-dark"
          )}
        >
          {title}{" "}
          {highlight && (
            <span className="font-serif italic font-semibold text-gold">
              {highlight}
            </span>
          )}
        </h2>

        {description && (
          <p
            className={cn(
              "mt-3 text-sm sm:text-base leading-relaxed",
              dark ? "text-navy-200" : "text-navy-600"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {action && !isCenter && (
        <div className="shrink-0">{action}</div>
      )}
      {action && isCenter && (
        <div className="mt-6 flex justify-center">{action}</div>
      )}
    </div>
  );
}
