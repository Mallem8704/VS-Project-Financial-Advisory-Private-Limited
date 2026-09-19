"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Landmark,
  FileSpreadsheet,
  Building2,
  ShieldCheck,
  ArrowRight,
  User,
  Sparkles,
} from "lucide-react";

interface MegaCategory {
  title: string;
  icon: React.ElementType;
  items: {
    title: string;
    description: string;
    href: string;
  }[];
}

const megaMenuCategories: MegaCategory[] = [
  {
    title: "Finance & Banking",
    icon: Landmark,
    items: [
      {
        title: "Project Finance",
        description: "Term loan syndication & capex funding up to ₹250 Cr",
        href: "/project-finance",
      },
      {
        title: "Bank Loan Assistance",
        description: "PSU & private bank proposal coordination & credit appraisal",
        href: "/services",
      },
      {
        title: "Working Capital Advisory",
        description: "CC/OD limits, letter of credit & bank guarantee structuring",
        href: "/services",
      },
      {
        title: "Loan Documentation",
        description: "Sanction compliance, legal drafting & mortgage vetting",
        href: "/services",
      },
    ],
  },
  {
    title: "Project Reports",
    icon: FileSpreadsheet,
    items: [
      {
        title: "DPR (Detailed Project Report)",
        description: "IBA-compliant 8-chapter bankable project appraisal reports",
        href: "/dpr",
      },
      {
        title: "CMA Data Preparation",
        description: "Form I to VI statements with MPBF calculations & ratio tests",
        href: "/cma",
      },
      {
        title: "Financial Modelling",
        description: "Dynamic multi-year DCF, IRR, sensitivity & break-even models",
        href: "/services",
      },
      {
        title: "Feasibility Studies",
        description: "Techno-Economic Viability (TEV) & market potential audits",
        href: "/services",
      },
    ],
  },
  {
    title: "Business Advisory",
    icon: Building2,
    items: [
      {
        title: "Business Setup",
        description: "Entity structuring, industrial land acquisition & greenfield setup",
        href: "/services",
      },
      {
        title: "MSME Advisory",
        description: "Capacity expansion, unit turnaround & credit enhancement",
        href: "/services",
      },
      {
        title: "Startup Advisory",
        description: "DPIIT registration, seed debt, seed grants & venture debt readiness",
        href: "/services",
      },
      {
        title: "Virtual CFO",
        description: "Strategic treasury, banking relations & MIS reporting",
        href: "/services",
      },
    ],
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    items: [
      {
        title: "GST Advisory & Filings",
        description: "Reconciliations, audit representation & input tax credit audits",
        href: "/services",
      },
      {
        title: "Income Tax & Structuring",
        description: "Corporate tax planning, Section 80IAC & transfer pricing",
        href: "/services",
      },
      {
        title: "Corporate Compliance",
        description: "MCA/ROC annual filings, secretarial audits & board resolutions",
        href: "/services",
      },
      {
        title: "Registrations & Licences",
        description: "Udyam, FSSAI, Pollution Control (PCB) NOC & factory licences",
        href: "/services",
      },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Handle mega menu hover with slight debounce
  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur-md shadow-subtle">
      {/* Top Advisory Notice Bar */}
      <div className="bg-navy-dark px-4 py-1.5 text-xs text-warm-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="flex items-center gap-2 truncate">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold animate-pulse shrink-0" />
            <span className="font-semibold text-gold-light">Primary Mandate:</span>
            <span className="truncate">From Business Idea to Bank Sanction — Everything Under One Roof.</span>
          </p>
          <div className="hidden lg:flex items-center gap-4 text-[11px] text-warm-300 shrink-0">
            <span>Empowering Businesses with Finance, Compliance & AI</span>
            <span>•</span>
            <span className="text-gold-light font-medium">Indicative Advisory Only</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: VS Logo */}
        <div className="flex items-center">
          <Logo showTagline={true} />
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-navy-800"
          aria-label="Main Navigation"
        >
          {/* Services with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              className={`flex items-center gap-1.5 py-2 transition-colors duration-150 focus:outline-none ${
                megaMenuOpen || pathname?.startsWith("/services")
                  ? "text-navy-900 font-bold"
                  : "text-navy-800 hover:text-navy"
              }`}
              aria-expanded={megaMenuOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                className={`h-4 w-4 text-navy-500 transition-transform duration-200 ${
                  megaMenuOpen ? "rotate-180 text-gold-dark" : ""
                }`}
              />
            </button>

            {/* Mega Menu Dropdown Panel */}
            {megaMenuOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[920px] xl:w-[1040px] rounded-2xl border border-border bg-surface shadow-institutional-lg z-50 overflow-hidden animate-slide-up duration-200"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Gold Top Accent Line */}
                <div className="h-1 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

                <div className="p-6 xl:p-8">
                  <div className="grid grid-cols-4 gap-6">
                    {megaMenuCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={category.title} className="space-y-3">
                          {/* Category Header with subtle icon */}
                          <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-navy-50 text-navy-dark border border-navy-100">
                              <IconComponent className="h-3.5 w-3.5 text-gold-dark" />
                            </div>
                            <h3 className="text-xs font-bold text-navy-dark uppercase tracking-wider">
                              {category.title}
                            </h3>
                          </div>

                          {/* Category Items */}
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.title}>
                                <Link
                                  href={item.href}
                                  className="group block rounded-lg p-2 transition-all duration-150 hover:bg-warm-100"
                                >
                                  <p className="text-xs font-bold text-navy-900 group-hover:text-gold-dark transition-colors">
                                    {item.title}
                                  </p>
                                  <p className="text-[11px] text-text-secondary leading-snug line-clamp-2 mt-0.5">
                                    {item.description}
                                  </p>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  {/* Mega Menu Footer Banner */}
                  <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between bg-surface-muted/60 -mx-6 -mb-6 xl:-mx-8 xl:-mb-8 p-4 px-6 xl:px-8">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <Sparkles className="h-3.5 w-3.5 text-gold" />
                      <span>
                        Need custom bank syndication or multi-state DPR preparation?
                      </span>
                    </div>
                    <Link
                      href="/consultation"
                      className="text-xs font-bold text-navy-dark hover:text-gold flex items-center gap-1 transition-colors"
                    >
                      <span>Book Advisory Session</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/project-finance"
            className={`transition-colors duration-150 hover:text-navy ${
              pathname === "/project-finance" ? "text-navy font-bold" : "text-navy-800"
            }`}
          >
            Project Finance
          </Link>

          <Link
            href="/industries"
            className={`transition-colors duration-150 hover:text-navy ${
              pathname === "/industries" ? "text-navy font-bold" : "text-navy-800"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/tools"
            className={`transition-colors duration-150 hover:text-navy ${
              pathname === "/tools" ? "text-navy font-bold" : "text-navy-800"
            }`}
          >
            AI Tools
          </Link>

          <Link
            href="/knowledge"
            className={`transition-colors duration-150 hover:text-navy ${
              pathname === "/knowledge" ? "text-navy font-bold" : "text-navy-800"
            }`}
          >
            Knowledge Centre
          </Link>

          <Link
            href="/about"
            className={`transition-colors duration-150 hover:text-navy ${
              pathname === "/about" ? "text-navy font-bold" : "text-navy-800"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Right: Client Login + Get Finance Ready (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/login"
            className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-bold text-navy-800 hover:text-navy hover:bg-navy-50 transition-all duration-150"
          >
            <User className="h-3.5 w-3.5 text-navy-600" />
            <span>Client Login</span>
          </Link>

          <Link
            href="/finance-readiness"
            className="relative inline-flex items-center justify-center gap-1.5 rounded-lg bg-gold px-4 py-2.5 text-xs font-bold text-navy-dark shadow-sm hover:bg-gold-light hover:shadow-gold-glow active:scale-[0.99] transition-all duration-150"
          >
            <span>Get Finance Ready</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-navy-dark hover:bg-warm-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Responsive Slide-over / Dropdown) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bottom-0 z-50 bg-navy-dark/40 backdrop-blur-xs flex flex-col justify-between">
          <div className="bg-surface border-b border-border shadow-2xl max-h-[85vh] overflow-y-auto p-4 sm:p-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Accordion for Services */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-2.5 text-sm font-bold text-navy-dark border-b border-border-subtle"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-4 w-4 text-navy-500 transition-transform ${
                      mobileServicesOpen ? "rotate-180 text-gold-dark" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-2 space-y-4 pl-2">
                    {megaMenuCategories.map((cat) => (
                      <div key={cat.title} className="space-y-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-gold-dark">
                          {cat.title}
                        </p>
                        <div className="grid grid-cols-1 gap-1">
                          {cat.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="py-1 text-xs font-semibold text-navy-800 hover:text-gold-dark flex items-center justify-between"
                            >
                              <span>{item.title}</span>
                              <ChevronRight className="h-3 w-3 text-navy-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Links */}
              <Link
                href="/project-finance"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold text-navy-dark border-b border-border-subtle hover:text-gold-dark"
              >
                Project Finance
              </Link>

              <Link
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold text-navy-dark border-b border-border-subtle hover:text-gold-dark"
              >
                Industries
              </Link>

              <Link
                href="/tools"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold text-navy-dark border-b border-border-subtle hover:text-gold-dark"
              >
                AI Tools
              </Link>

              <Link
                href="/knowledge"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold text-navy-dark border-b border-border-subtle hover:text-gold-dark"
              >
                Knowledge Centre
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 text-sm font-bold text-navy-dark border-b border-border-subtle hover:text-gold-dark"
              >
                About
              </Link>
            </div>

            {/* Persistent Mobile Actions at Bottom */}
            <div className="mt-8 pt-4 border-t border-border space-y-3">
              <Link
                href="/finance-readiness"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gold py-3 text-sm font-bold text-navy-dark shadow-sm hover:bg-gold-light"
              >
                <span>Get Finance Ready</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-navy bg-navy py-2.5 text-sm font-bold text-white hover:bg-navy-light"
              >
                <User className="h-4 w-4" />
                <span>Client Login</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
