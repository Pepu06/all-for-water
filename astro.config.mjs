import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react()],
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  alias: {
    "@lib": "./src/lib", // Ajusta según la estructura de tu proyecto
  },
});
