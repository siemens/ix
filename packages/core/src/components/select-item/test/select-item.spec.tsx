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
      html: `<ix-select-item value="test" label="Test"></ix-select-item>`,
    });

    expect(page.root).toEqualHtml(`
      <ix-select-item value="test" label="Test">
        <ix-dropdown-item icon="empty" label="Test" />
      </ix-select-item>
    `);
  });

  it('should throw exception if value is missing', (done) => {
    newSpecPage({
      components: [SelectItem],
      html: `<ix-select-item></ix-select-item>`,
    }).catch((e: Error) => {
      expect(e.message).toBe('ix-select-item must have a `value` property');
      done();
    });
  });

  it('should pass through click event from dropdown item', async () => {
    let eventSpy = jest.fn();

    const page = await newSpecPage({
      components: [DropdownItem, SelectItem],
      html: `<ix-select-item value="test" label="Test"></ix-select-item>`,
    });

    page.doc
      .querySelector('ix-select-item')
      .addEventListener('itemClick', eventSpy);

    const dropdownItem = page.doc.querySelector(
      'ix-dropdown-item button'
    ) as HTMLElement;
    dropdownItem.click();

    expect(eventSpy).toHaveBeenCalled();
  });
});
