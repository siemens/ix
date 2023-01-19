/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent, screen } from '@testing-library/dom';
import { SelectItem } from '../../select-item/select-item';
import { Select } from '../select';

//@ts-ignore
global.MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
};

describe('ix-select', () => {
  it('show add item button in list', async () => {
    const page = await newSpecPage({
      components: [Select, SelectItem],
      html: `<ix-select>
        <ix-select-item data-testid="select-1" value="11" label="Item 1"></ix-select-item>
        <ix-select-item data-testid="select-1" value="22" label="Item 2"></ix-select-item>
      </ix-select>`,
    });

    await page.waitForChanges();

    const selectElement = page.doc.querySelector('ix-select');

    selectElement.selectedIndices = '22';
    await page.waitForChanges();

    expect(
      (screen.getByTestId('input') as HTMLInputElement).value
    ).toStrictEqual('Item 2');
  });

  it('show add item button in list', async () => {
    const page = await newSpecPage({
      components: [Select],
      html: '<ix-select></ix-select>',
    });

    (page.win as any).SVGElement = class {};

    const select = page.doc.querySelector('ix-select');
    select.editable = true;
    await page.waitForChanges();

    const input = screen.getByTestId('input');

    const dropdownItem = screen.getByTestId('add-item');
    expect(dropdownItem.classList.contains('d-none')).toBeTruthy();
    const dropdown = page.root.querySelector('ix-dropdown');

    fireEvent(dropdown, new CustomEvent('showChanged'));
    await page.waitForChanges();

    fireEvent.input(input, { target: { value: '23' } });
    await page.waitForChanges();

    expect(dropdownItem).not.toHaveClass('d-none');
  });

  it('show not show add item button in list if editing is false', async () => {
    const page = await newSpecPage({
      components: [Select],
      html: '<ix-select></ix-select>',
    });

    (page.win as any).SVGElement = class {};

    const select = page.doc.querySelector('ix-select');
    select.editable = false;
    await page.waitForChanges();

    const input = screen.getByTestId('input');

    const dropdownItem = screen.getByTestId('add-item');
    expect(dropdownItem).toHaveClass('d-none');

    const dropdown = page.root.querySelector('ix-dropdown');

    fireEvent(dropdown, new CustomEvent('showChanged'));
    await page.waitForChanges();

    fireEvent.input(input, { target: { value: '23' } });
    await page.waitForChanges();

    expect(dropdownItem).toHaveClass('d-none');
  });

  it('show items', async () => {
    const page = await newSpecPage({
      components: [Select, SelectItem],
      html: `
      <ix-select>
        <ix-select-item data-testid="select-1" value="1" label="ABC"></ix-select-item>
        <ix-select-item data-testid="select-2" value="2" label="ABC 2"></ix-select-item>
        <ix-select-item data-testid="select-3" value="3" label="XYZ"></ix-select-item>
      </ix-select>`,
    });

    const dropdown = page.root.querySelector('ix-dropdown');
    fireEvent(dropdown, new CustomEvent('showChanged'));

    const input = screen.getByTestId('input');
    fireEvent.input(input, { target: { value: 'ABC' } });

    await page.waitForChanges();

    expect(screen.getByTestId('select-1')).not.toHaveClass('d-none');
    expect(screen.getByTestId('select-2')).not.toHaveClass('d-none');
    expect(screen.getByTestId('select-3')).toHaveClass('d-none');
  });

  describe('single mode selection', () => {
    it('change label of selected item', async () => {
      let updateCallback = jest.fn();

      //@ts-ignore
      global.MutationObserver = class {
        constructor(callback) {
          updateCallback = callback;
        }
        disconnect() {}
        observe() {}
      };

      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <ix-select data-testid="select">
          <ix-select-item data-testid="select-1" value="1" label="ABC"></ix-select-item>
          <ix-select-item data-testid="select-2" value="2" label="ABC 2"></ix-select-item>
          <ix-select-item data-testid="select-3" value="3" label="XYZ"></ix-select-item>
        </ix-select>`,
      });
      await page.waitForChanges();

      const selectElement = page.doc.querySelector('ix-select');
      selectElement.selectedIndices = ['2'];
      await page.waitForChanges();

      const inputElement = screen.getByTestId('input') as HTMLInputElement;
      expect(inputElement.value).toBe('ABC 2');

      const selectItemElement = screen.getByTestId(
        'select-2'
      ) as HTMLIxSelectItemElement;
      selectItemElement.label = 'CHANGED!';
      updateCallback();

      await page.waitForChanges();

      expect(inputElement.value).toBe('CHANGED!');
    });

    it('select item', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <ix-select data-testid="select">
          <ix-select-item data-testid="select-1" value="1" label="ABC"></ix-select-item>
          <ix-select-item data-testid="select-2" value="2" label="ABC 2"></ix-select-item>
          <ix-select-item data-testid="select-3" value="3" label="XYZ"></ix-select-item>
        </ix-select>`,
      });

      const selectionChange = jest.fn();

      screen
        .getByTestId('select')
        .addEventListener('itemSelectionChange', selectionChange);

      fireEvent(
        screen.getByTestId('select-2').querySelector('ix-dropdown-item'),
        new CustomEvent('itemClick')
      );
      await page.waitForChanges();

      expect((screen.getByTestId('input') as HTMLInputElement).value).toBe(
        'ABC 2'
      );
      expect(selectionChange).toHaveBeenCalled();
    });

    it('select new item', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <ix-select data-testid="select">
          <ix-select-item data-testid="select-1" value="1" label="ABC"></ix-select-item>
          <ix-select-item data-testid="select-2" value="2" label="ABC 2"></ix-select-item>
          <ix-select-item data-testid="select-3" value="3" label="XYZ"></ix-select-item>
        </ix-select>`,
      });

      const selectElement: HTMLIxSelectElement = screen.getByTestId('select');
      selectElement.editable = true;

      await page.waitForChanges();

      const inputElement: HTMLInputElement = screen.getByTestId('input');
      fireEvent.input(inputElement, { target: { value: 'NEWITEM' } });

      await page.waitForChanges();

      fireEvent(screen.getByTestId('add-item'), new CustomEvent('itemClick'));

      await page.waitForChanges();

      expect(
        (
          page.root.querySelector(
            "ix-select-item[value='NEWITEM']"
          ) as HTMLIxSelectItemElement
        ).label
      ).toBe('NEWITEM');
    });

    it('select default', async () => {
      await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <ix-select data-testid="select" selected-indices="2">
          <ix-select-item data-testid="select-1" value="1" label="ABC"></ix-select-item>
          <ix-select-item data-testid="select-2" value="2" label="ABC 2"></ix-select-item>
          <ix-select-item data-testid="select-3" value="3" label="XYZ"></ix-select-item>
        </ix-select>`,
      });

      expect(
        (screen.getByTestId('input') as HTMLInputElement).value
      ).toStrictEqual('ABC 2');
    });
  });

  describe('multiple mode selection', () => {
    it('select items', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <ix-select data-testid="select" mode="multiple">
          <ix-select-item data-testid="select-1" value="1" label="ABC"></ix-select-item>
          <ix-select-item data-testid="select-2" value="2" label="ABC 2"></ix-select-item>
          <ix-select-item data-testid="select-3" value="3" label="XYZ"></ix-select-item>
        </ix-select>`,
      });

      const selectionChange = jest.fn();

      screen
        .getByTestId('select')
        .addEventListener('itemSelectionChange', selectionChange);

      fireEvent(
        screen.getByTestId('select-1').querySelector('ix-dropdown-item'),
        new CustomEvent('itemClick')
      );
      fireEvent(
        screen.getByTestId('select-3').querySelector('ix-dropdown-item'),
        new CustomEvent('itemClick')
      );
      await page.waitForChanges();

      expect(selectionChange.mock.calls[0][0].detail).toStrictEqual(['1']);
      expect(selectionChange.mock.calls[1][0].detail).toStrictEqual(['1', '3']);

      const chips = page.root.querySelectorAll('ix-filter-chip');

      expect(chips[0].innerText).toBe('ABC');
      expect(chips[1].innerText).toBe('XYZ');
    });

    it('select items and new items', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <ix-select data-testid="select" mode="multiple">
          <ix-select-item data-testid="select-1" value="1" label="ABC"></ix-select-item>
          <ix-select-item data-testid="select-2" value="2" label="ABC 2"></ix-select-item>
          <ix-select-item data-testid="select-3" value="3" label="XYZ"></ix-select-item>
        </ix-select>`,
      });

      const selectionChangeHandle = jest.fn();
      const itemAddHandle = jest.fn();

      screen
        .getByTestId('select')
        .addEventListener('itemSelectionChange', selectionChangeHandle);
      screen.getByTestId('select').addEventListener('addItem', itemAddHandle);

      fireEvent(
        screen.getByTestId('select-1').querySelector('ix-dropdown-item'),
        new CustomEvent('itemClick')
      );
      fireEvent(
        screen.getByTestId('select-3').querySelector('ix-dropdown-item'),
        new CustomEvent('itemClick')
      );
      await page.waitForChanges();

      const dropdown = page.root.querySelector('ix-dropdown');
      fireEvent(dropdown, new CustomEvent('showChanged'));
      await page.waitForChanges();

      const input = screen.getByTestId('input');
      fireEvent.input(input, { target: { value: 'NEW ITEM' } });
      await page.waitForChanges();

      fireEvent(screen.getByTestId('add-item'), new CustomEvent('itemClick'));
      await page.waitForChanges();

      expect(itemAddHandle.mock.calls[0][0].detail).toStrictEqual('NEW ITEM');
      expect(selectionChangeHandle.mock.calls[2][0].detail).toStrictEqual([
        '1',
        '3',
        'NEW ITEM',
      ]);
      expect(
        (
          page.root.querySelector(
            "ix-select-item[value='NEW ITEM']"
          ) as HTMLIxSelectItemElement
        ).label
      ).toBe('NEW ITEM');
    });

    it('select default items', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <ix-select data-testid="select" mode="multiple">
          <ix-select-item data-testid="select-1" value="1" label="ABC"></ix-select-item>
          <ix-select-item data-testid="select-2" value="2" label="ABC 2"></ix-select-item>
          <ix-select-item data-testid="select-3" value="3" label="XYZ"></ix-select-item>
        </ix-select>`,
      });

      const selectElement: HTMLIxSelectElement = screen.getByTestId('select');
      selectElement.selectedIndices = ['1', '3'];

      await page.waitForChanges();

      const chips = page.root.querySelectorAll('ix-filter-chip');

      expect(chips[0].innerText).toBe('ABC');
      expect(chips[1].innerText).toBe('XYZ');
    });
  });
});
