# Portfolio Metadata Contract

Audience: project agents.

Goal: maintain safe, compact portfolio metadata for `portfolio-agent`.

## Files

Create or update:

```text
.portfolio/project.json
```

Optional:

```text
.portfolio/NOTES.md
```

`portfolio-agent` must treat `.portfolio/project.json` as the source of truth. If it exists, read it first. Do not infer public portfolio text from README, file tree, or commits unless required fields are missing.

## Schema

```json
{
  "schemaVersion": 1,
  "slug": "repo-slug",
  "name": "Project Name",
  "visibility": "public | private",
  "sourceAvailable": true,
  "publishMode": "source-linked | summary-only",
  "repository": "zzimo9/repo-slug",
  "url": "https://github.com/zzimo9/repo-slug",
  "liveUrl": "https://example.com",
  "status": "active | maintained | paused | archived",
  "role": "Owner / Developer",
  "summary": "Korean, 1 short paragraph, public-safe.",
  "techStack": ["Tech"],
  "highlights": ["Public-safe feature/result."],
  "safeRecentWork": ["Do not copy commit messages."],
  "doNotPublish": ["secret", "env names", "internal routes"],
  "reviewNotes": [],
  "lastUpdatedAt": "2026-06-10T00:00:00Z"
}
```

Type requirements:

```ts
repository: string | null;
url: string | null;
liveUrl: string | null;
```

Use `null` for absent URLs. Do not use empty strings for absent repository, source, or live URLs.

## Public Repositories

Use source-linked mode:

```json
{
  "visibility": "public",
  "sourceAvailable": true,
  "publishMode": "source-linked",
  "repository": "zzimo9/repo",
  "url": "https://github.com/zzimo9/repo"
}
```

## Private Repositories

Private repositories must stay summary-only:

```json
{
  "visibility": "private",
  "sourceAvailable": false,
  "publishMode": "summary-only",
  "repository": null,
  "url": null,
  "liveUrl": null
}
```

Because the repo is private, keep all portfolio metadata summary-only and public-safe. Do not include repo URLs, commit messages, internal paths, env key names, API routes, DB/table names, or deployment details anywhere, including `reviewNotes`.

## Private Fallback Inspection

For private repositories, README/package/commits may be used only to suggest missing safe metadata.

Do not directly publish inferred private details unless approved in `.portfolio/project.json`.

## Review Notes

`reviewNotes` is publishable. Keep it public-safe.

Do not put internal-only notes, env key names, private routes, DB/table names, private URLs, commit messages, deployment internals, vulnerability details, or any other private implementation details in `reviewNotes`.

If a note is not safe for the public website, do not write it to `.portfolio/project.json`.

## Never Publish

Never publish:

- private repo URL
- file tree
- private commit messages
- internal API/routes
- secret/token/credential
- real `.env` key names
- deployment internals
- vulnerability details
- private DB/table/bucket names

If unsure, omit the detail from public fields and add only a public-safe review note.

## API Credential Wording

Allowed wording:

- "외부 API 자격 증명이 필요한 선택 기능입니다."
- "외부 서비스 연동 정보는 공개 메타데이터에서 제외했습니다."

Not allowed:

- actual env key names
- project-specific config keys
- token names
- service account names

## Style

- Language: Korean
- Tone: concise, factual, no hype
- Do not paste README content
- Do not paste commit messages
- Private repos: purpose, features, and safe tech only
- Update after meaningful project work

## Repository-Specific Private Instructions

For `news-collector` and `ku-s-food-list`, add this instruction to the project agent:

```text
Because this repo is private, keep all portfolio metadata summary-only and public-safe. Do not include repo URLs, commit messages, internal paths, env key names, API routes, DB/table names, or deployment details anywhere, including reviewNotes.
```

If existing private project metadata contains:

```json
{
  "url": "",
  "liveUrl": ""
}
```

change only the absent URL fields to:

```json
{
  "repository": null,
  "url": null,
  "liveUrl": null
}
```
