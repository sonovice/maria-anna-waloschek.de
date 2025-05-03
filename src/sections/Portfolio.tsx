import { type Component, For, type JSX } from "solid-js";

// Define the structure for each portfolio item
interface PortfolioItem {
	title: string;
	description: string;
	icon: JSX.Element; // Use JSX.Element type for SVG components/elements
}

const Portfolio: Component = () => {
	const portfolioItems: PortfolioItem[] = [
		{
			title: "Kommunikation & Feedback",
			description:
				"Entwicklung konstruktiver (Peer-)Feedbackkulturen und -methoden zur Stärkung individueller Persönlichkeiten.",
			icon: <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><title>Kommunikation & Feedback Icon</title><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2s0 0 0 0s0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.2-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9c0 0 0 0 0 0s0 0 0 0l-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" /></svg>,
		},
		{
			title: "Prüfen & Bewerten",
			description:
				"Gestaltung transparenter und lernförderlicher Prüfungsformate und Bewertungsstrategien für künstlerische und künstlerisch-pädagogische Leistungen.",
			icon: <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Prüfen & Bewerten Icon</title><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" /></svg>,
		},
		{
			title: "Kooperative Lehr-/Lernformate",
			description:
				"Konzeption und Umsetzung von Teamteaching-Settings zur Bündelung von Expertise und Förderung von Lernchancen; Etablierung von Formaten wie kollegiale Beratung und kollegialer Hospitation zur gegenseitigen Unterstützung und Professionalisierung von Lehrkompetenz.",
			icon: <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><title>Kooperative Lehrformate Icon</title><path d="M80 48a48 48 0 1 1 96 0A48 48 0 1 1 80 48zm64 193.7l0 65.1 51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3l-14.3-85.9L66.8 320C54.8 308 48 291.7 48 274.7l0-88.1c0-32.4 26.2-58.6 58.6-58.6c24.1 0 46.5 12 59.9 32l47.4 71.1 10.1 5 0-76.2c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 76.2 10.1-5L473.5 160c13.3-20 35.8-32 59.9-32c32.4 0 58.6 26.2 58.6 58.6l0 88.1c0 17-6.7 33.3-18.7 45.3l-79.4 79.4-14.3 85.9c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l15.2-90.9c1.6-9.9 6.3-19 13.4-26.1l51-51 0-65.1-19 28.5c-4.6 7-11 12.6-18.5 16.3l-59.6 29.8c-2.4 1.3-4.9 2.2-7.6 2.8c-2.6 .6-5.3 .9-7.9 .8l-126.7 0c-2.5 .1-5-.2-7.5-.7c-2.9-.6-5.6-1.6-8.1-3l-59.5-29.8c-7.5-3.7-13.8-9.4-18.5-16.3l-19-28.5zM2.3 468.1L50.1 348.6l49.2 49.2-37.6 94c-6.6 16.4-25.2 24.4-41.6 17.8S-4.3 484.5 2.3 468.1zM512 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm77.9 348.6l47.8 119.5c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-37.6-94 49.2-49.2z" /></svg>,
		},
		{
			title: "Strategische Beratung und Programmkonzeptionen",
			description:
				"Beratung, Moderationstätigkeiten sowie Unterstützung bei der Konzeption und Einführung von Curricula und musik(hoch)schuldidaktischen Weiterbildungsformaten wie Onboarding-Programmen; Umsetzung von nachhaltigem Changemanagement.",
			icon: <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><title>Kollegialer Austausch & Beratung Icon</title><path d="M335.5 4l288 160c15.4 8.6 21 28.1 12.4 43.5s-28.1 21-43.5 12.4L320 68.6 47.5 220c-15.4 8.6-34.9 3-43.5-12.4s-3-34.9 12.4-43.5L304.5 4c9.7-5.4 21.4-5.4 31.1 0zM320 160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM144 256a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm312 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM226.9 491.4L200 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5L61.1 491.4c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l37.9-70.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c16.3 0 31.9 4.5 45.4 12.6l33.6-62.3c15.3-28.5 45.1-46.3 77.5-46.3l19.5 0c32.4 0 62.1 17.8 77.5 46.3l33.6 62.3c13.5-8.1 29.1-12.6 45.4-12.6l19.5 0c32.4 0 62.1 17.8 77.5 46.3l37.9 70.3c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8L552 441.5l0 38.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-38.5-26.9 49.9c-6.3 11.7-20.8 16-32.5 9.8s-16-20.8-9.8-32.5l36.3-67.5c-1.7-1.7-3.2-3.6-4.3-5.8L376 345.5l0 54.5c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32l0-54.5-26.9 49.9c-1.2 2.2-2.6 4.1-4.3 5.8l36.3 67.5c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8z" /></svg>,
		},
		{
			title: "(Selbst-)Reflexion & Portfolioarbeit",
			description:
				"Nutzung von Portfolios zur Dokumentation, kritischen Reflexion und gezielten Weiterentwicklung individueller (Lehr-)Profile.",
			icon: <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>(Selbst-)Reflexion & Portfolioarbeit Icon</title><path d="M374.8 80.3C355.9 33.2 309.8 0 256 0s-99.9 33.2-118.8 80.3c-3-.2-6.1-.3-9.2-.3C57.3 80 0 137.3 0 208s57.3 128 128 128c14.4 0 28.3-2.4 41.3-6.8C184.7 361.6 217.7 384 256 384s71.3-22.4 86.7-54.8c12.9 4.4 26.8 6.8 41.3 6.8c70.7 0 128-57.3 128-128s-57.3-128-128-128c-3.1 0-6.1 .1-9.2 .3zM144 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM32 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" /></svg>,
		},
		{
			title: "Individuelle Lehrcoachings",
			description:
				"Prozessorientierte Begleitung für Lehrende in der Umsetzung von individuellen Lernzielen.",
			icon: <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><title>Lehrcoaching & Didaktische Beratung Icon</title><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" /></svg>,
		},
	];

	return (
		<div id="portfolio" class="bg-neutral-50">
			<div class="container mx-auto px-4 py-8 lg:py-16">
				{/* Section Header */}
				<div class="flex flex-col items-center justify-center mb-8 lg:mb-12">
					<div class="uppercase bg-yellow-300 px-3 py-1 text-sm font-semibold tracking-wider">
						Portfolio
					</div>
					<h2 class="mt-4 text-3xl font-semibold text-center text-neutral-800">
						Meine Schwerpunkte
					</h2>
					<p class="mt-3 text-center text-neutral-600 max-w-2xl">
						Mit praxisorientierten Workshops, individueller Begleitung und strategischer Beratung unterstütze ich Musikschulen, Musikhochschulen sowie Einzelpersonen.
					</p>
				</div>

				{/* Grid Container */}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 items-start">
					<For each={portfolioItems}>
						{(item) => (
							<div class="flex flex-col text-center">
								{/* Icon */}
								<div class="flex-shrink-0 h-20 flex justify-center items-center">
									<div class="inline-flex items-center justify-center h-12 w-12 lg:h-14 lg:w-14 fill-yellow-300">
										{item.icon}
									</div>
								</div>
								{/* Title */}
								<h3 class="text-lg font-semibold text-neutral-800 mb-2">
									{item.title}
								</h3>
								{/* Description */}
								<p class="text-neutral-600 leading-relaxed">
									{item.description}
								</p>
							</div>
						)}
					</For>
				</div>

				{/* Call to Action Link/Button */}
				<div class="mt-12 text-center">
					<a
						href="/portfolio-details" // <-- Replace with the actual link to the detailed portfolio page
						class="inline-block text-balance bg-black text-white px-8 py-3 text-xl font-medium shadow transition duration-150 hover:cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
					>
						Hier gehts zu meinem detaillierten Portfolio
					</a>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
