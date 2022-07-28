import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: {
    index: 'dist-transpiled/index',
  },
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true,
    },
  ],
  external: (id) => !/^(\.|\/)/.test(id),
  plugins: [resolve(), sourcemaps()],
};
