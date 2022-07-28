/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent, screen } from '@testing-library/dom';
import { SelectItem } from '../../select-item/select-item';
import { Select } from '../select';

describe('cw-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<cw-select></cw-select>`,
    });
    expect(page.root).toEqualHtml(`
    <cw-select>
     <div class="form-control select">
       <div class="input-container">
         <div class="trigger">
           <input type="text" data-testid="input">
           <cw-icon class="chevron" name="chevron-down" size="16"></cw-icon>
         </div>
       </div>
     </div>
     <cw-dropdown adjustdropdownwidthtoreferencewith="" placement="bottom" positioningstrategy="fixed" style="width: 100%;">
        <div class="d-contents"></div>
        <cw-dropdown-item data-testid="add-item" class="d-none" icon="plus"></cw-dropdown-item>
     </cw-dropdown>
    </cw-select>
    `);
  });

  it('show add item button in list', async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<cw-select></cw-select>`,
    });

    (page.win as any).SVGElement = class {};

    const select = page.doc.querySelector('cw-select');
    select.editable = true;
    await page.waitForChanges();

    const input = screen.getByTestId('input');

    const dropdownItem = screen.getByTestId('add-item');
    expect(dropdownItem.classList.contains('d-none')).toBeTruthy();
    const dropdown = page.root.querySelector('cw-dropdown');

    fireEvent(dropdown, new CustomEvent('showChanged'));
    await page.waitForChanges();

    fireEvent.input(input, { target: { value: '23' } });
    await page.waitForChanges();

    expect(dropdownItem).not.toHaveClass('d-none');
  });

  it('show not show add item button in list if editing is false', async () => {
    const page = await newSpecPage({
      components: [Select],
      html: `<cw-select></cw-select>`,
    });

    (page.win as any).SVGElement = class {};

    const select = page.doc.querySelector('cw-select');
    select.editable = false;
    await page.waitForChanges();

    const input = screen.getByTestId('input');

    const dropdownItem = screen.getByTestId('add-item');
    expect(dropdownItem).toHaveClass('d-none');

    const dropdown = page.root.querySelector('cw-dropdown');

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
      <cw-select>
        <cw-select-item data-testid="select-1" value="1" label="ABC"></cw-select-item>
        <cw-select-item data-testid="select-2" value="2" label="ABC 2"></cw-select-item>
        <cw-select-item data-testid="select-3" value="3" label="XYZ"></cw-select-item>
      </cw-select>`,
    });

    const dropdown = page.root.querySelector('cw-dropdown');
    fireEvent(dropdown, new CustomEvent('showChanged'));

    const input = screen.getByTestId('input');
    fireEvent.input(input, { target: { value: 'ABC' } });

    await page.waitForChanges();

    expect(screen.getByTestId('select-1')).not.toHaveClass('d-none');
    expect(screen.getByTestId('select-2')).not.toHaveClass('d-none');
    expect(screen.getByTestId('select-3')).toHaveClass('d-none');
  });

  describe('single mode selection', () => {
    it('select item', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <cw-select data-testid="select">
          <cw-select-item data-testid="select-1" value="1" label="ABC"></cw-select-item>
          <cw-select-item data-testid="select-2" value="2" label="ABC 2"></cw-select-item>
          <cw-select-item data-testid="select-3" value="3" label="XYZ"></cw-select-item>
        </cw-select>`,
      });

      const selectionChange = jest.fn();

      screen.getByTestId('select').addEventListener('itemSelectionChange', selectionChange);

      fireEvent(screen.getByTestId('select-2').querySelector('cw-dropdown-item'), new CustomEvent('itemClick'));
      await page.waitForChanges();

      expect((screen.getByTestId('input') as HTMLInputElement).value).toBe('ABC 2');
      expect(selectionChange).toHaveBeenCalled();
    });

    it('select new item', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <cw-select data-testid="select">
          <cw-select-item data-testid="select-1" value="1" label="ABC"></cw-select-item>
          <cw-select-item data-testid="select-2" value="2" label="ABC 2"></cw-select-item>
          <cw-select-item data-testid="select-3" value="3" label="XYZ"></cw-select-item>
        </cw-select>`,
      });

      const selectElement: HTMLCwSelectElement = screen.getByTestId('select');
      selectElement.editable = true;

      await page.waitForChanges();

      const inputElement: HTMLInputElement = screen.getByTestId('input');
      fireEvent.input(inputElement, { target: { value: 'NEWITEM' } });

      await page.waitForChanges();

      fireEvent(screen.getByTestId('add-item'), new CustomEvent('itemClick'));

      await page.waitForChanges();

      expect((page.root.querySelector(`cw-select-item[value='NEWITEM']`) as HTMLCwSelectItemElement).label).toBe('NEWITEM');
    });

    it('select default', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <cw-select data-testid="select" default-value="2">
          <cw-select-item data-testid="select-1" value="1" label="ABC"></cw-select-item>
          <cw-select-item data-testid="select-2" value="2" label="ABC 2"></cw-select-item>
          <cw-select-item data-testid="select-3" value="3" label="XYZ"></cw-select-item>
        </cw-select>`,
      });

      expect((screen.getByTestId('input') as HTMLInputElement).value).toStrictEqual('ABC 2');
    });
  });

  describe('multiple mode selection', () => {
    it('select items', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <cw-select data-testid="select" mode="multiple">
          <cw-select-item data-testid="select-1" value="1" label="ABC"></cw-select-item>
          <cw-select-item data-testid="select-2" value="2" label="ABC 2"></cw-select-item>
          <cw-select-item data-testid="select-3" value="3" label="XYZ"></cw-select-item>
        </cw-select>`,
      });

      const selectionChange = jest.fn();

      screen.getByTestId('select').addEventListener('itemSelectionChange', selectionChange);

      fireEvent(screen.getByTestId('select-1').querySelector('cw-dropdown-item'), new CustomEvent('itemClick'));
      fireEvent(screen.getByTestId('select-3').querySelector('cw-dropdown-item'), new CustomEvent('itemClick'));
      await page.waitForChanges();

      expect(selectionChange.mock.calls[0][0].detail).toStrictEqual(['1']);
      expect(selectionChange.mock.calls[1][0].detail).toStrictEqual(['1', '3']);

      const chips = page.root.querySelectorAll('cw-filter-chip');

      expect(chips[0].innerText).toBe('ABC');
      expect(chips[1].innerText).toBe('XYZ');
    });

    it('select items and new items', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <cw-select data-testid="select" mode="multiple">
          <cw-select-item data-testid="select-1" value="1" label="ABC"></cw-select-item>
          <cw-select-item data-testid="select-2" value="2" label="ABC 2"></cw-select-item>
          <cw-select-item data-testid="select-3" value="3" label="XYZ"></cw-select-item>
        </cw-select>`,
      });

      const selectionChangeHandle = jest.fn();
      const itemAddHandle = jest.fn();

      screen.getByTestId('select').addEventListener('itemSelectionChange', selectionChangeHandle);
      screen.getByTestId('select').addEventListener('addItem', itemAddHandle);

      fireEvent(screen.getByTestId('select-1').querySelector('cw-dropdown-item'), new CustomEvent('itemClick'));
      fireEvent(screen.getByTestId('select-3').querySelector('cw-dropdown-item'), new CustomEvent('itemClick'));
      await page.waitForChanges();

      const dropdown = page.root.querySelector('cw-dropdown');
      fireEvent(dropdown, new CustomEvent('showChanged'));
      await page.waitForChanges();

      const input = screen.getByTestId('input');
      fireEvent.input(input, { target: { value: 'NEW ITEM' } });
      await page.waitForChanges();

      fireEvent(screen.getByTestId('add-item'), new CustomEvent('itemClick'));
      await page.waitForChanges();

      expect(itemAddHandle.mock.calls[0][0].detail).toStrictEqual('NEW ITEM');
      expect(selectionChangeHandle.mock.calls[2][0].detail).toStrictEqual(['1', '3', 'NEW ITEM']);
      expect((page.root.querySelector(`cw-select-item[value='NEW ITEM']`) as HTMLCwSelectItemElement).label).toBe('NEW ITEM');
    });

    it('select default items', async () => {
      const page = await newSpecPage({
        components: [Select, SelectItem],
        html: `
        <cw-select data-testid="select" mode="multiple">
          <cw-select-item data-testid="select-1" value="1" label="ABC"></cw-select-item>
          <cw-select-item data-testid="select-2" value="2" label="ABC 2"></cw-select-item>
          <cw-select-item data-testid="select-3" value="3" label="XYZ"></cw-select-item>
        </cw-select>`,
      });

      const selectElement: HTMLCwSelectElement = screen.getByTestId('select');
      selectElement.selectedIndices = ['1', '3'];

      await page.waitForChanges();

      const chips = page.root.querySelectorAll('cw-filter-chip');

      expect(chips[0].innerText).toBe('ABC');
      expect(chips[1].innerText).toBe('XYZ');
    });
  });
});
