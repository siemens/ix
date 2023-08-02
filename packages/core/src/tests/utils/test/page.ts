/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  ElementHandle,
  Page,
  PageScreenshotOptions,
  test as testBase,
  TestInfo,
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

export const test = testBase.extend<{
  mount: (selector: string) => Promise<ElementHandle<HTMLElement>>;
  createElement: (
    selector: string,
    appendTo?: ElementHandle<Element>
  ) => Promise<ElementHandle<HTMLElement>>;
}>({
  createElement: async ({ page }, use) => {
    use((selector, appendTo) =>
      page.evaluateHandle(
        async ({ selector, appendTo }) => {
          const elm = document.createElement(selector);

          if (appendTo) {
            appendTo.appendChild(elm);
          }

          return elm;
        },
        {
          selector,
          appendTo,
        }
      )
    );
  },
  mount: async ({ page }, use, testInfo) => {
    const theme = testInfo.project.metadata?.theme ?? 'theme-classic-dark';
    testInfo.annotations.push({
      type: theme,
    });
    await page.goto(
      `http://127.0.0.1:8080/src/tests/utils/ct/index.html?theme=${theme}`
    );
    use((selector) => {
      return page.evaluateHandle(
        async ({ componentSelector }) => {
          await window.customElements.whenDefined('ix-button');
          const mount = document.querySelector('#mount');
          mount.innerHTML = componentSelector;
          return mount.children.item(0) as HTMLElement;
        },
        { componentSelector: selector }
      );
    });
  },
});
