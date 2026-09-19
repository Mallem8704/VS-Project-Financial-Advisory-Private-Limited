"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth redirect
    window.location.href = "/portal/dashboard";
  };

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-5">
      <div className="text-center space-y-1">
        <h1 className="text-xl font-bold text-navy-dark">Portal Sign In</h1>
        <p className="text-xs text-navy-600">Access your client or advisor advisory workspace</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
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

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-bold text-navy-900 uppercase">Password</label>
            <Link href="/forgot-password" className="text-[11px] text-gold-dark font-medium hover:underline">
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
          className="w-full rounded-lg bg-navy py-2.5 text-xs font-bold text-white hover:bg-navy-light transition-all shadow-sm flex items-center justify-center gap-2"
        >
          <span>Sign In to Workspace</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </form>

      <div className="pt-2 border-t border-navy-50 text-center text-xs text-navy-600">
        <span>Don&apos;t have an account? </span>
        <Link href="/register" className="font-bold text-gold-dark hover:underline">
          Register enterprise
        </Link>
      </div>
    </div>
  );
}
