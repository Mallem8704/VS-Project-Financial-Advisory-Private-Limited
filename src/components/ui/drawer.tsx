"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position?: "right" | "left";
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Drawer({
  isOpen,
  onClose,
  position = "right",
  title,
  description,
  children,
  footer,
  size = "md",
  className,
}: DrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeStyles = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-xl",
  };

  const isRight = position === "right";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden flex"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-dark/60 backdrop-blur-xs transition-opacity duration-200 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={cn(
          "relative ml-auto flex h-full w-full flex-col bg-surface border-l border-border shadow-2xl z-10 duration-250 ease-out",
          !isRight && "ml-0 mr-auto border-l-0 border-r",
          sizeStyles[size],
          className
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-border-subtle bg-surface">
          <div>
            {title && (
              <h3 className="text-base sm:text-lg font-bold text-navy-dark tracking-tight font-sans">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-navy-400 hover:bg-navy-50 hover:text-navy-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close drawer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="p-4 sm:px-6 bg-surface-muted border-t border-border-subtle flex items-center justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
