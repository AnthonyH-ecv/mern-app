import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api/users': {
          target: process.env.VITE_API_URL_TARGET,
          changeOrigin: true,
        },
      },
    },
  })
}
