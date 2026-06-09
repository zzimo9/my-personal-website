# Setup On A New PC

이 문서는 다른 PC에서 이 프로젝트를 다시 받아 작업 환경을 빠르게 복구하기 위한 가이드입니다.

## 무엇이 GitHub에 들어가는가

저장소에는 아래 항목이 포함됩니다.

- Next.js 소스 코드
- `package.json`
- `package-lock.json`
- GitHub Pages 배포 워크플로
- 문서와 자동화 프롬프트
- 뉴스 아카이브용 정적 JSON 데이터

## GitHub에 넣지 않는 것

아래 항목은 새 PC에서 다시 생성하거나 직접 설정해야 합니다.

- `node_modules/`
- `.next/`
- `out/`
- 개인용 `.env*`
- 로컬 테스트 산출물

## 권장 버전

- Node.js: `24.14.0`
- npm: `10+`

`.nvmrc`가 포함되어 있으므로 `nvm`을 쓴다면 버전을 맞추기 쉽습니다.

## 1. 저장소 받기

```bash
git clone https://github.com/zzimo9/my-personal-website.git
cd my-personal-website
```

## 2. Node 버전 맞추기

`nvm` 사용 시:

```bash
nvm install
nvm use
```

직접 설치 시에는 Node.js `24.14.0`에 맞추는 것을 권장합니다.

## 3. 의존성 설치

```bash
npm install
```

## 4. 로컬 실행

```bash
npm run dev
```

브라우저:

```text
http://localhost:3000
```

HTTPS 개발이 필요하면:

```bash
npm run https
```

## 5. 검증

```bash
npm run lint
npm run build
```

이 두 명령이 통과하면 새 PC에서도 환경이 정상적으로 복구된 것입니다.

## 6. 작업 브랜치 권장

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/my-change
```

작업을 다른 PC에서도 이어갈 계획이면 커밋 후 작업 브랜치 자체를 push 합니다.

```bash
git push -u origin feature/my-change
```

운영 배포는 `main` 반영 후에만 진행합니다.

브랜치 전략과 두 PC 운영 흐름은 아래 문서를 참고하면 됩니다.

- [docs/branch-strategy.md](branch-strategy.md)
- [docs/two-pc-workflow.md](two-pc-workflow.md)
- [docs/repository-security-hardening.md](repository-security-hardening.md)

## 7. 배포 관련 메모

- GitHub Pages는 이미 이 저장소 구조에 맞게 설정되어 있습니다.
- `main`에 push 하면 GitHub Actions가 Pages 재배포를 수행합니다.
- 자세한 체크리스트는 [docs/github-pages-deployment-checklist.md](github-pages-deployment-checklist.md) 참고

## 8. 자동화 관련 메모

- 뉴스 자동화는 GitHub Pages 내부에서 실행되지 않습니다.
- 외부 AI Agent 또는 cron이 `src/content/news/*.json`을 갱신한 뒤 push 해야 합니다.

## 9. 빠른 복구 요약

```bash
git clone https://github.com/zzimo9/my-personal-website.git
cd my-personal-website
nvm install
nvm use
npm install
npm run dev
```
