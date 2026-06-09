# DEV_KU Personal Website

개인 포트폴리오 웹사이트를 먼저 구축하고, 이후 뉴스 브리핑 아카이브를 보조 기능으로 붙일 수 있게 설계한 Next.js 16 프로젝트입니다.

## 현재 우선순위

- 포트폴리오용 웹 서버 배포 기반 완성
- GitHub Pages 무료 배포 구조 확정
- 뉴스 브리핑용 정적 아카이브 경로 선구축

## Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- TypeScript
- GitHub Actions
- GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

HTTPS 로컬 개발:

```bash
npm run https
```

## Validation

```bash
npm run lint
npm run build
```

이 프로젝트는 `output: "export"`를 사용하므로 서버 런타임 없이 정적 사이트로 배포됩니다.

새 PC 환경 복구 가이드는 [docs/setup-on-new-pc.md](/C:/devku/my-personal-website/docs/setup-on-new-pc.md) 에 정리되어 있습니다.
브랜치 운영 전략은 [docs/branch-strategy.md](/C:/devku/my-personal-website/docs/branch-strategy.md) 에 정리되어 있습니다.
두 대의 개발 PC를 오가며 작업하는 흐름은 [docs/two-pc-workflow.md](/C:/devku/my-personal-website/docs/two-pc-workflow.md) 에 정리되어 있습니다.

## Branch Workflow

이 저장소는 `main = 운영 배포용` 원칙으로 운영합니다.

- `main`
  - GitHub Pages 운영 배포 기준 브랜치
  - 배포 가능한 안정 코드만 유지
- `feature/*`
  - 신규 작업 브랜치
  - 집 PC와 다른 PC 모두 같은 작업 브랜치를 이어서 사용 가능
- `hotfix/*`
  - 운영 중 긴급 수정 브랜치

중요 원칙:

- `main`에서 직접 기능 개발하지 않기
- 작업은 항상 `feature/*` 또는 `hotfix/*`에서 진행
- 다른 PC로 넘어가기 전에는 반드시 `commit` 후 `push`
- `main` 반영 후에만 운영 배포

## GitHub Pages Deployment

현재 저장소에는 다음 배포 구성이 포함되어 있습니다.

- `next.config.ts`
  - GitHub Actions 환경에서 저장소명 기준 `basePath` 자동 처리
  - `output: "export"`로 정적 빌드 생성
- `.github/workflows/deploy-pages.yml`
  - `main` 브랜치 push 시 Pages 배포
  - `out/` 산출물을 GitHub Pages 아티팩트로 업로드

배포 절차:

1. GitHub 저장소 생성
2. 이 프로젝트를 `main` 브랜치로 push
3. GitHub 저장소 `Settings > Pages`에서 `GitHub Actions`를 소스로 선택
4. 이후 `main`에 push 할 때마다 자동 배포

배포 전 체크리스트는 [docs/github-pages-deployment-checklist.md](/C:/devku/my-personal-website/docs/github-pages-deployment-checklist.md)에서 바로 확인할 수 있습니다.

## Important Limitation

GitHub Pages는 무료이지만 `정적 호스팅`입니다.

- 가능한 것
  - 포트폴리오 페이지
  - 정적 뉴스 아카이브
  - GitHub Actions 기반 재배포
- 불가능한 것
  - 서버에서 직접 크롤러 상시 실행
  - 백엔드 API 런타임
  - 데이터베이스 기반 동적 처리

즉, 뉴스 자동화는 `외부 AI Agent 또는 cron이 JSON 생성 -> GitHub push -> Pages 재배포` 구조로 운영해야 합니다.

## News Content Structure

브리핑 데이터는 `src/content/news/*.json`에 저장합니다.

- `YYYY-MM-DD-morning.json`
- `YYYY-MM-DD-evening.json`

운영 가이드는 [docs/news-automation.md](/C:/devku/my-personal-website/docs/news-automation.md)에 정리되어 있습니다.

## Next Step

- 실제 포트폴리오 작업물 반영
- 커스텀 도메인 연결 여부 결정
- 뉴스 자동화 에이전트와 GitHub 반영 루틴 연결

## Repository Notes

GitHub에는 소스 코드와 문서, 설정 파일만 올립니다.

- 포함
  - `src/`
  - `public/`
  - `package.json`
  - `package-lock.json`
  - `.github/workflows/`
  - `docs/`
- 제외
  - `node_modules/`
  - `.next/`
  - `out/`
  - `.env*`
