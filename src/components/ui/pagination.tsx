import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  pageSize,
  className,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const startItem = totalItems && pageSize ? (currentPage - 1) * pageSize + 1 : undefined;
  const endItem = totalItems && pageSize ? Math.min(currentPage * pageSize, totalItems) : undefined;

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-text-secondary select-none py-2",
        className
      )}
    >
      {/* Item summary */}
      {totalItems !== undefined && (
        <div>
          Showing <span className="font-bold text-navy-dark">{startItem}</span> to{" "}
          <span className="font-bold text-navy-dark">{endItem}</span> of{" "}
          <span className="font-bold text-navy-dark">{totalItems}</span> entries
        </div>
      )}

      {/* Pagination controls */}
      <nav aria-label="Pagination Navigation" className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-navy-dark hover:bg-navy-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        {getPageNumbers().map((page, idx) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${idx}`} className="px-2 text-text-secondary">
                ...
              </span>
            );
          }

          const isCurrent = page === currentPage;

          return (
            <button
              key={`page-${page}`}
              type="button"
              onClick={() => onPageChange(page as number)}
              aria-current={isCurrent ? "page" : undefined}
              className={cn(
                "flex h-8 min-w-[32px] px-2 items-center justify-center rounded-md text-xs font-bold transition-all duration-150",
                isCurrent
                  ? "bg-navy text-white shadow-sm border border-navy"
                  : "border border-border bg-surface text-navy-dark hover:bg-navy-50"
              )}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface text-navy-dark hover:bg-navy-50 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </nav>
    </div>
  );
}
