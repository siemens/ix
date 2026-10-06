/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from '@stencil/vitest';
import { describe, expect, it, vi } from 'vitest';

globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof ResizeObserver;

const flushTimeout = () => new Promise((resolve) => setTimeout(resolve, 0));

async function mountTooltip() {
  const { root, waitForChanges } = await render(
    <ix-tooltip show-delay={0}></ix-tooltip>
  );
  const tooltip = root as HTMLIxTooltipElement;
  const dialog = tooltip.shadowRoot!.querySelector('dialog')!;
  return { tooltip, dialog, waitForChanges };
}

function createAnchor() {
  const anchor = document.createElement('div');
  document.body.append(anchor);
  return anchor;
}

describe('ix-tooltip popover guards', () => {
  it('does not call showPopover on a dialog removed before the delay', async () => {
    const { tooltip, dialog, waitForChanges } = await mountTooltip();
    const showPopover = vi.fn();
    dialog.showPopover = showPopover;

    await tooltip.showTooltip(createAnchor());
    dialog.remove();
    await flushTimeout();
    await waitForChanges();

    expect(showPopover).not.toHaveBeenCalled();
  });

  it('does not throw when showPopover is not a function', async () => {
    const { tooltip, dialog, waitForChanges } = await mountTooltip();
    dialog.showPopover = undefined as unknown as typeof dialog.showPopover;

    await tooltip.showTooltip(createAnchor());
    await flushTimeout();
    await waitForChanges();
  });

  it('does not call hidePopover when the tooltip was never shown', async () => {
    const { tooltip, dialog, waitForChanges } = await mountTooltip();
    const hidePopover = vi.fn();
    dialog.hidePopover = hidePopover;

    await tooltip.hideTooltip(0);
    await flushTimeout();
    await waitForChanges();

    expect(hidePopover).not.toHaveBeenCalled();
  });

  it('does not throw when hidePopover is not a function', async () => {
    const { tooltip, dialog, waitForChanges } = await mountTooltip();
    dialog.showPopover = vi.fn();

    await tooltip.showTooltip(createAnchor());
    await flushTimeout();
    await waitForChanges();

    dialog.hidePopover = undefined as unknown as typeof dialog.hidePopover;

    await tooltip.hideTooltip(0);
    await flushTimeout();
    await waitForChanges();
  });

  it('does not call hidePopover on a dialog removed after show', async () => {
    const { tooltip, dialog, waitForChanges } = await mountTooltip();
    dialog.showPopover = vi.fn();
    const hidePopover = vi.fn();
    dialog.hidePopover = hidePopover;

    await tooltip.showTooltip(createAnchor());
    await flushTimeout();
    await waitForChanges();

    hidePopover.mockClear();
    dialog.remove();
    await tooltip.hideTooltip(0);
    await flushTimeout();
    await waitForChanges();

    expect(hidePopover).not.toHaveBeenCalled();
  });

  it('does not throw when switching anchors', async () => {
    const { tooltip, dialog, waitForChanges } = await mountTooltip();
    dialog.showPopover = vi.fn();
    dialog.hidePopover = vi.fn();

    await tooltip.showTooltip(createAnchor());
    await flushTimeout();
    await waitForChanges();

    await tooltip.showTooltip(createAnchor());
    await flushTimeout();
    await waitForChanges();
  });
});
