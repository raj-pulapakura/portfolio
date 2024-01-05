"use client";

import articles from "@/data/articles";
import ArticleItemsSmall from "../articles/ArticleItemSmall";

export default function ArticlesList() {
  return (
    <>
      {articles.map((article) => (
        <ArticleItemsSmall key={article.title} article={article} />
      ))}
    </>
  );
}
