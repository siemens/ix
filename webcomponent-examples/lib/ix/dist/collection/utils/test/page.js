/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test as base } from '@playwright/test';
async function extendPageFixture(page, testInfo) {
  const originalGoto = page.goto.bind(page);
  const theme = testInfo.project.metadata.theme;
  testInfo.annotations.push({
    type: theme,
  });
  page.goto = async (url, options) => {
    const response = await originalGoto(`http://127.0.0.1:8080/src/components/${url}?theme=${theme}`, options);
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
