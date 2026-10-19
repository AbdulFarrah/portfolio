
import { decryptSequence } from "../components/typewriter.js";

async function initializeModellerPage() {
    const gallery = document.getElementById("modeller-gallery");

    if (!gallery) {
        console.error("Modeller gallery container not found.");
        return;
    }

    try {
        const response = await fetch("../data/modeller-images.json");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const images = await response.json();

        gallery.replaceChildren();

        // Animate the summary once when the page loads.
        const summary = document.getElementById("modeller-summary");

        if (summary && !summary.dataset.decryptionStarted) {
            summary.dataset.decryptionStarted = "true";

            const summaryContent = [
                {
                    type: "heading",
                    text: "The Little Kid Who Wanted to Make Video Games"
                },
                {
                    type: "paragraph",
                    text: "I'm pretty sure almost every kid who grew up playing GTA on a computer has, at some point, thought about making video games when they grow up. I was no different. Of course, back then, I didn't know the ABC of the ABC of game development. I just knew that video games were cool, and making one of my own sounded even cooler.\n\nI didn't exactly become a full-fledged game developer, but I did come pretty close to one part of that dream.\n\nThis is the story of how I accidentally became a 3D modeller.\n\n"
                },
                {
                    type: "heading",
                    text: "An Unexpected Course Called Modeller"
                },
                {
                    type: "paragraph",
                    text: "The story starts when I was in Plus One at St. Joseph's H.S.S. in Thiruvananthapuram. A government skill-development scheme called ASAP, or Additional Skill Acquisition Programme, came to our school.\n\nNow, not to brag, but I've always had this feeling that I need to do something different to stand out. At that point, I wasn't thinking about my future career or planning my life ten years ahead. I just wanted to do something different from everyone else.\n\nSo I wrote the selection exam, got shortlisted, and went to a hub where students could choose from the different ASAP courses available.\n\nThe place was basically a career fair, except instead of companies trying to recruit you, there were representatives trying to convince you to join their courses. There were all kinds of options, from baking to video editing and plenty of other things.\n\nI walked around, checked out a few of them, and nothing really caught my attention.\n\nThen I walked into the Modeller course.\n\nThe representative did a good job explaining it, but honestly, it wasn't just the person selling the course. The slides, the examples, and the idea of creating 3D characters itself caught my attention.\n\nI didn't even realise that a little kid inside me, who once wanted to make 3D animations and video games, was still hanging around somewhere. Apparently, he had just been sleeping all this time.\n\nAnd that presentation woke him up.\n\nI chose Modeller.\n\n"
                },
                {
                    type: "heading",
                    text: "Theory, History, and Free Snacks"
                },
                {
                    type: "paragraph",
                    text: "The course was divided into three parts: foundation, training, and certification.\n\nThe foundation part covered theory and drawing character sheets. The training part involved an internship at the actual Vismayasmax Animation office in Thiruvananthapuram. Finally, certification meant taking a theory exam, building a model, and answering questions in a viva.\n\nThe representative explained all of this when I enrolled. I nodded along, of course. Did I really understand what I was getting myself into? Not even close.\n\nThe foundation stage turned out to be the most boring part of the whole experience. It felt like the longest part, too.\n\nWe started with the history of animation and video. Somewhere along the way, we learned about that famous horse-running experiment involving a series of cameras. As I remember the story, two wealthy men disagreed about whether a running horse ever had all four feet off the ground. Cameras were arranged to capture the horse's movement, producing a sequence of photographs that helped settle the argument.\n\nI probably wasn't paying as much attention as I should have, because my memory of the exact details is a little fuzzy.\n\nAnyway, the lectures went on and on. History, theory, explanations, more theory. You get the idea.\n\nThe one consistently interesting part of those sessions was the free snacks. The programme made sure we got something to eat, and I can confidently say that the snacks were one of the highlights of the foundation stage.\n\nAt that point, I was still waiting for the course to become interesting.\n\nThankfully, it did.\n\n"
                },
                {
                    type: "heading",
                    text: "The First Day at Vismayasmax Animation"
                },
                {
                    type: "paragraph",
                    text: "Everything changed when the internship began.\n\nFor the first time in my life, I was sitting in front of a 55-inch screen being used as a computer monitor. A 55-inch screen! I'd never seen anything that big in my entire life, let alone sitting right in front of me as a monitor.\n\nThe office was air-conditioned, the surroundings were unfamiliar, and there were actual employees working on actual projects. I was a teenager who had come there to learn modelling, and suddenly I was surrounded by people who did this stuff for a living.\n\nNaturally, I was nervous.\n\nThen I looked up and saw someone working on a character that looked like it belonged in Transformers or something similar.\n\nAnd just like that, the fear disappeared.\n\nI wanted to learn how to do that.\n\nThe first day was mostly introductions, a tour of the facility, and an explanation of the software we'd be using: Autodesk Maya.\n\nI'd heard of Autodesk before because my father used AutoCAD to draw floor plans. I knew the company existed, but I had no idea it also made software for creating 3D models and animations.\n\nThat was my introduction to Maya, and things finally started getting interesting.\n\n"
                },
                {
                    type: "heading",
                    text: "My First Character and the Computer Nobody Wanted"
                },
                {
                    type: "paragraph",
                    text: "From the next day onwards, we started working.\n\nOne thing about me is that I'm reasonably comfortable around computers. I wouldn't claim to know everything, but compared to most of the other people in our batch, I was already fairly familiar with using one.\n\nAnd then there was my computer.\n\nIt was probably the most secure computer in the entire room, although not for any sophisticated technical reason. Its boot menu was messed up. Whenever someone switched it on, the boot menu appeared instead of Windows, so nobody wanted to use it.\n\nI figured out which boot option to select, pressed it, and got into Windows.\n\nProblem solved.\n\nThe unexpected benefit was that nobody else used that computer after our internship hours. My files stayed there, and I didn't have to worry about someone else using the machine and disturbing my work.\n\nSometimes, the best setup isn't the most powerful one. It's the one nobody else wants.\n\nI still remember the first character I modelled: Mike Wazowski from Monsters, Inc.\n\nI modelled him, placed him in a background, set up the lighting and camera, and rendered the camera output.\n\nAnd then something clicked.\n\nSure, Mike Wazowski was already a well-known character. I hadn't invented him. But the version sitting on my screen was something I'd created myself. I'd taken a character I knew from a movie and built my own 3D version of him from scratch.\n\nThat feeling was pretty special.\n\nAfter that, I started making my own characters. By the time the internship ended, I'd created around ten original characters.\n\nApparently, I was doing reasonably well, too. One day, a parent came to the academy to enquire about admission for their child. They saw my work and assumed I was a senior student studying there.\n\nThey even took my number, thinking I could help them with information about the academy.\n\nI had to give them the number of an actual senior student instead.\n\nI'll take that as a compliment.\n\n"
                },
                {
                    type: "heading",
                    text: "More Than Just Modelling"
                },
                {
                    type: "paragraph",
                    text: "Of course, the internship wasn't just about sitting in front of a computer and making models.\n\nOur batch had around twenty people: twelve boys and eight girls. We were all teenagers, so there was plenty of talking, gossiping, and general nonsense happening alongside the learning.\n\nDuring lunch, we'd gather around the cafeteria, share our food, discuss whatever we were working on, ask each other questions, and gossip about everything else.\n\nThose little moments became part of the experience, too.\n\nThere was one guy I met during the programme who eventually became a real friend. At the time, I had no idea we'd end up going to the same college and spending the next four years there together.\n\nIt's funny how some people enter your life without you realising how long they're going to stay.\n\nBack to the modelling, though: I was finishing characters pretty quickly for an intern. The representative noticed my progress and asked whether I'd like to learn Blender as well.\n\nI gave it a try, but I realised fairly quickly that I wasn't quite at the level where I could comfortably move on to animation. I still had plenty to learn about modelling itself.\n\nSo I stuck with what I was doing and kept practising.\n\n"
                },
                {
                    type: "heading",
                    text: "The End of the Internship"
                },
                {
                    type: "paragraph",
                    text: "Like all good things, the internship eventually came to an end.\n\nThe last day felt a little sad. I'm not saying that to make the story unnecessarily emotional; it genuinely felt different knowing that we wouldn't be returning to the same place every day with the same group of people.\n\nI'd become comfortable with the environment, the work, and the people around me. Something that had started as an unfamiliar course had turned into a memorable experience.\n\nMy dad came to pick me up that day, so I couldn't spend as much time with the batch as I would have liked.\n\nAnd just like that, the modelling internship was over.\n\nThe next step was certification.\n\nWhich, as it turned out, involved waiting. For a long time.\n\nThere was a point when I genuinely thought I could make a career out of modelling. I even looked into Outscal to explore further opportunities and training.\n\nBut animation courses can be seriously expensive. Once I looked into the costs, I had to back out.\n\nI still had my interest in modelling, but life was moving forward, and college was waiting.\n\n"
                },
                {
                    type: "heading",
                    text: "One Last Reunion"
                },
                {
                    type: "paragraph",
                    text: "My college journey had already started when the certification exam finally came around, roughly a month later. Remember that friend I mentioned earlier? We ended up going to the exam together.\n\nHonestly, the exam felt more like a reunion than an examination.\n\nWe got to see the old batch again, catch up with everyone, and enjoy each other's company. After so much time apart, it was nice to be back together.\n\nOf course, we still had an exam to complete.\n\nFor my final model, I attempted an old, ruined temple. I worked on it as part of the practical examination, although I couldn't save the final output to my own drive because of the exam setup.\n\nI also completed the theory portion and attended the final viva.\n\nAnd that was it.\n\nMy days as a student modeller came to an end with a final group photograph of our batch.\n\nAbout a month and a half later, the certificate finally arrived by mail.\n\nIt's now displayed in the gallery alongside the models I created during that journey.\n\nLooking back, I didn't become the video game developer that little kid once imagined he'd be. But for a while, I got to explore a piece of that dream. I learned to build characters, work with 3D software, and turn ideas into something I could actually see on a screen.\n\nAnd I got a few good memories, some new friends, and a funny story about a computer nobody else wanted to use along the way.\n\nNot a bad deal, if you ask me."
                }
            ];

            summary.replaceChildren();

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
            decryptSequence(elements, {
                speed: 25,
                cycles: 3
            });
        }

        if (!Array.isArray(images) || images.length === 0) {
            gallery.textContent = "No modeller images available.";
            return;
        }

        images.forEach(image => {
            if (!image.url) {
                return;
            }

            // Resolve artwork paths relative to the project root.
            const assetUrl = new URL(
                `../${image.url}`,
                window.location.href
            ).href;

            const item = document.createElement("button");
            item.type = "button";
            item.className = "modeller-gallery-item";
            item.setAttribute(
                "aria-label",
                `View ${image.name || "modeller image"} in full size`
            );

            const img = document.createElement("img");
            img.src = assetUrl;
            img.alt = image.name || "Modeller artwork";
            img.loading = "lazy";

            item.appendChild(img);

            item.addEventListener("click", () => {
                const viewerUrl = new URL(
                    "./modeller-view.html",
                    window.location.href
                );

                viewerUrl.searchParams.set("file", assetUrl);
                viewerUrl.searchParams.set(
                    "name",
                    image.name || "Modeller artwork"
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
        console.error("Unable to load modeller gallery:", error);
        gallery.textContent = "Unable to load modeller images.";
    }
}

initializeModellerPage();
