// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://nelexa.net',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      customPages: [],
      filter: (page) => !page.includes('/index/'),
      serialize: (item) => {
        if (item.url === 'https://nelexa.net/') {
          item.priority = 1.0;
        } else if (
          item.url.includes('/dedicated') ||
          item.url.includes('/colocation') ||
          item.url.includes('/hardware') ||
          item.url.includes('/ip-transit')
        ) {
          item.priority = 0.9;
        } else if (item.url.includes('/locations/')) {
          item.priority = 0.8;
        } else if (item.url.includes('/case-studies')) {
          item.priority = 0.7;
        } else if (
          item.url.includes('/privacy-policy') ||
          item.url.includes('/terms-of-service') ||
          item.url.includes('/refund-policy') ||
          item.url.includes('/sla-policy') ||
          item.url.includes('/legal')
        ) {
          item.priority = 0.3;
        } else {
          item.priority = 0.5;
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
      entryLimit: 45000,
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
        },
      },
    }),
  ],
  output: 'static',
});
