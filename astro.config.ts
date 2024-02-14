import { defineConfig } from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";
import { SITE } from "./src/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
  },
  integrations: [
    icon(),
    react(),
    tailwind({ applyBaseStyles: false }),
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
  site: SITE.website,
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
