import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    platform: "VS Project & Financial Advisory Private Limited",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
}
