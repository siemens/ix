/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

const TIME_INPUT_SELECTOR = 'ix-time-picker';

test('renders', async ({ mount, page }) => {
  await mount(`<ix-time-picker></ix-time-picker>`);
  const datePicker = page.locator(TIME_INPUT_SELECTOR);
  await expect(datePicker).toHaveClass(/hydrated/);
});
