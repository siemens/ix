/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-card-list label="Card List">
      <ix-card>Card 1</ix-card>
      <ix-card>Card 2</ix-card>
      <ix-card>Card 3</ix-card>
    </ix-card-list>
  `);

  const cardList = page.locator('ix-card-list');
  await expect(cardList).toBeVisible();
});

test('show more card is visible when cards exceed maxVisibleCards', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-card-list label="Card List" max-visible-cards="2">
      <ix-card>Card 1</ix-card>
      <ix-card>Card 2</ix-card>
      <ix-card>Card 3</ix-card>
    </ix-card-list>
  `);

  const showMoreCard = page.locator('.Show__All__Card');
  await expect(showMoreCard).toBeVisible();
});

test('show more card is not visible when cards do not exceed maxVisibleCards', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-card-list label="Card List" max-visible-cards="5">
      <ix-card>Card 1</ix-card>
      <ix-card>Card 2</ix-card>
      <ix-card>Card 3</ix-card>
    </ix-card-list>
  `);

  const showMoreCard = page.locator('.Show__All__Card');
  await expect(showMoreCard).not.toBeVisible();
});

test('clicking show more reveals maxVisibleCards more cards by default', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-card-list label="Card List" max-visible-cards="2">
      <ix-card>Card 1</ix-card>
      <ix-card>Card 2</ix-card>
      <ix-card>Card 3</ix-card>
      <ix-card>Card 4</ix-card>
      <ix-card>Card 5</ix-card>
    </ix-card-list>
  `);

  const hiddenCards = page.locator('ix-card.display-none');
  await expect(hiddenCards).toHaveCount(3);

  const showMoreCard = page.locator('.Show__All__Card');
  await showMoreCard.click();

  await expect(hiddenCards).toHaveCount(1);
});

test('custom showMoreStep overrides default step', async ({ mount, page }) => {
  await mount(`
    <ix-card-list label="Card List" max-visible-cards="2" show-more-step="1">
      <ix-card>Card 1</ix-card>
      <ix-card>Card 2</ix-card>
      <ix-card>Card 3</ix-card>
      <ix-card>Card 4</ix-card>
    </ix-card-list>
  `);

  const hiddenCards = page.locator('ix-card.display-none');
  await expect(hiddenCards).toHaveCount(2);

  const showMoreCard = page.locator('.Show__All__Card');
  await showMoreCard.click();

  await expect(hiddenCards).toHaveCount(1);
});

test('showMoreStep of 0 falls back to maxVisibleCards', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-card-list label="Card List" max-visible-cards="2" show-more-step="0">
      <ix-card>Card 1</ix-card>
      <ix-card>Card 2</ix-card>
      <ix-card>Card 3</ix-card>
      <ix-card>Card 4</ix-card>
      <ix-card>Card 5</ix-card>
    </ix-card-list>
  `);

  const hiddenCards = page.locator('ix-card.display-none');
  await expect(hiddenCards).toHaveCount(3);

  const showMoreCard = page.locator('.Show__All__Card');
  await showMoreCard.click();

  await expect(hiddenCards).toHaveCount(1);
});

test('show all reveals all cards regardless of count', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-card-list label="Card List" max-visible-cards="2">
      <ix-card>Card 1</ix-card>
      <ix-card>Card 2</ix-card>
      <ix-card>Card 3</ix-card>
      <ix-card>Card 4</ix-card>
      <ix-card>Card 5</ix-card>
    </ix-card-list>
  `);

  const hiddenCards = page.locator('ix-card.display-none');
  await expect(hiddenCards).toHaveCount(3);

  const showAllButton = page.locator('.CardList__Title__Show__All');
  await showAllButton.click();

  await expect(hiddenCards).toHaveCount(0);

  const showMoreCard = page.locator('.Show__All__Card');
  await expect(showMoreCard).not.toBeVisible();
});

test('show more card displays correct overflowing cards count', async ({
  mount,
  page,
}) => {
  await mount(`
    <ix-card-list label="Card List" max-visible-cards="2">
      <ix-card>Card 1</ix-card>
      <ix-card>Card 2</ix-card>
      <ix-card>Card 3</ix-card>
      <ix-card>Card 4</ix-card>
      <ix-card>Card 5</ix-card>
    </ix-card-list>
  `);

  const showMoreText = page.locator('.Show__All__Card__Text');
  await expect(showMoreText).toContainText('(3)');
});
