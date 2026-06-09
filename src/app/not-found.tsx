import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        요청한 브리핑을 찾지 못했습니다.
      </h1>
      <p className="mt-3 text-sm leading-7 text-muted">
        아직 생성되지 않은 브리핑이거나 경로가 잘못되었을 수 있습니다.
      </p>
      <Link
        href="/news"
        className="mt-6 inline-flex rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-foreground"
      >
        아카이브로 돌아가기
      </Link>
    </main>
  );
}
