// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://TU-USUARIO-DE-GITHUB.github.io', // <- Cambia esto por tu usuario de GitHub
  base: '/pasos-de-tradicion',
  vite: {
    plugins: [tailwindcss()]
  }
});