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
      className="cursor-pointer font-mono transition-opacity hover:opacity-70"
      aria-label="Toggle dark mode"
    >
      Theme
    </button>
  );
}
