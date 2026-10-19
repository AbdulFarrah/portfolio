
import { createCarousel } from "../components/carousel.js";

export async function initializePixiv() {
    const container = document.querySelector(".creative-box .box-content");

    if (!container) {
        console.error("Pixiv carousel container not found.");
        return;
    }

    container.replaceChildren();

    try {
        const response = await fetch("./data/pixiv-works.json");

        if (!response.ok) {
            throw new Error(
                `Failed to load local Pixiv data: HTTP ${response.status}`
            );
        }

        const works = await response.json();

        const carouselContainer = document.createElement("div");
        carouselContainer.className = "pixiv-carousel-container";

        container.replaceChildren(carouselContainer);

        createCarousel({
            container: carouselContainer,
            items: works,

            renderItem(work) {
                const card = document.createElement("div");
                card.className = "pixiv-card";

                const cover = document.createElement("img");
                cover.className = "pixiv-cover";
                cover.src = work.cover;
                cover.alt = work.title;
                cover.loading = "lazy";

                const title = document.createElement("h3");
                title.className = "pixiv-title";
                title.textContent = work.title;

                card.append(cover, title);

                return card;
            },

            onItemClick(work) {
                window.open(
                    work.url,
                    "_blank",
                    "noopener,noreferrer"
                );
            }
        });

    } catch (error) {
        console.error("Pixiv data loading error:", error);

        container.replaceChildren();

        const errorMessage = document.createElement("p");
        errorMessage.className = "pixiv-error";
        errorMessage.textContent = "Unable to load creative works.";

        container.appendChild(errorMessage);
    }
}
