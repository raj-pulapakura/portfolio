import { Article } from "@/data/articles";
import Link from "next/link";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function ArticleItemsSmall({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <AnimationOnScroll
      animateOnce={true}
      animateIn="animate__fadeIn"
      animatePreScroll={true}
      className={`flex flex-row shadow-boxlight dark:shadow-boxdark rounded-lg p-5 lg:p-10 ${className}`}
    >
      <Link href={article.articleURL}>
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-light dark:text-dark mb-2">
          {article.title}
        </h1>
        <p className="text-gray-400 mb-5">{article.datePublished}</p>
        <p>{article.subtitle}</p>
      </Link>
    </AnimationOnScroll>
  );
}
