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
import { Drawer } from '../drawer';

describe('ix-drawer', () => {
  let page: any;
  let drawer: HTMLIxDrawerElement;
  let container: HTMLDivElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Drawer],
      html: '<ix-drawer>Example Content</ix-drawer>',
    });

    drawer = document.querySelector('ix-drawer')!;
    container = document.querySelector('[data-testid="container"]')!;
  });

  it('opens the drawer', async () => {
    drawer.show = true;
    await page.waitForChanges();

    expect(drawer.show).toBeTruthy();

    await page.waitForChanges();
    expect(drawer.innerText).toContain('Example Content');
  });

  it('closes the drawer', async () => {
    drawer.show = true;
    await page.waitForChanges();

    const closeButton = drawer.shadowRoot.querySelector(
      '[data-testid="close-button"]'
    )!;
    fireEvent.click(closeButton);

    await page.waitForChanges();
    expect(drawer.show).toBeFalsy();
    expect(drawer.innerHTML).not.toContain('toggle');
  });

  it('drawer is displayed at full height, if fullHeight is set to true', async () => {
    drawer.toggleDrawer();
    await page.waitForChanges();

    drawer.fullHeight = true;
    await page.waitForChanges();

    expect(container.style.height.includes('100%')).toBeTruthy();
  });

  it('drawer is NOT displayed at full height, if fullHeight is set to false', async () => {
    drawer.toggleDrawer();
    await page.waitForChanges();

    drawer.fullHeight = false;
    await page.waitForChanges();

    expect(container.style.height.includes('auto')).toBeTruthy();
  });

  it('emits an event, when show changed', async () => {
    const mockCallback = jest.fn();
    window.addEventListener('open', mockCallback);

    drawer.toggleDrawer();
    await page.waitForChanges();

    const closeButton = drawer.shadowRoot.querySelector(
      '[data-testid="close-button"]'
    )!;
    fireEvent.click(closeButton);

    window.removeEventListener('open', mockCallback);
    expect(mockCallback).toHaveBeenCalled();
  });
});
