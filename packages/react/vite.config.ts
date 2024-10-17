import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const external = ['react', 'react-dom', 'tslib'];

export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.lib.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: (id) =>
        external.includes(id) ||
        id.startsWith('@siemens/ix') ||
        id.startsWith('@siemens/ix-icons') ||
        id.startsWith('@stencil/react-output-target'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: resolve(__dirname, 'src/tests/setup.ts'),
  },
});
