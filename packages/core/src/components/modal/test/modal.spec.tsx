// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { newSpecPage } from '@stencil/core/testing';
import { Modal } from '../modal';

describe('modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Modal],
      html: `<ix-modal></ix-modal>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
