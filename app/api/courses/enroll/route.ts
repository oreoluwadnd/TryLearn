import { NextResponse } from "next/server";

import { fetchImages } from "@/lib/unsplash/unsplash";
import { enrollValues } from "@/actions/enrollActions";
import { fetchVideo } from "@/lib/youtube";

export async function POST(req: Request) {
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
            video,
          };
        })
      );
      return {
        ...values,
        chapters: updatedChapters,
      };
    };
    const updatedResponse = await response(enrollData);
    console.log("🚀 ~ response:", updatedResponse);
    return NextResponse.json(updatedResponse, {
      status: 201,
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
