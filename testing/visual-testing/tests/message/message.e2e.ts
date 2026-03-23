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
import { IxModalSize } from '@siemens/ix';
import { iconInfo } from '@siemens/ix-icons/icons';

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
  regressionTest(`message size ${size}`, async ({ page, mount }) => {
    await mount(`<ix-button>Show Message</ix-button>`);

    const button = page.locator('ix-button');
    await button.evaluateHandle(
      (el, opt) => {
        el.addEventListener('click', () => {
          void window.showMessage({
            messageTitle: 'Example title',
            message: 'message',
            icon: opt.icon,
            size: opt.size,
            centered: true,
            actions: [],
          });
        });
      },
      {
        icon: iconInfo,
        size,
      }
    );

    await button.click();

    const modal = page.locator('ix-modal');
    const dialog = modal.locator('dialog');
    await expect(modal).toHaveClass(/hydrated/);
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveCSS('opacity', '1');

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
