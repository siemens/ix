/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { VNode } from '@stencil/core';
import { render, h } from '@stencil/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';

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

describe('ix-tooltip delays', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  async function renderWithFakeTimers(tooltipElement: VNode) {
    const { root } = await render(tooltipElement);
    const tooltip = root as HTMLIxTooltipElement;
    const dialog = tooltip.shadowRoot!.querySelector('dialog')!;
    const showPopover = vi.fn();
    const hidePopover = vi.fn();
    dialog.showPopover = showPopover;
    dialog.hidePopover = hidePopover;

    vi.useFakeTimers();
    return { tooltip, showPopover, hidePopover };
  }

  async function expectHideDelay(tooltipElement: VNode, expectedDelay: number) {
    const { tooltip, hidePopover } = await renderWithFakeTimers(tooltipElement);

    await tooltip.showTooltip(createAnchor());
    vi.advanceTimersByTime(0);

    await tooltip.hideTooltip();
    vi.advanceTimersByTime(expectedDelay - 1);
    expect(hidePopover).not.toHaveBeenCalled();

    vi.advanceTimersByTime(1);
    expect(hidePopover).toHaveBeenCalledTimes(1);
  }

  it('shows the tooltip without delay by default', async () => {
    const { tooltip, showPopover } = await renderWithFakeTimers(
      <ix-tooltip></ix-tooltip>
    );

    await tooltip.showTooltip(createAnchor());
    expect(showPopover).not.toHaveBeenCalled();

    vi.advanceTimersByTime(0);
    expect(showPopover).toHaveBeenCalledTimes(1);
  });

  it('hides a regular tooltip after 50 ms by default', async () => {
    await expectHideDelay(<ix-tooltip></ix-tooltip>, 50);
  });

  it('hides an interactive tooltip after 150 ms by default', async () => {
    await expectHideDelay(<ix-tooltip interactive></ix-tooltip>, 150);
  });

  it('respects an explicit hideDelay of 50 ms on an interactive tooltip', async () => {
    await expectHideDelay(
      <ix-tooltip interactive hide-delay={50}></ix-tooltip>,
      50
    );
  });

  it('respects an explicit hideDelay of 0 ms on an interactive tooltip', async () => {
    const { tooltip, hidePopover } = await renderWithFakeTimers(
      <ix-tooltip interactive hide-delay={0}></ix-tooltip>
    );

    await tooltip.showTooltip(createAnchor());
    vi.advanceTimersByTime(0);

    await tooltip.hideTooltip();
    expect(hidePopover).not.toHaveBeenCalled();

    vi.advanceTimersByTime(0);
    expect(hidePopover).toHaveBeenCalledTimes(1);
  });

  it('hides on the previous anchor while the show delay for the next anchor runs', async () => {
    const { tooltip, showPopover, hidePopover } = await renderWithFakeTimers(
      <ix-tooltip show-delay={1000}></ix-tooltip>
    );

    await tooltip.showTooltip(createAnchor());
    vi.advanceTimersByTime(1000);
    expect(showPopover).toHaveBeenCalledTimes(1);

    await tooltip.hideTooltip();
    await tooltip.showTooltip(createAnchor());

    vi.advanceTimersByTime(50);
    expect(hidePopover).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(949);
    expect(showPopover).toHaveBeenCalledTimes(1);

    vi.advanceTimersByTime(1);
    expect(showPopover).toHaveBeenCalledTimes(2);
  });

  it('stays visible when moving to the next anchor before the hide delay', async () => {
    const { tooltip, hidePopover } = await renderWithFakeTimers(
      <ix-tooltip></ix-tooltip>
    );

    await tooltip.showTooltip(createAnchor());
    vi.advanceTimersByTime(0);

    await tooltip.hideTooltip();
    await tooltip.showTooltip(createAnchor());

    vi.advanceTimersByTime(50);
    expect(hidePopover).not.toHaveBeenCalled();

    await tooltip.hideTooltip();
    vi.advanceTimersByTime(50);
    expect(hidePopover).toHaveBeenCalledTimes(1);
  });
});

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
});
