import { NextResponse } from "next/server";
import { getCourses } from "../../../../lib/ai/coursesAi";
import { fetchImages } from "@/lib/unsplash/unsplash";

interface CourseRequestBody {
  topic: string;
  level: string;
  tutor: string;
}

export async function POST(req: Request) {
  try {
    const course: CourseRequestBody = await req.json();
    console.log("🚀 ~ POST ~ course:", course);

    const coursesFromLlm = await getCourses(course);
    if (!coursesFromLlm) {
      return new NextResponse("Erorr generating Course", {
        status: 500,
      });
    }
    const image = await fetchImages(course.topic);

    const response = {
      ...coursesFromLlm,
      image: image.results[0].urls.regular,
    };
    console.log("🚀 ~ response:", response);
    return NextResponse.json(response, {
      status: 201,
    });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
