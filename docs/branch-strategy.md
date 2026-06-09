# Branch Strategy

이 문서는 `main`을 운영 서비스 브랜치로 유지하면서, 두 대의 개발 PC에서 안전하게 작업하기 위한 기준을 정리한 문서입니다.

## 기본 원칙

- `main`은 운영 서비스 전용 브랜치입니다.
- 기능 개발은 `feature/*` 브랜치에서 진행합니다.
- 운영 중 긴급 수정은 `hotfix/*` 브랜치에서 진행합니다.
- 브랜치는 PC 기준이 아니라 작업 기준으로 만듭니다.

즉, 집 PC와 다른 PC가 모두 개발 PC여도 `pc1`, `pc2` 같은 브랜치를 따로 만들지 않습니다.
같은 작업을 이어서 할 때는 두 PC 모두 같은 `feature/*` 브랜치를 사용합니다.

## 권장 브랜치 종류

### `main`

- GitHub Pages 배포 기준 브랜치
- 항상 배포 가능한 상태 유지
- 직접 기능 개발 금지

### `feature/*`

예시:

- `feature/home-editorial-redesign`
- `feature/news-archive`
- `feature/portfolio-project-seed`

용도:

- 디자인 개편
- 포트폴리오 섹션 추가
- 뉴스 아카이브 기능 확장
- 문서화 작업

### `hotfix/*`

예시:

- `hotfix/header-overlap`
- `hotfix/pages-build-error`

용도:

- 운영 사이트 레이아웃 깨짐
- 배포 실패
- 긴급 문구 수정

## 추천 작업 흐름

1. `main` 최신 상태로 맞춥니다.
2. 새 작업 브랜치를 만듭니다.
3. 작업하고 `commit` 후 `push` 합니다.
4. 다른 PC에서는 같은 브랜치를 받아 이어서 작업합니다.
5. 작업이 끝나면 `main`으로 반영합니다.
6. `main` push 후 GitHub Pages가 자동 배포됩니다.

## merge 기준

권장 순서:

1. `feature/*`에서 작업 완료
2. `npm run lint`
3. `npm run build`
4. `main` 최신화
5. `main`에 merge
6. `origin/main` push

혼자 운영하는 프로젝트라면 Pull Request를 써도 좋고, 로컬에서 직접 merge 후 push 해도 됩니다.
다만 운영 안정성을 위해 `main` 직접 개발만 피하면 됩니다.

## 하지 않는 것을 권장하는 방식

- 두 PC를 각각 다른 장기 브랜치로 운용하는 방식
- `main`에서 바로 개발하고 바로 배포하는 방식
- 커밋 없이 PC를 바꿔가며 작업하는 방식
- 같은 기능을 서로 다른 브랜치에 중복으로 작업하는 방식

## 현재 저장소 기준 운영 권장안

- 운영 배포 브랜치: `main`
- 작업 브랜치: `feature/*`
- 긴급 수정 브랜치: `hotfix/*`

현재처럼 포트폴리오 개편, 뉴스 보조 기능, 문서 정리 등이 계속 추가될 예정이라면 `develop` 브랜치까지 둘 필요는 아직 크지 않습니다.
1인 개발 + 2대 PC 환경에서는 `main + feature/* + hotfix/*` 조합이 가장 단순하고 안전합니다.
