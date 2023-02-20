/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
      type: 'www',
      serviceWorker: null,
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
