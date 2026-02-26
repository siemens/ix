/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator, Page } from '@playwright/test';
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

  await element.getByRole('button').nth(-1).click();

  const dropdown = element.locator('ix-dropdown');

  await expect(dropdown).toBeVisible();
});

regressionTest(
  'should dispatch items count change',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced>
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination');

    const itemChanged = pagination.evaluate((elm) => {
      return new Promise<number>((resolve) => {
        elm.addEventListener('itemCountChanged', (event) =>
          resolve((event as CustomEvent<number>).detail)
        );
      });
    });

    await pagination.getByRole('button').nth(-1).click();

    await pagination.locator('ix-dropdown-item').nth(3).click();
    await expect(pagination.locator('ix-dropdown')).not.toBeVisible();

    await expect(pagination).toHaveClass(/hydrated/);
    expect(await itemChanged).toBe(40);
  }
);

regressionTest('should not change page', async ({ mount, page }) => {
  await mount(`
    <ix-pagination count="10">
    </ix-pagination>
  `);
  const pagination = page.locator('ix-pagination');

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

    await pagination.evaluate((elm: HTMLIxPaginationElement) => {
      elm.itemCountOptions = [5, 25, 50, 100];
    });

    await pagination.getByRole('button').nth(-1).click();

    const dropdownItems = pagination.locator('ix-dropdown-item');
    const expectedValues = ['5', '25', '50', '100'];
    await expect(dropdownItems).toHaveCount(expectedValues.length);

    for (let index = 0; index < expectedValues.length; index++) {
      await expect(dropdownItems.nth(index)).toContainText(
        expectedValues[index]
      );
    }
  }
);

regressionTest(
  'should sort itemCountOptions in ascending order',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced count="10">
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination');

    await pagination.evaluate((elm: HTMLIxPaginationElement) => {
      elm.itemCountOptions = [100, 5, 50, 25];
    });

    await pagination.getByRole('button').nth(-1).click();

    const dropdownItems = pagination.locator('ix-dropdown-item');
    const expectedValues = ['5', '25', '50', '100'];

    for (let index = 0; index < expectedValues.length; index++) {
      await expect(dropdownItems.nth(index)).toContainText(
        expectedValues[index]
      );
    }
  }
);

regressionTest(
  'should filter out zero and negative values from itemCountOptions',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced count="10">
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination');

    await pagination.evaluate((elm: HTMLIxPaginationElement) => {
      elm.itemCountOptions = [0, -5, 10, 20, -1];
      elm.count = 11;
    });
    await pagination.getByRole('button').nth(-1).click();

    const dropdownItems = pagination.locator('ix-dropdown-item');
    await expect(dropdownItems).toHaveCount(2);
    await expect(dropdownItems.nth(0)).toContainText('10');
    await expect(dropdownItems.nth(1)).toContainText('20');
  }
);

regressionTest(
  'should use default options when itemCountOptions is empty',
  async ({ mount, page }) => {
    await mount(`
    <ix-pagination advanced count="10">
    </ix-pagination>
  `);
    const pagination = page.locator('ix-pagination');

    await pagination.evaluate((elm: HTMLIxPaginationElement) => {
      elm.itemCountOptions = [];
    });

    await pagination.getByRole('button').nth(-1).click();

    const dropdownItems = pagination.locator('ix-dropdown-item');
    const expectedValues = ['10', '15', '20', '40', '100'];
    await expect(dropdownItems).toHaveCount(expectedValues.length);

    for (let index = 0; index < expectedValues.length; index++) {
      await expect(dropdownItems.nth(index)).toContainText(
        expectedValues[index]
      );
    }
  }
);
