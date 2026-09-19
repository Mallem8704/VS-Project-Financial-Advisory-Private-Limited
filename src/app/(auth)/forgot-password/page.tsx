"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-5">
      <div className="text-center space-y-1">
        <h1 className="text-xl font-bold text-navy-dark">Reset Password</h1>
        <p className="text-xs text-navy-600">Enter your registered email for password recovery</p>
      </div>

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
            className="w-full rounded-lg bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <span>Send Reset Instructions</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>
      ) : (
        <div className="rounded-lg bg-emerald-50 p-4 border border-emerald-200 text-center space-y-2">
          <CheckCircle2 className="mx-auto h-6 w-6 text-emerald-600" />
          <p className="text-xs font-bold text-emerald-900">Recovery Instructions Sent</p>
          <p className="text-[11px] text-emerald-700">
            Check your inbox at <strong>{email}</strong> for the secure password reset link.
          </p>
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
