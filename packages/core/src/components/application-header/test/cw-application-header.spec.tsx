/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { ApplicationHeader } from '../application-header';

describe('ix-application-header', () => {
  it('desktop mode', async () => {
    const page = await newSpecPage({
      components: [ApplicationHeader],
      html: `<ix-application-header name="Test App">
        <div slot="logo">LOGO</div>
      </ix-application-header>`,
    });

    const header = page.doc.querySelector('ix-application-header');
    expect(header.className).toContain('breakpoint-lg');
  });
});
