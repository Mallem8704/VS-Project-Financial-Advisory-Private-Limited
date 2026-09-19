import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VS Project & Financial Advisory Private Limited | From Business Idea to Bank Sanction",
  description:
    "An AI-powered MSME Project Finance & Business Advisory Platform for Indian entrepreneurs, startups, and growing businesses. End-to-end DPR, CMA data preparation, financial modelling, and bank loan coordination.",
  keywords: [
    "MSME Project Finance",
    "Bank Loan Advisory India",
    "Detailed Project Report",
    "DPR Preparation",
    "CMA Data Form I to VI",
    "MPBF Calculator",
    "CGTMSE Collateral Free Loan",
    "SIDBI Loan Advisory",
    "Term Loan Syndication",
    "Working Capital Advisory",
  ],
  authors: [{ name: "VS Project & Financial Advisory Private Limited" }],
  openGraph: {
    title: "VS Project & Financial Advisory Private Limited",
    description:
      "From Business Idea to Bank Sanction — Everything Under One Roof. Empowering Indian businesses with finance readiness, compliance, and AI.",
    url: "https://vsprojectfinance.in",
    siteName: "VS Project & Financial Advisory",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-warm text-navy-dark font-sans antialiased selection:bg-gold/20 selection:text-navy-900">
        {children}
      </body>
    </html>
  );
}
