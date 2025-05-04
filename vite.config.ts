import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ command }) => {
	const base = command === 'build' ? '/maria-anna-waloschek.de/' : './'; // Conditional base path
  
	return {
	  base: base, // Set the base dynamically
	  plugins: [solidPlugin(), tailwindcss()],
	  server: {
		port: 3000,
	  },
	  build: {
		target: 'esnext',
	  },
	};
  });
