"use client";

import React, { useState } from "react";
import { RegulatoryDisclaimerBanner } from "@/components/brand/RegulatoryDisclaimerBanner";
import {
  FileCheck,
  Upload,
  Download,
  AlertCircle,
  Clock,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Lock,
} from "lucide-react";

interface DocItem {
  id: string;
  category: string;
  title: string;
  fileName: string;
  fileSize: string;
  status: "VERIFIED" | "UNDER_REVIEW" | "PENDING_UPLOAD" | "REVISION_REQUIRED";
  remarks?: string;
  updatedAt: string;
}

export default function SecureDocumentCentrePage() {
  const [documents, setDocuments] = useState<DocItem[]>([
    {
      id: "doc-1",
      category: "Promoter KYC",
      title: "Promoter PAN & Aadhaar (Rajesh Sharma)",
      fileName: "Rajesh_Sharma_KYC_Verified.pdf",
      fileSize: "2.4 MB",
      status: "VERIFIED",
      updatedAt: "14 Jan 2024",
    },
    {
      id: "doc-2",
      category: "Statutory Registrations",
      title: "Certificate of Incorporation & MoA/AoA",
      fileName: "Apex_Pvt_Ltd_COI_MoA.pdf",
      fileSize: "4.8 MB",
      status: "VERIFIED",
      updatedAt: "15 Jan 2024",
    },
    {
      id: "doc-3",
      category: "Statutory Registrations",
      title: "Udyam MSME Registration Certificate",
      fileName: "Udyam_Apex_Registration.pdf",
      fileSize: "1.1 MB",
      status: "VERIFIED",
      updatedAt: "16 Jan 2024",
    },
    {
      id: "doc-4",
      category: "Financial Statements",
      title: "Audited Financial Statements (FY 2022-23)",
      fileName: "Apex_Audited_Financials_FY23.pdf",
      fileSize: "8.2 MB",
      status: "VERIFIED",
      updatedAt: "18 Jan 2024",
    },
    {
      id: "doc-5",
      category: "Financial Statements",
      title: "CA Certified Net Worth Certificate (Promoter 2)",
      fileName: "Pending_Upload",
      fileSize: "-",
      status: "PENDING_UPLOAD",
      remarks: "Please upload signed CA certificate with UDIN.",
      updatedAt: "-",
    },
    {
      id: "doc-6",
      category: "Project Capex Quotations",
      title: "Plant & Machinery Quotation (Lakshmi Machine Works)",
      fileName: "LMW_CNC_Milling_Quote_Rev1.pdf",
      fileSize: "3.2 MB",
      status: "REVISION_REQUIRED",
      remarks: "Quotation expired on 31 Dec. Kindly furnish fresh validity quote.",
      updatedAt: "22 Jan 2024",
    },
    {
      id: "doc-7",
      category: "Banking & Tax",
      title: "Last 12 Months Current Account Bank Statements",
      fileName: "HDFC_Current_Account_12M.pdf",
      fileSize: "14.5 MB",
      status: "UNDER_REVIEW",
      updatedAt: "24 Jan 2024",
    },
  ]);

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  const handleDownload = (docTitle: string) => {
    alert(`Generating secure AWS S3 Pre-signed URL for: "${docTitle}". The URL expires in 15 minutes.`);
  };

  const handleSimulateUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDocId) {
      setDocuments((prev) =>
        prev.map((d) =>
          d.id === selectedDocId
            ? {
                ...d,
                fileName: "Uploaded_New_Document.pdf",
                fileSize: "3.5 MB",
                status: "UNDER_REVIEW",
                updatedAt: "Just now",
                remarks: undefined,
              }
            : d
        )
      );
      setUploadModalOpen(false);
      setSelectedDocId(null);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-100 pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
            Banking Grade Private Storage
          </span>
          <h1 className="text-2xl font-serif font-bold text-navy-dark">
            Secure Document Centre
          </h1>
          <p className="text-xs text-navy-600 mt-0.5">
            Encrypted private S3 vault. Files are accessed via temporary signed URLs with 15-minute expiration.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          <span>S3 256-Bit SSE Encryption Active</span>
        </div>
      </div>

      {/* Document List */}
      <div className="rounded-xl border border-navy-100 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-navy-100 bg-warm-50 text-[11px] font-bold text-navy-800 uppercase tracking-wider">
                <th className="p-4">Document Title & Category</th>
                <th className="p-4">File Name & Size</th>
                <th className="p-4">Verification Status</th>
                <th className="p-4">Updated Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50 text-navy-800">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-warm-50/50 transition-colors">
                  <td className="p-4 space-y-0.5">
                    <p className="font-bold text-navy-900">{doc.title}</p>
                    <span className="text-[10px] text-navy-500 font-medium">
                      Category: {doc.category}
                    </span>
                  </td>
                  <td className="p-4 space-y-0.5">
                    <p className="font-medium text-navy-700 truncate max-w-[200px]">
                      {doc.fileName}
                    </p>
                    <span className="text-[10px] text-navy-400">{doc.fileSize}</span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded border ${
                        doc.status === "VERIFIED"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : doc.status === "UNDER_REVIEW"
                          ? "bg-blue-50 text-blue-800 border-blue-200"
                          : doc.status === "REVISION_REQUIRED"
                          ? "bg-red-50 text-red-800 border-red-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {doc.status.replace("_", " ")}
                    </span>
                    {doc.remarks && (
                      <p className="text-[10px] text-red-600 mt-1 max-w-xs leading-snug">
                        {doc.remarks}
                      </p>
                    )}
                  </td>
                  <td className="p-4 text-navy-500 text-[11px]">{doc.updatedAt}</td>
                  <td className="p-4 text-right">
                    {doc.status === "VERIFIED" || doc.status === "UNDER_REVIEW" ? (
                      <button
                        onClick={() => handleDownload(doc.title)}
                        className="inline-flex items-center gap-1 rounded bg-navy-50 px-2.5 py-1 text-xs font-semibold text-navy-700 hover:bg-navy-100 transition-all"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Signed Download</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setSelectedDocId(doc.id);
                          setUploadModalOpen(true);
                        }}
                        className="inline-flex items-center gap-1 rounded bg-gold px-2.5 py-1 text-xs font-bold text-white hover:bg-gold-hover transition-all"
                      >
                        <Upload className="h-3.5 w-3.5" />
                        <span>Upload File</span>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upload Modal (Simulated) */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-navy-100 pb-3">
              <h3 className="text-sm font-bold text-navy-dark">
                Upload Document to Private Vault
              </h3>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="text-navy-400 hover:text-navy-700 text-sm"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleSimulateUpload} className="space-y-4">
              <div className="rounded-lg border-2 border-dashed border-navy-200 p-6 text-center space-y-2">
                <Upload className="mx-auto h-8 w-8 text-gold" />
                <p className="text-xs font-bold text-navy-900">
                  Click to select file or drag & drop
                </p>
                <p className="text-[10px] text-navy-500">PDF, JPG, PNG up to 25MB</p>
                <input type="file" required className="text-xs mt-2" />
              </div>
              <p className="text-[10px] text-navy-500">
                Files are directly streamed to private S3 buckets and validated by our compliance audit team.
              </p>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setUploadModalOpen(false)}
                  className="rounded px-3 py-1.5 text-xs text-navy-600 hover:bg-warm-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-gold px-4 py-1.5 text-xs font-bold text-white hover:bg-gold-hover"
                >
                  Upload & Submit for Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <RegulatoryDisclaimerBanner />
    </div>
  );
}
