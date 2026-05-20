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

  "is-home-brewing-hard": (
    <>
      <p>
        Not at all. Most first-time brewers are surprised by how simple the
        process is once you have a starter kit and clear instructions. A basic
        1-gallon brew can be started in under an hour, and the hardest part is
        usually just waiting for fermentation to finish.
      </p>

      <h2>What Makes Brewing Easy</h2>
      <p>
        The yeast does all the actual work. Your job is to mix ingredients,
        sanitize equipment, and seal the fermenter. From there, you wait. The
        whole process is much more like baking bread than running a chemistry
        lab.
      </p>

      <h2>What Trips Up Beginners</h2>
      <p>
        Most struggles come from two things: not sanitizing well enough and
        getting impatient. We cover both in our{" "}
        <Link href="/blog/common-fermentation-mistakes" className="underline hover:no-underline text-brown-900">
          common fermentation mistakes
        </Link>{" "}
        guide. Avoid those and your first batch will almost certainly turn out.
      </p>

      <h2>Where to Start</h2>
      <p>
        A{" "}
        <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
          1-gallon brewing kit
        </Link>{" "}
        is the easiest place to begin. Small batch, low risk, fits on a kitchen
        counter. If you can follow a recipe, you can brew.
      </p>
    </>
  ),

  "difference-between-beer-and-mead": (
    <>
      <p>
        Beer is typically made from grains like barley and flavored with hops,
        while mead is fermented honey mixed with water and yeast. Mead usually
        has a smoother, sweeter flavor profile and is often easier for beginners
        because it requires fewer ingredients and less equipment.
      </p>

      <h2>Ingredients at a Glance</h2>
      <p>
        <strong>Beer:</strong> malted grain (or extract), hops, yeast, water.
        Requires a boil and careful timing.
      </p>
      <p>
        <strong>Mead:</strong> honey, water, yeast. No boiling required — just
        mix and pitch.
      </p>

      <h2>Flavor Profiles</h2>
      <p>
        Beer ranges from light lagers to dark stouts, with hop bitterness as a
        defining note. Mead is sweeter, smoother, and takes on the character of
        whatever honey you use. Wildflower honey gives floral notes; orange
        blossom adds citrus; buckwheat adds depth.
      </p>

      <h2>Which Is Easier for Beginners?</h2>
      <p>
        Mead wins for simplicity — fewer ingredients, no boil, and very
        forgiving. If you want a deeper dive, our{" "}
        <Link href="/blog/beer-vs-mead-brewing" className="underline hover:no-underline text-brown-900">
          beer vs mead comparison
        </Link>{" "}
        walks through it in detail, or check our{" "}
        <Link href="/how-to-brew-mead" className="underline hover:no-underline text-brown-900">
          mead brewing guide
        </Link>{" "}
        if you&apos;re ready to try.
      </p>
    </>
  ),

  "how-long-until-brew-is-drinkable": (
    <>
      <p>
        Most beginner beer kits take around 2–4 weeks from start to finish,
        while mead can take a bit longer depending on the recipe. The good news
        is that the fermentation process is mostly hands-off, so once it&apos;s
        set up, patience does most of the work.
      </p>

      <h2>Beer: 2–4 Weeks</h2>
      <p>
        Primary fermentation usually finishes in 1–2 weeks, followed by another
        1–2 weeks of bottle conditioning to build carbonation. Lagers take
        longer, but most beginner kits are ales — quick and reliable.
      </p>

      <h2>Mead: 4–6 Weeks Minimum</h2>
      <p>
        Mead is technically drinkable at 4–6 weeks but gets dramatically better
        at 3+ months. Our guide to{" "}
        <Link href="/how-long-does-mead-take" className="underline hover:no-underline text-brown-900">
          how long mead takes
        </Link>{" "}
        breaks down the full aging timeline.
      </p>

      <h2>Cider: 2–3 Weeks</h2>
      <p>
        Hard cider sits between beer and mead in complexity. Most ciders finish
        primary fermentation in 2–3 weeks and bottle condition for another 1–2.
      </p>

      <h2>The Real Answer</h2>
      <p>
        Every brew is &quot;done&quot; when fermentation stops and the flavor
        tastes right to you. Read more in our{" "}
        <Link href="/blog/how-long-does-fermentation-take" className="underline hover:no-underline text-brown-900">
          fermentation timeline
        </Link>{" "}
        guide.
      </p>
    </>
  ),

  "brewing-in-small-apartment": (
    <>
      <p>
        Absolutely. Small-batch brewing kits are designed for compact spaces
        and usually only require a countertop or corner of a room. Many people
        brew in apartments because the equipment is portable and doesn&apos;t
        require large-scale storage.
      </p>

      <h2>How Much Space Do You Actually Need?</h2>
      <p>
        A{" "}
        <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
          1-gallon brewing kit
        </Link>{" "}
        fits in a 12-inch square of counter space. The fermenter is the size of
        a large pitcher. You can store everything in a closet between batches.
      </p>

      <h2>Apartment-Friendly Tips</h2>
      <ul>
        <li><strong>Pick a quiet corner</strong> — Fermentation needs stable temperature, not a specific room.</li>
        <li><strong>Use small batches</strong> — A 1-gallon batch produces about 10 bottles. Plenty for personal use.</li>
        <li><strong>Skip the boil for mead</strong> — Mead doesn&apos;t require boiling, which means no stovetop steam or kitchen takeover.</li>
        <li><strong>Bottle as you go</strong> — Empty fermenter = more counter space.</li>
      </ul>

      <h2>Smells, Noise, and Neighbors</h2>
      <p>
        Fermentation has a faint bready or fruity smell — nothing offensive,
        and it stays inside the sealed fermenter. There&apos;s no noise. Your
        neighbors won&apos;t know unless you tell them.
      </p>

      <h2>Best Starter Option</h2>
      <p>
        If you&apos;re tight on space, start with a 1-gallon kit and{" "}
        <Link href="/how-to-brew-mead" className="underline hover:no-underline text-brown-900">
          mead
        </Link>
        . Smallest footprint, simplest process.
      </p>
    </>
  ),

  "homemade-brew-vs-store-bought": (
    <>
      <p>
        Freshness makes a huge difference. When you brew at home, you control
        the ingredients, flavors, and style, which often creates a more unique
        and flavorful result than mass-produced products sitting on store
        shelves for months.
      </p>

      <h2>The Freshness Factor</h2>
      <p>
        Commercial beer can sit in warehouses and trucks for weeks or months
        before reaching your fridge. Hops fade, flavors flatten. Your home brew
        goes straight from fermenter to glass — at peak freshness.
      </p>

      <h2>You Control the Ingredients</h2>
      <p>
        No corn syrup, no preservatives, no compromises. You pick the honey,
        the yeast, the fruit, the spices. The result tastes like you, not like
        a marketing committee.
      </p>

      <h2>Custom Flavor Combinations</h2>
      <p>
        Want a vanilla cinnamon mead? Apple cider with cardamom? A small batch
        of hoppy IPA you can&apos;t buy anywhere? That&apos;s the whole point
        of home brewing. Learn how to{" "}
        <Link href="/blog/customize-brew-flavors" className="underline hover:no-underline text-brown-900">
          customize your brew flavors
        </Link>
        .
      </p>

      <h2>Pride of Craft</h2>
      <p>
        There&apos;s something about drinking something you made that just
        tastes different. Even a slightly imperfect first batch usually beats
        a forgettable six-pack. Start your first batch with a{" "}
        <Link href="/best-beginner-brewing-kit" className="underline hover:no-underline text-brown-900">
          beginner brewing kit
        </Link>
        .
      </p>
    </>
  ),

  "biggest-beginner-brewing-mistake": (
    <>
      <p>
        Rushing the process is probably the most common issue. New brewers
        often open fermentation too early or bottle before fermentation is
        complete, which can affect flavor and carbonation. Keeping everything
        clean and giving the brew enough time solves most problems.
      </p>

      <h2>Why Patience Matters</h2>
      <p>
        Yeast works on its own schedule, not yours. Bottling too early traps
        unfinished sugars, which can lead to over-carbonation or bottle bombs.
        Opening the fermenter to peek introduces bacteria and oxygen.
      </p>

      <h2>How to Know When It&apos;s Actually Done</h2>
      <p>
        Watch your airlock. When bubbling slows to less than one bubble per
        minute for several days, primary fermentation is finishing. For
        certainty, take two hydrometer readings 2-3 days apart — if they match,
        you&apos;re done. Our{" "}
        <Link href="/blog/why-airlock-bubbles" className="underline hover:no-underline text-brown-900">
          airlock bubbling guide
        </Link>{" "}
        breaks this down.
      </p>

      <h2>The Sanitation Rule</h2>
      <p>
        Tied for first place: not sanitizing well enough. Every surface that
        touches your brew post-boil needs to be sanitized. Cutting corners here
        is the fastest way to ruin a batch.
      </p>

      <h2>Full Mistake List</h2>
      <p>
        We cover all seven of the most common beginner errors in our{" "}
        <Link href="/blog/common-fermentation-mistakes" className="underline hover:no-underline text-brown-900">
          fermentation mistakes guide
        </Link>
        . Read it before your first brew.
      </p>
    </>
  ),

  "expensive-brewing-equipment-needed": (
    <>
      <p>
        Definitely not. A simple beginner kit can produce surprisingly
        high-quality results, and most experienced brewers started with very
        basic equipment. Technique and patience matter far more than owning
        expensive gear.
      </p>

      <h2>What You Actually Need</h2>
      <ul>
        <li><strong>Fermenting vessel</strong> — A 1-gallon jug works perfectly.</li>
        <li><strong>Airlock and stopper</strong> — Lets CO2 out, keeps air in.</li>
        <li><strong>Sanitizer</strong> — Non-negotiable. Use the packet in your kit.</li>
        <li><strong>Instructions</strong> — A clear recipe to follow.</li>
      </ul>
      <p>
        That&apos;s genuinely it. Our{" "}
        <Link href="/best-beginner-brewing-kit" className="underline hover:no-underline text-brown-900">
          beginner brewing kit
        </Link>{" "}
        includes everything for around $35.
      </p>

      <h2>What You Don&apos;t Need (Yet)</h2>
      <p>
        Skip the temperature controllers, kegging systems, wort chillers, and
        digital hydrometers for now. They&apos;re great upgrades after you fall
        in love with the hobby, but you don&apos;t need any of it to make
        excellent first batches.
      </p>

      <h2>The Real Cost of Getting Started</h2>
      <p>
        $35 for the kit. $5–15 for ingredients. That&apos;s under $50 for your
        first batch, which makes around 10 bottles of finished brew. Better
        value than almost any craft beverage you can buy.
      </p>

      <h2>Quality Comes From You</h2>
      <p>
        Good sanitation, patience, and following instructions matter more than
        any piece of gear. Start simple, brew often, upgrade later.
      </p>
    </>
  ),

  "is-home-brewing-cheaper": (
    <>
      <p>
        Over time, yes — especially for people who enjoy craft beverages
        regularly. Once you own the basic equipment, ingredient costs per batch
        are usually much lower than buying premium craft drinks individually.
      </p>

      <h2>The Math</h2>
      <p>
        A{" "}
        <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
          1-gallon brewing kit
        </Link>{" "}
        costs $34.99. Ingredients for a batch run $5–15 depending on what
        you&apos;re making. That batch produces roughly 10 bottles of finished
        brew.
      </p>
      <p>
        Per bottle, you&apos;re looking at $1–2 for craft-quality drinks. Try
        finding that at a liquor store.
      </p>

      <h2>Break-Even Point</h2>
      <p>
        Most home brewers break even on their kit cost after just 2–3 batches.
        Everything after that is genuine savings.
      </p>

      <h2>Mead Is Especially Cheap</h2>
      <p>
        A pound or two of honey makes a full gallon of mead. A bottle of
        commercial mead can run $20+. The math is brutal — in the best way.
      </p>

      <h2>Beyond the Money</h2>
      <p>
        Cost savings are nice, but most home brewers stay in the hobby because
        of the experience. Learn more about why people are{" "}
        <Link href="/blog/why-home-brewing-popular" className="underline hover:no-underline text-brown-900">
          getting into home brewing
        </Link>
        .
      </p>
    </>
  ),

  "customize-brew-flavors": (
    <>
      <p>
        That&apos;s one of the best parts of home brewing. You can experiment
        with fruits, spices, honey varieties, citrus, vanilla, or different
        hops to create flavors you simply can&apos;t find in stores. Every
        batch can become its own unique recipe.
      </p>

      <h2>Easy Flavor Additions</h2>
      <ul>
        <li><strong>Fruits</strong> — Berries, peaches, apples, mango. Add during secondary fermentation.</li>
        <li><strong>Spices</strong> — Cinnamon, cardamom, clove, ginger. A little goes a long way.</li>
        <li><strong>Citrus</strong> — Orange peel, lemon zest, lime. Bright, refreshing additions.</li>
        <li><strong>Vanilla</strong> — A split vanilla bean transforms mead and stouts.</li>
        <li><strong>Honey varieties</strong> — Wildflower, orange blossom, buckwheat all taste totally different.</li>
      </ul>

      <h2>When to Add Flavors</h2>
      <p>
        Most additions go in during secondary fermentation (after primary
        finishes). This way, you don&apos;t lose the aromatics to vigorous CO2
        bubbling. Read our{" "}
        <Link href="/fermentation-guide" className="underline hover:no-underline text-brown-900">
          fermentation guide
        </Link>{" "}
        for timing details.
      </p>

      <h2>Start Simple</h2>
      <p>
        For your first customized batch, pick one flavor and use it lightly.
        Vanilla mead. Cinnamon cider. Orange peel ale. You can always go bigger
        next time.
      </p>

      <h2>Keep a Brew Journal</h2>
      <p>
        Write down what you added, how much, and when. The second time you
        brew a recipe is when it gets really fun — you&apos;ll know exactly
        what to dial up or down.
      </p>

      <h2>Ready to Experiment?</h2>
      <p>
        Grab a{" "}
        <Link href="/shop" className="underline hover:no-underline text-brown-900">
          starter kit
        </Link>{" "}
        and start playing with flavors. The best recipes come from your own
        kitchen.
      </p>
    </>
  ),

  "why-home-brewing-popular": (
    <>
      <p>
        People enjoy the combination of creativity, science, and hands-on
        experience that brewing offers. It&apos;s become popular for the same
        reason cooking and coffee culture exploded — people love making
        high-quality products themselves and sharing the experience with
        friends.
      </p>

      <h2>The Creativity Factor</h2>
      <p>
        Brewing is endlessly customizable. Every batch is a chance to try a
        new ingredient, a new style, a new technique. It scratches the same
        itch as cooking from scratch — you control everything, and the result
        is uniquely yours.
      </p>

      <h2>The Science Factor</h2>
      <p>
        Fermentation is real chemistry happening on your counter. Watching
        yeast transform sugar into alcohol is genuinely fascinating, and the
        learning curve never really ends. There&apos;s always a new technique,
        a new ingredient, a new variable to play with.
      </p>

      <h2>The Community Factor</h2>
      <p>
        Home brewers share recipes, tips, and finished bottles. Subreddits,
        YouTube channels, local clubs — there&apos;s a thriving global
        community of people who&apos;d love to help you brew your first batch.
      </p>

      <h2>The Cost Factor</h2>
      <p>
        With craft beer and natural wine getting more expensive, brewing your
        own offers premium quality at a fraction of the price. See the breakdown
        in{" "}
        <Link href="/blog/is-home-brewing-cheaper" className="underline hover:no-underline text-brown-900">
          is home brewing cheaper than store-bought
        </Link>
        .
      </p>

      <h2>Ready to Join?</h2>
      <p>
        Most people who try brewing once stick with it. Start small with a{" "}
        <Link href="/1-gallon-brewing-kit" className="underline hover:no-underline text-brown-900">
          1-gallon kit
        </Link>{" "}
        and see why so many people are making it their new hobby.
      </p>
    </>
  ),
};
