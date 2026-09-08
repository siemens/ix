/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { iconWarning } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

regressionTest('accessibility', async ({ mount, makeAxeBuilder }) => {
  await mount(
    `<ix-info-page
      title-text="Report could not be generated"
      copy-text="An error occurred while generating the report."
      instructions="Contact your administrator for more information."
    >
      <ix-button slot="actions">Return to overview</ix-button>
    </ix-info-page>`,
    { icons: { iconWarning } }
  );

  const results = await makeAxeBuilder().analyze();
  expect(results.violations).toEqual([]);
});

regressionTest('renders', async ({ mount, page }) => {
  await mount(
    `<ix-info-page title-text="Invitation received"></ix-info-page>`,
    {
      icons: { iconWarning },
    }
  );

  const infoPage = page.locator('ix-info-page');
  await expect(infoPage).toHaveClass(/\bhydrated\b/);
  await expect(infoPage).toBeVisible();
  await expect(infoPage.getByRole('heading', { level: 1 })).toHaveText(
    'Invitation received'
  );
});

regressionTest('applies title-only bottom spacing', async ({ mount, page }) => {
  await mount(
    `<ix-info-page title-text="Invitation received"></ix-info-page>`,
    {
      icons: { iconWarning },
    }
  );

  await expect(page.locator('ix-info-page h1')).toHaveCSS(
    'margin-bottom',
    '16px'
  );
});

regressionTest(
  'renders optional content and custom slots',
  async ({ mount, page }) => {
    await mount(`
    <ix-info-page
      title-text="Invitation received"
      copy-text="You were invited to join Sample Co."
      instructions="Accept the invitation to continue."
    >
      <img slot="image" alt="Invitation" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" />
      <ix-button slot="actions">Accept invitation</ix-button>
    </ix-info-page>
  `);

    const infoPage = page.locator('ix-info-page');
    await expect(
      infoPage.getByText('You were invited to join Sample Co.')
    ).toBeVisible();
    await expect(
      infoPage.getByText('Accept the invitation to continue.')
    ).toBeVisible();
    await expect(
      infoPage.getByRole('img', { name: 'Invitation' })
    ).toBeVisible();
    await expect(
      infoPage.getByRole('button', { name: 'Accept invitation' })
    ).toBeVisible();
    // default icon fallback stays in the DOM but must not be rendered when a custom image is slotted
    await expect(infoPage.locator('ix-icon')).not.toBeVisible();
  }
);

regressionTest(
  'applies default image size and allows consumer overrides',
  async ({ mount, page }) => {
    await mount(`
      <ix-info-page title-text="Invitation received">
        <img slot="image" alt="Invitation" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=" />
      </ix-info-page>
    `);

    const infoPage = page.locator('ix-info-page');
    const imageContainer = infoPage.locator('.content__image');
    await expect(imageContainer).toHaveCSS('width', '260px');
    await expect(imageContainer).toHaveCSS('height', '196px');

    await infoPage.evaluate((element) => {
      element.style.setProperty('--ix-info-page-image-width', '130px');
      element.style.setProperty('--ix-info-page-image-height', '98px');
    });
    await expect(imageContainer).toHaveCSS('width', '130px');
    await expect(imageContainer).toHaveCSS('height', '98px');
  }
);

regressionTest(
  'applies consistent vertical spacing',
  async ({ mount, page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    await mount(`
    <ix-info-page
      title-text="Invitation received"
      copy-text="You were invited to join Sample Co."
      instructions="Accept the invitation to continue."
    >
      <ix-button slot="actions">Accept invitation</ix-button>
    </ix-info-page>
  `);

    const infoPage = page.locator('ix-info-page');
    await expect(infoPage.locator('.content__image')).toHaveCSS(
      'margin-bottom',
      '40px'
    );
    await expect(infoPage.locator('.message__copy')).toHaveCSS(
      'margin-top',
      '16px'
    );
    await expect(infoPage.locator('.message__instructions')).toHaveCSS(
      'margin-top',
      '16px'
    );
    await expect(infoPage.locator('.content__action')).toHaveCSS(
      'margin-top',
      '32px'
    );
  }
);
