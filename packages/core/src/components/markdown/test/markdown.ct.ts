/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { regressionTest } from '@utils/test';

type TestWindow = Window & { __xss?: boolean };

const renderMarkdown = async (
  mount: (html: string) => Promise<unknown>,
  page: Page,
  markdown: string
) => {
  await mount(`<ix-markdown></ix-markdown>`);
  const element = page.locator('ix-markdown');
  await expect(element).toHaveAttribute('hydrated');
  await element.evaluate((el: HTMLIxMarkdownElement, value) => {
    el.markdown = value;
  }, markdown);
  return element;
};

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await renderMarkdown(
    mount,
    page,
    [
      '# Heading',
      'Paragraph with *emphasis*, **strong**, ~~strike~~, `code` and a [link](https://siemens.com).',
      '- Item',
      '1. First',
      '> Quote',
      '![Logo](https://example.com/logo.png)',
    ].join('\n\n')
  );

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  const markdown = await renderMarkdown(mount, page, 'Hello iX');

  await expect(markdown.locator('p')).toHaveText('Hello iX');
  await expect(markdown).not.toHaveAttribute('shadowroot');
  expect(await markdown.evaluate((el) => el.shadowRoot === null)).toBeTruthy();
});

regressionTest(
  'empty Markdown source renders nothing',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(mount, page, 'Some text');
    await expect(markdown.locator('p')).toHaveCount(1);

    await markdown.evaluate((el: HTMLIxMarkdownElement) => {
      el.markdown = '';
    });

    await expect(markdown.locator('*')).toHaveCount(0);
    await expect(markdown).toHaveText('');
  }
);

regressionTest(
  'renders headings with the compact heading scale',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      [
        '# One',
        '## Two',
        '### Three',
        '#### Four',
        '##### Five',
        '###### Six',
      ].join('\n\n')
    );

    for (const [level, name] of [
      [1, 'One'],
      [2, 'Two'],
      [3, 'Three'],
      [4, 'Four'],
      [5, 'Five'],
      [6, 'Six'],
    ] as const) {
      await expect(
        markdown.getByRole('heading', { level, name })
      ).toBeVisible();
    }

    const fontSize = (level: number) =>
      markdown
        .locator(`h${level}`)
        .evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
    const sizes = await Promise.all([1, 2, 3, 4, 5, 6].map(fontSize));
    const bodySize = await markdown.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );

    expect(sizes[0]).toBeGreaterThan(sizes[1]);
    expect(sizes[1]).toBeGreaterThan(sizes[2]);
    expect(sizes[0]).toBeLessThanOrEqual(20);
    expect(sizes.slice(3).every((size) => size === bodySize)).toBeTruthy();
  }
);

regressionTest(
  'renders ordered and unordered lists',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      ['- Apple', '- Banana', '  1. Nested', '', '3. Three', '4. Four'].join(
        '\n'
      )
    );

    const lists = markdown.getByRole('list');
    await expect(lists).toHaveCount(3);
    const unordered = markdown.locator('> ul');
    await expect(unordered.locator('> li')).toHaveText([
      'Apple',
      /^Banana\s*Nested$/,
    ]);
    await expect(unordered.locator('ol > li')).toHaveText('Nested');
    await expect(unordered.locator('li p')).toHaveCount(0);

    const ordered = markdown.locator('> ol');
    await expect(ordered).toHaveAttribute('start', '3');
    await expect(ordered.getByRole('listitem')).toHaveText(['Three', 'Four']);
  }
);

regressionTest(
  'renders emphasis, strong, strikethrough and inline code',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      'Some *emphasis*, **strong**, ~~deleted~~ and `code` text'
    );

    const paragraph = markdown.locator('p');
    await expect(paragraph).toHaveText(
      'Some emphasis, strong, deleted and code text'
    );
    await expect(paragraph.locator('em')).toHaveText('emphasis');
    await expect(paragraph.locator('strong')).toHaveText('strong');
    await expect(paragraph.locator('del')).toHaveText('deleted');
    await expect(paragraph.locator('code')).toHaveText('code');
  }
);

regressionTest('renders block quotes', async ({ mount, page }) => {
  const markdown = await renderMarkdown(
    mount,
    page,
    '> Quoted *text*\n>\n> Second paragraph'
  );

  const quote = markdown.locator('blockquote');
  await expect(quote.locator('p')).toHaveText([
    'Quoted text',
    'Second paragraph',
  ]);
  await expect(quote.locator('em')).toHaveText('text');
});

regressionTest(
  'renders fenced code as ix-code-block with language and code',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      '```html\n<b>not bold</b>\n```'
    );

    const block = markdown.locator('ix-code-block');
    await expect(block).toHaveCount(1);
    await expect(block).toHaveJSProperty('code', '<b>not bold</b>');
    await expect(block).toHaveJSProperty('language', 'html');
    await expect(markdown.locator('b')).toHaveCount(0);
  }
);

regressionTest(
  'uses the filename from the fence meta',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      '```ts [app.ts]\nconst a = 1;\n```'
    );

    const block = markdown.locator('ix-code-block');
    await expect(block).toHaveJSProperty('language', 'ts');
    await expect(block).toHaveJSProperty('filename', 'app.ts');
  }
);

regressionTest(
  'passes options.highlight to the code block',
  async ({ mount, page }) => {
    await mount(`<ix-markdown></ix-markdown>`);
    const markdown = page.locator('ix-markdown');
    await expect(markdown).toHaveAttribute('hydrated');
    await markdown.evaluate((el: HTMLIxMarkdownElement) => {
      el.options = {
        highlight: (code) => {
          const mark = document.createElement('mark');
          mark.textContent = code;
          return mark;
        },
      };
      el.markdown = '```js\nlet x\n```';
    });

    await expect(markdown.locator('ix-code-block mark')).toHaveText('let x');
  }
);

regressionTest(
  'updates an unclosed fence in place',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(mount, page, '```js\nlet x');
    const block = markdown.locator('ix-code-block');
    await expect(block).toHaveJSProperty('code', 'let x');
    await block.evaluate((el) => {
      (el as HTMLElement & { __marker?: boolean }).__marker = true;
    });

    await markdown.evaluate((el: HTMLIxMarkdownElement) => {
      el.markdown = '```js\nlet x = 1;\nlet y';
    });

    await expect(block).toHaveJSProperty('code', 'let x = 1;\nlet y');
    await expect(block).toHaveJSProperty('__marker', true);
  }
);

regressionTest(
  'keeps colon-prefixed words that look like directives as text',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      'Ask me:later please\n\nUse a:b{c} here\n\n::standalone{#id}'
    );

    await expect(markdown.locator('p')).toHaveText([
      'Ask me:later please',
      'Use a:b{c} here',
      '::standalone{#id}',
    ]);
  }
);

regressionTest('renders images with http(s) URLs', async ({ mount, page }) => {
  const markdown = await renderMarkdown(
    mount,
    page,
    '![Siemens logo](https://example.com/logo.png "Logo")'
  );

  const image = markdown.getByRole('img', { name: 'Siemens logo' });
  await expect(image).toHaveAttribute('src', 'https://example.com/logo.png');
  await expect(image).toHaveAttribute('title', 'Logo');
});

regressionTest(
  'renders links as native anchors opening in a new tab',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      [
        '[Website](https://siemens.com "Siemens")',
        '[Mail](mailto:ix@siemens.com)',
        '[Relative](./docs/page)',
        '[Reference][ref]',
        '',
        '[ref]: https://example.com/reference',
      ].join(' ')
    );

    const expected = [
      ['Website', 'https://siemens.com'],
      ['Mail', 'mailto:ix@siemens.com'],
      ['Relative', './docs/page'],
      ['Reference', 'https://example.com/reference'],
    ];

    for (const [name, href] of expected) {
      const link = markdown.getByRole('link', { name });
      await expect(link).toHaveAttribute('href', href);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener');
    }
    await expect(
      markdown.getByRole('link', { name: 'Website' })
    ).toHaveAttribute('title', 'Siemens');
  }
);

regressionTest(
  'does not render links with unsafe URLs',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      [
        '[Script](javascript:alert(1))',
        '[Spaced]( JAVASCRIPT:alert(1))',
        '[Tabbed](java&#9;script:alert(1))',
        '[Data](data:text/html;base64,PHNjcmlwdD4=)',
        '[VB](vbscript:msgbox)',
        '<javascript:alert(1)>',
      ].join('\n\n')
    );

    await expect(markdown.locator('p')).toHaveText([
      'Script',
      'Spaced',
      'Tabbed',
      'Data',
      'VB',
      'javascript:alert(1)',
    ]);
    await expect(markdown.locator('a')).toHaveCount(0);
  }
);

regressionTest(
  'does not render images with URLs other than http(s)',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      [
        '![Script](javascript:alert(1))',
        '![Data](data:image/png;base64,iVBORw0KGgo=)',
        '![Relative](./logo.png)',
        '![File](file:///etc/passwd)',
      ].join('\n\n')
    );

    await expect(markdown.locator('img')).toHaveCount(0);
  }
);

regressionTest(
  'renders raw HTML as text and only turns <br> into a line break',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      [
        'Inline <b onclick="alert(1)">bold</b> text<br>next line<br/>last',
        '',
        '<script>window.__xss = true</script>',
        '',
        '<img src="x" onerror="window.__xss = true">',
      ].join('\n')
    );

    const paragraphs = markdown.locator('p');
    await expect(paragraphs.nth(0)).toHaveText(
      'Inline <b onclick="alert(1)">bold</b> textnext linelast'
    );
    await expect(paragraphs.nth(0).locator('br')).toHaveCount(2);
    await expect(paragraphs.nth(0).locator('b')).toHaveCount(0);
    await expect(markdown).toContainText(
      '<script>window.__xss = true</script>'
    );
    await expect(markdown).toContainText(
      '<img src="x" onerror="window.__xss = true">'
    );
    await expect(markdown.locator('script, img')).toHaveCount(0);
    expect(
      await page.evaluate(() => (window as TestWindow).__xss)
    ).toBeUndefined();
  }
);

regressionTest(
  'styles rendered elements through the scoped stylesheet',
  async ({ mount, page }) => {
    const markdown = await renderMarkdown(
      mount,
      page,
      '> Quote with [link](https://siemens.com)'
    );

    const borderStyle = await markdown
      .locator('blockquote')
      .evaluate((el) => getComputedStyle(el).borderInlineStartStyle);
    expect(borderStyle).toBe('solid');

    const linkColor = await markdown
      .getByRole('link')
      .evaluate((el) => getComputedStyle(el).color);
    const expectedColor = await page.evaluate(() => {
      const probe = document.createElement('span');
      probe.style.color = 'var(--si-sys-color-text-accent)';
      document.body.append(probe);
      const color = getComputedStyle(probe).color;
      probe.remove();
      return color;
    });
    expect(linkColor).toBe(expectedColor);
  }
);

regressionTest(
  'does not style other elements on the page',
  async ({ mount, page }) => {
    await mount(
      `<blockquote id="outside">Outside</blockquote><ix-markdown></ix-markdown>`
    );
    await page.locator('ix-markdown').evaluate((el: HTMLIxMarkdownElement) => {
      el.markdown = '> Inside';
    });
    await expect(page.locator('ix-markdown blockquote')).toHaveText('Inside');

    const borderStyle = await page
      .locator('#outside')
      .evaluate((el) => getComputedStyle(el).borderInlineStartStyle);
    expect(borderStyle).toBe('none');
  }
);
