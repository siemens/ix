/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';
import { iconInfo, iconRocket, iconStar } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

const mountMarkdown = async (
  mount: (html: string) => Promise<unknown>,
  page: Page,
  markdown = '',
  streaming = false
) => {
  await mount(`<ix-markdown></ix-markdown>`, {
    icons: { iconInfo, iconRocket, iconStar },
  });
  const element = page.locator('ix-markdown');
  await expect(element).toHaveAttribute('hydrated');
  if (markdown) {
    await update(element, markdown, streaming);
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
      ':button[Retry]{variant=secondary icon=rocket action=retry}',
      'Status :pill[Active]{variant=success} :icon{name=info label=Information}',
      ':::callout{type=warning heading="Careful"}\nBe **careful**.\n:::',
    ].join('\n\n')
  );
  await expect(page.locator('ix-markdown ix-message-bar')).toHaveCount(1);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest(
  'button renders and emits actionClick',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      'Go :button[Retry now]{variant=secondary icon=rocket action=retry id=7}'
    );
    const button = markdown.getByRole('button', { name: 'Retry now' });
    await expect(button).toBeVisible();
    const host = markdown.locator('ix-button');
    await expect(host).toHaveAttribute('variant', 'secondary');
    await expect(host).toHaveAttribute('icon', 'rocket');
    await expect(host).not.toHaveAttribute('action');

    const event = markdown.evaluate(
      (el) =>
        new Promise((resolve) =>
          el.addEventListener('actionClick', (e) =>
            resolve((e as CustomEvent).detail)
          )
        )
    );
    await button.click();
    expect(await event).toEqual({
      name: 'retry',
      attributes: {
        variant: 'secondary',
        icon: 'rocket',
        action: 'retry',
        id: '7',
      },
    });
  }
);

regressionTest(
  'button without action does not emit',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page, ':button[Plain]');
    await markdown.evaluate((el) => {
      (window as any).__count = 0;
      el.addEventListener('actionClick', () => (window as any).__count++);
    });
    await markdown.getByRole('button', { name: 'Plain' }).click();
    expect(await page.evaluate(() => (window as any).__count)).toBe(0);
  }
);

regressionTest('pill and icon render', async ({ mount, page }) => {
  const markdown = await mountMarkdown(
    mount,
    page,
    'State :pill[Active]{variant=success icon=info} and :icon{name=star size=16}'
  );
  const pill = markdown.locator('ix-pill');
  await expect(pill).toContainText('Active');
  await expect(pill).toHaveAttribute('variant', 'success');
  await expect(pill).toHaveAttribute('icon', 'info');
  const icon = markdown.locator('p > ix-icon');
  await expect(icon).toHaveAttribute('name', 'star');
  await expect(icon).toHaveAttribute('size', '16');
});

regressionTest(
  'built-in directives only pass allowlisted attributes',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      [
        ':button[A]{variant=primary onclick="window.__xss=true" style="color:red" class=evil data-x=1}',
        ':pill[B]{onmouseover="window.__xss=true" style="color:red" class=evil}',
        ':icon{name=star onclick="window.__xss=true" style="color:red" class=evil}',
        ':::callout{type=info onclick="window.__xss=true" style="color:red" class=evil}\nBody\n:::',
      ].join('\n\n')
    );
    for (const tag of ['ix-button', 'ix-pill', 'ix-icon', 'ix-message-bar']) {
      const attributes = await markdown
        .locator(`:scope > ${tag}, :scope > p > ${tag}`)
        .first()
        .evaluate((el) => el.getAttributeNames());
      expect(attributes).not.toContain('onclick');
      expect(attributes).not.toContain('onmouseover');
      expect(attributes).not.toContain('style');
      expect(attributes).not.toContain('data-x');
      expect(
        await markdown
          .locator(`:scope > ${tag}, :scope > p > ${tag}`)
          .first()
          .evaluate((el) => el.classList.contains('evil'))
      ).toBe(false);
    }
    expect(await page.evaluate(() => (window as any).__xss)).toBeUndefined();
  }
);

const calloutTypes: [string, string][] = [
  ['info', 'info'],
  ['note', 'info'],
  ['success', 'success'],
  ['tip', 'success'],
  ['warning', 'warning'],
  ['caution', 'warning'],
  ['danger', 'alarm'],
  ['critical', 'critical'],
  ['whatever', 'info'],
];

for (const [type, expected] of calloutTypes) {
  regressionTest(
    `callout type ${type} maps to ${expected}`,
    async ({ mount, page }) => {
      const markdown = await mountMarkdown(
        mount,
        page,
        `:::callout{type=${type}}\nBody\n:::`
      );
      const bar = markdown.locator('ix-message-bar');
      await expect(bar).toHaveAttribute('type', expected);
      await expect(bar).toHaveAttribute('persistent');
    }
  );
}

regressionTest(
  'callout renders heading and inner markdown',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      ':::callout{type=tip heading="Good to know"}\nSome **bold** text.\n:::'
    );
    const bar = markdown.locator('ix-message-bar');
    await expect(bar.locator('strong').first()).toHaveText('Good to know');
    await expect(bar.locator('strong').nth(1)).toHaveText('bold');
    await expect(bar).toContainText('Some bold text.');
  }
);

regressionTest(
  'unknown directives fall back to plain text',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      'Hello :nope[World] and\n\n:::nothing\nInner *text*\n:::'
    );
    await expect(markdown.locator('p').first()).toHaveText('Hello World and');
    await expect(markdown.locator('em')).toHaveText('text');
    await expect(markdown.locator('ix-button, ix-message-bar')).toHaveCount(0);
  }
);

regressionTest(
  'custom mapping overrides a built-in directive',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await markdown.evaluate((el: HTMLIxMarkdownElement) => {
      el.options = { components: { button: 'x-btn' } };
      el.markdown = ':button[Hi]{action=a}';
    });
    await expect(markdown.locator('x-btn')).toHaveAttribute('action', 'a');
    await expect(markdown.locator('ix-button')).toHaveCount(0);
  }
);

regressionTest(
  'streaming holds back unfinished directives only',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);

    // Complete text directive at the start of the open block is rendered.
    await update(markdown, ':button[Retry]{action=retry}', true);
    await expect(markdown.locator('ix-button')).toHaveText('Retry');

    // Unfinished directive in the middle of the open paragraph is hidden.
    await update(markdown, 'Press :button[Re', true);
    await expect(markdown.locator('p')).toHaveText('Press');
    await update(markdown, 'Press :button[Retry]{acti', true);
    await expect(markdown.locator('p')).toHaveText('Press');
    await expect(markdown.locator('ix-button')).toHaveCount(0);

    await update(markdown, 'Press :button[Retry]{action=retry} now', true);
    await expect(markdown.locator('ix-button')).toHaveText('Retry');
    await expect(markdown.locator('p')).toContainText('now');

    // Plain colons are not directives and stay visible.
    await update(markdown, 'Meet at 12:30 or note:this', true);
    await expect(markdown.locator('p')).toHaveText(
      'Meet at 12:30 or note:this'
    );
  }
);

regressionTest(
  'streaming renders an open callout optimistically',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await update(
      markdown,
      ':::callout{type=info heading="Note"}\nPartial',
      true
    );
    await expect(markdown.locator('ix-message-bar')).toContainText('Partial');
    await update(markdown, ':::callout{type=info', true);
    await expect(markdown.locator('ix-message-bar')).toHaveCount(0);
  }
);
