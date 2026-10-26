
import { createCarousel } from "../components/carousel.js";

export async function initializeCertificates() {
    const container = document.querySelector(
        ".certificates-box .box-content"
    );

    if (!container) {
        console.error("Certificates carousel container not found.");
        return;
    }

    try {
        const response = await fetch("./data/certificates.json");

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const files = await response.json();

        // Give the carousel a sized wrapper, matching the other homepage cards.
        const carouselContainer = document.createElement("div");
        carouselContainer.className = "certificates-carousel-container";

        container.replaceChildren(carouselContainer);

        createCarousel({
            container: carouselContainer,
            items: files,

            renderItem(file) {
                const card = document.createElement("div");
                card.classList.add("certificate-card");

                if (file.type === "pdf") {
                    const pdf = document.createElement("iframe");
                    pdf.classList.add("certificate-pdf");
                    pdf.src = file.url + "#toolbar=0&navpanes=0&scrollbar=0&view=Fit";
                    pdf.title = file.name;
                    pdf.loading = "lazy";

                    card.appendChild(pdf);
                } else {
                    const img = document.createElement("img");
                    img.classList.add("certificate-image");
                    img.src = file.url;
                    img.alt = file.name;
                    img.loading = "lazy";

                    card.appendChild(img);
                }

                const overlay = document.createElement("div");
                overlay.classList.add("certificate-link-overlay");
                overlay.textContent = "Click to proceed";

                card.appendChild(overlay);
                return card;
            },

            onItemClick() {
                window.open("./pages/certificates.html", "_blank", "noopener,noreferrer");
            },

            interval: 1000,
            startDelay: 500,
            direction: "reverse"
        });
    } catch (error) {
        console.error("Certificates carousel error:", error);
        container.textContent = "Unable to load certificates.";
    }
}
