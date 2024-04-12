/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Page, PageScreenshotOptions, TestInfo, test as base } from '@playwright/test';

async function extendPageFixture(page: Page, testInfo: TestInfo) {
  const originalGoto = page.goto.bind(page);
  const originalSceenshot = page.screenshot.bind(page);
  const theme = testInfo.project.metadata.theme;
  testInfo.annotations.push({
    type: theme,
  });
  page.goto = async (url: string, options) => {
    const response = await originalGoto(`http://127.0.0.1:8080/tests/${url}?theme=${theme}`, options);
    // Inital timeout for webKit to render Web Components
    await page.waitForTimeout(1000);
    return response;
  };

  page.screenshot = async (options?: PageScreenshotOptions) => {
    await page.waitForTimeout(150);
    return originalSceenshot(options);
  };

  return page;
}

export const regressionTest = base.extend({
  page: async ({ page }, use, testInfo) => {
    page = await extendPageFixture(page, testInfo);
    await use(page);
  },
});
