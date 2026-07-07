import { defineConfig }         from 'vite';
import { resolve }              from 'path';
import { readdirSync, existsSync } from 'fs';
import { ViteImageOptimizer }   from 'vite-plugin-image-optimizer';

function collectHTML(dir = '.') {
  const entries = {};
  const scan = (d) => {
    if (!existsSync(d)) return;
    readdirSync(d, { withFileTypes: true }).forEach(f => {
      const full = resolve(d, f.name);
      if (f.isDirectory() && !['node_modules','dist','.git'].includes(f.name)) { scan(full); return; }
      if (!f.name.endsWith('.html')) return;
      const root = resolve('.').replace(/\\/g, '/');
      const normalizedFull = full.replace(/\\/g, '/');
      const key = normalizedFull.replace(root + '/', '').replace('.html', '');
      entries[key] = full;
    });
  };
  scan(resolve(dir));
  return entries;
}

export default defineConfig({
  root: '.',
  base: '/',
  plugins: [
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 80 },
    })
  ],
  build: {
    cssCodeSplit: true,

    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: collectHTML(),
      output: {
        assetFileNames: 'assets/[ext]/[name]-[hash][extname]',
        chunkFileNames: 'assets/js/chunks/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssMinify: true,
    sourcemap: false,
  },
  server: { port: 3000, open: true },
  resolve: {
    alias: {
      '@':             resolve('./assets/js'),
      '@css':          resolve('./assets/css'),
      '@data':         resolve('./public/data'),
      '@config':       resolve('./assets/js/config'),
      '@core':         resolve('./assets/js/core'),
      '@interactions': resolve('./assets/js/interactions'),
      '@animations':   resolve('./assets/js/animations'),
      '@sections':     resolve('./assets/js/sections'),
      '@forms':        resolve('./assets/js/forms'),
      '@utils':        resolve('./assets/js/utils'),
      '@three':        resolve('./assets/js/three'),
    }
  },
  optimizeDeps: { include: ['gsap', 'gsap/ScrollTrigger', 'three'] }
});
