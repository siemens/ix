/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, Locator } from '@playwright/test';
import { regressionTest } from '@utils/test';

const TRANSPARENT = 'rgba(0, 0, 0, 0)';

const expectDividerVisible = async (keyValue: Locator) => {
  await expect(keyValue).toHaveCSS('border-bottom-style', 'solid');
  await expect(keyValue).not.toHaveCSS('border-bottom-width', '0px');
  await expect(keyValue).not.toHaveCSS('border-bottom-color', TRANSPARENT);
};

const expectDividerHidden = async (keyValue: Locator) => {
  await expect(keyValue).toHaveCSS('border-bottom-color', TRANSPARENT);
};

const keyValues = (count: number, attributes = '') =>
  Array.from(
    { length: count },
    (_, index) =>
      `<ix-key-value label="Label ${index}" label-position="left" value="Value" ${attributes}></ix-key-value>`
  ).join('');

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <div>
      <ix-key-value-list>${keyValues(2)}</ix-key-value-list>
      <ix-key-value-list striped divider="false">${keyValues(
        2
      )}</ix-key-value-list>
    </div>
  `);

  const accessibilityScanResults = await makeAxeBuilder().analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-key-value-list>${keyValues(2)}</ix-key-value-list>`);
  const list = page.locator('ix-key-value-list');
  await expect(list).toHaveAttribute('hydrated');
  await expect(list.locator('ix-key-value')).toHaveCount(2);
});

regressionTest(
  'shows a divider below every item by default, including the last',
  async ({ mount, page }) => {
    await mount(`
      <ix-key-value-list>
        <ix-key-value label="Label" value="Value"></ix-key-value>
        <ix-key-value label="Label" label-position="left" value="Value"></ix-key-value>
        <ix-key-value label="Label" label-position="left" value="Value"></ix-key-value>
      </ix-key-value-list>
    `);

    const items = page.locator('ix-key-value');
    for (const item of await items.all()) {
      await expectDividerVisible(item);
    }
  }
);

regressionTest(
  'hides dividers on items that do not set their own divider',
  async ({ mount, page }) => {
    await mount(
      `<ix-key-value-list divider="false">${keyValues(3)}</ix-key-value-list>`
    );

    const items = page.locator('ix-key-value');
    await expect(items).toHaveCount(3);
    for (const item of await items.all()) {
      await expectDividerHidden(item);
    }
  }
);

regressionTest(
  'an item hiding its divider wins over a list with dividers',
  async ({ mount, page }) => {
    await mount(`
      <ix-key-value-list>
        <ix-key-value id="inherit" label="Label" value="Value"></ix-key-value>
        <ix-key-value id="explicit" label="Label" value="Value" divider="false"></ix-key-value>
      </ix-key-value-list>
    `);

    await expectDividerVisible(page.locator('#inherit'));
    await expectDividerHidden(page.locator('#explicit'));
  }
);

regressionTest(
  'an item showing its divider wins over a list without dividers',
  async ({ mount, page }) => {
    await mount(`
      <ix-key-value-list divider="false">
        <ix-key-value id="inherit" label="Label" value="Value"></ix-key-value>
        <ix-key-value id="explicit" label="Label" value="Value" divider></ix-key-value>
      </ix-key-value-list>
    `);

    await expectDividerHidden(page.locator('#inherit'));
    await expectDividerVisible(page.locator('#explicit'));
  }
);

regressionTest(
  'items added later follow the list divider setting',
  async ({ mount, page }) => {
    await mount(
      `<ix-key-value-list divider="false">${keyValues(1)}</ix-key-value-list>`
    );
    const list = page.locator('ix-key-value-list');
    await expect(list).toHaveAttribute('hydrated');

    await list.evaluate((element) => {
      const item = document.createElement('ix-key-value');
      item.id = 'added';
      item.label = 'Added';
      item.labelPosition = 'left';
      item.value = 'Value';
      element.appendChild(item);
    });

    const added = page.locator('#added');
    await expect(added).toHaveAttribute('hydrated');
    await expectDividerHidden(added);
  }
);

regressionTest(
  'toggling the list divider updates items without changing their height',
  async ({ mount, page }) => {
    await mount(`
      <ix-key-value-list>
        <ix-key-value id="inherit" label="Label" label-position="left" value="Value"></ix-key-value>
        <ix-key-value id="explicit" label="Label" label-position="left" value="Value" divider></ix-key-value>
      </ix-key-value-list>
    `);
    const list = page.locator('ix-key-value-list');
    const inherit = page.locator('#inherit');
    const explicit = page.locator('#explicit');
    await expectDividerVisible(inherit);
    const listHeight = await list.evaluate(
      (element) => element.getBoundingClientRect().height
    );

    await list.evaluate((element: HTMLIxKeyValueListElement) => {
      element.divider = false;
    });

    await expectDividerHidden(inherit);
    await expectDividerVisible(explicit);
    expect(
      await list.evaluate((element) => element.getBoundingClientRect().height)
    ).toBe(listHeight);

    await list.evaluate((element: HTMLIxKeyValueListElement) => {
      element.divider = true;
    });

    await expectDividerVisible(inherit);
  }
);

regressionTest(
  'striped and divider are independent',
  async ({ mount, page }) => {
    await mount(`
      <div>
        <ix-key-value-list id="with-divider" striped>${keyValues(
          2
        )}</ix-key-value-list>
        <ix-key-value-list id="without-divider" striped divider="false">${keyValues(
          2
        )}</ix-key-value-list>
      </div>
    `);

    const withDivider = page.locator('#with-divider ix-key-value');
    const withoutDivider = page.locator('#without-divider ix-key-value');

    await expect(withDivider.first()).not.toHaveCSS(
      'background-color',
      TRANSPARENT
    );
    await expect(withoutDivider.first()).not.toHaveCSS(
      'background-color',
      TRANSPARENT
    );
    for (const item of await withDivider.all()) {
      await expectDividerVisible(item);
    }
    for (const item of await withoutDivider.all()) {
      await expectDividerHidden(item);
    }
  }
);

regressionTest(
  'list line custom properties style the item dividers',
  async ({ mount, page }) => {
    await mount(`
      <ix-key-value-list
        style="--ix-key-value-list-item--border-color: rgb(255, 0, 0); --ix-key-value-list--border-width: 3px"
      >
        <ix-key-value id="inherit" label="Label" value="Value"></ix-key-value>
        <ix-key-value
          id="override"
          label="Label"
          value="Value"
          style="--ix-key-value-list-item--border-color: rgb(0, 0, 255)"
        ></ix-key-value>
      </ix-key-value-list>
    `);

    const inherit = page.locator('#inherit');
    await expect(inherit).toHaveCSS('border-bottom-color', 'rgb(255, 0, 0)');
    await expect(inherit).toHaveCSS('border-bottom-width', '3px');
    await expect(page.locator('#override')).toHaveCSS(
      'border-bottom-color',
      'rgb(0, 0, 255)'
    );
  }
);

regressionTest(
  'item line custom properties only style standalone items',
  async ({ mount, page }) => {
    await mount(
      `
      <div>
        <ix-key-value id="standalone" label="Label" value="Value"></ix-key-value>
        <ix-key-value-list style="--ix-key-value-list-item--border-color: rgb(255, 0, 0)">
          <ix-key-value id="listed" label="Label" value="Value"></ix-key-value>
        </ix-key-value-list>
      </div>
    `,
      {
        headTags: [
          '<style>ix-key-value { --ix-key-value--border-color: rgb(0, 0, 255); }</style>',
        ],
      }
    );

    await expect(page.locator('#standalone')).toHaveCSS(
      'border-bottom-color',
      'rgb(0, 0, 255)'
    );
    await expect(page.locator('#listed')).toHaveCSS(
      'border-bottom-color',
      'rgb(255, 0, 0)'
    );
  }
);

regressionTest(
  'keeps hidden dividers hidden in forced colors mode without shifting the layout',
  async ({ mount, page }) => {
    await page.emulateMedia({ forcedColors: 'active' });
    await mount(`
      <div>
        <ix-key-value-list id="with-divider">${keyValues(2)}</ix-key-value-list>
        <ix-key-value-list id="without-divider" divider="false">
          ${keyValues(2)}
          <ix-key-value id="explicit" label="Label" value="Value" divider></ix-key-value>
        </ix-key-value-list>
        <ix-key-value-list id="item-hidden">
          <ix-key-value id="item-off" label="Label" label-position="left" value="Value" divider="false"></ix-key-value>
          <ix-key-value label="Label" label-position="left" value="Value"></ix-key-value>
        </ix-key-value-list>
      </div>
    `);
    await expect(page.locator('#explicit')).toHaveAttribute('hydrated');

    const withoutDivider = page.locator('#without-divider ix-key-value');
    await expect(withoutDivider.nth(0)).toHaveCSS(
      'border-bottom-style',
      'none'
    );
    await expect(withoutDivider.nth(1)).toHaveCSS(
      'border-bottom-style',
      'none'
    );
    await expect(page.locator('#explicit')).toHaveCSS(
      'border-bottom-style',
      'solid'
    );
    await expect(page.locator('#item-off')).toHaveCSS(
      'border-bottom-style',
      'none'
    );

    const pitch = (listId: string) =>
      page.evaluate((listId) => {
        const [first, second] = Array.from(
          document.querySelectorAll(`#${listId} ix-key-value`)
        ).map((item) => item.getBoundingClientRect());
        return second.top - first.top;
      }, listId);
    const shownPitch = await pitch('with-divider');
    expect(await pitch('without-divider')).toBe(shownPitch);
    expect(await pitch('item-hidden')).toBe(shownPitch);
  }
);
