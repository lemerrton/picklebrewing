export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-start-brewing-at-home",
    title: "How to Start Brewing at Home (Complete Beginner Guide)",
    description:
      "Everything you need to know to start home brewing as a complete beginner. From choosing your first kit to bottling your first batch.",
    date: "2026-05-15",
    readTime: "8 min read",
    tags: ["beginner", "guide"],
  },
  {
    slug: "beer-vs-mead-brewing",
    title: "Beer vs Mead Brewing: Which Should You Try First?",
    description:
      "Comparing beer and mead brewing for beginners. Learn the differences in ingredients, process, time, and difficulty so you can pick the right first brew.",
    date: "2026-05-12",
    readTime: "6 min read",
    tags: ["mead", "beer", "comparison"],
  },
  {
    slug: "common-fermentation-mistakes",
    title: "7 Common Fermentation Mistakes (and How to Avoid Them)",
    description:
      "New to fermenting? Here are the most common beginner mistakes that ruin a brew — and simple fixes so your first batch turns out great.",
    date: "2026-05-08",
    readTime: "5 min read",
    tags: ["fermentation", "tips"],
  },
  {
    slug: "how-long-does-fermentation-take",
    title: "How Long Does Fermentation Take? A Beginner's Timeline",
    description:
      "Wondering how long your brew needs to ferment? Here's a clear timeline for beer, mead, and cider fermentation so you know exactly what to expect.",
    date: "2026-05-04",
    readTime: "5 min read",
    tags: ["fermentation", "guide"],
  },
  {
    slug: "why-airlock-bubbles",
    title: "Why Is My Airlock Bubbling? What It Means for Your Brew",
    description:
      "Your airlock is bubbling — is that good or bad? Learn what airlock activity means during fermentation and when to worry (spoiler: usually don't).",
    date: "2026-04-30",
    readTime: "4 min read",
    tags: ["fermentation", "equipment"],
  },
  {
    slug: "is-home-brewing-hard",
    title: "Is Home Brewing Actually Hard for Beginners?",
    description:
      "Worried home brewing is too complicated? Here's an honest look at how easy (or hard) brewing your first batch really is.",
    date: "2026-05-20",
    readTime: "4 min read",
    tags: ["beginner", "guide"],
  },
  {
    slug: "difference-between-beer-and-mead",
    title: "What's the Difference Between Brewing Beer and Making Mead?",
    description:
      "Beer and mead are both fermented drinks, but the process, ingredients, and flavor are very different. Here's the simple breakdown.",
    date: "2026-05-19",
    readTime: "4 min read",
    tags: ["beer", "mead", "comparison"],
  },
  {
    slug: "how-long-until-brew-is-drinkable",
    title: "How Long Does Homemade Brew Take Before It's Drinkable?",
    description:
      "Wondering when your first brew will be ready to drink? Here's a realistic timeline for beer, mead, and cider so you know what to expect.",
    date: "2026-05-18",
    readTime: "4 min read",
    tags: ["fermentation", "timeline"],
  },
  {
    slug: "brewing-in-small-apartment",
    title: "Can I Brew in a Small Apartment or Dorm-Style Setup?",
    description:
      "Yes — home brewing works great in small spaces. Here's how to brew successfully in an apartment, dorm, or anywhere with a countertop.",
    date: "2026-05-17",
    readTime: "4 min read",
    tags: ["beginner", "small-batch"],
  },
  {
    slug: "homemade-brew-vs-store-bought",
    title: "Why Does Homemade Brew Taste Better Than Store-Bought?",
    description:
      "Freshness, control, and customization make homemade brews stand out. Here's why your first batch might surprise you.",
    date: "2026-05-16",
    readTime: "4 min read",
    tags: ["flavor", "beginner"],
  },
  {
    slug: "biggest-beginner-brewing-mistake",
    title: "What's the Biggest Mistake Beginners Make While Brewing?",
    description:
      "The number one mistake new brewers make is simpler than you think. Here's how to avoid it and set your first batch up for success.",
    date: "2026-05-14",
    readTime: "4 min read",
    tags: ["tips", "beginner"],
  },
  {
    slug: "expensive-brewing-equipment-needed",
    title: "Do I Need Expensive Equipment to Make Good Brew?",
    description:
      "Spoiler: no. Great brew comes from technique and patience, not pricey gear. Here's what you actually need to get started.",
    date: "2026-05-13",
    readTime: "4 min read",
    tags: ["equipment", "beginner"],
  },
  {
    slug: "is-home-brewing-cheaper",
    title: "Is Brewing at Home Cheaper Than Buying Alcohol From Stores?",
    description:
      "Once you cover the upfront cost of equipment, home brewing is way cheaper than store-bought craft beverages. Here's the real math.",
    date: "2026-05-11",
    readTime: "4 min read",
    tags: ["cost", "beginner"],
  },
  {
    slug: "customize-brew-flavors",
    title: "Can I Customize Flavors in My Own Brew?",
    description:
      "One of the best parts of home brewing is creating flavors you can't buy. Here's how to experiment with fruits, spices, and more.",
    date: "2026-05-10",
    readTime: "4 min read",
    tags: ["flavor", "recipes"],
  },
  {
    slug: "why-home-brewing-popular",
    title: "Why Are So Many People Suddenly Getting Into Home Brewing?",
    description:
      "Home brewing is having a moment. Here's why creativity, community, and craftsmanship are pulling more people into the hobby than ever.",
    date: "2026-05-09",
    readTime: "4 min read",
    tags: ["culture", "beginner"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "BrewKit Lab",
      url: "https://brewkitlab.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BrewKit Lab",
      url: "https://brewkitlab.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://brewkitlab.com/blog/${post.slug}`,
    },
  };
}
