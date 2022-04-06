import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs',
  },
  server: {
    proxy: {
      '/api': {
        target: "http://test.my-site.com"
      }
    }
  }
})