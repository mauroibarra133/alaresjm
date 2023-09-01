import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import config from '../Backend/config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: config.server_host,
        ws: true
      }
    }
  }
})
