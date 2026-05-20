import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://valengp2006.github.io',
  base: '/pasos-de-tradicion/',
  vite: {
    plugins: [tailwindcss()],
  },
});