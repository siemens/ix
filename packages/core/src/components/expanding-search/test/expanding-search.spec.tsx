/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent } from '@testing-library/dom';
import { ExpandingSearch } from '../expanding-search';

describe('ix-expanding-search', () => {
  let page: any;
  let expandingSearch: any;
  let button: any;
  let input: any;
  let inputWrapper: HTMLDivElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ExpandingSearch],
      html: '<ix-expanding-search></ix-expanding-search>',
    });
    expandingSearch = page.doc.querySelector('ix-expanding-search');
    button = page.doc.querySelector('[data-testid="button"]');
    input = page.doc.querySelector('[data-testid="input"]');
    inputWrapper = page.doc.querySelector('[data-testid="input-wrapper"]');
    page.doc.querySelector('input').focus = jest.fn();
  });

  it('renders', () => {
    expect(page.root).toMatchSnapshot();
  });

  it('expands input', async () => {
    fireEvent.click(button);
    await page.waitForChanges();

    expect(inputWrapper.classList.contains('expanded')).toBeTruthy();
  });

  it('collapses input', async () => {
    fireEvent.click(button);
    fireEvent.blur(input);
    await page.waitForChanges();

    expect(inputWrapper.classList.contains('collapsed')).toBeTruthy();
  });

  it('changes input', async () => {
    fireEvent.input(input, { target: { value: 'new input' } });

    await page.waitForChanges();
    expect(expandingSearch.value).toEqual('new input');
  });

  it('erases the input when clear button is clicked', async () => {
    const spy = jest.fn();
    window.addEventListener('valueChange', spy);

    fireEvent.input(input, { target: { value: 'new input' } });

    await page.waitForChanges();
    const clearButton = page.doc.querySelector('[data-testid="clear-button"]');
    fireEvent.click(clearButton);

    expect(expandingSearch.value).toEqual('');
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({ detail: '' }));
  });

  it("emits an event on change and returns 'this.value'", async () => {
    let callbackSpy = jest.fn();
    page.win.addEventListener('valueChange', callbackSpy);

    fireEvent.input(input, { target: { value: 'new input' } });
    await page.waitForChanges();

    expect(callbackSpy).toHaveBeenCalled();
    expect(callbackSpy.mock.calls[0][0].detail).toEqual(expandingSearch.value);
  });

  it('should not collapse input, if it is filled', async () => {
    fireEvent.click(button);
    fireEvent.input(input, { target: { value: 'new input' } });
    fireEvent.blur(input);
    await page.waitForChanges();

    expect(inputWrapper.classList.contains('expanded')).toBeTruthy();
  });
});
