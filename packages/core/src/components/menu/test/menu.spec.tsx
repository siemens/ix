/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { MenuItem } from '../../menu-item/menu-item';
import { Menu } from '../menu';

const mutationObserverMock = jest.fn(function MutationObserver(callback) {
  this.observe = jest.fn();
  this.disconnect = jest.fn();
  // Optionally add a trigger() method to manually trigger a change
  this.trigger = (mockedMutationsList) => {
    callback(mockedMutationsList, this);
  };
});
(global as any).MutationObserver = mutationObserverMock;

describe('ix-menu', () => {
  it('should close overlay about', async () => {
    const page = await newSpecPage({
      components: [Menu, MenuItem],
      html: `<ix-menu>
        <ix-menu-item id="test-item">Test</ix-menu-item>
        <ix-menu-about></ix-menu-about>
      </ix-menu>`,
    });
    await page.waitForChanges();
    const menu = page.doc.querySelector('ix-menu');

    expect(
      menu.shadowRoot.querySelector('slot[name="ix-menu-about"]')
    ).toBeNull();

    await menu.toggleAbout(true);
    await page.waitForChanges();

    expect(
      menu.shadowRoot.querySelector('slot[name="ix-menu-about"]')
    ).not.toBeNull();

    await menu.toggleAbout(false);
    await page.waitForChanges();

    expect(
      menu.shadowRoot.querySelector('slot[name="ix-menu-about"]')
    ).toBeNull();
  });
});

describe('ix-menu', () => {
  it('should close overlay settings', async () => {
    const page = await newSpecPage({
      components: [Menu, MenuItem],
      html: `<ix-menu>
        <ix-menu-item id="test-item">Test</ix-menu-item>
        <ix-menu-settings></ix-menu-settings>
      </ix-menu>`,
    });
    await page.waitForChanges();
    const menu = page.doc.querySelector('ix-menu');

    expect(
      menu.shadowRoot.querySelector('slot[name="ix-menu-settings"]')
    ).toBeNull();

    await menu.toggleSettings(true);
    await page.waitForChanges();

    expect(
      menu.shadowRoot.querySelector('slot[name="ix-menu-settings"]')
    ).not.toBeNull();

    await menu.toggleSettings(false);
    await page.waitForChanges();

    expect(
      menu.shadowRoot.querySelector('slot[name="ix-menu-settings"]')
    ).toBeNull();
  });
});
