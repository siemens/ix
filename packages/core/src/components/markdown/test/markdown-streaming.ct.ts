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

regressionTest('streaming toggles aria-busy', async ({ mount, page }) => {
  const markdown = await mountMarkdown(mount, page, 'Hello');
  await expect(markdown).not.toHaveAttribute('aria-busy');
  await expect(markdown).not.toHaveAttribute('aria-live');

  await update(markdown, 'Hello world', true);
  await expect(markdown).toHaveAttribute('aria-busy', 'true');
  await expect(markdown).not.toHaveAttribute('aria-live');
  await expect(markdown.locator('p')).toHaveText('Hello world');

  await update(markdown, 'Hello world', false);
  await expect(markdown).not.toHaveAttribute('aria-busy');
});

regressionTest(
  'shows partial content immediately while streaming',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);

    await update(markdown, '# Tit', true);
    await expect(markdown.getByRole('heading', { level: 1 })).toHaveText('Tit');
  }
);

regressionTest(
  'settled blocks keep their DOM nodes while streaming',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await update(markdown, 'First paragraph\n\nSec', true);
    await expect(markdown.locator('p')).toHaveCount(2);

    await markdown
      .locator('p')
      .first()
      .evaluate((el) => {
        (window as any).__first = el;
      });

    for (const source of [
      'First paragraph\n\nSecond',
      'First paragraph\n\nSecond para\n\nThird',
    ]) {
      await update(markdown, source, true);
    }
    await expect(markdown.locator('p')).toHaveCount(3);
    await expect(markdown.locator('p').last()).toHaveText('Third');

    const same = await markdown
      .locator('p')
      .first()
      .evaluate((el) => (window as any).__first === el);
    expect(same).toBe(true);
  }
);

regressionTest(
  'embedded focusable element keeps focus while later chunks stream in',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await update(markdown, 'First paragraph\n\nSec', true);
    await expect(markdown.locator('p')).toHaveCount(2);

    await markdown
      .locator('p')
      .first()
      .evaluate((el) => {
        const button = document.createElement('button');
        button.textContent = 'Retry';
        el.append(button);
        button.focus();
      });
    const button = markdown.getByRole('button', { name: 'Retry' });
    await expect(button).toBeFocused();

    await update(markdown, 'First paragraph\n\nSecond\n\nThird', true);
    await expect(markdown.locator('p')).toHaveCount(3);
    await expect(button).toBeFocused();
  }
);

regressionTest('incomplete syntax', async ({ mount, page }) => {
  const markdown = await mountMarkdown(mount, page);

  await test_case('unclosed strong renders formatted', async () => {
    await update(markdown, 'This is **bold', true);
    await expect(markdown.locator('strong')).toHaveText('bold');
  });

  await test_case('unclosed emphasis renders formatted', async () => {
    await update(markdown, 'This is *slanted', true);
    await expect(markdown.locator('em')).toHaveText('slanted');
  });

  await test_case('unclosed inline code renders formatted', async () => {
    await update(markdown, 'Call `foo', true);
    await expect(markdown.locator('code')).toHaveText('foo');
  });

  await test_case('unclosed fence renders as code', async () => {
    await update(markdown, 'Intro\n\n```ts\nconst a = 1;', true);
    await expect(markdown.locator('pre code')).toContainText('const a = 1;');
  });

  await test_case('partial link shows as text', async () => {
    await update(markdown, 'See [the docs](https://exam', true);
    await expect(markdown.locator('a')).toHaveCount(0);
    await expect(markdown.locator('p')).toHaveText('See the docs');
  });

  await test_case('unfinished table is held back', async () => {
    await update(markdown, 'Before\n\n| A | B |', true);
    await expect(markdown.locator('p')).toHaveText('Before');
    await update(markdown, 'Before\n\n| A | B |\n| - |', true);
    await expect(markdown.locator('p')).toHaveText('Before');
  });

  await test_case('unfinished directive is held back', async () => {
    await update(markdown, 'Before\n\n:::callout{type=warn', true);
    await expect(markdown.locator('p')).toHaveText('Before');
    await update(markdown, 'Before\n\n::button[Retry', true);
    await expect(markdown.locator('p')).toHaveText('Before');
  });
});

const test_case = async (_name: string, body: () => Promise<void>) => body();

regressionTest(
  'final reconcile produces the exact result and keeps unchanged blocks',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await update(markdown, 'First\n\nSee [the docs](https://exam', true);
    await expect(markdown.locator('a')).toHaveCount(0);

    await markdown
      .locator('p')
      .first()
      .evaluate((el) => {
        (window as any).__first = el;
      });

    await update(
      markdown,
      'First\n\nSee [the docs](https://example.com) **done**',
      false
    );
    await expect(markdown.locator('a')).toHaveAttribute(
      'href',
      'https://example.com'
    );
    await expect(markdown.locator('strong')).toHaveText('done');

    const same = await markdown
      .locator('p')
      .first()
      .evaluate((el) => (window as any).__first === el);
    expect(same).toBe(true);
  }
);

regressionTest(
  'final reconcile fixes settled blocks that depend on later text',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await update(markdown, 'Read [docs][d]\n\nMore', true);
    await expect(markdown.locator('a')).toHaveCount(0);

    await update(
      markdown,
      'Read [docs][d]\n\nMore\n\n[d]: https://a.com',
      false
    );
    await expect(markdown.locator('a')).toHaveAttribute(
      'href',
      'https://a.com'
    );
  }
);

regressionTest(
  'non-append replacement keeps the unchanged prefix',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await update(markdown, 'Keep me\n\nOld second\n\nOld third', true);
    await expect(markdown.locator('p')).toHaveCount(3);

    await markdown
      .locator('p')
      .first()
      .evaluate((el) => {
        (window as any).__first = el;
      });

    await update(markdown, 'Keep me\n\nNew second', true);
    await expect(markdown.locator('p')).toHaveCount(2);
    await expect(markdown.locator('p').last()).toHaveText('New second');

    const same = await markdown
      .locator('p')
      .first()
      .evaluate((el) => (window as any).__first === el);
    expect(same).toBe(true);
  }
);

regressionTest(
  'coalesces updates to one render per animation frame',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);

    const mutationBatches = await markdown.evaluate(
      async (el: HTMLIxMarkdownElement) => {
        let batches = 0;
        const observer = new MutationObserver(() => batches++);
        observer.observe(el, { childList: true, subtree: true });
        for (let i = 1; i <= 20; i++) {
          el.markdown = 'word '.repeat(i);
          el.streaming = true;
        }
        await new Promise((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(resolve))
        );
        observer.disconnect();
        return batches;
      }
    );

    await expect(markdown.locator('p')).toHaveText(/^(word ){19}word$/);
    expect(mutationBatches).toBeLessThanOrEqual(2);
  }
);

regressionTest(
  'updates an unclosed fence in place while streaming',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await update(markdown, '```js\nlet x', true);
    const block = markdown.locator('ix-code-block');
    await expect(block).toHaveJSProperty('code', 'let x');
    await block.evaluate((el) => {
      (el as HTMLElement & { __marker?: boolean }).__marker = true;
    });

    await update(markdown, '```js\nlet x = 1;\nlet y', true);
    await expect(block).toHaveJSProperty('code', 'let x = 1;\nlet y');
    await expect(block).toHaveJSProperty('__marker', true);

    await update(markdown, '```js\nlet x = 1;\nlet y = 2;\n```\n\nDone', false);
    await expect(block).toHaveJSProperty('code', 'let x = 1;\nlet y = 2;');
    await expect(block).toHaveJSProperty('__marker', true);
  }
);
