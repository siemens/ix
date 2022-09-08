/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent } from '@testing-library/dom';
import { Dropdown } from '../dropdown';

describe('ix-dropdown', () => {
  let page: any;
  let dropdown: any;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Dropdown],
      html: `
      <ix-dropdown>
        <ix-dropdown-item></ix-dropdown-item>
      </ix-dropdown>
      `,
    });

    dropdown = document.querySelector('ix-dropdown');
  });

  it('renders', async () => {
    expect(page.root).toMatchSnapshot();
  });

  it('should open with anchor element', async () => {
    const page = await newSpecPage({
      components: [Dropdown],
      html: `<div></div>`,
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
    <ix-dropdown class="dropdown-menu show" show="" style="margin: 0; min-width: 0px;">
      <div style="display: contents;">
        <ix-dropdown-item></ix-dropdown-item>
      </div>
    </ix-dropdown>
    `);
  });

  it('should collapse, when clicked outside', async () => {
    dropdown.show = true;
    await page.waitForChanges();

    fireEvent.click(window); //click outside
    await page.waitForChanges();

    expect(dropdown.show).toBeFalsy();
  });

  it('emits an event, when show changed', async () => {
    const mockCallback = jest.fn();
    page.win.addEventListener('showChanged', mockCallback);

    dropdown.show = true;
    await page.waitForChanges();

    fireEvent.click(window);
    await page.waitForChanges();
    expect(mockCallback).toHaveBeenCalled();
  });
});
