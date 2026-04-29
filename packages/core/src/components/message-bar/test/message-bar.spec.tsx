/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './../../drawer/test/animejs.mock';
import { render, h } from '@stencil/vitest';
import { fireEvent } from '@testing-library/dom';
import { describe, expect, it, vi } from 'vitest';

describe('ix-message-bar', () => {
  async function setup() {
    const rendered = await render(<ix-message-bar></ix-message-bar>);
    const messageBar = rendered.root as HTMLIxMessageBarElement;
    const closeButton = messageBar.shadowRoot!.querySelector(
      '[data-testid="close-btn"]'
    ) as HTMLElement;

    return { ...rendered, messageBar, closeButton };
  }

  it('closes the alert message bar', async () => {
    const { closeButton, spyOnEvent, waitForChanges } = await setup();
    const closedSpy = spyOnEvent('closedChange');

    fireEvent.click(closeButton);

    await waitForChanges();

    expect(closedSpy).toHaveReceivedEvent();
  });

  it('emits an event when the message is dismissed', async () => {
    const { closeButton, waitForChanges } = await setup();
    const mockCallback = vi.fn();
    window.addEventListener('closedChange', mockCallback);

    fireEvent.click(closeButton);
    await waitForChanges();

    window.removeEventListener('closedChange', mockCallback);

    expect(mockCallback).toHaveBeenCalled();
  });
});
