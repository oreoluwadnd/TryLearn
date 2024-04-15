import axios from "axios";

export type enrollValues = {
  course: string;
  description: string;
  image: string;
  duration: string;
  tutor: string;
  chapters: {
    description: string;
    chapter: string;
    query: string;
  }[];
};
interface Result {
  course: string;
  description: string;
  duration: string;
  chapters: Chapter[];
  tutor: string;
  image: string;
}

interface Chapter {
  chapter: string;
  video?: string;
  id: string;
  blog: Blog;
  description: string;
  query: string;
}
interface Blog {
  title: string;
  content: string;
  id: string;
}

export const enrollCourseApi = async (values: enrollValues) => {
  console.log("🚀 ~ generateCoursesApi ~ values:", values);

  const res = await axios.post<Result>("/api/courses/enroll", values);
  return res.data;
};
