import React from "react";
import { cn } from "@/lib/utils";
import { Info, CheckCircle2, AlertTriangle, AlertOctagon, X } from "lucide-react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  onDismiss?: () => void;
}

export function Alert({
  variant = "info",
  title,
  onDismiss,
  className,
  children,
  ...props
}: AlertProps) {
  const config = {
    info: {
      bg: "bg-info-50",
      border: "border-info-100",
      text: "text-info-700",
      titleColor: "text-navy-900",
      icon: <Info className="h-4 w-4 text-info shrink-0 mt-0.5" />,
    },
    success: {
      bg: "bg-success-50",
      border: "border-success-100",
      text: "text-success-700",
      titleColor: "text-navy-900",
      icon: <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />,
    },
    warning: {
      bg: "bg-warning-50",
      border: "border-warning-100",
      text: "text-warning-700",
      titleColor: "text-navy-900",
      icon: <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />,
    },
    error: {
      bg: "bg-error-50",
      border: "border-error-100",
      text: "text-error-700",
      titleColor: "text-navy-900",
      icon: <AlertOctagon className="h-4 w-4 text-error shrink-0 mt-0.5" />,
    },
  }[variant];

  return (
    <div
      role="alert"
      className={cn(
        "relative flex items-start gap-3 rounded-lg border p-4 text-xs sm:text-sm leading-relaxed",
        config.bg,
        config.border,
        className
      )}
      {...props}
    >
      {config.icon}
      <div className="flex-1 space-y-0.5">
        {title && <h4 className={cn("font-bold text-xs sm:text-sm", config.titleColor)}>{title}</h4>}
        <div className={cn("text-xs sm:text-sm", config.text)}>{children}</div>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="rounded p-1 text-navy-400 hover:text-navy-800 transition-colors"
          aria-label="Dismiss alert"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}
