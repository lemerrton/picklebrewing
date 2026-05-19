import Link from "next/link";
import type { ReactNode } from "react";

export const blogContent: Record<string, ReactNode> = {
  "how-to-start-brewing-at-home": (
    <>
      <p>
        Starting to brew at home sounds intimidating, but it&apos;s genuinely
        one of the easiest hobbies to pick up. If you can follow a recipe and
        boil water, you can brew. Here&apos;s everything you need to know to go
        from zero to your first batch.
      </p>

      <h2>What You Need to Start</h2>
      <p>
        The simplest way to start is with a{" "}
        <Link href="/best-beginner-brewing-kit" className="underline hover:no-underline text-brown-900">
          beginner brewing kit
        </Link>
        . A good starter fermentation kit includes a fermenting vessel, airlock,
        sanitizer, and instructions. Our{" "}
        <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
          1 gallon brewing kit
        </Link>{" "}
        is specifically designed for first-timers — it fits on a kitchen counter
        and the smaller batch size means less risk if something goes sideways.
      </p>

      <h2>Pick Your First Brew</h2>
      <p>
        For absolute beginners, we recommend starting with either a simple ale
        (using a beer ingredient kit) or{" "}
        <Link href="/how-to-brew-mead" className="underline hover:no-underline text-brown-900">
          mead
        </Link>
        . Mead only needs three ingredients — honey, water, and yeast — making
        it the lowest-barrier entry into home brewing.
      </p>

      <h2>The Basic Process</h2>
      <p>
        Every brew follows the same basic steps: sanitize your equipment, mix
        your ingredients, add yeast, seal it up, and wait. The yeast does all
        the hard work — fermentation converts sugar into alcohol and CO2.
        Check out our{" "}
        <Link href="/fermentation-guide" className="underline hover:no-underline text-brown-900">
          fermentation guide
        </Link>{" "}
        for a deeper dive into what&apos;s happening inside that fermenter.
      </p>

      <h2>How Long Does It Take?</h2>
      <p>
        Most beers are ready in 2-3 weeks. Mead takes 4-6 weeks minimum but
        gets way better with time. The actual hands-on work is usually under an
        hour — the rest is just waiting.
      </p>

      <h2>Common First-Batch Mistakes</h2>
      <p>
        The number one mistake new brewers make? Not sanitizing well enough.
        Number two? Opening the fermenter too often to check on it. Read our
        full list of{" "}
        <Link href="/blog/common-fermentation-mistakes" className="underline hover:no-underline text-brown-900">
          common fermentation mistakes
        </Link>{" "}
        so you can avoid them.
      </p>

      <h2>Just Start</h2>
      <p>
        Seriously — the best way to learn brewing is to brew. Your first batch
        probably won&apos;t be perfect, and that&apos;s fine. It&apos;ll be
        yours, you&apos;ll learn a ton, and your second batch will be even
        better. Grab a{" "}
        <Link href="/shop" className="underline hover:no-underline text-brown-900">
          kit
        </Link>{" "}
        and get started.
      </p>
    </>
  ),

  "beer-vs-mead-brewing": (
    <>
      <p>
        If you just got a{" "}
        <Link href="/best-beginner-brewing-kit" className="underline hover:no-underline text-brown-900">
          beginner brewing kit
        </Link>{" "}
        and you&apos;re trying to decide what to brew first, beer and mead are
        the two most popular options. Here&apos;s how they compare for
        first-time brewers.
      </p>

      <h2>Ingredients</h2>
      <p>
        <strong>Beer</strong> uses malted grain (or malt extract), hops, yeast,
        and water. You&apos;ll usually buy a pre-measured ingredient kit for
        your first batch.
      </p>
      <p>
        <strong>Mead</strong> uses honey, water, and yeast. That&apos;s it.
        You can add fruits or spices later, but the base recipe is dead simple.
      </p>

      <h2>Difficulty</h2>
      <p>
        Mead wins here for simplicity. Beer involves a boiling step with hops
        additions at specific times. Mead is basically mix-and-forget. If
        you&apos;re a true beginner, mead has a lower bar to clear. Check our{" "}
        <Link href="/how-to-brew-mead" className="underline hover:no-underline text-brown-900">
          mead brewing guide
        </Link>{" "}
        to see just how easy it is.
      </p>

      <h2>Time to Ready</h2>
      <p>
        Beer: 2-3 weeks. Mead: 4-6 weeks minimum, but really shines at 3+
        months. Beer gives you faster results. Mead rewards patience. Read more
        about{" "}
        <Link href="/how-long-does-mead-take" className="underline hover:no-underline text-brown-900">
          how long mead takes
        </Link>
        .
      </p>

      <h2>Flavor</h2>
      <p>
        Beer tastes like... beer. You know what to expect. Mead ranges from
        sweet to dry and can taste like wine, honey, or fruit depending on
        what you add. It&apos;s more of a blank canvas.
      </p>

      <h2>Our Recommendation</h2>
      <p>
        Start with mead if you want the simplest possible first brew. Start
        with beer if you want something familiar faster. Either way, a{" "}
        <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
          1 gallon brewing kit
        </Link>{" "}
        works for both.
      </p>
    </>
  ),

  "common-fermentation-mistakes": (
    <>
      <p>
        Fermentation is forgiving, but there are a handful of mistakes that
        consistently trip up new brewers. Here are the most common ones — and
        how to avoid them with your{" "}
        <Link href="/best-beginner-brewing-kit" className="underline hover:no-underline text-brown-900">
          beginner brewing kit
        </Link>
        .
      </p>

      <h2>1. Not Sanitizing Properly</h2>
      <p>
        This is the number one cause of ruined batches. Everything that touches
        your brew after the boil needs to be sanitized — fermenter, airlock,
        spoon, funnel, all of it. Use the sanitizer included in your kit and
        don&apos;t rush this step.
      </p>

      <h2>2. Opening the Fermenter Too Often</h2>
      <p>
        We get it — you want to see what&apos;s happening. But every time you
        open that lid, you risk introducing bacteria or wild yeast. Trust the
        process. If your airlock is bubbling, fermentation is happening.
      </p>

      <h2>3. Fermenting at the Wrong Temperature</h2>
      <p>
        Too hot and the yeast produces off-flavors. Too cold and it goes
        dormant. Most ale yeasts want 60-75°F. Find a consistent spot in your
        home and leave it there. Read our{" "}
        <Link href="/fermentation-guide" className="underline hover:no-underline text-brown-900">
          fermentation guide
        </Link>{" "}
        for more on temperature control.
      </p>

      <h2>4. Bottling Too Early</h2>
      <p>
        If fermentation isn&apos;t finished and you bottle, the yeast keeps
        producing CO2 in a sealed bottle. Best case: over-carbonation. Worst
        case: bottle bombs. Wait until airlock activity has been minimal for
        several days.
      </p>

      <h2>5. Not Being Patient Enough</h2>
      <p>
        Your brew is almost always better if you give it more time. That
        &quot;meh&quot; mead at 3 weeks might be excellent at 8 weeks. Read
        about{" "}
        <Link href="/how-long-does-mead-take" className="underline hover:no-underline text-brown-900">
          how long mead takes
        </Link>{" "}
        to set realistic expectations.
      </p>

      <h2>6. Using Tap Water Without Treating It</h2>
      <p>
        Chlorine and chloramine in tap water can create off-flavors. Use
        filtered water, spring water, or let tap water sit uncovered for 24
        hours to off-gas chlorine.
      </p>

      <h2>7. Panicking When Nothing Happens</h2>
      <p>
        The first 12-24 hours after pitching yeast often show zero activity.
        This is the lag phase — totally normal. Give it 48 hours before
        worrying. Read about{" "}
        <Link href="/blog/why-airlock-bubbles" className="underline hover:no-underline text-brown-900">
          why airlocks bubble
        </Link>{" "}
        (and why they sometimes don&apos;t).
      </p>
    </>
  ),

  "how-long-does-fermentation-take": (
    <>
      <p>
        One of the first questions every new brewer asks: how long does
        fermentation take? The answer depends on what you&apos;re brewing, but
        here&apos;s a clear timeline you can actually plan around.
      </p>

      <h2>Beer Fermentation Timeline</h2>
      <p>
        Most ales finish primary fermentation in <strong>1-2 weeks</strong>.
        After that, you can bottle and carbonate for another 1-2 weeks. Total
        time from brew day to drinking: roughly <strong>3-4 weeks</strong>.
      </p>
      <p>
        Lagers take longer — 4-8 weeks or more — because they ferment at
        colder temperatures. For your first brew, stick with ales.
      </p>

      <h2>Mead Fermentation Timeline</h2>
      <p>
        Mead is slower. Primary fermentation takes <strong>2-4 weeks</strong>,
        and most mead benefits from several months of aging. Technically
        drinkable at 4-6 weeks, but noticeably better at 3 months. See our
        detailed{" "}
        <Link href="/how-long-does-mead-take" className="underline hover:no-underline text-brown-900">
          mead brewing timeline
        </Link>
        .
      </p>

      <h2>Cider Fermentation Timeline</h2>
      <p>
        Hard cider is similar to beer — <strong>2-3 weeks</strong> for primary
        fermentation, then 1-2 weeks carbonating in bottles. Simpler than beer
        to make, since you start with store-bought juice.
      </p>

      <h2>How Do You Know When It&apos;s Done?</h2>
      <p>
        The easiest way: watch your airlock. When bubbling drops to less than
        one bubble per minute for several days, primary fermentation is likely
        done. For precision, use a hydrometer — two identical readings a few
        days apart means fermentation has finished.
      </p>

      <h2>The Universal Rule</h2>
      <p>
        When in doubt, wait longer. Almost every fermented drink improves with
        more time. Rushing is the most common{" "}
        <Link href="/blog/common-fermentation-mistakes" className="underline hover:no-underline text-brown-900">
          fermentation mistake
        </Link>{" "}
        beginners make. Your future self will thank you for the patience.
      </p>

      <p>
        Ready to start your first brew? Grab a{" "}
        <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
          1 gallon brewing kit
        </Link>{" "}
        and check out our{" "}
        <Link href="/fermentation-guide" className="underline hover:no-underline text-brown-900">
          fermentation guide
        </Link>
        .
      </p>
    </>
  ),

  "why-airlock-bubbles": (
    <>
      <p>
        You sealed up your fermenter, attached the airlock, and now it&apos;s
        doing... something. Bubbles are coming through. Is that good? Bad?
        What does it mean? Let&apos;s break it down.
      </p>

      <h2>Why Airlocks Bubble</h2>
      <p>
        During fermentation, yeast converts sugar into alcohol and carbon
        dioxide (CO2). That CO2 needs to escape — otherwise pressure builds up
        and bad things happen. The airlock lets CO2 out while keeping air
        (and bacteria) from getting in. Each bubble is a tiny burp of CO2
        from your fermenting brew.
      </p>

      <h2>What Steady Bubbling Means</h2>
      <p>
        Consistent, regular bubbling means active fermentation. The yeast is
        healthy, eating sugar, and doing its job. During peak fermentation
        (usually days 2-5), you might see a bubble every few seconds. This is
        great — everything is working as it should.
      </p>

      <h2>What Slow or No Bubbling Means</h2>
      <p>
        If your airlock isn&apos;t bubbling, don&apos;t panic immediately.
        Common reasons:
      </p>
      <ul>
        <li><strong>Lag phase</strong> — The first 12-24 hours often have no visible activity. The yeast is adjusting.</li>
        <li><strong>Seal isn&apos;t tight</strong> — CO2 is escaping around the lid or stopper instead of through the airlock. Check your seal.</li>
        <li><strong>Temperature too cold</strong> — Yeast slows way down below 60°F. Move your fermenter somewhere warmer.</li>
        <li><strong>Fermentation is done</strong> — If it&apos;s been 2+ weeks, bubbling should slow naturally.</li>
      </ul>

      <h2>When to Actually Worry</h2>
      <p>
        If it&apos;s been 48+ hours with zero airlock activity, your seal is
        tight, and the temperature is right — the yeast might not have been
        viable. This is rare with fresh yeast. If it happens, you can pitch
        new yeast.
      </p>

      <h2>The Bottom Line</h2>
      <p>
        Bubbling = fermentation is happening. No bubbling for the first day =
        probably fine. No bubbling after 48 hours = check your seal and
        temperature. Learn more about the full fermentation process in our{" "}
        <Link href="/fermentation-guide" className="underline hover:no-underline text-brown-900">
          fermentation guide
        </Link>
        , or grab a{" "}
        <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
          1 gallon brewing kit
        </Link>{" "}
        to see it for yourself.
      </p>
    </>
  ),
};
