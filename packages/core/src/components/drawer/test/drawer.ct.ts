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

// Reduce flaky behavior
regressionTest.describe.configure({
  mode: 'serial',
});

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
  await mount(`<ix-drawer show>Content</ix-drawer>`);
  const drawer = page.locator('ix-drawer');

  await drawer.evaluate(
    (drawerElement: HTMLIxDrawerElement) => (drawerElement.show = true)
  );

  await expect(drawer).toHaveClass(/hydrated/);
  await expect(drawer).toBeVisible();
});

regressionTest('toggle by property', async ({ mount, page }) => {
  await mount(`<ix-drawer show>Content</ix-drawer>`);
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
