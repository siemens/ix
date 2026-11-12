/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { focusWithKeyboard, regressionTest } from '@utils/test';

async function blurActiveElement(page: Page): Promise<void> {
  await page.evaluate(() => (document.activeElement as HTMLElement)?.blur());
}

regressionTest.describe('group', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('group/basic');
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('with context menu', async ({ page }) => {
    await page.goto('group/context-menu');
    await page.locator('ix-icon-button').click();
    await expect(page.locator('ix-dropdown')).toHaveClass(/show/);
    await page.mouse.move(0, 0);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('selected', async ({ page }) => {
    await page.goto('group/basic');
    await page.click("[id='group']");
    await page.hover("[id='group']");
    await blurActiveElement(page);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('header overflow', async ({ page }) => {
    await page.goto('group/overflow');
    await page.click("[id='group']");
    await page.hover("[id='group']");
    await blurActiveElement(page);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('item selected', async ({ page }) => {
    await page.goto('group/basic');
    await page.getByTestId('expand-collapsed-icon').click();
    await page.locator('text=Example text 1').click();
    await page.locator('text=Example text 2').hover();
    await blurActiveElement(page);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('adapt-width', async ({ page }) => {
    await page.goto('group/adapt-width');
    const children = await page.locator('ix-group').all();
    for (const child of children) {
      const groupExpand = child.getByTestId('expand-collapsed-icon');
      await groupExpand.click();
    }
    await blurActiveElement(page);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest(
  'should show focus-visible outline on group header',
  async ({ page }) => {
    await page.goto('group/basic');

    await focusWithKeyboard(page, page.locator('ix-group').first());

    expect(
      await page.screenshot({ fullPage: true, animations: 'disabled' })
    ).toMatchSnapshot();
  }
);

regressionTest(
  'should show focus-visible outline on group item',
  async ({ mount, page }) => {
    const container = await mount(
      `<div style="padding: 0.5rem; width: fit-content">
        <ix-group header="Header text" sub-header="Subheader text" expanded>
          <ix-group-item text="Example text 1"></ix-group-item>
          <ix-group-item text="Example text 2"></ix-group-item>
        </ix-group>
      </div>`
    );

    await focusWithKeyboard(page, page.locator('ix-group-item').first());

    expect(
      await container.screenshot({ animations: 'disabled' })
    ).toMatchSnapshot();
  }
);
