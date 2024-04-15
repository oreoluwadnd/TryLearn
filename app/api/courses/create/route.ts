import { NextResponse } from "next/server";
import { getCourses } from "../../../../lib/ai/coursesAi";
import * as Sentry from "@sentry/node";
import { fetchImages } from "@/lib/unsplash/unsplash";

interface CourseRequestBody {
  topic: string;
  tutor: string;
}

function random() {
  return Math.floor(Math.random() * 5) + 1;
}

export async function POST(req: Request) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    tracesSampleRate: 1,
    debug: false,
  });

  try {
    const course: CourseRequestBody = await req.json();
    const coursesFromLlm = await getCourses(course);
    if (!coursesFromLlm) {
      return new NextResponse("Erorr generating Course", {
        status: 500,
      });
    }
    const image = await fetchImages(coursesFromLlm.course);

    const response = {
      ...coursesFromLlm,
      tutor: course.tutor,
      image: image.results[random()].urls.regular,
    };

    return NextResponse.json(response, {
      status: 201,
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
