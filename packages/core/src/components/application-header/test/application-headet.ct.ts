/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test, viewPorts } from '@utils/test';

test('renders', async ({ mount, page }) => {
  page.setViewportSize({
    height: 500,
    width: 1400,
  });
  await mount(
    `
      <ix-basic-navigation application-name="test">
      </ix-basic-navigation>
    `
  );

  const header = page.locator('ix-basic-navigation ix-application-header');

  await expect(header).toBeVisible();
  await expect(header).toHaveClass(/breakpoint-lg/);
});

test('not response inside map navigation', async ({ mount, page }) => {
  page.setViewportSize(viewPorts.sm);
  await mount(
    `
    <ix-map-navigation applicationName="TEst">
      <div slot="logo">Test</div>
      <ix-menu>
        <ix-menu-item>Test</ix-menu-item>
      </ix-menu>
    </ix-map-navigation>
    `
  );
  const header = page.locator('ix-map-navigation ix-application-header');
  const burger = header.locator('ix-burger-menu');

  await expect(burger).not.toBeVisible();
  await expect(header).toHaveClass(/breakpoint-md/);
});
