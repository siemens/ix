/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Page, test as base } from '@playwright/test';

async function extendPageFixture(page: Page) {
  const originalGoto = page.goto.bind(page);

  page.goto = async (url: string, options) => {
    const response = await originalGoto(
      `http://127.0.0.1:8080/src/components/${url}`,
      options
    );
    // Inital timeout for webKit to render Web Components
    await page.waitForTimeout(1000);
    return response;
  };

  return page;
}

export const test = base.extend({
  page: async ({ page }, use) => {
    page = await extendPageFixture(page);
    await use(page);
  },
});
