/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { newSpecPage } from '@stencil/core/testing';
import { MenuItem } from '../menu-item';
//@ts-ignore
import { createMutationObserver } from '../../utils/mutation-observer';
jest.mock('../../utils/mutation-observer');

describe('ix-menu-item', () => {
  beforeEach(() => {
    //@ts-ignore
    createMutationObserver = jest.fn(() => ({
      observe: jest.fn(),
    }));
  });
  it('should have a title', async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ix-menu-item>Example Title</ix-menu-item>`,
    });

    await page.waitForChanges();

    const item = page.doc.querySelector('ix-menu-item');

    const avatarElement = item.shadowRoot.querySelector('button');

    expect(avatarElement.title).toBe('Example Title');
  });

  it('should have a title from innerText', async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ix-menu-item><span>Example Title</span></ix-menu-item>`,
    });

    await page.waitForChanges();

    const item = page.doc.querySelector('ix-menu-item');

    const avatarElement = item.shadowRoot.querySelector('button');

    expect(avatarElement.title).toBe('Example Title');
  });

  it('should change title after content change', async () => {
    const page = await newSpecPage({
      components: [MenuItem],
      html: `<ix-menu-item>Example Title</ix-menu-item>`,
    });

    await page.waitForChanges();
    const item = page.doc.querySelector('ix-menu-item');
    item.innerText = 'Updated Title';
    const avatarElement = item.shadowRoot.querySelector('button');
    expect(avatarElement.title).toStrictEqual('Example Title');
  });
});
