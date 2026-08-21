import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { componentUsagePlugin } from '../../tooling/registry/src/component-usage-plugin';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), componentUsagePlugin()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
});
