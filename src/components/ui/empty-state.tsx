import React from "react";
import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  secondaryAction,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface p-8 sm:p-12 text-center",
        className
      )}
      {...props}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-warm-100 text-navy-600 border border-border mb-4">
        {icon || <Inbox className="h-7 w-7 text-navy-400" />}
      </div>

      <h3 className="text-base sm:text-lg font-bold text-navy-dark tracking-tight font-sans">
        {title}
      </h3>
      <p className="mt-1.5 max-w-sm text-xs sm:text-sm text-text-secondary leading-relaxed">
        {description}
      </p>

      {(action || secondaryAction) && (
        <div className="mt-6 flex items-center justify-center gap-3">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
}
