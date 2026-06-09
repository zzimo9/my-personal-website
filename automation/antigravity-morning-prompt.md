# Antigravity Morning Brief Prompt

오늘 아침 9시 출근신문을 생성한다.

목표:
- 업무 시작 전에 빠르게 읽을 수 있는 한국어 브리핑 작성
- 기술, AI, 보안, 금융 IT 관점의 기사만 선별

작업 규칙:
- 허용된 뉴스 소스에서 오늘 아침 기준으로 중요한 기사 3~8개를 수집한다.
- 같은 이슈를 다루는 중복 기사는 하나로 합친다.
- 선정한 기사마다 제목, 출처, 카테고리, 발행시각, 원문 링크, 2~4문장 요약을 만든다.
- 기사 원문을 장문으로 복제하지 않는다.
- 브리핑 전체를 3개의 핵심 포인트로 요약한다.

출력 규칙:
- `src/content/news/YYYY-MM-DD-morning.json` 파일을 생성하거나 갱신한다.
- JSON 구조는 기존 파일 형식을 따른다.
- `edition` 값은 `"morning"`으로 둔다.
- `title`은 `YYYY년 M월 D일 출근신문` 형식으로 작성한다.
- `publishedAt`은 한국 시간 오전 9시 ISO 문자열로 기록한다.
- 저장 후 `npm run lint`와 `npm run build`를 실행한다.
- 성공하면 `Add morning briefing for YYYY-MM-DD` 형식으로 commit 하고 push 한다.
