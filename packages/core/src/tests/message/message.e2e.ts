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
import { showMessage } from 'src/components/utils/modal/message';
import { IxModalSize } from 'src/components';
import { iconInfo } from '@siemens/ix-icons/icons';

declare global {
  interface Window {
    showMessage: typeof showMessage;
  }
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
    await mount(``);

    await page.evaluate(() => {
      return new Promise<void>((resolve) => {
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
        import * as ix from 'http://127.0.0.1:8080/www/build/index.esm.js';
        window.showMessage = ix.showMessage;
      `;

        document.body.appendChild(script);
        resolve();
      });
    });

    await page.waitForTimeout(500);

    await page.evaluate(
      ({ size, iconInfo }) => {
        window.showMessage({
          messageTitle: 'Example title',
          message: 'message',
          icon: iconInfo,
          size: size,
          centered: true,
          actions: [],
        });
      },
      { size, iconInfo }
    );

    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
