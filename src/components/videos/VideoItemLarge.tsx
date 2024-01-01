import Image from "next/image";
import { youtube_v3 } from "googleapis";
import Link from "next/link";

export default function VideoItemLarge({
  snippet,
}: {
  snippet: youtube_v3.Schema$PlaylistItemSnippet | undefined;
}) {
  const date = new Date(snippet?.publishedAt!).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "utc",
  });

  return (
    <Link
      href={`https://www.youtube.com/watch?v=${snippet?.resourceId?.videoId}`}
    >
      <section className="shadow-boxlight dark:shadow-boxdark rounded-lg h-full">
        {snippet?.thumbnails && (
          <Image
            className="rounded-t-lg"
            alt="video thumbnail"
            src={snippet?.thumbnails.maxres?.url || ""}
            width={snippet.thumbnails.maxres?.width || 0}
            height={snippet.thumbnails.maxres?.height || 0}
          />
        )}
        <div className="p-7">
          <h1 className="text-2xl font-bold mb-2">{snippet?.title}</h1>
          <h1 className="mb-5 text-gray-800 dark:text-gray-300">{date}</h1>
          <h1 className="text-gray-800 dark:text-gray-300">
            {snippet?.description!.slice(0, 200) + "..."}
          </h1>
        </div>
      </section>
    </Link>
  );
}
