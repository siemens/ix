/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from '@utils/test';

const CARDS_HTML = `
  <ix-card><ix-card-content>Card 1</ix-card-content></ix-card>
  <ix-card><ix-card-content>Card 2</ix-card-content></ix-card>
  <ix-card><ix-card-content>Card 3</ix-card-content></ix-card>
  <ix-card><ix-card-content>Card 4</ix-card-content></ix-card>
  <ix-card><ix-card-content>Card 5</ix-card-content></ix-card>
`;

regressionTest(
  'show all button reveals all hidden cards',
  async ({ mount, page }) => {
    await mount(`
      <ix-card-list label="Test" list-style="stack" max-visible-cards="3">
        ${CARDS_HTML}
      </ix-card-list>
    `);

    const cardList = page.locator('ix-card-list');
    await expect(cardList).toHaveClass(/hydrated/);

    // Cards 4 and 5 should be hidden initially
    const cards = cardList.locator('ix-card');
    await expect(cards.nth(3)).toHaveClass(/display-none/);
    await expect(cards.nth(4)).toHaveClass(/display-none/);

    const showAllButton = cardList.getByRole('button', { name: /show all/i });
    await showAllButton.click();

    // All cards should now be visible
    for (let i = 0; i < 5; i++) {
      await expect(cards.nth(i)).not.toHaveClass(/display-none/);
    }
  }
);

regressionTest(
  'show more card reveals all hidden cards',
  async ({ mount, page }) => {
    await mount(`
      <ix-card-list label="Test" list-style="stack" max-visible-cards="3">
        ${CARDS_HTML}
      </ix-card-list>
    `);

    const cardList = page.locator('ix-card-list');
    await expect(cardList).toHaveClass(/hydrated/);

    const cards = cardList.locator('ix-card');

    // The show-more card renders as an ix-card with Show__All__Card class
    const showMoreCard = cardList.locator('.Show__All__Card');
    await expect(showMoreCard).toBeVisible();

    await showMoreCard.click();

    // All original cards should now be visible; show-more card gone
    await expect(showMoreCard).not.toBeVisible();
    for (let i = 0; i < 5; i++) {
      await expect(cards.nth(i)).not.toHaveClass(/display-none/);
    }
  }
);

regressionTest(
  'show all button switches to show less button and hides overflowing cards again',
  async ({ mount, page }) => {
    await mount(`
      <ix-card-list
        label="Test"
        list-style="stack"
        max-visible-cards="3"
        i18n-show-less="Show less"
      >
        ${CARDS_HTML}
      </ix-card-list>
    `);

    const cardList = page.locator('ix-card-list');
    await expect(cardList).toHaveClass(/hydrated/);

    const cards = cardList.locator('ix-card');
    const showAllButton = cardList.getByRole('button', { name: /show all/i });
    await showAllButton.click();

    const showLessButton = cardList.getByRole('button', {
      name: /show less/i,
    });
    await expect(showLessButton).toBeVisible();

    await showLessButton.click();

    await expect(cards.nth(3)).toHaveClass(/display-none/);
    await expect(cards.nth(4)).toHaveClass(/display-none/);
    await expect(showAllButton).toBeVisible();
  }
);

regressionTest(
  'show all button: preventDefault prevents cards from being revealed',
  async ({ mount, page }) => {
    await mount(`
      <ix-card-list label="Test" list-style="stack" max-visible-cards="3">
        ${CARDS_HTML}
      </ix-card-list>
    `);

    const cardList = page.locator('ix-card-list');
    await expect(cardList).toHaveClass(/hydrated/);

    // Register a preventDefault listener before clicking
    await cardList.evaluate((el: HTMLIxCardListElement) => {
      el.addEventListener('showAllClick', (event) => event.preventDefault());
    });

    const showAllButton = cardList.getByRole('button', { name: /show all/i });
    await showAllButton.click();

    // Cards beyond maxVisibleCards must still be hidden
    const cards = cardList.locator('ix-card');
    await expect(cards.nth(3)).toHaveClass(/display-none/);
    await expect(cards.nth(4)).toHaveClass(/display-none/);
  }
);

regressionTest(
  'show more card: preventDefault prevents cards from being revealed',
  async ({ mount, page }) => {
    await mount(`
      <ix-card-list label="Test" list-style="stack" max-visible-cards="3">
        ${CARDS_HTML}
      </ix-card-list>
    `);

    const cardList = page.locator('ix-card-list');
    await expect(cardList).toHaveClass(/hydrated/);

    await cardList.evaluate((el: HTMLIxCardListElement) => {
      el.addEventListener('showMoreCardClick', (event) =>
        event.preventDefault()
      );
    });

    const showMoreCard = cardList.locator('.Show__All__Card');
    await showMoreCard.click();

    // Show-more card must still be visible; overflow cards still hidden
    await expect(showMoreCard).toBeVisible();
    const cards = cardList.locator('ix-card');
    await expect(cards.nth(3)).toHaveClass(/display-none/);
    await expect(cards.nth(4)).toHaveClass(/display-none/);
  }
);
