import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, articleJsonLd } from "@/lib/blog";
import { blogContent } from "@/lib/blog-content";
import JsonLd from "@/components/JsonLd";
import ShareButtons from "@/components/ShareButtons";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://brewkitlab.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://brewkitlab.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const content = blogContent[slug];
  if (!content) notFound();

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <header>
          <div className="flex items-center gap-3 text-xs text-tan-600 mb-4">
            <Link href="/blog" className="hover:text-brown-900">
              ← Blog
            </Link>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-brown-900 leading-tight">
            {post.title}
          </h1>
          <div className="mt-4">
            <ShareButtons
              url={`https://brewkitlab.com/blog/${post.slug}`}
              title={post.title}
            />
          </div>
        </header>

        <div className="mt-10 prose-brewkit space-y-4 text-brown-700 leading-relaxed [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brown-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-sm [&_strong]:text-brown-900">
          {content}
        </div>

        <footer className="mt-16 border-t border-tan-400 pt-8">
          <div className="flex gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-tan-200 text-brown-700 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="bg-cream rounded-2xl p-6 text-center">
            <p className="font-heading text-lg font-bold text-brown-900">
              Ready to start brewing?
            </p>
            <p className="text-brown-700 text-sm mt-2">
              Our beginner brewing kits include everything you need.
            </p>
            <Link
              href="/shop"
              className="inline-block mt-3 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
            >
              Shop Kits
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
