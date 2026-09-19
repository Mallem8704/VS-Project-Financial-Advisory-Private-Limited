import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  ShieldAlert,
} from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "14-Stage Journey", href: "/#journey" },
        { label: "Advisory Team", href: "/about#team" },
        { label: "Careers", href: "/about#careers" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Project Finance", href: "/project-finance" },
        { label: "DPR Preparation", href: "/dpr" },
        { label: "CMA Data (Form I-VI)", href: "/cma" },
        { label: "Financial Modelling", href: "/services" },
        { label: "MSME Advisory", href: "/services" },
        { label: "Compliance & Registrations", href: "/services" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Manufacturing & Engineering", href: "/industries" },
        { label: "Infrastructure & Energy", href: "/industries" },
        { label: "Solar & Renewable", href: "/industries" },
        { label: "Healthcare & Pharma", href: "/industries" },
        { label: "Agro & Food Processing", href: "/industries" },
        { label: "IT & Services", href: "/industries" },
      ],
    },
    {
      title: "Tools",
      links: [
        { label: "Finance Readiness Score", href: "/finance-readiness" },
        { label: "MPBF Calculator", href: "/tools" },
        { label: "DSCR Calculator", href: "/tools" },
        { label: "Term Loan EMI", href: "/tools" },
        { label: "Working Capital Assessment", href: "/tools" },
      ],
    },
    {
      title: "Knowledge",
      links: [
        { label: "RBI Master Directions", href: "/knowledge" },
        { label: "MSME Schemes & Subsidies", href: "/knowledge" },
        { label: "Bank Appraisal Guidelines", href: "/knowledge" },
        { label: "Case Studies", href: "/knowledge" },
        { label: "Advisory FAQs", href: "/knowledge" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Client Portal", href: "/portal/dashboard" },
        { label: "Helpdesk & Tickets", href: "/portal/tickets" },
        { label: "Book Consultation", href: "/consultation" },
        { label: "Query Resolution", href: "/portal/messages" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Engagement", href: "/terms" },
        { label: "Regulatory Disclaimer", href: "/disclaimer" },
        { label: "Refund Policy", href: "/refund-policy" },
        { label: "Cookie Policy", href: "/cookie-policy" },
      ],
    },
  ];

  return (
    <footer className="border-t border-navy-800 bg-navy-dark text-warm-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Brand & Corporate Header */}
        <div className="pb-12 border-b border-navy-800 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <Logo variant="light" showTagline={false} />
            <h2 className="text-sm font-bold text-white tracking-wide">
              VS Project & Financial Advisory Private Limited
            </h2>
            <p className="font-serif italic text-base text-gold-light">
              &ldquo;From Business Idea to Bank Sanction — Everything Under One Roof.&rdquo;
            </p>
            <p className="text-xs text-warm-300 leading-relaxed">
              Empowering Indian MSMEs, startups, and growing enterprises with institutional project finance, credit appraisal modelling, DPR synthesis, and bank coordination.
            </p>
          </div>

          {/* Contact & Social Placeholders */}
          <div className="space-y-4 text-xs text-warm-300 lg:text-right">
            <div className="space-y-2 lg:ml-auto">
              <p className="flex items-center gap-2 lg:justify-end">
                <MapPin className="h-4 w-4 text-gold shrink-0" />
                <span>BKC, Mumbai • Connaught Place, New Delhi, India</span>
              </p>
              <p className="flex items-center gap-2 lg:justify-end">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <a href="mailto:advisory@vsprojectfinance.in" className="hover:text-gold transition-colors">
                  advisory@vsprojectfinance.in
                </a>
              </p>
              <p className="flex items-center gap-2 lg:justify-end">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <span>+91 (022) 4987-6500 / +91 98765 43210</span>
              </p>
            </div>

            {/* Social Placeholders */}
            <div className="flex items-center gap-3 pt-2 lg:justify-end">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-warm-300 hover:bg-gold/20 hover:text-gold transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-warm-300 hover:bg-gold/20 hover:text-gold transition-all"
                aria-label="Twitter/X Profile"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-warm-300 hover:bg-gold/20 hover:text-gold transition-all"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 7-Column Navigation Grid */}
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold-light">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xs text-warm-300">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-gold transition-colors duration-150 block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mandatory Regulatory Disclaimer Box */}
        <div className="rounded-xl border border-gold/30 bg-navy/60 p-4 sm:p-5 text-xs text-warm-300 space-y-2">
          <div className="flex items-center gap-2 text-gold-light font-bold text-xs">
            <ShieldAlert className="h-4 w-4 text-gold shrink-0" />
            <span>MANDATORY STATUTORY & REGULATORY DISCLAIMER</span>
          </div>
          <p className="leading-relaxed text-[11px] text-warm-300">
            &ldquo;Loan approval and sanction are solely at the discretion of the respective bank or financial institution. VS Project & Financial Advisory provides advisory, documentation and facilitation services and does not guarantee sanction.&rdquo;
          </p>
          <p className="leading-relaxed text-[10px] text-warm-400">
            VS Project & Financial Advisory Private Limited acts strictly as an independent management, financial modelling, and project preparation advisory firm. We are not a bank, NBFC, or direct lender. All loan metrics, eligibility criteria, and benchmark outputs provided on this website and our digital tools are indicative and subject to individual lender underwriting norms.
          </p>
        </div>

        {/* Bottom Bar with Copyright & Quick Legal */}
        <div className="mt-8 pt-6 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between text-[11px] text-warm-400 gap-4">
          <p>
            © {new Date().getFullYear()} VS Project & Financial Advisory Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms of Engagement
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-gold transition-colors">
              Disclaimer
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-gold transition-colors">
              Refund Policy
            </Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-gold transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
