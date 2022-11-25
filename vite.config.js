import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://fedebayer.github.io/react-rick-and-morty/",
  plugins: [react()],
});
