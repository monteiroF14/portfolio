import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	base: "/portfolio/",
	build: {
		outDir: "build",
	},
	css: {
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	server: {
		port: 5000,
	},
});
