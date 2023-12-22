import { Article } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticleItemsSmall({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <section
      className={`flex flex-row items-center shadow-boxlight dark:shadow-boxdark rounded-lg px-10 py-10 ${className}`}
    >
      <Link href={article.articleURL}>
        <h1 className="text-2xl text-light dark:text-dark mb-5">
          {article.title}
        </h1>
        <p>{article.subtitle}</p>
      </Link>
    </section>
  );
}
