"use client";

import Image from "next/image";
import Link from "next/link";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export default function VideoItemLarge({
  snippet,
}: {
  snippet: PlaylistItemSnippet;
}) {
  const date = new Date(snippet.publishedAt!).toLocaleDateString("en-us", {
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
        {snippet.thumbnails && (
          <Image
            className="rounded-t-lg w-full"
            alt="video thumbnail"
            src={snippet.thumbnails.maxres?.url}
            width={snippet.thumbnails.maxres?.width}
            height={snippet.thumbnails.maxres?.height}
          />
        )}
        <div className="p-7">
          <h1 className="text-2xl font-bold mb-2">{snippet?.title}</h1>
          <h1 className="mb-5 text-gray-800 dark:text-gray-300">{date}</h1>
          <h1 className="text-gray-800 dark:text-gray-300 overflow-hidden">
            {snippet.description!.slice(0, 200) + "..."}
          </h1>
        </div>
      </section>
    </Link>
  );
}
