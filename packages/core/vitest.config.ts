/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { defineVitestConfig } from '@stencil/vitest/config';
import { config as stencilConfig } from './stencil.config';

const vitestStencilConfig = {
  ...stencilConfig,
  outputTargets: [],
};

export default defineVitestConfig({
  stencilConfig: vitestStencilConfig,
  test: {
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/api-docs/**',
      '**/www/**',
      '**/hydrate/**',
      '**/.stencil/**',
    ],
    projects: [
      {
        test: {
          name: 'unit',
          include: ['**/*.unit.{ts,tsx}'],
          environment: 'node',
        },
      },
      {
        test: {
          name: 'spec',
          include: ['**/*.spec.{ts,tsx}'],
          environment: 'jsdom',
          setupFiles: ['./vitest-setup.ts'],
        },
      },
    ],
  },
});
