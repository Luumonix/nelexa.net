// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://chargeditsolutions.com',
  integrations: [
    tailwind({
      // Configure tailwind integration
      applyBaseStyles: false, // We'll add our own base styles
    }),
    react(),
    sitemap({
      // Custom configuration for SEO optimization
      customPages: [],
      // Exclude component directories from sitemap
      filter: (page) => !page.includes('/index/'),
      // Custom serialize function to set specific priorities for different pages
      serialize: (item) => {
        // Homepage gets highest priority
        if (item.url === 'https://chargeditsolutions.com/') {
          item.priority = 1.0;
        }
        // Service pages get high priority
        else if (item.url.includes('/solutions/colocation') || 
                 item.url.includes('/solutions/ddos-protection') || 
                 item.url.includes('/solutions/dedicated-metal') || 
                 item.url.includes('/solutions/virtual-machines') ||
                 item.url.includes('/block-storage') || 
                 item.url.includes('/managed-services')) {
          item.priority = 0.9;
        }
        // Region pages get medium-high priority
        else if (item.url.includes('/regions/')) {
          item.priority = 0.8;
        }
        // Service sub-pages and solutions get medium priority
        else if (item.url.includes('/services/') || item.url.includes('/solutions/')) {
          item.priority = 0.7;
        }
        // Legal pages get lower priority
        else if (item.url.includes('/privacy-policy') || 
                 item.url.includes('/terms-of-service') || 
                 item.url.includes('/refund-policy') || 
                 item.url.includes('/sla-policy') || 
                 item.url.includes('/legal')) {
          item.priority = 0.3;
        }
        // Default priority for any other pages
        else {
          item.priority = 0.5;
        }
        
        // Add lastmod to all entries
        item.lastmod = new Date().toISOString();
        
        return item;
      },
      // Additional options for better SEO
      entryLimit: 45000, // Google's limit is 50,000 URLs per sitemap
      // i18n configuration (if you add multiple languages in the future)
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
