/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

const items = `
  <ix-chat-trace-item label="Search sources" state="completed"></ix-chat-trace-item>
  <ix-chat-trace-item label="Read page.tsx" state="completed">
    <ix-chat-trace-item-section heading="Output">42 lines</ix-chat-trace-item-section>
  </ix-chat-trace-item>
  <ix-chat-trace-item label="Generate answer" state="running"></ix-chat-trace-item>
`;

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-chat-activity-trace>${items}</ix-chat-activity-trace>`);
  await expect(page.locator('ix-chat-activity-trace')).toHaveAttribute(
    'hydrated'
  );
});

regressionTest(
  'accessibility with summary',
  async ({ mount, page, makeAxeBuilder }) => {
    await mount(`
      <ix-chat-activity-trace summary="Answer generated from 3 sources" expanded>
        <span slot="summary-meta">12s</span>
        ${items}
      </ix-chat-activity-trace>
    `);
    await expect(page.locator('ix-chat-activity-trace')).toHaveAttribute(
      'hydrated'
    );

    const results = await makeAxeBuilder()
      .include('ix-chat-activity-trace')
      .analyze();
    expect(results.violations).toEqual([]);
  }
);

regressionTest(
  'renders Trace items flat as a list without summary',
  async ({ mount, page }) => {
    await mount(`<ix-chat-activity-trace>${items}</ix-chat-activity-trace>`);

    await expect(page.getByRole('list')).toBeVisible();
    await expect(page.getByRole('listitem')).toHaveCount(3);
    await expect(page.getByRole('button', { expanded: false })).toHaveCount(1);
    await expect(
      page.getByRole('button', { name: /Read page\.tsx/ })
    ).toBeVisible();
  }
);

regressionTest(
  'shows a summary toggle that controls the Trace items',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-activity-trace summary="Answer generated from 3 sources">
        <span slot="summary-meta">12s</span>
        ${items}
      </ix-chat-activity-trace>
    `);
    const events = await page
      .locator('ix-chat-activity-trace')
      .evaluateHandle((host) => {
        const details: boolean[] = [];
        host.addEventListener('expandedChange', (event) =>
          details.push((event as CustomEvent<boolean>).detail)
        );
        return details;
      });

    const summary = page.getByRole('button', {
      name: 'Answer generated from 3 sources 12s',
    });
    await expect(summary).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByRole('listitem')).toHaveCount(0);

    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(summary).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByRole('listitem')).toHaveCount(3);

    await page.keyboard.press('Space');
    await expect(summary).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByRole('listitem')).toHaveCount(0);

    expect(await events.evaluate((value) => value)).toEqual([true, false]);
  }
);

regressionTest(
  'does not bubble expandedChange of a Trace item to the trace',
  async ({ mount, page }) => {
    await mount(
      `<ix-chat-activity-trace summary="Done" expanded>${items}</ix-chat-activity-trace>`
    );
    const events = await page
      .locator('ix-chat-activity-trace')
      .evaluateHandle((host) => {
        const targets: string[] = [];
        host.addEventListener('expandedChange', (event) =>
          targets.push((event.target as HTMLElement).tagName.toLowerCase())
        );
        return targets;
      });

    await page.getByRole('button', { name: /Read page\.tsx/ }).click();

    await expect(
      page.getByRole('button', { name: /Read page\.tsx/ })
    ).toHaveAttribute('aria-expanded', 'true');
    expect(await events.evaluate((value) => value)).toEqual([]);
    await expect(page.getByRole('button', { name: 'Done' })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  }
);

regressionTest(
  'keeps Trace item identity and focus when the summary appears',
  async ({ mount, page }) => {
    await mount(`<ix-chat-activity-trace>${items}</ix-chat-activity-trace>`);

    const itemToggle = page.getByRole('button', { name: /Read page\.tsx/ });
    await itemToggle.focus();
    await page
      .locator('ix-chat-trace-item')
      .nth(1)
      .evaluate((element) => {
        (element as HTMLElement & { __marker?: boolean }).__marker = true;
      });

    await page
      .locator('ix-chat-activity-trace')
      .evaluate((element: HTMLIxChatActivityTraceElement) => {
        element.expanded = true;
        element.summary = 'Answer generated from 3 sources';
      });

    await expect(
      page.getByRole('button', { name: 'Answer generated from 3 sources' })
    ).toBeVisible();
    await expect(itemToggle).toBeFocused();
    expect(
      await page
        .locator('ix-chat-trace-item')
        .nth(1)
        .evaluate(
          (element) =>
            (element as HTMLElement & { __marker?: boolean }).__marker
        )
    ).toBe(true);
  }
);

regressionTest(
  'moves focus to the summary toggle when a focused Trace item is hidden',
  async ({ mount, page }) => {
    await mount(`<ix-chat-activity-trace>${items}</ix-chat-activity-trace>`);

    await page.getByRole('button', { name: /Read page\.tsx/ }).focus();

    await page
      .locator('ix-chat-activity-trace')
      .evaluate((element: HTMLIxChatActivityTraceElement) => {
        element.summary = 'Answer generated from 3 sources';
      });

    const summary = page.getByRole('button', {
      name: 'Answer generated from 3 sources',
    });
    await expect(summary).toHaveAttribute('aria-expanded', 'false');
    await expect(summary).toBeFocused();
  }
);
