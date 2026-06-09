import Link from "next/link";
import { editionLabel, formatBriefingDate } from "@/lib/news";
import type { NewsBriefing } from "@/types/news";

interface BriefingCardProps {
  briefing: NewsBriefing;
}

export function BriefingCard({ briefing }: BriefingCardProps) {
  return (
    <Link
      href={`/news/${briefing.slug}`}
      className="group block rounded-2xl border border-border bg-surface/55 p-6 transition-colors duration-200 hover:border-foreground"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            {editionLabel(briefing.edition)}
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">
            {briefing.title}
          </h2>
        </div>
        <span className="text-xs text-muted">{briefing.timeframeLabel}</span>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted">{briefing.deck}</p>

      <ul className="mt-5 space-y-2 text-sm leading-6">
        {briefing.keyTakeaways.slice(0, 3).map((takeaway) => (
          <li key={takeaway} className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/70" />
            <span>{takeaway}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between text-xs text-muted">
        <span>{briefing.articles.length}개 기사 정리</span>
        <span>{formatBriefingDate(briefing.publishedAt)}</span>
      </div>
    </Link>
  );
}
