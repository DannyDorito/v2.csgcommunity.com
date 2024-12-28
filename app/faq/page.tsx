"use client";

export default function FAQ() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl orange">
          Frequently Asked Questions
        </h1>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Where are the zombies?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We currently do not have the zombies mod on the server due to
          it&apos;s poor optimization and buggy nature. We will be experimenting
          with the mod on our test server to see if we can find some way of
          implementing them that will not effect server performance.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Why is my FPS so low?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We run a very high quality server with a very constant and steady
          server side FPS rate. The majority of the time, frames should not be
          to big of a problem on client side. However, depending on your specs,
          it can be. If it does become a problem, try turning off your grass,
          lowering your view distance, disabling clouds, or disabling shadows.
          All of these things are very helpful for FPS gain in Arma 3.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          What is a &quot;Hoopty&quot;?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Basically, a rubbish car. Usually cheap and/or broken down. Can be any
          size, make or model, but must (or should) be embarrassing to drive for
          some reason, such as when you bump the stereo all the plastic
          &quot;effects&quot; you have hot-glued to the exterior rattle,
          instantly portraying the cheapness of your bling.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          What are the black triangles on the map?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Military bases, camps, and installations.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Why do I see a white ring that stretches across the screen when it is
          foggy?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This is a simple Arma visual glitch, re-logging will fix the issue.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Why do I keep appearing on my dead body when I respawn?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This, simply known as The Respawn Glitch, occurs when your player name
          had 2 or more entrances in the database. This has to be fixed by a
          server admin, so please come on Teamspeak or make a forum post for
          assistance.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          How do I report someone for trader camping?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Trader camping is a very common accusation in the Exile mod, and can
          often be hard to prove. The general server rule is if you are killed
          inside the BLUE ZONE around the trader, it is against the rules. If
          you are killed, post a screenshot of your death marker in the blue
          zone, or better yet a video of the incident, and make a forum post
          here.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Why can&apos;t I join the server?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          There are many reasons this may be happening, but here are some
          starter tips. Make sure your mods are exactly as listed on the
          website, and are all up to date. Make sure Arma 3 is up to date and
          try verifying the integrity of your game cache. If still having
          problems, please make a post on our Tech Support section asking for
          assistance.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          How do I get a Ghillie Suit?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The simplest way to get a ghillie suit is from the Black Market
          Trader, although it is also possible to craft 3 different types of
          ghillies. This will take some time, but be well worth the grind.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Why do I get scoped out when using the RHS bolt action weapons?
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          It can be a little frustrating when trying to fire your rifle long
          distance, and you get taken out of the scope to pull the bolt back
          before you see where your shot lands. Well, good &apos;ol RHS has
          added a very nice function to their bolt operated weapons. After you
          fire, continue holding left click and you will remain in the scope
          until you release the button.
        </p>
      </main>
    </div>
  );
}
