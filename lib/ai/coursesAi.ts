import { toast } from "sonner";
import { OpenAIModel } from "../openai";
import { coursesSchema, getCoursesPrompt } from "../schema/coursesSchema";
import { courseForm } from "@/app/(dashboard)/(routes)/dashboard/page";

export const getCourses = async (prompt: courseForm) => {
  const input = await getCoursesPrompt(prompt);
  const result = await OpenAIModel.invoke(input);
  console.log("🚀 ~ getSkills ~ result:", result);
  try {
    const parsed = coursesSchema.parse(result);
    return parsed;
  } catch (error) {
    console.log("🚀 ~ file: ai.ts:53 ~ anaylze ~ error", error);
    toast.error("An error occured generating courses");
  }
};
