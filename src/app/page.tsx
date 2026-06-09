import Link from "next/link";
import { portfolioContent } from "@/content/portfolio";
import { editionLabel, formatBriefingDate, getAllBriefings } from "@/lib/news";

export default async function Home() {
  const allBriefings = await getAllBriefings();
  const latestBriefings = allBriefings.slice(0, 2);

  return (
    <main className="mx-auto max-w-5xl space-y-24 px-6 pb-24 pt-16">
      <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">
            {portfolioContent.eyebrow}
          </p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {portfolioContent.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted">
              {portfolioContent.intro}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {portfolioContent.links.map((link, index) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`rounded-full px-5 py-2.5 transition-colors ${
                    index === 0
                      ? "bg-foreground text-background transition-opacity hover:opacity-85"
                      : "border border-border hover:border-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`rounded-full px-5 py-2.5 transition-colors ${
                    index === 0
                      ? "bg-foreground text-background transition-opacity hover:opacity-85"
                      : "border border-border hover:border-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>

        <aside className="rounded-3xl border border-border bg-surface/55 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">At a Glance</p>
          <div className="mt-5 space-y-5">
            {portfolioContent.highlights.map((item) => (
              <div
                key={item.label}
                className="border-b border-border pb-5 last:border-b-0 last:pb-0"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-7">{item.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="work" className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Selected Focus
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            지금 이 포트폴리오 서버에서 보여줄 핵심 축
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {portfolioContent.focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl border border-border bg-surface/45 p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {area.title}
              </p>
              <p className="mt-4 text-lg font-medium">{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Build Status
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              실제 작업물을 올리기 전에 먼저 구축해둔 기반
            </h2>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {portfolioContent.featuredProjects.map((project) => {
            const isExternal = project.href.startsWith("http");

            const content = (
              <article className="flex h-full flex-col rounded-3xl border border-border bg-surface/45 p-6 transition-colors hover:border-foreground">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                      {project.status}
                    </p>
                    <h3 className="mt-3 text-lg font-medium">{project.name}</h3>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );

            return isExternal ? (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link key={project.name} href={project.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Operating Model
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            홈은 포트폴리오로 두고, 뉴스는 별도 축으로 운영합니다.
          </h2>
          <p className="text-sm leading-7 text-muted">
            참고한 포트폴리오 구조처럼 첫 화면에서는 사람과 작업을 먼저
            보여주고, 뉴스 브리핑은 사이트의 신선도와 운영 역량을 증명하는
            서브 페이지로 분리했습니다.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-surface/55 p-6">
          <ol className="space-y-4 text-sm leading-7">
            <li>1. 홈에서는 소개, 작업 방향, 링크를 우선적으로 보여줍니다.</li>
            <li>2. 뉴스 브리핑은 `/news`에서 아카이브 형태로 누적합니다.</li>
            <li>3. Antigravity cron이 정해진 시간에 수집과 요약을 수행합니다.</li>
            <li>4. 결과 파일이 갱신되면 GitHub 배포 파이프라인으로 반영합니다.</li>
          </ol>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Capabilities
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            이 포트폴리오가 담아낼 기술 축
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {portfolioContent.capabilityGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-border bg-surface/45 p-6"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {group.title}
              </p>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <p key={item} className="text-sm leading-7">
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Latest Briefings
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              최신 뉴스 브리핑 티저
            </h2>
          </div>
          <Link
            href="/news"
            className="text-sm text-muted underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            전체 아카이브
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {latestBriefings.map((briefing) => (
            <Link
              key={briefing.slug}
              href={`/news/${briefing.slug}`}
              className="rounded-3xl border border-border bg-surface/45 p-6 transition-colors hover:border-foreground"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {editionLabel(briefing.edition)}
              </p>
              <h3 className="mt-3 text-lg font-medium">{briefing.title}</h3>
              <p className="mt-2 text-sm text-muted">
                {formatBriefingDate(briefing.publishedAt)}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">{briefing.deck}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="rounded-[2rem] border border-border bg-surface/55 px-6 py-8 sm:px-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
          Contact
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          작업 문의와 연결 포인트
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
          포트폴리오 정리, 자동화된 콘텐츠 운영, GitHub 기반 정적 배포 같은
          흐름을 계속 확장해갈 예정입니다. 자세한 결과물과 소스는 아래 채널로
          연결할 수 있습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href="mailto:zzimo9@gmail.com"
            className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-foreground"
          >
            zzimo9@gmail.com
          </a>
          <a
            href="https://github.com/zzimo9"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-5 py-2.5 transition-colors hover:border-foreground"
          >
            GitHub Profile
          </a>
        </div>
      </section>
    </main>
  );
}
