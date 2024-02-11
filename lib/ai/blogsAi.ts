// import { OpenAIModel } from "../openai";
// import { ChapterBlogSchema, getBlogPrompt } from "../schema/blogSchema";

// export const getSkills = async (prompt: string) => {
//   const input = await getBlogPrompt(prompt);
//   const result = await OpenAIModel.invoke(input);
//   console.log("🚀 ~ getSkills ~ result:", result);
//   try {
//     const parsed = ChapterBlogSchema.parse(result);
//     return parsed;
//   } catch (error) {
//     console.log("🚀 ~ file: ai.ts:53 ~ anaylze ~ error", error);
//     return null;
//   }
// };
