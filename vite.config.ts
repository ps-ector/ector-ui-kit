import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ["lib"] }), libInjectCss()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      fileName: "index",
      formats: ["es"],
    },
  },
});
