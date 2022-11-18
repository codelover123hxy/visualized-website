//  vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import myPlugin from './zip'
// https://vitejs.dev/config/
export default defineConfig({
plugins: [
    vue(),
    myPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})
