"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Lock, ArrowRight, CheckCircle2, AlertCircle, KeyRound } from "lucide-react";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const tokenParam = searchParams.get("token") || "";

  const [token, setToken] = useState(tokenParam);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Failed to reset password. Token may be expired.");
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      setIsLoading(false);
    } catch (err) {
      setErrorMessage((err as Error).message || "Network error occurred.");
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-5">
      <div className="text-center space-y-1">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-gold">
          <KeyRound className="h-6 w-6" />
        </div>
        <h1 className="text-xl font-bold text-navy-dark">Create New Password</h1>
        <p className="text-xs text-navy-600">Secure institutional credential recovery</p>
      </div>

      {errorMessage && (
        <div className="rounded-lg bg-rose-50 p-3.5 border border-rose-200 text-xs text-rose-800 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-relaxed text-rose-700">{errorMessage}</p>
        </div>
      )}

      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
              Recovery Security Token
            </label>
            <input
              type="text"
              required
              placeholder="Paste 64-character token from email"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full rounded-lg border border-navy-200 px-3 py-2 text-xs font-mono focus:border-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
              New Password (min 8 chars, 1 uppercase, 1 number)
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2.5 text-xs focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2.5 text-xs focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <span>Updating Password...</span> : <span>Update Secure Password</span>}
          </button>
        </form>
      ) : (
        <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200 text-center space-y-3">
          <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
          <p className="text-xs font-bold text-emerald-900">Password Successfully Reset</p>
          <p className="text-[11px] text-emerald-700 leading-relaxed">
            Your new password is now active and all previous active sessions have been revoked.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy-light"
          >
            <span>Sign In Now</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}

      <div className="pt-2 border-t border-navy-50 text-center text-xs text-navy-600">
        <Link href="/login" className="font-bold text-navy-800 hover:underline">
          ← Return to Portal Sign In
        </Link>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-navy-500">Loading password reset...</div>}>
      <ResetPasswordForm />
    </Suspense>
  );
}
