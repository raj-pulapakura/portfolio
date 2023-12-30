import { Article } from "@/data/articles";
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
      className={`flex flex-row shadow-boxlight dark:shadow-boxdark rounded-lg px-10 py-10 ${className}`}
    >
      <Link href={article.articleURL}>
        <h1 className="text-2xl text-light dark:text-dark mb-2">
          {article.title}
        </h1>
        <p className="text-gray-400 mb-5">{article.datePublished}</p>
        <p>{article.subtitle}</p>
      </Link>
    </section>
  );
}
