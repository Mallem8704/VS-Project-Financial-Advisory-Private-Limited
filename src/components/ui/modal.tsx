"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
}: ModalProps) {
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
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-dark/60 backdrop-blur-xs transition-opacity duration-200 animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className={cn(
          "relative w-full rounded-xl bg-surface border border-border shadow-institutional-lg z-10 overflow-hidden transform transition-all duration-200 animate-slide-up",
          sizeStyles[size],
          className
        )}
      >
        {/* Subtle gold top line */}
        <div className="h-1 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

        {/* Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-border-subtle">
          <div>
            {title && (
              <h3 className="text-lg font-bold text-navy-dark tracking-tight font-sans">
                {title}
              </h3>
            )}
            {description && (
              <p className="mt-1 text-xs sm:text-sm text-text-secondary leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-navy-400 hover:bg-navy-50 hover:text-navy-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 max-h-[70vh] overflow-y-auto">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-4 sm:px-6 bg-surface-muted border-t border-border-subtle">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
