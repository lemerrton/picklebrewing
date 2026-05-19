import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-tan-200 border-t border-tan-400 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-heading text-xl font-bold text-brown-900">
              Pickle Brewing
            </p>
            <p className="text-brown-700 mt-2 text-sm">
              Beginner brewing kits for your first gallon — or your fifth.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="font-body font-semibold text-brown-900 mb-2 text-sm uppercase tracking-wide">
                Pages
              </p>
              <ul className="space-y-1 text-sm">
                <li><Link href="/" className="text-brown-700 hover:text-brown-900">Home</Link></li>
                <li><Link href="/shop" className="text-brown-700 hover:text-brown-900">Shop</Link></li>
                <li><Link href="/about" className="text-brown-700 hover:text-brown-900">About</Link></li>
                <li><Link href="/contact" className="text-brown-700 hover:text-brown-900">Contact</Link></li>
              </ul>
            </div>

            <div>
              <p className="font-body font-semibold text-brown-900 mb-2 text-sm uppercase tracking-wide">
                Contact
              </p>
              <a
                href="mailto:gentlevoyage.assistance@gmail.com"
                className="text-sm text-brown-700 hover:text-brown-900"
              >
                gentlevoyage.assistance@gmail.com
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-tan-600 mt-8 text-center">
          © {new Date().getFullYear()} Pickle Brewing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
