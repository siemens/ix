/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent } from '@testing-library/dom';
import { Breadcrumb } from '../breadcrumb';
import { createMutationObserver } from './../../utils/mutation-observer';

jest.mock('./../../utils/mutation-observer');
jest.mock('animejs');

describe('cw-breadcrumb', () => {
  let observerCallback: Function;
  let page: any;

  beforeEach(async () => {
    //@ts-ignore
    createMutationObserver = jest.fn(callback => {
      observerCallback = callback;
      return {
        observe: jest.fn(),
      };
    });
    page = await newSpecPage({
      components: [Breadcrumb],
      html: `
        <cw-breadcrumb>
          <cw-breadcrumb-item label="Test 1" />
          <cw-breadcrumb-item label="Test 2" />
          <cw-breadcrumb-item label="Test 3" />
          <cw-breadcrumb-item label="Test 4" />
        </cw-breadcrumb>
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
