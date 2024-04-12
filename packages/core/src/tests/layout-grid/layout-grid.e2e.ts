/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test, viewPorts } from '@utils/test';

test('should not have regression', async ({ mount, page }) => {
  await page.setViewportSize(viewPorts.lg);
  await mount(htmlSource);
  const grid = page.locator('ix-layout-grid').nth(0);
  await expect(grid).toHaveClass(/hydrated/);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

test('should not have regression large', async ({ mount, page }) => {
  await page.setViewportSize(viewPorts.lg);
  await mount(htmlSimple);
  const grid = page.locator('ix-layout-grid').nth(0);
  await expect(grid).toHaveClass(/hydrated/);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

test('should not have regression medium', async ({ mount, page }) => {
  await page.setViewportSize(viewPorts.md);
  await mount(htmlSimple);
  const grid = page.locator('ix-layout-grid').nth(0);
  await expect(grid).toHaveClass(/hydrated/);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

test('should not have regression small', async ({ mount, page }) => {
  await page.setViewportSize(viewPorts.sm);
  await mount(htmlSimple);
  const grid = page.locator('ix-layout-grid').nth(0);
  await expect(grid).toHaveClass(/hydrated/);

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

const htmlSimple = `
  <ix-layout-grid>
    <ix-row>
      <ix-col size="12" size-sm="12" size-md="2" size-lg="4">
        1
      </ix-col>
      <ix-col size="12" size-sm="12" size-md="2" size-lg="4">
        2
      </ix-col>
      <ix-col size="12" size-sm="12" size-md="2" size-lg="4">
        3
      </ix-col>
    </ix-row>
  </ix-layout-grid>

  <style>
    ix-col {
      background-color: var(--theme-color-success-40);
      border: solid 1px #fff;
      color: #fff;
      text-align: center;
    }
  </style>
`;

const htmlSource = `
<h4>Column = 4</h4>
<ix-layout-grid columns="4">
  <ix-row>
    <ix-col size="2">1</ix-col>
    <ix-col size="2">2</ix-col>
    <ix-col size="2">
      <ix-button style="width: 100%;">Test</ix-button>
    </ix-col>
    <ix-col size="2">4</ix-col>
    <ix-col size="2">5</ix-col>
  </ix-row>
</ix-layout-grid>

<h4>Normal</h4>
<ix-layout-grid>
  <ix-row>
    <ix-col>1</ix-col>
    <ix-col>2</ix-col>
    <ix-col size="2">
      <ix-button style="width: 100%;">Test</ix-button>
    </ix-col>
    <ix-col>4</ix-col>
    <ix-col>5</ix-col>
  </ix-row>
</ix-layout-grid>

<h4>No padding</h4>
<ix-layout-grid no-margin>
  <ix-row>
    <ix-col size="2">1</ix-col>
    <ix-col size="2">2</ix-col>
    <ix-col>
      <ix-button style="width: 100%;">Test</ix-button>
    </ix-col>
    <ix-col size="2">4</ix-col>
    <ix-col size="2">5</ix-col>
  </ix-row>
</ix-layout-grid>

<h4>No row gap</h4>
<ix-layout-grid no-row-gap>
  <ix-row>
    <ix-col size="2">1</ix-col>
    <ix-col size="2">2</ix-col>
    <ix-col>
      <ix-button style="width: 100%;">Test</ix-button>
    </ix-col>
    <ix-col size="2">4</ix-col>
    <ix-col size="2">5</ix-col>
  </ix-row>

  <ix-row>
    <ix-col size="2">1</ix-col>
    <ix-col size="2">2</ix-col>
    <ix-col>
      <ix-button style="width: 100%;">Test</ix-button>
    </ix-col>
    <ix-col size="2">4</ix-col>
    <ix-col size="2">5</ix-col>
  </ix-row>
</ix-layout-grid>

<style>
ix-col {
  background-color: var(--theme-color-success-40);
  border: solid 1px #fff;
  color: #fff;
  text-align: center;
}
</style>
`;
