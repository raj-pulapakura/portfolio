import VideoItemLarge from "@/components/videos/VideoItemLarge";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <main>
      <h1 className="text-3xl md:text-4xl font-black mb-10 text-center">
        I post{" "}
        <Link href="https://www.youtube.com/@rajpulapakura9119">
          <span className="underline underline-offset-4 decoration-light dark:decoration-dark">
            YouTube Videos <FontAwesomeIcon icon={faYoutube} />
          </span>
        </Link>{" "}
        were I talk about software development, AI, and self-improvement.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {videos.map((value) => (
          <VideoItemLarge snippet={value.snippet} />
        ))}
      </div>
    </main>
  );
}

const API_KEY = "AIzaSyA3OXOpwyKDuO0ceDVSOKOdufcQE_1oPg4";
const channelId = "UC3gzXBIw0UKUU9PVOr45n0w";

async function getVideos(): Promise<{ snippet: PlaylistItemSnippet }[]> {
  try {
    // get channel data
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&part=contentDetails&id=${channelId}&key=${API_KEY}`
    );
    const data = await channelResponse.json();
    const uploadId = data.items[0].contentDetails.relatedPlaylists.uploads;

    // from channel data, get "playlist" containing all videos
    const maxResults = 50;
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadId}&maxResults=${maxResults}&key=${API_KEY}`,
      { next: { revalidate: 1200 } } // update cache every 20 minutes (1200 seconds)
    );
    const playlistData = await playlistResponse.json();

    // return items
    return playlistData.items;
  } catch (error) {
    console.error("Error fetching videos:", (error as Error).message);
    return [];
  }
}
