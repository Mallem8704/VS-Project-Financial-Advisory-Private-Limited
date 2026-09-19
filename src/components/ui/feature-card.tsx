import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  actionText?: string;
  badge?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  href,
  actionText = "Explore Solution",
  badge,
  className,
  ...props
}: FeatureCardProps) {
  const content = (
    <div
      className={cn(
        "group relative rounded-xl border border-border bg-surface p-6 sm:p-7 shadow-subtle transition-all duration-200 hover:border-gold/50 hover:shadow-institutional",
        href && "cursor-pointer",
        className
      )}
      {...props}
    >
      {/* Top row: Icon and Optional Badge */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-dark text-gold border border-gold/30 shadow-sm transition-transform duration-200 group-hover:scale-105 group-hover:bg-navy">
          {icon}
        </div>
        {badge && (
          <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold text-gold-dark border border-gold/20">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-navy-dark tracking-tight font-sans group-hover:text-navy transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
        {description}
      </p>

      {/* Action link */}
      {href && (
        <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-gold-dark group-hover:text-gold transition-colors">
          <span>{actionText}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href} className="block">{content}</Link>;
  }

  return content;
}
