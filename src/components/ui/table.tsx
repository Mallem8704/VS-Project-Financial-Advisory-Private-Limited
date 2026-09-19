import React from "react";
import { cn } from "@/lib/utils";

export function Table({
  className,
  containerClassName,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement> & { containerClassName?: string }) {
  return (
    <div className={cn("relative w-full overflow-auto rounded-xl border border-border bg-surface shadow-subtle", containerClassName)}>
      <table className={cn("w-full caption-bottom text-xs sm:text-sm text-left border-collapse", className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className={cn("bg-surface-muted/70 text-[11px] font-bold uppercase tracking-wider text-text-secondary border-b border-border", className)}
      {...props}
    >
      {children}
    </thead>
  );
}

export function TableBody({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={cn("divide-y divide-border-subtle bg-surface text-navy-dark", className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tfoot className={cn("bg-surface-muted font-bold text-navy-dark border-t border-border", className)} {...props}>
      {children}
    </tfoot>
  );
}

export function TableRow({
  className,
  hover = true,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement> & { hover?: boolean }) {
  return (
    <tr
      className={cn(
        "transition-colors duration-150",
        hover && "hover:bg-warm-100/60",
        className
      )}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHead({
  className,
  align = "left",
  children,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement> & { align?: "left" | "center" | "right" }) {
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <th
      className={cn("h-11 px-4 font-bold text-navy-dark select-none", alignStyles[align], className)}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({
  className,
  align = "left",
  children,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement> & { align?: "left" | "center" | "right" }) {
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right font-mono", // numeric values in monospace
  };

  return (
    <td
      className={cn("p-4 align-middle text-xs sm:text-sm", alignStyles[align], className)}
      {...props}
    >
      {children}
    </td>
  );
}
