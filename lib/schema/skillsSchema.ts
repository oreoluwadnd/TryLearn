import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

//Identify the carrer and roadmap for the carrer schema
const skills = z.object({
  name: z.string(),
  note: z
    .string()
    .describe("a short description of the skill not more than one line"),
});

export const CarrerSkillsSchema = StructuredOutputParser.fromZodSchema(
  z
    .array(skills)
    .describe(
      "array with different skills for the carrer, should be at exactly 6 should cover everything about the entry and details"
    )
);

const format_instructions = CarrerSkillsSchema.getFormatInstructions();

const skillsPrompt = new PromptTemplate({
  template:
    "You are a career coach tasked with advising individuals on advancing their careers.Give me the most popular skills for the entry. use detailed insights and examples applicable to various professions and industries to give me an answer. Follow the formet to strucuture your output no matter what \n{format_instructions}\n{entry}",
  inputVariables: ["entry"],
  partialVariables: { format_instructions },
  validateTemplate: true,
});

export const getSkillsPrompt = async (content: string) => {
  const input = await skillsPrompt.format({
    entry: content,
  });
  console.log("🚀 ~ getSkillsPrompt ~ input:", input);

  return input;
};
