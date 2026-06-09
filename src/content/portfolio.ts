import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContent: PortfolioContent = {
  eyebrow: "DEV_KU / Personal Edition",
  title:
    "만든 결과물과 운영 감각을 한 장의 지면처럼 엮어내는 개인 포트폴리오 서버.",
  intro:
    "이 사이트의 메인은 포트폴리오입니다. 작업물, 운영 방식, 자동화 감각을 분리하지 않고 하나의 흐름으로 보여주는 개인 웹 기반을 먼저 구축하고 있습니다.",
  links: [
    { label: "작업 영역 보기", href: "/#work" },
    { label: "뉴스 아카이브 보기", href: "/news" },
    {
      label: "GitHub 저장소",
      href: "https://github.com/zzimo9/my-personal-website",
    },
  ],
  heroStats: [
    { label: "Morning edition", value: "09:00" },
    { label: "Evening edition", value: "18:00" },
    { label: "Deploy surface", value: "GitHub Pages" },
  ],
  highlights: [
    { label: "운영 기준", value: "포트폴리오 메인, 뉴스는 보조 축" },
    { label: "배포 방식", value: "GitHub Pages 정적 배포" },
    { label: "자동화 리듬", value: "오전 9시, 오후 6시 브리핑 발행" },
  ],
  tickerItems: [
    { label: "Portfolio first", meta: "Main surface" },
    { label: "AI briefings", meta: "Support layer" },
    { label: "Static export", meta: "Next.js 16" },
    { label: "GitHub Actions", meta: "Auto deploy" },
    { label: "Seoul / KR", meta: "Local base" },
    { label: "Codex rebuild", meta: "In progress" },
  ],
  focusAreas: [
    {
      title: "Portfolio Web",
      body: "작업 결과물과 운영 철학을 한 화면 안에서 신뢰감 있게 읽히도록 구성합니다.",
    },
    {
      title: "AI Briefings",
      body: "출근신문과 퇴근신문 포맷으로 뉴스 수집, 요약, 게시 흐름을 보조 레이어로 운영합니다.",
    },
    {
      title: "Automation",
      body: "스케줄 실행, 산출물 반영, 정적 배포까지 이어지는 자동화 체인을 설계합니다.",
    },
  ],
  featuredProjects: [
    {
      name: "Portfolio Landing Base",
      summary:
        "실제 작업물을 나중에 올릴 수 있도록 먼저 개인 포트폴리오 홈의 구조와 스타일 시스템을 정리한 기반입니다.",
      status: "구성 중",
      href: "/",
      tags: ["Next.js 16", "React 19", "Tailwind v4", "TypeScript"],
    },
    {
      name: "News Archive Foundation",
      summary:
        "출근신문과 퇴근신문을 나중에 누적 발행할 수 있도록 정적 아카이브 경로와 콘텐츠 구조를 먼저 준비해둔 상태입니다.",
      status: "준비 완료",
      href: "/news",
      tags: ["JSON Content", "Static Archive", "AI Agent Workflow"],
    },
    {
      name: "GitHub Pages Deployment",
      summary:
        "GitHub Actions와 Next.js static export를 연결해 무료 호스팅 환경에서도 바로 배포 가능한 퍼블리싱 파이프라인입니다.",
      status: "구축 완료",
      href: "https://github.com/zzimo9/my-personal-website",
      tags: ["GitHub Pages", "Actions", "Static Export"],
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
