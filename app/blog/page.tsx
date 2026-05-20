import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Brewing Guides & Tips",
  description:
    "Brewing guides, fermentation tips, and beginner advice from BrewKit Lab. Learn how to start brewing at home, avoid common mistakes, and make your best brew yet.",
  alternates: { canonical: "https://brewkitlab.com/blog" },
  openGraph: {
    title: "BrewKit Lab Blog — Guides & Tips for Beginner Brewers",
    description: "Brewing guides, fermentation tips, and beginner advice.",
    url: "https://brewkitlab.com/blog",
  },
};

export default function Blog() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900">
        Brewing Guides & Tips
      </h1>
      <p className="text-brown-700 mt-3">
        Everything we know about brewing — written for people who are just getting
        started.
      </p>

      <div className="mt-10 space-y-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
