/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { Modal } from '../modal';

describe('modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Modal],
      html: '<ix-modal></ix-modal>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
