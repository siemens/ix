/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { cleanup, render, waitFor } from '@testing-library/react';
import { useEffect } from 'react';
import { screen } from 'shadow-dom-testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { showToast } from '../..';
import Content from './toast';
import { iconStar } from '@siemens/ix-icons/icons';

let toastContainer: Element | null = null;

afterEach(() => {
  cleanup();
  toastContainer?.remove();
  toastContainer = null;
});

describe(`toast`, () => {
  it(`basic`, async () => {
    const { getByText } = render(<Content />);

    const button = getByText('Hallo');
    button.click();

    await customElements.whenDefined('ix-toast');
    await customElements.whenDefined('ix-toast-container');
    toastContainer = document.querySelector('ix-toast-container');

    const toast = await screen.findByText('Foobar');

    await waitFor(() => {
      expect(toast).not.toBeNull();
    });

    const icon = (await screen.findByShadowTestId(
      'toast-icon'
    )) as HTMLIxIconElement;

    expect(icon.name).toEqual(iconStar);
  });

  it(`unmounts message and action content on close`, async () => {
    const onUnmount = vi.fn();

    const Tracked = ({ name }: { name: string }) => {
      useEffect(() => () => onUnmount(name), [name]);
      return <span>{name}</span>;
    };

    const instance = await showToast({
      message: <Tracked name="message" />,
      action: <Tracked name="action" />,
    });
    toastContainer = document.querySelector('ix-toast-container');

    await screen.findByText('message');
    await screen.findByText('action');

    instance.close();

    await waitFor(() => {
      expect(onUnmount).toHaveBeenCalledWith('message');
      expect(onUnmount).toHaveBeenCalledWith('action');
    });
  });
});
