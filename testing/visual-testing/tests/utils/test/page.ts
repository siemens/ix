/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  TestInfo as _TestInfo,
  expect,
} from '@playwright/test';

export type AdditionalPageConfig = {
  icons?: Record<string, string>;
  bodyPadding?: boolean | string;
};

interface TestInfo extends _TestInfo {
  componentTest?: boolean;
}

export type Mount = (
  selector: string,
  config?: {
    headTags?: string[];
    icons?: Record<string, string>;
  }
) => Promise<ElementHandle<HTMLElement>>;

async function extendPageFixture(page: Page, testInfo: TestInfo) {
  const originalGoto = page.goto.bind(page);
  const originalScreenshot = page.screenshot.bind(page);
  const theme = testInfo.project.metadata?.theme ?? 'theme-classic-dark';
  testInfo.annotations.push({
    type: theme,
  });
  page.goto = async (url: string, options) => {
    if (testInfo.componentTest === true) {
      return originalGoto(url, options);
    }

    const response = await originalGoto(
      `/tests/${url}/index.html?theme=${theme}`,
      options
    );

    await page.waitForTimeout(1000);
    return response;
  };

  page.screenshot = async (options?: PageScreenshotOptions) => {
    await page.waitForTimeout(150);
    return originalScreenshot(options);
  };

  return page;
}

async function mountComponent(
  page: Page,
  selector: string,
  config?: {
    icons?: Record<string, string>;
    bodyPadding?: boolean | string;
  }
): Promise<ElementHandle<HTMLElement>> {
  await page.mouse.move(9999, 9999);

  return page.evaluateHandle(
    async ({ componentSelector, config }) => {
      await window.customElements.whenDefined('ix-button');
      const mount = document.querySelector('#mount');

      if (config?.icons) {
        window.addIcons(config.icons);
      }

      if (!mount) {
        throw new Error('No mount point found in the document.');
      }

      mount.innerHTML = componentSelector;
      return mount.children.item(0) as HTMLElement;
    },
    { componentSelector: selector, config }
  );
}

export const regressionTest = testBase.extend<{
  mount: (
    selector: string,
    config?: AdditionalPageConfig
  ) => Promise<ElementHandle<HTMLElement>>;
  createElement: (
    selector: string,
    appendTo?: ElementHandle<Element>
  ) => Promise<ElementHandle<HTMLElement>>;
}>({
  page: async ({ page }, use, testInfo) => {
    await page.mouse.move(9999, 9999);

    page = await extendPageFixture(page, testInfo);

    await page.route('*/**/svg/*.svg', async (route, request) => {
      if (!process.env.CI) {
        const [__, svg] = request.url().split('/svg/');
        console.warn(
          testInfo.file,
          testInfo.title,
          'SVGs fetched by static path',
          svg
        );

        expect(false, 'SVGs fetched by static path').toBe(true);
      }

      return route.continue();
    });

    await use(page);
  },
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
  mount: async ({ page }, use, testInfo: TestInfo) => {
    testInfo.componentTest = true;
    const theme = testInfo.project.metadata?.theme ?? 'theme-classic-dark';
    testInfo.annotations.push({
      type: theme,
    });
    await page.goto(`/tests/utils/ct/index.html?theme=${theme}`);
    await use((selector, config) => mountComponent(page, selector, config));
  },
});

export const test = regressionTest;
