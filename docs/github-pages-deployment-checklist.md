# GitHub Pages Deployment Checklist

이 프로젝트는 Next.js static export + GitHub Actions + GitHub Pages 조합으로 배포됩니다.

## 현재 상태 요약

- 원격 저장소 연결됨
  - `origin`: `https://github.com/zzimo9/my-personal-website.git`
- GitHub Pages 워크플로 존재
  - `.github/workflows/deploy-pages.yml`
- 정적 export 설정 완료
  - `next.config.ts`
- 로컬 검증 완료
  - `npm run lint`
  - `npm run build`

## 가장 중요한 배포 조건

자동 배포는 `main` 브랜치 push 기준입니다.

현재 로컬 작업 브랜치:

- `feature/portfolio-layout`

즉, 지금 상태를 GitHub Pages에 자동 반영하려면 아래 둘 중 하나가 필요합니다.

1. `main` 브랜치로 병합 후 push
2. 워크플로 트리거 브랜치를 별도로 수정

기본 추천은 `main` 기준 유지입니다.

## GitHub에서 해야 할 설정

1. 저장소 열기
2. `Settings > Pages` 이동
3. `Source` 또는 `Build and deployment` 항목에서 `GitHub Actions` 선택
4. 저장

## 로컬에서 배포할 때 체크할 것

1. `npm install`
2. `npm run lint`
3. `npm run build`
4. 변경사항 커밋
5. `main` 브랜치로 push

예시 흐름:

```bash
git checkout main
git merge feature/portfolio-layout
git push origin main
```

만약 아직 `main`이 없거나 바로 반영만 원하면:

```bash
git push origin HEAD:main
```

## 배포 후 확인할 것

1. GitHub 저장소 `Actions` 탭에서 `Deploy GitHub Pages` 성공 여부 확인
2. 배포 완료 후 사이트 접속
3. 홈(`/`)과 뉴스(`/news`) 경로 확인
4. 상세 뉴스 페이지 정적 생성 여부 확인

## 구조상 제한

GitHub Pages는 정적 호스팅입니다.

- 가능
  - 포트폴리오 홈
  - 뉴스 아카이브
  - GitHub Actions 재배포
- 불가능
  - 상시 실행 크롤러
  - 서버 API
  - DB 기반 동적 처리

뉴스 자동화는 아래 순서로 운영해야 합니다.

1. 외부 AI Agent 또는 cron 실행
2. `src/content/news/*.json` 갱신
3. GitHub push
4. Pages 재배포

## 현재 기준 결론

이 프로젝트는 이미 `GitHub Pages 배포 가능 상태`입니다.

남은 실작업은 사실상 두 가지입니다.

1. GitHub Pages 설정에서 `GitHub Actions` 활성화
2. `main` 브랜치에 현재 변경사항 반영
