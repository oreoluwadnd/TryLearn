import axios from "axios";
import { courseForm } from "../app/(dashboard)/(routes)/dashboard/page";

export type CourseFromLlm = {
  course: string;
  description: string;
  image: string;
  duration: string;
  chapters: {
    description: string;
    chapter: string;
    query: string;
  }[];
};

export const generateCoursesApi = async (values: courseForm) => {
  console.log("🚀 ~ generateCoursesApi ~ values:", values);

  const res = await axios.post<CourseFromLlm>("/api/courses/create", values);
  return res.data;
};
