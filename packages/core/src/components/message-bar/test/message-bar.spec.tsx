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
import { MessageBar } from '../message-bar';

describe('ix-message-bar', () => {
  let page: any;
  let messageBar: HTMLIxMessageBarElement;
  let closeButton: HTMLIxIconButtonElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [MessageBar],
      html: '<ix-message-bar type="danger"></ix-message-bar>',
    });

    messageBar = document.querySelector('ix-message-bar')!;
    closeButton = messageBar.shadowRoot!.querySelector(
      '[data-testid="close-btn"]'
    )!;
  });

  it('closes the alert message bar', (done) => {
    messageBar.addEventListener('closedChange', () => {
      done();
    });
    fireEvent.click(closeButton);
  });

  it('emits an event when the message is dismissed', (done) => {
    const mockCallback = jest.fn(() => {
      done();
    });
    window.addEventListener('closedChange', mockCallback);

    fireEvent.click(closeButton);
    page.waitForChanges().then(() => {
      window.removeEventListener('closedChange', mockCallback);
    });
  });
});
