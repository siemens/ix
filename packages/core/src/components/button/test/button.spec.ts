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
import { Button } from '../button';

describe('button', () => {
  it('should not be clickable with disabled prop', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ix-button disabled>Example</ix-button>`,
    });

    await page.waitForChanges();
    const btn = page.doc.querySelector('ix-button');
    expect(btn.className).toContain('disabled');
  });

  it('should submit form if type is submit', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `
        <form>
          <input name="some_input" />
          <ix-button type="submit">Example</ix-button>
        </form>
      `,
    });

    await page.waitForChanges();
    const submitButton = page.doc
      .querySelector('ix-button')
      .shadowRoot.querySelector('button');
    const form = page.doc.querySelector('form');

    const onSubmit = jest.fn();

    form.addEventListener('submit', onSubmit);

    fireEvent.click(submitButton);

    expect(onSubmit).toHaveBeenCalled();
  });
});
