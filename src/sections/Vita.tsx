import { For, type Component } from "solid-js";

const vitaItems = [
	{
		title: "Freiberufliche Musik(hoch)schuldidaktikerin & Beraterin | seit 2017",
		description:
			"Konzeption und Durchführung von Weiterbildungsprogrammen, Beratung und langfristige Begleitung für Lehrende und Institutionen",
	},
	{
		title:
			"Vertretungsprofessorin (Studienjahr 2024/2025) und Lehrbeauftragte (2017-2024) für Instrumental- und Gesangspädagogik | Universität Münster",
		description:
			"Lehre, Studiengangsentwicklung, Betreuung von Abschlussarbeiten, Konzeption von institutionsübergreifenden Musikdidaktikkonferenzen, Prüfungs- und Gremientätigkeiten",
	},
	{
		title: "Wissenschaftliche Mitarbeiterin | Hochschule für Musik Detmold (2015-2018)",
		description:
			"Zentrale Koordinatorin für Lehr- und Personalentwicklung des *Netzwerk Musikhochschulen*, inhaltliche Gestaltung, Moderations- und Beratungstätigkeit von hochschulübergreifenden Weiterbildungsprogrammen und Tagungen für Lehrende, Studierende und Mitglieder der Verwaltung, Betreuung von Pilotprojekten zu innovativen Lehr-/Lernansätzen an den Verbundhochschulen, projektbezogene Publikationen und Forschung im Bereich Lehren und Lernen an Musikhochschulen",
	},
	{
		title: "Musikvermittlerin und Kulturmanagerin | Stadt Bayreuth (2011-2013)",
		description:
			"Künstlerisch-pädagogische Konzeption und Leitung von Musikvermittlungsprogrammen und Kooperationen anlässlich der Jubiläen Liszt (2011) und Wagner (2013)",
	},
	{
		title: "Instrumentalpädagogin (seit 2005)",
		description:
			"Lehre in den Fächern Klavier, Kammermusik, Musiktheorie und Improvisation für unterschiedliche Niveau- und Altersstufen, Entwicklung von konzertpädagogischen Formaten",
	},
	{
		title: "Aktive Musikerin",
		description:
			"Freischaffende Pianistin (Klavierduo, Liedbegleitung), Sängerin im Jazz-/Pop-Vokalensemble *vode- (https://www.vode-ensemble.de/)",
	},
	{
		title: "Akademische Ausbildung und Abschlüsse",
		description:
			"Diplome in Instrumentalpädagogik, Künstlerisches Konzertfach Klavier sowie Fortbildungsklasse Klavier (HfM Würzburg), Professional Diploma in Management (Open University), Zertifikat in Artistic Research in Music (Orpheus Institute in Kooperation mit der KU Leuven)",
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
						Berufliche Stationen und Qualifikationen
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
