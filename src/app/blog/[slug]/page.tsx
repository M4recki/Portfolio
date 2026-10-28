import JsonLd from "@/components/JsonLd";
import Section from "@/components/Section";
import { getAllPosts, getPost } from "@/lib/blog";
import { blogPostingSchema } from "@/lib/schema";
import { persona } from "@/lib/data";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      locale: "pl_PL",
      siteName: "Marek Barański",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: `${post.title} — Marek Barański`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og.jpg"],
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = blogPostingSchema(post);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <Section eyebrow="Blog" title={post.title} lead={post.description} titleAs="h1">
        <p className="mb-8 -mt-4 text-sm text-ink-faint">
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
        {post.answer ? (
          <div className="mb-10 max-w-3xl border-l-2 border-accent bg-paper/60 py-4 pl-5 pr-4 sm:pl-6">
            <p className="eyebrow mb-2 text-accent-dark">Krótka odpowiedź</p>
            <p className="text-[1.0625rem] leading-relaxed text-ink-soft">{post.answer}</p>
          </div>
        ) : null}
        <div className="article-body measure">
          <MDXRemote source={post.source} />
        </div>

        {/* Blok autora — sygnał E-E-A-T dla Google i czytelnika */}
        <div className="measure mt-12 flex items-start gap-4 rounded-xl border border-line bg-paper p-5">
          <img
            src="/images/photo-me.webp"
            alt="Marek Barański"
            width={112}
            height={112}
            loading="lazy"
            decoding="async"
            className="h-14 w-14 shrink-0 rounded-full border border-line/60 object-cover"
          />
          <div>
            <p className="font-heading text-sm text-ink">Marek Barański</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              Buduję strony dla rzemieślników sam, bez agencji — i piszę teksty, które odpowiadają
              na pytania klientów.{" "}
              <Link
                href="/o-mnie/"
                className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
              >
                Więcej o mnie →
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Link
          href="/blog/"
          className="inline-flex min-h-[44px] items-center font-semibold text-accent-dark underline decoration-accent decoration-2 underline-offset-4"
        >
          ← Wszystkie wpisy
        </Link>
      </div>
    </>
  );
}
