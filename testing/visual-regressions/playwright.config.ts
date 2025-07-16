import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const THEMES = ['theme-classic-light', 'theme-classic-dark'];

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

export default defineConfig({
  testMatch: path.join(__dirname, 'tests', '**', '*.e2e.ts'),

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:5173',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: buildProjectsWithThemes(),

  snapshotPathTemplate:
    '{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}{ext}',

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'pnpm vite',
    port: 5173,
  },
});
