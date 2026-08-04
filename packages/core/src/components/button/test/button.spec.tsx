/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { describe, expect, it, vi } from 'vitest';

function queryShadowButton(host: HTMLElement) {
  return host.shadowRoot?.querySelector('button');
}

describe('button', () => {
  it('should not be clickable with disabled prop', async () => {
    const { root } = await render(<ix-button disabled>Example</ix-button>);
    const button = root as HTMLIxButtonElement;

    expect(button.className).toContain('disabled');
  });

  it('should not render submit button if normal button is required', async () => {
    const { root, waitForChanges } = await render(
      <form>
        <input type="text" />
        <ix-button>Submit</ix-button>
      </form>
    );

    await waitForChanges();

    const host = root.querySelector('ix-button') as HTMLIxButtonElement;
    const button = queryShadowButton(host);
    const submitButton = host.querySelector('button');

    expect(button).toBeDefined();
    expect(submitButton).toBeNull();
  });

  it('should submit form if type is submit', async () => {
    const { root, waitForChanges } = await render(
      <form>
        <input type="text" />
        <ix-button type="submit">Submit</ix-button>
      </form>
    );

    await waitForChanges();

    const host = root.querySelector('ix-button') as HTMLIxButtonElement;
    const button = queryShadowButton(host) as HTMLButtonElement | null;
    const submitButton = host.querySelector(
      'button'
    ) as HTMLButtonElement | null;
    const submitClickSpy = vi.fn();
    if (submitButton) {
      submitButton.click = submitClickSpy;
    }

    expect(button).toBeDefined();
    expect(submitButton).toBeDefined();
    expect(submitButton?.style.display).toBe('none');
    expect(submitButton?.type).toBe('submit');
    expect(submitButton?.tabIndex).toBe(-1);

    button?.click();
    expect(submitClickSpy).toHaveBeenCalled();
  });

  describe('link functionality', () => {
    it('renders as anchor when href is provided', async () => {
      const { root } = await render(
        <ix-button href="https://example.com">Link Button</ix-button>
      );

      const host = root as HTMLIxButtonElement;
      const anchorElement = host.shadowRoot?.querySelector('a');
      const buttonElement = host.shadowRoot?.querySelector('button');

      expect(anchorElement).not.toBeNull();
      expect(buttonElement).toBeNull();
      expect(anchorElement?.getAttribute('href')).toBe('https://example.com');
      expect(anchorElement?.getAttribute('role')).toBe('button');
    });

    it('renders as button when href is not provided', async () => {
      const { root } = await render(<ix-button>Regular Button</ix-button>);

      const host = root as HTMLIxButtonElement;
      const anchorElement = host.shadowRoot?.querySelector('a');
      const buttonElement = host.shadowRoot?.querySelector('button');

      expect(anchorElement).toBeNull();
      expect(buttonElement).not.toBeNull();
      expect(buttonElement?.getAttribute('type')).toBe('button');
    });

    it('applies target attribute correctly', async () => {
      const { root } = await render(
        <ix-button href="https://example.com" target="_blank">
          New Tab
        </ix-button>
      );

      const host = root as HTMLIxButtonElement;
      const anchorElement = host.shadowRoot?.querySelector('a');

      expect(anchorElement?.getAttribute('target')).toBe('_blank');
    });

    it('disables link when disabled prop is true', async () => {
      const { root } = await render(
        <ix-button href="https://example.com" disabled>
          Disabled Link
        </ix-button>
      );

      const host = root as HTMLIxButtonElement;
      const anchorElement = host.shadowRoot?.querySelector('a');

      expect(anchorElement?.getAttribute('href')).toBeNull();
      expect(anchorElement?.hasAttribute('href')).toBe(false);
    });

    it('applies rel attribute for security', async () => {
      const { root } = await render(
        <ix-button
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Secure Link
        </ix-button>
      );

      const host = root as HTMLIxButtonElement;
      const anchorElement = host.shadowRoot?.querySelector('a');

      expect(anchorElement?.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('preserves all button styling classes', async () => {
      const { root } = await render(
        <ix-button href="https://example.com" variant="secondary">
          Styled Link
        </ix-button>
      );

      const host = root as HTMLIxButtonElement;
      const anchorElement = host.shadowRoot?.querySelector('a');

      expect(anchorElement?.classList.contains('btn')).toBe(true);
      expect(anchorElement?.classList.contains('btn-secondary')).toBe(true);
    });
  });
});
