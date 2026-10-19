
import { decryptSequence } from "../components/typewriter.js";

function initializeCvPage() {
    const summary = document.getElementById("cv-summary");

    if (!summary) {
        console.error("CV summary container not found.");
        return;
    }

    if (summary.dataset.decryptionStarted) {
        return;
    }

    summary.dataset.decryptionStarted = "true";

    
const summaryContent = [
    {
        type: "heading",
        text: "An Ordinary Kid, Apparently"
    },
    {
        type: "paragraph",
        text: "This is probably the page I've spent the most time thinking about what to write. If you want to know about my professional side, my résumé is right there on the left. My skills, projects, achievements, education, and work experience are all listed in it.\n\nBut I wanted to share something different here. A glimpse of the person behind the code.\n\nHonestly, when I look back at my life, it seems pretty ordinary. Sure, there have been a few twists and turns, but nothing that felt particularly extraordinary while I was living through it.\n\nOr is that just how life works? Maybe the interesting parts only become visible when you look back.\n\nI did my primary education at Holy Angels' Convent School. Academically, I was probably below average, but when it came to mischief, I'd like to think I was doing considerably better.\n\nI was your typical kid who cared more about summer vacations than the exams that came before them. Ben 10 and Power Rangers were among my biggest interests, and as long as I managed to pass my exams, life was good.\n\nThen came the transition from primary school to upper primary school. I assumed I'd be joining St. Joseph's, like many students around me. But my family had to move because of my father's work, and that meant a new place, a new environment, and a completely different school.\n\nI ended up at Christ Nagar.\n\nLittle did I know that this unexpected change would turn out to be one of the most important turning points of my childhood."
    },
    {
        type: "heading",
        text: "The School That Changed My World"
    },
    {
        type: "paragraph",
        text: "My first experience with Christ Nagar was quite something. I hadn't even realised that some schools conducted entrance exams and interviews for students entering fifth standard.\n\nApparently, they did.\n\nI took the entrance exam, attended the interview while being nervous the entire time, and somehow got selected.\n\nThen came the culture shock.\n\nI was in the CBSE stream, and unlike my previous school experience, English wasn't just the language mentioned on the school's signboard. It was actually enforced in the classroom.\n\nThe students were good at studies, too. I still remember teachers asking whether anyone had scored full marks across all the tests in an exam, and quite often, someone actually had.\n\nAnd then there was me, sitting somewhere in the bottom half of the class, wondering how I was supposed to catch up.\n\nI didn't particularly enjoy that first year. The language barrier was one thing, but the bigger problem was that I suddenly found myself surrounded by people who seemed much better prepared than I was.\n\nThen, through what was essentially a clerical error, I ended up in a different class in sixth standard.\n\nThat small administrative mistake turned out to be a pretty good one for me.\n\nI found a group of friends who made school enjoyable again. They helped me with my studies, I spent more time talking to them, and my English gradually improved.\n\nThere's a difference between knowing a language and actually using it. You can study something for years, but eventually, you have to start doing it. That's how my English improved: by using it, making mistakes, and getting more comfortable with it.\n\nWe also played football during recess. I'd spent much of my childhood playing outdoors, so when a group of classmates needed another player and invited me to join, I happily accepted.\n\nOur team won that first game, but the more important outcome was that I finally felt like I belonged.\n\nIn the classroom, we were trying to keep up with our studies. On the playground, we were just a bunch of Malayali kids playing football and having fun.\n\nMy school life had finally started to feel like school life should.\n\nAnd then I discovered Pokémon."
    },
    {
        type: "heading",
        text: "Pokémon, Football, and Learning to Think Ahead"
    },
    {
        type: "paragraph",
        text: "One day, I noticed my friends gathered around what looked like a serious argument. Two people were facing each other, everyone else was watching, and the atmosphere was intense.\n\nI thought a fight had broken out.\n\nNope. They were playing Pokémon.\n\nSince the school didn't allow us to bring electronic devices, these guys had come up with their own version of a Pokémon battle game. They had worked out battle mechanics, type matchups, moves, and other rules, essentially recreating a surprisingly detailed version of the game using nothing but their knowledge and imagination.\n\nI was fascinated.\n\nI wanted to join immediately, but I was the new guy in the group, so I had to work with Pokémon nobody else had chosen.\n\nThat meant researching Pokémon across different types, studying their moves, and picking one legendary Pokémon as well. I had never put that much effort into researching something purely because I wanted to.\n\nAnd I was terrible at the game initially.\n\nI kept losing. My friends were thinking several moves ahead while I was still trying to understand what had just happened. I had to learn to anticipate what an opponent might do rather than simply choosing a move that looked powerful.\n\nEventually, I found Aerodactyl.\n\nThat Pokémon changed everything.\n\nIts high Speed stat meant I could often make the first move, and its varied move pool gave me ways to counter different opponents. After so many losses, I finally won a battle.\n\nThe feeling was incredible.\n\nNaturally, I became a little too attached to my new discovery. Aerodactyl was a powerhouse in our version of the game, although not invincible, and figuring out why it worked so well became another little research project of mine.\n\nLooking back, I find it interesting that some of my most enjoyable experiences with problem-solving happened outside the classroom.\n\nWe were researching, comparing options, understanding rules, anticipating opponents, and adjusting strategies based on what happened. Nobody called it critical thinking or analytical reasoning. We were just kids trying to win a Pokémon battle.\n\nEventually, that interest in Pokémon followed me into my own programming projects. When I had the skills to build one, I created a Pokémon battle simulator of my own.\n\nIt's one of the projects available on my GitHub.\n\nWhat began as a game my friends invented at school eventually became something I could recreate using code.\n\nI think that's one of the earliest examples of how I approach things even today: when something genuinely interests me, I want to understand how it works. And once I understand it well enough, I want to try building it myself."
    },
    {
        type: "heading",
        text: "From the School Playground to Computer Science"
    },
    {
        type: "paragraph",
        text: "Life at Christ Nagar continued much the same way for a while. Football, Pokémon, friends, and the usual school routine.\n\nThen tenth standard arrived, bringing the familiar combination of academic pressure, expectations, and relatives who seemed even more concerned about exam results than the students themselves.\n\nThis time, I took my studies seriously.\n\nMy friends and I sometimes stayed up late discussing doubts and explaining concepts to one another. We used whatever resources were available to us and tried to help each other prepare.\n\nWhen the results came, I scored a CGPA of 9.6 out of 10.\n\nNot bad for someone who had spent a good part of his earlier school years more interested in the playground than the classroom.\n\nAfter that came higher secondary school at St. Joseph's H.S.S. I chose the Computer Science stream partly because I disliked Biology during high school. I had no idea that a decision made partly out of spite would eventually shape my career.\n\nHigher secondary was relatively straightforward: classes, textbooks, labs, exams, repeat.\n\nI also attended the ASAP Modeller programme during this period. If you're curious about how I ended up exploring 3D modelling, I've told that story on the Modeller page.\n\nAfter completing higher secondary with 87.5%, I had to make the next big decision: college.\n\nI could have pursued a Bachelor of Science, but my father strongly preferred a professional engineering degree. At the time, I wasn't entirely convinced. Looking back, though, I can appreciate why he encouraged me in that direction.\n\nI eventually joined the College of Engineering Muttathara for a B.Tech in Computer Science and Engineering.\n\nAnd that was where my journey towards becoming a software engineer really began."
    },
    {
        type: "heading",
        text: "The First Time Confidence Wasn't Enough"
    },
    {
        type: "paragraph",
        text: "College started normally enough. We had the initial period of getting to know each other, attending classes, and figuring out how everything worked.\n\nThen the lockdown happened.\n\nBy the time we returned to campus, we were already dealing with assignments, labs, examinations, vivas, and everything else that comes with engineering college.\n\nAround that time, placement training and recruitment exams started appearing on the college calendar.\n\nI managed to clear the first placement assessment and then the subsequent face-to-face interview. At the time, I was incredibly proud of myself. I was among the first in my batch to get through those initial stages, and the encouragement from classmates and teachers gave me a massive confidence boost.\n\nThere was just one problem.\n\nI had underestimated what came next.\n\nThe first technical coding round arrived, and I realised I wasn't as prepared as I thought I was.\n\nWe had spent a lot of time studying programming concepts and writing code on paper, but I hadn't developed the problem-solving skills needed to confidently tackle the actual coding assessment.\n\nI handled the theoretical questions well enough, but theory wasn't going to carry me through the coding round.\n\nI failed.\n\nAnd honestly, that failure hit harder than I expected.\n\nA few days earlier, I had felt like I was ahead of the game. Now I had to return to college knowing that I hadn't made it through the stage that really tested my programming ability.\n\nBut the experience also made something very clear: being familiar with programming concepts isn't the same as being able to solve problems with code.\n\nI could either keep feeling bad about it or do something about it.\n\nI chose the second option."
    },
    {
        type: "heading",
        text: "Learning to Earn My Place"
    },
    {
        type: "paragraph",
        text: "After that placement experience, I started taking problem-solving much more seriously.\n\nI worked through data structures and algorithms problems, practised using different coding platforms, and explored resources that would help me improve. I tried DSA sheets, LeetCode, CodeChef, HackerRank, and anything else that could give me more practice.\n\nIt wasn't an overnight transformation. I attended more placement drives, cleared some stages, got rejected at others, and learned from the process.\n\nBut I made a point of taking every opportunity seriously.\n\nWhenever I got shortlisted, I pushed myself to continue through the process as far as I could. Eventually, I received multiple offers and had to decide which opportunity suited me best.\n\nI chose one and started working in January 2024.\n\nThat journey taught me something I still carry with me: confidence is useful, but it needs to be backed by ability. And when you discover a gap between what you think you can do and what you can actually do, the most productive response is to work on that gap.\n\nI don't think I reached where I am today by accident.\n\nI've had opportunities, support from people around me, and my fair share of luck. But I've also had to put in the work, confront things I wasn't good at, and keep learning.\n\nThe same kid who once struggled to keep up in class eventually found his way into computer science. The kid who loved Pokémon battles built a battle simulator. And the student who failed a coding round learned to take problem-solving seriously.\n\nThose experiences might not look connected at first, but to me, they are.\n\nThey reflect the same pattern: curiosity gets me interested, challenges show me what I don't know, and the desire to improve keeps me moving forward.\n\nI still have plenty to learn, and I don't expect that to change anytime soon.\n\nBut I can confidently say that my attitude, my mindset, and the skills I've developed are things I've worked for.\n\nI didn't get here by mistake. I earned my place."
    }
];


    summary.replaceChildren();

    const elements = [];

    summaryContent.forEach(item => {
        const element = document.createElement(
            item.type === "heading" ? "h2" : "p"
        );

        element.dataset.decryptText = item.text;
element.textContent = "";
element.style.whiteSpace = "pre-line";

        summary.appendChild(element);
        elements.push(element);
    });

    decryptSequence(elements, {
        speed: 25,
        cycles: 3
    });
}

initializeCvPage();
