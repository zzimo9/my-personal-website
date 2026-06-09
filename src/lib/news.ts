import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";
import type { BriefingEdition, NewsBriefing } from "@/types/news";

const newsDirectory = path.join(process.cwd(), "src", "content", "news");

function compareBriefings(a: NewsBriefing, b: NewsBriefing) {
  return (
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

async function loadBriefings() {
  const entries = await readdir(newsDirectory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name);

  const briefings = await Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(newsDirectory, fileName);
      const raw = await readFile(filePath, "utf8");
      return JSON.parse(raw) as NewsBriefing;
    }),
  );

  return briefings.sort(compareBriefings);
}

export const getAllBriefings = cache(loadBriefings);

export async function getBriefingBySlug(slug: string) {
  const briefings = await getAllBriefings();
  return briefings.find((briefing) => briefing.slug === slug) ?? null;
}

export async function getLatestBriefingByEdition(edition: BriefingEdition) {
  const briefings = await getAllBriefings();
  return briefings.find((briefing) => briefing.edition === edition) ?? null;
}

export function formatBriefingDate(dateString: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Seoul",
  }).format(new Date(dateString));
}

export function editionLabel(edition: BriefingEdition) {
  return edition === "morning" ? "출근신문" : "퇴근신문";
}
