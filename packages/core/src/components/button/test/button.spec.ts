/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

describe('button', () => {
  it('should not be clickable with disabled prop', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ix-button disabled>Example</ix-button>`,
    });

    await page.waitForChanges();
    const btn = page.doc.querySelector('ix-button')!;
    expect(btn.className).toContain('disabled');
  });

  it('should not render submit button if normal button is required', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <form>
        <input type="text" />
        <ix-button>Submit</ix-button>
      </form>
      `,
    });

    await page.waitForChanges();

    const btn = page.doc
      .querySelector('ix-button')!
      .shadowRoot!.querySelector('button');
    const shadowButton = page.doc.querySelector(
      'ix-button > button'
    ) as HTMLButtonElement;

    expect(btn).toBeDefined();
    expect(shadowButton).toBeNull();
  });

  it('should submit form if type is submit', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <form>
        <input type="text" />
        <ix-button type="submit">Submit</ix-button>
      </form>
      `,
    });

    await page.waitForChanges();

    const btn = page.doc
      .querySelector('ix-button[type="submit"]')!
      .shadowRoot!.querySelector('button')!;
    const shadowButton = page.doc.querySelector(
      'ix-button[type="submit"] > button'
    ) as HTMLButtonElement;

    const onClick = jest.fn();

    shadowButton.addEventListener('click', onClick);

    expect(btn).toBeDefined();
    expect(shadowButton).toBeDefined();
    expect(shadowButton.style.display).toStrictEqual('none');
    expect(shadowButton.type).toStrictEqual('submit');
    expect(shadowButton.tabIndex).toStrictEqual(-1);

    btn.click();
    expect(onClick).toHaveBeenCalled();
  });

  describe('link functionality', () => {
    it('renders as anchor when href is provided', async () => {
      const page = await newSpecPage({
        components: [Button],
        html: `<ix-button href="https://example.com">Link Button</ix-button>`,
      });

      const anchorElement = page.root?.shadowRoot?.querySelector('a');
      const buttonElement = page.root?.shadowRoot?.querySelector('button');

      expect(anchorElement).not.toBeNull();
      expect(buttonElement).toBeNull();
      expect(anchorElement?.getAttribute('href')).toBe('https://example.com');
      expect(anchorElement?.getAttribute('role')).toBe('button');
    });

    it('renders as button when href is not provided', async () => {
      const page = await newSpecPage({
        components: [Button],
        html: `<ix-button>Regular Button</ix-button>`,
      });

      const anchorElement = page.root?.shadowRoot?.querySelector('a');
      const buttonElement = page.root?.shadowRoot?.querySelector('button');

      expect(anchorElement).toBeNull();
      expect(buttonElement).not.toBeNull();
      expect(buttonElement?.getAttribute('type')).toBe('button');
    });

    it('applies target attribute correctly', async () => {
      const page = await newSpecPage({
        components: [Button],
        html: `<ix-button href="https://example.com" target="_blank">New Tab</ix-button>`,
      });

      const anchorElement = page.root?.shadowRoot?.querySelector('a');
      expect(anchorElement?.getAttribute('target')).toBe('_blank');
    });

    it('disables link when disabled prop is true', async () => {
      const page = await newSpecPage({
        components: [Button],
        html: `<ix-button href="https://example.com" disabled>Disabled Link</ix-button>`,
      });

      const anchorElement = page.root?.shadowRoot?.querySelector('a');
      expect(anchorElement?.getAttribute('href')).toBeNull();
      expect(anchorElement?.hasAttribute('href')).toBe(false);
    });

    it('applies rel attribute for security', async () => {
      const page = await newSpecPage({
        components: [Button],
        html: `<ix-button href="https://example.com" target="_blank" rel="noopener noreferrer">Secure Link</ix-button>`,
      });

      const anchorElement = page.root?.shadowRoot?.querySelector('a');
      expect(anchorElement?.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('preserves all button styling classes', async () => {
      const page = await newSpecPage({
        components: [Button],
        html: `<ix-button href="https://example.com" variant="secondary">Styled Link</ix-button>`,
      });

      const anchorElement = page.root?.shadowRoot?.querySelector('a');
      expect(anchorElement?.classList.contains('btn')).toBe(true);
      expect(anchorElement?.classList.contains('btn-secondary')).toBe(true);
    });
  });
});
