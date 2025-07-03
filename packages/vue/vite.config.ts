import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const external = ['vue'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: './src/index.ts',
    },
    rollupOptions: {
      external: (id) =>
        external.includes(id) ||
        id.startsWith('@siemens/ix') ||
        id.startsWith('@stencil/vue-output-target'),
      output: [
        {
          dir: 'dist/',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          chunkFileNames: '[name]-[hash].js',
          format: 'es',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
  },
});
