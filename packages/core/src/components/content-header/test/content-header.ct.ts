/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, type Locator } from '@playwright/test';
import { regressionTest, viewPorts } from '@utils/test';

const getTextLayout = (text: Locator) =>
  text.evaluate((element) => {
    const style = getComputedStyle(element);

    return {
      clientWidth: element.clientWidth,
      height: element.getBoundingClientRect().height,
      lineHeight: Number.parseFloat(style.lineHeight),
      overflow: style.overflow,
      scrollWidth: element.scrollWidth,
      textOverflow: style.textOverflow,
      whiteSpace: style.whiteSpace,
    };
  });

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-content-header
      header-title="Production line overview"
      header-subtitle="Plant 1"
    >
      <ix-pill slot="header">Online</ix-pill>
      <ix-button variant="tertiary">Edit</ix-button>
    </ix-content-header>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-content-header
      header-title="Content title"
      header-subtitle="Subtitle"
    ></ix-content-header>
  `);

  const header = page.locator('ix-content-header');
  await expect(header).toHaveClass(/\bhydrated\b/);
  await expect(header).toHaveAttribute('text-overflow', 'wrap');
  await expect(header).toHaveJSProperty('textOverflow', 'wrap');
  await expect(page.getByText('Content title', { exact: true })).toBeVisible();
  await expect(page.getByText('Subtitle', { exact: true })).toBeVisible();
});

regressionTest(
  'wraps title and subtitle within the available component width by default',
  async ({ mount, page }) => {
    const title =
      'A responsive content header title that remains completely visible';
    const subtitle =
      'Supporting context also wraps naturally in constrained containers';

    await mount(`
      <ix-content-header
        style="width: 20rem"
        header-title="${title}"
        header-subtitle="${subtitle}"
      >
        <ix-button>Header action</ix-button>
      </ix-content-header>
    `);

    const header = page.locator('ix-content-header');
    await expect(header).toHaveClass(/\bhydrated\b/);
    const titleText = header.getByText(title, { exact: true });
    const subtitleText = header.getByText(subtitle, { exact: true });

    for (const text of [titleText, subtitleText]) {
      const layout = await getTextLayout(text);

      expect(layout.height).toBeGreaterThan(layout.lineHeight);
      expect(layout.scrollWidth).toBeLessThanOrEqual(layout.clientWidth);
      await expect(text).not.toHaveAttribute('title');
    }
  }
);

regressionTest(
  'wraps at the small viewport and remains on one line at larger viewports',
  async ({ mount, page }) => {
    const title =
      'Responsive content header text uses the space available to the component';

    await page.setViewportSize(viewPorts.sm);
    await mount(
      `<ix-content-header header-title="${title}"></ix-content-header>`
    );

    const header = page.locator('ix-content-header');
    await expect(header).toHaveClass(/\bhydrated\b/);
    const titleText = header.getByText(title, { exact: true });
    const getLineCount = async () => {
      const layout = await getTextLayout(titleText);
      return layout.height / layout.lineHeight;
    };

    expect(await getLineCount()).toBeGreaterThan(1);

    await page.setViewportSize(viewPorts.md);
    expect(await getLineCount()).toBe(1);

    await page.setViewportSize(viewPorts.lg);
    expect(await getLineCount()).toBe(1);
  }
);

regressionTest(
  'breaks long unbroken text without horizontal overflow',
  async ({ mount, page }) => {
    const title =
      'production-line-identifier-without-natural-break-opportunities-123456789';

    await mount(`
      <ix-content-header
        style="width: 18rem"
        header-title="${title}"
      ></ix-content-header>
    `);

    const header = page.locator('ix-content-header');
    await expect(header).toHaveClass(/\bhydrated\b/);
    const titleText = header.getByText(title, { exact: true });
    const layout = await getTextLayout(titleText);

    expect(layout.height).toBeGreaterThan(layout.lineHeight);
    expect(layout.scrollWidth).toBeLessThanOrEqual(layout.clientWidth);
  }
);

regressionTest(
  'keeps header content and actions aligned with the first title line',
  async ({ mount, page }) => {
    const title =
      'A constrained title that wraps while adjacent content keeps its place';
    const subtitle = 'Supporting context stays clear of the action area';

    await mount(`
      <ix-content-header
        has-back-button
        style="width: 34rem"
        header-title="${title}"
        header-subtitle="${subtitle}"
      >
        <ix-pill slot="header">Online</ix-pill>
        <ix-button variant="tertiary">Non-wrapping action</ix-button>
      </ix-content-header>
    `);

    const header = page.locator('ix-content-header');
    await expect(header).toHaveClass(/\bhydrated\b/);
    const titleText = header.getByText(title, { exact: true });
    const subtitleText = header.getByText(subtitle, { exact: true });
    const pill = header.getByText('Online', { exact: true });
    const action = page.getByRole('button', { name: 'Non-wrapping action' });
    const backButton = page.getByRole('button', { name: 'Arrow Left' });

    const titleBox = await titleText.boundingBox();
    const subtitleBox = await subtitleText.boundingBox();
    const pillBox = await pill.boundingBox();
    const actionBox = await action.boundingBox();
    const backButtonBox = await backButton.boundingBox();
    const titleLineHeight = await titleText.evaluate((element) =>
      Number.parseFloat(getComputedStyle(element).lineHeight)
    );

    if (!titleBox || !subtitleBox || !pillBox || !actionBox || !backButtonBox) {
      throw new Error(
        'Expected content header elements to have bounding boxes'
      );
    }

    expect(titleBox.height).toBeGreaterThan(titleLineHeight);
    expect(pillBox.y).toBeLessThan(titleBox.y + titleLineHeight);
    expect(actionBox.y).toBeLessThan(titleBox.y + titleLineHeight);
    expect(backButtonBox.y).toBeLessThan(titleBox.y + titleLineHeight);
    expect(titleBox.x + titleBox.width).toBeLessThanOrEqual(pillBox.x);
    expect(subtitleBox.x + subtitleBox.width).toBeLessThanOrEqual(actionBox.x);

    await header.evaluate((element) => {
      element.style.width = '80rem';
    });
    const wideActionBox = await action.boundingBox();
    if (!wideActionBox) {
      throw new Error('Expected wide action to have a bounding box');
    }

    expect(actionBox.height).toBe(wideActionBox.height);
    expect(actionBox.width).toBe(wideActionBox.width);
  }
);

regressionTest(
  'truncates title and subtitle on separate lines without native tooltips',
  async ({ mount, page }) => {
    const title = 'A long title that is truncated in compact layouts';
    const subtitle = 'A long subtitle that is truncated independently';

    await mount(`
      <ix-content-header
        style="width: 16rem"
        header-title="${title}"
        header-subtitle="${subtitle}"
        text-overflow="ellipsis"
      ></ix-content-header>
    `);

    const header = page.locator('ix-content-header');
    await expect(header).toHaveClass(/\bhydrated\b/);
    const titleText = header.getByText(title, { exact: true });
    const subtitleText = header.getByText(subtitle, { exact: true });

    for (const text of [titleText, subtitleText]) {
      const overflow = await getTextLayout(text);

      expect(overflow.height).toBe(overflow.lineHeight);
      expect(overflow.scrollWidth).toBeGreaterThan(overflow.clientWidth);
      expect(overflow.overflow).toBe('hidden');
      expect(overflow.textOverflow).toBe('ellipsis');
      expect(overflow.whiteSpace).toBe('nowrap');
      await expect(text).not.toHaveAttribute('title');
    }

    const titleBox = await titleText.boundingBox();
    const subtitleBox = await subtitleText.boundingBox();
    if (!titleBox || !subtitleBox) {
      throw new Error('Expected title and subtitle to have bounding boxes');
    }

    expect(titleBox.y + titleBox.height).toBeLessThanOrEqual(subtitleBox.y);
  }
);

regressionTest(
  'updates overflow behavior when textOverflow changes at runtime',
  async ({ mount, page }) => {
    const title = 'A title that switches between wrapping and truncation';

    await mount(`
      <ix-content-header
        style="width: 14rem"
        header-title="${title}"
      ></ix-content-header>
    `);

    const header = page.locator('ix-content-header');
    await expect(header).toHaveClass(/\bhydrated\b/);
    const titleText = header.getByText(title, { exact: true });
    const getHeight = () =>
      titleText.evaluate((element) => element.getBoundingClientRect().height);

    const wrappedHeight = await getHeight();

    await header.evaluate((element: HTMLIxContentHeaderElement) => {
      element.textOverflow = 'ellipsis';
    });

    await expect(header).toHaveAttribute('text-overflow', 'ellipsis');
    await expect(titleText).not.toHaveAttribute('title');
    await expect.poll(getHeight).toBeLessThan(wrappedHeight);

    await header.evaluate((element: HTMLIxContentHeaderElement) => {
      element.textOverflow = 'wrap';
    });

    await expect(header).toHaveAttribute('text-overflow', 'wrap');
    await expect(titleText).not.toHaveAttribute('title');
    await expect.poll(getHeight).toBe(wrappedHeight);
  }
);
