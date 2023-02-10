import path from 'path';
import url from 'url';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const clientDir = path.dirname(url.fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(clientDir, 'src')
    }
  }
});
