import { NextRequest, NextResponse } from "next/server";
import { getPresignedUploadUrl } from "@/lib/storage/s3";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await getPresignedUploadUrl(
      body.projectId || "temp-project",
      body.fileName || "document.pdf",
      body.contentType || "application/pdf"
    );

    return NextResponse.json({ success: true, ...result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
