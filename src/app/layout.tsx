import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zzimo9.github.io/my-personal-website/"),
  title: {
    default: "DEV_KU | Portfolio",
    template: "%s | DEV_KU",
  },
  description:
    "Next.js와 GitHub Pages로 운영하는 DEV_KU의 개인 포트폴리오입니다. 작업물, 정적 배포, AI 뉴스 브리핑 아카이브, 운영 문서를 함께 정리합니다.",
  keywords: [
    "DEV_KU",
    "zzimo9",
    "portfolio",
    "Next.js",
    "GitHub Pages",
    "AI briefing",
  ],
  authors: [{ name: "DEV_KU", url: "https://github.com/zzimo9" }],
  creator: "DEV_KU",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DEV_KU | Portfolio",
    description:
      "작업물, 정적 배포, AI 뉴스 브리핑 아카이브를 한곳에 정리한 개인 포트폴리오입니다.",
    url: "/",
    siteName: "DEV_KU Portfolio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DEV_KU | Portfolio",
    description:
      "Next.js와 GitHub Pages로 운영하는 개인 포트폴리오와 뉴스 브리핑 아카이브입니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-full flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
