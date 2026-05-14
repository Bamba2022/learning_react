import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // ← C'est cette ligne qui est importante pour GitHub Pages
  base: '/learning_react/',
});