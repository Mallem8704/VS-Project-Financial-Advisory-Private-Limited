"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Clock,
  KeyRound,
  Sparkles,
} from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mfaCode, setMfaCode] = useState("");
  const [mfaTicket, setMfaTicket] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lockoutRemaining, setLockoutRemaining] = useState<number | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.isLocked) {
          setLockoutRemaining(data.remainingSeconds || 900);
        }
        setErrorMessage(data.error || "Sign in failed. Please check your credentials.");
        setIsLoading(false);
        return;
      }

      if (data.mfaRequired) {
        setMfaTicket(data.mfaTicket);
        setIsLoading(false);
        return;
      }

      navigateAfterLogin(data.user?.role);
    } catch (err) {
      setErrorMessage((err as Error).message || "Network error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const handleVerifyMfa = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mfaTicket) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/auth/mfa/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mfaTicket, code: mfaCode }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Invalid authentication code.");
        setIsLoading(false);
        return;
      }

      navigateAfterLogin(data.user?.role);
    } catch (err) {
      setErrorMessage((err as Error).message || "Failed to verify MFA.");
      setIsLoading(false);
    }
  };

  const navigateAfterLogin = (role?: string) => {
    if (redirectUrl && redirectUrl.startsWith("/")) {
      window.location.href = redirectUrl;
      return;
    }
    if (role === "CLIENT") {
      window.location.href = "/portal/dashboard";
    } else {
      window.location.href = "/admin/dashboard";
    }
  };

  const applyPreset = (presetEmail: string) => {
    setEmail(presetEmail);
    setPassword("Password@123");
    setErrorMessage(null);
    setLockoutRemaining(null);
    setMfaTicket(null);
  };

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-5">
      <div className="text-center space-y-1">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5 text-gold">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h1 className="text-xl font-bold text-navy-dark">Institutional Sign In</h1>
        <p className="text-xs text-navy-600">
          Secure multi-role portal & advisor underwriting desk
        </p>
      </div>

      {errorMessage && (
        <div className="rounded-lg bg-rose-50 p-3.5 border border-rose-200 text-xs text-rose-800 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold">Authentication Alert</p>
            <p className="text-[11px] leading-relaxed text-rose-700">{errorMessage}</p>
          </div>
        </div>
      )}

      {lockoutRemaining && (
        <div className="rounded-lg bg-amber-50 p-3.5 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-bold">Security Lockout Active</p>
            <p className="text-[11px] text-amber-800">
              Account temporarily locked due to 5 failed attempts. Please retry after{" "}
              <strong>{Math.ceil(lockoutRemaining / 60)} minutes</strong>.
            </p>
          </div>
        </div>
      )}

      {!mfaTicket ? (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
              Official Email
            </label>
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

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-bold text-navy-900 uppercase">Password</label>
              <Link
                href="/forgot-password"
                className="text-[11px] text-gold-dark font-medium hover:underline"
              >
                Forgot password?
              </Link>
            </div>
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

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <span>Verifying Credentials...</span>
            ) : (
              <>
                <span>Sign In to Workspace</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyMfa} className="space-y-4">
          <div className="rounded-lg bg-blue-50 p-3 border border-blue-200 text-xs text-blue-900">
            <div className="flex items-center gap-2 font-bold mb-1">
              <KeyRound className="h-4 w-4 text-blue-700" />
              <span>Two-Factor Authentication Required</span>
            </div>
            <p className="text-[11px] text-blue-800 leading-relaxed">
              Enter the 6-digit verification code from your Authenticator app (or emergency backup recovery code).
            </p>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase mb-1">
              6-Digit Authenticator Code
            </label>
            <input
              type="text"
              required
              autoFocus
              maxLength={11}
              placeholder="123456"
              value={mfaCode}
              onChange={(e) => setMfaCode(e.target.value)}
              className="w-full rounded-lg border border-navy-200 px-3 py-2.5 text-center text-lg font-mono tracking-widest focus:border-gold focus:outline-none"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMfaTicket(null)}
              className="w-1/3 rounded-lg border border-navy-200 py-2.5 text-xs font-semibold text-navy-700 hover:bg-navy-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || mfaCode.trim().length < 6}
              className="w-2/3 rounded-lg bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? <span>Verifying...</span> : <span>Confirm & Sign In</span>}
            </button>
          </div>
        </form>
      )}

      {/* Instant Demo Role Picker for Testing */}
      <div className="pt-3 border-t border-navy-100 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-semibold text-navy-600">
          <span className="flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-gold" />
            <span>Test Role Autofill (Demo accounts)</span>
          </span>
          <span className="text-[10px] text-navy-400 font-normal">Pass: Password@123</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <button
            type="button"
            onClick={() => applyPreset("superadmin@vsadvisory.com")}
            className="rounded border border-navy-100 bg-navy-50/60 p-1.5 text-left font-medium text-navy-900 hover:bg-gold/10 hover:border-gold/40 truncate"
          >
            🛡️ SUPER_ADMIN
          </button>
          <button
            type="button"
            onClick={() => applyPreset("director@vsadvisory.com")}
            className="rounded border border-navy-100 bg-navy-50/60 p-1.5 text-left font-medium text-navy-900 hover:bg-gold/10 hover:border-gold/40 truncate"
          >
            🏛️ DIRECTOR
          </button>
          <button
            type="button"
            onClick={() => applyPreset("admin@vsadvisory.com")}
            className="rounded border border-navy-100 bg-navy-50/60 p-1.5 text-left font-medium text-navy-900 hover:bg-gold/10 hover:border-gold/40 truncate"
          >
            ⚙️ ADMIN
          </button>
          <button
            type="button"
            onClick={() => applyPreset("advisor@vsadvisory.com")}
            className="rounded border border-navy-100 bg-navy-50/60 p-1.5 text-left font-medium text-navy-900 hover:bg-gold/10 hover:border-gold/40 truncate"
          >
            💼 ADVISOR
          </button>
          <button
            type="button"
            onClick={() => applyPreset("analyst@vsadvisory.com")}
            className="rounded border border-navy-100 bg-navy-50/60 p-1.5 text-left font-medium text-navy-900 hover:bg-gold/10 hover:border-gold/40 truncate"
          >
            📊 FINANCIAL_ANALYST
          </button>
          <button
            type="button"
            onClick={() => applyPreset("client@enterprise.com")}
            className="rounded border border-navy-100 bg-navy-50/60 p-1.5 text-left font-medium text-navy-900 hover:bg-gold/10 hover:border-gold/40 truncate"
          >
            🏭 CLIENT (Borrower)
          </button>
        </div>
      </div>

      <div className="pt-2 border-t border-navy-50 text-center text-xs text-navy-600">
        <span>Don&apos;t have an account? </span>
        <Link href="/register" className="font-bold text-gold-dark hover:underline">
          Register enterprise
        </Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-navy-500">Loading portal sign in...</div>}>
      <LoginForm />
    </Suspense>
  );
}
