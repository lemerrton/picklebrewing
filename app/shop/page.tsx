import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import BuyNowButton from "@/components/BuyNowButton";
import StockBadge from "@/components/StockBadge";
import { products, productJsonLd } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Beginner Brewing Kits",
  description:
    "Browse our beginner-friendly 1-gallon and 5-gallon homebrewing starter kits. The best home brewing kit for beginners — everything you need in one box.",
  alternates: { canonical: "https://brewkitlab.com/shop" },
  openGraph: {
    title: "Shop Beginner Brewing Kits — BrewKit Lab",
    description:
      "Starter fermentation kits designed for first-time brewers. Simple, affordable, ships everywhere.",
    url: "https://brewkitlab.com/shop",
  },
};

export default function Shop() {
  return (
    <>
      {products.map((p) => (
        <JsonLd key={p.sku} data={productJsonLd(p)} />
      ))}

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-brown-900 text-center">
          Home Brewing Kits for Beginners
        </h1>
        <p className="text-brown-700 text-center mt-3 max-w-xl mx-auto">
          Every starter fermentation kit includes everything a first-time brewer
          needs. Pick your size and start brewing today.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {products.map((product) => (
            <article
              key={product.sku}
              className="bg-white border border-tan-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={product.imagePath}
                    alt={`${product.name} — beginner brewing kit`}
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div className="px-6 pb-6">
                <h2 className="font-heading text-xl font-bold text-brown-900">
                  <Link
                    href={`/${product.slug}`}
                    className="hover:underline"
                  >
                    {product.name}
                  </Link>
                </h2>
                <p className="text-brown-700 mt-2 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <p className="text-2xl font-bold text-brown-900">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.stock !== undefined && (
                    <StockBadge stock={product.stock} size="sm" />
                  )}
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-brown-700 uppercase tracking-wide mb-2">
                    What&apos;s included
                  </p>
                  <ul className="space-y-1">
                    {product.includes.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-brown-700 flex items-start gap-2"
                      >
                        <span className="text-tan-600 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <BuyNowButton
                  href={product.stripeUrl}
                  sku={product.sku}
                  name={product.name}
                  price={product.price}
                  className="mt-6 block text-center bg-brown-900 text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-brown-700 transition-colors"
                >
                  Buy Now — ${product.price.toFixed(2)}
                </BuyNowButton>
                <p className="mt-2 text-xs text-tan-600 text-center">
                  Secure checkout via Stripe
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-cream rounded-2xl p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-brown-900">
            Not sure which kit to pick?
          </h2>
          <p className="text-brown-700 mt-2 max-w-lg mx-auto text-sm">
            Check out our guide to choosing the{" "}
            <Link href="/best-beginner-brewing-kit" className="underline hover:no-underline text-brown-900">
              best beginner brewing kit
            </Link>
            , or learn{" "}
            <Link href="/how-to-brew-mead" className="underline hover:no-underline text-brown-900">
              how to brew mead
            </Link>{" "}
            with your new kit.
          </p>
        </div>
      </section>
    </>
  );
}
