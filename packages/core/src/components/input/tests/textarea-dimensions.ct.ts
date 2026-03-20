/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { regressionTest } from '@utils/test';
import { expect } from '@playwright/test';

regressionTest(
  'textarea dimensions - default behavior',
  async ({ mount, page }) => {
    await mount(`<ix-textarea></ix-textarea>`);

    const hostElement = page.locator('ix-textarea');
    await expect(hostElement).toHaveClass(/hydrated/);

    const textarea = hostElement.locator('textarea');

    // Check default styles are applied (no inline width/height fallback)
    await expect(textarea).not.toHaveAttribute('style', /width/);
    await expect(textarea).not.toHaveAttribute('style', /height/);
    await expect(textarea).not.toHaveAttribute('rows');
    await expect(textarea).not.toHaveAttribute('cols');

    // Ensure initial observer activation doesn't mark textarea as manually resized.
    await page.evaluate(
      () =>
        new Promise<void>((resolve) => {
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        })
    );

    await hostElement.evaluate((el: HTMLIxTextareaElement) => {
      el.value = 'rerender';
    });

    await expect(textarea).not.toHaveAttribute('style', /width/);
    await expect(textarea).not.toHaveAttribute('style', /height/);
  }
);

regressionTest(
  'textarea dimensions - rows and cols attributes',
  async ({ mount, page }) => {
    await mount(
      `<ix-textarea textarea-rows="5" textarea-cols="30"></ix-textarea>`
    );

    const textarea = page.locator('ix-textarea textarea');

    // Check that rows and cols attributes are applied
    await expect(textarea).toHaveAttribute('rows', '5');
    await expect(textarea).toHaveAttribute('cols', '30');
  }
);

regressionTest(
  'textarea dimensions - pixel width and height',
  async ({ mount, page }) => {
    await mount(
      `<ix-textarea textarea-width="400px" textarea-height="200px"></ix-textarea>`
    );

    const textarea = page.locator('ix-textarea textarea');

    // Check that pixel values are applied directly
    await expect(textarea).toHaveCSS('width', '400px');
    await expect(textarea).toHaveCSS('height', '200px');
  }
);

regressionTest(
  'textarea dimensions - rem units conversion',
  async ({ mount, page }) => {
    await mount(
      `<ix-textarea textarea-width="20rem" textarea-height="10rem"></ix-textarea>`
    );

    const textarea = page.locator('ix-textarea textarea');

    // Get computed font size for conversion calculation
    const rootFontSize = await page.evaluate(() => {
      return Number.parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
    });

    const expectedWidth = `${20 * rootFontSize}px`;
    const expectedHeight = `${10 * rootFontSize}px`;

    // Check that rem values are converted to pixels
    await expect(textarea).toHaveCSS('width', expectedWidth);
    await expect(textarea).toHaveCSS('height', expectedHeight);
  }
);

regressionTest(
  'textarea dimensions - em units conversion',
  async ({ mount, page }) => {
    await mount(
      `<ix-textarea textarea-width="15em" textarea-height="8em"></ix-textarea>`
    );

    const hostElement = page.locator('ix-textarea');
    await expect(hostElement).toHaveClass(/hydrated/);

    const textarea = hostElement.locator('textarea');

    // Get textarea font size for conversion calculation
    const elementFontSize = await textarea.evaluate((el) => {
      return Number.parseFloat(getComputedStyle(el).fontSize);
    });

    const expectedWidth = `${15 * elementFontSize}px`;
    const expectedHeight = `${8 * elementFontSize}px`;

    // Check that em values are converted to pixels
    await expect(textarea).toHaveCSS('width', expectedWidth);
    await expect(textarea).toHaveCSS('height', expectedHeight);
  }
);

regressionTest(
  'textarea dimensions - percentage height is responsive',
  async ({ mount, page }) => {
    await mount(`
      <ix-textarea
        id="textarea-host"
        style="display: block; width: 500px; height: 300px;"
        textarea-height="50%">
      </ix-textarea>
    `);

    const textarea = page.locator('ix-textarea textarea');
    const textareaHost = page.locator('#textarea-host');

    // Check percentage height is passed through as-is
    await expect(textarea).toHaveAttribute('style', /.*height:\s*50%.*/);

    // Update host height and ensure percentage style is still preserved
    await textareaHost.evaluate((el) => {
      el.setAttribute('style', 'display: block; width: 500px; height: 400px;');
    });
    await expect(textarea).toHaveAttribute('style', /.*height:\s*50%.*/);
  }
);

regressionTest(
  'textarea dimensions - percentage width is responsive',
  async ({ mount, page }) => {
    await mount(`
    <ix-textarea
      id="textarea-host"
      style="display: block; width: 500px;"
      textarea-width="80%">
    </ix-textarea>
  `);

    const textarea = page.locator('ix-textarea textarea');
    const textareaHost = page.locator('#textarea-host');

    // Check initial computed width
    await expect(textarea).toHaveCSS('width', '400px');
    await expect(textarea).toHaveAttribute('style', /.*width:\s*80%.*/);

    // Update host width and verify textarea updates responsively
    await textareaHost.evaluate((el) => {
      el.setAttribute('style', 'display: block; width: 600px;');
    });
    await expect(textarea).toHaveCSS('width', '480px');
  }
);

regressionTest(
  'textarea dimensions - unitless values conversion',
  async ({ mount, page }) => {
    await mount(
      `<ix-textarea textarea-width="300" textarea-height="150"></ix-textarea>`
    );

    const textarea = page.locator('ix-textarea textarea');

    // Check that unitless values are converted to pixels
    await expect(textarea).toHaveCSS('width', '300px');
    await expect(textarea).toHaveCSS('height', '150px');
  }
);

regressionTest(
  'textarea dimensions - invalid values fallback',
  async ({ mount, page }) => {
    await mount(
      `<ix-textarea textarea-width="invalid" textarea-height="NaN"></ix-textarea>`
    );

    const textarea = page.locator('ix-textarea textarea');

    await expect(textarea).not.toHaveAttribute('style', /width/);
    await expect(textarea).not.toHaveAttribute('style', /height/);
  }
);

regressionTest(
  'textarea dimensions - rows vs height priority',
  async ({ mount, page }) => {
    await mount(
      `<ix-textarea textarea-rows="10" textarea-height="50px"></ix-textarea>`
    );

    const textarea = page.locator('ix-textarea textarea');

    // When both rows and height are set, check which takes priority
    await expect(textarea).toHaveAttribute('rows', '10');
    await expect(textarea).toHaveCSS('height', '50px');
  }
);

regressionTest(
  'textarea dimensions - cols vs width interaction',
  async ({ mount, page }) => {
    await mount(
      `<ix-textarea textarea-cols="20" textarea-width="300px"></ix-textarea>`
    );

    const textarea = page.locator('ix-textarea textarea');

    // When both cols and width are set, check that both attributes are present
    await expect(textarea).toHaveAttribute('cols', '20');
    await expect(textarea).toHaveCSS('width', '300px');
  }
);

regressionTest(
  'textarea dimensions - resize behavior with dimensions',
  async ({ mount, page }) => {
    await mount(`
    <ix-textarea
      textarea-width="200px"
      textarea-height="100px"
      resize-behavior="both">
    </ix-textarea>
  `);

    const textarea = page.locator('ix-textarea textarea');

    // Check that resize behavior and dimensions coexist
    await expect(textarea).toHaveCSS('width', '200px');
    await expect(textarea).toHaveCSS('height', '100px');
    await expect(textarea).toHaveCSS('resize', 'both');
  }
);

regressionTest(
  'textarea dimensions - manual resize preservation',
  async ({ mount, page }) => {
    await mount(`
    <ix-textarea textarea-width="200px" textarea-height="100px"></ix-textarea>
  `);

    const textareaComponent = page.locator('ix-textarea');
    const textarea = textareaComponent.locator('textarea');

    // Initial dimensions
    await expect(textarea).toHaveCSS('width', '200px');
    await expect(textarea).toHaveCSS('height', '100px');

    // Simulate manual resize by setting style directly
    await textarea.evaluate((el) => {
      el.style.width = '300px';
      el.style.height = '150px';
    });

    // Wait for ResizeObserver callback cycle, then force a rerender.
    await page.evaluate(
      () =>
        new Promise<void>((resolve) => {
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        })
    );

    await textareaComponent.evaluate((el: HTMLIxTextareaElement) => {
      el.value = 'rerender';
    });

    // After manual resize, the manually set dimensions should be preserved
    await expect(textarea).toHaveCSS('width', '300px');
    await expect(textarea).toHaveCSS('height', '150px');
  }
);

regressionTest(
  'textarea dimensions - prop changes after manual resize',
  async ({ mount, page }) => {
    await mount(`
    <ix-textarea textarea-width="200px" textarea-height="100px"></ix-textarea>
  `);

    const textarea = page.locator('ix-textarea textarea');
    const textareaComponent = page.locator('ix-textarea');

    // Simulate manual resize
    await textarea.evaluate((el) => {
      el.style.width = '300px';
      el.style.height = '150px';
    });

    // Change the prop values programmatically
    await textareaComponent.evaluate((el: any) => {
      el.textareaWidth = '400px';
      el.textareaHeight = '200px';
    });

    // After prop change, should reset to new prop values (not manual values)
    await expect(textarea).toHaveCSS('width', '400px');
    await expect(textarea).toHaveCSS('height', '200px');
  }
);
