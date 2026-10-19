import { decryptSequence } from "../components/typewriter.js";

async function initializeCertificatesPage() {
    const gallery = document.getElementById("certificates-gallery");

    if (!gallery) {
        console.error("Certificates gallery container not found.");
        return;
    }

    // Start the summary animation independently of gallery loading.
    initializeCertificatesSummary();

    try {
        const response = await fetch("../data/certificates.json");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const files = await response.json();

        gallery.replaceChildren();

        if (!Array.isArray(files) || files.length === 0) {
            gallery.textContent = "No certificates available.";
            return;
        }

        files.forEach(file => {
            if (!file.url) return;

            // Resolve asset paths relative to the project root.
            const assetUrl = new URL(
                `../${file.url}`,
                window.location.href
            ).href;

            const item = document.createElement("button");
            item.type = "button";
            item.className = "certificates-gallery-item";

            item.setAttribute(
                "aria-label",
                `View ${file.name || "certificate"} in full size`
            );

            if (file.type === "pdf") {
                const pdf = document.createElement("iframe");

                pdf.src =
                    `${assetUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`;

                pdf.title = file.name || "Certificate PDF";
                pdf.loading = "lazy";

                item.appendChild(pdf);
            } else {
                const img = document.createElement("img");

                img.src = assetUrl;
                img.alt = file.name || "Certificate";
                img.loading = "lazy";

                item.appendChild(img);
            }

            item.addEventListener("click", () => {
                const viewerUrl = new URL(
                    "./certificate-view.html",
                    window.location.href
                );

                viewerUrl.searchParams.set("file", assetUrl);
                viewerUrl.searchParams.set(
                    "type",
                    file.type || "image"
                );
                viewerUrl.searchParams.set(
                    "name",
                    file.name || "Certificate"
                );

                window.open(
                    viewerUrl.href,
                    "_blank",
                    "noopener,noreferrer"
                );
            });

            gallery.appendChild(item);
        });
    } catch (error) {
        console.error("Certificates gallery error:", error);
        gallery.textContent = "Unable to load certificates.";
    }
}

function initializeCertificatesSummary() {
    const summary = document.getElementById("certificates-summary");

    if (!summary || summary.dataset.decryptionStarted) {
        return;
    }

    summary.dataset.decryptionStarted = "true";

    const summaryContent = [
        {
            type: "heading",
            text: "It All Started with Two Credit Points"
        },
        {
            type: "paragraph",
            text: `My entire certificate timeline starts and ends during my college years. And the funny thing is, none of it started because I was particularly interested in collecting certificates.

It started because of something called activity points.

Let me explain.

When I joined college for my Bachelor of Technology in Computer Science and Engineering, we had a week-long induction programme. They explained everything the course had to offer, how the degree worked, what we needed to do, and all the usual procedural stuff.

Out of all the jargon they threw at us, I managed to understand three things:

Keep your grade points up. Pass every single exam — and boy, there are a LOT of exams. And finally...

Drum roll, please...

Activity points.

Now, to understand why I remember this particular requirement even after all these years, you need to understand how the credit system worked.

Let's assume you need 100 credit points to graduate. Passing your exams and earning the associated credits could get you 98 of them. The remaining two credit points had to come from activity points.

Two points.

Just two.

But those two points were mandatory.
`
        },
        {
            type: "heading",
            text: "The Villain Called Activity Points"
        },
        {
            type: "paragraph",
            text: `So why was I so annoyed by this whole activity-points business?

It wasn't because I was against extracurricular activities. The university introduced the system to encourage students to participate in things beyond academics — arts, sports, technical festivals, workshops, and similar activities.

That part was perfectly reasonable.

The problem was how you actually earned those points.

You couldn't simply do something interesting and claim the points. You needed documented proof, and the activity had to fall into a predefined category with specific requirements.

Take sports, for example. You needed to participate at a recognised level, such as college or district level, to qualify.

I tried that route.

Turns out, the other guys were simply much better at sports than I was. Fair enough. That option wasn't going to save me.

Then I looked into technical festivals and workshops. Many of them required money to attend, and certificates from some events weren't even accepted for activity points.

Arts? I wasn't particularly talented in that department either, so I didn't even bother exploring it seriously.

And there I was, wondering what exactly I was supposed to do.

Still, I didn't panic. We had four whole years to collect the required activity points, and I was reasonably good at academics. My final CGPA would eventually be 8.95 out of 10, so I figured I could deal with this requirement later.

What could possibly go wrong?

Well...
`
        },
        {
            type: "heading",
            text: "Corona Accidentally Saved Me"
        },
        {
            type: "paragraph",
            text: `Then came COVID-19.

The world went into lockdown, college moved online, and the usual campus activities came to a halt.

On the surface, this was the worst possible situation for someone who still needed extracurricular activity points.

But then I discovered something unexpected.

It was a blessing in disguise.

Colleges and educational organisations started organising online workshops, webinars, paper presentations, and all sorts of virtual events. And the best part?

A lot of them were free.

No travelling. No registration fees for many events. No need to compete against people who were better at sports than me. Just register, attend the event, and get the certificate.

I didn't particularly care what the topic was at first. If an event was free and the certificate could help with activity points, I was interested.

So I attended. Collected the certificate. Found another event. Attended that one, too.

Before long, it had become a game.

I wanted to see how many certificates I could collect. Every event was another opportunity to add one more to the collection.

Eventually, I had more than twenty certificates.

At that point, I thought I had done enough.

Surely twenty-plus certificates would be plenty, right?

Oh boy, was I wrong.
`
        },
        {
            type: "heading",
            text: "Collecting Certificates vs Actually Learning"
        },
        {
            type: "paragraph",
            text: `When I stopped attending those events, I had some time to think about what I'd been doing.

And I realised something slightly embarrassing.

I had certificates for topics I barely understood.

I'd attended the events, collected the certificates, and moved on. If someone had asked me to explain what I'd supposedly learned from some of those sessions, I probably wouldn't have had much to say.

I had proof of attendance, but how much knowledge had I actually gained?

That question bothered me.

At some point, I got that familiar burst of motivation. You know the one — the sudden urge to change your life, become productive, and finally start doing everything you've been putting off.

But motivation is just a feeling. And feelings change.

This time, I decided not to rely on motivation alone. I tried to build discipline instead.

I started looking for free courses and learning opportunities that were actually worth my time. I explored platforms like SoloLearn, NPTEL, Great Learning Academy, and Coursera.

The difference was simple: I wasn't just attending these courses to obtain a certificate anymore. I wanted to understand what I was learning.

I also started setting aside time to learn from YouTube. No certificate, no official proof, nothing to upload to a college portal. Just me, a video, and something I wanted to understand.

I went through CodeWithMosh and NeetCode, among other resources.

Looking back, I genuinely feel I learned more about data structures and algorithms from YouTube than I did during my college years.

And that was a turning point for me.

The guy who had initially chosen a modelling course without putting much effort into the certification process was now approaching learning differently. The certificates I earned during this period meant something more to me because I had actually put in the effort to understand the material.

For the first time, the certificate felt like evidence of something I'd learned rather than merely proof that I'd attended something.
`
        },
        {
            type: "heading",
            text: "Sixty Certificates, One Terrible Surprise"
        },
        {
            type: "paragraph",
            text: `Eventually, lockdown ended, and we returned to college.

I'll skip the entire college arc here. Come on, guys, if I start talking about everything that happened during those years, we'll be here for a very long time.

Fast-forward to my final year.

I was completely swamped with job placements, paper presentations, major and minor projects, and leading project teams. There was always something to do, and there certainly wasn't much time to worry about activity points.

Then the announcement came.

The college profile portal had opened the window for uploading certificates as proof of activity points.

Finally!

I was feeling pretty confident. I had more than sixty certificates by then, so I figured this would be the easiest part of the whole process.

I opened the portal, ready to upload my collection.

And then came the final twist.

Only a limited number of certificates from each category could be submitted.

All those certificates I'd collected? I couldn't simply upload all of them.

My entire strategy had been built around quantity, and now the system was telling me that quantity wasn't going to help nearly as much as I'd expected.

From more than sixty certificates, I could submit only five — one per eligible category under the applicable rules.

Suddenly, I had a new problem.

There wasn't enough time left to go out and collect more certificates, and I couldn't use most of the ones I already had.

I was doomed.

Or so I thought.
`
        },
        {
            type: "heading",
            text: "The NPTEL Plot Twist"
        },
        {
            type: "paragraph",
            text: `There's a saying that the night is darkest just before dawn.

In my case, dawn arrived in the form of a certificate I'd almost certainly not chosen for its activity-point value alone.

One of my NPTEL certificates was worth 50 activity points.

Fifty!

I had been worrying about collecting enough points, and this one certificate covered half of the required total by itself.

Suddenly, the situation looked much better.

I went through the certificates I had, checked which categories they belonged to, and worked out how to combine the eligible ones to get the highest possible reward.

Five certificates. Different categories. The right combination.

And just like that, I crossed 100 activity points.

Problem solved.

After all that stress, collecting dozens of certificates, trying different activities, and nearly running out of time, I finally had the points I needed.

The funny part is that the solution wasn't to collect even more certificates. It was to understand which ones actually mattered.

If that isn't a lesson in itself, I don't know what is.
`
        },
        {
            type: "heading",
            text: "After College: Learning Without the Certificate Chase"
        },
        {
            type: "paragraph",
            text: `I got placed straight out of college, and working life brought a different set of priorities.

I still wanted to learn new skills and explore new technologies. I just couldn't dedicate as much time to courses as I could during lockdown, especially when I wanted to complete them thoroughly enough to earn a certificate.

So my learning didn't stop, but the certificate collection slowed down.

And honestly, I was okay with that.

By then, I'd realised that learning something useful and earning a certificate for it aren't necessarily the same thing. Sometimes you complete a course and get a certificate. Sometimes you spend hours understanding a topic through videos, documentation, and practice, and there's nothing official to show for it.

The knowledge is still there.

The certificate isn't the only thing that matters.

Looking back, the whole activity-points requirement started as something I resented. I just wanted to get those two credit points out of the way and graduate.

Somewhere along the journey, though, it pushed me into experiences I probably wouldn't have pursued otherwise.

At first, I collected certificates because I needed points. Then I collected them because it had become a game. Eventually, I started learning because I genuinely wanted to understand things.

That progression taught me more than the activity-points system ever intended to.

I learned that motivation can get you started, but discipline is what keeps you going. I learned that free resources can be incredibly valuable if you're willing to put in the effort. And I learned that you don't need a certificate for every skill you acquire.

Most importantly, I learned not to confuse the evidence of learning with learning itself.

But I also learned something else.

After all the forms, categories, rules, deadlines, and calculations, I can proudly say:

Skills can never be calculated just from certificates alone, but obtaining a certificate is a skill in its own.

And after what I went through to get those activity points, I stand by that statement.`
        }
    ];

    const elements = [];

    summaryContent.forEach(item => {
        const element = document.createElement(
            item.type === "heading" ? "h2" : "p"
        );

        // Keep text hidden until its turn in the animation.
        element.dataset.decryptText = item.text;
        element.textContent = "";

        if (item.type === "paragraph") {
            element.style.whiteSpace = "pre-line";
        }

        summary.appendChild(element);
        elements.push(element);
    });

    // Do not block gallery loading while the summary decrypts.
    decryptSequence(elements, {
        speed: 25,
        cycles: 3
    });
}

initializeCertificatesPage();
