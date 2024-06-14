/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import path from 'path';
import defaultConfig from './playwright.config';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config: PlaywrightTestConfig = {
  ...defaultConfig,
  testMatch: path.join(__dirname, 'src', 'components', '**', '*.ct.ts'),
  reporter: 'list',
  projects: [
    {
      name: `chromium`,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
  retries: 2,
};

export default config;
