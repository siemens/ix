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
  TestInfo as _TestInfo,
  expect as baseExpect,
  ElementHandle,
  Locator,
  Page,
  PageScreenshotOptions,
  test as testBase,
} from '@playwright/test';
import type { addIcons as _addIcons } from '@siemens/ix-icons';

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
  const dataIxTheme = testInfo.project.metadata?.['data-ix-theme'] ?? 'classic';
  const dataIxColorSchema =
    testInfo.project.metadata?.['data-ix-color-schema'] ?? 'dark';
  testInfo.annotations.push({
    type: `${dataIxTheme} ${dataIxColorSchema}`,
  });
  page.goto = async (url: string, options) => {
    if (testInfo.componentTest === true) {
      return originalGoto(url, options);
    }

    const response = await originalGoto(
      `http://127.0.0.1:8080/src/tests/${url}?data-ix-theme=${dataIxTheme}&data-ix-color-schema=${dataIxColorSchema}`,
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
    headTags?: string[];
    icons?: Record<string, string>;
  }
): Promise<ElementHandle<HTMLElement>> {
  return page.evaluateHandle(
    async ({ componentSelector, config }) => {
      if (config?.headTags) {
        config.headTags.forEach((tag) => {
          const head = document.querySelector('head');
          if (!head) {
            throw new Error('No head tag found in the document.');
          }

          head.innerHTML += tag;
        });
      }

      if (config?.icons) {
        const moduleImport = await import(
          //@ts-expect-error - Only existing on runtime
          '/www/node_modules/@siemens/ix-icons/dist/index.js'
        );
        const addIcons: typeof _addIcons = moduleImport.addIcons;
        addIcons(config.icons);
      }

      const loadScript = document.createElement('script');
      loadScript.src = '/scripts/e2e/load-e2e-runtime.js';
      document.body.appendChild(loadScript);

      await new Promise<void>((resolve) => {
        loadScript.onload = async () => {
          resolve();
        };
      });

      await window.customElements.whenDefined('ix-button');
      const mount = document.querySelector('#mount');

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
    config?: {
      headTags?: string[];
      icons?: Record<string, string>;
    }
  ) => Promise<ElementHandle<HTMLElement>>;
  createElement: (
    selector: string,
    appendTo?: ElementHandle<Element>
  ) => Promise<ElementHandle<HTMLElement>>;
  makeAxeBuilder: () => AxeBuilder;
}>({
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () =>
      new AxeBuilder({ page } as any)
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude('#commonly-reused-element-with-known-issue');

    await use(makeAxeBuilder);
  },
  page: async ({ page }, use, testInfo) => {
    page = await extendPageFixture(page, testInfo);

    await page.route('*/**/svg/*.svg', async (route, request) => {
      if (!process.env.CI) {
        const [, svg] = request.url().split('/svg/');
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
    const dataIxTheme =
      testInfo.project.metadata?.['data-ix-theme'] ?? 'classic';
    const dataIxColorSchema =
      testInfo.project.metadata?.['data-ix-color-schema'] ?? 'dark';
    testInfo.annotations.push({
      type: `${dataIxTheme} ${dataIxColorSchema}`,
    });
    await page.goto(
      `http://127.0.0.1:8080/src/tests/utils/ct/index.html?data-ix-theme=${dataIxTheme}&data-ix-color-schema=${dataIxColorSchema}`
    );
    await use((selector, config) => mountComponent(page, selector, config));
  },
});

export const expect = baseExpect.extend({
  async toHaveVisibleFocus(
    locator: Locator,
    activeDescendantElementLocator?: Locator
  ) {
    let pass = true;
    const errors: string[] = [];

    try {
      await baseExpect(locator).toHaveClass(/ix-focused/);
    } catch (e: any) {
      pass = false;
      errors.push(e.message);
    }

    if (activeDescendantElementLocator) {
      try {
        const activeDescendantId =
          await activeDescendantElementLocator.evaluate((el) =>
            el.getAttribute('aria-activedescendant')
          );
        await baseExpect(activeDescendantElementLocator).toHaveAttribute(
          'aria-activedescendant',
          activeDescendantId!
        );
      } catch (e: any) {
        pass = false;
        errors.push(e.message);
      }
    }

    return {
      pass,
      message: () =>
        errors.join('\n') || 'Expected element to have visible focus',
    };
  },
});

export const test = regressionTest;
