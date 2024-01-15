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

describe('icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IconButton],
      html: `<ix-icon-button icon="rocket" disabled></ix-icon-button>`,
    });

    await page.waitForChanges();
    const btn = page.doc.querySelector('ix-icon-button');
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

    const btn = page.doc
      .querySelector('ix-icon-button[type="submit"]')
      .shadowRoot.querySelector('button');
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

    const btn = page.doc
      .querySelector('ix-icon-button')
      .shadowRoot.querySelector('button');
    const shadowButton = page.doc.querySelector(
      'ix-icon-button > button'
    ) as HTMLButtonElement;

    expect(btn).toBeDefined();
    expect(shadowButton).toBeNull();
  });
});
