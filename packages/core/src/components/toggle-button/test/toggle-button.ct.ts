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

const resolveColor = (token: string) => {
  const probe = document.createElement('div');
  probe.style.color = `var(${token})`;
  document.body.appendChild(probe);
  const value = getComputedStyle(probe).color;
  probe.remove();
  return value;
};

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-toggle-button>Default</ix-toggle-button>
    <ix-toggle-button pressed>Pressed</ix-toggle-button>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-toggle-button>Toggle</ix-toggle-button>`);
  await expect(page.locator('ix-toggle-button')).toHaveAttribute('hydrated');
  await expect(
    page.locator('ix-toggle-button').getByRole('button')
  ).toHaveAttribute('aria-pressed', 'false');
});

regressionTest(
  'pressed secondary button uses the accent active text and border',
  async ({ mount, page }) => {
    await mount(
      `<ix-toggle-button variant="secondary" pressed>Pressed</ix-toggle-button>`
    );

    const accentActiveText = await page.evaluate(
      resolveColor,
      '--si-sys-color-text-accent-active'
    );
    const accentActiveBorder = await page.evaluate(
      resolveColor,
      '--si-sys-color-border-accent-active'
    );

    const button = page.locator('ix-toggle-button').getByRole('button');
    await expect(button).toHaveAttribute('aria-pressed', 'true');
    await expect(button).toHaveCSS('color', accentActiveText);
    await expect(button).toHaveCSS('border-top-color', accentActiveBorder);
  }
);
