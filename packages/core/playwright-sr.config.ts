/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { devices, type PlaywrightTestConfig } from '@playwright/test';
import defaultConfig from './playwright.config';
import { screenReaderConfig } from '@guidepup/playwright';
import path from 'path';

const __dirname = path.resolve();

const config: PlaywrightTestConfig = {
  ...screenReaderConfig,
  ...defaultConfig,
  projects: [
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], headless: false },
    },
  ],
  testMatch: path.join(__dirname, 'src', '**', '*.sr.ts'),
};

export default config;
