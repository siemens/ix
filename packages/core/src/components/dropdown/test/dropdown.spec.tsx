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
import { Dropdown } from '../dropdown';

describe('ix-dropdown', () => {
  it('should open with anchor element', async () => {
    const page = await newSpecPage({
      components: [Dropdown],
      html: '<div></div>',
    });

    const anchor = page.doc.createElement('ix-button');
    anchor.setAttribute('id', 'test');
    anchor.innerText = 'Test';

    const dropdown = page.doc.createElement('ix-dropdown');
    dropdown.show = true;

    const dropdownItem = page.doc.createElement('ix-dropdown-item');

    dropdown.appendChild(dropdownItem);

    page.root.appendChild(anchor);
    page.root.appendChild(dropdown);

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <ix-dropdown class="dropdown-menu overflow show" role="list" show="" style="margin: 0; min-width: 0px; position: fixed;">
      <mock:shadow-root>
        <div style="display: contents;">
          <slot></slot>
        </div>
      </mock:shadow-root>
      <ix-dropdown-item></ix-dropdown-item>
    </ix-dropdown>
    `);
  });

  it('should collapse, when clicked outside', async () => {
    const page = await newSpecPage({
      components: [Dropdown],
      html: `<div></div>`,
    });

    const dropdown = page.doc.createElement('ix-dropdown');
    dropdown.show = true;
    page.root.appendChild(dropdown);

    await page.waitForChanges();

    fireEvent.click(window);
    await page.waitForChanges();

    expect(dropdown.show).toBeFalsy();
  });

  it('emits an event, when show changed', async () => {
    const mockCallback = jest.fn();
    const page = await newSpecPage({
      components: [Dropdown],
      html: `<div></div>`,
    });
    page.win.addEventListener('showChanged', mockCallback);

    const dropdown = page.doc.createElement('ix-dropdown');
    dropdown.show = true;
    page.root.appendChild(dropdown);
    await page.waitForChanges();

    fireEvent.click(window);
    await page.waitForChanges();
    expect(mockCallback).toHaveBeenCalled();
  });
});
