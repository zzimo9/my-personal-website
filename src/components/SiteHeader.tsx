import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="border-b border-border transition-colors duration-300">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wide">
          DEV<span className="text-muted">_</span>KU
        </Link>

        <nav className="flex items-center space-x-4 text-xs text-muted">
          <Link href="/#work" className="transition-opacity hover:opacity-70">
            Work
          </Link>
          <Link href="/news" className="transition-opacity hover:opacity-70">
            News
          </Link>
          <Link href="/#contact" className="transition-opacity hover:opacity-70">
            Contact
          </Link>
          <a
            href="https://github.com/zzimo9"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
