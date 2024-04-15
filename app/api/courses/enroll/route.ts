import { NextResponse } from "next/server";
import * as Sentry from "@sentry/node";
import { enrollValues } from "@/actions/enrollActions";

import { fetchVideo } from "@/lib/youtube";

export async function POST(req: Request) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1,
    debug: false,
  });
  try {
    const enrollData: enrollValues = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
    const handleVideos = async (query: string) => {
      const result = await fetchVideo(query, apiKey!);
      return result;
    };
    const response = async (values: enrollValues) => {
      const updatedChapters = await Promise.all(
        values.chapters.map(async (chapter, index) => {
          const video = await handleVideos(chapter.query);
          return {
            ...chapter,
            id: index.toString(),
            videoId: video.id.videoId,
            videoTitle: video.snippet.title,
            videoDescription: video.snippet.description,
          };
        })
      );
      return {
        ...values,
        chapters: updatedChapters,
      };
    };
    const updatedResponse = await response(enrollData);

    return NextResponse.json(updatedResponse, {
      status: 200,
    });
  } catch (error) {
    Sentry.captureException(error, {
      extra: { file: "app/api/courses/enroll/route.ts" },
    });
    await Sentry.flush(2000);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
