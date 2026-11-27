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

type TestWindow = Window & { __copiedText?: string; __xss?: boolean };

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(
    `<ix-code-block language="typescript" filename="answer.ts" code="const answer = 42;"></ix-code-block>`
  );

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-code-block language="typescript"></ix-code-block>`);

  const codeBlock = page.locator('ix-code-block');
  await codeBlock.evaluate((el: HTMLIxCodeBlockElement) => {
    el.code = 'const answer = 42;\nconsole.log(answer);';
  });

  await expect(codeBlock).toHaveAttribute('hydrated');
  await expect(codeBlock.locator('pre code')).toHaveText(
    'const answer = 42;\nconsole.log(answer);'
  );
  await expect(codeBlock.locator('pre code *')).toHaveCount(0);
});

regressionTest(
  'header shows the language and an optional filename with a document icon',
  async ({ mount, page }) => {
    await mount(`
      <ix-code-block language="typescript" filename="answer.ts" code="const answer = 42;"></ix-code-block>
      <ix-code-block language="bash" code="ls"></ix-code-block>
    `);

    const [withFile, withoutFile] = [
      page.locator('ix-code-block').nth(0),
      page.locator('ix-code-block').nth(1),
    ];

    await expect(withFile.locator('.language')).toHaveText('typescript');
    await expect(withFile.locator('.filename')).toHaveText('answer.ts');
    await expect(withFile.locator('.filename ix-icon')).toHaveAttribute(
      'aria-hidden',
      'true'
    );

    await expect(withoutFile.locator('.language')).toHaveText('bash');
    await expect(withoutFile.locator('.filename')).toHaveCount(0);
  }
);

regressionTest(
  'copy button writes the code to the clipboard and shows a temporary Copied state',
  async ({ mount, page }) => {
    await page.clock.install();
    await mount(
      `<ix-code-block language="typescript" code="const answer = 42;"></ix-code-block>`
    );
    await page.evaluate(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async (text: string) => {
            (window as TestWindow).__copiedText = text;
          },
        },
      });
    });

    const codeBlock = page.locator('ix-code-block');
    const copyButton = codeBlock.getByRole('button', { name: 'Copy code' });
    await copyButton.click();

    expect(await page.evaluate(() => (window as TestWindow).__copiedText)).toBe(
      'const answer = 42;'
    );
    await expect(codeBlock.getByRole('status')).toHaveText('Copied');
    await expect(
      codeBlock.getByRole('button', { name: 'Copied' })
    ).toBeFocused();

    await page.clock.runFor(1500);

    await expect(codeBlock.getByRole('status')).toHaveText('');
    await expect(
      codeBlock.getByRole('button', { name: 'Copy code' })
    ).toBeVisible();
  }
);

regressionTest(
  'does not show the Copied state when writing to the clipboard fails',
  async ({ mount, page }) => {
    await mount(`<ix-code-block code="ls"></ix-code-block>`);
    await page.evaluate(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: { writeText: () => Promise.reject(new Error('denied')) },
      });
    });

    const codeBlock = page.locator('ix-code-block');
    await codeBlock.getByRole('button', { name: 'Copy code' }).click();

    await expect(codeBlock.getByRole('status')).toHaveText('');
    await expect(
      codeBlock.getByRole('button', { name: 'Copy code' })
    ).toBeVisible();
  }
);

regressionTest('copy labels can be localized', async ({ mount, page }) => {
  await mount(
    `<ix-code-block code="ls" i18n-copy="Code kopieren" i18n-copied="Kopiert"></ix-code-block>`
  );
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: async () => {} },
    });
  });

  const codeBlock = page.locator('ix-code-block');
  await codeBlock.getByRole('button', { name: 'Code kopieren' }).click();

  await expect(codeBlock.getByRole('status')).toHaveText('Kopiert');
  await expect(
    codeBlock.getByRole('button', { name: 'Kopiert' })
  ).toBeVisible();
});

regressionTest(
  'highlight hook replaces the body with the returned DOM node',
  async ({ mount, page }) => {
    await mount(`<ix-code-block language="typescript"></ix-code-block>`);
    await page.evaluate(() => {
      const codeBlock = document.querySelector('ix-code-block')!;
      codeBlock.highlight = (code: string, language?: string) => {
        const pre = document.createElement('pre');
        pre.className = 'highlighted';
        pre.dataset.language = language ?? '';
        const keyword = document.createElement('span');
        keyword.className = 'keyword';
        keyword.textContent = code.split(' ')[0];
        pre.append(keyword, code.slice(keyword.textContent.length));
        return pre;
      };
      codeBlock.code = 'const answer = 42;';
    });

    const codeBlock = page.locator('ix-code-block');
    const highlighted = codeBlock.locator('pre.highlighted');
    await expect(highlighted).toHaveText('const answer = 42;');
    await expect(highlighted).toHaveAttribute('data-language', 'typescript');
    await expect(highlighted.locator('.keyword')).toHaveText('const');
    await expect(codeBlock.locator('pre.body')).toHaveCount(0);
  }
);

regressionTest(
  'keeps a DocumentFragment returned by the highlight hook across re-renders',
  async ({ mount, page }) => {
    await mount(`<ix-code-block></ix-code-block>`);
    await page.evaluate(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: { writeText: async () => {} },
      });
      const codeBlock = document.querySelector('ix-code-block');
      if (!codeBlock) {
        throw new Error('ix-code-block not found');
      }
      codeBlock.highlight = (code: string) => {
        const fragment = document.createDocumentFragment();
        const token = document.createElement('span');
        token.className = 'token';
        token.textContent = code;
        fragment.append(token);
        return fragment;
      };
      codeBlock.code = 'ls -la';
    });

    const codeBlock = page.locator('ix-code-block');
    await expect(codeBlock.locator('.token')).toHaveText('ls -la');

    await codeBlock.getByRole('button', { name: 'Copy code' }).click();
    await expect(codeBlock.getByRole('status')).toHaveText('Copied');

    await expect(codeBlock.locator('.token')).toHaveText('ls -la');
  }
);

regressionTest(
  'keeps whitespace and line breaks of highlighted text nodes',
  async ({ mount, page }) => {
    const code = 'if (ready) {\n  start();\n}';
    await mount(`<ix-code-block></ix-code-block>`);
    await page.evaluate((code) => {
      const codeBlock = document.querySelector('ix-code-block');
      if (!codeBlock) {
        throw new Error('ix-code-block not found');
      }
      codeBlock.highlight = (code: string) => {
        const fragment = document.createDocumentFragment();
        const keyword = document.createElement('span');
        keyword.className = 'keyword';
        keyword.textContent = 'if';
        fragment.append(keyword, code.slice(2));
        return fragment;
      };
      codeBlock.code = code;
    }, code);

    const codeBlock = page.locator('ix-code-block');
    const body = codeBlock.locator('.body');
    await expect(body.locator('.keyword')).toHaveText('if');
    expect(await body.evaluate((element) => element.innerText)).toBe(code);
  }
);

regressionTest(
  'ignores an HTML string returned by the highlight hook',
  async ({ mount, page }) => {
    await mount(`<ix-code-block></ix-code-block>`);
    await page.evaluate(() => {
      const codeBlock = document.querySelector('ix-code-block')!;
      codeBlock.highlight = (() =>
        '<img src="x" onerror="window.__xss = true">') as unknown as HTMLIxCodeBlockElement['highlight'];
      codeBlock.code = 'ls';
    });

    const codeBlock = page.locator('ix-code-block');
    await expect(codeBlock.locator('pre.body code')).toHaveText('ls');
    await expect(codeBlock.locator('img')).toHaveCount(0);
    expect(
      await page.evaluate(() => (window as TestWindow).__xss)
    ).toBeUndefined();
  }
);

regressionTest(
  'clears the Copied state when disconnected',
  async ({ mount, page }) => {
    await page.clock.install();
    await mount(`<ix-code-block code="ls"></ix-code-block>`);
    await page.evaluate(() => {
      Object.defineProperty(navigator, 'clipboard', {
        configurable: true,
        value: { writeText: async () => {} },
      });
    });

    const codeBlock = page.locator('ix-code-block');
    await codeBlock.getByRole('button', { name: 'Copy code' }).click();
    await expect(codeBlock.getByRole('status')).toHaveText('Copied');

    await codeBlock.evaluate((element) => {
      const parent = element.parentElement;
      if (!parent) {
        throw new Error('ix-code-block has no parent');
      }
      element.remove();
      parent.append(element);
    });

    await expect(codeBlock.getByRole('status')).toHaveText('');
  }
);
