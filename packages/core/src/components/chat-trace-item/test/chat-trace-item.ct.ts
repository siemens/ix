/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { expect, type Locator } from '@playwright/test';
import { iconDocument } from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';

function trackExpandedChange(element: Locator) {
  return element.evaluateHandle((host) => {
    const details: boolean[] = [];
    host.addEventListener('expandedChange', (event) =>
      details.push((event as CustomEvent<boolean>).detail)
    );
    return details;
  });
}

regressionTest('renders', async ({ mount, page }) => {
  await mount(`
    <ix-chat-activity-trace>
      <ix-chat-trace-item label="Read page.tsx" state="completed"></ix-chat-trace-item>
    </ix-chat-activity-trace>
  `);
  await expect(page.locator('ix-chat-trace-item')).toHaveAttribute('hydrated');
});

regressionTest('accessibility', async ({ mount, page, makeAxeBuilder }) => {
  await mount(
    `
    <ix-chat-activity-trace>
      <ix-chat-trace-item label="Thinking…" state="running"></ix-chat-trace-item>
      <ix-chat-trace-item label="Read page.tsx" icon="document" state="completed">
        <ix-chat-trace-item-section heading="Output">42 lines</ix-chat-trace-item-section>
      </ix-chat-trace-item>
      <ix-chat-trace-item label="Search sources" state="warning" expanded>
        <ix-chat-trace-item-section heading="Findings">Partial results</ix-chat-trace-item-section>
      </ix-chat-trace-item>
      <ix-chat-trace-item label="Run tests" state="failed"></ix-chat-trace-item>
    </ix-chat-activity-trace>
  `,
    { icons: { iconDocument } }
  );
  await expect(page.locator('ix-chat-trace-item').first()).toHaveAttribute(
    'hydrated'
  );

  const results = await makeAxeBuilder()
    .include('ix-chat-activity-trace')
    .analyze();
  expect(results.violations).toEqual([]);
});

regressionTest(
  'includes the state in the accessible name of a Trace item with detail',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-activity-trace>
        <ix-chat-trace-item label="Plan answer" state="running"><p>Detail</p></ix-chat-trace-item>
        <ix-chat-trace-item label="Read page.tsx" state="completed"><p>Detail</p></ix-chat-trace-item>
        <ix-chat-trace-item label="Search sources" state="warning"><p>Detail</p></ix-chat-trace-item>
        <ix-chat-trace-item label="Run tests" state="failed"><p>Detail</p></ix-chat-trace-item>
      </ix-chat-activity-trace>
    `);

    await expect(
      page.getByRole('button', { name: 'Plan answer, running', exact: true })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: 'Read page.tsx, completed',
        exact: true,
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', {
        name: 'Search sources, warning',
        exact: true,
      })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Run tests, failed', exact: true })
    ).toBeVisible();
  }
);

regressionTest('supports translated state texts', async ({ mount, page }) => {
  await mount(`
      <ix-chat-activity-trace>
        <ix-chat-trace-item label="Datei lesen" state="failed" i18n-state-failed="fehlgeschlagen">
          <p>Detail</p>
        </ix-chat-trace-item>
      </ix-chat-activity-trace>
    `);

  await expect(
    page.getByRole('button', {
      name: 'Datei lesen, fehlgeschlagen',
      exact: true,
    })
  ).toBeVisible();
});

regressionTest(
  'renders a Trace item without detail as static text',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-activity-trace>
        <ix-chat-trace-item label="Read page.tsx" state="failed"></ix-chat-trace-item>
      </ix-chat-activity-trace>
    `);

    await expect(page.getByRole('list')).toMatchAriaSnapshot(`
      - list:
        - listitem: Read page.tsx, failed
    `);
    await expect(page.getByRole('button')).toHaveCount(0);
    await expect(page.locator('[aria-expanded]')).toHaveCount(0);
    await expect(
      page.locator('ix-chat-trace-item').locator('.chevron')
    ).toHaveCount(0);
  }
);

regressionTest(
  'becomes toggleable once detail is added',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-activity-trace>
        <ix-chat-trace-item label="Run query" state="running"></ix-chat-trace-item>
      </ix-chat-activity-trace>
    `);
    await expect(page.getByRole('button')).toHaveCount(0);

    await page.locator('ix-chat-trace-item').evaluate((item) => {
      const section = document.createElement('ix-chat-trace-item-section');
      section.heading = 'Input';
      section.textContent = 'SELECT * FROM alarms';
      item.appendChild(section);
    });

    await expect(
      page.getByRole('button', { name: 'Run query, running' })
    ).toHaveAttribute('aria-expanded', 'false');
  }
);

regressionTest('marks running Trace items busy', async ({ mount, page }) => {
  await mount(`
    <ix-chat-activity-trace>
      <ix-chat-trace-item label="Thinking…" state="running"></ix-chat-trace-item>
    </ix-chat-activity-trace>
  `);

  const item = page.getByRole('listitem');
  await expect(item).toHaveAttribute('aria-busy', 'true');
  await expect(item.locator('ix-spinner')).toBeVisible();

  await page
    .locator('ix-chat-trace-item')
    .evaluate((element: HTMLIxChatTraceItemElement) => {
      element.state = 'completed';
    });

  await expect(item).not.toHaveAttribute('aria-busy', 'true');
  await expect(item.locator('ix-spinner')).toHaveCount(0);
});

regressionTest(
  'toggles the detail with the keyboard and emits expandedChange',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-activity-trace>
        <ix-chat-trace-item label="Read page.tsx" state="completed">
          <ix-chat-trace-item-section heading="Output"><p>42 lines</p></ix-chat-trace-item-section>
        </ix-chat-trace-item>
      </ix-chat-activity-trace>
    `);
    const events = await trackExpandedChange(
      page.locator('ix-chat-trace-item')
    );
    const toggle = page.getByRole('button', {
      name: 'Read page.tsx, completed',
    });
    const detail = page.getByText('42 lines');

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(detail).toBeHidden();

    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(detail).toBeVisible();

    await page.keyboard.press('Space');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(detail).toBeHidden();

    expect(await events.evaluate((value) => value)).toEqual([true, false]);
  }
);

regressionTest(
  'keeps the detail collapsed when expandedChange is prevented',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-activity-trace>
        <ix-chat-trace-item label="Read page.tsx" state="completed"><p>Detail</p></ix-chat-trace-item>
      </ix-chat-activity-trace>
    `);
    await page
      .locator('ix-chat-trace-item')
      .evaluate((element) =>
        element.addEventListener('expandedChange', (event) =>
          event.preventDefault()
        )
      );

    const toggle = page.getByRole('button', { name: 'Read page.tsx' });
    await toggle.click();

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(page.getByText('Detail')).toBeHidden();
  }
);

regressionTest(
  'shows the detail when expanded is set',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-activity-trace>
        <ix-chat-trace-item label="Read page.tsx" state="completed" expanded><p>Detail</p></ix-chat-trace-item>
      </ix-chat-activity-trace>
    `);

    await expect(
      page.getByRole('button', { name: 'Read page.tsx' })
    ).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByText('Detail')).toBeVisible();
  }
);

regressionTest(
  'shows the chevron on hover and keyboard focus only',
  async ({ mount, page }) => {
    await mount(`
      <ix-chat-activity-trace>
        <ix-chat-trace-item label="Read page.tsx" state="completed"><p>Detail</p></ix-chat-trace-item>
      </ix-chat-activity-trace>
    `);
    const toggle = page.getByRole('button', { name: 'Read page.tsx' });
    const chevron = page.locator('ix-chat-trace-item').locator('.chevron');

    await expect(chevron).toHaveCSS('opacity', '0');

    await toggle.hover();
    await expect(chevron).toHaveCSS('opacity', '1');

    await page.mouse.move(0, 400);
    await expect(chevron).toHaveCSS('opacity', '0');

    await page.keyboard.press('Tab');
    await expect(toggle).toBeFocused();
    await expect(chevron).toHaveCSS('opacity', '1');
  }
);
