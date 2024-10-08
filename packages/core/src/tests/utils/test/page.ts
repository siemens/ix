/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import AxeBuilder from '@axe-core/playwright';
import {
  Page,
  PageScreenshotOptions,
  test as testBase,
  TestInfo,
  expect as baseExpect,
} from '@playwright/test';

async function extendPageFixture(page: Page, testInfo: TestInfo) {
  const originalGoto = page.goto.bind(page);
  const originalSceenshot = page.screenshot.bind(page);
  const theme = testInfo.project.metadata?.theme ?? 'theme-classic-dark';
  testInfo.annotations.push({
    type: theme,
  });
  page.goto = async (url: string, options) => {
    const response = await originalGoto(
      `http://127.0.0.1:8080/src/tests/${url}?theme=${theme}`,
      options
    );

    await page.waitForTimeout(1000);
    return response;
  };

  page.screenshot = async (options?: PageScreenshotOptions) => {
    await page.waitForTimeout(150);
    return originalSceenshot(options);
  };

  return page;
}

export const regressionTest = testBase.extend({
  page: async ({ page }, use, testInfo) => {
    page = await extendPageFixture(page, testInfo);
    await use(page);
  },
});

export const expect = baseExpect.extend({
  async toHaveNoA11yIssues(page: Page) {
    const assertionName = 'toHaveA11yIssues';
    let pass: boolean;
    const results = await new AxeBuilder({ page: page })
      // Disable rules that are not relevant for the test
      .disableRules(['landmark-one-main', 'page-has-heading-one', 'region'])
      .analyze();

    try {
      baseExpect(results.violations).toHaveLength(0);
      pass = true;
    } catch (error) {
      pass = false;
    }

    const message = pass
      ? () => 'No a11y issues found.'
      : () =>
          this.utils.matcherHint(assertionName, undefined, undefined, {
            isNot: this.isNot,
          }) +
          `\n\n` +
          results.violations
            .map((v) => `[${v.id}] ${v.description} (${v.helpUrl})`)
            .join('\n');

    return { pass, message, name: assertionName };
  },
});

export const test = testBase.extend({
  mount: async ({ page }, use, testInfo) => {
    const theme = testInfo.project.metadata?.theme ?? 'theme-classic-dark';
    testInfo.annotations.push({
      type: theme,
    });
    await page.goto(
      `http://127.0.0.1:8080/src/tests/utils/ct/index.html?theme=${theme}`
    );
    use((selector: string) => {
      return page.evaluateHandle(
        async ({ componentSelector }) => {
          await window.customElements.whenDefined('ix-button');
          const mount = document.querySelector('#mount');

          if (!mount) {
            throw new Error('No mount point found in the document.');
          }

          mount.innerHTML = componentSelector;
          return mount.children.item(0) as HTMLElement;
        },
        { componentSelector: selector }
      );
    });
  },
});
