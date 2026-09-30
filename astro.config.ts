import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lorenzocapalbo.com", // TODO Move to variable
  integrations: [
    icon(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          it: "it-IT",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
  },
  // scopedStyleStrategy: "where",
  vite: {
    plugins: [tailwindcss()]
  },
});
