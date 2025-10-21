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
    await mount(``);

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
