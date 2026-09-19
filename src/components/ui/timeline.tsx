import React from "react";
import { cn } from "@/lib/utils";
import { Check, Clock, AlertCircle } from "lucide-react";

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date?: string;
  status: "completed" | "current" | "upcoming" | "error";
  badge?: string;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative pl-6 space-y-8", className)}>
      {/* Vertical line connecting nodes */}
      <div className="absolute left-[11px] top-2.5 bottom-2.5 w-0.5 bg-border" />

      {items.map((item, index) => {
        const isCompleted = item.status === "completed";
        const isCurrent = item.status === "current";
        const isError = item.status === "error";

        return (
          <div key={item.id} className="relative flex items-start gap-4">
            {/* Node Icon */}
            <div
              className={cn(
                "absolute -left-[23px] flex h-6 w-6 items-center justify-center rounded-full border-2 text-white shadow-xs transition-all duration-200",
                isCompleted && "bg-success border-success",
                isCurrent && "bg-navy border-gold ring-4 ring-gold/20",
                isError && "bg-error border-error",
                item.status === "upcoming" && "bg-surface border-border text-navy-300"
              )}
            >
              {isCompleted && <Check className="h-3 w-3 stroke-[3]" />}
              {isCurrent && <Clock className="h-3 w-3 animate-pulse" />}
              {isError && <AlertCircle className="h-3 w-3" />}
              {item.status === "upcoming" && <span className="h-1.5 w-1.5 rounded-full bg-navy-200" />}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <h4
                    className={cn(
                      "text-xs sm:text-sm font-bold font-sans tracking-tight",
                      isCurrent ? "text-navy-dark" : isCompleted ? "text-navy-900" : "text-text-secondary"
                    )}
                  >
                    {item.title}
                  </h4>
                  {item.badge && (
                    <span className="rounded bg-gold/15 px-1.5 py-0.2 text-[10px] font-bold text-gold-dark border border-gold/30">
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.date && (
                  <span className="text-[11px] text-text-secondary font-medium shrink-0">
                    {item.date}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="text-xs text-text-secondary leading-relaxed max-w-xl">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
