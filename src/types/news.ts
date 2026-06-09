export type BriefingEdition = "morning" | "evening";

export interface BriefingArticle {
  title: string;
  source: string;
  category: string;
  publishedAt: string;
  summary: string;
  url: string;
}

export interface NewsBriefing {
  slug: string;
  edition: BriefingEdition;
  title: string;
  publishedAt: string;
  timeframeLabel: string;
  deck: string;
  keyTakeaways: string[];
  articles: BriefingArticle[];
}
