/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, type Locator, type Page } from '@playwright/test';
import { regressionTest, waitForRender } from '@utils/test';

const longParagraph =
  'Effective asset performance management improves uptime, reduces maintenance costs and ensures long-term equipment health across all production lines.';

function createConversation(turns = 6) {
  return Array.from({ length: turns })
    .map(
      (_, index) => `
        <ix-chat-user-message message="Question ${
          index + 1
        }"></ix-chat-user-message>
        <ix-chat-ai-message><p>${longParagraph}</p><p>${longParagraph}</p></ix-chat-ai-message>
      `
    )
    .join('');
}

async function mountChat(
  mount: (html: string) => Promise<unknown>,
  page: Page,
  attributes = ''
) {
  await mount(`
    <ix-chat style="height: 24rem; width: 40rem" ${attributes}>
      ${createConversation()}
      <ix-chat-input slot="prompt"></ix-chat-input>
    </ix-chat>
  `);

  const chat = page.locator('ix-chat');
  await expect(chat).toHaveAttribute('hydrated');
  return chat;
}

function getMessages(chat: Locator) {
  return chat.locator('.messages');
}

function getScrollTop(chat: Locator) {
  return getMessages(chat).evaluate((element) => element.scrollTop);
}

function getDistanceFromBottom(chat: Locator) {
  return getMessages(chat).evaluate(
    (element) => element.scrollHeight - element.clientHeight - element.scrollTop
  );
}

async function expectAtBottom(chat: Locator) {
  await expect.poll(() => getDistanceFromBottom(chat)).toBeLessThanOrEqual(1);
}

async function scrollUpAsUser(page: Page, chat: Locator) {
  await getMessages(chat).hover();
  await page.mouse.wheel(0, -400);
  await expect.poll(() => getDistanceFromBottom(chat)).toBeGreaterThan(100);
}

async function appendAiMessage(page: Page) {
  await page.evaluate((text) => {
    const message = document.createElement('ix-chat-ai-message');
    message.innerHTML = `<p>${text}</p><p>${text}</p>`;
    document.querySelector('ix-chat')!.append(message);
  }, longParagraph);
}

async function growLastAiMessage(page: Page) {
  await page.evaluate((text) => {
    const messages = document.querySelectorAll('ix-chat-ai-message');
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    messages[messages.length - 1].append(paragraph);
  }, longParagraph);
}

function getScrollToLatestButton(page: Page, name = 'Scroll to latest') {
  return page.getByRole('button', { name });
}

regressionTest(
  'renders scrolled to the latest content',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);

    await expectAtBottom(chat);
    await expect(getScrollToLatestButton(page)).toBeHidden();
  }
);

regressionTest(
  'accessibility with scroll-to-latest button',
  async ({ mount, page, makeAxeBuilder }) => {
    const chat = await mountChat(mount, page);
    await scrollUpAsUser(page, chat);
    await expect(getScrollToLatestButton(page)).toBeVisible();

    const accessibilityScanResults = await makeAxeBuilder()
      .include('ix-chat')
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  }
);

regressionTest('follows appended messages', async ({ mount, page }) => {
  const chat = await mountChat(mount, page);
  await expectAtBottom(chat);
  const scrollTopBefore = await getScrollTop(chat);

  await appendAiMessage(page);

  await expect.poll(() => getScrollTop(chat)).toBeGreaterThan(scrollTopBefore);
  await expectAtBottom(chat);
  await expect(getScrollToLatestButton(page)).toBeHidden();
});

regressionTest(
  'follows growing content inside a message',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await expectAtBottom(chat);
    const scrollTopBefore = await getScrollTop(chat);

    await growLastAiMessage(page);

    await expect
      .poll(() => getScrollTop(chat))
      .toBeGreaterThan(scrollTopBefore);
    await expectAtBottom(chat);
  }
);

regressionTest(
  'stops following when the user scrolls away from the bottom',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await expectAtBottom(chat);

    await scrollUpAsUser(page, chat);
    const scrollTopBefore = await getScrollTop(chat);

    await growLastAiMessage(page);
    await appendAiMessage(page);
    await waitForRender(page);

    expect(await getScrollTop(chat)).toBe(scrollTopBefore);
    await expect(getScrollToLatestButton(page)).toBeVisible();
  }
);

regressionTest(
  'resumes following when the user returns to the bottom',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await scrollUpAsUser(page, chat);

    await page.mouse.wheel(0, 2000);
    await expectAtBottom(chat);
    await expect(getScrollToLatestButton(page)).toBeHidden();

    await growLastAiMessage(page);
    await expectAtBottom(chat);
  }
);

regressionTest(
  'scroll-to-latest button scrolls to the bottom and resumes following',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await scrollUpAsUser(page, chat);

    await getScrollToLatestButton(page).click();

    await expectAtBottom(chat);
    await expect(getScrollToLatestButton(page)).toBeHidden();

    await growLastAiMessage(page);
    await expectAtBottom(chat);
  }
);

regressionTest(
  'scroll-to-latest button is keyboard operable',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await scrollUpAsUser(page, chat);

    const button = getScrollToLatestButton(page);
    await button.focus();
    await expect(button).toBeFocused();
    await page.keyboard.press('Enter');

    await expectAtBottom(chat);
    await expect(button).toBeHidden();
    expect(
      await page.evaluate(() => document.activeElement?.tagName.toLowerCase())
    ).toBe('ix-chat');
  }
);

regressionTest(
  'message area can be scrolled with the keyboard',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await expectAtBottom(chat);

    await getMessages(chat).focus();
    await page.keyboard.press('Home');

    await expect.poll(() => getScrollTop(chat)).toBe(0);
    await expect(getScrollToLatestButton(page)).toBeVisible();
  }
);

regressionTest(
  'scroll-to-latest button does not cover the prompt',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await scrollUpAsUser(page, chat);

    const button = getScrollToLatestButton(page);
    await expect(button).toBeVisible();

    const buttonBox = await button.boundingBox();
    const promptBox = await page.locator('ix-chat-input').boundingBox();

    if (!buttonBox || !promptBox) {
      throw new Error('Expected button and prompt to be rendered');
    }
    expect(buttonBox.y + buttonBox.height).toBeLessThanOrEqual(promptBox.y);
  }
);

regressionTest(
  'jumps to the bottom when a new user message is added',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await scrollUpAsUser(page, chat);

    await page.evaluate(() => {
      const message = document.createElement('ix-chat-user-message');
      message.setAttribute('message', 'A new question');
      document.querySelector('ix-chat')!.append(message);
    });

    await expectAtBottom(chat);
    await expect(getScrollToLatestButton(page)).toBeHidden();
    await expect(page.getByText('A new question')).toBeInViewport();
  }
);

regressionTest(
  'suppressAutoScroll disables following and the scroll-to-latest button',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page, 'suppress-auto-scroll');

    expect(await getScrollTop(chat)).toBe(0);

    await appendAiMessage(page);
    await waitForRender(page);
    expect(await getScrollTop(chat)).toBe(0);

    await expect(getScrollToLatestButton(page)).toBeHidden();
  }
);

regressionTest(
  'scrollToTop and scrollToBottom scroll programmatically',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page);
    await expectAtBottom(chat);

    await chat.evaluate((element: HTMLIxChatElement) => element.scrollToTop());
    await expect.poll(() => getScrollTop(chat)).toBe(0);
    await expect(getScrollToLatestButton(page)).toBeVisible();

    await chat.evaluate((element: HTMLIxChatElement) =>
      element.scrollToBottom()
    );
    await expectAtBottom(chat);
    await expect(getScrollToLatestButton(page)).toBeHidden();
  }
);

regressionTest(
  'scroll methods work with suppressAutoScroll',
  async ({ mount, page }) => {
    const chat = await mountChat(mount, page, 'suppress-auto-scroll');

    await chat.evaluate((element: HTMLIxChatElement) =>
      element.scrollToBottom()
    );
    await expectAtBottom(chat);

    await chat.evaluate((element: HTMLIxChatElement) => element.scrollToTop());
    await expect.poll(() => getScrollTop(chat)).toBe(0);
    await expect(getScrollToLatestButton(page)).toBeHidden();
  }
);

regressionTest(
  'scroll-to-latest label can be localized',
  async ({ mount, page }) => {
    const chat = await mountChat(
      mount,
      page,
      'i18n-scroll-to-latest="Zur neuesten Nachricht"'
    );
    await scrollUpAsUser(page, chat);

    await expect(
      getScrollToLatestButton(page, 'Zur neuesten Nachricht')
    ).toBeVisible();
  }
);
