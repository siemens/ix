import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import { resolve } from 'path';

const __dirname = resolve();

const external = ['react', 'react-dom', 'react-dom/client', 'tslib'];

export default {
  output: [
    {
      dir: 'dist',
      entryFileNames: '[name].js',
      chunkFileNames: '[name]-[hash].js',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
    },
  ],
  input: {
    index: 'src/index.ts',
    'components.server': 'src/components.server.ts',
  },

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
      id.startsWith('@stencil/react-output-target') ||
      id.startsWith('@stencil/react-output-target/runtime')
    );
  },
};
