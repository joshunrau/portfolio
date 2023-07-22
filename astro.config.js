import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  adapter: vercel(),
  build: {
    assets: "_assets"
  },
  compressHTML: true,
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          fr: "fr"
        }
      }
    }),
    tailwind()
  ],
  output: "hybrid",
  site: "https://joshuaunrau.com"
});
