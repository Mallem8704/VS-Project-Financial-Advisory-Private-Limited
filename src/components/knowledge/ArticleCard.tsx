import React from "react";
import { ExternalLink } from "lucide-react";

export interface ArticleCardProps {
  title: string;
  category: string;
  summary: string;
  sourceUrl: string;
  issuingAuthority: string;
  publicationDate: string;
  effectiveDate: string;
  lastReviewedDate: string;
  reviewedBy: string;
  status: string;
  applicableAudience: string;
  tags?: string[];
}

export function ArticleCard(props: ArticleCardProps) {
  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-navy-50 pb-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-navy-50 px-2.5 py-1 font-bold text-navy-800">
            {props.category}
          </span>
          <span className="rounded-md bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-800 border border-emerald-200">
            {props.status}
          </span>
        </div>
        <div className="flex items-center gap-4 text-navy-500 text-[11px]">
          <span>Published: {props.publicationDate}</span>
          <span>•</span>
          <span>Effective: {props.effectiveDate}</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-navy-dark">{props.title}</h3>
        <p className="text-xs sm:text-sm text-navy-700 mt-2 leading-relaxed">{props.summary}</p>
      </div>
      <div className="rounded-xl bg-warm-50/70 p-4 border border-navy-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div>
          <span className="text-navy-500 font-semibold block uppercase text-[10px]">Issuing Authority:</span>
          <span className="font-bold text-navy-900">{props.issuingAuthority}</span>
        </div>
        <div>
          <span className="text-navy-500 font-semibold block uppercase text-[10px]">Last Reviewed:</span>
          <span className="text-navy-900">{props.lastReviewedDate}</span>
        </div>
        <div>
          <span className="text-navy-500 font-semibold block uppercase text-[10px]">Reviewed By:</span>
          <span className="text-navy-900">{props.reviewedBy}</span>
        </div>
        <div>
          <span className="text-navy-500 font-semibold block uppercase text-[10px]">Audience:</span>
          <span className="text-navy-900">{props.applicableAudience}</span>
        </div>
      </div>
      <div className="flex justify-end pt-2">
        <a
          href={props.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-dark hover:text-navy transition-colors"
        >
          <span>Official Source</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
