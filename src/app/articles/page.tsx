import ArticleItemLarge from "@/components/articles/ArticleItemLarge";
import articles from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main>
      <h1>
        I write technical articles on Medium, where I share my thoughts on all
        things tech.
      </h1>
      {articles.map((article) => (
        <ArticleItemLarge article={article} key={article.title} />
      ))}
    </main>
  );
}
