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

regressionTest(
  'ix-chat-ai-message renders slotted message content',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-ai-message>
        <h3>Text block example</h3>
        <p>Effective asset performance management improves uptime.</p>
      </ix-chat-ai-message>
    `);

    const message = page.locator('ix-chat-ai-message');

    await expect(message.locator('h3')).toContainText('Text block example');
    await expect(message.locator('p')).toContainText(
      'Effective asset performance management improves uptime.'
    );
    await expect(message.locator('.meta')).not.toBeVisible();
  }
);

regressionTest(
  'ix-chat-ai-message renders the trace slot above the content',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-ai-message>
        <p>Three alarms need attention.</p>
        <ix-chat-activity-trace slot="trace">
          <ix-chat-trace-item label="Read alarms" state="completed"></ix-chat-trace-item>
        </ix-chat-activity-trace>
      </ix-chat-ai-message>
    `);

    const trace = page.getByRole('listitem');
    const content = page.getByText('Three alarms need attention.');
    await expect(trace).toBeVisible();
    await expect(content).toBeVisible();

    const traceBox = await trace.boundingBox();
    const contentBox = await content.boundingBox();
    if (!traceBox || !contentBox) {
      throw new Error('Expected trace and content to have a bounding box');
    }
    expect(traceBox.y + traceBox.height).toBeLessThanOrEqual(contentBox.y);
  }
);

regressionTest(
  'ix-chat-ai-message shows only the trace while there is no content',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-ai-message>
        <ix-chat-activity-trace slot="trace">
          <ix-chat-trace-item label="Thinking…" state="running"></ix-chat-trace-item>
        </ix-chat-activity-trace>
      </ix-chat-ai-message>
    `);

    const message = page.locator('ix-chat-ai-message');
    await expect(page.getByRole('listitem')).toBeVisible();
    await expect(message.locator('.message')).toBeHidden();

    await message.evaluate((element) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'First answer token';
      element.appendChild(paragraph);
    });

    await expect(message.locator('.message')).toBeVisible();
    await expect(page.getByText('First answer token')).toBeVisible();
  }
);

regressionTest(
  'ix-chat-ai-message with trace is accessible',
  async ({ mount, page, makeAxeBuilder }) => {
    await mount(`
      <ix-chat-ai-message>
        <ix-chat-activity-trace slot="trace" summary="Answer generated from 1 source">
          <ix-chat-trace-item label="Read alarms" state="completed"></ix-chat-trace-item>
        </ix-chat-activity-trace>
        <p>Three alarms need attention.</p>
      </ix-chat-ai-message>
    `);
    await expect(page.locator('ix-chat-activity-trace')).toHaveAttribute(
      'hydrated'
    );

    const results = await makeAxeBuilder()
      .include('ix-chat-ai-message')
      .analyze();
    expect(results.violations).toEqual([]);
  }
);

regressionTest(
  'ix-chat-ai-message renders optional actions',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-ai-message>
        <p>Analyze alarms</p>
        <button slot="actions" aria-label="Copy">Copy</button>
        <button slot="actions" aria-label="Regenerate">Regenerate</button>
      </ix-chat-ai-message>
    `);

    const message = page.locator('ix-chat-ai-message');

    await expect(message).toHaveClass(/has-actions/);
    await expect(message.locator('.meta')).toBeVisible();
    await expect(message.locator('.actions')).toBeVisible();
    await expect(page.locator('button[slot="actions"]')).toHaveCount(2);
  }
);

regressionTest(
  'ix-chat-ai-message renders optional sources',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-ai-message>
        <p>Analyze alarms</p>
        <ix-pill slot="sources" outline variant="neutral">Sources</ix-pill>
      </ix-chat-ai-message>
    `);

    const message = page.locator('ix-chat-ai-message');

    await expect(message).toHaveClass(/has-sources/);
    await expect(message.locator('.meta')).toBeVisible();
    await expect(message.locator('.sources')).toBeVisible();
    await expect(page.locator('ix-pill[slot="sources"]')).toContainText(
      'Sources'
    );
  }
);
