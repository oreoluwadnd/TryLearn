import { researchWithLangGraph } from "@/lib/ai/courseAgent";
import * as Sentry from "@sentry/node";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1,
    debug: false,
  });
  try {
    const data = await req.json();
    const markdown = await researchWithLangGraph(data.topic);
    return NextResponse.json(markdown, { status: 200 });
  } catch (error) {
    Sentry.captureException(error, {
      extra: { file: "app/api/summary/route.ts" },
    });
    await Sentry.flush(2000);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
