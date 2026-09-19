import React from "react";
import { cn } from "@/lib/utils";

export type FinancialStatus =
  | "DRAFT"
  | "IN_PROGRESS"
  | "SUBMITTED"
  | "UNDER_REVIEW"
  | "QUERY_RAISED"
  | "ACTION_REQUIRED"
  | "SANCTIONED"
  | "DISBURSED"
  | "REJECTED"
  | "CLOSED";

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: FinancialStatus;
  label?: string;
  pulse?: boolean;
}

const statusConfig: Record<
  FinancialStatus,
  {
    label: string;
    bg: string;
    text: string;
    border: string;
    dot: string;
    dotPulse?: string;
  }
> = {
  DRAFT: {
    label: "Draft",
    bg: "bg-surface-muted",
    text: "text-text-secondary",
    border: "border-border",
    dot: "bg-text-secondary",
  },
  IN_PROGRESS: {
    label: "In Progress",
    bg: "bg-navy-50",
    text: "text-navy-800",
    border: "border-navy-200",
    dot: "bg-navy-500",
    dotPulse: "bg-navy-400",
  },
  SUBMITTED: {
    label: "Submitted",
    bg: "bg-info-50",
    text: "text-info-700",
    border: "border-info-100",
    dot: "bg-info",
  },
  UNDER_REVIEW: {
    label: "Bank Review",
    bg: "bg-warning-50",
    text: "text-warning-700",
    border: "border-warning-100",
    dot: "bg-warning",
    dotPulse: "bg-warning",
  },
  QUERY_RAISED: {
    label: "Query Raised",
    bg: "bg-amber-50",
    text: "text-amber-800",
    border: "border-amber-300",
    dot: "bg-amber-600",
    dotPulse: "bg-amber-500",
  },
  ACTION_REQUIRED: {
    label: "Action Required",
    bg: "bg-error-50",
    text: "text-error-700",
    border: "border-error-200",
    dot: "bg-error",
    dotPulse: "bg-error",
  },
  SANCTIONED: {
    label: "Sanctioned",
    bg: "bg-success-50",
    text: "text-success-700",
    border: "border-success-200",
    dot: "bg-success",
  },
  DISBURSED: {
    label: "Disbursed",
    bg: "bg-emerald-50",
    text: "text-emerald-900",
    border: "border-emerald-300",
    dot: "bg-emerald-600",
  },
  REJECTED: {
    label: "Declined",
    bg: "bg-error-50",
    text: "text-error-700",
    border: "border-error-200",
    dot: "bg-error",
  },
  CLOSED: {
    label: "Completed",
    bg: "bg-warm-200",
    text: "text-navy-700",
    border: "border-navy-200",
    dot: "bg-navy-400",
  },
};

export function StatusBadge({
  status,
  label,
  pulse = true,
  className,
  ...props
}: StatusBadgeProps) {
  const config = statusConfig[status] || statusConfig.DRAFT;
  const displayLabel = label || config.label;
  const shouldPulse = pulse && Boolean(config.dotPulse);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider select-none",
        config.bg,
        config.text,
        config.border,
        className
      )}
      {...props}
    >
      <span className="relative flex h-2 w-2 items-center justify-center">
        {shouldPulse && (
          <span
            className={cn(
              "absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping",
              config.dotPulse
            )}
          />
        )}
        <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", config.dot)} />
      </span>
      <span>{displayLabel}</span>
    </span>
  );
}
