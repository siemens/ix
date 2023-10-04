/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of thi  s source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-input-group>
      <input class="parameter-value" type="text" value="Some initial value" />
    </ix-input-group>
  `);

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  await expect(input).toHaveCSS('padding-left', '8px');
  await expect(input).toHaveCSS('padding-right', '15px');
});

test('initial padding start', async ({ mount, page }) => {
  await mount(`
    <ix-input-group>
      <span slot="input-start">
        <ix-icon name="eye" size="16"></ix-icon>
      </span>
      <input class="parameter-value" type="text" value="Some initial value" />
    </ix-input-group>
  `);

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  await expect(input).toHaveCSS('padding-left', '31px');
  await expect(input).toHaveCSS('padding-right', '15px');
});

test('initial padding end', async ({ mount, page }) => {
  await mount(`
    <ix-input-group>
      <span slot="input-start">
          <ix-icon name="eye" size="16"></ix-icon>
        </span>
        <span slot="input-end">
        <ix-icon name="eye" size="16"></ix-icon>
      </span>
      <input class="parameter-value" type="text" value="Some initial value" />
    </ix-input-group>
  `);

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  await expect(input).toHaveCSS('padding-left', '31px');
  await expect(input).toHaveCSS('padding-right', '31px');
});

test('update padding end', async ({ mount, page }) => {
  await mount(`
    <ix-input-group>
      <input class="parameter-value" type="text" value="Some initial value" />
    </ix-input-group>
  `);

  const group = page.locator('ix-input-group');
  await expect(group).toHaveClass(/hydrated/);

  const input = group.locator('input');
  await expect(input).toHaveCSS('padding-left', '8px');
  await expect(input).toHaveCSS('padding-right', '15px');

  await group.evaluate((group: HTMLElement) => {
    const startElement = document.createElement('DIV');
    startElement.style.height = '1px';
    startElement.style.width = '40px';
    startElement.slot = 'input-start';
    group.appendChild(startElement);
  });

  await expect(input).toHaveCSS('padding-left', '55px');
  await expect(input).toHaveCSS('padding-right', '15px');

  await group.evaluate((group: HTMLElement) => {
    const endElement = document.createElement('DIV');
    endElement.style.height = '1px';
    endElement.style.width = '50px';
    endElement.slot = 'input-end';
    group.appendChild(endElement);
  });

  await expect(input).toHaveCSS('padding-left', '55px');
  await expect(input).toHaveCSS('padding-right', '65px');
});
