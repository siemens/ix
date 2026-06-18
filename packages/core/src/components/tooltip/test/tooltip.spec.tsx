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

const flushTimeout = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('ix-tooltip', () => {
  it('does not call showPopover on a dialog that was removed before the delay', async () => {
    const { root, waitForChanges } = await render(
      <ix-tooltip show-delay={0}></ix-tooltip>
    );
    const tooltip = root as HTMLIxTooltipElement;
    const dialog = tooltip.shadowRoot!.querySelector('dialog')!;
    const showPopover = vi.fn();
    dialog.showPopover = showPopover;

    const anchor = document.createElement('div');
    await tooltip.showTooltip(anchor);
    dialog.remove();
    await flushTimeout();
    await waitForChanges();

    expect(showPopover).not.toHaveBeenCalled();
  });

  it('does not call hidePopover when the popover is not open', async () => {
    const { root, waitForChanges } = await render(
      <ix-tooltip show-delay={0}></ix-tooltip>
    );
    const tooltip = root as HTMLIxTooltipElement;
    const dialog = tooltip.shadowRoot!.querySelector('dialog')!;
    dialog.showPopover = vi.fn();
    const hidePopover = vi.fn();
    dialog.hidePopover = hidePopover;

    const anchor = document.createElement('div');
    await tooltip.showTooltip(anchor);
    await flushTimeout();
    await waitForChanges();

    await tooltip.hideTooltip(0);
    await flushTimeout();
    await waitForChanges();

    expect(hidePopover).not.toHaveBeenCalled();
  });
});
