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

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <div>
      <ix-link-button url="https://ix.siemens.io/">IX home</ix-link-button>
      <ix-link-button disabled url="https://ix.siemens.io/">
        IX home disabled
      </ix-link-button>
    </div>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    '<ix-link-button url="https://ix.siemens.io/">IX home</ix-link-button>'
  );

  const linkButton = page.locator('ix-link-button');
  const link = linkButton.getByRole('link', { name: 'IX home' });

  await expect(linkButton).toHaveAttribute('hydrated');
  await expect(link).toHaveAttribute('href', 'https://ix.siemens.io/');
  await expect(link).not.toHaveAttribute('title');
  await expect(link).toHaveAttribute('aria-disabled', 'false');
  await expect(link).not.toHaveAttribute('tabindex');
});

regressionTest(
  'skips disabled link buttons during keyboard navigation',
  async ({ mount, page }) => {
    await mount(`
      <button>Previous</button>
      <ix-link-button disabled url="https://ix.siemens.io/">IX home</ix-link-button>
      <button>Next</button>
    `);

    const linkButton = page.locator('ix-link-button');
    const link = linkButton.getByRole('link', { name: 'IX home' });
    const previousButton = page.getByRole('button', { name: 'Previous' });
    const nextButton = page.getByRole('button', { name: 'Next' });

    await expect(linkButton).toHaveAttribute('hydrated');
    await expect(link).toHaveAttribute('aria-disabled', 'true');
    await expect(link).toHaveAttribute('tabindex', '-1');
    await expect(link).not.toHaveAttribute('href');

    await previousButton.focus();
    await page.keyboard.press('Tab');

    await expect(nextButton).toBeFocused();
  }
);

regressionTest(
  'does not propagate clicks while disabled',
  async ({ mount, page }) => {
    await mount(`
      <div id="container">
        <ix-link-button disabled url="https://ix.siemens.io/">IX home</ix-link-button>
      </div>
    `);

    const linkButton = page.locator('ix-link-button');
    await expect(linkButton).toHaveAttribute('hydrated');

    await page.evaluate(() => {
      const clicks: string[] = [];
      (window as any).__clicks = clicks;
      document
        .querySelector('ix-link-button')!
        .addEventListener('click', () => clicks.push('host'));
      document
        .querySelector('#container')!
        .addEventListener('click', () => clicks.push('container'));
    });

    await linkButton
      .getByRole('link', { name: 'IX home' })
      .click({ force: true });
    await linkButton.evaluate((element) =>
      element.shadowRoot!.querySelector('a')!.click()
    );

    expect(await page.evaluate(() => (window as any).__clicks)).toEqual([]);
  }
);
