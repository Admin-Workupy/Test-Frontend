import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.HTTP_PORT ?? process.env.VITE_HTTP_PORT,
    allowedHosts: [process.env.DNS_HOST ?? process.env.VITE_DNS_HOST]
  }
})
