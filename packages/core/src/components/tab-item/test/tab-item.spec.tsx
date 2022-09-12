/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { TabItem } from '../tab-item';

describe('tab-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TabItem],
      html: `
      <ix-tab-item>
        Some text
      </ix-tab-item>`,
    });
    expect(page.root).toEqualHtml(`<ix-tab-item class="bottom" tabindex="0">
    <div class="text">
      Some text
    </div>
  </ix-tab-item>`);
  });
});
