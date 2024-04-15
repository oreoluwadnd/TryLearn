import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

//fetch blog post for topics per chapter
const blogPost = z.object({
  title: z.string().min(3).max(100).describe("title of the blog"),
  description: z
    .string()
    .min(3)
    .max(1000)
    .describe("short description of the blog"),
  link: z
    .string()
    .min(3)
    .max(1000)
    .describe("link to blog post about the topic"),
});

export const ChapterBlogSchema = StructuredOutputParser.fromZodSchema(
  z
    .array(blogPost)
    .describe(
      "array of blogs about the topic, each blog should have a title, description and link to the blog post"
    )
);

const format_instructions = ChapterBlogSchema.getFormatInstructions();

const chapterBlogPrompt = new PromptTemplate({
  template:
    "You are a career coach tasked with advising individuals on advancing their careers.Give me the most popular skills for the entry. use detailed insights and examples applicable to various professions and industries to give me an answer. Follow the formet to strucuture your output no matter what \n{format_instructions}\n{entry}",
  inputVariables: ["entry"],
  partialVariables: { format_instructions },
  validateTemplate: true,
});

export const getBlogPrompt = async (content: string) => {
  const input = await chapterBlogPrompt.format({
    entry: content,
  });

  return input;
};
