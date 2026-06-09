# Repository Security Hardening

이 문서는 공개 GitHub 저장소 기준으로 현재 프로젝트에 권장하는 보안 설정과 운영 기준을 정리한 문서입니다.

## 1. Branch Protection

대상 브랜치:

- `main`

현재 프로젝트는 `main`에 push 되면 GitHub Pages 배포가 트리거됩니다.
따라서 `main`은 운영 브랜치로 보고 보호 규칙을 거는 것이 좋습니다.

### 최소 권장안

- `Require a pull request before merging`: Off
- `Require status checks to pass before merging`: Off
- `Block force pushes`: On
- `Block deletions`: On

이 설정은 1인 개발 + 2대 PC 운영에서 마찰을 적게 만들면서도 가장 위험한 실수를 줄이는 구성입니다.

### 권장안

- `Require a pull request before merging`: On
- `Require approvals`: Off 또는 팀 운영 시 1명 이상
- `Require status checks to pass before merging`: On
- Required checks:
  - `build`
- `Require branches to be up to date before merging`: On
- `Block force pushes`: On
- `Block deletions`: On

주의:

- 혼자 개발하는 경우 `Require approvals`를 1 이상으로 두면 운영 흐름이 불편해질 수 있습니다.
- 혼자 운영할 때는 `PR 필수 + 승인 0 + build 체크 필수` 조합이 가장 현실적입니다.

### GitHub에서 설정하는 경로

1. GitHub 저장소로 이동
2. `Settings`
3. `Branches`
4. `Add branch protection rule` 또는 `Rulesets`
5. 브랜치 패턴을 `main`으로 지정
6. 위 권장안에 맞게 옵션 활성화

## 2. Secret Protection

공개 저장소는 GitHub의 secret scanning 대상입니다.
추가로 아래 항목도 확인하는 것을 권장합니다.

- `Security`
- `Code security and analysis`
- `Secret scanning`
- `Push protection`

권장 상태:

- Secret scanning: Enabled
- Push protection: Enabled

## 3. Dependabot

이 저장소에는 [.github/dependabot.yml](../.github/dependabot.yml) 을 추가해 두었습니다.

구성 내용:

- npm 의존성 주 1회 점검
- GitHub Actions 주 1회 점검
- `next` / `eslint-config-next` 묶음 업데이트
- `react` / `react-dom` 묶음 업데이트

## 4. Commit Signing

현재 커밋 서명은 활성화되지 않은 상태일 수 있습니다.
공개 저장소 신뢰도를 높이려면 commit signing을 도입하는 것이 좋습니다.

가장 무난한 방법은 SSH signing입니다.

### 권장 흐름

1. 서명 전용 SSH 키 생성
2. GitHub 계정에 Signing Key로 등록
3. 로컬 git 설정 반영
4. 서명 커밋 테스트

### 예시 명령

```bash
ssh-keygen -t ed25519 -C "zzimo9 signing key" -f ~/.ssh/id_ed25519_signing
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519_signing.pub
git config --global commit.gpgsign true
```

그 다음 GitHub `Settings > SSH and GPG keys`에서 public key를 `Signing Key`로 등록합니다.

### 확인 명령

```bash
git commit -S -m "Test signed commit"
git log --show-signature -1
```

## 5. Security Files

현재 저장소에는 아래 보안 파일을 유지합니다.

- [SECURITY.md](../SECURITY.md)
- [.github/dependabot.yml](../.github/dependabot.yml)

추가로 고려할 수 있는 항목:

- `CODEOWNERS`
- private vulnerability reporting 활성화
- custom domain 사용 시 DNS / HTTPS 점검 문서

## 6. Dependency Notes

`Next.js`는 2026-06-09 기준 `16.2.7` 최신 안정 패치까지 확인해 반영을 검토합니다.
업그레이드 후에도 공급망 경고가 남으면 upstream 패키지 반영 시점까지:

- Dependabot 모니터링 유지
- 릴리즈 노트 추적
- 필요 시 별도 override 가능성 검토

으로 운영합니다.
