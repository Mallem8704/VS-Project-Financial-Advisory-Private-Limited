"use client";

import React, { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Building, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
  });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/portal/dashboard";
  };

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 shadow-institutional space-y-5">
      <div className="text-center space-y-1">
        <h1 className="text-xl font-bold text-navy-dark">Register Enterprise</h1>
        <p className="text-xs text-navy-600">Create an institutional advisory workspace</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-3.5">
        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase mb-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
            <input
              type="text"
              required
              placeholder="Rajesh Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2 text-xs focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase mb-1">Company / Entity Name</label>
          <div className="relative">
            <Building className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
            <input
              type="text"
              required
              placeholder="Apex Precision Engineering Pvt Ltd"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2 text-xs focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase mb-1">Official Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
            <input
              type="email"
              required
              placeholder="rajesh@enterprise.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2 text-xs focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-navy-900 uppercase mb-1">Create Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-navy-400" />
            <input
              type="password"
              required
              placeholder="••••••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full rounded-lg border border-navy-200 pl-9 pr-3 py-2 text-xs focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-gold py-2.5 text-xs font-bold text-white hover:bg-gold-hover transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
        >
          <span>Create Workspace</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </form>

      <div className="pt-2 border-t border-navy-50 text-center text-xs text-navy-600">
        <span>Already have an account? </span>
        <Link href="/login" className="font-bold text-gold-dark hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}
