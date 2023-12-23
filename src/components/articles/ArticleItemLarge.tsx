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
          className="rounded-t-lg lg:rounded-none lg:rounded-l-lg w-full lg:w-1/2"
          src={article.thumbnailURL}
          alt="article image"
          width="1000"
          height="1000"
        />
        <div className="p-5">
          <h1 className="text-2xl text-light dark:text-dark mb-2">
            {article.title}
          </h1>
          <p className="text-gray-400 mb-5">{article.datePublished}</p>
          <p className="mb-5">{article.subtitle}</p>
          <div>
            {article.tags.map((tag) => (
              <Chip className="text-sm" secondary={true}>
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </section>
    </Link>
  );
}
