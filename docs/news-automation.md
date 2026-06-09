# News Automation Runbook

이 프로젝트의 뉴스 영역은 `아침 9시 출근신문`, `저녁 6시 퇴근신문` 두 가지 정기 브리핑을 기준으로 운영합니다.

## 기본 운영 흐름

1. Antigravity scheduled task가 지정된 시각에 실행됩니다.
2. 에이전트가 허용된 소스(RSS, 공식 API, 이용 약관상 허용된 페이지)에서 기사를 수집합니다.
3. 중복 기사를 제거하고 핵심 기사 3~8개를 선별합니다.
4. 브리핑 요약과 핵심 포인트를 생성합니다.
5. 결과를 `src/content/news/<slug>.json` 파일로 저장합니다.
6. 저장소에 commit / push 하면 GitHub Pages가 자동 배포됩니다.

## 파일 규칙

- 경로: `src/content/news/*.json`
- 슬러그 예시:
  - `2026-06-09-morning`
  - `2026-06-09-evening`
- 필수 필드:
  - `slug`
  - `edition`
  - `title`
  - `publishedAt`
  - `timeframeLabel`
  - `deck`
  - `keyTakeaways`
  - `articles`

## 편집 원칙

- 원문 전체 복사 금지
- 출처와 링크는 반드시 유지
- 기사 요약은 2~4문장 안쪽으로 유지
- 사실 확인이 애매한 내용은 제외
- 광고성 기사나 중복 보도는 제외

## Git 반영 원칙

- 파일 생성 후 `npm run lint`, `npm run build`를 실행합니다.
- 문제가 없으면 commit 메시지는 아래 형식을 권장합니다.
  - `Add morning briefing for 2026-06-09`
  - `Add evening briefing for 2026-06-09`
