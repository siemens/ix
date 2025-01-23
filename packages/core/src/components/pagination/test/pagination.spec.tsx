/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { Pagination } from '../pagination';

describe('ix-pagination', () => {
  it('overflow end select higher page', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ix-pagination count="10"></ix-pagination>`,
    });
    const pagination = page.doc.querySelector('ix-pagination')!;
    const button = pagination.shadowRoot!.querySelectorAll('button')[5];
    button.click();
    expect(pagination.selectedPage).toBe(6);
  });

  it('overflow both select higher page', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ix-pagination count="10" selected-page="4"></ix-pagination>`,
    });
    const pagination = page.doc.querySelector('ix-pagination')!;
    const button = pagination.shadowRoot!.querySelectorAll('button')[6];
    button.click();
    expect(pagination.selectedPage).toBe(9);
  });

  it('overflow both select lower page', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ix-pagination count="10" selected-page="5"></ix-pagination>`,
    });
    const pagination = page.doc.querySelector('ix-pagination')!;
    const button = pagination.shadowRoot!.querySelectorAll('button')[1];
    button.click();
    expect(pagination.selectedPage).toBe(2);
  });

  it('overflow start select lower page', async () => {
    const page = await newSpecPage({
      components: [Pagination],
      html: `<ix-pagination count="10" selected-page="9"></ix-pagination>`,
    });
    const pagination = page.doc.querySelector('ix-pagination')!;
    const button = pagination.shadowRoot!.querySelectorAll('button')[1];
    button.click();
    expect(pagination.selectedPage).toBe(3);
  });
});
