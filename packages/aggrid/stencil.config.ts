import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
  namespace: 'ix-aggrid',
  globalStyle: './scss/ix-aggrid.scss',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
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
          src: './../../../node_modules/@siemens/ix-icons/dist',
          dest: 'build/ix-icons',
        },
        {
          src: './../../../node_modules/@siemens/ix/dist',
          dest: 'build/ix/dist',
        },
        {
          src: './../../../node_modules/@siemens/ix/loader',
          dest: 'build/ix/loader',
        },
      ],
    },
  ],
};
