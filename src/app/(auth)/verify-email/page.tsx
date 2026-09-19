"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MailCheck, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const tokenParam = searchParams.get("token") || "";

  const [token, setToken] = useState(tokenParam);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const verifyToken = async (tokenToVerify: string) => {
    setIsLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: tokenToVerify }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setMessage(data.error || "Verification token is invalid or expired.");
        setIsLoading(false);
        return;
      }

      setStatus("success");
      setMessage(data.message || "Official email verified successfully.");
      setIsLoading(false);
    } catch (err) {
      setStatus("error");
      setMessage((err as Error).message || "Network error occurred.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (tokenParam) {
      verifyToken(tokenParam);
    }
  }, [tokenParam]);

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-5">
      <div className="text-center space-y-1">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-gold">
          <MailCheck className="h-6 w-6" />
        </div>
        <h1 className="text-xl font-bold text-navy-dark">Verify Official Email</h1>
        <p className="text-xs text-navy-600">Enterprise workspace domain confirmation</p>
      </div>

      {status === "success" && (
        <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200 text-center space-y-3">
          <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
          <p className="text-xs font-bold text-emerald-900">Email Successfully Verified</p>
          <p className="text-[11px] text-emerald-700">{message}</p>
          <Link
            href="/portal/dashboard"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
          >
            <span>Proceed to Workspace</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg bg-rose-50 p-4 border border-rose-200 text-center space-y-2">
          <AlertCircle className="mx-auto h-8 w-8 text-rose-600" />
          <p className="text-xs font-bold text-rose-900">Verification Issue</p>
          <p className="text-[11px] text-rose-700">{message}</p>
        </div>
      )}

      {status === "idle" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            verifyToken(token);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
              Verification Token
            </label>
            <input
              type="text"
              required
              placeholder="Paste token from official invitation email"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full rounded-lg border border-navy-200 px-3 py-2 text-xs font-mono focus:border-gold focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !token}
            className="w-full rounded-lg bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <span>Verifying...</span> : <span>Confirm Email Address</span>}
          </button>
        </form>
      )}

      <div className="pt-2 border-t border-navy-50 text-center text-xs text-navy-600">
        <Link href="/login" className="font-bold text-navy-800 hover:underline">
          ← Return to Portal Sign In
        </Link>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-navy-500">Loading email verification...</div>}>
      <VerifyEmailForm />
    </Suspense>
  );
}
