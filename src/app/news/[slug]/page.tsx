import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/ArticleList";
import {
  editionLabel,
  formatBriefingDate,
  getAllBriefings,
  getBriefingBySlug,
} from "@/lib/news";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const briefings = await getAllBriefings();
  return briefings.map((briefing) => ({ slug: briefing.slug }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const briefing = await getBriefingBySlug(slug);

  if (!briefing) {
    return {
      title: "브리핑을 찾을 수 없습니다 | DEV_KU",
    };
  }

  return {
    title: `${briefing.title} | DEV_KU`,
    description: briefing.deck,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const briefing = await getBriefingBySlug(slug);

  if (!briefing) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl space-y-12 px-6 pb-24 pt-16">
      <section className="space-y-5">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          {editionLabel(briefing.edition)}
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {briefing.title}
          </h1>
          <p className="text-sm text-muted">
            {briefing.timeframeLabel} · {formatBriefingDate(briefing.publishedAt)}
          </p>
        </div>
        <p className="max-w-3xl text-base leading-7 text-muted">
          {briefing.deck}
        </p>
      </section>

      <section className="rounded-3xl border border-border bg-surface/55 p-6">
        <h2 className="text-lg font-semibold tracking-tight">핵심 포인트</h2>
        <ul className="mt-4 space-y-3 text-sm leading-7">
          {briefing.keyTakeaways.map((takeaway) => (
            <li key={takeaway} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">기사 요약</h2>
          <p className="mt-2 text-sm text-muted">
            원문 전체를 복제하지 않고, 출처 링크와 함께 핵심 요약만 남깁니다.
          </p>
        </div>

        <ArticleList articles={briefing.articles} />
      </section>
    </main>
  );
}
