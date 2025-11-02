import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import sitemap from "vite-plugin-sitemap";

export default defineConfig(({ command }) => {
	// const base = command === 'build' ? '/maria-anna-waloschek.de/' : './'; // Conditional base path

	return {
		base: "/",
		plugins: [
			solidPlugin(),
			tailwindcss(),
			sitemap({
				hostname: "https://www.maria-anna-waloschek.de",
				dynamicRoutes: ["/impressum"],
			}),
		],
		server: {
			port: 3000,
		},
		build: {
			target: "esnext",
		},
	};
});
