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

declare global {
  interface Window {
    __ixApploadDispatched?: boolean;
  }
}

export type AdditionalPageConfig = {
  icons?: Record<string, string>;
  bodyPadding?: boolean | string;
  checkIxHydration?: boolean;
};

export type IxGotoOptions = Parameters<Page['goto']>[1] & {
  skipIxHydrationCheck?: boolean;
};

type IxPage = Omit<Page, 'goto'> & {
  goto: (url: string, options?: IxGotoOptions) => ReturnType<Page['goto']>;
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

export async function waitForIxHydration(page: Page): Promise<void> {
  const timeout = process.env.CI ? 15_000 : 5_000;
  await page.waitForFunction(
    () => {
      return window.__ixApploadDispatched === true;
    },
    null,
    {
      timeout: timeout,
    }
  );
  await page.waitForTimeout(1000);
}

function getThemeMetaData(testInfo: TestInfo): {
  theme: string;
  colorSchema: string;
} {
  const theme = testInfo.project.metadata?.theme ?? 'classic';
  const colorSchema = testInfo.project.metadata?.colorSchema ?? 'dark';

  return {
    theme,
    colorSchema,
  };
}

async function extendPageFixture(
  page: Page,
  testInfo: TestInfo
): Promise<IxPage> {
  const originalGoto = page.goto.bind(page);
  const originalScreenshot = page.screenshot.bind(page);
  const { theme, colorSchema } = getThemeMetaData(testInfo);
  testInfo.annotations.push({
    type: `theme-${theme}-${colorSchema}`,
  });
  const ixGoto: IxPage['goto'] = async (url: string, options) => {
    if (testInfo.componentTest === true) {
      return originalGoto(url, options);
    }

    await page.addInitScript(() => {
      window.__ixApploadDispatched = false;

      window.addEventListener('appload', () => {
        window.__ixApploadDispatched = true;
      });
    });

    const response = await originalGoto(
      `/tests/${url}/index.html?theme=${theme}&colorSchema=${colorSchema}`,
      options
    );

    if (!options?.skipIxHydrationCheck) {
      await waitForIxHydration(page);
    }
    return response;
  };
  const ixPage = Object.assign(page, {
    goto: ixGoto,
  });

  page.screenshot = async (options?: PageScreenshotOptions) => {
    await page.waitForTimeout(150);
    return originalScreenshot(options);
  };

  return ixPage;
}

async function mountComponent(
  page: Page,
  selector: string,
  config?: {
    icons?: Record<string, string>;
    bodyPadding?: boolean | string;
    checkIxHydration?: boolean;
  }
): Promise<ElementHandle<HTMLElement>> {
  if (config?.checkIxHydration === true) {
    await page.addInitScript(() => {
      window.__ixApploadDispatched = false;

      window.addEventListener('appload', () => {
        window.__ixApploadDispatched = true;
      });
    });
  }

  await page.mouse.move(9999, 9999);

  const elementHandle = await page.evaluateHandle(
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

  if (config?.checkIxHydration === true) {
    await waitForIxHydration(page);
  }

  return elementHandle;
}

export const regressionTest = testBase.extend<{
  page: IxPage;
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
    const { theme, colorSchema } = getThemeMetaData(testInfo);

    testInfo.annotations.push({
      type: `theme-${theme}-${colorSchema}`,
    });
    await page.goto(
      `/tests/utils/ct/index.html?theme=${theme}&colorSchema=${colorSchema}`
    );

    await use((selector, config) => mountComponent(page, selector, config));
  },
});

export const test = regressionTest;
