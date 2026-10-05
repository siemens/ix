/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator } from '@playwright/test';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  await expect(page.locator('ix-expanding-search')).toHaveClass(/\bhydrated\b/);
  await page.getByRole('button', { name: 'Open search' }).click();
  await expect(page.locator('ix-expanding-search')).toHaveClass(/\bexpanded\b/);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  const button = page.locator('ix-expanding-search');
  await expect(button).toHaveClass(/\bhydrated\b/);
  await expect(button).toBeVisible();
});

regressionTest('expands input', async ({ mount, page }) => {
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  const element = page.locator('ix-expanding-search');
  const button = page.getByRole('button', { name: 'Open search' });

  await button.click();
  await expect(element).toHaveClass(/expanded/);
});

regressionTest('collapse input', async ({ mount, page }) => {
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  const element = page.locator('ix-expanding-search');
  const button = page.getByRole('button', { name: 'Open search' });
  const input = page.getByRole('textbox', { name: 'Search input' });

  await button.click();
  await input.click();
  await input.blur();
  await expect(element).not.toHaveClass(/expanded/);
});

regressionTest('changes input', async ({ mount, page }) => {
  await mount(`<ix-expanding-search></ix-expanding-search>`);
  const element = page.locator('ix-expanding-search');
  const button = page.getByRole('button', { name: 'Open search' });
  const input = page.getByRole('textbox', { name: 'Search input' });

  await button.click();
  await input.fill('new input');

  await input.blur();
  await expect(element).toHaveClass(/expanded/);
});

regressionTest(
  'erases the input when clear button is clicked',
  async ({ mount, page }) => {
    await mount(`<ix-expanding-search></ix-expanding-search>`);
    const element = page.locator('ix-expanding-search');
    const button = page.getByRole('button', { name: 'Open search' });
    const clearButton = page.getByRole('button', { name: 'Clear search' });
    const input = page.getByRole('textbox', { name: 'Search input' });

    await button.click();
    await input.fill('new input');

    await clearButton.click();
    await input.blur();

    await expect(input).toHaveValue('');
    await expect(element).not.toHaveClass(/expanded/);
  }
);

async function pauseWidthTransition(element: Locator) {
  await expect
    .poll(() =>
      element.evaluate((el) =>
        el.getAnimations().some((animation) => {
          if (
            animation instanceof CSSTransition &&
            animation.transitionProperty === 'width'
          ) {
            animation.pause();
            return true;
          }
          return false;
        })
      )
    )
    .toBe(true);
}

async function getBounds(element: Locator) {
  const bounds = await element.boundingBox();
  if (!bounds) {
    throw new Error('Expected the search field to have measurable bounds.');
  }
  return bounds;
}

for (const alignment of ['flex-start', 'flex-end']) {
  for (const fullWidth of [false, true]) {
    for (const duration of [undefined, '1s']) {
      regressionTest(
        `keeps ${
          fullWidth ? 'full-width' : 'fixed-width'
        } search aligned during expansion and collapse (${alignment}, ${
          duration ?? 'default timing'
        })`,
        async ({ mount, page }) => {
          await page.emulateMedia({ reducedMotion: 'no-preference' });
          await mount(`
          <div style="display: flex; justify-content: ${alignment}; width: 500px">
            <ix-expanding-search ${fullWidth ? 'full-width' : ''}
              ${
                duration
                  ? `style="--ix-expanding-search-input-container--transition-duration: ${duration}"`
                  : ''
              }>
            </ix-expanding-search>
          </div>
        `);
          const element = page.locator('ix-expanding-search');
          const input = page.getByRole('textbox', { name: 'Search input' });
          await expect(element).toHaveClass(/\bhydrated\b/);
          if (duration) {
            await expect(element).toHaveCSS('transition-duration', duration);
          }
          const initialBounds = await getBounds(element);

          await page.getByRole('button', { name: 'Open search' }).click();
          await pauseWidthTransition(element);

          // Seek both directions deterministically instead of sampling wall-clock time.
          for (const expanded of [true, false]) {
            if (!expanded) {
              await expect(input).toBeFocused();
              await input.blur();
              await expect(element).not.toHaveClass(/\bexpanded\b/);
              await pauseWidthTransition(element);
            }

            for (const progress of [0.25, 0.5, 0.75, 1]) {
              for (const target of [
                element,
                element.locator('.input-container'),
                input,
              ]) {
                await target.evaluate(async (el, progress) => {
                  for (const animation of el.getAnimations()) {
                    animation.pause();
                    await animation.ready;
                    const duration = animation.effect?.getTiming().duration;
                    if (typeof duration !== 'number') {
                      throw new Error(
                        'Expected a transition with a numeric duration.'
                      );
                    }
                    animation.currentTime = duration * progress;
                  }
                  await new Promise<void>((resolve) =>
                    requestAnimationFrame(() => resolve())
                  );
                }, progress);
              }

              const hostBounds = await getBounds(element);
              const inputBounds = await getBounds(input);
              expect(Math.abs(inputBounds.x - hostBounds.x)).toBeLessThan(1);
              expect(
                Math.abs(inputBounds.width - hostBounds.width)
              ).toBeLessThan(1);

              const anchoredEdge = alignment === 'flex-end' ? 'right' : 'left';
              const initialEdge =
                initialBounds.x +
                (anchoredEdge === 'right' ? initialBounds.width : 0);
              const currentEdge =
                hostBounds.x +
                (anchoredEdge === 'right' ? hostBounds.width : 0);
              expect(Math.abs(currentEdge - initialEdge)).toBeLessThan(1);
              if (progress < 1) {
                expect(hostBounds.width).toBeGreaterThan(initialBounds.width);
              } else if (expanded) {
                if (fullWidth) {
                  expect(hostBounds.width).toBeCloseTo(500);
                } else {
                  expect(hostBounds.width).toBeGreaterThan(initialBounds.width);
                  expect(hostBounds.width).toBeLessThan(500);
                }
              } else {
                expect(hostBounds.width).toBeCloseTo(initialBounds.width);
              }
            }
          }
        }
      );
    }
  }
}
