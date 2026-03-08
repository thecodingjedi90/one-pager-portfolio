import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://thecodingjedi90.github.io',
  base: '/one-pager-portfolio',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
