/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, regressionTest } from '@utils/test';

regressionTest(
  'text fields keep the focus background when the pointer leaves',
  async ({ mount, page }) => {
    await mount(`
      <ix-input label="Input"></ix-input>
      <ix-textarea label="Textarea"></ix-textarea>
      <ix-number-input label="Number"></ix-number-input>
    `);

    const focusBackground = await page.evaluate(() => {
      const probe = document.createElement('div');
      probe.style.backgroundColor = 'var(--si-sys-color-background-4)';
      document.body.appendChild(probe);
      const value = getComputedStyle(probe).backgroundColor;
      probe.remove();
      return value;
    });

    for (const field of [
      page.getByRole('textbox', { name: 'Input' }),
      page.getByRole('textbox', { name: 'Textarea' }),
      page.getByRole('spinbutton', { name: 'Number' }),
    ]) {
      await field.focus();
      await page.mouse.move(0, 0);
      await expect(field).toHaveCSS('background-color', focusBackground);
    }
  }
);
