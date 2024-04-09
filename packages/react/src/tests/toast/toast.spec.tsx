/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Content from './toast';

describe(`toast`, () => {
  it(`basic`, async () => {
    const { getByText, debug } = render(<Content />);

    const button = getByText('Hallo');
    button.click();

    const toast = await screen.findByText('Foobar');
    const toastShadowRoot = toast.shadowRoot;

    expect(toast).toBeDefined();
    expect(toastShadowRoot).toBeDefined();
    expect(toast.innerText).toBe('Foobar');

    await customElements.whenDefined('ix-icon');

    const icon = toastShadowRoot?.querySelector(
      '.toast-icon ix-icon'
    ) as HTMLIxIconElement;

    expect(icon).toBeDefined();
    expect(icon.name).toBe('star');
  });
});
