/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator } from '@playwright/test';
import { iconLocation } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

const TRANSPARENT = 'rgba(0, 0, 0, 0)';

const expectDividerVisible = async (keyValue: Locator) => {
  await expect(keyValue).toHaveCSS('border-bottom-style', 'solid');
  await expect(keyValue).not.toHaveCSS('border-bottom-width', '0px');
  await expect(keyValue).not.toHaveCSS('border-bottom-color', TRANSPARENT);
};

const expectDividerHidden = async (keyValue: Locator) => {
  await expect(keyValue).toHaveCSS('border-bottom-color', TRANSPARENT);
};

const getHeight = (keyValue: Locator) =>
  keyValue.evaluate((element) => element.getBoundingClientRect().height);

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(
    `
    <div>
      <ix-key-value label="Label" value="Value"></ix-key-value>
      <ix-key-value label="Label" label-position="left" value="Value" divider="false"></ix-key-value>
      <ix-key-value id="with-icon" icon="location" label="Label" value="Value"></ix-key-value>
    </div>
  `,
    { icons: { iconLocation } }
  );
  const withIcon = page.locator('#with-icon');
  await withIcon.evaluate((element: HTMLIxKeyValueElement) => {
    element.ariaLabelIcon = 'Location';
  });
  await expect(withIcon.getByRole('img', { name: 'Location' })).toBeVisible();

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-key-value label="Label" value="Value"></ix-key-value>`);
  const keyValue = page.locator('ix-key-value');
  await expect(keyValue).toHaveAttribute('hydrated');
  await expect(keyValue).toContainText('Label');
  await expect(keyValue).toContainText('Value');
});

regressionTest(
  'shows a divider by default for every label position',
  async ({ mount, page }) => {
    await mount(`
      <div>
        <ix-key-value id="top" label="Label" value="Value"></ix-key-value>
        <ix-key-value id="left" label="Label" label-position="left" value="Value"></ix-key-value>
      </div>
    `);

    await expectDividerVisible(page.locator('#top'));
    await expectDividerVisible(page.locator('#left'));
  }
);

regressionTest(
  'hides the divider for every label position',
  async ({ mount, page }) => {
    await mount(`
      <div>
        <ix-key-value id="top" label="Label" value="Value" divider="false"></ix-key-value>
        <ix-key-value id="left" label="Label" label-position="left" value="Value" divider="false"></ix-key-value>
      </div>
    `);

    await expectDividerHidden(page.locator('#top'));
    await expectDividerHidden(page.locator('#left'));
  }
);

regressionTest(
  'keeps the same height when the divider is toggled',
  async ({ mount, page }) => {
    await mount(
      `<ix-key-value label="Label" label-position="left" value="Value"></ix-key-value>`
    );
    const keyValue = page.locator('ix-key-value');
    await expectDividerVisible(keyValue);
    const heightWithDivider = await getHeight(keyValue);

    await keyValue.evaluate((element: HTMLIxKeyValueElement) => {
      element.divider = false;
    });

    await expectDividerHidden(keyValue);
    expect(await getHeight(keyValue)).toBe(heightWithDivider);
  }
);

regressionTest(
  'shows the divider with custom value content',
  async ({ mount, page }) => {
    await mount(`
      <ix-key-value label="Label" label-position="left">
        <input
          class="ix-form-control"
          aria-label="Custom value"
          slot="custom-value"
        />
      </ix-key-value>
    `);

    await expect(page.getByLabel('Custom value')).toBeVisible();
    await expectDividerVisible(page.locator('ix-key-value'));
  }
);

regressionTest(
  'keeps a hidden divider hidden in forced colors mode without shifting the layout',
  async ({ mount, page }) => {
    await page.emulateMedia({ forcedColors: 'active' });
    await mount(`
      <div>
        <ix-key-value id="shown" label="Label" label-position="left" value="Value"></ix-key-value>
        <div id="after-shown"></div>
        <ix-key-value id="hidden" label="Label" label-position="left" value="Value" divider="false"></ix-key-value>
        <div id="after-hidden"></div>
      </div>
    `);
    const hidden = page.locator('#hidden');
    await expect(hidden).toHaveAttribute('hydrated');

    await expect(page.locator('#shown')).toHaveCSS(
      'border-bottom-style',
      'solid'
    );
    await expect(hidden).toHaveCSS('border-bottom-style', 'none');

    const top = (selector: string) =>
      page
        .locator(selector)
        .evaluate((element) => element.getBoundingClientRect().top);
    const pitch = async (id: string) =>
      (await top(`#after-${id}`)) - (await top(`#${id}`));
    expect(await pitch('hidden')).toBe(await pitch('shown'));
  }
);
