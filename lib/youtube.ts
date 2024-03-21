import axios from "axios";

export async function fetchVideo(query: string, apiKey: string) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    query
  )}&type=video&videoCaption=closedCaption&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const videoId = response.data.items[0].id.videoId;
    // const videoId = response.data.items;
    // console.log("🚀 ~ file: youtube.ts:13 ~ fetchVideo ~ result:", result);
    // const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    // console.log("Video URL:", result);
    return videoId;
  } catch (error) {
    console.error("Error fetching video:", error);
    return error;
  }
}
