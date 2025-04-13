import {
    type Component,
    For,
    createSignal,
    onCleanup,
    onMount,
} from "solid-js";

// MARK: - Constants
const PAUSE_AFTER_INTERACTION_MS = 15000;
const AUTO_SLIDE_INTERVAL_MS = 5000;

const Carousel: Component = () => {
    // MARK: - Data
    const slides = [
        {
            id: 1,
            name: "Jay Shah",
            title: "Founder at Icomatic Pvt Ltd",
            content:
                "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure. simply dummy text of the printing and typesetting industry.",
            imageUrl: "/portrait.jpg",
        },
        {
            id: 2,
            name: "Jane Doe",
            title: "CEO at Example Inc.",
            content:
                "Slide 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            imageUrl: "/portrait.jpg",
        },
        {
            id: 3,
            name: "John Smith",
            title: "Designer at Creative Co.",
            content:
                "Slide 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "/portrait.jpg",
        },
        {
            id: 4,
            name: "Alice Green",
            title: "Developer at Tech Solutions",
            content:
                "Slide 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            imageUrl: "/portrait.jpg",
        },
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
                class="absolute top-1/2 left-5 transform -translate-y-1/2 bg-neutral-400 hover:bg-neutral-500 text-white p-3 rounded-full cursor-pointer z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
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
                            <p class="text-2xl mb-3  font-yrsa italic">„{slide.content}“</p>
                            <div class="flex flex-col items-center mt-6">
                                <img
                                    src={slide.imageUrl}
                                    alt={`${slide.name}, ${slide.title}`}
                                    class="w-20 h-20 rounded-full mb-4 object-cover"
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
                class="absolute top-1/2 right-5 transform -translate-y-1/2 bg-neutral-400 hover:bg-neutral-500 text-white p-3 rounded-full cursor-pointer z-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100"
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
                            class={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${currentIndex() === index() ? "bg-yellow-400" : "bg-neutral-400 hover:bg-neutral-500"}`}
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
