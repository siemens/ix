/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

const mountMarkdown = async (
  mount: (html: string) => Promise<unknown>,
  page: Page,
  markdown = ''
) => {
  await mount(`<ix-markdown></ix-markdown>`);
  const element = page.locator('ix-markdown');
  await expect(element).toHaveAttribute('hydrated');
  if (markdown) {
    await update(element, markdown, false);
  }
  return element;
};

const update = (element: Locator, markdown: string, streaming: boolean) =>
  element.evaluate(
    (el: HTMLIxMarkdownElement, [value, isStreaming]) => {
      el.markdown = value as string;
      el.streaming = isStreaming as boolean;
    },
    [markdown, streaming]
  );

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mountMarkdown(
    mount,
    page,
    [
      '- [x] Done',
      '- [ ] Open',
      'Above',
      '---',
      'Cited[^1] text.',
      '[^1]: The note.',
    ].join('\n\n')
  );
  await expect(page.locator('ix-markdown ix-checkbox')).toHaveCount(2);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest(
  'renders task list items as checkboxes',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      '- [x] Done **now**\n- [ ] Open\n- Plain'
    );

    const done = markdown.getByRole('checkbox', { name: 'Done now' });
    const open = markdown.getByRole('checkbox', { name: 'Open' });
    await expect(done).toBeChecked();
    await expect(open).not.toBeChecked();
    await expect(markdown.locator('ix-checkbox')).toHaveCount(2);
    await expect(markdown.locator('li')).toHaveCount(3);
    await expect(markdown.locator('ix-checkbox').first()).toHaveAttribute(
      'disabled',
      ''
    );
  }
);

regressionTest(
  'task list checkbox cannot be toggled',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page, '- [ ] Open');
    const checkbox = markdown.locator('ix-checkbox');
    await expect(checkbox).toHaveCount(1);
    await checkbox.click({ force: true });
    await expect(markdown.getByRole('checkbox')).not.toBeChecked();
  }
);

regressionTest(
  'renders thematic breaks as dividers',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page, 'One\n\n---\n\nTwo');
    await expect(markdown.locator('ix-divider')).toHaveCount(1);
    await expect(markdown.locator('hr')).toHaveCount(0);
  }
);

regressionTest('renders footnotes', async ({ mount, page }) => {
  const markdown = await mountMarkdown(
    mount,
    page,
    'Cited[^a] and again[^a], other[^b].\n\n[^a]: First note.\n[^b]: Second note.'
  );

  const refs = markdown.locator('sup a');
  await expect(refs).toHaveCount(3);
  await expect(refs.nth(0)).toHaveText('1');
  await expect(refs.nth(2)).toHaveText('2');

  const section = markdown.getByRole('region', { name: 'Footnotes' });
  await expect(section.locator('li')).toHaveCount(2);
  await expect(section.locator('li').first()).toContainText('First note.');

  // Footnotes come last, definitions are not rendered in place.
  expect(await markdown.evaluate((el) => el.lastElementChild?.localName)).toBe(
    'section'
  );
  await expect(markdown.getByText('First note.')).toHaveCount(1);

  const target = await refs.first().getAttribute('href');
  await expect(markdown.locator(`[id="${target!.slice(1)}"]`)).toBeVisible();
});

regressionTest(
  'footnote back-references link to the reference',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      'Cited[^a] and again[^a].\n\n[^a]: Note.'
    );

    const back = markdown
      .getByRole('region', { name: 'Footnotes' })
      .locator('a');
    await expect(back).toHaveCount(2);
    for (let i = 0; i < 2; i++) {
      const href = await back.nth(i).getAttribute('href');
      const reference = markdown.locator(`[id="${href!.slice(1)}"]`);
      await expect(reference).toHaveCount(1);
      expect(await reference.evaluate((el) => el.closest('sup') !== null)).toBe(
        true
      );
    }
    await expect(back.first()).toHaveAccessibleName(/back/i);
  }
);

regressionTest(
  'late footnote definitions resolve when streaming ends',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);

    await update(markdown, 'Cited[^1] text.\n\nMore text.', true);
    await expect(markdown.locator('sup a')).toHaveCount(0);

    await update(
      markdown,
      'Cited[^1] text.\n\nMore text.\n\n[^1]: Late note.',
      true
    );
    await update(
      markdown,
      'Cited[^1] text.\n\nMore text.\n\n[^1]: Late note.',
      false
    );

    await expect(markdown.locator('sup a')).toHaveCount(1);
    await expect(
      markdown.getByRole('region', { name: 'Footnotes' })
    ).toContainText('Late note.');
  }
);

regressionTest(
  'footnote references do not clash between views',
  async ({ mount, page }) => {
    await mount(`<ix-markdown></ix-markdown><ix-markdown></ix-markdown>`);
    const views = page.locator('ix-markdown');
    await expect(views.nth(1)).toHaveAttribute('hydrated');
    const source = 'A[^1]\n\n[^1]: Note.';
    await views.evaluateAll((els, value) => {
      els.forEach((el) => ((el as HTMLIxMarkdownElement).markdown = value));
    }, source);

    await expect(page.locator('ix-markdown sup a')).toHaveCount(2);
    const ids = await page
      .locator('ix-markdown [id]')
      .evaluateAll((els) => els.map((el) => el.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.length).toBeGreaterThan(0);
  }
);
