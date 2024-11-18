/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-pane></ix-pane>`);
  const pane = page.locator('ix-pane');
  await expect(pane).toHaveClass(/hydrated/);
});

test('expanded', async ({ mount, page }) => {
  await mount(`
    <ix-pane
      heading="LEFT"
      composition="left"
      icon="star"
      expanded="true"
    >
      <h1>Test Heading</h1>
    </ix-pane>
  `);

  const title = page.locator('h1');
  await expect(title).toBeVisible();
});

test('prevent pane expansion', async ({ mount, page }) => {
  await mount(`
    <ix-pane
      heading="LEFT"
      composition="left"
      variant="inline"
      icon="star"
      expanded="false"
    >
      <h1>Test Heading</h1>
    </ix-pane>
  `);

  const pane = page.locator('ix-pane');

  await page.evaluate(() => {
    const paneElement = document.querySelector('ix-pane');
    paneElement.addEventListener('expandedChanged', (event: Event) => {
      event.preventDefault();
    });
  });

  const iconButton = page.locator('ix-icon-button');
  await iconButton.click();

  const isExpanded = await pane.evaluate(
    (el: HTMLIxPaneElement) => el.expanded
  );
  expect(isExpanded).toBe(false);
});
