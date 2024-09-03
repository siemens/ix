/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest, test } from '@utils/test';

regressionTest.describe('tooltip', () => {
  regressionTest('Long Text long words', async ({ page }) => {
    await page.goto('tooltip/basic');

    const tooltipTriggerHandler = await page.waitForSelector(
      '[data-tooltip="Test1"]'
    );

    await tooltipTriggerHandler.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.01,
    });
  });

  regressionTest('Short', async ({ page }) => {
    await page.goto('tooltip/basic');

    const tooltipTriggerHandler = await page.waitForSelector(
      '[data-tooltip="Test2"]'
    );

    await tooltipTriggerHandler.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.01,
    });
  });

  regressionTest('Long text short words', async ({ page }) => {
    await page.goto('tooltip/basic');

    const tooltipTriggerHandler = await page.waitForSelector(
      '[data-tooltip="Test3"]'
    );

    await tooltipTriggerHandler.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.01,
    });
  });

  regressionTest('fallback placement', async ({ page }) => {
    await page.goto('tooltip/placement-fallback');

    const tooltipTriggerHandler = await page.waitForSelector(
      '[data-tooltip="Test3"]'
    );

    await tooltipTriggerHandler.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.01,
    });
  });

  regressionTest('style not floating in tooltip', async ({ page }) => {
    await page.goto('tooltip/table');

    const tooltipTriggerHandler = await page.waitForSelector(
      '[data-tooltip="Test3"]'
    );

    await tooltipTriggerHandler.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot({
      maxDiffPixelRatio: 0.01,
    });
  });

  test('tooltip position top', async ({ mount, page }) => {
    await mount(`
      <div style="padding: 10rem">
        <ix-button id="trigger">Trigger</ix-button>
        <ix-tooltip for="#trigger" placement="top">
          Tooltip content 123 123
        </ix-tooltip>
      </div>
    `);

    const trigger = await page.waitForSelector('#trigger');
    await trigger.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  test('tooltip position right', async ({ mount, page }) => {
    await mount(`
      <div style="padding: 10rem">
        <ix-button id="trigger">Trigger</ix-button>
        <ix-tooltip for="#trigger" placement="right">
          Tooltip content 123 123
        </ix-tooltip>
      </div>
    `);

    const trigger = await page.waitForSelector('#trigger');
    await trigger.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  test('tooltip position bottom', async ({ mount, page }) => {
    await mount(`
      <div style="padding: 10rem">
        <ix-button id="trigger">Trigger</ix-button>
        <ix-tooltip for="#trigger" placement="bottom">
          Tooltip content 123 123
        </ix-tooltip>
      </div>
    `);

    const trigger = await page.waitForSelector('#trigger');
    await trigger.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });

  test('tooltip position left', async ({ mount, page }) => {
    await mount(`
      <div style="width: 10rem; height: 10rem">
        <ix-button id="trigger" style="position: absolute; left: 20rem; top: 10rem;">Trigger</ix-button>
        <ix-tooltip for="#trigger" placement="left">
          Tooltip content 123 123
        </ix-tooltip>
      </div>
    `);

    const trigger = await page.waitForSelector('#trigger');
    await trigger.hover();
    await page.waitForTimeout(500);

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});

regressionTest.describe('tooltip delay', () => {
  ['top', 'right', 'bottom', 'left'].forEach((placement) => {
    test(`tooltip placement ${placement} with delay`, async ({
      mount,
      page,
    }) => {
      const testDelayToShowTooltip = 1100;
      await mount(`
      <div style="margin: 20rem">
        <ix-button>Long text</ix-button>
        <ix-tooltip
          for="ix-button"
          title-content="Test"
          showDelay="1000"
          placement="${placement}"
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </ix-tooltip>
      </div>
      `);

      const tooltipTrigger = page.locator('ix-button');
      await tooltipTrigger.hover();

      await page.waitForTimeout(testDelayToShowTooltip);

      expect(await page.screenshot()).toMatchSnapshot();
    });
  });
});
