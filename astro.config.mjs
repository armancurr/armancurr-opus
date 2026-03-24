import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
  },

  site: "https://armancurr.vercel.app",
  integrations: [react()],
});
