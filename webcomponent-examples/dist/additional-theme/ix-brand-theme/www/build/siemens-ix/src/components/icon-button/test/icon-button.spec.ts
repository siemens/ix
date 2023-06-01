/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { newSpecPage } from '@stencil/core/testing';
import { IconButton } from '../icon-button';

describe('icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconButton],
      html: `<ix-icon-button icon="rocket" disabled></ix-icon-button>`,
    });

    await page.waitForChanges();
    const btn = page.doc.querySelector('ix-icon-button');
    expect(btn.className).toContain('disabled');
  });
});
