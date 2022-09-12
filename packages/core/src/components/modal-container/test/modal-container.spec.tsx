// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { newSpecPage } from '@stencil/core/testing';
import { ModalContainer } from '../modal-container';

describe('ix-modal-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModalContainer],
      html: `<ix-modal-container></ix-modal-container>`,
    });
    expect(page.root).toEqualHtml(`<ix-modal-container></ix-modal-container>`);
  });
});
