import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white border border-tan-400 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 text-xs text-tan-600 mb-3">
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
      <h2 className="font-heading text-lg font-bold text-brown-900">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-brown-700 text-sm mt-2 leading-relaxed">
        {post.description}
      </p>
      <div className="flex gap-2 mt-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-tan-200 text-brown-700 px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
