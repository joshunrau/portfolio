import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  //compressHTML: true,
  experimental: {
    assets: true
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en",
          fr: "fr"
        }
      }
    })
  ],
  image: {
    service: sharpImageService()
  },
  site: "https://joshuaunrau.com"
  // redirects: {
  //   "/": "/en"
  // }
});
