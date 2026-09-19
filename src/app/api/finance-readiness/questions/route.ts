import { NextResponse } from "next/server";
import { ASSESSMENT_CATEGORIES } from "@/lib/finance-readiness/questions-data";

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      categories: ASSESSMENT_CATEGORIES,
      totalQuestions: ASSESSMENT_CATEGORIES.reduce(
        (acc, cat) => acc + cat.questions.length,
        0
      ),
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
