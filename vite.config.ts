import { defineConfig } from "vite"
import { resolve } from "path"
import { svelte } from "@sveltejs/vite-plugin-svelte"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  resolve: {
    alias: {
      "@lib": resolve(__dirname, "./src/lib"),
      "@calendar": resolve(__dirname, "./src/modules/calendar"),
    },
  },
})
