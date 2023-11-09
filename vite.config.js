import { defineConfig } from "vite";

export default defineConfig({
	root: "./dev",
	build: {
		outDir: "../dist",
		target: "esnext",
		rollupOptions: {
			output: {
				entryFileNames: "app.js",
				assetFileNames: "styles.css",
			},
		},
	},
});
