/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newE2EPage } from '@stencil/core/testing';

describe('ix-pagination', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ix-pagination></ix-pagination>');

    const element = await page.find('ix-pagination');
    expect(element).toHaveClass('hydrated');
  });
});
