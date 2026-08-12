import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/projets/tfe-aout-presentation/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'src/index.html'),
        histoire: resolve(__dirname, 'src/histoire.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        credits: resolve(__dirname, 'src/credits.html')
      }
    }
  },
  server: {
    open: true
  }
});
