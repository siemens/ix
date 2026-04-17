/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { iconStar } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-pane></ix-pane>`);
  const pane = page.locator('ix-pane');
  await expect(pane).toHaveClass(/hydrated/);
});

regressionTest('expanded', async ({ mount, page }) => {
  await mount(
    `
    <ix-pane
      heading="LEFT"
      composition="left"
      icon="star"
      expanded="true"
    >
      <h1>Test Heading</h1>
    </ix-pane>
  `,
    {
      icons: { iconStar },
    }
  );

  const title = page.locator('h1');
  await expect(title).toBeVisible();
});

regressionTest('prevent pane expansion', async ({ mount, page }) => {
  await mount(
    `
    <ix-pane
      heading="LEFT"
      composition="left"
      variant="inline"
      icon="star"
      expanded="false"
    >
      <h1>Test Heading</h1>
    </ix-pane>
  `,
    {
      icons: { iconStar },
    }
  );

  const pane = page.locator('ix-pane');

  await page.evaluate(() => {
    const paneElement = document.querySelector('ix-pane');
    paneElement?.addEventListener('expandedChanged', (event: Event) => {
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

regressionTest('close on click outside', async ({ page, mount }) => {
  await mount(`
    <ix-pane
      expanded="true"
      close-on-click-outside="true"
    >
      <button aria-label="test content">Test</button>
    </ix-pane>
    <button>Element outside</button>`);

  const pane = page.locator('ix-pane');
  await expect(pane).toHaveClass(/hydrated/);

  const exampleContent = page.getByLabel('test content');
  await expect(exampleContent).toBeVisible();

  await page.getByText('Element outside').click();
  await expect(exampleContent).not.toBeVisible();
});

regressionTest(
  'should not has listener when not expanded',
  async ({ page, mount }) => {
    await mount('');

    const removeEventListenerCalled = page.evaluate(() => {
      return new Promise<string>((resolve) => {
        window.removeEventListener = (eventName: string) => {
          resolve(eventName);
        };
      });
    });

    await mount(`
    <ix-pane
      expanded="true"
      close-on-click-outside="true"
      aria-label-collapse-close-button="myclose"
    >
      <button aria-label="test content">Test</button>
    </ix-pane>
    <button>Element outside</button>
    `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    await pane.getByLabel('myclose').click();

    const exampleContent = page.getByLabel('test content');
    await expect(exampleContent).not.toBeVisible();

    // Wait for the removeEventListener to be called.
    // Not the perfect expect condition could potentially lead to false positives
    // with additional listeners
    await expect(removeEventListenerCalled).resolves.toBe('click');
  }
);

regressionTest(
  'icon direction reacts correctly to slot and expanded state for all compositions',
  async ({ mount, page }) => {
    const paneSlots = [
      { slot: 'left', expanded: false, expected: 'double-chevron-right' },
      { slot: 'left', expanded: true, expected: 'double-chevron-left' },
      { slot: 'right', expanded: false, expected: 'double-chevron-left' },
      { slot: 'right', expanded: true, expected: 'double-chevron-right' },
      { slot: 'top', expanded: false, expected: 'double-chevron-down' },
      { slot: 'top', expanded: true, expected: 'double-chevron-up' },
      { slot: 'bottom', expanded: false, expected: 'double-chevron-up' },
      { slot: 'bottom', expanded: true, expected: 'double-chevron-down' },
    ];

    for (const paneSlot of paneSlots) {
      await mount(`
        <ix-pane
          heading="TEST"
          slot="${paneSlot.slot}"
          expanded="${paneSlot.expanded}"
        ></ix-pane>
      `);

      const pane = page.locator('ix-pane');
      await expect(pane).toHaveClass(/hydrated/);

      const iconButton = pane.locator('ix-icon-button');
      await expect(iconButton).toBeVisible();

      const iconValue = await iconButton.evaluate(
        (el: HTMLIxIconButtonElement) => el.icon
      );

      expect(iconValue).toContain(paneSlot.expected);
    }
  }
);

regressionTest(
  'dispatchExpandedChangedEvent toggles and emits correct value',
  async ({ mount, page }) => {
    await mount(`
    <ix-pane
      heading="TEST"
      composition="left"
      expanded="false"
    ></ix-pane>
  `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    const emittedValue = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const pane = document.querySelector('ix-pane')!;

        pane.addEventListener(
          'expandedChanged',
          (event: CustomEvent<{ slot: string; expanded: boolean }>) => {
            resolve(event.detail.expanded);
          }
        );

        const button = pane.shadowRoot!.querySelector(
          'ix-icon-button'
        ) as HTMLElement;

        button.click();
      });
    });

    expect(emittedValue).toBe(true);

    const finalState = await pane.evaluate(
      (el: HTMLIxPaneElement) => el.expanded
    );

    expect(finalState).toBe(true);
  }
);

regressionTest(
  'pane closes with single click when expanded',
  async ({ mount, page }) => {
    await mount(`
    <ix-pane
      heading="TEST"
      composition="left"
      expanded="true"
    ></ix-pane>
  `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    const iconButton = pane.locator('ix-icon-button');

    await iconButton.click();

    const isExpanded = await pane.evaluate(
      (el: HTMLIxPaneElement) => el.expanded
    );

    expect(isExpanded).toBe(false);
  }
);
