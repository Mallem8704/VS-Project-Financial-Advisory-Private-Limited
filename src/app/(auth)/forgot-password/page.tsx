"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, CheckCircle2, AlertCircle, KeyRound } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [debugToken, setDebugToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Failed to process recovery request.");
        setIsLoading(false);
        return;
      }

      setSubmitted(true);
      if (data.debugResetToken) {
        setDebugToken(data.debugResetToken);
      }
      setIsLoading(false);
    } catch (err) {
      setErrorMessage((err as Error).message || "Network error.");
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-5">
      <div className="text-center space-y-1">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-gold">
          <KeyRound className="h-6 w-6" />
        </div>
        <h1 className="text-xl font-bold text-navy-dark">Reset Password</h1>
        <p className="text-xs text-navy-600">Enter your registered email for password recovery</p>
      </div>

      {errorMessage && (
        <div className="rounded-lg bg-rose-50 p-3.5 border border-rose-200 text-xs text-rose-800 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-rose-700">{errorMessage}</p>
        </div>
      )}

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase mb-1">Official Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
              <input
                type="email"
                required
                placeholder="rajesh@enterprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2.5 text-xs focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <span>Processing...</span> : <span>Send Reset Instructions</span>}
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200 text-center space-y-2">
            <CheckCircle2 className="mx-auto h-6 w-6 text-emerald-600" />
            <p className="text-xs font-bold text-emerald-900">Recovery Instructions Sent</p>
            <p className="text-[11px] text-emerald-700">
              If registered, recovery instructions have been dispatched to <strong>{email}</strong>.
            </p>
          </div>

          {debugToken && (
            <div className="rounded-lg bg-gold/10 p-3 border border-gold/30 text-xs text-navy-dark space-y-2">
              <p className="font-bold text-[11px] text-gold-dark">Test Simulation: Active Reset Token</p>
              <p className="text-[10px] font-mono break-all bg-white p-2 rounded border border-navy-100">
                {debugToken}
              </p>
              <Link
                href={`/reset-password?token=${debugToken}`}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-gold-dark hover:underline"
              >
                <span>Click to Open Password Reset Screen →</span>
              </Link>
            </div>
          )}
        </div>
      )}

      <div className="pt-2 border-t border-navy-50 text-center text-xs text-navy-600">
        <Link href="/login" className="font-bold text-navy-800 hover:underline">
          ← Back to Sign In
        </Link>
      </div>
    </div>
  );
}
