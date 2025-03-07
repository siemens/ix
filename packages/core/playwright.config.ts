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

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();
// eslint-disable-next-line turbo/no-undeclared-env-vars

const THEMES = ['theme-classic-dark'];

function buildProjectsWithThemes() {
  return THEMES.flatMap((theme) => {
    return [
      {
        name: `chromium - ${theme}`,
        use: {
          ...devices['Desktop Chrome'],
        },
        metadata: {
          theme,
        },
      },
    ];
  });
}

/**
 * See https://playwright.dev/docs/test-configuration.
 */
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config: PlaywrightTestConfig = {
  testMatch: path.join(__dirname, 'src', 'tests', '**', '*.e2e.ts'),
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
  /* Retry on CI only */
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  retries: process.env.CI ? 2 : 2,
  /* Opt out of parallel tests on CI. */
  workers: '50%',
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? 'blob' : 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  /* Configure projects for major browsers */
  projects: buildProjectsWithThemes(),
  webServer: {
    command: 'pnpm run host-root',
    port: 8080,
  },
};

export default config;
