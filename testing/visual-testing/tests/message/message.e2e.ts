/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, type Page } from '@playwright/test';
import { regressionTest, type Mount } from '@utils/test';
import { IxModalSize } from '@siemens/ix';
import { iconInfo } from '@siemens/ix-icons/icons';

/**
 * Runs in the browser (passed to `evaluateHandle`). Keeps nesting shallow for static analysis.
 */
function installShowMessageClickHandler(
  element: HTMLElement,
  opt: { icon: typeof iconInfo; size: IxModalSize }
): void {
  element.addEventListener('click', function showMessageOnClick() {
    window
      .showMessage({
        messageTitle: 'Example title',
        message: 'message',
        icon: opt.icon,
        size: opt.size,
        centered: true,
        actions: [],
      })
      .catch(function onShowMessageRejection() {
        return undefined;
      });
  });
}

async function runMessageSizeScreenshotTest(
  page: Page,
  mount: Mount,
  size: IxModalSize
): Promise<void> {
  await mount(`<ix-button>Show Message</ix-button>`);

  const button = page.locator('ix-button');
  await button.evaluateHandle(installShowMessageClickHandler, {
    icon: iconInfo,
    size,
  });

  await button.click();

  const modal = page.locator('ix-modal');
  const dialog = modal.locator('dialog');
  await expect(modal).toHaveClass(/hydrated/);
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveCSS('opacity', '1');

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
}

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
    await runMessageSizeScreenshotTest(page, mount, size);
  });
});
