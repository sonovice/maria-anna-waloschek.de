import { createSignal, type Component } from "solid-js";

const Contact: Component = () => {
	const [showTooltip, setShowTooltip] = createSignal(false);

	const revealEmail = (event: MouseEvent) => {
		event.preventDefault();
		const user = "mail";
		const domain = "maria-anna-waloschek.de";
		window.location.href = `mailto:${user}@${domain}`;
	};

	const copyEmailToClipboard = async (event: MouseEvent) => {
		event.preventDefault();
		const user = "mail";
		const domain = "maria-anna-waloschek.de";
		const email = `${user}@${domain}`;
		try {
			await navigator.clipboard.writeText(email);
			setShowTooltip(true);
			setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
		} catch (err) {
			console.error("Failed to copy email: ", err);
			// Optional: Show an error message to the user
		}
	};

	return (
		<div id="contact" class="bg-neutral-100">
			<div class="container mx-auto px-4 py-8 lg:py-16 text-center">
				<div class="inline-block uppercase bg-yellow-300 px-3 py-1 font-semibold tracking-wide mb-4">
					Kontakt
				</div>
				<h2 class="text-3xl font-semibold mb-6">
					Lassen Sie uns ins Gespräch kommen
				</h2>
				<p class="text-lg lg:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
					Sie würden gerne mit mir in Kontakt treten oder haben Fragen zu meinen Angeboten? Ich freue mich darauf, von Ihnen zu hören! Gerne entwerfe ich ein passgenaues, individuelles Angebot für Ihre Institution oder für Sie persönlich.
				</p>
				<button
					type="button"
					class="bg-black text-white px-8 py-3 text-xl font-medium shadow transition duration-150 hover:cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
					onClick={revealEmail}
				>
					E-Mail senden
				</button>
				{/* Fallback display with copy-to-clipboard */}
				<div class="relative mt-4">
					<button
						type="button"
						class="text-neutral-500 hover:text-neutral-700 hover:cursor-pointer transition duration-200 underline decoration-dotted underline-offset-2"
						onClick={copyEmailToClipboard}
						aria-label="E-Mail-Adresse kopieren"
					>
						mail [at] maria-anna-waloschek [punkt] de
					</button>
					{showTooltip() && (
						<output
							class="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-neutral-700 text-white text-sm py-1 px-2 shadow z-10"
						>
							Kopiert!
						</output>
					)}
				</div>
			</div>
		</div>
	);
};

export default Contact;
