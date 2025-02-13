/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { beforeAll, describe, it } from 'vitest';
import Content from './toast';
import { screen } from 'shadow-dom-testing-library';

beforeAll(() => {
  if (typeof HTMLElement.prototype.attachInternals !== 'function') {
    HTMLElement.prototype.attachInternals = function () {
      return {
        form: null,
      };
    } as any;
  }
});

describe(`toast`, () => {
  it(`basic`, async () => {
    const { getByText } = render(<Content />);

    const button = getByText('Hallo');
    button.click();

    await customElements.whenDefined('ix-toast');
    await customElements.whenDefined('ix-toast-container');

    const toast = await screen.findByText('Foobar');

    await waitFor(() => {
      expect(toast).toBeInTheDocument();
    });

    const icon = (await screen.findByShadowTestId(
      'toast-icon'
    )) as HTMLIxIconElement;

    expect(icon.name).toEqual('star');
  });
});
