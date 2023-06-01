/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { ApplicationHeader } from '../application-header';

describe('ix-application-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ApplicationHeader],
      html: `<ix-application-header name="Test App">
        <div slot="logo">LOGO</div>
      </ix-application-header>`,
    });
    expect(page.root).toEqualHtml(`
    <ix-application-header name="Test App">
      <mock:shadow-root>
        <div class="logo">
          <slot name="logo"></slot>
        </div>
        <div class="name">
          Test App
        </div>
        <slot></slot>
      </mock:shadow-root>
      <div slot="logo">
        LOGO
      </div>
    </ix-application-header>
    `);
  });
});
