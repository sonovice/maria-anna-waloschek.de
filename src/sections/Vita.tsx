import { For, type Component } from "solid-js";

const vitaItems = [
	{
		title: "Freiberufliche Musikhochschuldidaktikerin & Beraterin",
		description:
			"Konzeption und Durchführung von Workshops, Coachings und Beratungen für Lehrende und Institutionen.",
	},
	{
		title: "Vertretungsprofessur für Musikpädagogik",
		description: "Universität Münster.",
	},
	{
		title: "Koordination der Lehrentwicklung (Netzwerk Musikhochschulen)",
		description:
			'Entwicklung und Leitung des ersten Zertifikatsprogramms "Die Kunst der Lehre" (angesiedelt an der HfM Detmold).',
	},
	{
		title: "Herausgeberin & Autorin",
		description:
			'Praxishandbuch "Die Kunst der Lehre" und weitere Publikationen zur Hochschuldidaktik und zum Peer Learning.',
	},
	{
		title: "Mehrjährige Lehrerfahrung",
		description:
			"Sowohl an Musikschulen (Klavier, Kammermusik, Methodik in Bayreuth) als auch an Musikhochschulen (Lehraufträge in Münster).",
	},
	{
		title: "Akademische Abschlüsse",
		description:
			// "Master Musikpädagogik (HfMT Köln), Diplome in Instrumentalpädagogik und Künstlerischer Ausbildung Klavier (HfM Würzburg), Professional Diploma in Management (Open University).",
			"Diplome in Instrumentalpädagogik und Künstlerischer Ausbildung Klavier (HfM Würzburg), Professional Diploma in Management (Open University).",
	},
	{
		title: "Aktive Musikerin",
		description: "Freischaffende Pianistin (Klavierduo, Liedbegleitung).",
	},
];

const Vita: Component = () => {
	return (
		<div id="vita" class="bg-neutral-100">
			<div class="container mx-auto px-4 py-8 lg:py-16">
				<div class="flex flex-col items-center justify-center">
					<div class="uppercase bg-yellow-300 px-3 py-1 font-semibold tracking-wide">
						Vita
					</div>
					<div class="mt-4 text-3xl font-semibold text-center">
						Ausgewählte Stationen und Qualifikationen
					</div>
				</div>
				<div class="mt-12 relative">
					{/* Timeline line (Medium+) */}
					<div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-300 transform -translate-x-1/2 hidden md:block" />
					{/* Timeline line (Small) */}
					<div class="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-300 md:hidden" />

					<div class="">
						<For each={vitaItems}>{(item, index) =>
							<div
								class={`relative flex items-start md:items-center mb-4 ${index() % 2 === 0 ? "md:justify-start" : "md:justify-end"
									}`}
							>
								{/* Timeline Dot (Small) - Adjust vertical positioning */}
								<div class="absolute left-4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4.5 h-4.5 bg-yellow-300 rounded-full border-4 border-neutral-100 md:hidden" />
								{/* Timeline Dot (Medium+) */}
								<div class="mt-4 hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4.5 h-4.5 bg-yellow-300 rounded-full border-4 border-neutral-100" />

								{/* Content Box */}
								<div
									class={`w-full ml-12 p-4 bg-white shadow-md md:ml-0 md:w-[calc(50%-2rem)] ${index() % 2 === 0 ? "md:mr-8" : "md:ml-8"
										}`}
								>
									<h3 class="font-semibold text-lg">{item.title}</h3>
									<p class="mt-1 text-neutral-600">{item.description}</p>
								</div>
							</div>
						}</For>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Vita;
