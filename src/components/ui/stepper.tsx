import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface Step {
  id: string;
  title: string;
  description?: string;
}

export interface StepperProps {
  steps: Step[];
  currentStep: number; // 0-indexed
  onStepClick?: (stepIndex: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Stepper({
  steps,
  currentStep,
  onStepClick,
  orientation = "horizontal",
  className,
}: StepperProps) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        isHorizontal
          ? "flex items-center justify-between w-full"
          : "flex flex-col space-y-6",
        className
      )}
    >
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep;
        const isCurrent = idx === currentStep;
        const isUpcoming = idx > currentStep;

        return (
          <React.Fragment key={step.id}>
            <div
              onClick={() => onStepClick && onStepClick(idx)}
              className={cn(
                "flex items-center gap-3 select-none",
                isHorizontal ? "flex-1 last:flex-none" : "w-full",
                onStepClick && "cursor-pointer"
              )}
            >
              {/* Step Circle */}
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-200",
                  isCompleted && "bg-success text-white",
                  isCurrent && "bg-navy text-gold ring-4 ring-gold/25 border border-gold",
                  isUpcoming && "bg-surface-muted text-text-secondary border border-border"
                )}
              >
                {isCompleted ? <Check className="h-4 w-4 stroke-[3]" /> : idx + 1}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p
                  className={cn(
                    "text-xs font-bold tracking-tight truncate",
                    isCurrent ? "text-navy-dark" : isCompleted ? "text-navy-800" : "text-text-secondary"
                  )}
                >
                  {step.title}
                </p>
                {step.description && (
                  <p className="text-[10px] text-text-secondary truncate hidden sm:block">
                    {step.description}
                  </p>
                )}
              </div>
            </div>

            {/* Connecting line between steps in horizontal mode */}
            {isHorizontal && idx < steps.length - 1 && (
              <div
                className={cn(
                  "h-0.5 flex-1 mx-3 transition-colors duration-200",
                  idx < currentStep ? "bg-success" : "bg-border"
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
