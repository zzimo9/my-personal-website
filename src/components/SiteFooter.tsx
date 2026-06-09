import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 border-b border-border/70 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-lg font-semibold tracking-[-0.02em]">DEV_KU</p>
            <p className="max-w-md text-sm leading-7 text-muted">
              개인 작업, 운영 감각, 자동화된 브리핑 실험을 함께 담아두는
              포트폴리오 서버.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Surface
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <Link href="/#work" className="block transition-opacity hover:opacity-70">
                Work
              </Link>
              <Link href="/#build" className="block transition-opacity hover:opacity-70">
                Build
              </Link>
              <Link href="/news" className="block transition-opacity hover:opacity-70">
                News
              </Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Connect
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:zzimo9@gmail.com"
                className="block transition-opacity hover:opacity-70"
              >
                Email
              </a>
              <a
                href="https://github.com/zzimo9"
                target="_blank"
                rel="noreferrer"
                className="block transition-opacity hover:opacity-70"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs uppercase tracking-[0.2em] text-muted md:flex-row md:items-center md:justify-between">
          <p>© 2026 DEV_KU</p>
          <p className="font-serif text-3xl italic tracking-[-0.03em] text-foreground">
            Personal Edition.
          </p>
          <p className="font-mono">Seoul, KR</p>
        </div>
      </div>
    </footer>
  );
}
