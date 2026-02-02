/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-drawer>Content</ix-drawer>`);
  const drawer = page.locator('ix-drawer');
  await expect(drawer).toHaveClass(/hydrated/);
  await expect(drawer).not.toBeVisible();
});

regressionTest('show by property (initial)', async ({ mount, page }) => {
  await mount(`<ix-drawer show>Content</ix-drawer>`);
  const drawer = page.locator('ix-drawer');
  await expect(drawer).toHaveClass(/hydrated/);
  await expect(drawer).toBeVisible();
});

regressionTest('show by property', async ({ mount, page }) => {
  await mount(`<ix-drawer>Content</ix-drawer>`);
  const drawer = page.locator('ix-drawer');

  await drawer.evaluate(
    (drawerElement: HTMLIxDrawerElement) => (drawerElement.show = true)
  );

  await expect(drawer).toHaveClass(/hydrated/);
  await expect(drawer).toBeVisible();
});

regressionTest('toggle by property', async ({ mount, page }) => {
  await mount(`<ix-drawer>Content</ix-drawer>`);
  const drawer = page.locator('ix-drawer');

  await drawer.evaluate(
    (drawerElement: HTMLIxDrawerElement) => (drawerElement.show = true)
  );

  await expect(drawer).toHaveClass(/hydrated/);
  await expect(drawer).toBeVisible();

  await drawer.evaluate(
    (drawerElement: HTMLIxDrawerElement) => (drawerElement.show = false)
  );

  await expect(drawer).not.toBeVisible();
});

regressionTest('open', async ({ mount, page }) => {
  await mount('<ix-drawer>Content</ix-drawer');
  const drawer = page.locator('ix-drawer');
  await expect(drawer).toHaveClass(/hydrated/);
  await drawer.evaluate((d: HTMLIxDrawerElement) =>
    d.addEventListener('open', (event) => {
      event.preventDefault();
    })
  );
  await drawer.evaluate((d: HTMLIxDrawerElement) => (d.show = true));
  await expect(drawer).not.toBeVisible();
});

regressionTest('drawerClose', async ({ mount, page }) => {
  await mount('<ix-drawer show>Content</ix-drawer');
  const drawer = page.locator('ix-drawer');
  await expect(drawer).toHaveClass(/hydrated/);
  await drawer.evaluate((d: HTMLIxDrawerElement) =>
    d.addEventListener('drawerClose', (event) => {
      event.preventDefault();
    })
  );
  await drawer.evaluate((d: HTMLIxDrawerElement) => (d.show = false));
  await expect(drawer).toBeVisible();
});
regressionTest(
  'close button should emit drawerClose event only once and hide the drawer',
  async ({ mount, page }) => {
    await mount(
      '<ix-drawer show aria-label-close-button="Close drawer">Drawer Content</ix-drawer>'
    );
    const drawer = page.locator('ix-drawer');
    await expect(drawer).toHaveClass(/hydrated/);

    const eventCount = await drawer.evaluateHandle((d: HTMLIxDrawerElement) => {
      const count = {
        drawerClose: 0,
      };
      d.addEventListener('drawerClose', () => {
        count.drawerClose++;
      });
      return count;
    });

    const closeButton = page.getByLabel('Close drawer');
    await closeButton.click();

    expect(await eventCount.evaluate((c) => c.drawerClose)).toBe(1);

    expect(await drawer.evaluate((d: HTMLIxDrawerElement) => d.show)).toBe(
      false
    );

    await expect(drawer).not.toBeVisible();
  }
);
