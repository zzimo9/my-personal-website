"use client";

export function ThemeToggle() {
  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-foreground"
      aria-label="Toggle dark mode"
    >
      Mode
    </button>
  );
}
