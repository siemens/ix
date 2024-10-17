import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';

const __dirname = resolve();

const external = [
  'react',
  'react-dom',
  'react-dom/client',
  'tslib',
  'react/jsx-runtime',
];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-[hash].js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: resolve(__dirname, 'tsconfig.lib.json'),
    }),
  ],
  external: (id) => {
    return (
      external.includes(id) ||
      id.startsWith('@siemens/ix') ||
      id.startsWith('@siemens/ix-icons') ||
      id.startsWith('@stencil/react-output-target')
    );
  },
};
