import VideoItemLarge from "@/components/videos/VideoItemLarge";
import getVideos from "../helpers/getVideos";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <main>
      <h1 className="text-4xl font-black mb-10 text-center">
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
