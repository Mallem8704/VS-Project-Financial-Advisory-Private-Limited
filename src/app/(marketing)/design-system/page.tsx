"use client";

import React, { useState } from "react";
import {
  Container,
  Section,
  SectionHeader,
  Button,
  Badge,
  StatusBadge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  PremiumCard,
  FeatureCard,
  MetricCard,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Switch,
  FormLabel,
  Tabs,
  Modal,
  Drawer,
  Tooltip,
  Breadcrumb,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Pagination,
  EmptyState,
  Skeleton,
  SkeletonCard,
  SkeletonText,
  Alert,
  Timeline,
  Stepper,
  ProgressRing,
  PageHeader,
} from "@/components/ui";
import { Logo } from "@/components/brand/Logo";
import {
  FileText,
  ShieldCheck,
  TrendingUp,
  Landmark,
  Calculator,
  ArrowRight,
  Download,
  Plus,
  Trash2,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  Layers,
} from "lucide-react";

export default function DesignSystemShowcasePage() {
  // Interactive state
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [switchState, setSwitchState] = useState(true);
  const [currentPage, setCurrentPage] = useState(2);
  const [currentStep, setCurrentStep] = useState(1);
  const [sampleInputValue, setSampleInputValue] = useState("50,00,000");

  const colorTokens = [
    {
      name: "Navy (Primary)",
      hex: "#062B49",
      bgClass: "bg-navy",
      textClass: "text-white",
      usage: "Primary brand anchor, header bars, authoritative buttons",
      contrast: "14.2:1 (AAA on White)",
    },
    {
      name: "Dark Navy (Surface/Text)",
      hex: "#031A2D",
      bgClass: "bg-navy-dark",
      textClass: "text-white",
      usage: "Primary typography, footer, dark surface panels",
      contrast: "16.8:1 (AAA on White)",
    },
    {
      name: "Gold (Accent)",
      hex: "#C7952D",
      bgClass: "bg-gold",
      textClass: "text-navy-dark",
      usage: "Refined highlights, micro-accents, premium badges (never dominant bg)",
      contrast: "7.1:1 (AAA with Dark Navy)",
    },
    {
      name: "Light Gold (Accent Subtle)",
      hex: "#E3C16F",
      bgClass: "bg-gold-light",
      textClass: "text-navy-dark",
      usage: "Secondary highlights, hover transitions, subtle borders",
      contrast: "9.3:1 (AAA with Dark Navy)",
    },
    {
      name: "Warm White (Background)",
      hex: "#FBFAF7",
      bgClass: "bg-warm border border-border",
      textClass: "text-navy-dark",
      usage: "Main page background, soft institutional warmth",
      contrast: "15.9:1 (with Dark Navy)",
    },
    {
      name: "Surface (Pure White)",
      hex: "#FFFFFF",
      bgClass: "bg-surface border border-border",
      textClass: "text-navy-dark",
      usage: "Card containers, modals, table surfaces",
      contrast: "16.8:1 (with Dark Navy)",
    },
    {
      name: "Surface Muted (Warm 200)",
      hex: "#F4EFE6",
      bgClass: "bg-surface-muted border border-border",
      textClass: "text-navy-dark",
      usage: "Secondary panels, zebra tables, pill tab backgrounds",
      contrast: "13.5:1 (with Dark Navy)",
    },
    {
      name: "Border (Navy Tint)",
      hex: "#DDE9F3",
      bgClass: "bg-border",
      textClass: "text-navy-dark",
      usage: "Dividers, input outlines, institutional grid lines",
      contrast: "3.2:1 (Structural)",
    },
  ];

  const showcaseTabs = [
    { id: "all", label: "Overview & Tokens" },
    { id: "buttons", label: "Buttons & Badges" },
    { id: "forms", label: "Form Controls" },
    { id: "cards", label: "Cards & Metrics" },
    { id: "navigation", label: "Navigation & Process" },
    { id: "overlays", label: "Feedback & Overlays" },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary pb-24">
      {/* Top Banner & Brand Anchor */}
      <div className="border-b border-border bg-surface py-6">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Logo />
              <div className="hidden sm:block h-8 w-px bg-border" />
              <span className="hidden sm:inline-block rounded-md bg-gold/15 px-2.5 py-1 text-xs font-bold text-gold-dark border border-gold/30">
                Visual Design System v1.0
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
              >
                Explore Components
              </Button>
              <Button
                variant="gold"
                size="sm"
                leftIcon={<Sparkles className="h-3.5 w-3.5" />}
                onClick={() => setIsModalOpen(true)}
              >
                Open Demo Modal
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-10">
        <PageHeader
          eyebrow="Institutional FinTech UI System"
          title="VS Visual Design System"
          description="A specialized, accessible design language tailored for Indian MSME project finance, banking syndication, and advisory workflows. Built with strict adherence to Manrope typography, WCAG contrast standards, and subtle gold accents."
          breadcrumbs={[
            { label: "Internal Hub", href: "/" },
            { label: "Design System" },
          ]}
        />

        {/* Section Tabs */}
        <div className="mb-12">
          <Tabs
            items={showcaseTabs}
            activeId={activeTab}
            onChange={setActiveTab}
            variant="pills"
          />
        </div>

        {/* --- TAB 1: OVERVIEW & TOKENS --- */}
        {(activeTab === "all" || activeTab === "tokens") && (
          <div className="space-y-16">
            {/* Color Palette */}
            <div>
              <SectionHeader
                eyebrow="Color Architecture"
                title="Semantic Design Tokens"
                highlight="& Contrast Hierarchy"
                description="Designed for institutional trust. Navy anchors authority, Warm White provides clarity, and Gold is reserved strictly for high-value accents."
                align="left"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {colorTokens.map((token) => (
                  <div
                    key={token.name}
                    className="rounded-xl border border-border bg-surface p-4 shadow-subtle flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`h-16 w-full rounded-lg ${token.bgClass} flex items-center justify-center font-mono text-xs font-bold ${token.textClass} mb-3`}
                      >
                        {token.hex}
                      </div>
                      <h4 className="font-bold text-sm text-navy-dark">{token.name}</h4>
                      <p className="mt-1 text-xs text-text-secondary leading-relaxed">
                        {token.usage}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px]">
                      <span className="text-text-secondary">WCAG Ratio:</span>
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        {token.contrast}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography Scale */}
            <div>
              <SectionHeader
                eyebrow="Typography Architecture"
                title="Manrope UI Standard"
                highlight="with Cormorant Highlights"
                description="Manrope serves as the workhorse for all data, tables, forms, and interfaces. Cormorant Garamond is used selectively for editorial prestige."
                align="left"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Manrope Scale (UI & Numerics)</CardTitle>
                    <CardDescription>Primary typeface for all product workflows</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy-400">Display 32px Extrabold</span>
                      <p className="text-3xl font-extrabold text-navy-dark tracking-tight">
                        ₹ 24,50,00,000 Sanctioned
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy-400">H2 24px Bold</span>
                      <p className="text-2xl font-bold text-navy-dark">
                        Detailed Project Report (DPR)
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy-400">H3 18px Semi-bold</span>
                      <p className="text-lg font-semibold text-navy-dark">
                        Credit Appraisal Maximum Permissible Bank Finance
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase text-navy-400">Body 14px Regular</span>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Evaluates financial ratios including TOL/TNW, Current Ratio (minimum 1.33x per Tandon Committee), and DSCR.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cormorant Garamond (Editorial Accent)</CardTitle>
                    <CardDescription>Used sparingly for prestige and value statements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-gold-dark">Hero Editorial Highlight</span>
                      <p className="font-serif italic text-3xl font-medium text-navy-dark">
                        &ldquo;From Business Idea to Bank Sanction — Everything Under One Roof.&rdquo;
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border-subtle">
                      <span className="text-[10px] font-bold uppercase text-gold-dark">Sub-headline Accent</span>
                      <p className="font-serif text-xl text-gold-dark">
                        Empowering Indian Entrepreneurs with Institutional Rigor & AI.
                      </p>
                    </div>
                    <div className="pt-4 border-t border-border-subtle text-xs text-text-secondary leading-relaxed">
                      * Reserved for hero subheads, testimonials, and milestone congratulatory notes. Never used for table cells or input forms.
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: BUTTONS & BADGES --- */}
        {(activeTab === "all" || activeTab === "buttons") && (
          <div className="space-y-16 mt-16">
            <div>
              <SectionHeader
                eyebrow="Interactive Elements"
                title="Button Hierarchy"
                highlight="& Micro-interactions"
                description="5 standard variants with 150–250ms transitions, accessible focus rings, and reduced-motion fallbacks."
                align="left"
              />

              <Card>
                <div className="space-y-8">
                  {/* Variants */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-4">
                      Button Variants (Medium Size)
                    </h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="navy">Primary Navy</Button>
                      <Button variant="gold" leftIcon={<Sparkles className="h-4 w-4" />}>
                        Premium Gold
                      </Button>
                      <Button variant="outline">Outline Button</Button>
                      <Button variant="ghost">Ghost Button</Button>
                      <Button variant="danger" leftIcon={<Trash2 className="h-4 w-4" />}>
                        Danger Action
                      </Button>
                    </div>
                  </div>

                  {/* Sizes */}
                  <div className="pt-6 border-t border-border-subtle">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-4">
                      Button Sizes
                    </h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="navy" size="xs">Extra Small (xs)</Button>
                      <Button variant="navy" size="sm">Small (sm)</Button>
                      <Button variant="navy" size="md">Medium (md)</Button>
                      <Button variant="navy" size="lg">Large (lg)</Button>
                    </div>
                  </div>

                  {/* States */}
                  <div className="pt-6 border-t border-border-subtle">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-4">
                      Button States
                    </h4>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="navy" isLoading>Loading State</Button>
                      <Button variant="gold" disabled>Disabled Gold</Button>
                      <Button variant="outline" rightIcon={<ArrowRight className="h-4 w-4" />}>
                        Next Step
                      </Button>
                      <Button variant="navy" size="sm" leftIcon={<Download className="h-3.5 w-3.5" />}>
                        Export DPR (PDF)
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Status Badges */}
            <div>
              <SectionHeader
                eyebrow="Financial Workflow Indicators"
                title="Status Badges"
                highlight="& Live Milestone Dots"
                description="Standardized status indicators across the 14-stage MSME finance lifecycle."
                align="left"
              />

              <Card>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-4">
                      Standard Badges
                    </h4>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Badge variant="navy" dot>Institutional</Badge>
                      <Badge variant="gold" dot>Premium Advisory</Badge>
                      <Badge variant="success" dot>Eligible</Badge>
                      <Badge variant="warning" dot>Attention</Badge>
                      <Badge variant="danger" dot>Discrepancy</Badge>
                      <Badge variant="info" dot>Guidance</Badge>
                      <Badge variant="neutral">General</Badge>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border-subtle">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-4">
                      Financial Workflow Status Badges (with Pulsing Indicators)
                    </h4>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <StatusBadge status="DRAFT" />
                      <StatusBadge status="IN_PROGRESS" />
                      <StatusBadge status="SUBMITTED" />
                      <StatusBadge status="UNDER_REVIEW" />
                      <StatusBadge status="QUERY_RAISED" />
                      <StatusBadge status="ACTION_REQUIRED" />
                      <StatusBadge status="SANCTIONED" />
                      <StatusBadge status="DISBURSED" />
                      <StatusBadge status="REJECTED" />
                      <StatusBadge status="CLOSED" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* --- TAB 3: FORM CONTROLS --- */}
        {(activeTab === "all" || activeTab === "forms") && (
          <div className="space-y-16 mt-16">
            <div>
              <SectionHeader
                eyebrow="Data Entry & Calculations"
                title="Accessible Form Fields"
                highlight="& Validation States"
                description="Tailored for financial inputs including INR currency prefixes, helper tooltips, and validation feedback."
                align="left"
              />

              <Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Project Term Loan Requirement"
                    value={sampleInputValue}
                    onChange={(e) => setSampleInputValue(e.target.value)}
                    prefixElement="₹"
                    suffixElement="INR"
                    helper="Enter proposed project debt capital in Indian Rupees."
                    required
                  />

                  <Input
                    label="Corporate PAN / Udyam Number"
                    placeholder="AAACV1234F / UDYAM-MH-00-1234567"
                    error="Invalid Udyam registration format."
                    required
                  />

                  <Select
                    label="Target Banking Sector"
                    options={[
                      { value: "psu", label: "Public Sector Banks (SBI, PNB, BOB)" },
                      { value: "pvt", label: "Private Commercial Banks (HDFC, ICICI, Axis)" },
                      { value: "sidbi", label: "SIDBI / Direct MSME Refinance" },
                      { value: "nbfc", label: "Institutional NBFCs / Growth Debt" },
                    ]}
                    helper="Select primary lending institution archetype."
                  />

                  <Textarea
                    label="Executive Summary & Project Scope"
                    placeholder="Provide brief context on manufacturing capacity, technology, and export potential..."
                    helper="Maximum 500 characters."
                  />

                  <div className="space-y-3">
                    <FormLabel>Compliance & Subsidies Check</FormLabel>
                    <Checkbox
                      label="CGTMSE Collateral-Free Coverage"
                      description="Apply for Credit Guarantee Fund Trust for Micro and Small Enterprises up to ₹5 Cr."
                      defaultChecked
                    />
                    <Checkbox
                      label="Interest Subvention Scheme"
                      description="Eligible for 2% interest subvention under State MSME Industrial Policy."
                    />
                  </div>

                  <div className="space-y-4">
                    <FormLabel>Security Architecture</FormLabel>
                    <Switch
                      checked={switchState}
                      onChange={setSwitchState}
                      label="Two-Factor Banking Verification"
                      description="Require OTP confirmation before exporting finalized CMA or DPR files."
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* --- TAB 4: CARDS & METRICS --- */}
        {(activeTab === "all" || activeTab === "cards") && (
          <div className="space-y-16 mt-16">
            <div>
              <SectionHeader
                eyebrow="Container Primitives"
                title="Institutional Cards"
                highlight="& Metric Visualizers"
                description="Designed for high-density financial information with subtle elevation and gold accents."
                align="left"
              />

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Standard FeatureCard */}
                <FeatureCard
                  icon={<FileText className="h-6 w-6" />}
                  title="DPR Synthesis Engine"
                  description="8-chapter comprehensive Detailed Project Report aligned with Indian Bank Association (IBA) guidelines."
                  badge="AI Powered"
                  href="#"
                />

                {/* PremiumCard Light */}
                <PremiumCard goldAccent="top">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-gold-dark uppercase tracking-wider">
                      CMA Model
                    </span>
                    <Badge variant="gold">Form I to VI</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-navy-dark">Operating Statement & Balance Sheet</h3>
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed">
                    Automated 7-year projection with sensitivity analysis on raw material inflation and capacity utilization.
                  </p>
                  <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-xs font-semibold text-navy-dark">TOL/TNW: 1.85x</span>
                    <span className="text-xs font-bold text-emerald-700">Within Norms</span>
                  </div>
                </PremiumCard>

                {/* PremiumCard Navy */}
                <PremiumCard variant="navy" goldAccent="border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-gold uppercase tracking-wider">
                      Bank Syndication
                    </span>
                    <Sparkles className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Direct Sanction Tracking</h3>
                  <p className="mt-2 text-xs text-navy-200 leading-relaxed">
                    Real-time coordination with Zonal & Branch credit committees with audit trails for every query raised.
                  </p>
                  <div className="mt-6">
                    <Button variant="gold" size="sm" className="w-full">
                      Launch Workbench
                    </Button>
                  </div>
                </PremiumCard>
              </div>

              {/* Metric Cards Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                  label="Average DSCR"
                  value="1.48x"
                  unit="(5 Yr Avg)"
                  trend={{ value: "+0.12x", direction: "up", label: "vs IBA Benchmark (1.33x)" }}
                  icon={<Calculator className="h-4 w-4" />}
                />
                <MetricCard
                  label="Sanctions Portfolio"
                  value="₹ 142.8"
                  unit="Cr"
                  trend={{ value: "+18.4%", direction: "up", label: "YoY growth" }}
                  icon={<Landmark className="h-4 w-4" />}
                />
                <MetricCard
                  label="Audit Readiness"
                  value="94%"
                  progress={94}
                  icon={<ShieldCheck className="h-4 w-4" />}
                />
                <MetricCard
                  label="Avg Turnaround"
                  value="18"
                  unit="Days"
                  trend={{ value: "-4.5 days", direction: "up", label: "Faster sanction" }}
                  icon={<TrendingUp className="h-4 w-4" />}
                />
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 5: NAVIGATION & PROCESS --- */}
        {(activeTab === "all" || activeTab === "navigation") && (
          <div className="space-y-16 mt-16">
            <div>
              <SectionHeader
                eyebrow="Workflow & Progression"
                title="Process Timelines"
                highlight="& Stepper Controls"
                description="Visualizing the 14-stage journey from business idea to post-sanction disbursement."
                align="left"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Stepper */}
                <Card>
                  <CardHeader>
                    <CardTitle>Application Stepper</CardTitle>
                    <CardDescription>Multi-step progress indicator</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Stepper
                      steps={[
                        { id: "step1", title: "Idea & Feasibility", description: "TEV Study" },
                        { id: "step2", title: "DPR & CMA", description: "Financial Model" },
                        { id: "step3", title: "Bank Submission", description: "Query Resolution" },
                        { id: "step4", title: "Sanction", description: "Documentation" },
                      ]}
                      currentStep={currentStep}
                      onStepClick={setCurrentStep}
                    />

                    <div className="flex items-center justify-between pt-6 border-t border-border-subtle">
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={currentStep === 0}
                        onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                      >
                        Previous Step
                      </Button>
                      <Button
                        variant="navy"
                        size="sm"
                        disabled={currentStep === 3}
                        onClick={() => setCurrentStep((prev) => Math.min(3, prev + 1))}
                      >
                        Next Step
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Progress Ring & Timeline */}
                <Card>
                  <CardHeader>
                    <CardTitle>Milestone Timeline & Progress Ring</CardTitle>
                    <CardDescription>Live tracking of project deliverables</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-6 p-4 rounded-xl bg-surface-muted border border-border">
                      <ProgressRing progress={68} size="md" variant="gold" />
                      <div>
                        <h4 className="font-bold text-sm text-navy-dark">Overall DPR Progress</h4>
                        <p className="text-xs text-text-secondary mt-0.5">
                          6 of 8 Chapters drafted and verified with market data.
                        </p>
                      </div>
                    </div>

                    <Timeline
                      items={[
                        {
                          id: "t1",
                          title: "Techno-Economic Feasibility Approved",
                          description: "Land, power, and environmental NOC criteria confirmed.",
                          date: "12 Jan 2024",
                          status: "completed",
                        },
                        {
                          id: "t2",
                          title: "CMA Data Form I-VI Generated",
                          description: "Working capital MPBF calculated per Tandon Method II.",
                          date: "18 Jan 2024",
                          status: "completed",
                        },
                        {
                          id: "t3",
                          title: "Bank Credit Committee Review",
                          description: "Under active appraisal by Zonal Credit Department.",
                          date: "Current Stage",
                          status: "current",
                          badge: "Active",
                        },
                        {
                          id: "t4",
                          title: "Sanction Letter Issuance",
                          description: "Final terms, interest spread, and margin requirement.",
                          date: "Estimated 5 Days",
                          status: "upcoming",
                        },
                      ]}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Table & Data Display */}
            <div>
              <SectionHeader
                eyebrow="Data Display"
                title="Financial Table & Pagination"
                highlight="with Numeric Monospace"
                description="High-density, structured financial tables with aligned headers and pagination."
                align="left"
              />

              <div className="space-y-4">
                <Table>
                  <TableHeader>
                    <TableRow hover={false}>
                      <TableHead>Financial Metric</TableHead>
                      <TableHead>FY24 (A)</TableHead>
                      <TableHead>FY25 (P)</TableHead>
                      <TableHead>FY26 (P)</TableHead>
                      <TableHead align="right">Benchmark</TableHead>
                      <TableHead align="right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-bold">Net Sales Turnover</TableCell>
                      <TableCell>₹ 18.40 Cr</TableCell>
                      <TableCell>₹ 24.50 Cr</TableCell>
                      <TableCell>₹ 32.80 Cr</TableCell>
                      <TableCell align="right">+25% YoY</TableCell>
                      <TableCell align="right">
                        <Badge variant="success">Strong</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">Operating EBIDTA Margin</TableCell>
                      <TableCell>14.2%</TableCell>
                      <TableCell>15.8%</TableCell>
                      <TableCell>16.2%</TableCell>
                      <TableCell align="right">&gt; 12.0%</TableCell>
                      <TableCell align="right">
                        <Badge variant="success">Compliant</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">Debt Service Coverage (DSCR)</TableCell>
                      <TableCell>1.38x</TableCell>
                      <TableCell>1.46x</TableCell>
                      <TableCell>1.52x</TableCell>
                      <TableCell align="right">&gt; 1.33x</TableCell>
                      <TableCell align="right">
                        <Badge variant="gold">Optimal</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-bold">Current Ratio</TableCell>
                      <TableCell>1.28x</TableCell>
                      <TableCell>1.34x</TableCell>
                      <TableCell>1.40x</TableCell>
                      <TableCell align="right">&gt; 1.33x</TableCell>
                      <TableCell align="right">
                        <Badge variant="warning">Monitor</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <Pagination
                  currentPage={currentPage}
                  totalPages={5}
                  totalItems={48}
                  pageSize={10}
                  onPageChange={setCurrentPage}
                />
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 6: FEEDBACK & OVERLAYS --- */}
        {(activeTab === "all" || activeTab === "overlays") && (
          <div className="space-y-16 mt-16">
            <div>
              <SectionHeader
                eyebrow="Alerts & Dialogs"
                title="Feedback & Overlays"
                highlight="with High WCAG Contrast"
                description="Notice alerts, banking tooltips, modal dialogs, and slide-over drawers."
                align="left"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Alerts */}
                <div className="space-y-3">
                  <Alert variant="info" title="Statutory Regulatory Disclosure">
                    Indicative eligibility assessment only. VS Project & Financial Advisory does not guarantee bank sanction or funding. Sanction is at the sole discretion of the lending bank.
                  </Alert>

                  <Alert variant="success" title="CMA Form VI Generated">
                    All ratio tests satisfy IBA guidelines. Ready for submission to the branch credit committee.
                  </Alert>

                  <Alert variant="warning" title="Document Expiry Notice">
                    GST 3B filing for Q3 is due in 4 days. Please upload to prevent processing delays.
                  </Alert>

                  <Alert variant="error" title="Audited Financial Discrepancy">
                    Net profit reported in Schedule III does not match Form 26AS TDS credits.
                  </Alert>
                </div>

                {/* Overlays & Interactive Triggers */}
                <Card>
                  <CardHeader>
                    <CardTitle>Overlays & Banking Tooltips</CardTitle>
                    <CardDescription>Interactive dialogs and glossary hints</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Button variant="navy" onClick={() => setIsModalOpen(true)}>
                        Launch Demo Modal
                      </Button>
                      <Button variant="outline" onClick={() => setIsDrawerOpen(true)}>
                        Open Slide-over Drawer
                      </Button>
                    </div>

                    <div className="pt-4 border-t border-border-subtle">
                      <p className="text-xs text-text-secondary leading-relaxed">
                        Hover over banking terms for contextual definitions:
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <Tooltip
                          content="Debt Service Coverage Ratio: Measures available operating cash flow to pay debt obligations (Principal + Interest). Minimum 1.33x required."
                        >
                          <span className="inline-flex items-center gap-1 rounded border border-dashed border-navy-300 bg-warm-100 px-2.5 py-1 text-xs font-bold text-navy-dark cursor-help">
                            <span>What is DSCR?</span>
                            <HelpCircle className="h-3.5 w-3.5 text-gold-dark" />
                          </span>
                        </Tooltip>

                        <Tooltip
                          content="Maximum Permissible Bank Finance: Formulated by the Tandon Committee to determine working capital limits based on current assets and liabilities."
                        >
                          <span className="inline-flex items-center gap-1 rounded border border-dashed border-navy-300 bg-warm-100 px-2.5 py-1 text-xs font-bold text-navy-dark cursor-help">
                            <span>What is MPBF?</span>
                            <HelpCircle className="h-3.5 w-3.5 text-gold-dark" />
                          </span>
                        </Tooltip>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Skeletons & Empty State */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-3">
                    Skeleton Shimmer Loaders
                  </h4>
                  <SkeletonCard />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-3">
                    Empty State Pattern
                  </h4>
                  <EmptyState
                    title="No Sanction Queries Pending"
                    description="The bank credit committee has not raised any technical queries for this project file."
                    action={
                      <Button variant="navy" size="sm">
                        View Project Timeline
                      </Button>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>

      {/* Demo Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="DPR Synthesis Configuration"
        description="Verify project parameters before triggering automated chapter generation."
        footer={
          <>
            <Button variant="outline" size="sm" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="gold"
              size="sm"
              leftIcon={<Sparkles className="h-3.5 w-3.5" />}
              onClick={() => {
                alert("DPR synthesis triggered!");
                setIsModalOpen(false);
              }}
            >
              Generate DPR Chapters
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input label="Project Title" defaultValue="Apex Precision Green Energy Expansion" />
          <Select
            label="Industry Sector"
            options={[
              { value: "mfg", label: "Precision Engineering & Manufacturing" },
              { value: "solar", label: "Renewable Solar Infrastructure" },
              { value: "pharma", label: "Active Pharmaceutical Ingredients (API)" },
            ]}
          />
          <Alert variant="info">
            Chapter drafting takes approximately 45–60 seconds. You will be notified once the full 8 chapters are ready for review.
          </Alert>
        </div>
      </Modal>

      {/* Demo Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Project Finance Checklist"
        description="Mandatory documentation for bank syndicate submission."
        footer={
          <Button variant="navy" size="sm" className="w-full" onClick={() => setIsDrawerOpen(false)}>
            Close Checklist
          </Button>
        }
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <Checkbox label="3 Years Audited Financials & Tax Audit" defaultChecked />
            <Checkbox label="Provisional Balance Sheet for Current FY" defaultChecked />
            <Checkbox label="GST Returns (GSTR-1 & GSTR-3B for 12 Months)" defaultChecked />
            <Checkbox label="Bank Statements for all accounts (12 Months)" defaultChecked />
            <Checkbox label="Pollution Control Board NOC / Consent to Establish" />
            <Checkbox label="Sanctioned Building Plan & Industrial Layout" />
            <Checkbox label="Quotations for Indigenous / Imported Plant & Machinery" />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
