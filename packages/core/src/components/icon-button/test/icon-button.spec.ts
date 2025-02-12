/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { newSpecPage } from '@stencil/core/testing';
import { IconButton } from '../icon-button';

function queryButton(page: any) {
  return page.doc
    .querySelector('ix-icon-button')
    .shadowRoot.querySelector('button');
}

describe('icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconButton],
      html: `<ix-icon-button icon="rocket" disabled></ix-icon-button>`,
    });

    await page.waitForChanges();
    const btn = page.doc.querySelector('ix-icon-button')!;
    expect(btn.className).toContain('disabled');
  });

  it('should submit form if type is submit', async () => {
    const page = await newSpecPage({
      components: [IconButton],
      html: `
      <form>
        <input type="text" />
        <ix-icon-button type="submit">Submit</ix-icon-button>s
      </form>
      `,
    });

    await page.waitForChanges();

    const btn = queryButton(page);
    const shadowButton = page.doc.querySelector(
      'ix-icon-button[type="submit"] > button'
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

  it('should not render submit button if normal button is requirers', async () => {
    const page = await newSpecPage({
      components: [IconButton],
      html: `
      <form>
        <input type="text" />
        <ix-icon-button>Submit</ix-icon-button>s
      </form>
      `,
    });

    await page.waitForChanges();

    const btn = queryButton(page);
    const shadowButton = page.doc.querySelector(
      'ix-icon-button > button'
    ) as HTMLButtonElement;

    expect(btn).toBeDefined();
    expect(shadowButton).toBeNull();
  });

  describe('a11y', () => {
    it('should have a fallback icon aria name', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button icon="rocket"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('Rocket');
    });

    it('should have a fallback icon aria name without fill postfix', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button icon="about-filled"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('About');
    });

    it('should have a fallback icon aria name', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button icon="about-battery-filled"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('About Battery');
    });

    it('should have a fallback icon aria name without numbers inside name', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button icon="battery100-percentage"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('Battery Percentage');
    });

    it('should have a fallback icon aria name without numbers between', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button icon="battery-100-percentage"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('Battery 100 Percentage');
    });

    it('should have a fallback icon with multiple dashes', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button icon="text-circle-rectangle-filled"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('Text Circle Rectangle');
    });

    it('should have an aria label', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button a11y-label="some label"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('some label');
    });

    it('should have an unknown aria label with an URL', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button icon="https://someurl.com/test.svg"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('Unknown');
    });

    it('should have an unknown aria label with an base64 encoded SVG', async () => {
      const page = await newSpecPage({
        components: [IconButton],
        html: `<ix-icon-button icon="data:image/svg+xml"></ix-icon-button>`,
      });

      await page.waitForChanges();

      const button = queryButton(page);

      expect(button).toHaveAttribute('aria-label');
      expect(button.getAttribute('aria-label')).toBe('Unknown');
    });
  });
});
