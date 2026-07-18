// vite.config.js
import { defineConfig } from "file:///C:/Users/aryn1/Documents/Portfolio/PortfolioIDE/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import { readdirSync, existsSync } from "fs";
import { ViteImageOptimizer } from "file:///C:/Users/aryn1/Documents/Portfolio/PortfolioIDE/node_modules/vite-plugin-image-optimizer/dist/index.js";
function collectHTML(dir = ".") {
  const entries = {};
  const scan = (d) => {
    if (!existsSync(d)) return;
    readdirSync(d, { withFileTypes: true }).forEach((f) => {
      const full = resolve(d, f.name);
      if (f.isDirectory() && !["node_modules", "dist", ".git"].includes(f.name)) {
        scan(full);
        return;
      }
      if (!f.name.endsWith(".html")) return;
      const root = resolve(".").replace(/\\/g, "/");
      const normalizedFull = full.replace(/\\/g, "/");
      const key = normalizedFull.replace(root + "/", "").replace(".html", "");
      entries[key] = full;
    });
  };
  scan(resolve(dir));
  return entries;
}
var vite_config_default = defineConfig({
  root: ".",
  base: "/",
  plugins: [
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 80 }
    })
  ],
  build: {
    cssCodeSplit: true,
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: collectHTML(),
      output: {
        assetFileNames: "assets/[ext]/[name]-[hash][extname]",
        chunkFileNames: "assets/js/chunks/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        manualChunks(id) {
          if (id.includes("node_modules/gsap")) {
            return "vendor-gsap";
          }
          if (id.includes("node_modules/three")) {
            return "vendor-three";
          }
        }
      }
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssMinify: true,
    sourcemap: false
  },
  server: { port: 3e3, open: true },
  resolve: {
    alias: {
      "@": resolve("./assets/js"),
      "@css": resolve("./assets/css"),
      "@data": resolve("./public/data"),
      "@config": resolve("./assets/js/config"),
      "@core": resolve("./assets/js/core"),
      "@interactions": resolve("./assets/js/interactions"),
      "@animations": resolve("./assets/js/animations"),
      "@sections": resolve("./assets/js/sections"),
      "@forms": resolve("./assets/js/forms"),
      "@utils": resolve("./assets/js/utils"),
      "@three": resolve("./assets/js/three")
    }
  },
  optimizeDeps: { include: ["gsap", "gsap/ScrollTrigger", "three"] }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhcnluMVxcXFxEb2N1bWVudHNcXFxcUG9ydGZvbGlvXFxcXFBvcnRmb2xpb0lERVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYXJ5bjFcXFxcRG9jdW1lbnRzXFxcXFBvcnRmb2xpb1xcXFxQb3J0Zm9saW9JREVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FyeW4xL0RvY3VtZW50cy9Qb3J0Zm9saW8vUG9ydGZvbGlvSURFL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gICAgICAgICBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlc29sdmUgfSAgICAgICAgICAgICAgZnJvbSAncGF0aCc7XG5pbXBvcnQgeyByZWFkZGlyU3luYywgZXhpc3RzU3luYyB9IGZyb20gJ2ZzJztcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9ICAgZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcblxuZnVuY3Rpb24gY29sbGVjdEhUTUwoZGlyID0gJy4nKSB7XG4gIGNvbnN0IGVudHJpZXMgPSB7fTtcbiAgY29uc3Qgc2NhbiA9IChkKSA9PiB7XG4gICAgaWYgKCFleGlzdHNTeW5jKGQpKSByZXR1cm47XG4gICAgcmVhZGRpclN5bmMoZCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBmdWxsID0gcmVzb2x2ZShkLCBmLm5hbWUpO1xuICAgICAgaWYgKGYuaXNEaXJlY3RvcnkoKSAmJiAhWydub2RlX21vZHVsZXMnLCdkaXN0JywnLmdpdCddLmluY2x1ZGVzKGYubmFtZSkpIHsgc2NhbihmdWxsKTsgcmV0dXJuOyB9XG4gICAgICBpZiAoIWYubmFtZS5lbmRzV2l0aCgnLmh0bWwnKSkgcmV0dXJuO1xuICAgICAgY29uc3Qgcm9vdCA9IHJlc29sdmUoJy4nKS5yZXBsYWNlKC9cXFxcL2csICcvJyk7XG4gICAgICBjb25zdCBub3JtYWxpemVkRnVsbCA9IGZ1bGwucmVwbGFjZSgvXFxcXC9nLCAnLycpO1xuICAgICAgY29uc3Qga2V5ID0gbm9ybWFsaXplZEZ1bGwucmVwbGFjZShyb290ICsgJy8nLCAnJykucmVwbGFjZSgnLmh0bWwnLCAnJyk7XG4gICAgICBlbnRyaWVzW2tleV0gPSBmdWxsO1xuICAgIH0pO1xuICB9O1xuICBzY2FuKHJlc29sdmUoZGlyKSk7XG4gIHJldHVybiBlbnRyaWVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiAnLicsXG4gIGJhc2U6ICcvJyxcbiAgcGx1Z2luczogW1xuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XG4gICAgICBwbmc6IHsgcXVhbGl0eTogODAgfSxcbiAgICAgIGpwZWc6IHsgcXVhbGl0eTogODAgfSxcbiAgICAgIGpwZzogeyBxdWFsaXR5OiA4MCB9LFxuICAgICAgd2VicDogeyBxdWFsaXR5OiA4MCB9LFxuICAgICAgYXZpZjogeyBxdWFsaXR5OiA4MCB9LFxuICAgIH0pXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IGNvbGxlY3RIVE1MKCksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW2V4dF0vW25hbWVdLVtoYXNoXVtleHRuYW1lXScsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL2pzL2NodW5rcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgIC8vIEdTQVAgaW50byBpdHMgb3duIGNodW5rIGZvciBwYXJhbGxlbCBsb2FkaW5nICsgY2FjaGluZ1xuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzL2dzYXAnKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3ItZ3NhcCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFRocmVlLmpzIGFscmVhZHkgbGF6eS1sb2FkZWQsIGtlZXAgaXQgaXNvbGF0ZWRcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcy90aHJlZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvci10aHJlZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0sXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIGNzc01pbmlmeTogdHJ1ZSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICB9LFxuICBzZXJ2ZXI6IHsgcG9ydDogMzAwMCwgb3BlbjogdHJ1ZSB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogICAgICAgICAgICAgcmVzb2x2ZSgnLi9hc3NldHMvanMnKSxcbiAgICAgICdAY3NzJzogICAgICAgICAgcmVzb2x2ZSgnLi9hc3NldHMvY3NzJyksXG4gICAgICAnQGRhdGEnOiAgICAgICAgIHJlc29sdmUoJy4vcHVibGljL2RhdGEnKSxcbiAgICAgICdAY29uZmlnJzogICAgICAgcmVzb2x2ZSgnLi9hc3NldHMvanMvY29uZmlnJyksXG4gICAgICAnQGNvcmUnOiAgICAgICAgIHJlc29sdmUoJy4vYXNzZXRzL2pzL2NvcmUnKSxcbiAgICAgICdAaW50ZXJhY3Rpb25zJzogcmVzb2x2ZSgnLi9hc3NldHMvanMvaW50ZXJhY3Rpb25zJyksXG4gICAgICAnQGFuaW1hdGlvbnMnOiAgIHJlc29sdmUoJy4vYXNzZXRzL2pzL2FuaW1hdGlvbnMnKSxcbiAgICAgICdAc2VjdGlvbnMnOiAgICAgcmVzb2x2ZSgnLi9hc3NldHMvanMvc2VjdGlvbnMnKSxcbiAgICAgICdAZm9ybXMnOiAgICAgICAgcmVzb2x2ZSgnLi9hc3NldHMvanMvZm9ybXMnKSxcbiAgICAgICdAdXRpbHMnOiAgICAgICAgcmVzb2x2ZSgnLi9hc3NldHMvanMvdXRpbHMnKSxcbiAgICAgICdAdGhyZWUnOiAgICAgICAgcmVzb2x2ZSgnLi9hc3NldHMvanMvdGhyZWUnKSxcbiAgICB9XG4gIH0sXG4gIG9wdGltaXplRGVwczogeyBpbmNsdWRlOiBbJ2dzYXAnLCAnZ3NhcC9TY3JvbGxUcmlnZ2VyJywgJ3RocmVlJ10gfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJVLFNBQVMsb0JBQTRCO0FBQ2hYLFNBQVMsZUFBNEI7QUFDckMsU0FBUyxhQUFhLGtCQUFrQjtBQUN4QyxTQUFTLDBCQUE0QjtBQUVyQyxTQUFTLFlBQVksTUFBTSxLQUFLO0FBQzlCLFFBQU0sVUFBVSxDQUFDO0FBQ2pCLFFBQU0sT0FBTyxDQUFDLE1BQU07QUFDbEIsUUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFHO0FBQ3BCLGdCQUFZLEdBQUcsRUFBRSxlQUFlLEtBQUssQ0FBQyxFQUFFLFFBQVEsT0FBSztBQUNuRCxZQUFNLE9BQU8sUUFBUSxHQUFHLEVBQUUsSUFBSTtBQUM5QixVQUFJLEVBQUUsWUFBWSxLQUFLLENBQUMsQ0FBQyxnQkFBZSxRQUFPLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxHQUFHO0FBQUUsYUFBSyxJQUFJO0FBQUc7QUFBQSxNQUFRO0FBQy9GLFVBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxPQUFPLEVBQUc7QUFDL0IsWUFBTSxPQUFPLFFBQVEsR0FBRyxFQUFFLFFBQVEsT0FBTyxHQUFHO0FBQzVDLFlBQU0saUJBQWlCLEtBQUssUUFBUSxPQUFPLEdBQUc7QUFDOUMsWUFBTSxNQUFNLGVBQWUsUUFBUSxPQUFPLEtBQUssRUFBRSxFQUFFLFFBQVEsU0FBUyxFQUFFO0FBQ3RFLGNBQVEsR0FBRyxJQUFJO0FBQUEsSUFDakIsQ0FBQztBQUFBLEVBQ0g7QUFDQSxPQUFLLFFBQVEsR0FBRyxDQUFDO0FBQ2pCLFNBQU87QUFDVDtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLG1CQUFtQjtBQUFBLE1BQ2pCLEtBQUssRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNuQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDcEIsS0FBSyxFQUFFLFNBQVMsR0FBRztBQUFBLE1BQ25CLE1BQU0sRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNwQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsSUFDdEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGNBQWM7QUFBQSxJQUVkLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLGVBQWU7QUFBQSxNQUNiLE9BQU8sWUFBWTtBQUFBLE1BQ25CLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLFFBQ2hCLGFBQWEsSUFBSTtBQUVmLGNBQUksR0FBRyxTQUFTLG1CQUFtQixHQUFHO0FBQ3BDLG1CQUFPO0FBQUEsVUFDVDtBQUVBLGNBQUksR0FBRyxTQUFTLG9CQUFvQixHQUFHO0FBQ3JDLG1CQUFPO0FBQUEsVUFDVDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLEVBQ2I7QUFBQSxFQUNBLFFBQVEsRUFBRSxNQUFNLEtBQU0sTUFBTSxLQUFLO0FBQUEsRUFDakMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBaUIsUUFBUSxhQUFhO0FBQUEsTUFDdEMsUUFBaUIsUUFBUSxjQUFjO0FBQUEsTUFDdkMsU0FBaUIsUUFBUSxlQUFlO0FBQUEsTUFDeEMsV0FBaUIsUUFBUSxvQkFBb0I7QUFBQSxNQUM3QyxTQUFpQixRQUFRLGtCQUFrQjtBQUFBLE1BQzNDLGlCQUFpQixRQUFRLDBCQUEwQjtBQUFBLE1BQ25ELGVBQWlCLFFBQVEsd0JBQXdCO0FBQUEsTUFDakQsYUFBaUIsUUFBUSxzQkFBc0I7QUFBQSxNQUMvQyxVQUFpQixRQUFRLG1CQUFtQjtBQUFBLE1BQzVDLFVBQWlCLFFBQVEsbUJBQW1CO0FBQUEsTUFDNUMsVUFBaUIsUUFBUSxtQkFBbUI7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLGNBQWMsRUFBRSxTQUFTLENBQUMsUUFBUSxzQkFBc0IsT0FBTyxFQUFFO0FBQ25FLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
