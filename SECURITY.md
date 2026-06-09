# Security Policy

## Supported Versions

이 저장소는 개인 운영용 포트폴리오 웹사이트이며, 기본적으로 `main` 브랜치의 최신 배포 가능 상태만 지원합니다.

| Version | Supported |
| --- | --- |
| `main` | Yes |
| Historical branches / old tags | No |

## Reporting A Vulnerability

보안 관련 문제를 발견했다면 공개 이슈로 바로 올리지 말고 먼저 비공개로 알려 주세요.

- 우선 연락처: `zzimo9@gmail.com`
- 제목 예시: `[Security] my-personal-website vulnerability report`
- 포함하면 좋은 내용:
  - 영향 범위
  - 재현 방법
  - 개념 증명(PoC) 여부
  - 제안하는 완화책

가능하면 접수 후 7일 이내에 1차 확인을 목표로 하며, 재현 가능한 문제는 우선순위에 따라 수정 일정을 안내합니다.

## Disclosure Guidelines

- 공개 이슈, 공개 PR, SNS 등에 취약점 세부사항을 먼저 게시하지 말아 주세요.
- 수정 또는 완화가 끝난 뒤 필요한 경우 공개 공지를 진행합니다.
- 제보자는 서비스 안정성을 해치지 않는 범위에서 검증해 주세요.

## Scope Notes

현재 이 저장소는 GitHub Pages 기반 정적 사이트입니다.

- 서버 런타임
- 데이터베이스
- 장기 실행 백엔드 프로세스

는 포함하지 않습니다.

따라서 주된 점검 범위는 다음과 같습니다.

- 프런트엔드 코드 노출
- 배포 설정
- GitHub Actions
- 의존성 공급망
- 공개 저장소 운영 방식
