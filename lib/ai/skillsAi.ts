// import { OpenAIModel } from "../openai";
// import { CarrerSkillsSchema, getSkillsPrompt } from "../schema/skillsSchema";

// export const getSkills = async (prompt: string) => {
//   const input = await getSkillsPrompt(prompt);
//   const result = await OpenAIModel.invoke(input);
//   console.log("🚀 ~ getSkills ~ result:", result);
//   try {
//     const parsed = CarrerSkillsSchema.parse(result);
//     return parsed;
//   } catch (error) {
//     console.log("🚀 ~ file: ai.ts:53 ~ anaylze ~ error", error);
//     return null;
//   }
// };
