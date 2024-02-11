import { carrerformSchema } from "@/app/(dashboard)/(routes)/dashbboard/page";
import axios from "axios";
import { z } from "zod";

export const handleCarrerSubmit = async (
  values: z.infer<typeof carrerformSchema>
) => {
  try {
    const response = await axios.post("/api/skills", values);
    console.log("🚀 ~ response:", response);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    return error;
  }
};
