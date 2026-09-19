// =============================================================================
// VS Project & Financial Advisory — Finance Readiness Score V1
// TypeScript Definitions & Types
// =============================================================================

export type QuestionType =
  | "SINGLE_CHOICE"
  | "MULTIPLE_CHOICE"
  | "NUMBER"
  | "CURRENCY"
  | "PERCENTAGE"
  | "YES_NO"
  | "DATE"
  | "TEXT";

export type ReadinessBandKey =
  | "EARLY_PREPARATION"
  | "DEVELOPING_READINESS"
  | "MODERATE_READINESS"
  | "STRONG_READINESS"
  | "ADVANCED_READINESS";

export interface AssessmentOptionDef {
  label: string;
  value: string;
  score: number; // 0 to 100 normalized point scale
  flagMissing?: boolean;
  missingItemLabel?: string;
  strengthTag?: string;
  weaknessTag?: string;
  recommendationTag?: string;
}

export interface AssessmentQuestionDef {
  id: string;
  questionKey: string;
  categoryId: string;
  categorySlug: string;
  questionText: string;
  helpText?: string;
  type: QuestionType;
  orderIndex: number;
  isRequired: boolean;
  weight: number; // within-category relative weight (default 1.0)
  options?: AssessmentOptionDef[];
  minVal?: number;
  maxVal?: number;
  unit?: string;
  placeholder?: string;
}

export interface AssessmentCategoryDef {
  id: string;
  slug: string;
  name: string;
  weight: number; // 0.0 to 1.0 (sums to 1.0 across all 9 categories)
  orderIndex: number;
  description: string;
  questions: AssessmentQuestionDef[];
}

export interface AssessmentUserResponse {
  questionKey: string;
  valueString?: string;
  valueNumber?: number;
  valueBoolean?: boolean;
  valueJson?: string[]; // for MULTIPLE_CHOICE
}

export interface CategoryScoreResult {
  categorySlug: string;
  categoryName: string;
  rawScore: number; // 0 to 100
  weight: number; // e.g. 0.10 for 10%
  weightedScore: number; // rawScore * weight
  maxWeightContribution: number; // weight * 100
  status: "Needs Work" | "Acceptable" | "Strong";
}

export interface SuggestedService {
  title: string;
  slug: string;
  summary: string;
  badge: string;
}

export interface DocumentChecklistItem {
  category: string;
  items: string[];
}

export interface ReadinessEvaluationResult {
  overallScore: number; // 0 to 100
  bandKey: ReadinessBandKey;
  bandLabel: string;
  bandDescription: string;
  badgeColor: string;
  categoryScores: CategoryScoreResult[];
  strengths: string[];
  weaknesses: string[];
  missingItems: string[];
  recommendedActions: Array<{
    step: number;
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
  }>;
  suggestedServices: SuggestedService[];
  documentChecklist: DocumentChecklistItem[];
  disclaimer: string;
  evaluatedAt: string; // ISO 8601
}
