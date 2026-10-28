import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

export type FaqItem = { q: string; a: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  /** 40–60 słów: bezpośrednia odpowiedź na pytanie z tytułu (AEO). */
  answer?: string;
  words: number;
  faq: FaqItem[];
  source: string;
};

function required(value: unknown, field: string, file: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `[blog] ${file}: pole frontmatter "${field}" musi być niepustym stringiem.`
    );
  }
  return value.trim();
}

function requiredFaq(value: unknown, file: string): FaqItem[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(
      `[blog] ${file}: frontmatter "faq" jest wymagany (FAQPage schema) i musi być niepustą tablicą.`
    );
  }
  return value.map((item, i) => {
    if (!item || typeof item !== "object") {
      throw new Error(`[blog] ${file}: faq[${i}] musi być obiektem {q, a}.`);
    }
    const q = required((item as Record<string, unknown>).q, `faq[${i}].q`, file);
    const a = required((item as Record<string, unknown>).a, `faq[${i}].a`, file);
    return { q, a };
  });
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);

    const title = required(data.title, "title", file);
    const description = required(data.description, "description", file);
    const date = required(data.date, "date", file);
    const faq = requiredFaq(data.faq, file);

    const words = content.split(/\s+/).filter(Boolean).length;
    const readingMinutes = Math.max(1, Math.round(words / 200));

    const answer =
      typeof data.answer === "string" && data.answer.trim() !== ""
        ? data.answer.trim()
        : undefined;

    return { slug, title, description, date, readingMinutes, answer, words, faq, source: content };
  });

  posts.sort((a, b) => b.date.localeCompare(a.date));
  return posts;
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
