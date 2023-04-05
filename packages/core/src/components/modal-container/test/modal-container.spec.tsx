/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { ModalContainer } from '../modal-container';

describe('ix-modal-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModalContainer],
      html: '<ix-modal-container></ix-modal-container>',
    });
    expect(page.root).toEqualHtml(
      '<ix-modal-container><div class="modal-stack"></div></ix-modal-container>'
    );
  });
});
