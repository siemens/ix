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

  it('should not render submit button if normal button is requirers', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
      <form>
        <input type="text" />
        <ix-button>Submit</ix-button>s
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
        <ix-button type="submit">Submit</ix-button>s
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
});
