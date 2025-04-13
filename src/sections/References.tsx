import type { Component } from "solid-js";
import Carousel from "../components/Carousel";
import Logos from "../components/Logos";

const References: Component = () => {
	return (
		<div id="references" class="bg-white container mx-auto px-4 py-8 lg:py-16">
			<div class="container mx-auto ">
				<div class="flex flex-col items-center justify-center">
					<div class="uppercase bg-yellow-300 px-3 py-1 font-semibold tracking-wide">
						Referenzen
					</div>
					<div class="mt-4 text-3xl font-semibold text-center">
						Stimmen und Institutionen
					</div>
				</div>
				<div class="mt-4">
					<div class="">
						<Carousel />

					</div>
				</div>
			</div>
			<div class="mt-8">
				<Logos />
			</div>
		</div>
	);
};

export default References;
