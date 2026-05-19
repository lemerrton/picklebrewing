import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Pickle Brewing",
  description:
    "Simple, honest pricing for Pickle Brewing kits. 1-gallon kits starting at $34.99, 5-gallon kits at $105.00.",
};

export default function Pricing() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900 text-center">
        Simple, Honest Pricing
      </h1>
      <p className="text-brown-700 text-center mt-3">
        No subscriptions, no hidden fees. Just the kit you need.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        <div className="bg-white border border-tan-400 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-lg font-bold text-brown-900">
            1-Gallon Starter Kit
          </h2>
          <p className="text-4xl font-bold text-brown-900 mt-4">$34.99</p>
          <ul className="mt-6 space-y-2 text-sm text-brown-700 text-left">
            <li className="flex items-start gap-2"><span className="text-tan-600">•</span>1-gallon fermenting vessel</li>
            <li className="flex items-start gap-2"><span className="text-tan-600">•</span>Airlock and stopper</li>
            <li className="flex items-start gap-2"><span className="text-tan-600">•</span>Sanitizer packet</li>
            <li className="flex items-start gap-2"><span className="text-tan-600">•</span>Step-by-step instructions</li>
          </ul>
          <Link
            href="/shop"
            className="inline-block mt-6 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
          >
            View Kit
          </Link>
        </div>

        <div className="bg-white border border-tan-400 rounded-2xl p-8 text-center">
          <h2 className="font-heading text-lg font-bold text-brown-900">
            5-Gallon Starter Kit
          </h2>
          <p className="text-4xl font-bold text-brown-900 mt-4">$105.00</p>
          <ul className="mt-6 space-y-2 text-sm text-brown-700 text-left">
            <li className="flex items-start gap-2"><span className="text-tan-600">•</span>5-gallon fermenting vessel</li>
            <li className="flex items-start gap-2"><span className="text-tan-600">•</span>Airlock and stopper</li>
            <li className="flex items-start gap-2"><span className="text-tan-600">•</span>Sanitizer packet</li>
            <li className="flex items-start gap-2"><span className="text-tan-600">•</span>Step-by-step instructions</li>
          </ul>
          <Link
            href="/shop"
            className="inline-block mt-6 bg-brown-900 text-white font-body font-semibold py-2.5 px-6 rounded-lg hover:bg-brown-700 transition-colors text-sm"
          >
            View Kit
          </Link>
        </div>
      </div>

      <p className="text-center text-brown-700 text-sm mt-10">
        Questions?{" "}
        <a
          href="mailto:gentlevoyage.assistance@gmail.com"
          className="text-brown-900 underline hover:no-underline"
        >
          Email us
        </a>
      </p>
    </section>
  );
}
