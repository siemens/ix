/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { CuiToggle } from '../toggle';

describe('ix-toggle', () => {
  let page: SpecPage;

  it('should toggle', async () => {
    page = await newSpecPage({
      components: [CuiToggle],
      html: '<ix-toggle></ix-toggle>',
    });

    await page.waitForChanges();

    (
      page.doc.querySelector('ix-toggle > label > input') as HTMLElement
    ).dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(page.doc.querySelector('ix-toggle').checked).toBeTruthy();
    expect(page.doc.querySelector('ix-toggle').className).toContain('checked');
  });

  it('should be disabled', async () => {
    page = await newSpecPage({
      components: [CuiToggle],
      html: '<ix-toggle disabled></ix-toggle>',
    });

    await page.waitForChanges();

    (
      page.doc.querySelector('ix-toggle > label > input') as HTMLElement
    ).dispatchEvent(new Event('change'));
    await page.waitForChanges();

    expect(page.doc.querySelector('ix-toggle').checked).toBeFalsy();
    expect(page.doc.querySelector('ix-toggle').className).toContain('disabled');
  });
});
