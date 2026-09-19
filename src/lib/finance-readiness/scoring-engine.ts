// =============================================================================
// VS Project & Financial Advisory — Finance Readiness Score V1
// Pure Server-Side Scoring & Diagnostic Engine
// =============================================================================

import {
  AssessmentUserResponse,
  CategoryScoreResult,
  DocumentChecklistItem,
  ReadinessBandKey,
  ReadinessEvaluationResult,
  SuggestedService,
} from "./types";
import { ASSESSMENT_CATEGORIES } from "./questions-data";

export const READINESS_DISCLAIMER =
  "This assessment provides an indicative readiness analysis based on information entered by the user. It is not a credit score, sanction decision or guarantee of financing.";

interface BandConfig {
  key: ReadinessBandKey;
  label: string;
  description: string;
  badgeColor: string;
}

const READINESS_BANDS: Record<ReadinessBandKey, BandConfig> = {
  EARLY_PREPARATION: {
    key: "EARLY_PREPARATION",
    label: "Early Preparation",
    description:
      "Your enterprise exhibits foundational elements but requires substantial documentation, compliance structuring, and financial strengthening before approaching mainstream financial institutions.",
    badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
  },
  DEVELOPING_READINESS: {
    key: "DEVELOPING_READINESS",
    label: "Developing Readiness",
    description:
      "Core business activities are operational, but key institutional parameters (such as banking conduct, CMA standardization, or collateral coverage) require enhancement to meet standard credit appraisal cutoffs.",
    badgeColor: "bg-yellow-100 text-yellow-900 border-yellow-300",
  },
  MODERATE_READINESS: {
    key: "MODERATE_READINESS",
    label: "Moderate Readiness",
    description:
      "Your business demonstrates viable fundamentals suitable for credit appraisal, provided specific documentary and structural enhancements are addressed.",
    badgeColor: "bg-blue-100 text-navy-900 border-blue-300",
  },
  STRONG_READINESS: {
    key: "STRONG_READINESS",
    label: "Strong Readiness",
    description:
      "Your enterprise demonstrates strong operational and financial maturity, well-aligned with commercial bank and institutional underwriting guidelines.",
    badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
  },
  ADVANCED_READINESS: {
    key: "ADVANCED_READINESS",
    label: "Advanced Readiness",
    description:
      "Outstanding institutional readiness across governance, financial track record, and compliance. Positioned for competitive pricing and multiple credit product discovery.",
    badgeColor: "bg-gold/20 text-gold-dark border-gold/40",
  },
};

export function getReadinessBand(score: number): BandConfig {
  if (score >= 90) return READINESS_BANDS.ADVANCED_READINESS;
  if (score >= 75) return READINESS_BANDS.STRONG_READINESS;
  if (score >= 60) return READINESS_BANDS.MODERATE_READINESS;
  if (score >= 40) return READINESS_BANDS.DEVELOPING_READINESS;
  return READINESS_BANDS.EARLY_PREPARATION;
}

/**
 * Server-side evaluation function for Finance Readiness Assessment
 */
export function evaluateReadinessAssessment(
  responses: AssessmentUserResponse[] | Record<string, any>
): ReadinessEvaluationResult {
  // Normalize responses into map
  const responseMap: Record<string, AssessmentUserResponse> = {};

  if (Array.isArray(responses)) {
    for (const r of responses) {
      responseMap[r.questionKey] = r;
    }
  } else if (typeof responses === "object" && responses !== null) {
    for (const [key, val] of Object.entries(responses)) {
      if (typeof val === "object" && val !== null && "questionKey" in val) {
        responseMap[key] = val as AssessmentUserResponse;
      } else if (typeof val === "string") {
        responseMap[key] = { questionKey: key, valueString: val };
      } else if (typeof val === "number") {
        responseMap[key] = { questionKey: key, valueNumber: val };
      } else if (typeof val === "boolean") {
        responseMap[key] = { questionKey: key, valueBoolean: val };
      } else if (Array.isArray(val)) {
        responseMap[key] = { questionKey: key, valueJson: val };
      }
    }
  }

  const categoryScores: CategoryScoreResult[] = [];
  const strengths: string[] = [];
  const weaknesses: string[] = [];
  const missingItems: string[] = [];
  const rawRecommendations: string[] = [];

  let cumulativeWeightedScore = 0;

  for (const category of ASSESSMENT_CATEGORIES) {
    let categoryPointsEarned = 0;
    let categoryPointsPossible = 0;

    for (const q of category.questions) {
      const qWeight = q.weight || 1.0;
      categoryPointsPossible += 100 * qWeight;

      const userResp = responseMap[q.questionKey];
      let questionScore = 0;

      if (userResp) {
        const selectedValue =
          userResp.valueString ||
          (userResp.valueBoolean !== undefined
            ? userResp.valueBoolean
              ? "YES"
              : "NO"
            : undefined);

        if (q.options && q.options.length > 0 && selectedValue) {
          const matchedOption = q.options.find(
            (opt) => opt.value === selectedValue
          );

          if (matchedOption) {
            questionScore = matchedOption.score;

            if (matchedOption.strengthTag) {
              strengths.push(matchedOption.strengthTag);
            }
            if (matchedOption.weaknessTag) {
              weaknesses.push(matchedOption.weaknessTag);
            }
            if (matchedOption.flagMissing && matchedOption.missingItemLabel) {
              missingItems.push(matchedOption.missingItemLabel);
            }
            if (matchedOption.recommendationTag) {
              rawRecommendations.push(matchedOption.recommendationTag);
            }
          }
        } else if (q.type === "NUMBER" || q.type === "CURRENCY") {
          // Default baseline score for positive numeric answers
          questionScore = (userResp.valueNumber || 0) > 0 ? 80 : 40;
        } else {
          questionScore = 50; // default baseline for non-option answers
        }
      } else {
        // Unanswered question receives minimal baseline
        questionScore = 20;
      }

      categoryPointsEarned += questionScore * qWeight;
    }

    const rawCategoryScore =
      categoryPointsPossible > 0
        ? Math.round((categoryPointsEarned / categoryPointsPossible) * 100)
        : 50;

    const weightedScore = Math.round(rawCategoryScore * category.weight * 10) / 10;
    cumulativeWeightedScore += weightedScore;

    let status: "Needs Work" | "Acceptable" | "Strong" = "Acceptable";
    if (rawCategoryScore >= 75) status = "Strong";
    else if (rawCategoryScore < 50) status = "Needs Work";

    categoryScores.push({
      categorySlug: category.slug,
      categoryName: category.name,
      rawScore: rawCategoryScore,
      weight: category.weight,
      weightedScore,
      maxWeightContribution: Math.round(category.weight * 100),
      status,
    });
  }

  // Cap overall score between 0 and 100
  const overallScore = Math.min(100, Math.max(0, Math.round(cumulativeWeightedScore)));
  const band = getReadinessBand(overallScore);

  // Deduplicate and filter strings
  const uniqueStrengths = Array.from(new Set(strengths)).slice(0, 8);
  const uniqueWeaknesses = Array.from(new Set(weaknesses)).slice(0, 8);
  const uniqueMissingItems = Array.from(new Set(missingItems));

  // Build recommended actions roadmap
  const recommendedActions: Array<{
    step: number;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
  }> = [];

  const uniqueRecommendations = Array.from(new Set(rawRecommendations));
  if (uniqueRecommendations.length > 0) {
    uniqueRecommendations.forEach((rec, idx) => {
      recommendedActions.push({
        step: idx + 1,
        title: `Strategic Enhancement 0${idx + 1}`,
        description: rec,
        priority: idx < 2 ? "High" : idx < 4 ? "Medium" : "Low",
      });
    });
  } else {
    // Default best-practice recommendations
    recommendedActions.push(
      {
        step: 1,
        title: "Standardize CMA & Projections",
        description: "Formulate institutional 7-form Credit Monitoring Arrangement (CMA) data aligned to RBI guidelines.",
        priority: "High",
      },
      {
        step: 2,
        title: "Verify Statutory Filing Hygiene",
        description: "Ensure GSTR-3B vs GSTR-1 parity and retain CA-certified tax computations for past 3 financial years.",
        priority: "Medium",
      },
      {
        step: 3,
        title: "Compile Lender-Ready Credit Dossier",
        description: "Consolidate promoter KYC, property valuation, and statutory clearances into an indexed credit pack.",
        priority: "Low",
      }
    );
  }

  // Suggest relevant VS services based on identified gaps
  const suggestedServices: SuggestedService[] = [];

  const hasCmaGap =
    responseMap["doc_cma_prepared"]?.valueString === "NO" ||
    responseMap["doc_cma_prepared"]?.valueString === "PARTIAL";
  if (hasCmaGap || overallScore < 75) {
    suggestedServices.push({
      title: "CMA Data Preparation",
      slug: "cma",
      summary: "IBA-compliant 7-form Credit Monitoring Arrangement package with sensitivity & ratio analysis.",
      badge: "Core Credit Requirement",
    });
  }

  const hasDprGap =
    responseMap["doc_dpr_prepared"]?.valueString === "NO" ||
    responseMap["doc_dpr_prepared"]?.valueString === "DRAFT";
  if (hasDprGap) {
    suggestedServices.push({
      title: "Detailed Project Report (DPR)",
      slug: "dpr",
      summary: "Bankable multi-chapter DPR covering technical, civil, market, and financial feasibility.",
      badge: "Capex & Term Loans",
    });
  }

  if (responseMap["bank_limit_utilization"]?.valueString === "PEGGED_HIGH" || overallScore < 60) {
    suggestedServices.push({
      title: "Working Capital Advisory",
      slug: "working-capital-advisory",
      summary: "Optimizing drawing power, inventory holding ratios, and cash credit limit sizing.",
      badge: "Cash Flow Alignment",
    });
  }

  if (suggestedServices.length < 3) {
    suggestedServices.push({
      title: "Term Loan Advisory",
      slug: "term-loan-advisory",
      summary: "Institutional loan structuring, debt syndication, and bank credit committee coordination.",
      badge: "Institutional Credit",
    });
  }

  if (suggestedServices.length < 4) {
    suggestedServices.push({
      title: "Government Scheme Assistance",
      slug: "government-scheme-assistance",
      summary: "Identification and application support for CGTMSE, AIF, NHB, and State Subsidies.",
      badge: "Policy Navigation",
    });
  }

  // Build tailored document checklist
  const documentChecklist: DocumentChecklistItem[] = [
    {
      category: "Entity & Promoter KYC",
      items: [
        "Promoter PAN, Aadhaar Card, and Passport-size Photographs",
        "Company PAN Card & Certificate of Incorporation / Partnership Deed",
        "Memorandum & Articles of Association (MOA & AOA) or LLP Agreement",
        "Udyam MSME Registration Certificate",
        "Promoter Net Worth Statement certified by a Chartered Accountant",
      ],
    },
    {
      category: "Financial & Tax Records",
      items: [
        "Past 3 consecutive years CA-audited Balance Sheets and P&L Statements with all schedules & UDIN",
        "Past 3 years Income Tax Returns (ITR) with Computation of Income",
        "Past 12 months GSTR-3B and GSTR-1 filed returns",
        "Provisional financials for current financial year (if audited accounts are > 6 months old)",
      ],
    },
    {
      category: "Banking & Loan Statements",
      items: [
        "Past 12 months Bank Account Statements for all operative current accounts",
        "Sanction letters and past 12 months loan statements for all existing borrowing facilities",
        "No Dues Certificates (NDC) or closure letters for any previously closed credit accounts",
      ],
    },
    {
      category: "Project & Security Documents (For Term Loans)",
      items: [
        "Credit Monitoring Arrangement (CMA Data) with multi-year operating projections",
        "Detailed Project Report (DPR) with technical process flow and cost of project",
        "Original proforma invoices / quotations from OEMs for proposed plant & machinery",
        "Title deeds, non-agricultural (NA) land conversion order, and approved building plan",
        "Property tax receipts and encumbrance certificate (EC) for offered collateral property",
      ],
    },
  ];

  return {
    overallScore,
    bandKey: band.key,
    bandLabel: band.label,
    bandDescription: band.description,
    badgeColor: band.badgeColor,
    categoryScores,
    strengths: uniqueStrengths,
    weaknesses: uniqueWeaknesses,
    missingItems: uniqueMissingItems,
    recommendedActions,
    suggestedServices: suggestedServices.slice(0, 4),
    documentChecklist,
    disclaimer: READINESS_DISCLAIMER,
    evaluatedAt: new Date().toISOString(),
  };
}
