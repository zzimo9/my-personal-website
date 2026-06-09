import { BriefingCard } from "@/components/BriefingCard";
import { getAllBriefings } from "@/lib/news";

export const metadata = {
  title: "브리핑 아카이브 | DEV_KU",
  description: "출근신문과 퇴근신문 형식으로 정리한 AI 뉴스 브리핑 아카이브입니다.",
};

export default async function NewsPage() {
  const briefings = await getAllBriefings();

  return (
    <main className="mx-auto max-w-5xl space-y-10 px-6 pb-24 pt-16">
      <section className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          News Archive
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          출근신문 / 퇴근신문 아카이브
        </h1>
        <p className="max-w-3xl text-sm leading-7 text-muted">
          매일 아침과 저녁에 수집한 뉴스를 정리해 누적하는 페이지입니다.
          향후에는 날짜, 카테고리, 출처 기준으로 더 세밀하게 탐색할 수 있도록
          확장할 계획입니다.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {briefings.map((briefing) => (
          <BriefingCard key={briefing.slug} briefing={briefing} />
        ))}
      </section>
    </main>
  );
}
