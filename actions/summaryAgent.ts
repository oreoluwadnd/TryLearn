import { summaryData } from "@/app/(course)/course/[courseId]/chapter/[chapterId]/_components/course-tab";
import axios from "axios";

export const summaryAgent = async (topic: string) => {
  console.log("🚀 ~ response:", topic);
  const data = {
    topic: topic,
  };
  const res = await axios.post<string>("/api/summary", data);
  return res.data;
};
