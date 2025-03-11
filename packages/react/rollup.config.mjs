import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import { resolve } from 'path';

const __dirname = resolve();

const external = ['react', 'react-dom', 'react-dom/client', 'tslib'];

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-[hash].js',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: resolve(__dirname, 'tsconfig.lib.json'),
    }),
    preserveDirectives(),
  ],
  external: (id) => {
    return (
      external.includes(id) ||
      id.startsWith('@siemens/ix') ||
      id.startsWith('@siemens/ix/hydrate') ||
      id.startsWith('@siemens/ix-icons') ||
      id.startsWith('@stencil/react-output-target')
    );
  },
};
