
import * as pdfjsLib from "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.min.mjs";

pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs";

async function initializePdfViewer() {
    const scrollContainer = document.getElementById("pdf-scroll-container");
    const pagesContainer = document.getElementById("pdf-pages");
    const zoomOutButton = document.getElementById("pdf-zoom-out");
    const zoomInButton = document.getElementById("pdf-zoom-in");
    const zoomLevel = document.getElementById("pdf-zoom-level");

    if (
        !scrollContainer ||
        !pagesContainer ||
        !zoomOutButton ||
        !zoomInButton ||
        !zoomLevel
    ) {
        console.error("Required PDF viewer elements not found.");
        return;
    }

    const pdfUrl = "../assets/CV/resume.pdf";

    let pdfDocument;
    let zoom = 1;
    let renderVersion = 0;

    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 2.5;
    const ZOOM_STEP = 0.1;

    try {
        pdfDocument = await pdfjsLib.getDocument(pdfUrl).promise;

        async function renderPages() {
            const version = ++renderVersion;

            pagesContainer.replaceChildren();
            zoomLevel.textContent = `${Math.round(zoom * 100)}%`;

            for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber++) {
                if (version !== renderVersion) {
                    return;
                }

                const page = await pdfDocument.getPage(pageNumber);

                if (version !== renderVersion) {
                    return;
                }

                const baseViewport = page.getViewport({ scale: 1 });
                const availableWidth = Math.max(
                    1,
                    scrollContainer.clientWidth - 24
                );

                const fitScale = availableWidth / baseViewport.width;
                const scale = fitScale * zoom;
                const viewport = page.getViewport({ scale });

                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");

                const outputScale = window.devicePixelRatio || 1;

                canvas.width = Math.floor(viewport.width * outputScale);
                canvas.height = Math.floor(viewport.height * outputScale);

                canvas.style.width = `${viewport.width}px`;
                canvas.style.height = `${viewport.height}px`;
                canvas.className = "pdf-page-canvas";

                const pageWrapper = document.createElement("div");
                pageWrapper.className = "pdf-page-wrapper";
                pageWrapper.appendChild(canvas);
                pagesContainer.appendChild(pageWrapper);

                await page.render({
                    canvasContext: context,
                    viewport,
                    transform: outputScale !== 1
                        ? [outputScale, 0, 0, outputScale, 0, 0]
                        : null
                }).promise;
            }

            zoomOutButton.disabled = zoom <= MIN_ZOOM;
            zoomInButton.disabled = zoom >= MAX_ZOOM;
        }

        zoomOutButton.addEventListener("click", () => {
            zoom = Math.max(MIN_ZOOM, +(zoom - ZOOM_STEP).toFixed(2));
            renderPages();
        });

        zoomInButton.addEventListener("click", () => {
            zoom = Math.min(MAX_ZOOM, +(zoom + ZOOM_STEP).toFixed(2));
            renderPages();
        });

        let resizeTimeout;

        window.addEventListener("resize", () => {
            window.clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(renderPages, 150);
        });

        await renderPages();
    } catch (error) {
        console.error("Unable to load resume PDF:", error);
        pagesContainer.textContent =
            "Unable to load the resume. Please try refreshing the page.";
    }
}

initializePdfViewer();
