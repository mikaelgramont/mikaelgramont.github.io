---
layout: post
title: MIA: progressive enhancement
tag: webdev, react
published: true
---

*TLDR; distilling my rant here for you people too busy commuting to the next room:*
- things you can build on the web form a continuum going from static content to full-featured apps
- people learn one technology and apply it verbatim to all the things, often sacrificing user experience at one end or the other
- UI frameworks focus on fast view rendering and updates but don't provide a strong narrative for how to build the rest of an app that adheres to progressive enhancement principles
- we need to change the culture around frameworks to support (at least document) progressive enhancement end-to-end

## Throwing my two cents hat into the ring
Over the last couple of weeks, several articles and threads on the state of modern web development have made the rounds:
- [Tim Kadlec's The Cost of JavaScript Frameworks](https://twitter.com/tkadlec/status/1252613423361376256)
- [Sarah Withee's thread on no-JS](https://twitter.com/geekygirlsarah/status/1260409688413306882)
- [Tom McWright's Second-guessing the modern web](https://twitter.com/tmcw/status/1259600386094030848)
- [Righ Harris' In defense of the modern web](https://twitter.com/Rich_Harris/status/1261274111386488834)

All of them made good points, and put their fingers on painful problems.
All of them drew out angry comments (this is web development after all), and many times it felt like people were talking past each other in the comments.

So as my first post here, and in the hope of contributing something to the debate, here are some thoughts that have been on my mind for a while.

## Looking back
We web developers are going through a bit of an existential crisis. For the first 15 years or so, the way to build sites was simple: render a long string on the server, send it down the pipes, make sure that string references some CSS and some JS and boom, you were in business.

We've since been pushing more and more intelligence (hence more JS) into the client and in the early 2010s, several solutions were put together to keep performance up and complexity down. That worked for a while (at least the performance side) but as articles over the past few weeks have shown, we've reached the limits of these new systems.

## So what are we to do now?
<figure class="content-youtube">
	<iframe src="https://www.youtube.com/embed/Qalj8wEh3ic" frameborder="0" allowfullscreen></iframe>
	<figcaption>So what's our generation supposed to do? Are we supposed to build stuff with our hands or just do like internet stuff? I'm lost Eagle!</figcaption>
</figure>

- Some people say that we should start over. The argument being that we can't build good apps on the the web because the platform is inadequate/slow/broken/too complicated.
- At the same time it's become common place to see apps foregoing SSR completely because doing so helps maintain a good developer experience which is supposedly key to... building good apps.
- Of course there are also people who think we should ditch frameworks and go back to SSR + a bit of Javascript on the client.
Then there's the in-fighting. The trickle down egonomics (DX implies UX), the CSS-in-JS, the "CSS is not a real language". I'll stop here before I voice my own opinion about certain newish things.

## We can't even agree on what we have, or whether it's good enough. Why is that?
I suspect the reason is that most people work on mostly the same section of the content/app continuum and lose sight of the other parts of that continuum.
- The Web started as a platform for distributing information as text. If you're in the business of building forums or blogging platforms, it's easy to dismiss large app bundles as perverting the lightweight nature of the Web.
- On the other end of the spectrum, the Web competes with native apps (or at least tries to), and when you build a web app, it's easy to lose sight of important things like machine-readable markup, bandwidth and CPU restrictions.

<figure class="content-glitch">
  <iframe allow="geolocation; microphone; camera; midi; vr; encrypted-media" src="https://scandalous-historical-hub.glitch.me/" data-testid="app-preview-iframe" title="Preview of scandalous-historical-hub"></iframe>
  <figcaption>Note: this little widget above is for illustration purposes, I don't claim that it's super accurate or anything.</figcaption>
</figure>

The web platform is so successful because it is so universal: regardless of the device, OS, browser, we can all access the same things. It's only natural that everyone would grab that and run with it, trying to make their little portion of the continuum better. But that success can only go on (and some already say that success is fading) if we all accept that the other portions of the continuum (and the metrics that they value) matter too.

## I guess what I'm saying is that we could all use a little more empathy
And as people who make a living on the web, [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) (PE) is the way to express that empathy. PE was, is and should remain our core principle, *it's how we guarantee resilience* , and that no user is left behind even when a request fails or internet access is prohibitively expensive.

It follows that we should recognize that empathy is lacking and support PE with all our might: *for each framework, we need a narrative that says "this is the way to supporting all users"*.

To be clear, these are areas that I don't see documented very much in UI frameworks, and I wish it wasn't so:
- *resilience is rooted in HTML and CSS*. This is step 1, the JS experience is step 2.
- how to provide a basic JS experience without forcing full bundles down the pipes. This is important for those cases where data is expensive and we're building 1MB bundles. There will be trade-offs here of course.

## The future could be changes in culture and documentation, not just new tech
What do frameworks and their communities tell developers when they don't document resilience?

*It tells them that it's fine to focus on making just a slice of the population happy.*

UI frameworks have become so important nowadays. After learning the basics of web development, beginners, because they need a job, will spend a lot of time learning the ins and outs of one framework to become productive. They can be very subtle to master, and so people specialize in them, and they draw so many eyeballs that I'd say it's fair to expect them to lift people up and pull them towards an ideal situation, one where all users are included.

But that means they'd assume a different role than they one they have now.

*Note: this is where I may start to pick on React because it's the biggest player and the one I've worked with the most. Sorry React, I still like you!*

React for example is like "I'm updating your views, kthxbye!". Hence, one could argue (and people have) that React is not a framework. It's hardly React's fault that its role is limited to view management, but then it means the community is left to figure out how to handle the other aspects of apps, and guess what?

Often times, the rest is left unhandled and the continuum suffers. To be clear, I'm talking about handling situations like: low-bandwidth and/or limited CPU (which, combined, essentially mean users see a no-JS experience), deliberate no-JS or, on the other end of the spectrum: PWAs.

Things like [Next.js](https://nextjs.org/) are one layer above React, and opinionated enough to handle more sides of the development in a standard way, but the no-JS case is not really part of the conversation in their docs either. Sad continuum.

## Things are moving
There's a bit of a recurring debate involving notions like SSR, client-side rendering, hydration, partial hydration and probably other things I forget, and everyone's been scrambling over the last two years to provide solutions to the problem of "how to ship our JS".

That's great news and there are different concepts than virtual DOMs that are pretty promising, but the web platform is a slow-steering boat, and unless we make sure that emerging frameworks (and new versions of existing ones) care about progressive enhancement at the very least in the cultural sense (i.e., writing docs on how to support it), we're likely to be asking the same questions in 2030. *At least that will provide a whole bunch of interesting blog posts during the COVID-29 lockdown.*

## What now?
On my end, I think I'll try to document how I've been tackling supporting the full continuum in my humble React apps. It won't be perfect, it'll be naive, but hey I suppose that's something.

## Fun (not really, more like sad) notes
I can't help but notice the striking similarities between the Web platform and the state of things around the world right now:
- infrastructure collapses as soon as one thing goes wrong (*COVID19 is the new leftpad*)
- the ecosystem could be super strong but it is weakened because everyone values and protects only what they directly see
- regular people are left with little guidance and help by the adults in the room (governments / framework communities)
- people fight on the internet, and can't even agree on what the problem is