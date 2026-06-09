import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContent: PortfolioContent = {
  eyebrow: "DEV_KU Portfolio",
  title:
    "만든 결과물과 운영 감각이 함께 보이도록 구성하는 개인 포트폴리오 웹.",
  intro:
    "이 사이트의 메인은 포트폴리오입니다. 내가 만들고 싶은 제품, 자동화하고 싶은 흐름, 그리고 꾸준히 운영할 수 있는 구조를 함께 쌓아두는 개인 작업 공간으로 설계하고 있습니다.",
  links: [
    { label: "작업 영역 보기", href: "/#work" },
    { label: "뉴스 아카이브 보기", href: "/news" },
    {
      label: "GitHub 저장소",
      href: "https://github.com/zzimo9/my-personal-website",
    },
  ],
  highlights: [
    { label: "운영 기준", value: "포트폴리오 메인, 뉴스는 보조 축" },
    { label: "배포 방식", value: "GitHub Pages 정적 배포" },
    { label: "자동화 리듬", value: "오전 9시, 오후 6시 브리핑 발행" },
  ],
  focusAreas: [
    {
      title: "Portfolio Web",
      body: "작업 결과물과 운영 철학을 신뢰감 있게 보여주는 개인 웹사이트를 구축합니다.",
    },
    {
      title: "AI Briefings",
      body: "출근신문과 퇴근신문 포맷으로 뉴스 수집, 요약, 게시 흐름을 운영합니다.",
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
