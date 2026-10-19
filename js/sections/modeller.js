
import { createCarousel } from "../components/carousel.js";

export async function initializeModeller() {
    const container = document.querySelector(".modeller-box .box-content");

    if (!container) {
        console.error("Modeller carousel container not found.");
        return;
    }

    try {
        const response = await fetch("./data/modeller-images.json");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const images = await response.json();

        createCarousel({
            container,
            items: images,

            renderItem(image) {
                const card = document.createElement("div");
                card.classList.add("modeller-card");

                const img = document.createElement("img");
                img.classList.add("modeller-image");
                img.src = image.url;
                img.alt = image.name;
                img.loading = "lazy";

                const overlay = document.createElement("div");
                overlay.classList.add("modeller-link-overlay");
                overlay.textContent = "Click to proceed";

                card.append(img, overlay);
                return card;
            },

            onItemClick() {
                window.open("./pages/modeller.html", "_blank", "noopener,noreferrer");
            },

            interval: 1000,
            startDelay: 500,
            direction: "reverse"
        });
    } catch (error) {
        console.error("Modeller carousel error:", error);
        container.textContent = "Unable to load modeller images.";
    }
}
