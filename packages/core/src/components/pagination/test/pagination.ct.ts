/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator } from '@playwright/test';
import { regressionTest } from '@utils/test';

const createOnPageSelectedListener = (pagination: Locator) =>
  pagination.evaluate(
    (elm: HTMLIxPaginationElement) =>
      new Promise<number>((resolve) => {
        const onPageSelected = (event: Event) => {
          elm.removeEventListener('pageSelected', onPageSelected);
          resolve((event as CustomEvent<number>).detail);
        };

        elm.addEventListener('pageSelected', onPageSelected);
      })
  );

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-pagination>
    </ix-pagination>
  `);
  const element = page.locator('ix-pagination');

  await expect(element).toHaveClass(/hydrated/);
});

regressionTest('advanced', async ({ mount, page }) => {
  await mount(`
    <ix-pagination advanced>
    </ix-pagination>
  `);
  const element = page.locator('ix-pagination[advanced]');

  await expect(element).toHaveClass(/hydrated/);
});

regressionTest('open show number of page dropdown', async ({ mount, page }) => {
  await mount(`
    <ix-pagination advanced>
    </ix-pagination>
  `);
  const element = page.locator('ix-pagination[advanced]');
  await element.locator('[data-select-dropdown]').click();
  await expect(element).toHaveClass(/hydrated/);

  const dropdown = element.locator('ix-dropdown');

  await expect(dropdown).toBeVisible();
  await expect(dropdown).toHaveClass(/show/);
});

regressionTest(
  'should dispatch items count change',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced>
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination');
    await expect(pagination).toHaveClass(/hydrated/);

    const itemChanged = pagination.evaluate((elm) => {
      return new Promise<number>((resolve) => {
        elm.addEventListener('itemCountChanged', (event) =>
          resolve((event as CustomEvent<number>).detail)
        );
      });
    });

    await pagination.locator('[data-select-dropdown]').click();

    await pagination.locator('ix-dropdown-item').nth(3).click();
    await expect(pagination.locator('ix-dropdown')).not.toHaveClass(/show/);

    expect(await itemChanged).toBe(20);
  }
);

regressionTest('should not change page', async ({ mount, page }) => {
  await mount(`
    <ix-pagination count="10">
    </ix-pagination>
  `);
  const pagination = page.locator('ix-pagination');
  await expect(pagination).toHaveClass(/hydrated/);

  await pagination.evaluate((elm) => {
    elm.addEventListener('pageSelected', (event) => event.preventDefault());
  });

  const buttons = pagination.locator('button');
  await buttons.nth(1).click();

  await expect(buttons.first()).toHaveAttribute('aria-pressed', 'true');
  await expect(buttons.nth(1)).toHaveAttribute('aria-pressed', 'false');
});

regressionTest('should handle valid page input', async ({ mount, page }) => {
  await mount(`
    <ix-pagination advanced count="10" selected-page="0">
    </ix-pagination>
  `);
  const pagination = page.locator('ix-pagination[advanced]');
  await expect(pagination).toHaveClass(/hydrated/);
  const input = pagination.getByLabel('Page selection input');

  const pageSelected$ = pagination.evaluate(
    (elm) =>
      new Promise<number>((resolve) => {
        elm.addEventListener('pageSelected', (event) =>
          resolve((event as CustomEvent<number>).detail)
        );
      })
  );

  await input.fill('5');
  await input.blur();

  const selectedPage = await pageSelected$;
  expect(selectedPage).toBe(4);
});

regressionTest(
  'should handle invalid page input min',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced count="10" selected-page="0">
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination[advanced]');
    await expect(pagination).toHaveClass(/hydrated/);
    const input = pagination.getByLabel('Page selection input');

    const pageSelected$ = createOnPageSelectedListener(pagination);

    await input.fill('-100');
    await input.blur();

    await expect(input).toHaveValue('1');
    expect(await pageSelected$).toBe(0);
  }
);

regressionTest(
  'should handle invalid page input max',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced count="10" selected-page="0">
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination[advanced]');
    await expect(pagination).toHaveClass(/hydrated/);
    const input = pagination.getByLabel('Page selection input');

    const pageSelected$ = createOnPageSelectedListener(pagination);

    await input.fill('100');
    await input.blur();

    await expect(input).toHaveValue('10');
    expect(await pageSelected$).toBe(9);
  }
);

regressionTest(
  'should use custom itemCountOptions',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced count="10">
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination');
    await expect(pagination).toHaveClass(/hydrated/);

    await pagination.evaluate((elm: HTMLIxPaginationElement) => {
      elm.itemCountOptions = [5, 25, 50, 100];
    });

    await pagination.getByRole('button').nth(-1).click();

    const dropdownItems = pagination.locator('ix-select-item');
    const expectedValues = ['5', '25', '50', '100'];
    await expect(dropdownItems).toHaveCount(expectedValues.length);

    for (let index = 0; index < expectedValues.length; index++) {
      await expect(dropdownItems.nth(index)).toContainText(
        expectedValues[index]
      );
    }
  }
);
