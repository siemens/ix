/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import {
  getFormValue,
  preventFormSubmission,
  regressionTest,
} from '@utils/test';

regressionTest('renders', async ({ page, mount }) => {
  await mount(`<ix-slider></ix-slider>`);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveAttribute('hydrated');
});

regressionTest('should show tooltip by focus', async ({ page, mount }) => {
  await mount(`<ix-slider value="20"></ix-slider>`);

  const slider = page.locator('ix-slider');
  await expect(slider).toHaveAttribute('hydrated');

  const input = slider.locator('input');

  const tooltip = slider.locator('ix-tooltip');
  await input.focus();
  await expect(tooltip).toHaveClass(/visible/);
  const left = (await tooltip.locator('dialog').boundingBox())?.x;

  if (!left) {
    throw new Error('Tooltip bounding box is x is undefined.');
  }

  await input.press('ArrowRight');
  await input.press('ArrowRight');

  await page.waitForTimeout(500);
  await expect(tooltip).toHaveClass(/visible/);
  const leftAfterKeyboardNavigation = (
    await tooltip.locator('dialog').boundingBox()
  )?.x;

  expect(leftAfterKeyboardNavigation).toBeGreaterThan(left);

  await input.blur();
  await page.waitForTimeout(500);
  await expect(tooltip).not.toHaveClass(/visible/);
});

regressionTest(
  'should show tooltip while mouse drags slider handle',
  async ({ page, mount }) => {
    await mount(`<ix-slider value="20"></ix-slider>`);

    const slider = page.locator('ix-slider');
    await expect(slider).toHaveAttribute('hydrated');

    const tooltip = slider.locator('ix-tooltip');

    await expect(tooltip).not.toHaveClass(/visible/);

    const box = await slider.boundingBox();

    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      await page.mouse.move(box.x + box.width / 3, box.y + box.height / 3);
      await expect(tooltip).toHaveClass(/visible/);
    } else {
      throw new Error('Slider bounding box is null.');
    }

    await page.mouse.up();
    await expect(tooltip).not.toHaveClass(/visible/);
  }
);

regressionTest(
  'should not change value - prevent default',
  async ({ page, mount }) => {
    await mount(`<ix-slider value="20"></ix-slider>`);
    const slider = page.locator('ix-slider');
    await slider.evaluate((s) =>
      s.addEventListener('valueChange', (e) => e.preventDefault())
    );
    await page.mouse.click(100, 16);
    await expect(slider).toHaveAttribute('value', '20');
  }
);

regressionTest(`form-readiness`, async ({ mount, page }) => {
  await mount(
    `<form><ix-slider name="ix-slider" value="0"></ix-slider></form>`
  );

  const formElement = page.locator('form');
  preventFormSubmission(formElement);
  const input = page.locator('ix-slider').locator('input');
  await input.focus();
  await input.evaluate((el) => {
    (el as HTMLInputElement).value = '50';
    el.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await input.blur();

  const formData = await getFormValue(formElement, 'ix-slider', page);
  expect(formData).toBe('50');
});

regressionTest(
  'colors the track from the minimum to the value',
  async ({ page, mount }) => {
    await mount(`<ix-slider value="50"></ix-slider>`);

    const control = page.locator('ix-slider .slider');
    await expect(control).toHaveClass(/value-fill/);
    await expect(control).toHaveClass(/hide-trace-reference/);
    expect((await control.getAttribute('class'))?.split(/\s+/)).not.toContain(
      'trace'
    );
    await expect(control).toHaveAttribute('style', /--trace-start:\s*0/);
    await expect(control).toHaveAttribute('style', /--trace-end:\s*0\.5/);
  }
);

regressionTest(
  'colors the track between the trace reference and the value',
  async ({ page, mount }) => {
    await mount(
      `<ix-slider value="75" trace trace-reference="25"></ix-slider>`
    );

    const control = page.locator('ix-slider .slider');
    await expect(control).toHaveClass(/value-fill/);
    await expect(control).toHaveClass(/trace/);
    await expect(control).not.toHaveClass(/hide-trace-reference/);
    await expect(control).toHaveAttribute('style', /--trace-start:\s*0\.25/);
    await expect(control).toHaveAttribute('style', /--trace-end:\s*0\.75/);
  }
);

regressionTest(
  'uses a round thumb inside a 32px control',
  async ({ page, mount }) => {
    await mount(`<ix-slider value="50"></ix-slider>`);

    const slider = page.locator('ix-slider');
    await expect(slider.locator('.slider')).toHaveCSS('height', '32px');
    await expect(slider.locator('.thumb')).toHaveCSS('width', '20px');
    await expect(slider.locator('.thumb')).toHaveCSS('height', '20px');
  }
);

regressionTest(
  'lets 3px of the thumb extend past the track ends',
  async ({ page, mount }) => {
    await mount(`<ix-slider value="0"></ix-slider>`);

    const slider = page.locator('ix-slider');
    const track = slider.locator('.track');
    const thumb = slider.locator('.thumb');
    await expect(thumb).toHaveCSS('left', '-3px');

    const trackAtMin = await track.boundingBox();
    const thumbAtMin = await thumb.boundingBox();
    expect(trackAtMin).toBeTruthy();
    expect(thumbAtMin).toBeTruthy();
    expect(Math.round(trackAtMin!.x - thumbAtMin!.x)).toBe(3);

    await slider.evaluate((element: HTMLIxSliderElement) => {
      element.value = element.max;
    });

    await expect
      .poll(async () => {
        const trackAtMax = await track.boundingBox();
        const thumbAtMax = await thumb.boundingBox();
        if (!trackAtMax || !thumbAtMax) {
          return null;
        }
        return Math.round(
          thumbAtMax.x + thumbAtMax.width - (trackAtMax.x + trackAtMax.width)
        );
      })
      .toBe(3);
  }
);
