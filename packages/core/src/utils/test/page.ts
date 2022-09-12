// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { Page, test as base, TestInfo } from '@playwright/test';

async function extendPageFixture(page: Page, testInfo: TestInfo) {
  const originalGoto = page.goto.bind(page);
  const theme = testInfo.project.metadata.theme;
  testInfo.annotations.push({
    type: theme,
  });
  page.goto = async (url: string, options) => {
    const response = await originalGoto(
      `http://127.0.0.1:8080/src/components/${url}?theme=${theme}`,
      options
    );
    // Inital timeout for webKit to render Web Components
    await page.waitForTimeout(1000);
    return response;
  };

  return page;
}

export const regressionTest = base.extend({
  page: async ({ page }, use, testInfo) => {
    page = await extendPageFixture(page, testInfo);
    await use(page);
  },
});
