/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(
    `
      <ix-button>Content</ix-button>
    `
  );

  const buttonElement = page.locator('ix-button');

  await expect(buttonElement).toHaveClass('hydrated');
});
