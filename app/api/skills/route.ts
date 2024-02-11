// import { getSkills } from "@/lib/ai/skillsAi";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title } = await req.json();

    // const response = await getSkills(title);
    // console.log("🚀 ~ POST ~ response:", response);

    // if (response) {
    //   return new NextResponse(JSON.stringify(response), {
    //     status: 200,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    // }
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
}
