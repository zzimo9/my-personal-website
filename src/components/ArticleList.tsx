import type { BriefingArticle } from "@/types/news";
import { formatBriefingDate } from "@/lib/news";

interface ArticleListProps {
  articles: BriefingArticle[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <article
          key={`${article.source}-${article.title}`}
          className="rounded-2xl border border-border bg-surface/45 p-5"
        >
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted">
            <span>{article.category}</span>
            <span>{article.source}</span>
            <span>{formatBriefingDate(article.publishedAt)}</span>
          </div>

          <h3 className="mt-3 text-lg font-semibold tracking-tight">
            {article.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted">{article.summary}</p>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            원문 보기
          </a>
        </article>
      ))}
    </div>
  );
}
