/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { describe, expect, it, vi } from 'vitest';

function queryButton(host: HTMLElement) {
  return host.shadowRoot?.querySelector('button');
}

describe('icon-button', () => {
  it('renders', async () => {
    const { root } = await render(
      <ix-icon-button icon="rocket" disabled></ix-icon-button>
    );

    const button = root as HTMLIxIconButtonElement;

    expect(button.className).toContain('disabled');
  });

  it('should submit form if type is submit', async () => {
    const { root, waitForChanges } = await render(
      <form>
        <input type="text" />
        <ix-icon-button type="submit">Submit</ix-icon-button>
      </form>
    );

    await waitForChanges();

    const host = root.querySelector(
      'ix-icon-button'
    ) as HTMLIxIconButtonElement;
    const button = queryButton(host) as HTMLButtonElement | null;
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

  it('should not render submit button if normal button is requirers', async () => {
    const { root, waitForChanges } = await render(
      <form>
        <input type="text" />
        <ix-icon-button>Submit</ix-icon-button>
      </form>
    );

    await waitForChanges();

    const host = root.querySelector(
      'ix-icon-button'
    ) as HTMLIxIconButtonElement;
    const button = queryButton(host);
    const submitButton = host.querySelector('button');

    expect(button).toBeDefined();
    expect(submitButton).toBeNull();
  });

  describe('a11y', () => {
    it('should have a fallback icon aria name', async () => {
      const { root } = await render(
        <ix-icon-button icon="rocket"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('Rocket');
    });

    it('should have a fallback icon aria name without fill postfix', async () => {
      const { root } = await render(
        <ix-icon-button icon="about-filled"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('About');
    });

    it('should have a fallback icon aria name', async () => {
      const { root } = await render(
        <ix-icon-button icon="about-battery-filled"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('About Battery');
    });

    it('should have a fallback icon aria name without numbers inside name', async () => {
      const { root } = await render(
        <ix-icon-button icon="battery100-percentage"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('Battery Percentage');
    });

    it('should have a fallback icon aria name without numbers between', async () => {
      const { root } = await render(
        <ix-icon-button icon="battery-100-percentage"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('Battery 100 Percentage');
    });

    it('should have a fallback icon with multiple dashes', async () => {
      const { root } = await render(
        <ix-icon-button icon="text-circle-rectangle-filled"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('Text Circle Rectangle');
    });

    it('should have an aria label', async () => {
      const { root } = await render(
        <ix-icon-button aria-label="some label"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('some label');
    });

    it('should have an unknown aria label with an URL', async () => {
      const { root } = await render(
        <ix-icon-button icon="https://someurl.com/test.svg"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('Unknown');
    });

    it('should have an unknown aria label with an base64 encoded SVG', async () => {
      const { root } = await render(
        <ix-icon-button icon="data:image/svg+xml"></ix-icon-button>
      );

      const button = queryButton(root as HTMLIxIconButtonElement);

      expect(button).toHaveAttribute('aria-label');
      expect(button?.getAttribute('aria-label')).toBe('Unknown');
    });
  });
});
