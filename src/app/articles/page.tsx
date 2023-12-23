import ArticleItemLarge from "@/components/articles/ArticleItemLarge";
import articles from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main>
      <h1 className="text-4xl font-black mb-10 text-center">
        <span className="underline underline-offset-4 decoration-light dark:decoration-dark">
          Follow me on Medium
        </span>
        , where I write{" "}
        <span className="text-light dark:text-dark"> technical articles</span>,
        sharing my thoughts on software development and AI.
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {articles.map((article) => (
          <ArticleItemLarge article={article} key={article.title} />
        ))}
      </div>
    </main>
  );
}
