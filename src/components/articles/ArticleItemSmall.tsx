import { Article } from "@/data/articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticleItemsSmall({ article }: { article: Article }) {
  return (
    <section>
      <Link href={article.articleURL}>
        <Image
          src={article.thumbnailURL}
          alt={`${article.title} thumbnail`}
          width="100"
          height="50"
        />
        <h1>{article.title}</h1>
        <p>{article.subtitle}</p>
      </Link>
    </section>
  );
}
