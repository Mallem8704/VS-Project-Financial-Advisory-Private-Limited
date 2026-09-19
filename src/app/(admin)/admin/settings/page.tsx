import React from "react";
import { Settings, ShieldCheck, Database, Key } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="border-b border-navy-100 pb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">System Governance</span>
        <h1 className="text-2xl font-serif font-bold text-navy-dark">Platform Settings & Integrations</h1>
        <p className="text-xs text-navy-600 mt-0.5">Configuration status of AI gateways, private S3 storage, and Razorpay APIs.</p>
      </div>

      <div className="space-y-4 text-xs">
        <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-navy-900 font-bold">
            <Key className="h-4 w-4 text-gold" />
            <h3>AI Gateway Configuration</h3>
          </div>
          <p className="text-navy-600">
            Primary provider: <strong>Google Gemini (gemini-1.5-pro)</strong>. Secondary provider: <strong>OpenAI (gpt-4o)</strong>. Resilient rule-based fallback active.
          </p>
        </div>

        <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-navy-900 font-bold">
            <Database className="h-4 w-4 text-gold" />
            <h3>Private S3 Storage & Encryption</h3>
          </div>
          <p className="text-navy-600">
            Bucket: <strong>vs-advisory-private-docs (ap-south-1)</strong>. Pre-signed URL expiration: <strong>900 seconds (15 Mins)</strong>. Server-side encryption: <strong>AES-256</strong>.
          </p>
        </div>

        <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-navy-900 font-bold">
            <ShieldCheck className="h-4 w-4 text-gold" />
            <h3>Payment Gateway & Webhook Security</h3>
          </div>
          <p className="text-navy-600">
            Razorpay merchant account active. HMAC SHA256 cryptographic signature validation enforced for all payment callbacks.
          </p>
        </div>
      </div>
    </div>
  );
}
