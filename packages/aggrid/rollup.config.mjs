import { resolve } from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-import-css';

const __dirname = resolve();
const external = ['@ag-grid-community/theming'];

/** @type {import('rollup').RollupOptions} */
const config = {
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-[hash].js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  input: {
    index: 'src/index.ts',
  },
  plugins: [
    css(),
    typescript({
      tsconfig: resolve(__dirname, 'tsconfig.lib.json'),
    }),
    nodeResolve(),
  ],
  external: (id) => {
    return external.includes(id);
  },

  watch: {
    include: 'src/**',
    chokidar: {
      usePolling: true, // Use polling to detect changes
      interval: 100, // Polling interval in milliseconds
    },
  },
};

export default config;
