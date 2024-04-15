import axios from "axios";

export async function fetchVideo(query: string, apiKey: string) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
    query
  )}&type=video&videoCaption=closedCaption&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const videoData = response.data.items[0];
    return videoData;
  } catch (error) {
    console.error("Error fetching video:", error);
    return error;
  }
}
