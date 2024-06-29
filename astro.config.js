import * as path from 'node:path';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig, sharpImageService } from 'astro/config';

export default defineConfig({
  build: {
    assets: '_assets'
  },
  compressHTML: true,
  image: {
    service: sharpImageService()
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr'
        }
      }
    }),
    tailwind({ applyBaseStyles: false })
  ],
  output: 'static',
  server: {
    port: 4000
  },
  site: 'https://joshuaunrau.com',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, 'src')
      }
    }
  }
});
