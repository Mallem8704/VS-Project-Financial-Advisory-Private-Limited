// =============================================================================
// VS Project & Financial Advisory — Finance Readiness Score V1
// Seeded CMS/Database-Ready Question Bank (28 Questions Across 9 Categories)
// =============================================================================

import { AssessmentCategoryDef } from "./types";

export const ASSESSMENT_CATEGORIES: AssessmentCategoryDef[] = [
  // ---------------------------------------------------------------------------
  // 1. BUSINESS PROFILE — 10%
  // ---------------------------------------------------------------------------
  {
    id: "cat-1",
    slug: "business-profile",
    name: "Business Profile",
    weight: 0.1, // 10%
    orderIndex: 1,
    description: "Evaluates business constitution, legal structure, and operating vintage.",
    questions: [
      {
        id: "q-biz-constitution",
        questionKey: "biz_constitution",
        categoryId: "cat-1",
        categorySlug: "business-profile",
        questionText: "What is the legal constitution of your business?",
        helpText: "Banks evaluate corporate entities (Pvt Ltd / LLP) with standardized statutory governance more favorably for larger credit facilities.",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 1.0,
        options: [
          {
            label: "Private Limited Company / Public Limited",
            value: "PVT_LTD",
            score: 100,
            strengthTag: "Formal corporate constitution with perpetual succession and MCA disclosures.",
          },
          {
            label: "Limited Liability Partnership (LLP)",
            value: "LLP",
            score: 85,
            strengthTag: "Organized partnership structure with legal entity status.",
          },
          {
            label: "Registered Partnership Firm",
            value: "PARTNERSHIP",
            score: 65,
            weaknessTag: "Partnership liability structure may require comprehensive personal guarantees.",
          },
          {
            label: "Sole Proprietorship",
            value: "PROPRIETORSHIP",
            score: 50,
            weaknessTag: "Proprietorship lacks distinct corporate identity, limiting debt scalability.",
            recommendationTag: "Consider corporatization to Pvt Ltd / LLP to unlock higher institutional credit limits.",
          },
        ],
      },
      {
        id: "q-biz-vintage",
        questionKey: "biz_vintage",
        categoryId: "cat-1",
        categorySlug: "business-profile",
        questionText: "How many completed years has the business been operating commercially?",
        helpText: "Most commercial banks mandate a minimum 2–3 year operational track record for unsecured lending.",
        type: "SINGLE_CHOICE",
        orderIndex: 2,
        isRequired: true,
        weight: 1.2,
        options: [
          {
            label: "5 years or more",
            value: "5_PLUS",
            score: 100,
            strengthTag: "Mature business vintage (> 5 years) satisfying prime banking norms.",
          },
          {
            label: "3 to 4 years",
            value: "3_TO_4",
            score: 80,
            strengthTag: "Established 3+ year track record for commercial banking appraisal.",
          },
          {
            label: "1 to 2 years",
            value: "1_TO_2",
            score: 55,
            weaknessTag: "Relatively young vintage (1-2 years); may face tightened collateral norms.",
            recommendationTag: "Bolster application with promoter background dossiers to compensate for young vintage.",
          },
          {
            label: "Less than 1 year / Greenfield startup",
            value: "LESS_THAN_1",
            score: 30,
            flagMissing: true,
            missingItemLabel: "Multi-year operating financials",
            weaknessTag: "Greenfield vintage; mainstream commercial bank term loans may require credit guarantee backing.",
            recommendationTag: "Focus on greenfield project finance frameworks such as CGTMSE, Stand-Up India, or SIDBI startup schemes.",
          },
        ],
      },
      {
        id: "q-biz-sector",
        questionKey: "biz_sector",
        categoryId: "cat-1",
        categorySlug: "business-profile",
        questionText: "What is your primary industry sector?",
        helpText: "Priority Sector Lending (PSL) sectors like Agriculture, MSME manufacturing, and Renewable Energy receive regulatory lending targets.",
        type: "SINGLE_CHOICE",
        orderIndex: 3,
        isRequired: true,
        weight: 0.8,
        options: [
          {
            label: "Manufacturing / Industrial Production",
            value: "MANUFACTURING",
            score: 95,
            strengthTag: "Core manufacturing qualifies for Priority Sector Lending (PSL) MSME targets.",
          },
          {
            label: "Agro-Processing / Food Processing / Cold Storage",
            value: "AGRO_FOOD",
            score: 100,
            strengthTag: "Eligible for specialized NABARD, MoFPI, and Agriculture Infrastructure Fund schemes.",
          },
          {
            label: "Renewable Energy / EV Infrastructure",
            value: "RENEWABLE_EV",
            score: 95,
            strengthTag: "High-priority green infrastructure transition sector for commercial banks.",
          },
          {
            label: "Healthcare / Education Infrastructure",
            value: "HEALTH_EDU",
            score: 90,
            strengthTag: "Social infrastructure asset class with stable long-term cash flow profile.",
          },
          {
            label: "Services / IT / Logistics / Trade",
            value: "SERVICES_TRADE",
            score: 80,
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. PROMOTER PROFILE — 10%
  // ---------------------------------------------------------------------------
  {
    id: "cat-2",
    slug: "promoter-profile",
    name: "Promoter Profile",
    weight: 0.1, // 10%
    orderIndex: 2,
    description: "Evaluates promoter credit score, industry track record, and integrity background.",
    questions: [
      {
        id: "q-promoter-cibil",
        questionKey: "promoter_cibil",
        categoryId: "cat-2",
        categorySlug: "promoter-profile",
        questionText: "What is the primary promoter's approximate CIBIL / Experian credit score?",
        helpText: "Credit bureaus score individuals from 300 to 900. Underwriters generally require 700+ for institutional credit.",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 1.5,
        options: [
          {
            label: "750 and above (Excellent)",
            value: "750_PLUS",
            score: 100,
            strengthTag: "Prime bureau credit score (750+) reflecting disciplined personal debt conduct.",
          },
          {
            label: "700 to 749 (Good)",
            value: "700_749",
            score: 80,
            strengthTag: "Satisfactory credit score meeting standard bank appraisal cutoff.",
          },
          {
            label: "650 to 699 (Fair / Moderate)",
            value: "650_699",
            score: 50,
            weaknessTag: "Marginal credit score (650–699); lenders may apply higher interest margins or collateral requirements.",
            recommendationTag: "Rectify overdue credit lines and maintain 100% timely repayment on personal cards/loans.",
          },
          {
            label: "Below 650 (Adverse credit history)",
            value: "BELOW_650",
            score: 15,
            flagMissing: true,
            missingItemLabel: "CIBIL report cleanup / dispute resolution",
            weaknessTag: "Sub-par CIBIL score (<650) triggers immediate caution from underwriting algorithms.",
            recommendationTag: "Conduct detailed CIBIL analysis, clear written-off accounts, and remove clerical reporting errors.",
          },
          {
            label: "No credit history (New to Credit / -1)",
            value: "NEW_TO_CREDIT",
            score: 60,
            weaknessTag: "Absence of formal bureau track record requires asset-backed underwriting.",
          },
        ],
      },
      {
        id: "q-promoter-experience",
        questionKey: "promoter_experience",
        categoryId: "cat-2",
        categorySlug: "promoter-profile",
        questionText: "How many years of relevant domain experience do the key promoters hold in this industry?",
        helpText: "Bank credit committees place heavy weight on managerial competence and proven sector technical knowledge.",
        type: "SINGLE_CHOICE",
        orderIndex: 2,
        isRequired: true,
        weight: 1.0,
        options: [
          {
            label: "More than 7 years of deep domain experience",
            value: "7_PLUS",
            score: 100,
            strengthTag: "Extensive managerial and domain track record (> 7 years).",
          },
          {
            label: "3 to 7 years of industry experience",
            value: "3_TO_7",
            score: 80,
            strengthTag: "Adequate industry experience to manage operations and market linkages.",
          },
          {
            label: "1 to 3 years of experience",
            value: "1_TO_3",
            score: 55,
            weaknessTag: "Moderate promoter track record in the specific business segment.",
          },
          {
            label: "First-time entrepreneur / New industry sector",
            value: "FIRST_TIME",
            score: 35,
            weaknessTag: "Lack of direct sector background increases perceived execution risk.",
            recommendationTag: "Strengthen team credibility with senior technical advisors or industry veteran directors.",
          },
        ],
      },
      {
        id: "q-promoter-defaults",
        questionKey: "promoter_prior_defaults",
        categoryId: "cat-2",
        categorySlug: "promoter-profile",
        questionText: "Is there any history of loan defaults, settlements, or SMA-2 classification in any promoter accounts?",
        helpText: "Wilful default or past OTS (One Time Settlement) entries are major red flags across all institutional lenders.",
        type: "YES_NO",
        orderIndex: 3,
        isRequired: true,
        weight: 1.2,
        options: [
          {
            label: "No — Clean track record without any write-offs, settlements, or defaults",
            value: "NO",
            score: 100,
            strengthTag: "Impeccable promoter credit standing with zero historical write-offs or defaults.",
          },
          {
            label: "Yes — There are past settled accounts, write-offs, or default notices",
            value: "YES",
            score: 10,
            flagMissing: true,
            missingItemLabel: "NOC & settlement clearance certificates from previous lenders",
            weaknessTag: "Historical settlement or default entries will trigger negative automated filters at banks.",
            recommendationTag: "Obtain clean No Due Certificates (NDC) and prepare written narrative justifying past stress events.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. BUSINESS PERFORMANCE — 15%
  // ---------------------------------------------------------------------------
  {
    id: "cat-3",
    slug: "business-performance",
    name: "Business Performance",
    weight: 0.15, // 15%
    orderIndex: 3,
    description: "Evaluates annual turnover scale, revenue growth trajectories, and operational capacity.",
    questions: [
      {
        id: "q-perf-turnover",
        questionKey: "perf_annual_turnover",
        categoryId: "cat-3",
        categorySlug: "business-performance",
        questionText: "What was your approximate Annual Gross Turnover (in ₹ Lakhs) in the latest financial year?",
        helpText: "Lenders benchmark working capital credit limits as a percentage of verified annual sales (Turnover Method / Tandon MPBF).",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 1.2,
        options: [
          {
            label: "Above ₹25 Crores (₹2,500+ Lakhs)",
            value: "ABOVE_2500",
            score: 100,
            strengthTag: "Large operating revenue scale (> ₹25 Cr) unlocking syndicated and consortium credit.",
          },
          {
            label: "₹5 Crores to ₹25 Crores (₹500 to ₹2,500 Lakhs)",
            value: "500_TO_2500",
            score: 90,
            strengthTag: "Solid SME operating turnover scale eligible for mid-market corporate banking.",
          },
          {
            label: "₹1 Crore to ₹5 Crores (₹100 to ₹500 Lakhs)",
            value: "100_TO_500",
            score: 75,
            strengthTag: "Established micro/small enterprise revenue profile.",
          },
          {
            label: "₹25 Lakhs to ₹1 Crore (₹25 to ₹100 Lakhs)",
            value: "25_TO_100",
            score: 55,
            weaknessTag: "Modest revenue scale; limits maximum fund-based facility sizes.",
          },
          {
            label: "Below ₹25 Lakhs / Pre-revenue",
            value: "BELOW_25",
            score: 30,
            weaknessTag: "Pre-revenue or micro turnover base requiring startup-specific or MUDRA frameworks.",
          },
        ],
      },
      {
        id: "q-perf-revenue-trend",
        questionKey: "perf_revenue_trend",
        categoryId: "cat-3",
        categorySlug: "business-performance",
        questionText: "What has been your top-line revenue trend over the past 2–3 financial years?",
        helpText: "Underwriters look for consistent Year-on-Year growth as evidence of product-market acceptance.",
        type: "SINGLE_CHOICE",
        orderIndex: 2,
        isRequired: true,
        weight: 1.0,
        options: [
          {
            label: "Consistent strong growth (> 15% annual growth)",
            value: "STRONG_GROWTH",
            score: 100,
            strengthTag: "High top-line momentum (>15% CAGR) proving expanding market demand.",
          },
          {
            label: "Moderate steady growth (5% to 15% annual growth)",
            value: "MODERATE_GROWTH",
            score: 80,
            strengthTag: "Stable and predictable business revenue trajectory.",
          },
          {
            label: "Flat / Stagnant sales (fluctuations within ±5%)",
            value: "FLAT",
            score: 50,
            weaknessTag: "Flat revenue trajectory may raise questions on future debt absorption capacity.",
          },
          {
            label: "Declining revenues over recent years",
            value: "DECLINING",
            score: 20,
            weaknessTag: "Decline in top-line revenue indicates contracting demand or competitive pressure.",
            recommendationTag: "Prepare turnaround strategy narrative and substantiate order pipeline in CMA projections.",
          },
        ],
      },
      {
        id: "q-perf-order-pipeline",
        questionKey: "perf_order_pipeline",
        categoryId: "cat-3",
        categorySlug: "business-performance",
        questionText: "What is your current order book or confirmed revenue pipeline visibility?",
        helpText: "Confirmed purchase orders, work contracts, or multi-year client agreements provide credit comfort.",
        type: "SINGLE_CHOICE",
        orderIndex: 3,
        isRequired: true,
        weight: 0.8,
        options: [
          {
            label: "Substantial confirmed order book / long-term client contracts (> 6 months visibility)",
            value: "STRONG_PIPELINE",
            score: 100,
            strengthTag: "Healthy confirmed order book securing future operational cash flows.",
          },
          {
            label: "Moderate pipeline (2 to 6 months visibility)",
            value: "MODERATE_PIPELINE",
            score: 75,
          },
          {
            label: "Short cycle / spot market sales (less than 2 months visibility)",
            value: "SHORT_CYCLE",
            score: 55,
          },
          {
            label: "Early stage / no confirmed orders yet",
            value: "NO_ORDERS",
            score: 30,
            weaknessTag: "Absence of forward demand visibility increases cash flow volatility.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. FINANCIAL STRENGTH — 20%
  // ---------------------------------------------------------------------------
  {
    id: "cat-4",
    slug: "financial-strength",
    name: "Financial Strength",
    weight: 0.2, // 20%
    orderIndex: 4,
    description: "Assesses net profit margins, existing leverage, liquidity ratios, and audited accounts.",
    questions: [
      {
        id: "q-fin-profit-margin",
        questionKey: "fin_profit_margin",
        categoryId: "cat-4",
        categorySlug: "financial-strength",
        questionText: "What is your approximate Net Profit After Tax (PAT) margin?",
        helpText: "Net profit margin directly drives your Debt Service Coverage Ratio (DSCR) to repay principal and interest.",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 1.3,
        options: [
          {
            label: "High Margin: Above 10% net profit margin",
            value: "ABOVE_10",
            score: 100,
            strengthTag: "Superior profitability (>10% PAT margin) providing robust debt servicing cushion.",
          },
          {
            label: "Healthy Margin: 5% to 10% net profit margin",
            value: "5_TO_10",
            score: 80,
            strengthTag: "Healthy operating margins aligned with commercial banking benchmarks.",
          },
          {
            label: "Thin Margin: 2% to 5% net profit margin",
            value: "2_TO_5",
            score: 55,
            weaknessTag: "Thin margins (2-5%) leave little room for interest rate shocks or cost escalations.",
          },
          {
            label: "Breakeven or Net Operating Loss",
            value: "LOSS",
            score: 15,
            flagMissing: true,
            missingItemLabel: "Operating profit stabilization",
            weaknessTag: "Operating losses trigger immediate DSCR covenant failure in bank appraisal models.",
            recommendationTag: "Restructure cost heads and model positive EBITDA before approaching commercial lenders.",
          },
        ],
      },
      {
        id: "q-fin-existing-leverage",
        questionKey: "fin_existing_leverage",
        categoryId: "cat-4",
        categorySlug: "financial-strength",
        questionText: "What is your existing Total Debt relative to Net Worth (TOL/TNW or Debt-to-Equity)?",
        helpText: "Lenders look for TOL/TNW below 3.0x (and preferably below 2.0x) to ensure the business is not overleveraged.",
        type: "SINGLE_CHOICE",
        orderIndex: 2,
        isRequired: true,
        weight: 1.2,
        options: [
          {
            label: "Low Debt: Debt-to-Equity is below 1.5x (or completely debt-free)",
            value: "LOW_DEBT",
            score: 100,
            strengthTag: "Conservative leverage (< 1.5x) with substantial unencumbered borrowing headroom.",
          },
          {
            label: "Moderate Debt: Debt-to-Equity is between 1.5x and 3.0x",
            value: "MODERATE_DEBT",
            score: 75,
            strengthTag: "Acceptable debt gearing within general banking appraisal covenants.",
          },
          {
            label: "High Debt: Debt-to-Equity is between 3.0x and 5.0x",
            value: "HIGH_DEBT",
            score: 45,
            weaknessTag: "Elevated leverage (> 3.0x) will trigger promoter equity infusion conditions.",
            recommendationTag: "Subordinate unsecured promoter loans or infuse quasi-equity to improve net worth.",
          },
          {
            label: "Overleveraged / Negative Net Worth",
            value: "OVERLEVERAGED",
            score: 15,
            flagMissing: true,
            missingItemLabel: "Equity infusion / balance sheet deleveraging",
            weaknessTag: "Negative net worth or extreme gearing prevents standard debt sanctions.",
            recommendationTag: "Undertake capital restructuring and equity infusion prior to debt applications.",
          },
        ],
      },
      {
        id: "q-fin-current-ratio",
        questionKey: "fin_current_ratio",
        categoryId: "cat-4",
        categorySlug: "financial-strength",
        questionText: "What is your approximate Current Ratio (Current Assets / Current Liabilities)?",
        helpText: "Under Tandon Committee norms, banks expect a minimum Current Ratio of 1.33x for working capital credit.",
        type: "SINGLE_CHOICE",
        orderIndex: 3,
        isRequired: true,
        weight: 1.0,
        options: [
          {
            label: "Above 1.33x (Healthy working capital cushion)",
            value: "ABOVE_1_33",
            score: 100,
            strengthTag: "Current Ratio meets or exceeds RBI Tandon Committee benchmark of 1.33x.",
          },
          {
            label: "1.10x to 1.33x (Adequate but tight)",
            value: "1_10_TO_1_33",
            score: 70,
          },
          {
            label: "Below 1.10x (Stressed short-term liquidity)",
            value: "BELOW_1_10",
            score: 35,
            weaknessTag: "Current ratio below 1.10x indicates short-term liabilities exceed liquid buffers.",
            recommendationTag: "Restructure short-term vendor credit and align trade receivables to restore liquidity.",
          },
        ],
      },
      {
        id: "q-fin-audited-statements",
        questionKey: "fin_audited_statements",
        categoryId: "cat-4",
        categorySlug: "financial-strength",
        questionText: "Are your annual financial statements audited by an independent Chartered Accountant?",
        helpText: "Statutory audited balance sheets and P&L with CA UDIN are mandatory for credit sanctions above ₹25 Lakhs.",
        type: "YES_NO",
        orderIndex: 4,
        isRequired: true,
        weight: 1.1,
        options: [
          {
            label: "Yes — Audited by CA with independent auditor report, schedules, and UDIN",
            value: "YES",
            score: 100,
            strengthTag: "Professionally audited financial statements with formal CA audit report.",
          },
          {
            label: "No — Provisional / unaudited / internal management accounts only",
            value: "NO",
            score: 30,
            flagMissing: true,
            missingItemLabel: "CA-audited Balance Sheet & P&L statements",
            weaknessTag: "Absence of CA-audited financials restricts project access to informal or micro credit.",
            recommendationTag: "Engage a Chartered Accountant to finalize statutory audit and issue audited balance sheets.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. BANKING CONDUCT — 10%
  // ---------------------------------------------------------------------------
  {
    id: "cat-5",
    slug: "banking-conduct",
    name: "Banking Conduct",
    weight: 0.1, // 10%
    orderIndex: 5,
    description: "Evaluates current account vintage, cheque/NACH bounce track record, and limit utilization.",
    questions: [
      {
        id: "q-bank-vintage",
        questionKey: "bank_account_vintage",
        categoryId: "cat-5",
        categorySlug: "banking-conduct",
        questionText: "How long has your primary business Current Account been active?",
        helpText: "Banks analyze 6–12 months of current account bank statements for banking turnover velocity.",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 0.9,
        options: [
          {
            label: "More than 3 years with regular commercial transactions",
            value: "3_PLUS",
            score: 100,
            strengthTag: "Long-standing banking relationship (> 3 years) providing verifiable banking flows.",
          },
          {
            label: "1 to 3 years",
            value: "1_TO_3",
            score: 80,
          },
          {
            label: "Less than 1 year / newly opened account",
            value: "LESS_THAN_1",
            score: 50,
            weaknessTag: "Less than 12 months of banking statement history available for analysis.",
          },
        ],
      },
      {
        id: "q-bank-bounces",
        questionKey: "bank_bounces",
        categoryId: "cat-5",
        categorySlug: "banking-conduct",
        questionText: "How many inward cheque / NACH / ECS bounces occurred in the past 12 months?",
        helpText: "Financial bounces (due to insufficient funds) are tracked strictly by credit algorithms.",
        type: "SINGLE_CHOICE",
        orderIndex: 2,
        isRequired: true,
        weight: 1.5,
        options: [
          {
            label: "Zero inward bounces (100% clean statement)",
            value: "ZERO",
            score: 100,
            strengthTag: "Pristine banking conduct with zero inward cheque/NACH returns in 12 months.",
          },
          {
            label: "1 to 2 minor technical/operational bounces (promptly cleared)",
            value: "1_TO_2",
            score: 65,
            weaknessTag: "Minor return instances will require satisfactory written explanations.",
          },
          {
            label: "3 or more financial returns (insufficient funds)",
            value: "3_PLUS",
            score: 15,
            flagMissing: true,
            missingItemLabel: "12-month clean banking statement track",
            weaknessTag: "Frequent NACH/cheque returns signal severe liquidity distress and trigger auto-rejections.",
            recommendationTag: "Maintain strict liquidity buffers to ensure zero returned payments for a continuous 6-month period.",
          },
        ],
      },
      {
        id: "q-bank-utilization",
        questionKey: "bank_limit_utilization",
        categoryId: "cat-5",
        categorySlug: "banking-conduct",
        questionText: "If holding an existing Cash Credit / Overdraft facility, what is your average utilization level?",
        helpText: "Continuous 95–100% CC utilization without credit turnover is viewed as hard core debt (sticky limit).",
        type: "SINGLE_CHOICE",
        orderIndex: 3,
        isRequired: true,
        weight: 1.0,
        options: [
          {
            label: "Healthy fluctuation (average 60% to 85% utilization)",
            value: "HEALTHY",
            score: 100,
            strengthTag: "Ideal working capital limit rotation reflecting genuine business credit cycles.",
          },
          {
            label: "Continuously pegged at 95% to 100% without fluctuations",
            value: "PEGGED_HIGH",
            score: 45,
            weaknessTag: "Continuous 100% CC utilization indicates working capital stickiness or inventory pileup.",
            recommendationTag: "Infuse fresh equity or convert sticky CC portion into a structured Working Capital Term Loan.",
          },
          {
            label: "Frequent overdrawings / limit exceeded",
            value: "OVERDRAWN",
            score: 15,
            flagMissing: true,
            missingItemLabel: "Regularized CC/OD account status",
            weaknessTag: "Overdrawn account status flags irregular conduct under RBI prudential norms.",
          },
          {
            label: "Do not hold any existing Cash Credit / OD facility",
            value: "NO_FACILITY",
            score: 80,
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. STATUTORY COMPLIANCE — 10%
  // ---------------------------------------------------------------------------
  {
    id: "cat-6",
    slug: "statutory-compliance",
    name: "Statutory Compliance",
    weight: 0.1, // 10%
    orderIndex: 6,
    description: "Evaluates GST filing regularity, Udyam MSME status, and Income Tax Return compliance.",
    questions: [
      {
        id: "q-comp-gst",
        questionKey: "comp_gst_regularity",
        categoryId: "cat-6",
        categorySlug: "statutory-compliance",
        questionText: "What is your GST filing track record (GSTR-3B & GSTR-1)?",
        helpText: "Banks cross-verify sales reported in audited financials against GST portal data (GSTR-2A/2B vs GSTR-3B).",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 1.3,
        options: [
          {
            label: "Always filed on time without delays for all periods",
            value: "ALWAYS_ON_TIME",
            score: 100,
            strengthTag: "Impeccable GST compliance history with 100% timely filings.",
          },
          {
            label: "Filed with occasional delays / minor late fee paid",
            value: "OCCASIONAL_DELAY",
            score: 75,
          },
          {
            label: "Irregular filing / pending returns / significant GST arrears",
            value: "IRREGULAR",
            score: 20,
            flagMissing: true,
            missingItemLabel: "Cleared GST returns & tax clearance certificates",
            weaknessTag: "GST filing non-compliance or arrears blocks credit committee processing.",
            recommendationTag: "File all pending GST returns and regularize tax ledger balances immediately.",
          },
          {
            label: "Exempt from GST / Turnover below statutory threshold",
            value: "EXEMPT",
            score: 80,
          },
        ],
      },
      {
        id: "q-comp-udyam",
        questionKey: "comp_udyam",
        categoryId: "cat-6",
        categorySlug: "statutory-compliance",
        questionText: "Do you possess a valid Udyam MSME Registration Certificate?",
        helpText: "Udyam registration is mandatory for Priority Sector Lending (PSL) classification and CGTMSE guarantee schemes.",
        type: "YES_NO",
        orderIndex: 2,
        isRequired: true,
        weight: 1.0,
        options: [
          {
            label: "Yes — Valid Udyam Registration certificate available",
            value: "YES",
            score: 100,
            strengthTag: "Udyam MSME Registration in place, qualifying for Priority Sector Lending advantages.",
          },
          {
            label: "No — Not yet registered on Udyam portal",
            value: "NO",
            score: 35,
            flagMissing: true,
            missingItemLabel: "Udyam MSME Registration Certificate",
            weaknessTag: "Missing Udyam certificate prevents PSL interest subvention and CGTMSE access.",
            recommendationTag: "Apply for instant Udyam MSME registration online using company PAN and Aadhaar.",
          },
        ],
      },
      {
        id: "q-comp-itr",
        questionKey: "comp_itr_history",
        categoryId: "cat-6",
        categorySlug: "statutory-compliance",
        questionText: "Have Income Tax Returns (ITR) been filed for the past 2 to 3 consecutive assessment years?",
        helpText: "Banks require filed ITR Acknowledgements and Computation of Total Income for at least 2–3 assessment years.",
        type: "SINGLE_CHOICE",
        orderIndex: 3,
        isRequired: true,
        weight: 1.2,
        options: [
          {
            label: "Yes — 3 consecutive assessment years filed on time",
            value: "3_YEARS",
            score: 100,
            strengthTag: "Full 3-year consecutive ITR filing record available for underwriting.",
          },
          {
            label: "Yes — 2 assessment years filed",
            value: "2_YEARS",
            score: 80,
            strengthTag: "Satisfactory 2-year ITR record for standard MSME lending.",
          },
          {
            label: "Only 1 assessment year filed",
            value: "1_YEAR",
            score: 50,
            weaknessTag: "Single-year ITR restricts historical financial trend validation.",
          },
          {
            label: "No ITR filed yet",
            value: "NONE",
            score: 15,
            flagMissing: true,
            missingItemLabel: "Income Tax Returns (ITR) with Computation of Income",
            weaknessTag: "Absence of filed ITRs is an absolute blocker for commercial bank project loans.",
            recommendationTag: "File pending Income Tax returns with complete Computation of Income.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. DOCUMENTATION — 10%
  // ---------------------------------------------------------------------------
  {
    id: "cat-7",
    slug: "documentation",
    name: "Documentation Readiness",
    weight: 0.1, // 10%
    orderIndex: 7,
    description: "Evaluates readiness of CMA data, DPR reports, and institutional KYC dossiers.",
    questions: [
      {
        id: "q-doc-cma",
        questionKey: "doc_cma_prepared",
        categoryId: "cat-7",
        categorySlug: "documentation",
        questionText: "Is a formal Credit Monitoring Arrangement (CMA Data) package prepared?",
        helpText: "CMA data contains 7 standardized financial schedules required by every Indian bank for credit limits above ₹25 Lakhs.",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 1.3,
        options: [
          {
            label: "Yes — Comprehensive 7-form CMA with audited history & 5-year projections",
            value: "READY",
            score: 100,
            strengthTag: "Professional CMA package ready in standard Indian banking format.",
          },
          {
            label: "Partial — Basic projections in Excel, but not in formal 7-form CMA format",
            value: "PARTIAL",
            score: 50,
            weaknessTag: "Informal projections must be standardized into formal CMA Form I–VII.",
            recommendationTag: "Convert informal forecasts into bank-compliant CMA data with ratio analysis.",
          },
          {
            label: "No — CMA data has not been prepared yet",
            value: "NO",
            score: 20,
            flagMissing: true,
            missingItemLabel: "CMA Data (Credit Monitoring Arrangement) Forms I–VII",
            weaknessTag: "Absence of bankable CMA data prevents credit officers from assessing limit eligibility.",
            recommendationTag: "Engage VS Advisory to formulate compliant CMA data aligned to bank appraisal norms.",
          },
        ],
      },
      {
        id: "q-doc-dpr",
        questionKey: "doc_dpr_prepared",
        categoryId: "cat-7",
        categorySlug: "documentation",
        questionText: "If seeking a Term Loan for capex or machinery, is a Detailed Project Report (DPR) prepared?",
        helpText: "A DPR is required by banks to evaluate technical feasibility, civil capex, machinery specs, and market demand.",
        type: "SINGLE_CHOICE",
        orderIndex: 2,
        isRequired: true,
        weight: 1.2,
        options: [
          {
            label: "Comprehensive bankable DPR prepared with all technical chapters & sensitivity",
            value: "READY",
            score: 100,
            strengthTag: "Complete bankable DPR ready covering technical, civil, and market feasibility.",
          },
          {
            label: "Draft / brief project summary notes only",
            value: "DRAFT",
            score: 55,
            weaknessTag: "Draft notes lack technical engineering validation and sensitivity tables.",
            recommendationTag: "Upgrade draft project notes into an institutional 8-chapter Detailed Project Report.",
          },
          {
            label: "No DPR prepared yet",
            value: "NO",
            score: 25,
            flagMissing: true,
            missingItemLabel: "Detailed Project Report (DPR) with Sensitivity Analysis",
            weaknessTag: "Greenfield or capex term loans cannot be appraised without a verified DPR.",
            recommendationTag: "Commission an IBA-compliant Detailed Project Report with verified market data.",
          },
          {
            label: "Not seeking term loan (working capital facility only)",
            value: "NOT_APPLICABLE",
            score: 90,
          },
        ],
      },
      {
        id: "q-doc-kyc-readiness",
        questionKey: "doc_kyc_readiness",
        categoryId: "cat-7",
        categorySlug: "documentation",
        questionText: "Are fundamental promoter and entity KYC documents consolidated and ready?",
        helpText: "Includes PAN, Aadhaar, MOA/AOA or Partnership deed, GST cert, 12-month bank statements, and utility bills.",
        type: "SINGLE_CHOICE",
        orderIndex: 3,
        isRequired: true,
        weight: 1.0,
        options: [
          {
            label: "Fully compiled, verified, and ready for immediate submission",
            value: "COMPLETE",
            score: 100,
            strengthTag: "Complete corporate and promoter KYC dossier compiled and ready.",
          },
          {
            label: "Mostly ready (minor documents like recent utility bills pending)",
            value: "MOSTLY_READY",
            score: 75,
          },
          {
            label: "Scattered / documents need to be retrieved from various sources",
            value: "SCATTERED",
            score: 40,
            flagMissing: true,
            missingItemLabel: "Consolidated KYC & Bank Statement Dossier",
            weaknessTag: "Fragmented documentation delays credit appraisal turnaround by weeks.",
            recommendationTag: "Consolidate complete document dossier using the VS Document Checklist.",
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 8. PROJECT READINESS — 10%
  // ---------------------------------------------------------------------------
  {
    id: "cat-8",
    slug: "project-readiness",
    name: "Project Readiness",
    weight: 0.1, // 10%
    orderIndex: 8,
    description: "Assesses land/premises title, statutory clearances, and machinery procurement quotations.",
    questions: [
      {
        id: "q-proj-premises",
        questionKey: "proj_premises_status",
        categoryId: "cat-8",
        categorySlug: "project-readiness",
        questionText: "What is the status of the land or commercial premises for your project?",
        helpText: "Unclear land title or missing Non-Agricultural (NA) conversion orders halt loan disbursements.",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 1.2,
        options: [
          {
            label: "Self-owned land/building with clear title deed and non-agricultural (NA) conversion",
            value: "OWNED_CLEAR",
            score: 100,
            strengthTag: "Unencumbered owned land with NA conversion order ready for mortgage creation.",
          },
          {
            label: "Registered long-term lease agreement (exceeding loan tenure)",
            value: "REGISTERED_LEASE",
            score: 80,
            strengthTag: "Valid registered lease agreement securing operational site tenure.",
          },
          {
            label: "Unregistered rent agreement / lease expiring soon",
            value: "SHORT_LEASE",
            score: 45,
            weaknessTag: "Short or unregistered lease creates premises security risk for lenders.",
            recommendationTag: "Execute and register long-term lease deed matching proposed loan repayment horizon.",
          },
          {
            label: "Site still being identified / under negotiation",
            value: "SEARCHING",
            score: 25,
            flagMissing: true,
            missingItemLabel: "Site acquisition / Registered Lease Deed",
            weaknessTag: "Indeterminate project site prevents engineering and environmental appraisal.",
            recommendationTag: "Finalize site selection and execute registered agreement before formal loan filing.",
          },
        ],
      },
      {
        id: "q-proj-statutory-approvals",
        questionKey: "proj_statutory_approvals",
        categoryId: "cat-8",
        categorySlug: "project-readiness",
        questionText: "What is the status of required statutory and industry approvals (PCB, Factory, Fire, FSSAI)?",
        helpText: "Banks stipulate statutory clearances as mandatory pre-disbursement conditions.",
        type: "SINGLE_CHOICE",
        orderIndex: 2,
        isRequired: true,
        weight: 1.1,
        options: [
          {
            label: "All key clearances obtained (PCB Consent, Municipal, Fire, etc.)",
            value: "ALL_OBTAINED",
            score: 100,
            strengthTag: "Key statutory and environmental clearances in place.",
          },
          {
            label: "Applications submitted with official acknowledgment; in process",
            value: "IN_PROCESS",
            score: 75,
          },
          {
            label: "Required licenses identified but applications not yet filed",
            value: "NOT_FILED",
            score: 45,
            weaknessTag: "Pending statutory applications risk delaying bank loan disbursement.",
            recommendationTag: "Initiate PCB CTE, municipal NOC, and fire clearance applications concurrently.",
          },
          {
            label: "Unaware of required statutory approvals for our vertical",
            value: "UNAWARE",
            score: 25,
            flagMissing: true,
            missingItemLabel: "Sector statutory clearance roadmap (PCB / Factory / Fire)",
            weaknessTag: "Lack of regulatory roadmap can lead to unexpected capex or shutdown notices.",
            recommendationTag: "Review VS Industry Blueprint to identify mandatory licenses for your sector.",
          },
        ],
      },
      {
        id: "q-proj-machinery-quotes",
        questionKey: "proj_machinery_quotes",
        categoryId: "cat-8",
        categorySlug: "project-readiness",
        questionText: "What is the status of machinery and equipment vendor quotations?",
        helpText: "Banks require original proforma invoices from established OEMs detailing capacity and performance guarantees.",
        type: "SINGLE_CHOICE",
        orderIndex: 3,
        isRequired: true,
        weight: 0.9,
        options: [
          {
            label: "Firm competitive proforma invoices from recognized OEMs with technical datasheets",
            value: "FIRM_QUOTES",
            score: 100,
            strengthTag: "Firm OEM quotations with technical specifications ready for machine financing.",
          },
          {
            label: "Preliminary indicative estimates only; firm quotes pending",
            value: "INDICATIVE",
            score: 60,
            weaknessTag: "Indicative quotes require formal proforma replacement before bank sanction.",
          },
          {
            label: "Machinery specifications not yet finalized",
            value: "UNFINALIZED",
            score: 30,
            flagMissing: true,
            missingItemLabel: "OEM Proforma Invoices for Plant & Machinery",
            weaknessTag: "Unfinalized machinery specifications prevent capital cost verification.",
            recommendationTag: "Obtain formal commercial proforma invoices from at least two reputable OEMs.",
          },
          {
            label: "No machinery purchase planned",
            value: "NOT_APPLICABLE",
            score: 90,
          },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 9. SECURITY / CONTRIBUTION — 5%
  // ---------------------------------------------------------------------------
  {
    id: "cat-9",
    slug: "security-contribution",
    name: "Security & Margin Contribution",
    weight: 0.05, // 5%
    orderIndex: 9,
    description: "Assesses promoter equity margin capability and availability of collateral or guarantee support.",
    questions: [
      {
        id: "q-sec-promoter-margin",
        questionKey: "sec_promoter_margin",
        categoryId: "cat-9",
        categorySlug: "security-contribution",
        questionText: "What percentage of the project cost can promoters contribute as equity / margin money?",
        helpText: "Standard Debt:Equity norms range from 65:35 to 75:25. Minimum promoter contribution is mandatory.",
        type: "SINGLE_CHOICE",
        orderIndex: 1,
        isRequired: true,
        weight: 1.2,
        options: [
          {
            label: "30% or more of project cost (Strong promoter skin-in-the-game)",
            value: "ABOVE_30",
            score: 100,
            strengthTag: "Strong promoter equity margin (>30%) exceeding standard banking minimums.",
          },
          {
            label: "20% to 29% of project cost (Standard margin)",
            value: "20_TO_29",
            score: 80,
            strengthTag: "Adequate promoter margin aligned with typical 75:25 debt-to-equity conventions.",
          },
          {
            label: "15% to 19% of project cost (Tight margin)",
            value: "15_TO_19",
            score: 55,
            weaknessTag: "Promoter margin below 20% will require specialized scheme support or quasi-equity.",
          },
          {
            label: "Less than 15% (Heavily dependent on debt)",
            value: "LESS_THAN_15",
            score: 25,
            flagMissing: true,
            missingItemLabel: "Demonstrated promoter margin funds in bank account",
            weaknessTag: "Promoter margin under 15% violates standard commercial bank underwriting rules.",
            recommendationTag: "Arrange co-promoter capital or quasi-equity before filing formal loan proposal.",
          },
        ],
      },
      {
        id: "q-sec-collateral",
        questionKey: "sec_collateral_availability",
        categoryId: "cat-9",
        categorySlug: "security-contribution",
        questionText: "What collateral security (commercial / residential / industrial property) can be offered?",
        helpText: "Collateral properties are mortgaged to provide safety margins against project or business risk.",
        type: "SINGLE_CHOICE",
        orderIndex: 2,
        isRequired: true,
        weight: 1.0,
        options: [
          {
            label: "Unencumbered immovable property covering 100%+ of proposed loan value",
            value: "ABOVE_100",
            score: 100,
            strengthTag: "Robust collateral coverage (>100%) significantly reducing lender credit risk.",
          },
          {
            label: "Collateral property covering 50% to 99% of loan value",
            value: "50_TO_99",
            score: 80,
            strengthTag: "Substantial collateral buffer enhancing approval likelihood.",
          },
          {
            label: "Partial collateral covering 25% to 49% of loan value",
            value: "25_TO_49",
            score: 60,
          },
          {
            label: "Seeking purely collateral-free financing (CGTMSE / MUDRA / unsecured loan)",
            value: "COLLATERAL_FREE",
            score: 70,
            strengthTag: "Targeting collateral-free credit under CGTMSE or Credit Guarantee frameworks.",
          },
        ],
      },
      {
        id: "q-sec-guarantee",
        questionKey: "sec_personal_guarantee",
        categoryId: "cat-9",
        categorySlug: "security-contribution",
        questionText: "Are all key promoter directors/partners willing to provide unconditional personal guarantees?",
        helpText: "Banks in India routinely mandate personal guarantees of all major promoters and shareholders.",
        type: "YES_NO",
        orderIndex: 3,
        isRequired: true,
        weight: 0.8,
        options: [
          {
            label: "Yes — All key promoters are willing to execute personal guarantees",
            value: "YES",
            score: 100,
            strengthTag: "Unconditional promoter personal guarantees available to satisfy bank covenants.",
          },
          {
            label: "No — Promoters are unwilling to provide personal guarantees",
            value: "NO",
            score: 30,
            weaknessTag: "Refusal to provide promoter personal guarantee is an immediate deal-breaker for MSME bank loans.",
            recommendationTag: "Align promoter consensus on personal guarantee covenants required for institutional loans.",
          },
        ],
      },
    ],
  },
];

// Helper lookup functions
export function getAllCategories(): AssessmentCategoryDef[] {
  return ASSESSMENT_CATEGORIES;
}

export function getCategoryBySlug(slug: string): AssessmentCategoryDef | undefined {
  return ASSESSMENT_CATEGORIES.find((c) => c.slug === slug);
}

export function getAllQuestions(): Array<{
  category: AssessmentCategoryDef;
  question: AssessmentCategoryDef["questions"][number];
}> {
  const result: Array<{
    category: AssessmentCategoryDef;
    question: AssessmentCategoryDef["questions"][number];
  }> = [];

  for (const cat of ASSESSMENT_CATEGORIES) {
    for (const q of cat.questions) {
      result.push({ category: cat, question: q });
    }
  }

  return result;
}
