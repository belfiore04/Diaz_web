import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://diaz-site.vercel.app',
  integrations: [tailwind()],
});
