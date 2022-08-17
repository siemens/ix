/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent } from '@testing-library/dom';
import { CwDrawer } from '../drawer';

describe('ix-drawer', () => {
  let page: any;
  let drawer: any;
  let container: HTMLDivElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [CwDrawer],
      html: `<ix-drawer></ix-drawer>`,
    });

    drawer = document.querySelector('ix-drawer');
    container = document.querySelector('[data-testid="container"]');
  });

  it('renders', () => {
    expect(page.root).toMatchSnapshot();
  });

  it('opens the drawer', async () => {
    drawer.show = true;
    await page.waitForChanges();

    expect(drawer.show).toBeTruthy();

    await page.waitForChanges();
    expect(drawer.innerHTML).toContain('toggle');
  });

  it('closes the drawer', async () => {
    drawer.show = true;
    await page.waitForChanges();

    const closeButton = page.doc.querySelector('[data-testid="close-button"]');
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

    expect(container.classList.contains('full-height')).toBeTruthy();
  });

  it('drawer is NOT displayed at full height, if fullHeight is set to false', async () => {
    drawer.toggleDrawer();
    await page.waitForChanges();

    drawer.fullHeight = false;
    await page.waitForChanges();

    expect(container.classList.contains('full-height')).toBeFalsy();
  });

  it('emits an event, when show changed', async () => {
    const mockCallback = jest.fn();
    window.addEventListener('open', mockCallback);

    drawer.toggleDrawer();
    await page.waitForChanges();

    const closeButton = page.doc.querySelector('[data-testid="close-button"]');
    fireEvent.click(closeButton);

    window.removeEventListener('open', mockCallback);
    expect(mockCallback).toHaveBeenCalled();
  });
});
