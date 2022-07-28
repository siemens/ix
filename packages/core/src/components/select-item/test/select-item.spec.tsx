/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { newSpecPage } from '@stencil/core/testing';
import { DropdownItem } from '../../dropdown-item/dropdown-item';
import { SelectItem } from '../select-item';

describe('select-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SelectItem],
      html: `<cw-select-item value="test" label="Test"></cw-select-item>`,
    });

    expect(page.root).toEqualHtml(`
      <cw-select-item value="test" label="Test">
        <cw-dropdown-item icon="empty" label="Test" />
      </cw-select-item>
    `);
  });

  it('should throw exception if value is missing', done => {
    newSpecPage({
      components: [SelectItem],
      html: `<cw-select-item></cw-select-item>`,
    }).catch((e: Error) => {
      expect(e.message).toBe('cw-select-item must have a `value` property');
      done();
    });
  });

  it('should pass through click event from dropdown item', async () => {
    let eventSpy = jest.fn();

    const page = await newSpecPage({
      components: [DropdownItem, SelectItem],
      html: `<cw-select-item value="test" label="Test"></cw-select-item>`,
    });

    page.doc.querySelector('cw-select-item').addEventListener('itemClick', eventSpy);

    const dropdownItem = page.doc.querySelector('cw-dropdown-item button') as HTMLElement;
    dropdownItem.click();

    expect(eventSpy).toHaveBeenCalled();
  });
});
