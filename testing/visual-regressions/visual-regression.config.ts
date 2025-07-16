/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function defineVisualTestConfig(
  config: {
    selector: string;
    importPath: string;
  }[]
) {
  process.env.VITE_THEME_CONFIG = JSON.stringify(config);
  return config;
}

export const visualTestConfig = defineVisualTestConfig([
  {
    selector: 'theme-classic-dark',
    importPath: require.resolve(
      '@siemens/ix/dist/siemens-ix/theme/classic-dark.css'
    ),
  },
  {
    selector: 'theme-classic-light',
    importPath: require.resolve(
      '@siemens/ix/dist/siemens-ix/theme/classic-light.css'
    ),
  },
]);
