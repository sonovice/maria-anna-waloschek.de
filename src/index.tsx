/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";

import App from "./App"; // <-- Restore original App import

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
	);
}

// Simple test component
// const TestComponent = () => {
//  return <div style="color: black; background-color: white; padding: 20px;">Hello World! This is a test.</div>;
// }; // <-- Comment out test component

// Render the app only if root is a valid HTMLElement
if (root instanceof HTMLElement) {
	render(() => <App />, root); // <-- Render App again
} else {
	// Optional: Add fallback behavior or error logging for production
	console.error("Root element not found or is not an HTMLElement.");
}
