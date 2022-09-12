
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

/** @type {import('rollup').RollupOptions} */
export default {
  input: path.join(__dirname, 'src/index.ts'),
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
    },
  ],
  external: Object.keys(pkg.dependencies),
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
/* eslint-enable */
