import { type Component, For } from "solid-js";

interface Publication {
	title: string;
	authors: string;
	year: string;
	publisher?: string;
	source?: string;
	sourcePrefix?: "In" | "In:";
	type: "Buch" | "Buchbeitrag" | "Artikel";
	description?: string[];
	titleIsItalic?: boolean;
	sourceIsItalic?: boolean;
}

const Publications: Component = () => {
	const publications: Publication[] = [
		{
			title:
				"Die Kunst der Lehre. Ein Praxishandbuch für Lehrende an Musikhochschulen",
			authors: "Waloschek, M. A. & Gruhle, C.",
			year: "2022",
			publisher: "Münster: Waxmann",
			type: "Buch",
			titleIsItalic: true,
			description: [
				"Prüfen und Bewerten von künstlerischen Leistungen – Einführung",
				"Der Critical Response Process – Konstruktives Peer-Feedback fördern, selbstgesteuertes Lernen ermöglichen",
				"Lehrportfolioarbeit im Kontext Musikhochschulen – Lehrkompetenzen reflektieren, darlegen und weiterentwickeln",
				"Voneinander lernen: Kollegiale Hospitation als wirksame Peer-Learning-Methode",
			],
		},
		{
			title:
				"Rahmen zur kriteriengeleiteten Unterrichtsbeobachtung und -beurteilung",
			authors:
				"Bernhardt, W., Bialonski, A., Fiebig-Fechtner, S., Keller, G., Kornel, A., Maag, H., Materne, N., Plenge, B., Waloschek, M. A. & Zernott, A.",
			year: "2020",
			publisher: "Musikdidaktik-Netzwerk der Musikhochschule Münster",
			type: "Artikel",
			titleIsItalic: true,
		},
		{
			title:
				'"Improvisation und Gedöns" – Stellenwert, hochschuldidaktische Einbindung und Perspektiven von Improvisation an deutschen Musikhochschulen. Ein Bericht zur 3. Summer School des Netzwerks Musikhochschulen',
			authors: "Damianov, Anja & Saulich, Maria",
			year: "2018, Dezember",
			sourcePrefix: "In",
			source: "improfil – Theorie und Praxis improvisierter Musik",
			type: "Artikel",
			titleIsItalic: false,
			sourceIsItalic: true,
		},
		{
			title:
				"Begeisterung – Liebe – aufrichtiges Interesse. Eigenschaften und Fähigkeiten einer idealen Lehrperson aus Sicht der Schülerinnen und Schüler",
			authors: "Saulich, Maria",
			year: "2017, Heft 1",
			sourcePrefix: "In",
			source: "Üben & Musizieren",
			type: "Artikel",
			titleIsItalic: false,
			sourceIsItalic: true,
		},
		{
			title:
				"Neue Perspektiven für den künstlerischen Einzelunterricht – Co-Teaching und Teamteaching an Musikhochschulen",
			authors: "Saulich, Maria",
			year: "2017",
			sourcePrefix: "In",
			source:
				"Clausen, Bernd & Geuen, Heinz (Hrsg.): Qualitätsmanagement und Lehrentwicklung an Musik‐hochschulen. Konzepte – Projekte – Perspektiven",
			publisher: "Münster: Waxmann",
			type: "Buchbeitrag",
			titleIsItalic: false,
			sourceIsItalic: true,
		},
		{
			title:
				"Personalentwicklung in der Lehre – Hintergründe, konzeptioneller Ansatz und Ideen zu einem musikhochschulspezifischen Zertifikatsprogramm zur Professionalisierung von Lehrkompetenz",
			authors: "Baus, Christine & Dübler, Maika & Saulich, Maria",
			year: "2017",
			sourcePrefix: "In:",
			source:
				"Clausen, Bernd & Geuen, Heinz (Hrsg.): Qualitätsmanagement und Lehrentwicklung an Musik‐hochschulen. Konzepte – Projekte – Perspektiven",
			publisher: "Münster: Waxmann",
			type: "Buchbeitrag",
			titleIsItalic: false,
			sourceIsItalic: true,
		},
	];

	const renderPublicationText = (pub: Publication, isFeatured = false) => {
		const yearPunctuation = pub.title === "Rahmen zur kriteriengeleiteten Unterrichtsbeobachtung und -beurteilung" ? ":" : ".";

		return (
			<p class={`text-sm ${isFeatured ? 'text-neutral-700' : 'text-neutral-600'}`}>
				{pub.source && (
					<>
						{" "}{pub.sourcePrefix ?? "In"}{" "}
						{pub.sourceIsItalic ? <i class="italic">{pub.source}</i> : pub.source}
						.{" "}
					</>
				)}
				({pub.year})

				{pub.publisher && <> {pub.publisher}.</>}
			</p>
		);
	};

	return (
		<div id="publications" class="bg-white">
			<div class="container mx-auto px-4 py-8 lg:py-16">
				<div class="flex flex-col items-center justify-center">
					<div class="uppercase bg-yellow-300 px-3 py-1 font-semibold tracking-wide">
						Publikationen
					</div>
					<div class="mt-4 text-3xl font-semibold text-center">
						Eine Auswahl meiner Veröffentlichungen
					</div>
				</div>

				<div class="mt-12 lg:space-y-8 space-y-6">
					<a
						href="https://waxmann.com/buch4172"
						target="_blank"
						rel="noopener noreferrer"
						class="block group hover:cursor-pointer"
					>
						<div class="bg-yellow-50 p-6 border-l-4 border-yellow-300 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-start group-hover:shadow-md transition-shadow duration-200">
							<div class="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
								<div class="relative overflow-hidden rounded-md shadow-md transform transition duration-300 group-hover:scale-[1.02] max-w-64 mx-auto">
									<img
										class="w-full h-auto object-cover"
										src="book_cover.png"
										alt="Buchcover: Die Kunst der Lehre"
									/>
								</div>
							</div>
							<div class="flex-grow">
								<div class="flex justify-center md:justify-end items-start mb-2">
									{/* Merged Tag: Type (Gray) + Year (Yellow) */}
									<span class="inline-flex overflow-hidden rounded-full text-xs font-medium shrink-0">
										<span class="bg-neutral-200 text-neutral-700 pl-3 pr-2.5 py-1">
											Buch
										</span>
										<span class="bg-yellow-300 text-neutral-700 pl-2.5 pr-3 py-1">
											{publications[0].year.split(",")[0]}
										</span>
									</span>
								</div>
								<h3 class="text-lg font-semibold mb-1">{publications[0].title}</h3>
								<p class="text-neutral-700 mb-1">{`${publications[0].authors} (Hrsg.)`}</p>
								{renderPublicationText(publications[0], true)}

								<div class="mt-4">
									<p class="font-medium">
										Neben der Herausgeberschaft Autorin folgender Beiträge:
									</p>
									<ul class="mt-2 list-disc list-outside pl-5 space-y-1 text-neutral-700">
										<For each={publications[0].description}>
											{(item) => <li>{item}</li>}
										</For>
									</ul>
								</div>
							</div>
						</div>
					</a>


					<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
						<For each={publications.slice(1)}>
							{(pub) => (
								<div class="p-5 bg-neutral-50 border-l-4 border-neutral-200 hover:border-yellow-300 transition-all hover:shadow-sm">
									<div class="flex flex-col h-full">
										<div class="flex justify-center md:justify-end items-start mb-2">
											{/* Merged Tag: Type (Gray) + Year (Yellow) */}
											<span class="inline-flex overflow-hidden rounded-full text-xs font-medium shrink-0">
												<span class="bg-neutral-200 text-neutral-700 pl-3 pr-2.5 py-1">
													{pub.type}
												</span>
												<span class="bg-yellow-300 text-neutral-700 pl-2.5 pr-3 py-1">
													{pub.year.split(",")[0]}
												</span>
											</span>
										</div>
										<h4 class="font-semibold mb-1">{pub.title}</h4>
										<p class="text-neutral-600 mb-1 text-sm">{pub.authors}</p>
										{renderPublicationText(pub)}
									</div>
								</div>
							)}
						</For>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Publications;
