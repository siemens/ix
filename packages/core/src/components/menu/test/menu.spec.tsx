/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent } from '@testing-library/dom';
import { MenuAbout } from '../../menu-about/menu-about';
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
  it('should close overlay', async () => {
    const page = await newSpecPage({
      components: [Menu, MenuItem, MenuAbout],
      html: `<ix-menu>
        <ix-menu-item id="test-item">Test</ix-menu-item>
        <ix-menu-about></ix-menu-about>
      </ix-menu>`,
    });
    await page.waitForChanges();

    const element = page.doc.querySelector('.menu-overlay');
    expect(element.className).toContain('d-none');

    fireEvent(
      page.root.querySelector('#aboutAndLegal'),
      new MouseEvent('click')
    );
    await page.waitForChanges();

    expect(element.className).not.toContain('d-none');

    const item = page.root.querySelector('#test-item');
    fireEvent(
      item,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    await page.waitForChanges();

    expect(element.className).not.toContain('d-block');
  });
});
