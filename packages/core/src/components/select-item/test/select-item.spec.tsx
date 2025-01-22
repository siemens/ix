/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { DropdownItem } from '../../dropdown-item/dropdown-item';
import { SelectItem } from '../select-item';

describe('select-item', () => {
  it('should throw exception if value is missing', (done) => {
    newSpecPage({
      components: [SelectItem],
      html: '<ix-select-item></ix-select-item>',
    }).catch((e: Error) => {
      expect(e.message).toBe('ix-select-item must have a `value` property');
      done();
    });
  });

  it('should pass through click event from dropdown item', async () => {
    let eventSpy = jest.fn();

    const page = await newSpecPage({
      components: [DropdownItem, SelectItem],
      html: '<ix-select-item value="test" label="Test"></ix-select-item>',
    });

    const item = page.doc.querySelector('ix-select-item')!;
    item.addEventListener('itemClick', eventSpy);

    const dropdownItem = item.shadowRoot!.querySelector(
      'ix-dropdown-item'
    ) as HTMLElement;
    dropdownItem.shadowRoot!.querySelector('button')!.click();

    expect(eventSpy).toHaveBeenCalled();
  });
});
