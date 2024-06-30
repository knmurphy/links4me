import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  content: {
    collections: 'content/config.ts'  // Use a relative path to the root directory
  }
});