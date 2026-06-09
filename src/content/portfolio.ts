import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContent: PortfolioContent = {
  eyebrow: "DEV_KU / Personal Edition",
  title: "DEV_KU 개인 포트폴리오",
  intro:
    "Next.js와 GitHub Pages로 운영하는 개인 웹사이트입니다. 작업물, 배포 흐름, 운영 문서, 뉴스 브리핑 아카이브를 한곳에 정리합니다.",
  links: [
    { label: "작업 영역 보기", href: "/#work" },
    { label: "뉴스 아카이브 보기", href: "/news" },
    {
      label: "GitHub 저장소",
      href: "https://github.com/zzimo9/my-personal-website",
    },
  ],
  heroStats: [
    { label: "Static pages", value: "7" },
    { label: "News editions", value: "2" },
    { label: "Deploy", value: "Pages" },
  ],
  highlights: [
    { label: "운영 기준", value: "main 브랜치 기준 배포, 기능 작업은 feature 브랜치" },
    { label: "배포 방식", value: "Next.js static export와 GitHub Actions" },
    { label: "자동화 리듬", value: "오전 9시, 오후 6시 JSON 브리핑 갱신" },
  ],
  tickerItems: [
    { label: "Portfolio first", meta: "Main surface" },
    { label: "AI briefings", meta: "Support layer" },
    { label: "Static export", meta: "Next.js 16" },
    { label: "GitHub Actions", meta: "Auto deploy" },
    { label: "Seoul / KR", meta: "Local base" },
    { label: "Portfolio cards", meta: "Live entries" },
  ],
  focusAreas: [
    {
      title: "Portfolio Web",
      body: "개인 소개, 작업물, 배포 상태를 한 화면에서 읽히도록 구성한 정적 포트폴리오입니다.",
    },
    {
      title: "AI Briefings",
      body: "출근신문과 퇴근신문 포맷의 JSON 콘텐츠를 정적 아카이브로 쌓는 구조입니다.",
    },
    {
      title: "Automation",
      body: "외부 에이전트, GitHub push, Pages 재배포까지 이어지는 운영 루틴을 문서화했습니다.",
    },
  ],
  featuredProjects: [
    {
      name: "DEV_KU Portfolio Site",
      summary:
        "Next.js 16 App Router와 Tailwind CSS v4로 만든 개인 포트폴리오입니다. 정적 export를 전제로 홈, 뉴스 아카이브, 운영 문서를 함께 묶었습니다.",
      status: "배포 가능",
      href: "https://zzimo9.github.io/my-personal-website/",
      tags: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript"],
    },
    {
      name: "Briefing Archive",
      summary:
        "아침/저녁 브리핑 JSON을 `generateStaticParams()`로 정적 상세 페이지에 연결한 뉴스 아카이브입니다.",
      status: "운영 준비",
      href: "/news",
      tags: ["JSON Content", "Static Archive", "AI Agent Workflow"],
    },
    {
      name: "GitHub Pages Ops Kit",
      summary:
        "Pages 배포 체크리스트, 새 PC 복구 가이드, 두 PC 브랜치 전략, 저장소 보안 하드닝 문서를 묶은 운영 키트입니다.",
      status: "문서화 완료",
      href: "https://github.com/zzimo9/my-personal-website/tree/main/docs",
      tags: ["GitHub Pages", "Branch Workflow", "Security Docs"],
    },
  ],
  methodSteps: [
    {
      number: "01",
      title: "Frame",
      body: "사이트의 첫 목적을 포트폴리오로 고정하고, 뉴스와 자동화는 보조 축으로 분리합니다.",
    },
    {
      number: "02",
      title: "Compose",
      body: "소개, 작업 기반, 운영 방식이 서로 다른 카드가 아니라 한 편집면처럼 읽히게 만듭니다.",
    },
    {
      number: "03",
      title: "Automate",
      body: "정해진 시간에 브리핑 산출물이 쌓이고, 웹에는 추적 가능한 정적 데이터로 반영합니다.",
    },
    {
      number: "04",
      title: "Publish",
      body: "GitHub Actions와 Pages를 통해 수정과 배포가 끊기지 않는 퍼블리싱 루프를 유지합니다.",
    },
  ],
  capabilityGroups: [
    {
      title: "Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Content Ops",
      items: ["뉴스 큐레이션", "브리핑 아카이브", "정적 콘텐츠 구조화"],
    },
    {
      title: "Automation",
      items: ["Antigravity cron", "GitHub Actions", "AI Agent Hand-off"],
    },
  ],
};
