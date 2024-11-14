/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';
import { IxModalSize } from 'src/components';

regressionTest.describe('modal', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('modal/basic');

    const modal = page.locator('ix-modal');
    await modal.evaluate((modal) => (modal as any).showModal());
    const dialog = modal.locator('dialog');

    await expect(dialog).toBeVisible();
    await dialog.click({
      force: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('icon', async ({ page }) => {
    await page.goto('modal/icon');

    const modal = page.locator('ix-modal');
    await modal.evaluate((modal) => (modal as any).showModal());
    const dialog = modal.locator('dialog');

    await expect(dialog).toBeVisible();
    await dialog.click({
      force: true,
    });
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  regressionTest('close on Escape', async ({ page }) => {
    await page.goto('modal/basic');

    const modal = page.locator('ix-modal');
    const dialog = modal.locator('dialog');

    await expect(dialog).toBeVisible();
    await page.keyboard.down('Escape');

    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest('modal with dropdown', async ({ mount, page }) => {
  await mount(`
  <ix-modal>
    <ix-modal-header
      >Dialog title Dialog titleDialog titleDialog titleDialog titleDialog
      titleDialog title</ix-modal-header
    >
    <ix-modal-content>
      <ix-dropdown-button label="drop">
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
        <ix-dropdown-item label="item"></ix-dropdown-item>
      </ix-dropdown-button>
    </ix-modal-content>
    <ix-modal-footer>
      <ix-button outline>Cancel</ix-button>
      <ix-button>Save</ix-button>
    </ix-modal-footer>
  </ix-modal>
    `);
  const modal = page.locator('ix-modal');
  await modal.evaluate((modal) => ((modal as any).style.display = 'block'));
  await expect(modal).toHaveClass(/hydrated/);

  const dropdown = page.locator('ix-dropdown-button');
  await dropdown.click();

  const dropdownContent = dropdown.locator('ix-dropdown');

  await expect(dropdownContent).toHaveClass(/show/);

  await modal.evaluate((modal: HTMLIxModalElement) => modal.showModal());
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

const screenWidths: IxModalSize[] = [
  `360`,
  `480`,
  `600`,
  `720`,
  `840`,
  `full-width`,
  `full-screen`,
];
screenWidths.forEach((size) => {
  regressionTest(`modal size ${size}`, async ({ page, mount }) => {
    await page.setViewportSize({
      height: 1080,
      width: 1920,
    });

    await mount(`
        <ix-modal size="${size}">
          <ix-modal-header>Header</ix-modal-header>
          <ix-modal-content>Some Content 123 content 123 content 123 content 123</ix-modal-content>
          <ix-modal-footer>
            <ix-button>Test</ix-button>
          </ix-modal-footer>
        </ix-modal>
      `);

    const modal = page.locator('ix-modal');
    await modal.evaluate((modal: HTMLIxModalElement) => modal.showModal());

    await page.waitForTimeout(1000);
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest('modal should show centered', async ({ mount, page }) => {
  await mount(`
  <ix-modal centered>
    <div style="height: 500px">Some content</div>
  </ix-modal>
    `);
  const modal = page.locator('ix-modal');
  await modal.evaluate((modal) => (modal as any).showModal());
  await expect(modal).toHaveClass(/hydrated/);

  await modal.evaluate((modal: HTMLIxModalElement) => modal.showModal());

  // Wait until anime.js perform the slideIn animation
  await page.waitForTimeout(2000);
  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});
