/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `<ix-chat-trace-item-section heading="Input">SELECT 1</ix-chat-trace-item-section>`
  );
  await expect(page.locator('ix-chat-trace-item-section')).toHaveAttribute(
    'hydrated'
  );
});

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(`
    <div>
      <ix-chat-trace-item-section heading="Input">SELECT 1</ix-chat-trace-item-section>
      <ix-chat-trace-item-section heading="Output" collapsible>42 rows</ix-chat-trace-item-section>
      <ix-chat-trace-item-section heading="Findings" collapsible expanded>Two alarms</ix-chat-trace-item-section>
      <ix-chat-trace-item-section>Without heading</ix-chat-trace-item-section>
    </div>
  `);
  await expect(
    page.locator('ix-chat-trace-item-section').first()
  ).toHaveAttribute('hydrated');

  const results = await makeAxeBuilder().include('#mount').analyze();
  expect(results.violations).toEqual([]);
});

regressionTest(
  'shows heading and content of a non-collapsible section',
  async ({ mount, page }) => {
    await mount(
      `<ix-chat-trace-item-section heading="Input">SELECT 1</ix-chat-trace-item-section>`
    );

    await expect(page.getByText('Input', { exact: true })).toBeVisible();
    await expect(page.getByText('SELECT 1')).toBeVisible();
    await expect(page.getByRole('button')).toHaveCount(0);
  }
);

regressionTest(
  'shows only the content when no heading is set',
  async ({ mount, page }) => {
    await mount(
      `<ix-chat-trace-item-section collapsible>Plain content</ix-chat-trace-item-section>`
    );

    await expect(page.getByText('Plain content')).toBeVisible();
    await expect(page.getByRole('button')).toHaveCount(0);
  }
);

regressionTest(
  'toggles a collapsible section with the keyboard and emits expandedChange',
  async ({ mount, page }) => {
    await mount(
      `<ix-chat-trace-item-section heading="Output" collapsible><p>42 rows</p></ix-chat-trace-item-section>`
    );
    const events = await page
      .locator('ix-chat-trace-item-section')
      .evaluateHandle((host) => {
        const details: boolean[] = [];
        host.addEventListener('expandedChange', (event) =>
          details.push((event as CustomEvent<boolean>).detail)
        );
        return details;
      });

    const toggle = page.getByRole('button', { name: 'Output' });
    const content = page.getByText('42 rows');

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(content).toBeHidden();

    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(content).toBeVisible();

    await page.keyboard.press('Space');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(content).toBeHidden();

    expect(await events.evaluate((value) => value)).toEqual([true, false]);
  }
);

regressionTest(
  'keeps a collapsible section collapsed when expandedChange is prevented',
  async ({ mount, page }) => {
    await mount(
      `<ix-chat-trace-item-section heading="Output" collapsible><p>42 rows</p></ix-chat-trace-item-section>`
    );
    await page
      .locator('ix-chat-trace-item-section')
      .evaluate((element) =>
        element.addEventListener('expandedChange', (event) =>
          event.preventDefault()
        )
      );

    const toggle = page.getByRole('button', { name: 'Output' });
    await toggle.click();

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByText('42 rows')).toBeHidden();
  }
);
