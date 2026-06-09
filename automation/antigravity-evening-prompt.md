# Antigravity Evening Brief Prompt

오늘 저녁 6시 퇴근신문을 생성한다.

목표:
- 하루를 마감하면서 확인할 만한 핵심 뉴스를 한국어 브리핑으로 정리
- 기술, AI, 보안, 금융 IT, 플랫폼 운영 이슈 중심으로 요약

작업 규칙:
- 오늘 오전부터 마감 시점까지의 기사 중 중요한 항목 3~8개를 선별한다.
- 중복 보도는 제거하고 가장 설명력이 좋은 기사만 남긴다.
- 각 기사마다 제목, 출처, 카테고리, 발행시각, 원문 링크, 2~4문장 요약을 작성한다.
- 원문을 길게 옮기지 말고 요약만 남긴다.
- 브리핑 전체 핵심 포인트 3개를 만든다.

출력 규칙:
- `src/content/news/YYYY-MM-DD-evening.json` 파일을 생성하거나 갱신한다.
- JSON 구조는 기존 파일 형식을 따른다.
- `edition` 값은 `"evening"`으로 둔다.
- `title`은 `YYYY년 M월 D일 퇴근신문` 형식으로 작성한다.
- `publishedAt`은 한국 시간 오후 6시 ISO 문자열로 기록한다.
- 저장 후 `npm run lint`와 `npm run build`를 실행한다.
- 성공하면 `Add evening briefing for YYYY-MM-DD` 형식으로 commit 하고 push 한다.
