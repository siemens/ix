/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { describe, expect, it } from 'vitest';

describe('ix-pagination', () => {
  it('overflow end select higher page', async () => {
    const { root, waitForChanges } = await render(
      <ix-pagination count={10}></ix-pagination>
    );
    const pagination = root as HTMLIxPaginationElement;
    const button = pagination.shadowRoot!.querySelectorAll('button')[5];
    button.click();
    await waitForChanges();
    expect(pagination.selectedPage).toBe(6);
  });

  it('overflow both select higher page', async () => {
    const { root, waitForChanges } = await render(
      <ix-pagination count={10}></ix-pagination>
    );
    const pagination = root as HTMLIxPaginationElement;
    pagination.selectedPage = 4;
    await waitForChanges();
    const button = pagination.shadowRoot!.querySelectorAll('button')[6];
    button.click();
    await waitForChanges();
    expect(pagination.selectedPage).toBe(9);
  });

  it('overflow both select lower page', async () => {
    const { root, waitForChanges } = await render(
      <ix-pagination count={10}></ix-pagination>
    );
    const pagination = root as HTMLIxPaginationElement;
    pagination.selectedPage = 5;
    await waitForChanges();
    const button = pagination.shadowRoot!.querySelectorAll('button')[1];
    button.click();
    await waitForChanges();
    expect(pagination.selectedPage).toBe(2);
  });

  it('overflow start select lower page', async () => {
    const { root, waitForChanges } = await render(
      <ix-pagination count={10}></ix-pagination>
    );
    const pagination = root as HTMLIxPaginationElement;
    pagination.selectedPage = 9;
    await waitForChanges();
    const button = pagination.shadowRoot!.querySelectorAll('button')[1];
    button.click();
    await waitForChanges();
    expect(pagination.selectedPage).toBe(3);
  });
});
