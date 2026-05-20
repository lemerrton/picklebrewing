import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tan-200 border-t border-tan-400 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="font-heading text-xl font-bold text-brown-900">
              BrewKit Lab
            </p>
            <p className="text-brown-700 mt-2 text-sm">
              The best beginner brewing kit for first-time brewers. Simple kits, clear instructions, zero intimidation.
            </p>
          </div>

          <div>
            <p className="font-body font-semibold text-brown-900 mb-2 text-sm uppercase tracking-wide">
              Shop
            </p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/shop" className="text-brown-700 hover:text-brown-900">All Kits</Link></li>
              <li><Link href="/1-gallon-brewing-kit" className="text-brown-700 hover:text-brown-900">1 Gallon Kit</Link></li>
              <li><Link href="/best-beginner-brewing-kit" className="text-brown-700 hover:text-brown-900">Best Beginner Kit</Link></li>
              <li><Link href="/pricing" className="text-brown-700 hover:text-brown-900">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-body font-semibold text-brown-900 mb-2 text-sm uppercase tracking-wide">
              Learn
            </p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/blog" className="text-brown-700 hover:text-brown-900">Blog</Link></li>
              <li><Link href="/how-to-brew-mead" className="text-brown-700 hover:text-brown-900">How to Brew Mead</Link></li>
              <li><Link href="/fermentation-guide" className="text-brown-700 hover:text-brown-900">Fermentation Guide</Link></li>
              <li><Link href="/creators" className="text-brown-700 hover:text-brown-900">Creator Program</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-body font-semibold text-brown-900 mb-2 text-sm uppercase tracking-wide">
              Company
            </p>
            <ul className="space-y-1 text-sm">
              <li><Link href="/about" className="text-brown-700 hover:text-brown-900">About</Link></li>
              <li><Link href="/contact" className="text-brown-700 hover:text-brown-900">Contact</Link></li>
              <li>
                <a
                  href="mailto:gentlevoyage.assistance@gmail.com"
                  className="text-brown-700 hover:text-brown-900"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-tan-600 mt-8 text-center">
          © {new Date().getFullYear()} BrewKit Lab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
