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

type TestWindow = Window & { __copiedText?: string };

const TABLE = ['| Name | Qty | Note |', '| :-- | :-: | --: |'].join('\n');

const mountMarkdown = async (
  mount: (html: string) => Promise<unknown>,
  page: Page,
  markdown: string,
  streaming = false
) => {
  await mount(`<ix-markdown></ix-markdown>`);
  const element = page.locator('ix-markdown');
  await expect(element).toHaveAttribute('hydrated');
  await update(element, markdown, streaming);
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

const mockClipboard = (page: Page) =>
  page.evaluate(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text: string) => {
          (window as TestWindow).__copiedText = text;
        },
      },
    });
  });

regressionTest(
  'renders a table in a scroll container',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      `${TABLE}\n| Bolt | 3 | ok |\n| Nut | 4 | fine |`
    );

    const table = markdown.getByRole('table');
    await expect(table).toBeVisible();
    await expect(table.getByRole('columnheader')).toHaveText([
      'Name',
      'Qty',
      'Note',
    ]);
    await expect(table.getByRole('row')).toHaveCount(3);
    await expect(table.getByRole('cell').first()).toHaveText('Bolt');
    await expect(markdown.locator('.table-scroll')).toHaveCSS(
      'overflow-x',
      'auto'
    );
    await expect(markdown.locator('.table-scroll table')).toHaveCount(1);
  }
);

regressionTest(
  'applies column alignment from the delimiter row',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      `${TABLE}\n| Bolt | 3 | ok |`
    );

    const headers = markdown.getByRole('columnheader');
    await expect(headers.nth(0)).toHaveCSS('text-align', 'left');
    await expect(headers.nth(1)).toHaveCSS('text-align', 'center');
    await expect(headers.nth(2)).toHaveCSS('text-align', 'right');
    const cells = markdown.getByRole('cell');
    await expect(cells.nth(0)).toHaveCSS('text-align', 'left');
    await expect(cells.nth(1)).toHaveCSS('text-align', 'center');
    await expect(cells.nth(2)).toHaveCSS('text-align', 'right');
  }
);

regressionTest(
  'renders <br> in cells as a line break',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      `${TABLE}\n| a<br>b | 1 | x<br/>y |`
    );

    await expect(markdown.getByRole('cell').first().locator('br')).toHaveCount(
      1
    );
    await expect(markdown.getByRole('cell').last().locator('br')).toHaveCount(
      1
    );
    await expect(markdown.getByRole('cell').first()).not.toContainText('<br>');
  }
);

regressionTest(
  'shows table actions with accessible names',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      `${TABLE}\n| Bolt | 3 | ok |`
    );

    await expect(
      markdown.getByRole('button', { name: 'Copy table as CSV' })
    ).toBeVisible();
    await expect(
      markdown.getByRole('button', { name: 'Download table as CSV' })
    ).toBeVisible();
  }
);

regressionTest(
  'hides table actions while the table is open while streaming',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      `${TABLE}\n| Bolt | 3 | ok |`,
      true
    );

    await expect(markdown.getByRole('table')).toBeVisible();
    await expect(markdown.locator('ix-icon-button')).toHaveCount(0);

    await update(markdown, `${TABLE}\n| Bolt | 3 | ok |\n\nAfter`, true);
    await expect(markdown.getByRole('paragraph')).toHaveText('After');
    await expect(
      markdown.getByRole('button', { name: 'Copy table as CSV' })
    ).toBeVisible();
  }
);

regressionTest(
  'shows actions on all tables once streaming ends',
  async ({ mount, page }) => {
    const markdown = await mountMarkdown(
      mount,
      page,
      `${TABLE}\n| Bolt | 3 | ok |`,
      true
    );
    await expect(markdown.locator('ix-icon-button')).toHaveCount(0);

    await update(markdown, `${TABLE}\n| Bolt | 3 | ok |`, false);
    await expect(markdown.locator('ix-icon-button')).toHaveCount(2);
  }
);

regressionTest('copies the table as escaped CSV', async ({ mount, page }) => {
  const markdown = await mountMarkdown(
    mount,
    page,
    [
      '| Name | Note |',
      '| --- | --- |',
      '| a,b | say "hi" |',
      '| **bold** | l1<br>l2 |',
      '| `code` | plain |',
    ].join('\n')
  );
  await mockClipboard(page);

  await markdown.getByRole('button', { name: 'Copy table as CSV' }).click();

  expect(await page.evaluate(() => (window as TestWindow).__copiedText)).toBe(
    ['Name,Note', '"a,b","say ""hi"""', 'bold,"l1\nl2"', 'code,plain'].join(
      '\r\n'
    )
  );
});

regressionTest('downloads the table as table.csv', async ({ mount, page }) => {
  const markdown = await mountMarkdown(
    mount,
    page,
    ['| A | B |', '| - | - |', '| 1 | 2 |'].join('\n')
  );

  const downloadPromise = page.waitForEvent('download');
  await markdown.getByRole('button', { name: 'Download table as CSV' }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe('table.csv');
  const stream = await download.createReadStream();
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(chunk as Buffer);
  }
  expect(Buffer.concat(chunks).toString('utf8')).toBe('A,B\r\n1,2');
});

regressionTest('labels are localizable', async ({ mount, page }) => {
  const markdown = await mountMarkdown(
    mount,
    page,
    `${TABLE}\n| Bolt | 3 | ok |`
  );

  await markdown.evaluate((el: HTMLIxMarkdownElement) => {
    el.i18nCopyTable = 'Tabelle kopieren';
    el.i18nDownloadTable = 'Tabelle herunterladen';
  });

  await expect(
    markdown.getByRole('button', { name: 'Tabelle kopieren' })
  ).toBeVisible();
  await expect(
    markdown.getByRole('button', { name: 'Tabelle herunterladen' })
  ).toBeVisible();
});

regressionTest(
  'table accessibility',
  async ({ mount, page, makeAxeBuilder }) => {
    await mountMarkdown(mount, page, `${TABLE}\n| Bolt | 3 | ok |`);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  }
);
