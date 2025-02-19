import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    base: "",
    org: "jsm-eu",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true,
    outDir: "dist",         // Ensure the output folder is "dist"
    assetsDir: "assets"     // Keep assets inside dist/assets
  }
})