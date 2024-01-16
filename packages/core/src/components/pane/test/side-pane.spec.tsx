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
import {h} from "@stencil/core";

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-pane
        paneTitle="LEFT"
        position="left"
        icon="about"
        expand={true}
    >
        <h1>Test Heading</h1>
        <p>This is a test content with a button</p>
        <ix-button>PUSH ME</ix-button>
    </ix-pane>
    `);
  const element = page.locator('ix-pane');
  await expect(element).toHaveClass(/hydrated/);

  await page.locator('[data-select-dropdown]').click();

  const aside = element.locator('aside');
  await expect(aside).toBeVisible();
});
