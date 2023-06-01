import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const namespace = 'ix-brand-theme';
export const config: Config = {
  namespace,
  globalStyle: `./scss/${namespace}.scss`,
  minifyCss: false,
  plugins: [
    sass({
      includePaths: ['./scss', './../core/scss'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: '../scss/fonts',
          dest: `../${namespace}/fonts`,
        },
      ],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '../../../node_modules/@siemens/ix',
          dest: 'build/siemens-ix',
        },
        {
          src: '../../../node_modules/@siemens/ix-icons/dist',
          dest: 'build/ix-icons',
        },
        {
          src: '../scss/fonts',
          dest: `build/fonts`,
        },
      ],
    },
  ],
};
