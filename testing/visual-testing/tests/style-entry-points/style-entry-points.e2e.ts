/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { expect, FrameLocator } from '@playwright/test';
import { regressionTest } from '@utils/test';

const entryPoints = ['default', 'foundation', 'globals', 'legacy'] as const;

type EntryPoint = (typeof entryPoints)[number];

async function getComputedProperty(
  frame: FrameLocator,
  selector: string,
  property: string,
  pseudoElement?: string
) {
  return frame
    .locator(selector)
    .evaluate(
      (element, options) =>
        getComputedStyle(element, options.pseudoElement).getPropertyValue(
          options.property
        ),
      { property, pseudoElement }
    );
}

regressionTest.describe('style entry points', () => {
  regressionTest('composite entry-point matrix', async ({ page }) => {
    await page.goto('style-entry-points/comparison', {
      skipIxHydrationCheck: true,
    });

    const frames = Object.fromEntries(
      entryPoints.map((entryPoint) => [
        entryPoint,
        page.frameLocator(`iframe[data-entry-point="${entryPoint}"]`),
      ])
    ) as Record<EntryPoint, FrameLocator>;

    await Promise.all(
      entryPoints.flatMap((entryPoint) => [
        expect(frames[entryPoint].locator('html')).toHaveAttribute(
          'data-ready',
          'true'
        ),
        expect(
          frames[entryPoint].getByRole('button', { name: 'IX button' })
        ).toBeVisible(),
      ])
    );

    for (const entryPoint of ['default', 'foundation'] as const) {
      expect(
        await getComputedProperty(frames[entryPoint], 'html', 'font-family')
      ).toContain('SiemensSans Pro');
    }

    for (const entryPoint of ['globals', 'legacy'] as const) {
      expect(
        await getComputedProperty(frames[entryPoint], 'html', 'font-family')
      ).not.toContain('SiemensSans Pro');
    }

    for (const entryPoint of ['default', 'globals', 'legacy'] as const) {
      expect(
        await getComputedProperty(
          frames[entryPoint],
          '[data-probe="table"]',
          '--ix-table--background'
        ),
        `${entryPoint}.css should include table utilities`
      ).not.toBe('');
    }
    expect(
      await getComputedProperty(
        frames.foundation,
        '[data-probe="table"]',
        '--ix-table--background'
      )
    ).toBe('');

    expect(
      await getComputedProperty(
        frames.legacy,
        '[data-probe="input"]',
        'min-height'
      )
    ).toBe('32px');
    for (const entryPoint of ['default', 'foundation', 'globals'] as const) {
      expect(
        await getComputedProperty(
          frames[entryPoint],
          '[data-probe="input"]',
          'min-height'
        )
      ).toBe('0px');
    }

    expect(
      await getComputedProperty(
        frames.globals,
        '[data-probe="scrollbar"]',
        'width',
        '::-webkit-scrollbar'
      )
    ).toBe('8px');
    for (const entryPoint of ['default', 'foundation', 'legacy'] as const) {
      expect(
        await getComputedProperty(
          frames[entryPoint],
          '[data-probe="scrollbar"]',
          'width',
          '::-webkit-scrollbar'
        )
      ).not.toBe('8px');
    }

    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot();
  });
});
