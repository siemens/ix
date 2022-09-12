// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

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
      html: `<ix-message-bar type="danger"></ix-message-bar>`,
    });

    messageBar = document.querySelector('ix-message-bar');
    closeButton = document.querySelector('[data-testid="close-btn"]');
  });

  it('renders', async () => {
    expect(page.root).toMatchSnapshot();
  });

  it('closes the alert message bar', async (done) => {
    messageBar.addEventListener('closedChange', () => {
      done();
    });
    fireEvent.click(closeButton);
  });

  it('emits an event when the message is dismissed', async (done) => {
    const mockCallback = jest.fn(() => {
      done();
    });
    window.addEventListener('closedChange', mockCallback);

    fireEvent.click(closeButton);
    await page.waitForChanges();

    window.removeEventListener('closedChange', mockCallback);
  });
});
