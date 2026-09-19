import React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

// --- Label & Helper Elements ---
export function FormLabel({
  className,
  required,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label
      className={cn("block text-xs font-bold text-navy-dark tracking-wide mb-1.5", className)}
      {...props}
    >
      {children}
      {required && <span className="text-error ml-1">*</span>}
    </label>
  );
}

export function FormHelper({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-[11px] text-text-secondary mt-1", className)} {...props}>
      {children}
    </p>
  );
}

export function FormError({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  if (!children) return null;
  return (
    <p
      className={cn("flex items-center gap-1 text-[11px] font-semibold text-error mt-1", className)}
      {...props}
    >
      <AlertCircle className="h-3 w-3 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

// --- Input Component ---
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  prefixElement?: React.ReactNode;
  suffixElement?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helper, prefixElement, suffixElement, required, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full">
        {label && (
          <FormLabel htmlFor={inputId} required={required}>
            {label}
          </FormLabel>
        )}
        <div className="relative flex items-center">
          {prefixElement && (
            <div className="absolute left-3 text-navy-500 pointer-events-none text-xs font-semibold">
              {prefixElement}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full rounded-lg border bg-surface px-3.5 py-2 text-xs sm:text-sm text-navy-dark placeholder:text-navy-300 transition-all duration-200",
              "focus:border-navy focus:ring-1 focus:ring-navy focus:outline-none",
              prefixElement ? "pl-8" : "pl-3.5",
              suffixElement ? "pr-10" : "pr-3.5",
              error
                ? "border-error focus:border-error focus:ring-error bg-error-50/20"
                : "border-border hover:border-navy-300",
              className
            )}
            {...props}
          />
          {suffixElement && (
            <div className="absolute right-3 text-navy-500 pointer-events-none text-xs font-semibold">
              {suffixElement}
            </div>
          )}
        </div>
        {error ? <FormError>{error}</FormError> : helper && <FormHelper>{helper}</FormHelper>}
      </div>
    );
  }
);
Input.displayName = "Input";

// --- Select Component ---
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helper?: string;
  options?: Array<{ value: string; label: string; disabled?: boolean }>;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helper, options, required, id, children, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full">
        {label && (
          <FormLabel htmlFor={selectId} required={required}>
            {label}
          </FormLabel>
        )}
        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={cn(
              "w-full appearance-none rounded-lg border bg-surface px-3.5 py-2 pr-9 text-xs sm:text-sm text-navy-dark transition-all duration-200",
              "focus:border-navy focus:ring-1 focus:ring-navy focus:outline-none",
              error
                ? "border-error focus:border-error focus:ring-error bg-error-50/20"
                : "border-border hover:border-navy-300",
              className
            )}
            {...props}
          >
            {options
              ? options.map((opt) => (
                  <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                    {opt.label}
                  </option>
                ))
              : children}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-navy-500">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        {error ? <FormError>{error}</FormError> : helper && <FormHelper>{helper}</FormHelper>}
      </div>
    );
  }
);
Select.displayName = "Select";

// --- Textarea Component ---
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helper?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helper, required, id, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="w-full">
        {label && (
          <FormLabel htmlFor={textareaId} required={required}>
            {label}
          </FormLabel>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "w-full rounded-lg border bg-surface px-3.5 py-2.5 text-xs sm:text-sm text-navy-dark placeholder:text-navy-300 transition-all duration-200",
            "focus:border-navy focus:ring-1 focus:ring-navy focus:outline-none resize-y min-h-[90px]",
            error
              ? "border-error focus:border-error focus:ring-error bg-error-50/20"
              : "border-border hover:border-navy-300",
            className
          )}
          {...props}
        />
        {error ? <FormError>{error}</FormError> : helper && <FormHelper>{helper}</FormHelper>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// --- Checkbox Component ---
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string | React.ReactNode;
  description?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const checkboxId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex items-start gap-2.5">
        <input
          id={checkboxId}
          type="checkbox"
          ref={ref}
          className={cn(
            "h-4 w-4 rounded border-border text-navy focus:ring-gold focus:ring-offset-0 focus:ring-2 mt-0.5 cursor-pointer",
            className
          )}
          {...props}
        />
        {(label || description) && (
          <div className="text-xs">
            {label && (
              <label htmlFor={checkboxId} className="font-semibold text-navy-dark cursor-pointer select-none">
                {label}
              </label>
            )}
            {description && (
              <p className="text-text-secondary text-[11px] leading-tight mt-0.5">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

// --- Radio & RadioGroup Component ---
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string | React.ReactNode;
  description?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, id, ...props }, ref) => {
    const radioId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex items-start gap-2.5">
        <input
          id={radioId}
          type="radio"
          ref={ref}
          className={cn(
            "h-4 w-4 border-border text-navy focus:ring-gold focus:ring-offset-0 focus:ring-2 mt-0.5 cursor-pointer",
            className
          )}
          {...props}
        />
        {(label || description) && (
          <div className="text-xs">
            {label && (
              <label htmlFor={radioId} className="font-semibold text-navy-dark cursor-pointer select-none">
                {label}
              </label>
            )}
            {description && (
              <p className="text-text-secondary text-[11px] leading-tight mt-0.5">{description}</p>
            )}
          </div>
        )}
      </div>
    );
  }
);
Radio.displayName = "Radio";

// --- Switch / Toggle Component ---
export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  className?: string;
}

export function Switch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
  className,
}: SwitchProps) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      {(label || description) && (
        <div>
          {label && <p className="text-xs font-bold text-navy-dark">{label}</p>}
          {description && <p className="text-[11px] text-text-secondary">{description}</p>}
        </div>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
          checked ? "bg-navy" : "bg-navy-200",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out",
            checked ? "translate-x-4" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );
}
