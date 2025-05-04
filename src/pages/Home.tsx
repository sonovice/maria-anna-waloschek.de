import type { Component } from "solid-js";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Publications from "../sections/Publications";
import References from "../sections/References";
import Vita from "../sections/Vita";

const Home: Component = () => {
	return (
		<>
			<Hero />
			<About />
			<Portfolio />
			<Vita />
			<References />
			<Publications />
			<Contact />
		</>
	);
};

export default Home;
