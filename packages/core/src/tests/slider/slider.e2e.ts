/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { iconRocket } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('should show reference value', async ({ page, mount }) => {
  await mount(`
    <div id='slider-container'>
      <ix-slider
        style="width: 20rem"
        value="100"
      ></ix-slider>

      <ix-slider
        style="width: 20rem"
        value="100"
        step="25"
        trace
        trace-reference="25"
      ></ix-slider>

      <ix-slider
        style="width: 20rem"
        value="100"
        step="25"
        trace
        trace-reference="50"
      ></ix-slider>

      <ix-slider
        style="width: 20rem"
        value="0"
        trace
        trace-reference="75"
      ></ix-slider>

      <ix-slider
        style="width: 20rem"
        trace
        value="50"
      ></ix-slider>


      <ix-slider
        style="width: 20rem"
        trace
        trace-reference="100"
        value="50"
      ></ix-slider>
    </div>
  `);

  const slider = page.locator('ix-slider').nth(0);
  await expect(slider).toHaveClass(/hydrated/);
  await expect(slider).toBeVisible();

  expect(
    await page.locator('#slider-container').screenshot()
  ).toMatchSnapshot();
});

regressionTest('should render marker', async ({ page, mount }) => {
  await mount(`
    <ix-slider
      style="width: 20rem"
      value="40"
      max="250"
      min="25"
    ></ix-slider>
  `);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveClass(/hydrated/);

  await slider.evaluate(
    (elm: HTMLIxSliderElement) => (elm.marker = [10, 20, 70, 80, 100])
  );

  expect(await page.locator('ix-slider').screenshot()).toMatchSnapshot();
});

regressionTest('should show float steps', async ({ page, mount }) => {
  await mount(`
    <ix-slider
      style="width: 20rem"
      value="0.2"
      max="1"
      step="0.1"
      min="0"
    ></ix-slider>
  `);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveClass(/hydrated/);

  await slider.hover();
  await page.mouse.move(100, 0);
  await page.mouse.down();

  expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
});

regressionTest(
  'should render with min-max changes',
  async ({ page, mount }) => {
    await mount(`
    <div id='slider-container'>

      <ix-slider
        min="500"
        max="1000"
        value="777"
        trace
        traceReference="498"
      ></ix-slider>

      <ix-slider
        min="-100"
        max="50"
        value="25"
        trace
        traceReference="-40"
      ></ix-slider>

    </div>
  `);

    const slider1 = page.locator('ix-slider').nth(0);
    const slider2 = page.locator('ix-slider').nth(1);

    await expect(slider1).toHaveClass(/hydrated/);
    await expect(slider2).toHaveClass(/hydrated/);

    await slider1.evaluate((elm: HTMLIxSliderElement) => {
      elm.marker = [700, 800, 900];
    });

    await slider2.evaluate((elm: HTMLIxSliderElement) => {
      elm.marker = [-50, 25];
    });

    expect(
      await page.locator('#slider-container').screenshot()
    ).toMatchSnapshot();
  }
);

regressionTest('should render with label', async ({ page, mount }) => {
  await mount(
    `
    <div id='slider-container'>

      <ix-slider
        min="500"
        max="1000"
        value="777"
        trace
        traceReference="2000"
        >
        <span slot="label-start">500</span>
        <span slot="label-end">1000</span>
      </ix-slider>

      <ix-slider>
        <ix-icon name="rocket" slot="label-start">500</ix-icon>
        <ix-icon name="rocket" slot="label-end">1000</ix-icon>
      </ix-slider>

    </div>
  `,
    {
      icons: {
        iconRocket,
      },
    }
  );

  const slider1 = page.locator('ix-slider').nth(0);
  const slider2 = page.locator('ix-slider').nth(1);

  await expect(slider1).toHaveClass(/hydrated/);
  await expect(slider2).toHaveClass(/hydrated/);

  expect(
    await page.locator('#slider-container').screenshot()
  ).toMatchSnapshot();
});

regressionTest('should render with error', async ({ page, mount }) => {
  await mount(`
    <div id='slider-container'>

      <ix-slider error="Some error message">
      </ix-slider>

      <ix-slider error="Some error message">
        <span slot="label-start">500</span>
        <span slot="label-end">1000</span>
      </ix-slider>

    </div>
  `);

  const slider1 = page.locator('ix-slider').nth(0);
  const slider2 = page.locator('ix-slider').nth(1);

  await expect(slider1).toHaveClass(/hydrated/);
  await expect(slider2).toHaveClass(/hydrated/);

  expect(
    await page.locator('#slider-container').screenshot()
  ).toMatchSnapshot();
});
