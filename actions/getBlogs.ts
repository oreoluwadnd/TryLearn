import { carrerformSchema } from "@/app/(dashboard)/(routes)/dashbboard/page";
import qs from "query-string";
import axios from "axios";
import { z } from "zod";

export const handleBlogSubmit = async (
  values: z.infer<typeof carrerformSchema>
) => {
  const url = qs.stringifyUrl(
    {
      url: "https://customsearch.googleapis.com/customsearch/v1",
      query: {
        cx: process.env.NEXT_PUBLIC_SEARCH_ENGINE_KEY as string,
        num: 5,
        excludeTerms: "stackoverflow",
        q: values.title,
        key: process.env.NEXT_PUBLIC_GOOGLE_KEY as string,
      },
    },
    {
      skipNull: true,
      skipEmptyString: true,
    }
  );

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      console.log("🚀 ~ response:", response);
      return response.data.items;
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    return error;
  }
};
