/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { newSpecPage } from '@stencil/core/testing';
import { Dropdown } from '../dropdown';
import { fireEvent } from '@testing-library/dom';

describe('cw-dropdown', () => {
  let page: any;
  let dropdown: any;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Dropdown],
      html: `
      <cw-dropdown>
        <cw-dropdown-item></cw-dropdown-item>
      </cw-dropdown>
      `,
    });

    dropdown = document.querySelector('cw-dropdown');
  });

  it('renders', async () => {
    expect(page.root).toMatchSnapshot();
  });

  it('should open with anchor element', async () => {
    const page = await newSpecPage({
      components: [Dropdown],
      html: `<div></div>`,
    });

    const anchor = page.doc.createElement('cw-button');
    anchor.setAttribute('id', 'test');
    anchor.innerText = 'Test';

    const dropdown = page.doc.createElement('cw-dropdown');
    dropdown.show = true;

    const dropdownItem = page.doc.createElement('cw-dropdown-item');

    dropdown.appendChild(dropdownItem);

    page.root.appendChild(anchor);
    page.root.appendChild(dropdown);

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
    <cw-dropdown class="dropdown-menu show" show="" style="margin: 0; min-width: 0px;">
      <div style="display: contents;">
        <cw-dropdown-item></cw-dropdown-item>
      </div>
    </cw-dropdown>
    `);
  });

  it('should collapse, when clicked outside', async () => {
    dropdown.show = true;
    await page.waitForChanges();

    fireEvent.click(window);  //click outside
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