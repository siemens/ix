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
import { expect, Locator } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
  <ix-split-button label="Test 1">
    <ix-dropdown-item>Test 1</ix-dropdown-item>
  </ix-split-button>

  <ix-split-button label="Test 2">
    <ix-dropdown-item>Test 1</ix-dropdown-item>
  </ix-split-button>

  <ix-group header="Title" sub-header="Subtitle">
    <ix-dropdown slot="dropdown">
      <ix-dropdown-item label="Item 1" icon="pin" />
      <ix-dropdown-item label="Item 2" icon="star" />
      <ix-dropdown-item label="Item 3" icon="heart" />
      <ix-dropdown-item label="Item 4" icon="cogwheel" />
    </ix-dropdown>
  </ix-group>

  <ix-group header="Title" sub-header="Subtitle">
    <ix-dropdown slot="dropdown">
      <ix-dropdown-item label="Item 1" icon="pin" />
      <ix-dropdown-item label="Item 2" icon="star" />
      <ix-dropdown-item label="Item 3" icon="heart" />
      <ix-dropdown-item label="Item 4" icon="cogwheel" />
    </ix-dropdown>
  </ix-group>
  `);

  const sb1 = page.locator('ix-split-button').nth(0);
  const sb2 = page.locator('ix-split-button').nth(1);

  const g1 = page.locator('ix-group').nth(0);
  const g2 = page.locator('ix-group').nth(1);

  const sb1Dropdown = sb1.locator('ix-dropdown');
  const sb2Dropdown = sb2.locator('ix-dropdown');
  const g1Dropdown = g1.locator('ix-dropdown');
  const g2Dropdown = g2.locator('ix-dropdown');

  await sb1
    .getByRole('button')
    .filter({ hasText: 'context-menu' })
    .first()
    .click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    0
  );

  await sb2
    .getByRole('button')
    .filter({ hasText: 'context-menu' })
    .first()
    .click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    1
  );

  await g2.getByRole('button').filter({ hasText: 'context-menu' }).click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    3
  );
});

function expectToBeVisible(elements: Locator[], index: number) {
  return Promise.all(
    elements.map(async (element, i) => {
      let ef = expect(element);
      if (i !== index) {
        ef = ef.not;
      }
      await ef.toBeVisible();
    })
  );
}

test.describe('nested dropdown tests', () => {
  const button1Text = 'Triggerbutton1';
  const button2Text = 'Triggerbutton2';

  test.beforeEach(async ({ mount }) => {
    await mount(`
      <button id="trigger1">${button1Text}</button>
      <ix-dropdown trigger="trigger1">
        <button id="trigger2">${button2Text}</button>
        <ix-dropdown trigger="trigger2">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        </ix-dropdown>
      </ix-dropdown>
    `);
  });

  test('can open nested dropdown', async ({ page }) => {
    await page.getByText(button1Text).click();
    await page.getByText(button2Text).click();
    const nestedDropdownItem = page.locator('ix-dropdown-item');

    await expect(nestedDropdownItem).toHaveClass(/hydrated/);
  });
});
