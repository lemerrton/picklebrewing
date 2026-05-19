import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-6 py-24 text-center">
      <h1 className="font-heading text-5xl font-bold text-brown-900">404</h1>
      <p className="text-brown-700 mt-4 text-lg">
        This page doesn&apos;t exist — kind of like your first batch before you
        actually start brewing.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
        >
          Go Home
        </Link>
        <Link
          href="/shop"
          className="border border-brown-900 text-brown-900 font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-tan-200 transition-colors text-sm"
        >
          Shop Kits
        </Link>
        <Link
          href="/blog"
          className="border border-brown-900 text-brown-900 font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-tan-200 transition-colors text-sm"
        >
          Read the Blog
        </Link>
      </div>
    </section>
  );
}
