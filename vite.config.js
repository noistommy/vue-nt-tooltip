import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const __dirname = resolve()

const commonConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}

const libConfig = {
  ...commonConfig,
  build: {
    lib: {
      entry: resolve(__dirname, './src'),
      name: 'nt-tooltip',
      fileName: (format) => `nt-tooltip.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        // Use `index.css` for css
        assetFileNames: assetInfo => {
          if (assetInfo.name == "style.css") return "tooltip.css"
          return assetInfo.name
        }
      }
    }
  }
}

const demoConfig = defineConfig({
  ...commonConfig,
  root: "./demo",
})

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const executionMode = process.env.MODE || "lib";

  const mode = command === 'build' ? "production" : "development";

  if(executionMode === 'demo') {
    return { ...demoConfig, mode }
  } else {
    return { ...libConfig, mode }
  }
})
