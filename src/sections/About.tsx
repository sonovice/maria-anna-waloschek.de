import type { Component } from "solid-js";

const About: Component = () => {
	return (
		<div id="about" class="container mx-auto px-4 py-8 lg:py-16">
			<div class="flex flex-col items-center justify-center">
				<div class="uppercase bg-yellow-300 px-3 py-1 font-semibold tracking-wide">
					Über mich
				</div>
				<div class="mt-4 text-3xl font-semibold text-center">Lernen Sie mich kennen</div>
			</div>
			<div class="flex flex-col lg:flex-row mt-4">
				<div class="lg:w-2/3">
					<div
						class="text-lg leading-relaxed space-y-3 lg:mt-4 hyphens-auto sm:hyphens-none"
						lang="de"
					>
						<p>
							Herzlich willkommen! Ich helfe Musikschulen und Musikhochschulen, ihre Lehre praxisnah zu gestalten – durch Workshops, Beratung und Coaching zu Themen wie Feedback, Reflexion und Lehrqualität.
						</p>
						<p>
							Dabei schöpfe ich unter anderem aus Erfahrungen in der Koordination der Lehrentwicklung im <i>Netzwerk Musikhochschulen</i>, mehrjähriger Lehrtätigkeit an Musikschulen und Musikhochschulen sowie einer Vertretungsprofessur an der Universität Münster. Studienabschlüsse in Musikpädagogik, Klavier und Management sowie eigene künstlerische Praxis runden mein Profil ab.
						</p>
						{/* <p>
							Interesse an einer Weiterentwicklung Ihrer Lehre? Kontaktieren Sie
							mich gerne!
						</p> */}
					</div>
				</div>
				<div class="italic lg:pl-6 mt-4 lg:mt-0 lg:w-1/3 text-3xl font-yrsa flex flex-col justify-center text-center">
					<div class="relative py-4">
						Die Kunst der Lehre
						<br class="hidden lg:block" /> weiterentwickeln
						<br class="" /> – gemeinsam und
						<br class="hidden lg:block" /> individuell.
						<div class="absolute -top-4 right-4 -z-10">
							<svg
								class="fill-neutral-200 w-12"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								aria-hidden="true"
								role="img"
							>
								<title>Quote icon</title>
								<path d="M192 296c0 66.3-53.7 120-120 120l-8 0-32 0 0-64 32 0 8 0c30.9 0 56-25.1 56-56l0-8L0 288 0 96l192 0 0 96 0 96 0 8zm256 0c0 66.3-53.7 120-120 120l-8 0-32 0 0-64 32 0 8 0c30.9 0 56-25.1 56-56l0-8-128 0 0-192 192 0 0 96 0 96 0 8z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
