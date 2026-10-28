import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Section from "@/components/Section";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Proste odpowiedzi na pytania o strony internetowe: czy potrzebna strona, jak działa wyszukiwanie Google, jak przygotować się do budowy strony.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Blog", path: "/blog/" }]} />
      <Section
      eyebrow="Blog"
      titleAs="h1"
      title="Wiedza bez lania wody"
      lead="Konkretne odpowiedzi na pytania, które słyszę najczęściej — o kosztach, widoczności w Google i AI oraz o tym, jak przygotować się do budowy strony."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-2xl border border-line bg-paper p-6"
          >
            <p className="text-sm text-ink-faint">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pl-PL", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true"> · </span>
              {post.readingMinutes} min czytania
            </p>
            <h2 className="mt-2 font-heading text-xl text-ink">
              <Link
                href={`/blog/${post.slug}/`}
                className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-dark"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 grow text-ink-soft">{post.description}</p>
          </article>
        ))}
      </div>
    </Section>
    </>
  );
}
