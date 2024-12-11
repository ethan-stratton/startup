import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // doesnt work if not on port 3000
    },
    '/ws': {
        target: 'ws://localhost:4000',
        ws: true,
      },
  },
});
