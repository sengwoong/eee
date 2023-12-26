// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:8000', 
        changeOrigin: true, // 변경된 Origin을 설정
      },
      '/socket.io': {
        target: 'ws://localhost:8000',
        ws: true
      }
    },
  },
 
});
