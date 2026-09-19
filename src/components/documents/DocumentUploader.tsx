import React from "react";
import { Upload } from "lucide-react";

export function DocumentUploader({ onUpload }: { onUpload?: (file: File) => void }) {
  return (
    <div className="rounded-xl border-2 border-dashed border-navy-200 bg-white p-6 text-center space-y-2 hover:border-gold transition-all">
      <Upload className="mx-auto h-8 w-8 text-gold" />
      <p className="text-xs font-bold text-navy-900">Upload to Encrypted Private S3 Vault</p>
      <p className="text-[10px] text-navy-500">PDF, scanned financials, and quotations up to 25MB</p>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files?.[0] && onUpload) {
            onUpload(e.target.files[0]);
          }
        }}
        className="text-xs mt-2"
      />
    </div>
  );
}
