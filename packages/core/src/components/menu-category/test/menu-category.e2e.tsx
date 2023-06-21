/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { newE2EPage } from '@stencil/core/testing';

describe('menu-category', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ix-menu>
        <ix-menu-category label="Category label">
          <ix-menu-item>Test</ix-menu-item>
          <ix-menu-item>Test</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    `);
    const element = await page.find('ix-menu-category');
    expect(element).toHaveClass('hydrated');
  });

  it('should be expand items', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ix-menu>
        <ix-menu-category label="Category label">
          <ix-menu-item>Test Item 1</ix-menu-item>
          <ix-menu-item>Test Item 2</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    `);
    await page.waitForChanges();

    const menu = await page.find('ix-menu');
    await menu.callMethod('toggleMenu', true);

    await page.waitForChanges();

    const menuItemsContainer = await page.find(
      'ix-menu-category >>> .menu-items'
    );
    expect(menuItemsContainer).toBeDefined();
    expect(menuItemsContainer).not.toHaveClass('menu-items--expanded');

    const triggerElement = await page.find('ix-menu-category >>> ix-menu-item');

    triggerElement.click();
    await page.waitForChanges();

    const dropdown = await page.find('ix-menu-category >>> ix-dropdown');

    expect(dropdown).not.toHaveClass('show');

    expect(triggerElement.textContent).toEqual('Category label');
    expect(menuItemsContainer).toHaveClass('menu-items--expanded');

    const nestedItems = await page.findAll('ix-menu-category ix-menu-item');

    expect(nestedItems.length).toEqual(2);
    expect(nestedItems[0].innerText).toEqual('Test Item 1');
    expect(nestedItems[1].innerText).toEqual('Test Item 2');
  });

  it('should show items as dropdown', async () => {
    const page = await newE2EPage();

    await page.setContent(`
      <ix-menu>
        <ix-menu-category label="Category label">
          <ix-menu-item>Test Item 1</ix-menu-item>
          <ix-menu-item>Test Item 2</ix-menu-item>
        </ix-menu-category>
      </ix-menu>
    `);
    await page.waitForChanges();

    const menuItemsContainer = await page.find(
      'ix-menu-category >>> .menu-items'
    );
    expect(menuItemsContainer).toBeDefined();
    expect(menuItemsContainer).not.toHaveClass('menu-items--expanded');

    const triggerElement = await page.find('ix-menu-category >>> ix-menu-item');

    triggerElement.click();
    await page.waitForChanges();

    const dropdown = await page.find('ix-menu-category >>> ix-dropdown');

    expect(dropdown).toHaveClass('show');

    expect(triggerElement.textContent).toEqual('Category label');
    expect(menuItemsContainer).not.toHaveClass('menu-items--expanded');

    const dropdownHeader = await page.find(
      'ix-menu-category >>> ix-dropdown > ix-dropdown-item'
    );

    expect(dropdownHeader.innerText).toEqual('Category label');
    expect(menuItemsContainer.innerHTML).toEqualHtml('');
  });

  // it('renders changes to the name data', async () => {
  //   const page = await newE2EPage();

  //   await page.setContent('<my-component></my-component>');
  //   const component = await page.find('my-component');
  //   const element = await page.find('my-component >>> div');
  //   expect(element.textContent).toEqual(`Hello, World! I'm `);

  //   component.setProperty('first', 'James');
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James`);

  //   component.setProperty('last', 'Quincy');
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

  //   component.setProperty('middle', 'Earl');
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  // });
});
