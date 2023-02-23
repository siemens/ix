/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { IxPagination } from '../pagination';

describe('ix-pagination', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IxPagination],
      html: `<ix-pagination></ix-pagination>`,
    });
    expect(page.root).toEqualHtml(`
      <ix-pagination>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ix-pagination>
    `);
  });
});
