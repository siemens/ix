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

const __dirname = path.resolve();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config: PlaywrightTestConfig = {
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? '100%' : '50%',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    contextOptions: {
      reducedMotion: 'reduce',
      timezoneId: 'UTC',
    },
  },
  testMatch: path.join(__dirname, 'src', '**', '*.ct.ts'),
  reporter: process.env.CI ? [['blob'], ['list']] : 'list',
  projects: [
    {
      name: `chromium`,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
  webServer: {
    command: 'pnpm run host-root',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
  retries: process.env.CI ? 1 : 0,
};

export default config;
