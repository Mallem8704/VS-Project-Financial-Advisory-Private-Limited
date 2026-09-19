"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  variant?: "line" | "pills";
  className?: string;
}

export function Tabs({
  items,
  activeId,
  onChange,
  variant = "line",
  className,
}: TabsProps) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex items-center gap-1 overflow-x-auto no-scrollbar select-none",
        variant === "line" && "border-b border-border",
        variant === "pills" && "bg-surface-muted p-1 rounded-lg border border-border/60",
        className
      )}
    >
      {items.map((tab) => {
        const isActive = tab.id === activeId;

        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            disabled={tab.disabled}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex items-center gap-2 px-4 py-2 text-xs font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold whitespace-nowrap",
              tab.disabled && "opacity-40 cursor-not-allowed",
              variant === "line" && [
                "border-b-2 -mb-px",
                isActive
                  ? "border-gold text-navy-dark font-extrabold"
                  : "border-transparent text-text-secondary hover:text-navy hover:border-navy-200",
              ],
              variant === "pills" && [
                "rounded-md",
                isActive
                  ? "bg-surface text-navy-dark shadow-subtle"
                  : "text-text-secondary hover:text-navy hover:bg-white/50",
              ]
            )}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge !== undefined && (
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.2 text-[10px] font-bold leading-tight",
                  isActive
                    ? "bg-gold/20 text-gold-dark"
                    : "bg-navy-100 text-navy-600"
                )}
              >
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
