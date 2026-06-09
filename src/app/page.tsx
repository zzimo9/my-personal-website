import Link from "next/link";
import { portfolioContent } from "@/content/portfolio";
import { editionLabel, formatBriefingDate, getAllBriefings } from "@/lib/news";

const tickerLoop = [...portfolioContent.tickerItems, ...portfolioContent.tickerItems];

export default async function Home() {
  const allBriefings = await getAllBriefings();
  const latestBriefings = allBriefings.slice(0, 2);

  return (
    <main className="editorial-stage relative overflow-hidden">
      <div className="pointer-events-none fixed inset-y-0 left-3 z-30 hidden border-l border-border/50 xl:block" />
      <div className="pointer-events-none fixed inset-y-0 right-3 z-30 hidden border-r border-border/50 xl:block" />

      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 lg:pb-24">
          <div className="grid min-h-[calc(100vh-12rem)] gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="flex flex-col justify-between py-6">
              <div className="space-y-8">
                <p className="meta-pill">{portfolioContent.eyebrow}</p>
                <div className="space-y-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    Editorial portfolio surface / Seoul / 2026
                  </p>
                  <h1 className="editorial-display max-w-3xl text-5xl sm:text-6xl xl:text-7xl">
                    {portfolioContent.title}
                    <span className="editorial-dot">.</span>
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-[color:var(--site-ink-soft)]">
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
                        className={`rounded-full px-5 py-3 transition-colors ${
                          index === 0
                            ? "bg-accent text-white"
                            : "border border-border hover:border-foreground"
                        }`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`rounded-full px-5 py-3 transition-colors ${
                          index === 0
                            ? "bg-accent text-white"
                            : "border border-border hover:border-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  {portfolioContent.heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-3 rounded-full border border-border bg-surface/70 px-4 py-2.5"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-foreground font-mono text-[11px]">
                        {stat.value}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 border-t border-border/70 pt-6 text-sm text-muted md:flex-row md:items-end md:justify-between">
                <p className="max-w-sm leading-7">
                  포트폴리오, 정적 배포, 자동 브리핑을 하나의 지면처럼 다루는
                  개인 운영 서버.
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  Main issue / Portfolio first
                </p>
              </div>
            </div>

            <div className="relative min-h-[36rem]">
              <div className="absolute inset-y-10 left-[10%] right-0 rounded-[2rem] border border-border/70 bg-surface/55 shadow-[0_28px_70px_-42px_rgba(21,20,15,0.35)]" />

              <div className="paper-panel tilt-left drift-slow absolute left-0 top-10 w-56 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Operating note
                </p>
                <div className="mt-4 space-y-4">
                  {portfolioContent.highlights.map((item) => (
                    <div key={item.label} className="border-t border-border/60 pt-4 first:border-t-0 first:pt-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute right-6 top-0 w-[72%] rounded-[2.25rem] border border-border/70 bg-[linear-gradient(160deg,rgba(255,255,255,0.28),rgba(239,229,214,0.7))] p-8 shadow-[0_34px_80px_-44px_rgba(21,20,15,0.4)]">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    Nº 01 / Editorial build
                  </p>
                  <p className="font-serif text-3xl italic text-accent">Portfolio.</p>
                </div>
                <div className="mt-8 space-y-6">
                  {portfolioContent.focusAreas.map((area, index) => (
                    <div key={area.title} className="grid gap-3 border-t border-border/60 pt-5 md:grid-cols-[4.5rem_1fr]">
                      <p className="font-serif text-3xl italic text-accent/80">
                        0{index + 1}
                      </p>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                          {area.title}
                        </p>
                        <p className="mt-2 text-base leading-7">{area.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="paper-panel tilt-right drift-mid absolute bottom-10 right-10 w-[23rem] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Briefing preview
                </p>
                <div className="mt-4 space-y-4">
                  {latestBriefings.map((briefing) => (
                    <div key={briefing.slug} className="border-t border-border/60 pt-4 first:border-t-0 first:pt-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                        {editionLabel(briefing.edition)}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6">
                        {briefing.title}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                        {formatBriefingDate(briefing.publishedAt)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-2 left-12 rounded-full border border-border/70 bg-background/80 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted backdrop-blur">
                09:00 / 18:00 / archive loop
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/70 py-6">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 md:grid-cols-[16rem_1fr] md:items-center">
          <div className="flex items-center gap-4 border-b border-border/70 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">
                Current wire
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                Signals across the build
              </p>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="ticker-track">
              {tickerLoop.map((item, index) => (
                <div key={`${item.label}-${index}`} className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm">
                  <span className="text-accent">•</span>
                  <span className="font-mono uppercase tracking-[0.18em] text-foreground">
                    {item.label}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {item.meta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-24">
        <div className="section-rule">
          <span className="font-serif text-2xl italic text-accent">II.</span>
          <span>Selected focus / portfolio issue</span>
          <span>002 / 005</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="meta-pill">Manifesto</p>
            <h2 className="editorial-display max-w-xl text-4xl sm:text-5xl">
              홈은 <em>작업물의 온도</em>를 보여주고, 뉴스는 운영 감각을 증명하는
              보조 레이어로 남깁니다
              <span className="editorial-dot">.</span>
            </h2>
            <p className="max-w-lg text-base leading-8 text-[color:var(--site-ink-soft)]">
              레퍼런스처럼 시각적 분위기는 강하게 가져가되, 목적은 명확하게
              포트폴리오에 둡니다. 그래서 이 홈은 소개 페이지가 아니라 앞으로
              실제 작업물이 들어올 수 있는 편집형 표지면으로 설계합니다.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {portfolioContent.focusAreas.map((area, index) => (
              <article key={area.title} className="paper-panel p-6">
                <p className="font-serif text-4xl italic text-accent/80">
                  0{index + 1}
                </p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {area.title}
                </p>
                <p className="mt-3 text-base leading-7">{area.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="build" className="py-6">
        <div className="dark-slab mx-auto max-w-6xl px-6 py-16">
          <div className="section-rule border-white/15 text-white/60">
            <span className="font-serif text-2xl italic text-accent">III.</span>
            <span>Build status / current foundations</span>
            <span>003 / 005</span>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-6">
              <p className="meta-pill text-accent">Selected builds</p>
              <h2 className="editorial-display max-w-xl text-4xl text-white sm:text-5xl">
                실제 작업물을 올리기 전에 먼저 <em>뼈대와 배포</em>를 완성하는
                단계
                <span className="editorial-dot">.</span>
              </h2>
              <p className="max-w-lg text-base leading-8 text-white/72">
                지금 이 사이트는 결과물을 채워 넣기 전 단계의 기반 작업을
                보여줍니다. 레이아웃, 정적 배포, 아카이브 구조, 자동화 동선을
                먼저 다듬고 있습니다.
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {portfolioContent.featuredProjects.map((project, index) => {
                const card = (
                  <article
                    className={`rounded-[1.6rem] bg-background px-6 py-7 text-foreground shadow-[0_26px_70px_-50px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-1 ${
                      index === 1 ? "lg:translate-y-8" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                        {project.status}
                      </p>
                      <p className="font-serif text-2xl italic text-accent">
                        0{index + 1}
                      </p>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {project.summary}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                );

                return project.href.startsWith("http") ? (
                  <a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {card}
                  </a>
                ) : (
                  <Link key={project.name} href={project.href}>
                    {card}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="section-rule">
          <span className="font-serif text-2xl italic text-accent">IV.</span>
          <span>Method / publishing loop</span>
          <span>004 / 005</span>
        </div>
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="meta-pill">Method</p>
            <h2 className="editorial-display max-w-3xl text-4xl sm:text-5xl">
              포트폴리오 서버를 다루는 방식도 하나의 <em>작업물</em>로 보이게
              설계합니다
              <span className="editorial-dot">.</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {portfolioContent.methodSteps.map((step) => (
              <article key={step.number} className="space-y-5 border-t border-border/70 pt-6">
                <p className="font-serif text-6xl italic leading-none text-accent/85">
                  {step.number}
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-muted">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="section-rule">
          <span className="font-serif text-2xl italic text-accent">V.</span>
          <span>Capabilities / latest briefings</span>
          <span>005 / 005</span>
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            {portfolioContent.capabilityGroups.map((group) => (
              <article key={group.title} className="paper-panel p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {group.title}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border px-3 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="meta-pill">Latest briefings</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em]">
                  최신 브리핑은 별도 아카이브로 분리
                </h2>
              </div>
              <Link
                href="/news"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted underline underline-offset-4"
              >
                Open archive
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {latestBriefings.map((briefing) => (
                <Link
                  key={briefing.slug}
                  href={`/news/${briefing.slug}`}
                  className="paper-panel block p-6 transition-transform hover:-translate-y-1"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    {editionLabel(briefing.edition)}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em]">
                    {briefing.title}
                  </h3>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    {formatBriefingDate(briefing.publishedAt)}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">{briefing.deck}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="paper-panel overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <p className="meta-pill">Contact</p>
              <h2 className="editorial-display max-w-3xl text-4xl sm:text-5xl">
                작업물은 나중에 채워도, <em>무대와 구조</em>는 지금부터 제대로
                준비합니다
                <span className="editorial-dot">.</span>
              </h2>
              <p className="max-w-2xl text-base leading-8 text-[color:var(--site-ink-soft)]">
                다음 단계에서는 실제 프로젝트, 노트, 브리핑 기록을 이 구조 안에
                차곡차곡 쌓아 넣을 예정입니다. 소스와 운영 흐름은 아래 채널로
                이어집니다.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:zzimo9@gmail.com"
                className="flex items-center justify-between rounded-full border border-border px-5 py-4 text-sm transition-colors hover:border-foreground"
              >
                <span>zzimo9@gmail.com</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Mail
                </span>
              </a>
              <a
                href="https://github.com/zzimo9"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-full border border-border px-5 py-4 text-sm transition-colors hover:border-foreground"
              >
                <span>GitHub Profile</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Source
                </span>
              </a>
              <a
                href="https://zzimo9.github.io/my-personal-website/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-full border border-border px-5 py-4 text-sm transition-colors hover:border-foreground"
              >
                <span>Live Site</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Publish
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
