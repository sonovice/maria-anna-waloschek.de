import type { Component } from "solid-js";

const Hero: Component = () => {
	const smoothScroll = (event: MouseEvent, targetId: string) => {
		event.preventDefault();
		const targetElement = document.getElementById(targetId.substring(1)); // Remove '#'
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div
			id="home"
			class="relative flex items-center justify-center min-h-full w-full bg-yellow-300 px-8 lg:px-24 py-8"
		>
			<div class="flex flex-col-reverse lg:flex-row items-center justify-center container mx-auto px-4">
				{/* Left Column (Text Content) */}
				<div class="flex flex-col justify-center lg:w-1/2 space-y-2 text-center lg:text-left mt-8 lg:mt-12">
					<h1 class="text-5xl lg:text-7xl xl:text-8xl text-black uppercase">
						<div class="text-nowrap">Maria Anna</div>
						<div class="font-extrabold">Waloschek</div>
					</h1>
					<p class="text-xl lg:text-3xl text-black tracking-wide">
						Musik|hoch|schuldidaktik <br class="sm:hidden" /> & Beratung
					</p>
					<div class="flex items-center justify-center lg:justify-start space-x-6 py-4">
						<button
							type="button"
							class="bg-black text-white px-8 py-3 text-xl font-medium shadow transition duration-150 hover:cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
							onClick={(e) => smoothScroll(e, "#portfolio")}
						>
							Portfolio
						</button>
						<button
							type="button"
							class="text-black text-xl font-medium border-b-4 border-black mx-2 px-4 py-1 transition duration-150 hover:cursor-pointer hover:-translate-y-0.5"
							onClick={(e) => smoothScroll(e, "#contact")}
						>
							Kontakt
						</button>
					</div>
				</div>

				{/* Right Column (Image) */}
				<div class="flex justify-center items-center w-full lg:w-1/2">
					{/* Responsive image container: grows on mobile, fixed on large */}
					<div class="w-5/6 aspect-square max-w-xs sm:max-w-sm md:w-96 md:h-96 lg:w-128 lg:h-128 lg:max-w-none">
						<img
							// Placeholder B&W portrait from Unsplash
							src="portrait.jpg"
							alt="Portrait Maria Waloschek"
							class="w-full h-full object-cover rounded-full border-[12px] lg:border-[16px] border-white shadow-2xl"
						/>
					</div>
				</div>
			</div>
			{/* Scroll Down Indicator */}
			<div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
				<button
					type="button"
					class="hover:cursor-pointer"
					onClick={(e) => smoothScroll(e, "#about")}
				>
					<svg
						class="w-8 h-8 text-black animate-bounce"
						fill="none"
						height="24"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Scroll down</title>
						<path d="m6 9 6 6 6-6" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Hero;
