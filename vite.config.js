import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// vite.config.js
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/Memory-games/",
	plugins: [
		react(),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
	],
});
