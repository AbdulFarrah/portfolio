import { createCarousel } from "../components/carousel.js";

export async function initializeGitHub() {
    const container = document.querySelector(".github-box .box-content");

    if (!container) {
        console.error("GitHub carousel container not found.");
        return;
    }

    container.replaceChildren();

    try {
        const response = await fetch("./data/github-repos.json");

        if (!response.ok) {
            throw new Error(
                `Failed to load local GitHub data: HTTP ${response.status}`
            );
        }

        const repositories = await response.json();

        const carouselContainer = document.createElement("div");
        carouselContainer.className = "github-carousel-container";

        container.replaceChildren(carouselContainer);

        createCarousel({
            container: carouselContainer,
            items: repositories,

            renderItem(repo) {
                const card = document.createElement("div");
                card.className = "github-card";
                const cardThemes = {
    "Chess": "github-card-chess",
    "Pokemon-2D-Battle-Simulator": "github-card-pokemon",
    "Local_AI_Workbench": "github-card-ai",
    "sysdash": "github-card-sysdash",
    "Ludo-CLI": "github-card-ludo",
    "HFT-Matching-Engine": "github-card-hft"
};

if (cardThemes[repo.name]) {
    card.classList.add(cardThemes[repo.name]);
}
                const title = document.createElement("h3");
                title.textContent = repo.name;

                const description = document.createElement("p");
                description.textContent =
                    repo.description || "No description available.";

                const language = document.createElement("p");
                language.className = "github-language";
                language.textContent =
                    `Language: ${repo.language || "Not specified"}`;

                const action = document.createElement("p");
                action.className = "github-card-action";
                action.textContent = "Click to open repository ↗";

                card.appendChild(title);
                card.appendChild(description);
                card.appendChild(language);
                card.appendChild(action);

                return card;
            },

            onItemClick(repo) {
                window.open(
                    repo.html_url,
                    "_blank",
                    "noopener,noreferrer"
                );
            }
        });

    } catch (error) {
        console.error("GitHub data loading error:", error);

        container.replaceChildren();

        const errorMessage = document.createElement("p");
        errorMessage.className = "github-error";
        errorMessage.textContent =
            "Unable to load GitHub repositories. Please try again later.";

        container.appendChild(errorMessage);
    }
}
