/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconInfo, iconSuccess } from '@siemens/ix-icons/icons';
import { h, render } from '@stencil/vitest';
import { describe, expect, it, vi } from 'vitest';
import { toast, type ToastConfig } from '../toast-utils';

describe('ix-toast base type', () => {
  it('renders the information icon in the primary text color', async () => {
    const { root } = await render(
      <ix-toast type="base" preventAutoClose>
        Base notification
      </ix-toast>
    );

    expect(root.getAttribute('type')).toBe('base');
    expect(root.getAttribute('role')).toBe('alert');
    const icon = root.shadowRoot!.querySelector('ix-icon');
    expect(icon?.getAttribute('name')).toBe(iconInfo);
    expect(icon?.getAttribute('color')).toBe('--si-sys-color-text-primary');
    expect(icon?.getAttribute('aria-hidden')).toBe('true');
  });

  it('keeps information as the default type', async () => {
    const { root } = await render(
      <ix-toast preventAutoClose>Default notification</ix-toast>
    );

    expect(root.getAttribute('type')).toBe('information');
    const icon = root.shadowRoot!.querySelector('ix-icon');
    expect(icon?.getAttribute('name')).toBe(iconInfo);
    expect(icon?.getAttribute('color')).toBe('--ix-toast-status-color');
  });

  it('preserves custom icons and colors and restores the base defaults', async () => {
    const { root, waitForChanges } = await render(
      <ix-toast
        type="base"
        icon={iconSuccess}
        iconColor="--si-sys-color-border-success"
        preventAutoClose
      >
        Custom notification
      </ix-toast>
    );

    const element = root as HTMLIxToastElement;
    const icon = root.shadowRoot!.querySelector('ix-icon');
    expect(icon?.getAttribute('name')).toBe(iconSuccess);
    expect(icon?.getAttribute('color')).toBe('--si-sys-color-border-success');

    element.icon = undefined;
    await waitForChanges();

    expect(icon?.getAttribute('name')).toBe(iconInfo);
    expect(icon?.getAttribute('color')).toBe('--si-sys-color-text-primary');
  });

  it('omits the icon wrapper when the base icon is hidden', async () => {
    const { root, waitForChanges } = await render(
      <ix-toast type="base" hideIcon preventAutoClose>
        Notification without an icon
      </ix-toast>
    );

    expect(root.shadowRoot!.querySelector('.toast-icon')).toBeNull();

    (root as HTMLIxToastElement).hideIcon = false;
    await waitForChanges();

    expect(
      root.shadowRoot!.querySelector('ix-icon')?.getAttribute('name')
    ).toBe(iconInfo);
  });

  it('updates the default icon color when switching to and from base', async () => {
    const { root, waitForChanges } = await render(
      <ix-toast preventAutoClose>Notification</ix-toast>
    );

    const element = root as HTMLIxToastElement;
    for (const type of ['base', 'information', 'base'] as const) {
      element.type = type;
      await waitForChanges();

      expect(root.getAttribute('type')).toBe(type);
      const icon = root.shadowRoot!.querySelector('ix-icon');
      expect(icon?.getAttribute('name')).toBe(iconInfo);
      expect(icon?.getAttribute('color')).toBe(
        type === 'base'
          ? '--si-sys-color-text-primary'
          : '--ix-toast-status-color'
      );
    }
  });
});

describe('toast.base', () => {
  it.each([undefined, 'warning'] as const)(
    'forwards configuration and overrides type=%s without mutating the caller',
    async (type) => {
      const { root } = await render(<ix-toast-container></ix-toast-container>);
      const container = root as HTMLIxToastContainerElement;
      const showToast = vi.spyOn(container, 'showToast');
      const message = document.createElement('span');
      message.textContent = 'Base notification';
      const action = document.createElement('button');
      action.textContent = 'Undo';
      const config: ToastConfig = Object.freeze({
        type,
        title: 'Base title',
        message,
        action,
        autoClose: false,
        autoCloseDelay: 10000,
        icon: iconSuccess,
        iconColor: '--si-sys-color-border-success',
        hideIcon: true,
      });

      const result = await toast.base(config);

      expect(showToast).toHaveBeenCalledExactlyOnceWith({
        ...config,
        type: 'base',
      });
      expect(config.type).toBe(type);
      expect(result).toBe(await showToast.mock.results[0].value);
      expect(container.querySelector('ix-toast')).not.toBeNull();

      result.close();

      expect(container.querySelector('ix-toast')).toBeNull();
    }
  );
});
