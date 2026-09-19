import React from "react";
import { Navbar } from "@/components/brand/Navbar";
import { Footer } from "@/components/brand/Footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-warm text-navy-dark">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
