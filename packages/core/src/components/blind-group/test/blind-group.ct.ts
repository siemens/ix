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

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-blind-group individualBlindOpen>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
    </ix-blind-group>
  `);
  const blindItem1 = page.locator('ix-blind').nth(0);
  const blindItem2 = page.locator('ix-blind').nth(1);
  const blindItem3 = page.locator('ix-blind').nth(2);
  await expect(blindItem1).toBeVisible();
  await expect(blindItem2).toBeVisible();
  await expect(blindItem3).toBeVisible();
});

test('only one blind open', async ({ mount, page }) => {
  await mount(`
    <ix-blind-group individualBlindOpen>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
    </ix-blind-group>
  `);
  const blindItem1 = page.locator('ix-blind').nth(0);
  const blindItem2 = page.locator('ix-blind').nth(1);
  const blindItem3 = page.locator('ix-blind').nth(2);

  await blindItem2.click();

  await expect(blindItem1.locator('section')).not.toBeVisible();
  await expect(blindItem2.locator('section')).toBeVisible();
  await expect(blindItem3.locator('section')).not.toBeVisible();
});

test('disable blinds', async ({ mount, page }) => {
  await mount(`
    <ix-blind-group disableAccordion={true}>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
      <ix-blind label="Example">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </ix-blind>
    </ix-blind-group>
  `);
  const blindItem1 = page.locator('ix-blind').nth(0);
  const blindItem2 = page.locator('ix-blind').nth(1);
  const blindItem3 = page.locator('ix-blind').nth(2);

  await blindItem2.click();

  await expect(blindItem1.locator('section')).not.toBeVisible();
  await expect(blindItem2.locator('section')).not.toBeVisible();
  await expect(blindItem3.locator('section')).not.toBeVisible();
});
