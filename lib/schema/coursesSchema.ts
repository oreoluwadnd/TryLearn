import { z } from "zod";
import { StructuredOutputParser } from "langchain/output_parsers";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";
import { courseForm } from "@/app/(dashboard)/(routes)/dashboard/page";

//Identify the carrer and roadmap for the carrer schema
const chapter = z.object({
  chapter: z.string(),
  description: z
    .string()
    .describe(
      "a short description of the chapter relating to the chapter of the course"
    ),
  query: z
    .string()
    .describe(
      "a query that can be use to search for youtube video on the chapter"
    ),
});

export const coursesSchema = StructuredOutputParser.fromZodSchema(
  z.object({
    course: z.string().describe("the course title or name"),
    description: z.string().describe("a short description of the course"),
    duration: z.string().describe("the estimated duration of the course"),
    chapters: z.array(chapter).describe("the chapters of the course"),
  })
);

const format_instructions = coursesSchema.getFormatInstructions();

const coursesPrompt = new ChatPromptTemplate({
  promptMessages: [
    SystemMessagePromptTemplate.fromTemplate(
      `As an expert tutor you are tasked with creating a comprehensive course based on the provided {topic}, Please organize the course into modules, each focusing on specific aspects of the subject matter.
    Context:
    The JSON data provided contains vaaluble information on how you should structure your output
    Format:
    The course should be structured with  {format_instructions} no matter what
    Style:
    Adopt a professional yet approachable tone throughout the course content. Use language that is clear, concise.
    Example:
    As an expert tutor in the subject of {topic}, your task is to develop a comprehensive course based on the provided JSON data. Organize the course into modules, ensuring that each module covers a distinct aspect of the subject matter.
    By following these guidelines, you will create a dynamic and effective course that meets the needs of learners and maximizes their understanding of the subject matter.
    Make sure your course covers everything on the subject matter from the basics to the advanced concepts, and that it is structured in a logical and easy-to-follow manner.
    Be up to date like example in react use hooks and functional components instead of class components and lifecycle methods.
    Follow the format to strucuture your output no matter what \n{format_instructions}\n{topic}\n{tutor}`
    ),
    HumanMessagePromptTemplate.fromTemplate(
      "Create course {topic} pretending to be  {tutor}"
    ),
  ],
  inputVariables: ["topic", "tutor"],

  partialVariables: { format_instructions },

  outputParser: coursesSchema,
  validateTemplate: true,
});

export const getCoursesPrompt = async (content: courseForm) => {
  const input = await coursesPrompt.format({
    topic: content.topic,
    tutor: content.tutor,
  });
  console.log("🚀 ~ getCoursesPrompt ~ input:", input);

  return input;
};
