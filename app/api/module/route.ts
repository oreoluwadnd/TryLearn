// import { getModules } from "@/lib/ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { course } = await req.json();

    // const response = getModules(course);

    // return NextResponse.json(response, {
    //   status: 201,
    // });
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
