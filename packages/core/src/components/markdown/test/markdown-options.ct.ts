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

type TestWindow = Window & {
  __log: string[];
  __ctx: any[];
  __xss?: boolean;
  [key: string]: any;
};

const mountMarkdown = async (
  mount: (html: string) => Promise<unknown>,
  page: Page
) => {
  await mount(`<ix-markdown></ix-markdown>`);
  const element = page.locator('ix-markdown');
  await expect(element).toHaveAttribute('hydrated');
  await page.evaluate(() => {
    const w = window as unknown as TestWindow;
    w.__log = [];
    w.__ctx = [];
    // Turns paragraphs like `$$ x` into a plugin-produced `math` node.
    w.mathPlugin = () => (tree: any) => {
      tree.children = tree.children.map((child: any) => {
        const first = child.children?.[0];
        return child.type === 'paragraph' &&
          first?.type === 'text' &&
          first.value.startsWith('$$ ')
          ? { type: 'math', value: first.value.slice(3) }
          : child;
      });
    };
    w.factory = (ctx: any) => {
      const element = document.createElement('div');
      element.setAttribute('data-testid', 'custom');
      element.textContent = ctx.text;
      w.__log.push('mount');
      w.__ctx.push(ctx);
      return {
        element,
        update: (next: any) => {
          w.__log.push('update');
          w.__ctx.push(next);
          element.textContent = next.text;
        },
        destroy: () => w.__log.push('destroy'),
      };
    };
  });
  return element;
};

const set = (element: Locator, props: string) =>
  element.evaluate(
    (el: HTMLIxMarkdownElement, code) =>
      new Function('el', 'w', code)(el, window),
    props
  );

const log = (page: Page) =>
  page.evaluate(() => (window as unknown as TestWindow).__log);

regressionTest('remark plugin is installed', async ({ mount, page }) => {
  const markdown = await mountMarkdown(mount, page);
  await set(
    markdown,
    `el.options = { plugins: [w.mathPlugin], components: { math: 'x-math' } };
     el.markdown = '$$ a+b';`
  );
  await expect(markdown.locator('x-math')).toHaveCount(1);
  await expect(markdown.locator('p')).toHaveCount(0);
});

regressionTest('extension is merged into options', async ({ mount, page }) => {
  const markdown = await mountMarkdown(mount, page);
  await set(
    markdown,
    `el.options = {
       components: { heading: 'x-own' },
       extensions: [{ plugins: [w.mathPlugin], components: { math: 'x-math', heading: 'x-ext' } }],
     };
     el.markdown = '# Title\\n\\n$$ a+b';`
  );
  await expect(markdown.locator('x-math')).toHaveCount(1);
  await expect(markdown.locator('x-own')).toHaveCount(1);
  await expect(markdown.locator('x-ext')).toHaveCount(0);
});

regressionTest(
  'tag name mapping creates element with directive attributes',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await set(
      markdown,
      `el.options = { components: { widget: 'x-widget' } };
       el.markdown = 'Hi :widget[Label]{kind=a size=3 onclick="window.__xss=true"}';`
    );
    const widget = markdown.locator('x-widget');
    await expect(widget).toHaveAttribute('kind', 'a');
    await expect(widget).toHaveAttribute('size', '3');
    await expect(widget).not.toHaveAttribute('onclick');
    await expect(widget).toHaveText('');
  }
);

regressionTest(
  'factory receives context and mounts once',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await set(
      markdown,
      `el.options = { components: { widget: w.factory } };
       el.markdown = '::widget[Some *label*]{kind=a flag}';`
    );
    await expect(page.getByTestId('custom')).toHaveText('Some label');
    const ctx = await page.evaluate(() => {
      const c = (window as unknown as TestWindow).__ctx[0];
      return {
        name: c.name,
        attributes: c.attributes,
        text: c.text,
        markdown: c.markdown,
        nodeType: c.node.type,
        emit: typeof c.emitAction,
      };
    });
    expect(ctx).toEqual({
      name: 'widget',
      attributes: { kind: 'a', flag: '' },
      text: 'Some label',
      markdown: 'Some *label*',
      nodeType: 'leafDirective',
      emit: 'function',
    });
    expect(await log(page)).toEqual(['mount']);
  }
);

regressionTest(
  'emitAction emits actionClick on the view',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    const event = markdown.evaluate(
      (el) =>
        new Promise((resolve) =>
          el.addEventListener('actionClick', (e) =>
            resolve((e as CustomEvent).detail)
          )
        )
    );
    await set(
      markdown,
      `el.options = { components: { widget: w.factory } };
       el.markdown = '::widget[x]';`
    );
    await expect(page.getByTestId('custom')).toBeVisible();
    await page.evaluate(() =>
      (window as unknown as TestWindow).__ctx[0].emitAction('retry', {
        id: '1',
      })
    );
    expect(await event).toEqual({ name: 'retry', attributes: { id: '1' } });
  }
);

regressionTest(
  'open block updates in place, remounts on mapping change, destroys on removal',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await set(
      markdown,
      `el.options = { components: { widget: w.factory } };
       el.streaming = true;
       el.markdown = '::widget[One]';`
    );
    await expect(page.getByTestId('custom')).toHaveText('One');
    await page.getByTestId('custom').evaluate((el) => {
      (window as unknown as TestWindow).__first = el;
    });

    await set(markdown, `el.markdown = '::widget[One two]';`);
    await expect(page.getByTestId('custom')).toHaveText('One two');
    expect(await log(page)).toEqual(['mount', 'update']);
    expect(
      await page
        .getByTestId('custom')
        .evaluate((el) => (window as unknown as TestWindow).__first === el)
    ).toBe(true);

    // A different mapping function remounts.
    await set(
      markdown,
      `el.options = { components: { widget: (c) => w.factory(c) } };`
    );
    await expect
      .poll(() => log(page))
      .toEqual(['mount', 'update', 'mount', 'destroy']);

    // Removing the block destroys the component.
    await set(markdown, `el.markdown = 'Plain';`);
    await expect(page.getByTestId('custom')).toHaveCount(0);
    expect((await log(page)).at(-1)).toBe('destroy');
  }
);

regressionTest(
  'disconnecting the view destroys components',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await set(
      markdown,
      `el.options = { components: { widget: w.factory } };
       el.markdown = '::widget[One]';`
    );
    await expect(page.getByTestId('custom')).toHaveCount(1);
    await markdown.evaluate((el) => el.remove());
    expect(await log(page)).toEqual(['mount', 'destroy']);
  }
);

regressionTest('built-in types can be overridden', async ({ mount, page }) => {
  const markdown = await mountMarkdown(mount, page);
  await set(
    markdown,
    `el.options = { components: { code: w.factory, link: 'x-link', table: 'x-table' } };
     el.markdown = '\`\`\`ts\\nconst a = 1;\\n\`\`\`\\n\\n[a](https://siemens.com)\\n\\n| A |\\n| - |\\n| 1 |';`
  );
  await expect(page.getByTestId('custom')).toHaveText('const a = 1;');
  await expect(markdown.locator('ix-code-block')).toHaveCount(0);
  await expect(markdown.locator('x-link')).toHaveCount(1);
  await expect(markdown.locator('a')).toHaveCount(0);
  await expect(markdown.locator('x-table')).toHaveCount(1);
  await expect(markdown.locator('table')).toHaveCount(0);
});

regressionTest(
  'security rules still hold for plugin output',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await set(
      markdown,
      `w.htmlPlugin = () => (tree) => {
         tree.children.push(
           { type: 'html', value: '<img src=x onerror="window.__xss=true">' },
           { type: 'paragraph', children: [
             { type: 'link', url: 'javascript:window.__xss=true', children: [{ type: 'text', value: 'bad' }] },
             { type: 'image', url: 'data:image/png;base64,AAAA', alt: 'img' },
           ] }
         );
       };
       el.options = { plugins: [w.htmlPlugin] };
       el.markdown = 'Hello';`
    );
    await expect(markdown.locator('p').last()).toHaveText('bad');
    await expect(markdown).toContainText('<img src=x onerror=');
    await expect(markdown.locator('img, a')).toHaveCount(0);
    expect(
      await page.evaluate(() => (window as unknown as TestWindow).__xss)
    ).toBeUndefined();
  }
);

regressionTest(
  'tag name mapping keeps foreign attributes on update',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(mount, page);
    await set(
      markdown,
      `el.options = { components: { widget: 'x-widget' } };
       el.markdown = ':widget[A]{kind=a size=3}';`
    );
    const widget = markdown.locator('x-widget');
    await expect(widget).toHaveAttribute('kind', 'a');
    await widget.evaluate((el) => {
      el.setAttribute('hydrated', '');
      el.classList.add('mine');
    });

    await set(markdown, `el.markdown = ':widget[A]{kind=b}';`);
    await expect(widget).toHaveAttribute('kind', 'b');
    await expect(widget).not.toHaveAttribute('size');
    await expect(widget).toHaveAttribute('hydrated');
    await expect(widget).toHaveClass('mine');
  }
);
