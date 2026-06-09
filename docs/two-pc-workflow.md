# Two PC Workflow

이 문서는 집 PC와 다른 PC를 모두 개발 환경으로 사용할 때의 권장 작업 흐름을 정리한 문서입니다.

## 핵심 규칙

- 두 PC 모두 같은 GitHub 원격 저장소를 사용합니다.
- 같은 기능은 같은 `feature/*` 브랜치에서 이어서 작업합니다.
- PC를 바꾸기 전에는 반드시 `commit` 후 `push` 합니다.
- 다음 PC에서는 반드시 `pull` 또는 `fetch` 후 작업합니다.

## 새 작업 시작

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/my-task
```

브랜치를 이미 만든 뒤라면:

```bash
git switch feature/my-task
```

## PC A에서 작업 후 올리기

```bash
git add .
git commit -m "Implement my task"
git push -u origin feature/my-task
```

처음 push 이후에는 아래처럼 짧게 써도 됩니다.

```bash
git push
```

## PC B에서 이어서 작업하기

브랜치가 아직 로컬에 없다면:

```bash
git fetch origin
git switch -c feature/my-task --track origin/feature/my-task
```

브랜치가 이미 있다면:

```bash
git switch feature/my-task
git pull --ff-only origin feature/my-task
```

## 작업 완료 후 운영 반영

```bash
git switch main
git pull --ff-only origin main
git merge --ff-only feature/my-task
git push origin main
```

`--ff-only`가 실패하면 브랜치가 갈라졌다는 뜻이므로, 그때는 rebase 또는 일반 merge 전략을 검토하면 됩니다.
혼자 운영하는 현재 구조에서는 작업 도중 `main`을 건드리지 않으면 대부분 fast-forward로 정리됩니다.

## 긴급 수정 흐름

```bash
git switch main
git pull --ff-only origin main
git switch -c hotfix/fix-name
```

수정 후:

```bash
git add .
git commit -m "Fix urgent issue"
git push -u origin hotfix/fix-name
```

그 다음 `main`에 반영합니다.

## 충돌을 줄이는 팁

- 같은 화면을 두 PC에서 동시에 오래 수정하지 않기
- 작업 전 `git pull --ff-only` 습관화
- 큰 작업은 작은 커밋으로 자주 저장
- 배포 직전에는 `npm run lint`, `npm run build` 확인

## 가장 단순한 운영 모델

- 운영 브랜치: `main`
- 작업 브랜치: `feature/*`
- 긴급 수정 브랜치: `hotfix/*`

이 모델이면 두 PC 모두 개발에 쓰더라도 브랜치 구조가 복잡해지지 않고, GitHub Pages 자동 배포 기준도 명확하게 유지됩니다.
