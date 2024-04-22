import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // ! This will give us an absolute path
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
