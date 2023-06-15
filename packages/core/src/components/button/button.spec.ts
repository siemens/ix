/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { newSpecPage } from '@stencil/core/testing';
import { fireEvent } from '@testing-library/dom';
import { Button } from './button';

describe('button', () => {
  it('form submit', async (done) => {
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
      .querySelector('ix-button[type="submit"]')
      .shadowRoot.querySelector('button');

    const form = page.doc.querySelector('form');

    const onSubmit = jest.fn(() => {
      done();
    });

    form.addEventListener('submit', onSubmit);
    fireEvent.click(btn);

    expect(onSubmit).toHaveBeenCalled();
  });
});
