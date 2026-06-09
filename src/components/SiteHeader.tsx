"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Work", href: "/#work", count: "03" },
  { label: "Build", href: "/#build", count: "04" },
  { label: "News", href: "/news", count: "02" },
  { label: "Contact", href: "/#contact", count: "01" },
];

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const delta = current - lastScroll.current;

      if (current < 72) {
        setHidden(false);
      } else if (delta > 8) {
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative z-40 border-b border-border/70">
      <div className="border-b border-border/70 bg-background/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-muted">
          <span>
            Volume <span className="text-foreground">01</span> / Issue{" "}
            <span className="text-foreground">26</span>
          </span>
          <span className="hidden md:block">Portfolio main / Briefings support</span>
          <span>Seoul, KR</span>
        </div>
      </div>

      <div
        className={`sticky top-0 border-b border-border/70 bg-background/90 backdrop-blur transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <Link href="/" className="flex items-center gap-4 text-foreground">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground text-lg italic">
              D
            </span>
            <span className="flex items-center gap-4">
              <span className="text-base font-semibold tracking-[-0.02em]">
                DEV_KU
              </span>
              <span className="hidden border-l border-border pl-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted md:block">
                Personal editorial server
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative text-sm text-foreground transition-colors hover:text-muted"
                >
                  {link.label}
                  <span className="absolute -right-4 -top-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                    {link.count}
                  </span>
                </Link>
              ))}
            </nav>
            <a
              href="https://github.com/zzimo9/my-personal-website"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-foreground px-4 py-2 text-xs text-background md:inline-flex"
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
