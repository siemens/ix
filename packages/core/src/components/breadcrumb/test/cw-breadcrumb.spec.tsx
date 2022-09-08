/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent } from '@testing-library/dom';
import { Breadcrumb } from '../breadcrumb';
import { createMutationObserver } from './../../utils/mutation-observer';

jest.mock('./../../utils/mutation-observer');
jest.mock('animejs');

describe('ix-breadcrumb', () => {
  let observerCallback: Function;
  let page: any;

  beforeEach(async () => {
    //@ts-ignore
    createMutationObserver = jest.fn((callback) => {
      observerCallback = callback;
      return {
        observe: jest.fn(),
      };
    });
    page = await newSpecPage({
      components: [Breadcrumb],
      html: `
        <ix-breadcrumb>
          <ix-breadcrumb-item label="Test 1" />
          <ix-breadcrumb-item label="Test 2" />
          <ix-breadcrumb-item label="Test 3" />
          <ix-breadcrumb-item label="Test 4" />
        </ix-breadcrumb>
      `,
    });
  });

  it('renders', async () => {
    observerCallback();

    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('emits an event when clicked on item', async () => {
    let callbackSpy = jest.fn();
    page.win.addEventListener('itemClick', callbackSpy);

    let item = page.doc.querySelector('[data-testid="item"]');
    fireEvent.click(item);
    await page.waitForChanges();

    expect(callbackSpy).toHaveBeenCalled();
  });
});
