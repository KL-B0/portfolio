import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"]
  },
  integrations: [icon(), react(), tailwind()]
});