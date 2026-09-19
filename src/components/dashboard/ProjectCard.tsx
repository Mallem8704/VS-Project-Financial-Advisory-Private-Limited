import React from "react";
import Link from "next/link";
import { FolderGit2, ArrowRight } from "lucide-react";

export interface ProjectCardProps {
  id: string;
  title: string;
  sector: string;
  requestedLoan: string;
  stage: string;
  status: string;
}

export function ProjectCard({ id, title, sector, requestedLoan, stage, status }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm hover:shadow-institutional transition-all space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FolderGit2 className="h-4 w-4 text-gold" />
          <span className="text-[10px] font-bold text-navy-500 uppercase">{id}</span>
        </div>
        <span className="rounded bg-navy-50 px-2 py-0.5 text-[10px] font-bold text-navy-800 border border-navy-100">
          {status}
        </span>
      </div>
      <div>
        <h3 className="text-sm font-bold text-navy-dark">{title}</h3>
        <p className="text-xs text-navy-600 mt-0.5">{sector} • {requestedLoan}</p>
      </div>
      <div className="pt-2 border-t border-navy-50 flex items-center justify-between text-xs">
        <span className="text-navy-500 font-medium">Stage: {stage}</span>
        <Link href={`/portal/projects`} className="text-gold-dark font-bold hover:underline inline-flex items-center gap-1">
          <span>View</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
