/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, type Locator } from '@playwright/test';
import { regressionTest } from '@utils/test';

async function configureRenderer(
  markdown: Locator,
  entry: 'index' | 'highlight' = 'index'
) {
  await markdown.evaluate(async (element: HTMLIxMarkdownElement, entry) => {
    const rendererModule = await import(`/dist/markdown/${entry}.js`);
    element.renderer = rendererModule.render;
  }, entry);
}

regressionTest('renders Markdown and GFM content', async ({ mount, page }) => {
  await mount('<ix-markdown></ix-markdown>');
  const markdown = page.locator('ix-markdown');
  await configureRenderer(markdown);

  await markdown.evaluate(
    (element: HTMLIxMarkdownElement) =>
      (element.markdown = `# Heading

This is **bold** and [linked](https://example.com).

- [x] Complete
- [ ] Pending
- [ ] Parent [task](https://example.com/task)
  - [x] Child

| Name | Value |
| --- | --- |
| Speed | 42 |

\`\`\`ts
const speed = 42;
\`\`\``)
  );

  await expect(markdown).toHaveClass(/\bhydrated\b/);
  await expect(markdown.locator('h1')).toHaveText('Heading');
  await expect(markdown.locator('.markdown > p strong')).toHaveText('bold');
  await expect(markdown.locator('a')).toHaveAttribute(
    'href',
    'https://example.com'
  );
  const taskCheckboxes = markdown.locator('.task-list-item > ix-checkbox');
  await expect(taskCheckboxes).toHaveCount(4);
  await expect(taskCheckboxes.first()).toHaveAttribute('aria-checked', 'true');
  await expect(taskCheckboxes.first()).toHaveAttribute('aria-disabled', 'true');
  await expect(taskCheckboxes.first()).toHaveText('Complete');
  await expect(taskCheckboxes.nth(1)).toHaveAttribute('aria-checked', 'false');
  await expect(taskCheckboxes.nth(1)).toHaveText('Pending');
  await expect(taskCheckboxes.nth(2)).toHaveText('Parent task');
  await expect(taskCheckboxes.nth(2).locator('a')).toHaveCount(0);
  await expect(taskCheckboxes.last()).toHaveText('Child');
  await expect(markdown.locator('table')).toContainText('Speed');
  await expect(markdown.locator('pre code')).toHaveText('const speed = 42;');
  await expect(markdown.locator('pre code')).not.toHaveClass(/\bhljs\b/);
});

regressionTest(
  'highlights only supported explicit fenced languages',
  async ({ mount, page }) => {
    await mount('<ix-markdown></ix-markdown>');
    const markdown = page.locator('ix-markdown');
    await configureRenderer(markdown, 'highlight');

    await markdown.evaluate(
      (element: HTMLIxMarkdownElement) =>
        (element.markdown = `\`\`\`ts
const value = "<script>alert(1)</script>";
\`\`\`

\`\`\`unknown-language
const plain = true;
\`\`\`

\`\`\`
const unlabelled = true;
\`\`\`

Inline \`const inline = true;\``)
    );

    const highlighted = markdown.locator('code.language-ts');
    await expect(highlighted).toHaveClass(/\bhljs\b/);
    await expect(highlighted.locator('.hljs-keyword')).toHaveText('const');
    await expect(highlighted).toContainText(
      'const value = "<script>alert(1)</script>";'
    );
    await expect(highlighted.locator('script')).toHaveCount(0);
    await expect(
      markdown.locator('code.language-unknown-language')
    ).not.toHaveClass(/\bhljs\b/);
    await expect(markdown.locator('pre code').nth(2)).not.toHaveClass(
      /\bhljs\b/
    );
    await expect(markdown.locator('.markdown > p code')).not.toHaveClass(
      /\bhljs\b/
    );
  }
);

regressionTest('reports a missing renderer', async ({ mount, page }) => {
  await mount('<ix-markdown></ix-markdown>');
  const markdown = page.locator('ix-markdown');

  const error = markdown.evaluate((element: HTMLIxMarkdownElement) => {
    return new Promise<{ code: string }>((resolve) => {
      element.addEventListener(
        'renderError',
        (event) => resolve((event as CustomEvent).detail),
        { once: true }
      );
      element.markdown = '# Needs renderer';
    });
  });

  expect(await error).toMatchObject({
    code: 'renderer-unavailable',
  });
  await expect(markdown.locator('.markdown')).toBeEmpty();
});

regressionTest(
  'renders after late assignment and reacts to renderer replacement',
  async ({ mount, page }) => {
    await mount('<ix-markdown markdown="Current source"></ix-markdown>');
    const markdown = page.locator('ix-markdown');

    await markdown.evaluate((element: HTMLIxMarkdownElement) => {
      element.renderer = async ({ markdown }) => ({
        html: `<p>Plain: ${markdown}</p>`,
        propertyAssignments: [],
      });
    });
    await expect(markdown.locator('p')).toHaveText('Plain: Current source');

    await markdown.evaluate((element: HTMLIxMarkdownElement) => {
      element.renderer = async ({ markdown }) => ({
        html: `<h2>Replacement: ${markdown}</h2>`,
        propertyAssignments: [],
      });
    });
    await expect(markdown.locator('h2')).toHaveText(
      'Replacement: Current source'
    );
    await expect(markdown.locator('p')).toHaveCount(0);
  }
);

regressionTest(
  'rejects unsafe renderer results and keeps successful content',
  async ({ mount, page }) => {
    await mount('<ix-markdown></ix-markdown>');
    const markdown = page.locator('ix-markdown');
    await configureRenderer(markdown);
    await markdown.evaluate(
      (element: HTMLIxMarkdownElement) => (element.markdown = 'Safe content')
    );
    await expect(markdown.locator('p')).toHaveText('Safe content');

    const error = markdown.evaluate((element: HTMLIxMarkdownElement) => {
      return new Promise<{ code: string }>((resolve) => {
        element.addEventListener(
          'renderError',
          (event) => resolve((event as CustomEvent).detail),
          { once: true }
        );
        element.renderer = async ({ markerPrefix }) => ({
          html: `<test-renderer data-ix-markdown-node="${markerPrefix}-0"></test-renderer><script>window.rendererExecuted = true</script>`,
          propertyAssignments: [
            {
              marker: `${markerPrefix}-0`,
              properties: { url: 'javascript:alert(1)' },
            },
          ],
        });
      });
    });

    expect(await error).toMatchObject({
      code: 'invalid-markdown-component',
    });
    await expect(markdown.locator('p')).toHaveText('Safe content');
    expect(
      await page.evaluate(
        () =>
          (window as Window & { rendererExecuted?: boolean }).rendererExecuted
      )
    ).toBeUndefined();
  }
);

regressionTest(
  'reacts to Markdown and runtime data updates',
  async ({ mount, page }) => {
    await mount('<ix-markdown></ix-markdown>');
    const markdown = page.locator('ix-markdown');
    await configureRenderer(markdown);

    await markdown.evaluate((element: HTMLIxMarkdownElement) => {
      element.data = { variant: 'success' };
      element.markdown = `::ix-pill{:variant="data.variant" outline}
Ready
::`;
    });

    const pill = markdown.locator('ix-pill');
    await expect(pill).toHaveAttribute('variant', 'success');
    await expect(pill).toHaveAttribute('outline');
    await expect(pill).toHaveText('Ready');

    await markdown.evaluate((element: HTMLIxMarkdownElement) => {
      element.data = { variant: 'warning' };
    });

    await expect(pill).toHaveAttribute('variant', 'warning');

    await markdown.evaluate((element: HTMLIxMarkdownElement) => {
      element.markdown = '## Updated';
    });

    await expect(markdown.locator('h2')).toHaveText('Updated');
    await expect(pill).toHaveCount(0);
  }
);

regressionTest(
  'renders registered custom elements with named slots and object properties',
  async ({ mount, page }) => {
    await mount('<ix-markdown></ix-markdown>');
    const markdown = page.locator('ix-markdown');
    await configureRenderer(markdown);

    await page.evaluate(() => {
      if (!customElements.get('test-markdown-card')) {
        customElements.define(
          'test-markdown-card',
          class extends HTMLElement {}
        );
      }
    });

    await markdown.evaluate((element: HTMLIxMarkdownElement) => {
      element.components = { card: 'test-markdown-card' };
      element.data = { config: { density: 'compact' } };
      element.markdown = `::card{:config="data.config"}
#header
## Card title

#content
Card content
::`;
    });

    const card = markdown.locator('test-markdown-card');
    await expect(card).toBeVisible();
    await expect(card.locator('[slot="header"]')).toHaveText('Card title');
    await expect(card.locator('[slot="content"]')).toHaveText('Card content');
    await expect(card).not.toHaveAttribute('data-ix-markdown-node');
    await expect
      .poll(() =>
        card.evaluate(
          (element) =>
            (
              element as HTMLElement & {
                config?: { density?: string };
              }
            ).config?.density
        )
      )
      .toBe('compact');
  }
);

regressionTest(
  'keeps the last successful content and reports unknown components',
  async ({ mount, page }) => {
    await mount('<ix-markdown markdown="Initial content"></ix-markdown>');
    const markdown = page.locator('ix-markdown');
    await configureRenderer(markdown);
    await expect(markdown.locator('p')).toHaveText('Initial content');

    const error = markdown.evaluate((element: HTMLIxMarkdownElement) => {
      return new Promise<{
        code: string;
        message: string;
      }>((resolve) => {
        element.addEventListener(
          'renderError',
          (event) => resolve((event as CustomEvent).detail),
          { once: true }
        );
        element.markdown = '::unknown-widget\nContent\n::';
      });
    });

    expect(await error).toMatchObject({
      code: 'invalid-markdown-component',
      message: 'Unknown Markdown component "unknown-widget".',
    });
    await expect(markdown.locator('p')).toHaveText('Initial content');
    await expect(markdown.locator('unknown-widget')).toHaveCount(0);
  }
);

regressionTest(
  'reports invalid custom-element registrations',
  async ({ mount, page }) => {
    await mount('<ix-markdown markdown="Valid"></ix-markdown>');
    const markdown = page.locator('ix-markdown');
    await configureRenderer(markdown);

    const error = markdown.evaluate((element: HTMLIxMarkdownElement) => {
      return new Promise<{ code: string }>((resolve) => {
        element.addEventListener(
          'renderError',
          (event) => resolve((event as CustomEvent).detail),
          { once: true }
        );
        element.components = { alert: 'notcustom' };
      });
    });

    expect(await error).toMatchObject({
      code: 'invalid-component-registration',
    });
    await expect(markdown.locator('p')).toHaveText('Valid');
  }
);

regressionTest(
  'sanitizes active content while preserving safe HTML and URLs',
  async ({ mount, page }) => {
    await mount('<ix-markdown></ix-markdown>');
    const markdown = page.locator('ix-markdown');
    await configureRenderer(markdown);

    await markdown.evaluate((element: HTMLIxMarkdownElement) => {
      element.components = { card: 'test-security-card' };
      element.data = {
        payload: ['<img id="property-injection" src="x" onerror="alert(1)">'],
      };
      element.markdown = `::card{:innerHTML="data.payload"}
Safe content
::

::ix-link-button{#unsafe-link-button url="javascript:alert(1)"}
Unsafe button
::

<ix-button id="safe-blank-button" href="https://example.com" target="_BLANK" rel="opener">Safe button</ix-button>
<ix-link-button id="safe-link-button" url="https://example.com" target="_BLANK">Safe link button</ix-link-button>

<div class="safe" style="color: red" onclick="alert(1)">
  <script>window.markdownScriptExecuted = true</script>
  <a id="unsafe" href="javascript:alert(1)">Unsafe</a>
  <a id="safe" href="https://example.com" target="_blank">Safe</a>
  <img id="tracking" src="data:image/png;base64,iVBORw0KGgo=" onerror="alert(1)">
</div>`;
    });

    const container = markdown.locator('.safe');
    await expect(markdown.locator('test-security-card')).toHaveText(
      'Safe content'
    );
    await expect(markdown.locator('#property-injection')).toHaveCount(0);
    await expect(markdown.locator('#unsafe-link-button')).not.toHaveAttribute(
      'url'
    );
    await expect(markdown.locator('#safe-blank-button')).toHaveAttribute(
      'rel',
      /noopener/
    );
    await expect(markdown.locator('#safe-blank-button')).not.toHaveAttribute(
      'rel',
      /(^|\s)opener(\s|$)/
    );
    await expect(markdown.locator('#safe-link-button')).toHaveAttribute(
      'target',
      '_self'
    );
    await expect(container).toBeVisible();
    await expect(container).not.toHaveAttribute('style');
    await expect(container).not.toHaveAttribute('onclick');
    await expect(container.locator('script')).toHaveCount(0);
    await expect(container.locator('#unsafe')).not.toHaveAttribute('href');
    await expect(container.locator('#safe')).toHaveAttribute(
      'href',
      'https://example.com'
    );
    await expect(container.locator('#safe')).toHaveAttribute('rel', /noopener/);
    await expect(container.locator('#tracking')).not.toHaveAttribute('src');
    expect(
      await page.evaluate(
        () =>
          (window as Window & { markdownScriptExecuted?: boolean })
            .markdownScriptExecuted
      )
    ).toBeUndefined();
  }
);

regressionTest('rejects standalone raw checkboxes', async ({ mount, page }) => {
  await mount('<ix-markdown markdown="Valid"></ix-markdown>');
  const markdown = page.locator('ix-markdown');
  await configureRenderer(markdown);

  const error = markdown.evaluate((element: HTMLIxMarkdownElement) => {
    return new Promise<{ code: string }>((resolve) => {
      element.addEventListener(
        'renderError',
        (event) => resolve((event as CustomEvent).detail),
        { once: true }
      );
      element.markdown = '<input type="checkbox" disabled>';
    });
  });

  expect(await error).toMatchObject({
    code: 'invalid-markdown-component',
  });
  await expect(markdown.locator('p')).toHaveText('Valid');
  await expect(markdown.locator('.markdown input')).toHaveCount(0);
});

regressionTest(
  'commits only the latest rapid Markdown update',
  async ({ mount, page }) => {
    await mount('<ix-markdown></ix-markdown>');
    const markdown = page.locator('ix-markdown');

    await markdown.evaluate((element: HTMLIxMarkdownElement) => {
      element.renderer = async ({ markdown }) => {
        if (markdown === 'Slow') {
          await new Promise<void>((resolve) => {
            (
              window as Window & {
                resolveSlowMarkdown?: () => void;
              }
            ).resolveSlowMarkdown = resolve;
          });
          (
            window as Window & {
              slowMarkdownCompleted?: boolean;
            }
          ).slowMarkdownCompleted = true;
        }

        return {
          html: `<h1>${markdown}</h1>`,
          propertyAssignments: [],
        };
      };
      element.markdown = 'Slow';
      element.markdown = 'Latest';
    });

    await expect(markdown.locator('h1')).toHaveText('Latest');
    await expect(markdown.locator('h1')).toHaveCount(1);
    await page.evaluate(() => {
      (
        window as Window & {
          resolveSlowMarkdown?: () => void;
        }
      ).resolveSlowMarkdown?.();
    });
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            (
              window as Window & {
                slowMarkdownCompleted?: boolean;
              }
            ).slowMarkdownCompleted
        )
      )
      .toBe(true);
    await expect(markdown.locator('h1')).toHaveText('Latest');
  }
);

regressionTest('is accessible', async ({ mount, page, makeAxeBuilder }) => {
  await mount(`
    <ix-markdown markdown="# Accessible heading&#10;&#10;Read the [documentation](https://example.com)."></ix-markdown>
  `);
  const markdown = page.locator('ix-markdown');
  await configureRenderer(markdown, 'highlight');
  await expect(markdown.locator('h1')).toHaveText('Accessible heading');

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});
