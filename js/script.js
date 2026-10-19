import { initializeGitHub } from "./sections/github.js";
import { initializePixiv } from "./sections/pixiv.js";
import { initializeModeller } from "./sections/modeller.js";
import { initializeCertificates } from "./sections/certificates.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeGitHub();
    initializePixiv();
    initializeModeller();
    initializeCertificates();
});

function keepShootingStarsRound() {
    document.querySelectorAll(".shooting-star").forEach((svg) => {
        const viewBox = svg.viewBox.baseVal;
        const rect = svg.getBoundingClientRect();

        if (!viewBox.width || !viewBox.height || !rect.width || !rect.height) {
            return;
        }

        const scaleX = rect.width / viewBox.width;
        const scaleY = rect.height / viewBox.height;

        const head = svg.querySelector(".star-head");
        if (!head) return;

        head.setAttribute(
            "transform",
            `scale(${scaleY / scaleX}, 1)`
        );
    });
}

window.addEventListener("resize", keepShootingStarsRound);
window.addEventListener("load", keepShootingStarsRound);
keepShootingStarsRound();