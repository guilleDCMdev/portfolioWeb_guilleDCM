import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',             // correcto, genera archivos estáticos
  site: 'https://guilledcmdev.github.io', // tu dominio de GitHub Pages
  base: '/portfolioWeb/',       // el nombre de tu repo
});
