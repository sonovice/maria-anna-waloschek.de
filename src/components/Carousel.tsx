import {
    type Component,
    For,
    createSignal,
    onCleanup,
    onMount,
} from "solid-js";

// MARK: - Constants
const PAUSE_AFTER_INTERACTION_MS = 20000;
const AUTO_SLIDE_INTERVAL_MS = 12000;

const Carousel: Component = () => {
    // MARK: - Data
    const slides = [
        {
            id: 1,
            name: "Anja Damianov",
            title: (
                <>
                    Dozentin für Klavier und Improvisation
                    <br />
                    HfM Detmold
                </>
            ),
            content:
                (<>
                    Als Teilnehmerin der Fortbildung „Die Kunst der Lehre - Zertifikat für Lehrende an Musikhochschulen“ profitierte ich sowohl von Maria Waloscheks künstlerischer Erfahrung als auch von ihrer wissenschaftlichen Expertise im Bereich Hochschuldidaktik. Ihre hervorragend vorbereiteten Workshops sind klar strukturiert und bereichern durch echte thematische Relevanz.
                </>),

            imageUrl: "images/anja_damianov.jpg",
        },
        {
            id: 2,
            name: "Angela Bauer",
            title: (
                <>
                    Leiterin der Städtischen Musikschule Ludwigshafen
                    <br />
                    Mitglied des Bundesvorstands des Verbandes deutscher Musikschulen e.V.
                </>
            ),
            content:
                (<>Maria Waloschek begleitet unsere Musikschule mit großer Empathie und Engagement zielgerichtet und mit echtem Interesse bei unserem Entwicklungsprozess. Ihre Angebote sind praxisnah, inspirierend und eröffnen wertvolle neue Perspektiven. Ich schätze an ihr besonders, wie sie mit Wertschätzung und ruhiger Art jede und jeden mitnimmt.</>),
            imageUrl: "images/angela_bauer.jpg",
        },
        {
            id: 3,
            name: "Konstantin Wolff",
            title: (
                <>
                    Prof. für Gesang
                    <br />
                    Hochschule Luzern
                </>
            ),
            content:
                (<>
                    Ich habe den zweitägigen Kompaktkurs „Künstlerische Leistungen prüfen und bewerten“ belegt und habe sehr profitiert, was meine Wahrnehmung von Prüfungen und die Vorbereitung meines Unterrichts betrifft. Maria Waloschek habe ich dabei als sehr strukturiert,
                    flexibel und erfahren erlebt. Es war ihr ein Anliegen, auf die Bedürfnisse innerhalb der Gruppe einzugehen und den Kurs so zu einer sehr wertvollen Erfahrung für alle Teilnehmer zu machen.</>),
            imageUrl: "images/konstantin_wolff.jpg",
        },
        // {
        //     id: 4,
        //     name: "Alice Green",
        //     title: "Developer at Tech Solutions",
        //     content:
        //         "Slide 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        //     imageUrl: "portrait.jpg",
        // },
    ];

    // MARK: - State & Refs
    const [currentIndex, setCurrentIndex] = createSignal(0);
    let scrollContainerRef: HTMLDivElement | undefined;
    const slideRefs: Map<number, HTMLDivElement> = new Map();
    let autoSlideInterval: number | undefined;
    let intersectionObserver: IntersectionObserver | undefined;
    let pauseTimeoutId: number | undefined;

    // MARK: - Navigation Functions
    const scrollToSlide = (index: number) => {
        const targetSlide = slideRefs.get(index);
        if (targetSlide && scrollContainerRef) {
            const scrollLeft = targetSlide.offsetLeft - scrollContainerRef.offsetLeft;
            scrollContainerRef.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
            // Note: currentIndex will be updated by the IntersectionObserver
        }
    };

    const prevSlide = () => {
        const newIndex =
            currentIndex() === 0 ? slides.length - 1 : currentIndex() - 1;
        scrollToSlide(newIndex);
    };

    const nextSlide = () => {
        const newIndex =
            currentIndex() === slides.length - 1 ? 0 : currentIndex() + 1;
        scrollToSlide(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        scrollToSlide(slideIndex);
    };

    // MARK: - Auto-slide Logic
    const startAutoSlide = () => {
        stopAutoSlide(); // Ensure no existing intervals or timeouts
        autoSlideInterval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL_MS); // Slide every 5 seconds
    };

    const stopAutoSlide = () => {
        clearTimeout(pauseTimeoutId); // Clear any pending pause timeout
        pauseTimeoutId = undefined;
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
            autoSlideInterval = undefined;
        }
    };

    const pauseAutoSlideTemporarily = () => {
        stopAutoSlide(); // Stop current sliding and clear any existing pause
        pauseTimeoutId = setTimeout(startAutoSlide, PAUSE_AFTER_INTERACTION_MS); // Resume after 15 seconds
    };

    // MARK: - Setup & Cleanup
    onMount(() => {
        if (!scrollContainerRef) return;

        // Setup Intersection Observer
        const options = {
            root: scrollContainerRef,
            rootMargin: "0px",
            threshold: 0.6, // Trigger when 60% of the slide is visible
        };

        intersectionObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const intersectingIndex = Number.parseInt(
                        entry.target.getAttribute("data-index") || "0",
                        10,
                    );
                    setCurrentIndex(intersectingIndex);
                    // Update happened due to scroll/snap, restart timer if it wasn't paused manually
                    if (!pauseTimeoutId) {
                        startAutoSlide();
                    }
                }
            }
        }, options);

        for (const slide of slideRefs.values()) {
            intersectionObserver?.observe(slide);
        }

        // Start automatic sliding
        startAutoSlide();

        // Add listeners to pause/resume on hover/focus
        scrollContainerRef.addEventListener("mouseenter", stopAutoSlide); // Pause on hover over slides
        scrollContainerRef.addEventListener("mouseleave", () => {
            if (!pauseTimeoutId) startAutoSlide();
        }); // Resume if not manually paused

        const allControls =
            scrollContainerRef.parentElement?.querySelectorAll("button");
        if (allControls) {
            for (const control of allControls) {
                control.addEventListener("focus", stopAutoSlide); // Pause on focus of any button
                control.addEventListener("blur", () => {
                    if (!pauseTimeoutId) startAutoSlide();
                }); // Resume if not manually paused
            }
        }
    });

    onCleanup(() => {
        stopAutoSlide();
        intersectionObserver?.disconnect();
        if (scrollContainerRef) {
            scrollContainerRef.removeEventListener("mouseenter", stopAutoSlide);
            scrollContainerRef.removeEventListener("mouseleave", () => {
                if (!pauseTimeoutId) startAutoSlide();
            });

            const allControls =
                scrollContainerRef.parentElement?.querySelectorAll("button");
            if (allControls) {
                for (const control of allControls) {
                    control.removeEventListener("focus", stopAutoSlide);
                    control.removeEventListener("blur", () => {
                        if (!pauseTimeoutId) startAutoSlide();
                    });
                }
            }
        }
    });

    // MARK: - Component JSX
    return (
        <div class="relative w-full max-w-3xl mx-auto text-center group pb-12">
            {
                // MARK: Left Arrow
            }
            <button
                type="button"
                onClick={() => {
                    prevSlide();
                    pauseAutoSlideTemporarily();
                }}
                aria-label="Previous Slide"
                class="absolute top-1/2 left-5 transform -translate-y-1/2 bg-neutral-400 hover:bg-neutral-500 text-white p-3 cursor-pointer z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="pr-0.5"
                >
                    <title>Previous image</title>
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            {
                // MARK: Scrollable Slide Container
            }
            <div
                ref={scrollContainerRef}
                class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pt-2 pb-0.5 px-4" // Added no-scrollbar utility if you have it configured
            >
                <For each={slides}>
                    {(slide, index) => (
                        <div
                            ref={(el) => slideRefs.set(index(), el)}
                            data-index={index()}
                            class="flex-shrink-0 w-full snap-center flex flex-col items-center justify-center  px-10" // Ensure slide takes full width for snapping
                        >
                            <p class="text-2xl mb-3 font-yrsa italic text-balance hyphens-auto">{slide.content}</p>
                            <div class="flex flex-col items-center mt-6">
                                <img
                                    src={slide.imageUrl}
                                    alt={`${slide.name}, ${slide.title}`}
                                    class="w-20 h-20 rounded-full mb-4 object-cover shadow-md"
                                />
                                <div class="font-semibold text-lg">{slide.name}</div>
                                <div class="text-sm">{slide.title}</div>
                            </div>
                        </div>
                    )}
                </For>
            </div>

            {
                // MARK: Right Arrow
            }
            <button
                type="button"
                onClick={() => {
                    nextSlide();
                    pauseAutoSlideTemporarily();
                }}
                aria-label="Next Slide"
                class="absolute top-1/2 right-5 transform -translate-y-1/2 bg-neutral-400 hover:bg-neutral-500 text-white p-3 cursor-pointer z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="pl-0.5"
                >
                    <title>Next image</title>
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>

            {
                // MARK: Dots Indicator
            }
            <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-10">
                <For each={slides}>
                    {(slide, index) => (
                        <button
                            type="button"
                            aria-label={`Go to slide ${index() + 1}`}
                            class={`w-3 h-3 cursor-pointer transition-colors duration-200 ease-in-out ${currentIndex() === index() ? "bg-yellow-400" : "bg-neutral-400 hover:bg-neutral-500"}`}
                            onClick={() => {
                                goToSlide(index());
                                pauseAutoSlideTemporarily();
                            }}
                        />
                    )}
                </For>
            </div>
        </div>
    );
};

export default Carousel;
