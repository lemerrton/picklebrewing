import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pickle Brewing. Questions about our beginner brewing kits, shipping, or homebrewing in general? We're happy to help.",
  alternates: { canonical: "https://picklebrewing.com/contact" },
  openGraph: {
    title: "Contact Pickle Brewing",
    description: "Questions about kits, shipping, or homebrewing? We're happy to help.",
    url: "https://picklebrewing.com/contact",
  },
};

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-heading text-4xl font-bold text-brown-900">
        Get in Touch
      </h1>
      <p className="text-brown-700 mt-4 leading-relaxed">
        Questions about a kit? Not sure which size to start with? Just say hi.
        We love hearing from fellow brewers (and future brewers).
      </p>

      <div className="mt-8 bg-tan-200 rounded-2xl p-8">
        <p className="text-brown-900 font-semibold font-body">Email us</p>
        <a
          href="mailto:gentlevoyage.assistance@gmail.com"
          className="text-brown-900 text-lg underline hover:no-underline mt-1 inline-block"
        >
          gentlevoyage.assistance@gmail.com
        </a>
        <p className="text-brown-700 text-sm mt-3">
          We try to respond within 1–2 business days.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-2xl font-bold text-brown-900 mb-6">
          Or send us a message
        </h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brown-900 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-tan-400 rounded-lg px-4 py-2.5 text-brown-900 focus:outline-none focus:ring-2 focus:ring-tan-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brown-900 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-tan-400 rounded-lg px-4 py-2.5 text-brown-900 focus:outline-none focus:ring-2 focus:ring-tan-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brown-900 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full border border-tan-400 rounded-lg px-4 py-2.5 text-brown-900 focus:outline-none focus:ring-2 focus:ring-tan-600 resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-brown-900 text-white font-body font-semibold py-3 px-8 rounded-lg hover:bg-brown-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
