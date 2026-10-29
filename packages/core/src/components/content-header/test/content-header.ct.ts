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
import { iconPen } from '@siemens/ix-icons/icons';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(`
    <ix-content-header
      header-title="Production line overview"
      header-subtitle="Plant 1"
    >
      <ix-pill slot="header">Online</ix-pill>
      <ix-button variant="tertiary">Edit</ix-button>
    </ix-content-header>
  `);

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-content-header
      header-title="Content title"
      header-subtitle="Subtitle"
    ></ix-content-header>
  `);

  const header = page.locator('ix-content-header');
  await expect(header).toHaveAttribute('hydrated');
  await expect(header).toHaveAttribute('text-overflow', 'wrap');
  await expect(header).toHaveJSProperty('textOverflow', 'wrap');
  await expect(page.getByText('Content title', { exact: true })).toBeVisible();
  await expect(page.getByText('Subtitle', { exact: true })).toBeVisible();
});

regressionTest(
  'updates overflow behavior when textOverflow changes at runtime',
  async ({ mount, page }) => {
    const title = 'A title that switches between wrapping and truncation';

    await mount(`
      <ix-content-header
        style="width: 14rem"
        header-title="${title}"
      ></ix-content-header>
    `);

    const header = page.locator('ix-content-header');
    await expect(header).toHaveAttribute('hydrated');
    const titleText = header.getByText(title, { exact: true });
    const getHeight = () =>
      titleText.evaluate((element) => element.getBoundingClientRect().height);

    const wrappedHeight = await getHeight();

    await header.evaluate((element: HTMLIxContentHeaderElement) => {
      element.textOverflow = 'ellipsis';
    });

    await expect(header).toHaveAttribute('text-overflow', 'ellipsis');
    await expect(titleText).not.toHaveAttribute('title');
    await expect.poll(getHeight).toBeLessThan(wrappedHeight);

    await header.evaluate((element: HTMLIxContentHeaderElement) => {
      element.textOverflow = 'wrap';
    });

    await expect(header).toHaveAttribute('text-overflow', 'wrap');
    await expect(titleText).not.toHaveAttribute('title');
    await expect.poll(getHeight).toBe(wrappedHeight);
  }
);

const variants = [
  { variant: '', expected: 'primary', hasSecondaryClass: false },
  {
    variant: 'variant="secondary"',
    expected: 'secondary',
    hasSecondaryClass: true,
  },
];

for (const { variant, expected, hasSecondaryClass } of variants) {
  regressionTest(
    `renders header title as h2 for ${expected} variant`,
    async ({ mount, page }) => {
      await mount(
        `<ix-content-header ${variant} header-title="My Content Page"></ix-content-header>`
      );

      const heading = page.getByRole('heading', {
        level: 2,
        name: 'My Content Page',
      });
      await expect(heading).toBeVisible();

      const titleElement = page
        .locator('ix-content-header')
        .locator('h2.header-title');
      await expect(titleElement.locator('ix-typography')).toHaveCount(1);

      if (hasSecondaryClass) {
        await expect(titleElement).toHaveClass(/\bsecondary\b/);
      } else {
        await expect(titleElement).not.toHaveClass(/\bsecondary\b/);
      }
    }
  );
}

regressionTest(
  'does not render h2 when headerTitle is omitted',
  async ({ mount, page }) => {
    await mount(`<ix-content-header></ix-content-header>`);

    const heading = page.locator('ix-content-header').locator('h2');
    await expect(heading).toHaveCount(0);
  }
);

const responsiveHeader = `
  <ix-content-header header-title="Production line" header-subtitle="Plant 1">
    <ix-button slot="secondary-actions" variant="tertiary">Export report</ix-button>
    <ix-button slot="secondary-actions" variant="tertiary">Manage permissions</ix-button>
    <ix-button variant="primary">Save changes</ix-button>
  </ix-content-header>
`;

regressionTest(
  'secondary actions overflow is accessible and keyboard operable',
  async ({ mount, page, makeAxeBuilder }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await mount(responsiveHeader);

    const trigger = page.getByRole('button', { name: 'More actions' });
    await expect(trigger).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Save changes' })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Export report' })
    ).toBeHidden();
    expect((await makeAxeBuilder().analyze()).violations).toEqual([]);

    await trigger.focus();
    await page.keyboard.press('ArrowDown');
    const firstItem = page.getByRole('menuitem', { name: 'Export report' });
    await expect(firstItem).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect((await makeAxeBuilder().analyze()).violations).toEqual([]);

    const clicks = await page
      .locator('ix-button[slot="secondary-actions"]')
      .first()
      .evaluateHandle((element) => {
        const result = { count: 0 };
        element.addEventListener('click', () => result.count++);
        return result;
      });
    await page.keyboard.press('Enter');
    await expect.poll(() => clicks.evaluate((result) => result.count)).toBe(1);
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  }
);

regressionTest(
  'collapses at large viewports based on container width and expands without stale measurements',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount(`<div style="width: 20rem">${responsiveHeader}</div>`);
    const header = page.locator('ix-content-header');
    const trigger = page.getByRole('button', { name: 'More actions' });
    await expect(trigger).toBeVisible();
    await expect(header.locator('.overflowButton')).toHaveCSS(
      'margin-left',
      '8px'
    );

    for (const width of ['70rem', '20rem', '70rem']) {
      await header.evaluate((element, width) => {
        const parent = element.parentElement;
        if (!parent) {
          throw new Error('Expected a resizable header container');
        }
        parent.style.width = width;
      }, width);
      if (width === '20rem') {
        await expect(trigger).toBeVisible();
      } else {
        await expect(trigger).toHaveCount(0);
        await expect(
          page.getByRole('button', { name: 'Export report' })
        ).toBeVisible();
      }
    }
  }
);

regressionTest(
  'opens the overflow menu in the custom-element build without componentOnReady',
  async ({ mount, page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.route('**/www/build/siemens-ix.esm.js', (route) =>
      route.fulfill({
        contentType: 'application/javascript',
        body: `
          import { defineCustomElement as defineHeader } from '/components/ix-content-header.js';
          import { defineCustomElement as defineButton } from '/components/ix-button.js';
          defineHeader();
          defineButton();
        `,
      })
    );
    await page.reload();
    await page.setViewportSize({ width: 375, height: 800 });
    await mount(responsiveHeader);

    const trigger = page.getByRole('button', { name: 'More actions' });
    await expect(trigger).toBeVisible();
    expect(
      await page
        .locator('ix-content-header ix-icon-button')
        .evaluate(
          (element: HTMLIxIconButtonElement) => typeof element.componentOnReady
        )
    ).toBe('undefined');
    await trigger.click();
    await expect(
      page.getByRole('menuitem', { name: 'Export report' })
    ).toBeVisible();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(errors).toEqual([]);
  }
);

regressionTest(
  'reserves title space when deciding whether secondary actions fit',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount(`
      <div style="width: 600px; max-width: 100%">
        <ix-content-header header-title="Production line overview">
          <ix-button slot="secondary-actions" variant="tertiary" style="width: 250px">Export report</ix-button>
          <ix-button slot="secondary-actions" variant="tertiary" style="width: 220px">Manage permissions</ix-button>
          <ix-button style="width: 100px">Save changes</ix-button>
        </ix-content-header>
        <p>Following page content</p>
      </div>
    `);
    const header = page.locator('ix-content-header');
    const trigger = page.getByRole('button', { name: 'More actions' });
    await expect(trigger).toBeVisible();
    const title = page.getByRole('heading', {
      name: 'Production line overview',
    });
    await expect(title).toBeVisible();
    expect(
      await title.evaluate((element) => element.clientWidth)
    ).toBeGreaterThan(200);
    expect(
      await header.evaluate((element) => element.getBoundingClientRect().height)
    ).toBeLessThan(100);

    await header.evaluate((element) => {
      const container = element.parentElement;
      if (!container) {
        throw new Error('Expected a resizable header container');
      }
      container.style.width = '1000px';
    });
    await expect(trigger).toHaveCount(0);
    await expect(
      page.getByRole('button', { name: 'Export report' })
    ).toBeVisible();
  }
);

regressionTest(
  'keeps CSS-hidden secondary actions out of the overflow menu',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await mount(
      `
      <ix-content-header header-title="Assets">
        <ix-button slot="secondary-actions">Export report</ix-button>
        <ix-button slot="secondary-actions" style="display: none">Hidden action</ix-button>
        <ix-button slot="secondary-actions" class="hidden-action">Class-hidden action</ix-button>
        <ix-icon-button slot="secondary-actions" style="display: none" icon="pen" aria-label="Hidden icon action"></ix-icon-button>
      </ix-content-header>
    `,
      {
        headTags: ['<style>.hidden-action { display: none; }</style>'],
        icons: { iconPen },
      }
    );

    const header = page.locator('ix-content-header');
    const trigger = page.getByRole('button', { name: 'More actions' });
    await trigger.click();
    await expect(page.getByRole('menuitem')).toHaveCount(1);
    await expect(
      page.getByRole('menuitem', { name: 'Export report' })
    ).toBeVisible();

    const hiddenAction = header.locator('ix-button').nth(1);
    await hiddenAction.evaluate((element) => {
      element.style.display = '';
    });
    await expect(
      page.getByRole('menuitem', { name: 'Hidden action', exact: true })
    ).toBeVisible();
    await hiddenAction.evaluate((element) => {
      element.style.display = 'none';
    });
    await expect(page.getByRole('menuitem')).toHaveCount(1);
    await header
      .locator('ix-button')
      .first()
      .evaluate((element) => {
        element.style.display = 'none';
      });
    await expect(trigger).toHaveCount(0);
  }
);

regressionTest(
  'reacts to viewport changes using the layout service',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount(responsiveHeader);
    const trigger = page.getByRole('button', { name: 'More actions' });
    await expect(trigger).toHaveCount(0);
    await page.setViewportSize({ width: 375, height: 800 });
    await expect(trigger).toBeVisible();
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(trigger).toHaveCount(0);
  }
);

regressionTest(
  'preserves keyboard focus when actions collapse and expand',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount(`<div style="width: 70rem">${responsiveHeader}</div>`);
    const container = page.locator('ix-content-header').locator('..');
    const action = page.getByRole('button', { name: 'Export report' });
    await action.focus();
    await container.evaluate((element) => (element.style.width = '20rem'));
    const trigger = page.getByRole('button', { name: 'More actions' });
    await expect(trigger).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(
      page.getByRole('menuitem', { name: 'Export report' })
    ).toBeFocused();
    await container.evaluate((element) => (element.style.width = '70rem'));
    await expect(action).toBeFocused();
  }
);

regressionTest(
  'updates collapsed labels, disabled state and dynamically added actions',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await mount(responsiveHeader);
    const header = page.locator('ix-content-header');
    const trigger = page.getByRole('button', { name: 'More actions' });
    await trigger.click();
    await header.evaluate((element) => {
      const action = element.querySelector('ix-button')!;
      action.textContent = 'Download report';
      action.disabled = true;
      const added = document.createElement('ix-button');
      added.slot = 'secondary-actions';
      added.textContent = 'New action';
      element.appendChild(added);
    });
    await expect(
      page.getByRole('menuitem', { name: 'Download report' })
    ).toHaveAttribute('aria-disabled', 'true');
    await expect(
      page.getByRole('menuitem', { name: 'New action' })
    ).toBeVisible();
    await header.evaluate((element) => {
      element
        .querySelectorAll('[slot="secondary-actions"]')
        .forEach((action) => action.remove());
    });
    await expect(trigger).toHaveCount(0);
  }
);

regressionTest(
  'remeasures actions changed while collapsed and reconnects observers',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mount(`<div style="width: 20rem">${responsiveHeader}</div>`);
    const header = page.locator('ix-content-header');
    const trigger = page.getByRole('button', { name: 'More actions' });
    await expect(trigger).toBeVisible();
    await header.evaluate((element) => {
      const parent = element.parentElement;
      if (!parent) {
        throw new Error('Expected a header container for reconnection');
      }
      element.remove();
      parent.appendChild(element);
      parent.style.width = '30rem';
      element
        .querySelectorAll('[slot="secondary-actions"]')
        .forEach((action) => {
          action.textContent = 'Go';
        });
    });
    await expect(trigger).toHaveCount(0);
    await header.evaluate((element) => {
      element.querySelector('ix-button')!.textContent =
        'An action label that is too long for this container';
    });
    await expect(trigger).toBeVisible();
  }
);

regressionTest(
  'supports localized overflow labels and named icon actions',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await mount(
      `<ix-content-header header-title="Assets" aria-label-more-actions="Weitere Aktionen">
        <ix-icon-button slot="secondary-actions" icon="pen" aria-label="Edit asset"></ix-icon-button>
      </ix-content-header>`,
      { icons: { iconPen } }
    );
    await page.getByRole('button', { name: 'Weitere Aktionen' }).click();
    await expect(
      page.getByRole('menuitem', { name: 'Edit asset' })
    ).toBeVisible();
  }
);

regressionTest(
  'preserves form submission and link activation from overflow actions',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await mount(`
      <form>
        <ix-content-header header-title="Assets">
          <ix-button slot="secondary-actions" type="submit">Submit changes</ix-button>
          <ix-button slot="secondary-actions" href="#history">View history</ix-button>
        </ix-content-header>
      </form>
    `);
    const submissions = await page.locator('form').evaluateHandle((form) => {
      const result = { count: 0 };
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        result.count++;
      });
      return result;
    });
    const trigger = page.getByRole('button', { name: 'More actions' });
    await trigger.click();
    await page.getByRole('menuitem', { name: 'Submit changes' }).click();
    await expect
      .poll(() => submissions.evaluate((result) => result.count))
      .toBe(1);
    await trigger.click();
    await page.getByRole('menuitem', { name: 'View history' }).click();
    await expect(page).toHaveURL(/#history$/);
  }
);

regressionTest(
  'does not add horizontal scrolling for measured collapsed actions',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await mount(`
      <ix-content-header header-title="Assets">
        ${Array.from(
          { length: 8 },
          (_, index) =>
            `<ix-button slot="secondary-actions">Secondary action ${
              index + 1
            }</ix-button>`
        ).join('')}
        <ix-button>Save</ix-button>
      </ix-content-header>
    `);
    await expect(
      page.getByRole('button', { name: 'More actions' })
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth
      )
    ).toBe(true);
  }
);

regressionTest(
  'legacy actions wrap within the header without overlapping following content',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await mount(`
      <div>
        <ix-content-header has-back-button header-title="A long title that wraps to multiple lines">
          ${Array.from(
            { length: 8 },
            (_, index) => `<ix-button>Action ${index + 1}</ix-button>`
          ).join('')}
        </ix-content-header>
        <p>Following content</p>
      </div>
    `);
    const header = page.locator('ix-content-header');
    await expect(header).toHaveAttribute('hydrated');
    await expect(
      page.getByRole('button', { name: 'More actions' })
    ).toHaveCount(0);
    const headerBox = await header.boundingBox();
    const followingBox = await page
      .getByText('Following content')
      .boundingBox();
    if (!headerBox || !followingBox) {
      throw new Error(
        'Expected the header and following content to be visible'
      );
    }
    expect(followingBox.y).toBeGreaterThanOrEqual(
      headerBox.y + headerBox.height
    );
    for (const button of await header.locator('ix-button').all()) {
      const box = await button.boundingBox();
      if (!box) {
        throw new Error('Expected every action to be visible');
      }
      expect(box.x).toBeGreaterThanOrEqual(headerBox.x);
      expect(box.x + box.width).toBeLessThanOrEqual(
        headerBox.x + headerBox.width + 1
      );
      expect(box.y + box.height).toBeLessThanOrEqual(
        headerBox.y + headerBox.height + 1
      );
      await expect(button).toHaveCSS('height', '32px');
    }
  }
);
