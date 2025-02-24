/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { test } from '@utils/test';
import { ElementReference } from 'src/components/utils/element-reference';

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

test('handles all for input types', async ({ mount, page }) => {
  await mount(`
    <div style="margin: 2rem">
      <ix-tooltip id="tooltip1">tooltip1</ix-tooltip>
      <ix-tooltip id="tooltip2">tooltip2</ix-tooltip>
      <ix-tooltip id="tooltip3">tooltip3</ix-tooltip>
      <ix-tooltip id="tooltip4">tooltip4</ix-tooltip>
      <ix-tooltip id="tooltip5">tooltip5</ix-tooltip>
      <ix-tooltip id="tooltip6">tooltip6</ix-tooltip>
      <ix-tooltip id="tooltip7">tooltip7</ix-tooltip>

      <ix-button id="button1-1">button1</ix-button>
      <ix-button id="button2-1">button2</ix-button>
      <ix-button id="button3-1">button3</ix-button>
      <ix-button id="button4-1">button4-1</ix-button>
      <ix-button id="button4-2">button4-2</ix-button>
      <ix-button id="button5-1">button5-1</ix-button>
      <ix-button id="button5-2">button5-2</ix-button>
      <ix-button id="button6-1">button6-1</ix-button>
      <ix-button id="button6-2">button6-2</ix-button>
      <ix-button id="button7-1">button7-1</ix-button>
      <ix-button id="button7-2">button7-2</ix-button>
      <ix-button id="button7-3">button7-3</ix-button>
    </div>
  `);

  const ids = await page.evaluate(() => {
    const map: {
      tooltip: HTMLIxTooltipElement;
      buttons: HTMLIxButtonElement[];
    }[] = [];

    for (let i = 1; i <= 7; i++) {
      const buttons: HTMLIxButtonElement[] = [];
      const buttonEntries = [1, 1, 1, 2, 2, 2, 3][i - 1];

      for (let j = 1; j <= buttonEntries; j++) {
        buttons.push(
          document.getElementById(`button${i}-${j}`) as HTMLIxButtonElement
        );
      }

      map.push({
        tooltip: document.getElementById(`tooltip${i}`) as HTMLIxTooltipElement,
        buttons,
      });
    }

    const getString = (buttons: HTMLIxButtonElement[]) => {
      if (buttons.length === 1) {
        return '#' + buttons[0].id;
      } else {
        return buttons.map((button) => '#' + button.id);
      }
    };

    const getElement = (buttons: HTMLIxButtonElement[]) => {
      if (buttons.length === 1) {
        return buttons[0];
      } else {
        return buttons;
      }
    };

    const getPromise = (buttons: HTMLIxButtonElement[]) => {
      if (buttons.length === 1) {
        return Promise.resolve(buttons[0]);
      } else {
        return buttons.map((button) => Promise.resolve(button));
      }
    };

    const getMixture = (buttons: HTMLIxButtonElement[]) => {
      const references: ElementReference[] = [];
      buttons.forEach((button, index) => {
        if (index === 0) {
          references.push('#' + button.id);
        } else if (index === 1) {
          references.push(button);
        } else {
          references.push(Promise.resolve(button));
        }
      });
      return references;
    };

    let count = 1;
    for (const { tooltip, buttons } of map) {
      if (count === 1 || count === 4) {
        tooltip.for = getString(buttons);
      } else if (count === 2 || count === 5) {
        tooltip.for = getElement(buttons);
      } else if (count === 3 || count === 6) {
        tooltip.for = getPromise(buttons);
      } else {
        tooltip.for = getMixture(buttons);
      }

      count++;
    }

    return map.map(({ tooltip, buttons }) => ({
      tooltipId: '#' + tooltip.id,
      buttonIds: buttons.map((button) => '#' + button.id),
    }));
  });

  // Test each tooltip
  for (const { tooltipId, buttonIds } of ids) {
    const tooltipElement = page.locator(tooltipId);

    for (const buttonId of buttonIds) {
      const buttonElement = page.locator(buttonId);

      await buttonElement.hover();
      await expect(tooltipElement).toHaveClass(/visible/);
      await page.mouse.move(0, 0);
      await expect(tooltipElement).not.toHaveClass(/visible/);
    }
  }
});
