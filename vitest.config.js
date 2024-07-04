import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { json } from 'react-router-dom';

export default defineConfig({
  plugins: [react(), json()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});