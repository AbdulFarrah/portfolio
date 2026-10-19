export function createCarousel({
    container,
    items = [],
    renderItem,
    onItemClick = null,
    interval = 1000,
    startDelay = 0,
    direction = "forward"
}) {
    if (!(container instanceof HTMLElement)) {
        throw new Error("Carousel requires a valid container element.");
    }

    if (typeof renderItem !== "function") {
        throw new Error("Carousel requires a renderItem function.");
    }

    if (!Array.isArray(items)) {
        throw new Error("Carousel items must be an array.");
    }

    if (!["forward", "reverse"].includes(direction)) {
        throw new Error('Carousel direction must be "forward" or "reverse".');
    }

    let currentIndex = 0;
    let autoSlideTimer = null;
    let isTransitioning = false;
    let isPaused = false;

    const carousel = document.createElement("div");
    carousel.className = "carousel";

    const viewport = document.createElement("div");
    viewport.className = "carousel-viewport";

    const track = document.createElement("div");
    track.className = "carousel-track";

    const previousButton = document.createElement("button");
    previousButton.className = "carousel-button carousel-previous";
    previousButton.type = "button";
    previousButton.textContent = "‹";
    previousButton.setAttribute("aria-label", "Previous item");

    const nextButton = document.createElement("button");
    nextButton.className = "carousel-button carousel-next";
    nextButton.type = "button";
    nextButton.textContent = "›";
    nextButton.setAttribute("aria-label", "Next item");

    viewport.appendChild(track);
    carousel.append(previousButton, viewport, nextButton);
    container.replaceChildren(carousel);

    function updatePosition(animate = true) {
        if (!animate) {
            track.style.transition = "none";
        }

        const firstCard = track.firstElementChild;

        if (!firstCard) {
            track.style.transform = "translateX(0)";
            return;
        }

        const cardWidth = firstCard.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).columnGap) || 0;

        const trackIndex =
            currentIndex + (direction === "reverse" ? 1 : 0);

        track.style.transform =
            `translateX(-${trackIndex * (cardWidth + gap)}px)`;

        if (!animate) {
            // Apply the reset before restoring the CSS transition.
            track.getBoundingClientRect();
            track.style.transition = "";
        }
    }

    function createCard(item, index, isClone = false) {
        const card = renderItem(item, index);

        if (!(card instanceof HTMLElement)) {
            throw new Error("renderItem must return an HTML element.");
        }

        card.classList.add(
            "carousel-card",
            `carousel-color-${(index % 6) + 1}`
        );

        if (isClone) {
            card.setAttribute("aria-hidden", "true");
            card.style.pointerEvents = "none";
            return card;
        }

        if (typeof onItemClick === "function") {
            card.classList.add("carousel-card-clickable");
            card.tabIndex = 0;
            card.setAttribute("role", "link");

            const openItem = () => onItemClick(item, index);

            card.addEventListener("click", openItem);
            card.addEventListener("keydown", event => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openItem();
                }
            });
        }

        return card;
    }

    function renderCurrentItem() {
        track.replaceChildren();

        if (items.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "carousel-empty";
            emptyMessage.textContent = "No items available.";
            track.appendChild(emptyMessage);

            previousButton.disabled = true;
            nextButton.disabled = true;
            return;
        }

        // Reverse mode needs a clone of the last card at the beginning.
        if (items.length > 1 && direction === "reverse") {
            track.appendChild(
                createCard(items[items.length - 1], items.length - 1, true)
            );
        }

        items.forEach((item, index) => {
            track.appendChild(createCard(item, index));
        });

        // Preserve the existing forward-mode circular clone.
        if (items.length > 1 && direction === "forward") {
            track.appendChild(createCard(items[0], 0, true));
        }

        previousButton.disabled = items.length <= 1;
        nextButton.disabled = items.length <= 1;

        updatePosition(false);
    }

    function stopAutoSlide() {
        if (autoSlideTimer !== null) {
            clearTimeout(autoSlideTimer);
            autoSlideTimer = null;
        }
    }

    function scheduleNextSlide(delay = interval) {
        stopAutoSlide();

        if (isPaused || items.length <= 1 || interval <= 0) {
            return;
        }

        autoSlideTimer = setTimeout(() => {
            if (direction === "reverse") {
                showPrevious();
            } else {
                showNext();
            }
        }, delay);
    }

    function showNext() {
        if (items.length <= 1 || isTransitioning) return;

        isTransitioning = true;
        stopAutoSlide();

        if (currentIndex === items.length - 1) {
            if (direction === "forward") {
                // Existing forward circular transition.
                currentIndex++;
                updatePosition(true);

                track.addEventListener("transitionend", function handleLoop() {
                    if (currentIndex !== items.length) return;

                    currentIndex = 0;
                    updatePosition(false);
                    isTransitioning = false;
                    scheduleNextSlide();
                }, { once: true });
            } else {
                // Next button wraps to the first item in reverse mode.
                currentIndex = 0;
                updatePosition(false);
                isTransitioning = false;
                scheduleNextSlide();
            }

            return;
        }

        currentIndex++;
        updatePosition(true);

        track.addEventListener("transitionend", function handleTransition() {
            isTransitioning = false;
            scheduleNextSlide();
        }, { once: true });
    }

    function showPrevious() {
        if (items.length <= 1 || isTransitioning) return;

        stopAutoSlide();
        isTransitioning = true;

        if (currentIndex === 0) {
            if (direction === "reverse") {
                // Slide right onto the cloned last card, then reset invisibly.
                currentIndex = -1;
                updatePosition(true);

                track.addEventListener("transitionend", function handleLoop() {
                    currentIndex = items.length - 1;
                    updatePosition(false);
                    isTransitioning = false;
                    scheduleNextSlide();
                }, { once: true });
            } else {
                // Preserve existing forward-mode previous-button behavior.
                currentIndex = items.length - 1;
                updatePosition(false);
                isTransitioning = false;
                scheduleNextSlide();
            }
        } else {
            currentIndex--;
            updatePosition(true);

            track.addEventListener("transitionend", function handleTransition() {
                isTransitioning = false;
                scheduleNextSlide();
            }, { once: true });
        }
    }

    function pauseAutoSlide() {
        isPaused = true;
        stopAutoSlide();
    }

    function resumeAutoSlide() {
        isPaused = false;
        scheduleNextSlide();
    }

    function handleResize() {
        updatePosition(false);
    }

    previousButton.addEventListener("click", showPrevious);
    nextButton.addEventListener("click", showNext);

    carousel.addEventListener("mouseenter", pauseAutoSlide);
    carousel.addEventListener("mouseleave", resumeAutoSlide);

    window.addEventListener("resize", handleResize);

    renderCurrentItem();

    // startDelay affects only the first automatic slide.
    scheduleNextSlide(startDelay);

    return {
        next: showNext,
        previous: showPrevious,

        goTo(index) {
            if (
                !Number.isInteger(index) ||
                index < 0 ||
                index >= items.length
            ) {
                return;
            }

            stopAutoSlide();
            currentIndex = index;
            isTransitioning = false;
            renderCurrentItem();
            scheduleNextSlide();
        },

        getCurrentIndex() {
            return currentIndex;
        },

        destroy() {
            stopAutoSlide();

            previousButton.removeEventListener("click", showPrevious);
            nextButton.removeEventListener("click", showNext);

            carousel.removeEventListener("mouseenter", pauseAutoSlide);
            carousel.removeEventListener("mouseleave", resumeAutoSlide);

            window.removeEventListener("resize", handleResize);

            container.replaceChildren();
        }
    };
}