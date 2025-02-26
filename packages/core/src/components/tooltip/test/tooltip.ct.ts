/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-tooltip for=".test">tooltip</ix-tooltip>
    <ix-button class="test">button</ix-button>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();

  await expect(tooltip).toHaveClass(/hydrated/);
  await expect(tooltip).toHaveClass(/visible/);
});

test('renders in shadow DOM', async ({ mount, page }) => {
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
  await expect(tooltip).toHaveClass(/visible/);
});

test('renders in slot', async ({ mount, page }) => {
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
  await expect(tooltip).toHaveClass(/visible/);
});

test.describe('a11y', () => {
  test('closes on ESC', async ({ mount, page }) => {
    await mount(`
      <ix-tooltip for=".test">tooltip</ix-tooltip>
      <ix-button class="test"></ix-button>
    `);
    const button = page.locator('ix-button');
    await button.hover();
    page.keyboard.down('Escape');
    const tooltip = page.locator('ix-tooltip');
    await expect(tooltip).not.toHaveClass(/visible/);
  });
});

test('show tooltip after delay', async ({ mount, page }) => {
  await mount(`
    <ix-tooltip for=".test" show-delay="1000">tooltip</ix-tooltip>
    <ix-button class="test">button</ix-button>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();
  await expect(tooltip).not.toHaveClass(/visible/);
  await page.waitForTimeout(1000);
  await expect(tooltip).toHaveClass(/visible/);
});

test('hide tooltip after delay', async ({ mount, page }) => {
  await mount(`
    <div style="margin: 2rem">
      <ix-tooltip for=".test" hide-delay="1000">tooltip</ix-tooltip>
      <ix-button class="test">button</ix-button>
    </div>
  `);
  const tooltip = page.locator('ix-tooltip');
  const button = page.locator('ix-button');

  await button.hover();
  await expect(tooltip).toHaveClass(/visible/);
  await page.mouse.move(0, 0);
  await page.waitForTimeout(1000);
  await expect(tooltip).not.toHaveClass(/visible/);
});

test('avoid double visibility request by focusin event', async ({
  mount,
  page,
}) => {
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
  await expect(menuItem1.locator('ix-tooltip')).toHaveClass(/visible/);

  await menuItem2.hover();
  await page.waitForTimeout(5);
  await menuItem2.click();
  await page.waitForTimeout(200);
  await expect(menuItem2.locator('ix-tooltip')).toHaveClass(/visible/);

  await menuItem1.hover();
  await page.waitForTimeout(5);
  await menuItem1.click();
  await page.waitForTimeout(200);
  await expect(menuItem1.locator('ix-tooltip')).toHaveClass(/visible/);

  await page.mouse.move(0, 0);
  await page.waitForTimeout(200);

  await expect(menuItem1.locator('ix-tooltip')).not.toHaveClass(/visible/);
  await expect(menuItem2.locator('ix-tooltip')).not.toHaveClass(/visible/);
});

test.describe('handles all reference types', () => {
  const testButton = async (page: Page) => {
    const tooltip = page.locator('#tooltip');
    const button = page.locator('#button');

    await button.hover();
    await expect(tooltip).toHaveClass(/visible/);

    await page.mouse.move(0, 0);
    await expect(tooltip).not.toHaveClass(/visible/);
  };

  test.beforeEach(async ({ mount }) => {
    await mount(`
      <div style="margin: 2rem">
        <ix-tooltip id="tooltip">Tooltip</ix-tooltip>
        <ix-button id="button">Button</ix-button>
      </div>
    `);
  });

  test('handles string', async ({ page }) => {
    await page.evaluate(() => {
      const tooltip = document.getElementById(
        'tooltip'
      ) as HTMLIxTooltipElement;
      tooltip.for = '#button';
    });

    await testButton(page);
  });

  test('handles element', async ({ page }) => {
    await page.evaluate(() => {
      const tooltip = document.getElementById(
        'tooltip'
      ) as HTMLIxTooltipElement;
      const button = document.getElementById('button') as HTMLIxButtonElement;
      tooltip.for = button;
    });

    await testButton(page);
  });

  test('handles promise', async ({ page }) => {
    await page.evaluate(() => {
      const tooltip = document.getElementById(
        'tooltip'
      ) as HTMLIxTooltipElement;
      const button = document.getElementById('button') as HTMLIxButtonElement;
      tooltip.for = Promise.resolve(button);
    });

    await testButton(page);
  });
});

test.describe('handles multiple references', () => {
  const testMultipleButtons = async (page: Page) => {
    const tooltip = page.locator('#tooltip');
    const button1 = page.locator('#button1');
    const button2 = page.locator('#button2');
    const button3 = page.locator('#button3');

    await button1.hover();
    await expect(tooltip).toHaveClass(/visible/);

    await button2.hover();
    await expect(tooltip).toHaveClass(/visible/);

    await button3.hover();
    await expect(tooltip).toHaveClass(/visible/);

    await page.mouse.move(0, 0);
    await expect(tooltip).not.toHaveClass(/visible/);
  };

  test.beforeEach(async ({ mount }) => {
    await mount(`
      <div style="margin: 2rem">
        <ix-tooltip id="tooltip">Tooltip</ix-tooltip>
        <ix-button id="button1">Button1</ix-button>
        <ix-button id="button2">Button2</ix-button>
        <ix-button id="button3">Button3</ix-button>
      </div>
    `);
  });

  test('handles string array', async ({ page }) => {
    await page.evaluate(() => {
      const tooltip = document.getElementById(
        'tooltip'
      ) as HTMLIxTooltipElement;
      tooltip.for = ['#button1', '#button2', '#button3'];
    });

    await testMultipleButtons(page);
  });

  test('handles element array', async ({ page }) => {
    await page.evaluate(() => {
      const tooltip = document.getElementById(
        'tooltip'
      ) as HTMLIxTooltipElement;
      const button1 = document.getElementById('button1') as HTMLIxButtonElement;
      const button2 = document.getElementById('button2') as HTMLIxButtonElement;
      const button3 = document.getElementById('button3') as HTMLIxButtonElement;
      tooltip.for = [button1, button2, button3];
    });

    await testMultipleButtons(page);
  });

  test('handles promise array', async ({ page }) => {
    await page.evaluate(() => {
      const tooltip = document.getElementById(
        'tooltip'
      ) as HTMLIxTooltipElement;
      const button1 = document.getElementById('button1') as HTMLIxButtonElement;
      const button2 = document.getElementById('button2') as HTMLIxButtonElement;
      const button3 = document.getElementById('button3') as HTMLIxButtonElement;
      tooltip.for = [
        Promise.resolve(button1),
        Promise.resolve(button2),
        Promise.resolve(button3),
      ];
    });

    await testMultipleButtons(page);
  });

  test('handles mixed array', async ({ page }) => {
    await page.evaluate(() => {
      const tooltip = document.getElementById(
        'tooltip'
      ) as HTMLIxTooltipElement;
      const button2 = document.getElementById('button2') as HTMLIxButtonElement;
      const button3 = document.getElementById('button3') as HTMLIxButtonElement;
      tooltip.for = ['#button1', button2, Promise.resolve(button3)];
    });

    await testMultipleButtons(page);
  });
});
