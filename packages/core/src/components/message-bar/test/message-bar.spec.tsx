/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { newSpecPage } from '@stencil/core/testing';
import { fireEvent } from '@testing-library/dom';
import { CwMessageBar } from '../message-bar';

describe('ix-message-bar', () => {
  let page: any;
  let messageBar: any;
  let closeButton: HTMLIxIconButtonElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [CwMessageBar],
      html: `<ix-message-bar type="danger"></ix-message-bar>`,
    });

    messageBar = document.querySelector('ix-message-bar');
    closeButton = document.querySelector('[data-testid="close-btn"]');
  });

  it('renders', async () => {
    expect(page.root).toMatchSnapshot();
  });

  it('closes the alert message bar', async () => {
    fireEvent.click(closeButton);
    await page.waitForChanges();
    setTimeout(() => {
      expect(messageBar.innerHTML).toContainEqual('d-none');
    }, 300);
  });

  it('emits an event when the message is dismissed', async () => {
    const mockCallback = jest.fn();
    window.addEventListener('closedChange', mockCallback);

    fireEvent.click(closeButton);
    await page.waitForChanges();

    window.removeEventListener('closedChange', mockCallback);
    setTimeout(() => {
      expect(mockCallback).toHaveBeenCalled();
    }, 300);
  });
});
