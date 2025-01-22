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
import { ExpandingSearch } from '../expanding-search';

describe('ix-expanding-search', () => {
  let page: any;
  let expandingSearch: HTMLIxExpandingSearchElement;
  let input: any;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ExpandingSearch],
      html: '<ix-expanding-search></ix-expanding-search>',
    });
    expandingSearch = page.doc.querySelector('ix-expanding-search')!;
    const shadowRoot = expandingSearch.shadowRoot!;
    shadowRoot.querySelector('[data-testid="button"]');
    input = shadowRoot.querySelector('[data-testid="input"]');
    shadowRoot.querySelector('[data-testid="input-wrapper"]');
    shadowRoot.querySelector('input')!.focus = jest.fn();
  });

  it("emits an event on change and returns 'this.value'", async () => {
    let callbackSpy = jest.fn();
    page.win.addEventListener('valueChange', callbackSpy);

    fireEvent.input(input, { target: { value: 'new input' } });
    await page.waitForChanges();

    expect(callbackSpy).toHaveBeenCalled();
    expect(callbackSpy.mock.calls[0][0].detail).toEqual(expandingSearch.value);
  });
});
