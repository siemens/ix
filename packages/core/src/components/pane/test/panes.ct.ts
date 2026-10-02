/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Page } from '@playwright/test';
import { iconStar } from '@siemens/ix-icons/icons';
import { regressionTest, viewPorts } from '@utils/test';

async function expectPaneIsMobile(page: Page, isMobile: boolean) {
  const pane = page.locator('ix-pane').first();
  await expect
    .poll(async () =>
      pane.evaluate((el: HTMLIxPaneElement) => ({
        isMobile: el.isMobile,
        mobilePane: !!el.shadowRoot?.querySelector('.mobile-pane'),
      }))
    )
    .toEqual({ isMobile, mobilePane: isMobile });
}

async function remountRightPane(page: Page) {
  await page.evaluate(() => {
    const layout = document.querySelector('ix-pane-layout');
    const previous = layout?.querySelector('ix-pane[slot="right"]');
    previous?.remove();

    const next = document.createElement('ix-pane');
    next.setAttribute('slot', 'right');
    next.setAttribute('heading', 'Change log');
    next.setAttribute('size', '320px');
    (next as HTMLIxPaneElement).expanded = true;
    next.innerHTML = '<p>Remounted pane</p>';
    layout?.appendChild(next);
  });

  await expect(page.locator('ix-pane').first()).toHaveClass(/hydrated/);
}

const paneLayoutMarkup = `
  <ix-pane-layout variant="inline" layout="full-vertical">
    <ix-pane slot="right" heading="Change log" size="320px" expanded>
      <p>Change log content</p>
    </ix-pane>
    <div slot="content">Main content</div>
  </ix-pane-layout>
`;

regressionTest('renders', async ({ mount, page }) => {
  await mount(`<ix-pane></ix-pane>`);
  const pane = page.locator('ix-pane');
  await expect(pane).toHaveClass(/hydrated/);
});

regressionTest('expanded', async ({ mount, page }) => {
  await mount(
    `
    <ix-pane
      heading="LEFT"
      composition="left"
      icon="star"
      expanded="true"
    >
      <h1>Test Heading</h1>
    </ix-pane>
  `,
    {
      icons: { iconStar },
    }
  );

  const title = page.locator('h1');
  await expect(title).toBeVisible();
});

regressionTest(
  'no-padding removes content padding except top',
  async ({ mount, page }) => {
    await mount(`
    <ix-pane
      heading="LEFT"
      composition="left"
      expanded="true"
      no-padding="true"
    >
      <h1>Test Heading</h1>
    </ix-pane>
  `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    const content = pane.locator('.side-pane-content');
    await expect(content).toHaveClass(/no-padding/);

    const padding = await content.evaluate((el) => {
      const style = getComputedStyle(el);
      return {
        left: style.paddingLeft,
        right: style.paddingRight,
        bottom: style.paddingBottom,
        top: style.paddingTop,
      };
    });

    expect(padding.left).toBe('0px');
    expect(padding.right).toBe('0px');
    expect(padding.bottom).toBe('0px');
    expect(padding.top).not.toBe('0px');
  }
);

regressionTest('prevent pane expansion', async ({ mount, page }) => {
  await mount(
    `
    <ix-pane
      heading="LEFT"
      composition="left"
      variant="inline"
      icon="star"
      expanded="false"
    >
      <h1>Test Heading</h1>
    </ix-pane>
  `,
    {
      icons: { iconStar },
    }
  );

  const pane = page.locator('ix-pane');

  await page.evaluate(() => {
    const paneElement = document.querySelector('ix-pane');
    paneElement?.addEventListener('expandedChanged', (event: Event) => {
      event.preventDefault();
    });
  });

  const iconButton = page.locator('ix-icon-button');
  await iconButton.click();

  const isExpanded = await pane.evaluate(
    (el: HTMLIxPaneElement) => el.expanded
  );
  expect(isExpanded).toBe(false);
});

regressionTest('close on click outside', async ({ page, mount }) => {
  await mount(`
    <ix-pane
      expanded="true"
      close-on-click-outside="true"
    >
      <button aria-label="test content">Test</button>
    </ix-pane>
    <button>Element outside</button>`);

  const pane = page.locator('ix-pane');
  await expect(pane).toHaveClass(/hydrated/);

  const exampleContent = page.getByLabel('test content');
  await expect(exampleContent).toBeVisible();

  await page.getByText('Element outside').click();
  await expect(exampleContent).not.toBeVisible();
});

regressionTest(
  'should not has listener when not expanded',
  async ({ page, mount }) => {
    await mount('');

    const removeEventListenerCalled = page.evaluate(() => {
      return new Promise<string>((resolve) => {
        window.removeEventListener = (eventName: string) => {
          resolve(eventName);
        };
      });
    });

    await mount(`
    <ix-pane
      expanded="true"
      close-on-click-outside="true"
      aria-label-collapse-close-button="myclose"
    >
      <button aria-label="test content">Test</button>
    </ix-pane>
    <button>Element outside</button>
    `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    await pane.getByLabel('myclose').click();

    const exampleContent = page.getByLabel('test content');
    await expect(exampleContent).not.toBeVisible();

    // Wait for the removeEventListener to be called.
    // Not the perfect expect condition could potentially lead to false positives
    // with additional listeners
    await expect(removeEventListenerCalled).resolves.toBe('click');
  }
);

regressionTest(
  'icon direction reacts correctly to slot and expanded state for all compositions',
  async ({ mount, page }) => {
    const paneSlots = [
      { slot: 'left', expanded: false, expected: 'double-chevron-right' },
      { slot: 'left', expanded: true, expected: 'double-chevron-left' },
      { slot: 'right', expanded: false, expected: 'double-chevron-left' },
      { slot: 'right', expanded: true, expected: 'double-chevron-right' },
      { slot: 'top', expanded: false, expected: 'double-chevron-down' },
      { slot: 'top', expanded: true, expected: 'double-chevron-up' },
      { slot: 'bottom', expanded: false, expected: 'double-chevron-up' },
      { slot: 'bottom', expanded: true, expected: 'double-chevron-down' },
    ];

    for (const paneSlot of paneSlots) {
      await mount(`
        <ix-pane
          heading="TEST"
          slot="${paneSlot.slot}"
          expanded="${paneSlot.expanded}"
        ></ix-pane>
      `);

      const pane = page.locator('ix-pane');
      await expect(pane).toHaveClass(/hydrated/);

      const iconButton = pane.locator('ix-icon-button');
      await expect(iconButton).toBeVisible();

      const iconValue = await iconButton.evaluate(
        (el: HTMLIxIconButtonElement) => el.icon
      );

      expect(iconValue).toContain(paneSlot.expected);
    }
  }
);

regressionTest(
  'dispatchExpandedChangedEvent toggles and emits correct value',
  async ({ mount, page }) => {
    await mount(`
    <ix-pane
      heading="TEST"
      composition="left"
      expanded="false"
    ></ix-pane>
  `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    const emittedValue = await page.evaluate(() => {
      return new Promise<boolean>((resolve) => {
        const pane = document.querySelector('ix-pane')!;

        pane.addEventListener(
          'expandedChanged',
          (event: CustomEvent<{ slot: string; expanded: boolean }>) => {
            resolve(event.detail.expanded);
          }
        );

        const button = pane.shadowRoot!.querySelector(
          'ix-icon-button'
        ) as HTMLElement;

        button.click();
      });
    });

    expect(emittedValue).toBe(true);

    const finalState = await pane.evaluate(
      (el: HTMLIxPaneElement) => el.expanded
    );

    expect(finalState).toBe(true);
  }
);

regressionTest(
  'pane closes with single click when expanded',
  async ({ mount, page }) => {
    await mount(`
    <ix-pane
      heading="TEST"
      composition="left"
      expanded="true"
    ></ix-pane>
  `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    const iconButton = pane.locator('ix-icon-button');

    await iconButton.click();

    const isExpanded = await pane.evaluate(
      (el: HTMLIxPaneElement) => el.expanded
    );

    expect(isExpanded).toBe(false);
  }
);

regressionTest(
  'floating panes close in LIFO order on Escape key press',
  async ({ mount, page }) => {
    await mount(`
      <ix-pane
        id="pane1"
        heading="Pane 1"
        variant="floating"
        hide-on-collapse
        expanded="true"
      >
        <button>Content 1</button>
      </ix-pane>
      <ix-pane
        id="pane2"
        heading="Pane 2"
        variant="floating"
        hide-on-collapse
      >
        <button autofocus>Content 2</button>
      </ix-pane>
    `);

    const pane1 = page.locator('#pane1');
    const pane2 = page.locator('#pane2');
    await expect(pane1).toHaveClass(/hydrated/);
    await expect(pane2).toHaveClass(/hydrated/);

    await pane2.evaluate((el: HTMLIxPaneElement) => {
      el.expanded = true;
    });

    await expect(
      page.locator('button', { hasText: 'Content 2' })
    ).toBeFocused();

    await page.keyboard.press('Escape');

    const pane2Expanded = await pane2.evaluate(
      (el: HTMLIxPaneElement) => el.expanded
    );
    const pane1Expanded = await pane1.evaluate(
      (el: HTMLIxPaneElement) => el.expanded
    );

    expect(pane2Expanded).toBe(false);
    expect(pane1Expanded).toBe(true);
  }
);

regressionTest(
  'floating pane focuses element with autofocus attribute when opened',
  async ({ mount, page }) => {
    await mount(`
      <ix-pane
        heading="Test"
        variant="floating"
        hide-on-collapse
        expanded="false"
      >
        <button autofocus aria-label="auto-focused-btn">Click me</button>
      </ix-pane>
    `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    await pane.evaluate((el: HTMLIxPaneElement) => {
      el.expanded = true;
    });

    await expect(page.locator('[aria-label="auto-focused-btn"]')).toBeFocused();
  }
);

regressionTest(
  'floating pane focuses close button when no autofocus element',
  async ({ mount, page }) => {
    await mount(`
      <ix-pane
        heading="Test"
        variant="floating"
        hide-on-collapse
        expanded="false"
      >
        <p>No autofocus here</p>
      </ix-pane>
    `);

    const pane = page.locator('ix-pane');
    await expect(pane).toHaveClass(/hydrated/);

    await pane.evaluate((el: HTMLIxPaneElement) => {
      el.expanded = true;
    });

    await expect(
      pane.locator('ix-icon-button[aria-label="Close pane"]')
    ).toBeFocused();
  }
);

regressionTest.describe('pane under forced application layout', () => {
  const forcedDesktopApp = `
    <ix-application force-breakpoint="lg">
      ${paneLayoutMarkup}
    </ix-application>
  `;

  regressionTest(
    'keeps desktop pane when window shrinks under force-breakpoint lg',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(forcedDesktopApp);

      await expect(page.locator('ix-pane')).toHaveClass(/hydrated/);
      await expectPaneIsMobile(page, false);

      await page.setViewportSize(viewPorts.sm);
      await expectPaneIsMobile(page, false);
    }
  );

  regressionTest(
    'new pane stays desktop after remount while narrow under force-breakpoint lg',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(forcedDesktopApp);
      await expectPaneIsMobile(page, false);

      await page.setViewportSize(viewPorts.sm);
      await remountRightPane(page);
      await expectPaneIsMobile(page, false);

      await page.setViewportSize(viewPorts.lg);
      await expectPaneIsMobile(page, false);
    }
  );

  regressionTest(
    'pane is desktop when mounted on a narrow viewport under force-breakpoint lg',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.sm);
      await mount(forcedDesktopApp);

      await expect(page.locator('ix-pane')).toHaveClass(/hydrated/);
      await expectPaneIsMobile(page, false);
    }
  );

  regressionTest(
    'pane is mobile when mounted on a wide viewport under force-breakpoint sm',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(`
        <ix-application force-breakpoint="sm">
          ${paneLayoutMarkup}
        </ix-application>
      `);

      await expect(page.locator('ix-pane')).toHaveClass(/hydrated/);
      await expectPaneIsMobile(page, true);
    }
  );

  regressionTest(
    'clearing force-breakpoint returns pane to viewport-driven mode',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(forcedDesktopApp);
      await expectPaneIsMobile(page, false);

      await page
        .locator('ix-application')
        .evaluate((el: HTMLIxApplicationElement) => {
          el.removeAttribute('force-breakpoint');
        });

      await page.setViewportSize(viewPorts.sm);
      await expectPaneIsMobile(page, true);

      await page.setViewportSize(viewPorts.lg);
      await expectPaneIsMobile(page, false);
    }
  );

  regressionTest(
    'reconnected pane still follows force-breakpoint updates',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(forcedDesktopApp);
      await expectPaneIsMobile(page, false);

      await page.evaluate(() => {
        const layout = document.querySelector('ix-pane-layout');
        const pane = layout?.querySelector('ix-pane[slot="right"]');
        if (!layout || !pane) {
          throw new Error('Expected pane layout and right pane');
        }
        pane.remove();
        layout.appendChild(pane);
      });

      const pane = page.locator('ix-pane').first();
      const application = page.locator('ix-application');
      await expect(pane).toHaveClass(/hydrated/);
      await expectPaneIsMobile(page, false);

      await application.evaluate((el: HTMLIxApplicationElement) => {
        el.forceBreakpoint = 'sm';
      });
      await expect(application).toHaveClass(/breakpoint-sm/);
      await expectPaneIsMobile(page, true);
    }
  );

  regressionTest(
    'moving pane layout outside forced application restores viewport mode',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(`
        <div id="host">
          ${forcedDesktopApp}
        </div>
      `);
      await expectPaneIsMobile(page, false);

      await page.setViewportSize(viewPorts.sm);
      await expectPaneIsMobile(page, false);

      await page.evaluate(() => {
        const host = document.getElementById('host');
        const layout = document.querySelector('ix-pane-layout');
        if (!host || !layout) {
          throw new Error('Expected host and pane layout');
        }
        layout.remove();
        host.appendChild(layout);
      });

      await expect(page.locator('ix-pane').first()).toHaveClass(/hydrated/);
      // Stale forced context must not keep the pane in desktop mode.
      await expectPaneIsMobile(page, true);

      // Application may still force the shared layout bus; the detached pane
      // must keep listening to the viewport itself.
      await page.setViewportSize(viewPorts.lg);
      await expectPaneIsMobile(page, false);

      await page.setViewportSize(viewPorts.sm);
      await expectPaneIsMobile(page, true);
    }
  );
});

regressionTest.describe('standalone pane follows viewport', () => {
  regressionTest(
    'enters and leaves mobile across remount while narrow',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(paneLayoutMarkup);
      await expectPaneIsMobile(page, false);

      await page.setViewportSize(viewPorts.sm);
      await expectPaneIsMobile(page, true);

      await remountRightPane(page);
      await expectPaneIsMobile(page, true);

      await page.setViewportSize(viewPorts.lg);
      await expectPaneIsMobile(page, false);
    }
  );
});

regressionTest.describe('pane under application without forced layout', () => {
  regressionTest(
    'follows viewport across remount while narrow',
    async ({ mount, page }) => {
      await page.setViewportSize(viewPorts.lg);
      await mount(`
        <ix-application>
          ${paneLayoutMarkup}
        </ix-application>
      `);
      await expectPaneIsMobile(page, false);

      await page.setViewportSize(viewPorts.sm);
      await expectPaneIsMobile(page, true);

      await remountRightPane(page);
      await expectPaneIsMobile(page, true);

      await page.setViewportSize(viewPorts.lg);
      await expectPaneIsMobile(page, false);
    }
  );
});
