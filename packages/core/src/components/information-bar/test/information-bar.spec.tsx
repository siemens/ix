/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { InformationBar } from '../information-bar';

describe('information-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InformationBar],
      html: `<information-bar></information-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <information-bar>
        <mock:shadow-root>
          <div class="bar-container"></div>
          <div class="icon-container"></div>
        </mock:shadow-root>
      </information-bar>
    `);
  });
});
