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
  await mount(`
    <ix-tooltip for=".test">tooltip</ix-tooltip>
    <ix-button class="test">button</ix-button>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();

  await expect(tooltip).toHaveClass(/hydrated/);
  await expect(tooltip).toBeVisible();
});

regressionTest('renders in shadow DOM', async ({ mount, page }) => {
  await mount(``);

  await page.evaluate(() => {
    customElements.define('test-component', class extends HTMLElement {});
    const testComponent = document.createElement('test-component');
    testComponent.attachShadow({ mode: 'open' });

    const tooltip = document.createElement('ix-tooltip');
    tooltip.innerHTML = 'tooltip';
    tooltip.for = '.test';

    const button = document.createElement('ix-button');
    button.innerHTML = 'button';
    button.classList.add('test');

    document.querySelector('#mount')?.appendChild(testComponent);
    testComponent.shadowRoot?.appendChild(button);
    testComponent.shadowRoot?.appendChild(tooltip);
  });

  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();

  await expect(tooltip).toHaveClass(/hydrated/);
  await expect(tooltip).toBeVisible();
});

regressionTest('renders in slot', async ({ mount, page }) => {
  await mount(`
    <ix-blind>
      <ix-tooltip for=".test">tooltip</ix-tooltip>
      <ix-button class="test">button</ix-button>
    </ix-blind>
  `);

  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();

  await expect(tooltip).toHaveClass(/hydrated/);
  await expect(tooltip).toBeVisible();
});

regressionTest.describe('a11y', () => {
  regressionTest('closes on ESC', async ({ mount, page }) => {
    await mount(`
      <ix-tooltip for=".test">tooltip</ix-tooltip>
      <ix-button class="test"></ix-button>
    `);
    const button = page.locator('ix-button');
    await button.hover();
    page.keyboard.down('Escape');
    const tooltip = page.locator('ix-tooltip');
    await expect(tooltip).not.toBeVisible();
  });
});

regressionTest('show tooltip after delay', async ({ mount, page }) => {
  await mount(`
    <ix-tooltip for=".test" show-delay="1000">tooltip</ix-tooltip>
    <ix-button class="test">button</ix-button>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();
  await expect(tooltip).not.toBeVisible();
  await page.waitForTimeout(1000);
  await expect(tooltip).toBeVisible();
});

regressionTest('hide tooltip after delay', async ({ mount, page }) => {
  await mount(`
    <div style="margin: 2rem">
      <ix-tooltip for=".test" hide-delay="1000">tooltip</ix-tooltip>
      <ix-button class="test">button</ix-button>
    </div>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();
  await expect(tooltip).toBeVisible();
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1000);
  await expect(tooltip).not.toBeVisible();
});

regressionTest(
  'avoid double visibility request by focusin event',
  async ({ mount, page }) => {
    await mount(`
    <ix-menu>
      <ix-menu-item>Item 1</ix-menu-item>
      <ix-menu-item>Item 2</ix-menu-item>
    </ix-menu>
  `);

    const menuItem1 = page.locator('ix-menu-item:nth-child(1)');
    const menuItem2 = page.locator('ix-menu-item:nth-child(2)');

    await menuItem1.hover();
    await page.waitForTimeout(5);
    await menuItem1.click();
    await page.waitForTimeout(200);
    await expect(menuItem1.locator('ix-tooltip')).toBeVisible();

    await menuItem2.hover();
    await page.waitForTimeout(5);
    await menuItem2.click();
    await page.waitForTimeout(200);
    await expect(menuItem2.locator('ix-tooltip')).toBeVisible();

    await menuItem1.hover();
    await page.waitForTimeout(5);
    await menuItem1.click();
    await page.waitForTimeout(200);
    await expect(menuItem1.locator('ix-tooltip')).toBeVisible();

    await page.mouse.move(0, 0);
    await page.waitForTimeout(200);

    await expect(menuItem1.locator('ix-tooltip')).not.toBeVisible();
    await expect(menuItem2.locator('ix-tooltip')).not.toBeVisible();
  }
);
