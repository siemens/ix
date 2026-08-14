/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator } from '@playwright/test';
import {
  iconCircleFilled,
  iconInfo,
  iconInfoFilled,
  iconStar,
} from '@siemens/ix-icons/icons';
import { regressionTest } from '@utils/test';
import { BadgePage } from './badge.page';

const html = String.raw;

async function expectVisibleTooltipText(tooltip: Locator, text: string) {
  await expect(tooltip).toHaveClass(/visible/);

  const metrics = await tooltip.evaluate((el) => {
    const slot = el.shadowRoot?.querySelector(
      'slot:not([name])'
    ) as HTMLSlotElement | null;
    const assigned = slot?.assignedNodes({ flatten: true }) ?? [];
    const slottedText = assigned.map((node) => node.textContent ?? '').join('');
    let width = 0;
    let height = 0;

    if (assigned[0]) {
      const range = document.createRange();
      range.selectNodeContents(assigned[0]);
      const rect = range.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
    }

    return {
      slottedText,
      width,
      height,
      fontSize: getComputedStyle(el).fontSize,
    };
  });

  expect(metrics.slottedText).toBe(text);
  expect(metrics.fontSize).toBe('14px');
  // Guard against host font-size:0 collapsing tooltip glyphs (empty bubble).
  expect(metrics.width).toBeGreaterThan(8);
  expect(metrics.height).toBeGreaterThan(8);
}

regressionTest.describe('ix-badge', () => {
  regressionTest.describe('rendering', () => {
    regressionTest('hydrates standalone badge', async ({ mount, page }) => {
      await mount(`<ix-badge label="12" variant="info"></ix-badge>`);
      const badge = new BadgePage(page);

      await badge.expectHydrated();
      await badge.expectStandalone();
      await expect(badge.host).toHaveAttribute('variant', 'info');
      await badge.expectVisibleLabel('12');
    });

    regressionTest(
      'hydrates attached badge with anchor class',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge label="3" variant="alarm">
            <ix-button>Review changes</ix-button>
          </ix-badge>
        `);

        const badge = new BadgePage(page);
        await badge.expectHydrated();
        await badge.expectAttached();
      }
    );

    regressionTest('formats overflow label as 99+', async ({ mount, page }) => {
      await mount(`<ix-badge label="142" variant="primary"></ix-badge>`);
      const badge = new BadgePage(page);
      await badge.expectVisibleLabel('99+');
    });

    regressionTest(
      'accepts preformatted overflow label 99+',
      async ({ mount, page }) => {
        await mount(`<ix-badge label="99+" variant="primary"></ix-badge>`);
        const badge = new BadgePage(page);
        await badge.expectVisibleLabel('99+');
      }
    );

    regressionTest(
      'renders no indicator when counter label is missing',
      async ({ mount, page }) => {
        await mount(`<ix-badge variant="primary"></ix-badge>`);
        const badge = new BadgePage(page);

        await badge.expectHydrated();
        await badge.expectNoIndicator();
      }
    );

    regressionTest(
      'renders no indicator for non-numeric counter label',
      async ({ mount, page }) => {
        await mount(`<ix-badge label="new" variant="primary"></ix-badge>`);
        const badge = new BadgePage(page);

        await badge.expectHydrated();
        await badge.expectNoIndicator();
      }
    );

    regressionTest(
      'renders standalone dot indicator without label text',
      async ({ mount, page }) => {
        await mount(`<ix-badge type="dot" variant="primary"></ix-badge>`);
        const badge = new BadgePage(page);

        await badge.expectHydrated();
        await badge.expectIndicatorVisible();
        await expect(badge.label).toHaveCount(0);
      }
    );

    regressionTest(
      'status-icon falls back to info for unsupported variants',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="status-icon" variant="primary" aria-label="Status"></ix-badge>`,
          { icons: { iconInfoFilled, iconCircleFilled } }
        );
        const badge = new BadgePage(page);
        await badge.expectHostClass(/\binfo\b/);
        await badge.expectIndicatorVisible();
        await expect(badge.statusIconGlyph).toBeVisible();
        await expect(badge.statusIconPlate).toBeVisible();
      }
    );

    regressionTest(
      'status-icon outline uses a different glyph than filled',
      async ({ mount, page }) => {
        await mount(
          html`
            <ix-badge
              type="status-icon"
              variant="info"
              role="img"
              aria-label="Info filled"
            ></ix-badge>
            <ix-badge
              type="status-icon"
              variant="info"
              outline
              role="img"
              aria-label="Info outline"
            ></ix-badge>
          `,
          { icons: { iconInfo, iconInfoFilled, iconCircleFilled } }
        );

        const badge = new BadgePage(page);
        const filled = badge.getByRole('img', 'Info filled');
        const outline = badge.getByRole('img', 'Info outline');

        await expect(filled).toHaveClass(/\binfo\b/);
        await expect(outline).toHaveClass(/\boutline\b/);
        await expect(
          badge.indicatorOf(filled).locator('ix-icon.status-icon-glyph')
        ).toBeVisible();
        await expect(
          badge.indicatorOf(filled).locator('ix-icon.status-icon-plate')
        ).toBeVisible();
        await expect(
          badge.indicatorOf(outline).locator('ix-icon.status-icon')
        ).toBeVisible();
        await expect(
          badge.indicatorOf(outline).locator('ix-icon.status-icon-plate')
        ).toHaveCount(0);

        const filledName = await badge
          .indicatorOf(filled)
          .locator('ix-icon.status-icon-glyph')
          .evaluate((el: HTMLIxIconElement) => el.name);
        const outlineName = await badge
          .indicatorOf(outline)
          .locator('ix-icon.status-icon')
          .evaluate((el: HTMLIxIconElement) => el.name);

        expect(filledName).toBeTruthy();
        expect(outlineName).toBeTruthy();
        expect(outlineName).not.toBe(filledName);
      }
    );
  });

  regressionTest.describe('variants', () => {
    regressionTest(
      'applies filled variant class on host',
      async ({ mount, page }) => {
        await mount(`<ix-badge label="1" variant="alarm"></ix-badge>`);
        const badge = new BadgePage(page);
        await badge.expectHostClass(/\balarm\b/);
      }
    );

    regressionTest(
      'uses the critical contrast color for filled critical badges',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge
            label="1"
            variant="critical"
            style="
              --si-sys-text-on-critical: rgb(1, 2, 3);
              --si-sys-text-on-warning: rgb(4, 5, 6);
            "
          ></ix-badge>
        `);
        const badge = new BadgePage(page);

        await expect(badge.indicator).toHaveCSS('color', 'rgb(1, 2, 3)');
      }
    );

    regressionTest('applies outline class on host', async ({ mount, page }) => {
      await mount(`<ix-badge label="1" variant="primary" outline></ix-badge>`);
      const badge = new BadgePage(page);
      await badge.expectHostClass(/\boutline\b/);
    });

    regressionTest(
      'uses the default label color for outline variants',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge
            label="1"
            variant="primary"
            outline
            style="
              --ix-badge-default-color: rgb(1, 2, 3);
              --ix-badge-primary-color: rgb(4, 5, 6);
            "
          ></ix-badge>
        `);
        const badge = new BadgePage(page);

        await expect(badge.indicator).toHaveCSS('color', 'rgb(1, 2, 3)');
      }
    );

    regressionTest('applies border class on host', async ({ mount, page }) => {
      await mount(`<ix-badge label="1" variant="primary" border></ix-badge>`);
      const badge = new BadgePage(page);
      await badge.expectHostClass(/\bborder\b/);
    });

    regressionTest(
      'does not apply border class for status-icon',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="status-icon" variant="info" border aria-label="Status"></ix-badge>`,
          { icons: { iconInfoFilled, iconCircleFilled } }
        );
        const badge = new BadgePage(page);
        await badge.expectNoHostClass(/\bborder\b/);
      }
    );

    regressionTest(
      'falls back to primary for unknown variant',
      async ({ mount, page }) => {
        await mount(`<ix-badge label="1" variant="not-a-variant"></ix-badge>`);
        const badge = new BadgePage(page);
        await badge.expectHostClass(/\bprimary\b/);
      }
    );

    regressionTest(
      'sets custom variant CSS variables on host',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge
            label="1"
            variant="custom"
            background="red"
            badge-color="white"
          ></ix-badge>`
        );

        const badge = new BadgePage(page);
        await badge.expectCustomVariantColors('red', 'white');
      }
    );
  });

  regressionTest.describe('position and animation', () => {
    regressionTest(
      'defaults to top-after position class',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge label="1">
            <ix-button>Action</ix-button>
          </ix-badge>
        `);
        const badge = new BadgePage(page);
        await badge.expectHostClass(/\btop-after\b/);
      }
    );

    regressionTest(
      'applies bottom-after position class',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge label="1" position="bottom-after">
            <ix-button>Action</ix-button>
          </ix-badge>
        `);
        const badge = new BadgePage(page);
        await badge.expectHostClass(/\bbottom-after\b/);
      }
    );

    regressionTest(
      'ignores position class when standalone',
      async ({ mount, page }) => {
        await mount(`<ix-badge label="1" position="bottom-after"></ix-badge>`);
        const badge = new BadgePage(page);

        await badge.expectStandalone();
        await badge.expectNoHostClass(/\btop-after\b/);
        await badge.expectNoHostClass(/\bbottom-after\b/);
      }
    );

    regressionTest(
      'applies offset values as CSS custom properties',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge label="1" offset-x="4" offset-y="-2"><button type="button">Action</button></ix-badge>`
        );
        const badge = new BadgePage(page);
        await badge.expectOffsets('-0.375rem', '-0.75rem');
      }
    );

    regressionTest(
      'applies dot anatomy default offsets when attached',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge type="dot" variant="primary">
            <button type="button">Action</button>
          </ix-badge>
        `);
        const badge = new BadgePage(page);
        await badge.expectAttached();
        await badge.expectOffsets('-0.375rem', '-0.375rem');
      }
    );

    regressionTest(
      'applies enable-animation class on host',
      async ({ mount, page }) => {
        await mount(`<ix-badge label="1" enable-animation></ix-badge>`);
        const badge = new BadgePage(page);
        await badge.expectHostClass(/\benable-animation\b/);
      }
    );
  });

  regressionTest.describe('attached accessibility', () => {
    regressionTest(
      'discards host ARIA when attached (anchor owns naming)',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge
            label="3"
            variant="alarm"
            role="status"
            aria-label="Should not stay on host"
          >
            <button>Messages</button>
          </ix-badge>
        `);

        const badge = new BadgePage(page);
        await badge.expectAttached();
        await expect(badge.host).not.toHaveAttribute('role');
        await expect(badge.host).not.toHaveAttribute('aria-label');
        await badge.expectAttachedTextLabelA11y('Messages', '3');
      }
    );

    regressionTest(
      'sets aria-describedby for text label on anchor',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge label="3" variant="alarm">
            <ix-button>Review changes</ix-button>
          </ix-badge>
        `);

        const badge = new BadgePage(page);
        await badge.expectAttachedTextLabelA11y('Review changes', '3');
      }
    );

    regressionTest(
      'does not set aria-describedby for dot badge on anchor',
      async ({ mount, page }) => {
        await mount(
          html`
            <ix-badge type="dot" variant="primary">
              <ix-icon-button
                icon="info"
                aria-label="Notifications"
              ></ix-icon-button>
            </ix-badge>
          `,
          { icons: { iconInfo } }
        );

        const badge = new BadgePage(page);
        await badge.expectDotAttachedNoDescribedBy('Notifications');
      }
    );

    regressionTest(
      'merges aria-describedby with existing anchor ids',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge label="5" variant="warning">
            <button aria-describedby="existing-id">Inbox</button>
          </ix-badge>
          <span id="existing-id">Existing description</span>
        `);

        const badge = new BadgePage(page);
        await badge.expectMergedDescribedBy('Inbox', 'existing-id', '5');
      }
    );

    regressionTest(
      'updates accessible description when label changes',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge label="3" variant="alarm">
            <button>Messages</button>
          </ix-badge>
        `);

        const badge = new BadgePage(page);
        await badge.expectAttachedTextLabelA11y('Messages', '3');

        await badge.setLabel('8');

        await badge.expectAttachedTextLabelA11y('Messages', '8');
      }
    );

    regressionTest(
      'removes accessible description from anchor on disconnect',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge label="3">
            <button>Messages</button>
          </ix-badge>
        `);

        const badge = new BadgePage(page);
        const button = badge.getButton('Messages');
        await badge.expectAttachedTextLabelA11y('Messages', '3');

        await badge.disconnectKeepingAnchor('Messages');

        await expect(button).not.toHaveAttribute('aria-describedby');
      }
    );

    regressionTest(
      'restores accessible description after reconnect',
      async ({ mount, page }) => {
        await mount(html`
          <div id="mount">
            <ix-badge label="3">
              <button>Messages</button>
            </ix-badge>
          </div>
        `);

        const badge = new BadgePage(page);
        await badge.expectAttachedTextLabelA11y('Messages', '3');

        await page.evaluate(() => {
          const host = document.querySelector('ix-badge');
          const mountPoint = document.getElementById('mount');
          if (host && mountPoint) {
            host.remove();
            mountPoint.appendChild(host);
          }
        });

        await badge.expectAttachedTextLabelA11y('Messages', '3');
      }
    );
  });

  regressionTest.describe('label type', () => {
    regressionTest('renders standalone label text', async ({ mount, page }) => {
      await mount(
        `<ix-badge type="label" label="NEW" variant="primary"></ix-badge>`
      );
      const badge = new BadgePage(page);

      await expect(badge.host).toHaveAttribute('type', 'label');
      await badge.expectVisibleLabel('NEW');
    });

    regressionTest(
      'allows selecting standalone label text',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="label" label="Selectable text" variant="info"></ix-badge>`
        );
        const badge = new BadgePage(page);
        await badge.expectHydrated();

        await expect(badge.indicator).toHaveCSS('user-select', 'text');
      }
    );

    regressionTest(
      'keeps attached label text non-selectable',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge type="label" label="Status">
            <button>Row</button>
          </ix-badge>
        `);
        const badge = new BadgePage(page);
        await badge.expectAttached();

        await expect(badge.indicator).toHaveCSS('user-select', 'none');
      }
    );

    regressionTest(
      'renders no indicator for empty label text',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="label" label="   " variant="primary"></ix-badge>`
        );
        const badge = new BadgePage(page);

        await badge.expectHydrated();
        await badge.expectNoIndicator();
      }
    );

    regressionTest(
      'renders label with icon and align-left class',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="label" label="NEW" icon="star" align-left variant="warning"></ix-badge>`,
          { icons: { iconStar } }
        );
        const badge = new BadgePage(page);

        await badge.expectHostClass(/\balign-left\b/);
        await badge.expectHostClass(/\bwith-icon\b/);
        await badge.expectLeadingIconDecorative();
      }
    );

    regressionTest(
      'names leading icon when aria-label-icon is set',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge
            type="label"
            label="NEW"
            icon="star"
            aria-label-icon="Featured"
            variant="primary"
          ></ix-badge>`,
          { icons: { iconStar } }
        );
        const badge = new BadgePage(page);

        await badge.expectLeadingIconNamed('Featured');
        await badge.expectVisibleLabel('NEW');
      }
    );

    regressionTest(
      'sets aria-describedby for attached label on anchor',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge type="label" label="NEW" variant="primary">
            <ix-button>What's new</ix-button>
          </ix-badge>
        `);

        const badge = new BadgePage(page);
        await badge.expectAttachedTextLabelA11y("What's new", 'NEW');
      }
    );
  });

  regressionTest.describe('standalone accessibility', () => {
    regressionTest(
      'standalone dot host matches 12×12 indicator size',
      async ({ mount, page }) => {
        await mount(`<ix-badge type="dot" variant="primary"></ix-badge>`);
        const badge = new BadgePage(page);
        await badge.expectHydrated();
        await badge.expectStandalone();

        await expect(async () => {
          const hostBox = await badge.host.boundingBox();
          const indicatorBox = await badge.indicator.boundingBox();

          expect(hostBox?.width).toBeCloseTo(12, 0);
          expect(hostBox?.height).toBeCloseTo(12, 0);
          expect(indicatorBox?.width).toBeCloseTo(12, 0);
          expect(indicatorBox?.height).toBeCloseTo(12, 0);
        }).toPass();
      }
    );

    regressionTest(
      'standalone label host matches indicator size',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="label" label="What's new" icon="star" align-left variant="primary"></ix-badge>`,
          { icons: { iconStar } }
        );
        const badge = new BadgePage(page);
        await badge.expectHydrated();
        await badge.expectStandalone();
        await expect(badge.indicator.locator('ix-icon')).toBeVisible();

        await expect(async () => {
          const hostBox = await badge.host.boundingBox();
          const indicatorBox = await badge.indicator.boundingBox();

          expect(hostBox?.height).toBeCloseTo(20, 0);
          expect(indicatorBox?.height).toBeCloseTo(20, 0);
          expect(hostBox?.width).toBeCloseTo(indicatorBox?.width ?? 0, 0);
        }).toPass();
      }
    );

    regressionTest(
      'keeps standalone chrome static without default live region',
      async ({ mount, page }) => {
        await mount(`<ix-badge label="12"></ix-badge>`);
        const badge = new BadgePage(page);
        await badge.expectStandaloneStaticChrome({
          visibleLabel: '12',
          hostRole: null,
        });
      }
    );

    regressionTest(
      'keeps author role and aria-label on the host for standalone',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="label" label="!" role="alert" aria-label="Urgent update"></ix-badge>`
        );
        const badge = new BadgePage(page);
        await badge.expectStandaloneHostAria({
          role: 'alert',
          ariaLabel: 'Urgent update',
        });
        await expect(badge.getByRole('alert', 'Urgent update')).toBeVisible();
      }
    );

    regressionTest(
      'keeps opt-in status live region attributes on the host',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge label="3" role="status" aria-live="polite" aria-label="Cart count"></ix-badge>`
        );
        const badge = new BadgePage(page);
        await badge.expectStandaloneHostAria({
          role: 'status',
          ariaLabel: 'Cart count',
          ariaLive: 'polite',
        });
      }
    );
  });

  regressionTest.describe('tooltip', () => {
    regressionTest(
      'does not render tooltip when tooltip-text is absent',
      async ({ mount, page }) => {
        await mount(`<ix-badge type="label" label="Label"></ix-badge>`);
        const badge = new BadgePage(page);
        await badge.expectHydrated();
        await badge.host.hover();

        await expect(badge.host).not.toHaveAttribute('tooltip-text');
        await expect(badge.tooltip()).not.toBeAttached();
      }
    );

    regressionTest(
      'shows label text when tooltip-text attribute is present',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="label" label="Label" tooltip-text></ix-badge>`
        );
        const badge = new BadgePage(page);
        await badge.expectHydrated();
        await badge.indicator.hover();

        await expectVisibleTooltipText(badge.tooltip(), 'Label');
      }
    );

    regressionTest(
      'shows custom tooltip text for standalone counter',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="counter" label="12" tooltip-text="Twelve items"></ix-badge>`
        );
        const badge = new BadgePage(page);
        await badge.expectHydrated();
        await badge.indicator.hover();

        await expectVisibleTooltipText(badge.tooltip(), 'Twelve items');
      }
    );

    regressionTest(
      'uses aria-label as tooltip text for standalone dot',
      async ({ mount, page }) => {
        await mount(
          `<ix-badge type="dot" variant="alarm" role="img" aria-label="Unread" tooltip-text></ix-badge>`
        );
        const badge = new BadgePage(page);
        const named = badge.getByRole('img', 'Unread');
        await badge.expectHydrated(named);
        await badge.indicatorOf(named).hover();

        await expectVisibleTooltipText(badge.tooltip(named), 'Unread');
      }
    );

    regressionTest(
      'ignores tooltip-text when badge is attached',
      async ({ mount, page }) => {
        await mount(html`
          <ix-badge type="counter" label="3" tooltip-text="Ignored">
            <ix-button>Review</ix-button>
          </ix-badge>
        `);
        const badge = new BadgePage(page);
        await badge.expectHydrated();
        await badge.expectAttached();
        await badge.indicator.hover();

        await expect(badge.tooltip()).not.toBeAttached();
      }
    );
  });

  regressionTest('accessibility', async ({ mount, makeAxeBuilder, page }) => {
    await mount(html`
      <div style="display:flex;gap:1rem;align-items:center;">
        <ix-badge label="3" variant="alarm">
          <ix-button>Review changes</ix-button>
        </ix-badge>
        <ix-badge label="12" variant="info" outline></ix-badge>
        <ix-badge type="label" label="NEW" variant="success"></ix-badge>
        <ix-badge
          type="dot"
          variant="alarm"
          role="img"
          aria-label="New items"
        ></ix-badge>
        <ix-badge
          type="dot"
          variant="alarm"
          role="img"
          aria-label="Unread"
          tooltip-text
        ></ix-badge>
        <ix-badge
          type="status-icon"
          variant="warning"
          role="img"
          aria-label="Warning"
          tooltip-text
        ></ix-badge>
      </div>
    `);

    // Nested tooltips must expose `role="tooltip"` before axe; otherwise
    // `aria-label` on `ix-tooltip` trips aria-prohibited-attr. Slot text alone is
    // not enough: content is projected into an inert dialog until shown.
    await expect(page.getByRole('tooltip')).toHaveCount(2);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
