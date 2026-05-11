// vite.config.js
import { defineConfig, loadEnv } from "file:///D:/Projetos/Acme-Workforce/apps/capabilities/template/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Projetos/Acme-Workforce/node_modules/@vitejs/plugin-react/dist/index.js";
import { fileURLToPath } from "url";
import path from "path";
var __vite_injected_original_import_meta_url = "file:///D:/Projetos/Acme-Workforce/apps/capabilities/template/vite.config.js";
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, path.resolve(__dirname, "../../../"), "VITE_");
  const port = parseInt(env.VITE_PORT_CAPABILITY_TEMPLATE) || 9098;
  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_APP_ENV": JSON.stringify(env.VITE_APP_ENV || "dev")
    },
    resolve: {
      alias: {
        "shared-data": path.resolve(__dirname, "../../../packages/shared-data/index.js"),
        "ui": path.resolve(__dirname, "../../../packages/ui")
      }
    },
    css: {
      postcss: path.resolve(__dirname, "../../../postcss.config.js")
    },
    server: {
      port,
      strictPort: true,
      proxy: {
        "/api/v1": {
          target: "http://localhost:9005",
          changeOrigin: true
        }
      }
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "../../../vitest.setup.js",
      css: true
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZXRvc1xcXFxBY21lLVdvcmtmb3JjZVxcXFxhcHBzXFxcXGNhcGFiaWxpdGllc1xcXFx0ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamV0b3NcXFxcQWNtZS1Xb3JrZm9yY2VcXFxcYXBwc1xcXFxjYXBhYmlsaXRpZXNcXFxcdGVtcGxhdGVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2pldG9zL0FjbWUtV29ya2ZvcmNlL2FwcHMvY2FwYWJpbGl0aWVzL3RlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vJyksICdWSVRFXycpO1xuICBjb25zdCBwb3J0ID0gcGFyc2VJbnQoZW52LlZJVEVfUE9SVF9DQVBBQklMSVRZX1RFTVBMQVRFKSB8fCA5MDk4O1xuXG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW3JlYWN0KCldLFxuICAgIGRlZmluZToge1xuICAgICAgJ2ltcG9ydC5tZXRhLmVudi5WSVRFX0FQUF9FTlYnOiBKU09OLnN0cmluZ2lmeShlbnYuVklURV9BUFBfRU5WIHx8ICdkZXYnKSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdzaGFyZWQtZGF0YSc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi8uLi8uLi9wYWNrYWdlcy9zaGFyZWQtZGF0YS9pbmRleC5qcycpLFxuICAgICAgICAndWknOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vcGFja2FnZXMvdWknKVxuICAgICAgfVxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICBwb3N0Y3NzOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vLi4vcG9zdGNzcy5jb25maWcuanMnKSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgcG9ydDogcG9ydCxcbiAgICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgICBwcm94eToge1xuICAgICAgICAnL2FwaS92MSc6IHtcbiAgICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjkwMDUnLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB0ZXN0OiB7XG4gICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICBzZXR1cEZpbGVzOiAnLi4vLi4vLi4vdml0ZXN0LnNldHVwLmpzJyxcbiAgICAgIGNzczogdHJ1ZSxcbiAgICB9XG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlYsU0FBUyxjQUFjLGVBQWU7QUFDblksT0FBTyxXQUFXO0FBQ2xCLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sVUFBVTtBQUg0TSxJQUFNLDJDQUEyQztBQUs5USxJQUFNLFlBQVksS0FBSyxRQUFRLGNBQWMsd0NBQWUsQ0FBQztBQUU3RCxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLEtBQUssUUFBUSxXQUFXLFdBQVcsR0FBRyxPQUFPO0FBQ3ZFLFFBQU0sT0FBTyxTQUFTLElBQUksNkJBQTZCLEtBQUs7QUFFNUQsU0FBTztBQUFBLElBQ0wsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLElBQ2pCLFFBQVE7QUFBQSxNQUNOLGdDQUFnQyxLQUFLLFVBQVUsSUFBSSxnQkFBZ0IsS0FBSztBQUFBLElBQzFFO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxlQUFlLEtBQUssUUFBUSxXQUFXLHdDQUF3QztBQUFBLFFBQy9FLE1BQU0sS0FBSyxRQUFRLFdBQVcsc0JBQXNCO0FBQUEsTUFDdEQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxTQUFTLEtBQUssUUFBUSxXQUFXLDRCQUE0QjtBQUFBLElBQy9EO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0EsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLFFBQ0wsV0FBVztBQUFBLFVBQ1QsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
