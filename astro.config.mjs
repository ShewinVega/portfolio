import { defineConfig, passthroughImageService } from 'astro/config';
import icon from "astro-icon";


import tailwindcss from '@tailwindcss/vite';


import react from "@astrojs/react";


export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },
  integrations: [icon(), react()],
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    service: passthroughImageService(),
  }
});
