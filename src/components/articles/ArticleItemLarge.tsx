import { Article } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";
import Chip from "../Chip";

export default function ArticleItemLarge({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <Link href={article.articleURL}>
      <section
        className={`flex flex-col lg:flex-row items-stretch shadow-boxlight dark:shadow-boxdark rounded-lg ${className}`}
      >
        <Image
          className="rounded-t-lg lg:rounded-none lg:rounded-l-lg w-full lg:w-1/2 h-60 lg:h-96 object-center object-none bg-white"
          src={article.thumbnailURL}
          alt="article image"
          width="1000"
          height="1000"
        />
        <div className="p-5 lg:w-1/2">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-light dark:text-dark mb-2">
            {article.title}
          </h1>
          <p className="text-gray-400 mb-5">{article.datePublished}</p>
          <p className="mb-5">{article.subtitle}</p>
          <div>
            {article.tags.map((tag) => (
              <Chip className="text-xs md:text-sm" secondary={true}>
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </section>
    </Link>
  );
}
