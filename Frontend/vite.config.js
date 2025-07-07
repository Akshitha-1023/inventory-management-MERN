import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target:'https://shop-inventory-management-mern-main.onrender.com'
      }
    }
  },
  plugins: [react()],
})
