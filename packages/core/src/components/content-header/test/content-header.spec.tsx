/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { h, render } from '@stencil/vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { applicationLayoutService } from '../../utils/application-layout';

class ResizeObserverMock implements ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

describe('content-header secondary actions', () => {
  beforeEach(() => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock);
    applicationLayoutService.setBreakpoint('sm');
  });

  afterEach(() => {
    applicationLayoutService.setBreakpoint('lg');
    vi.unstubAllGlobals();
  });

  async function flushLayout() {
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => resolve())
    );
  }

  it('does not create an empty overflow menu', async () => {
    const { root, waitForChanges } = await render(
      <ix-content-header>
        <ix-button>Save</ix-button>
      </ix-content-header>
    );
    await flushLayout();
    await waitForChanges();
    expect(root.shadowRoot!.querySelector('.overflowButton')).toBeNull();
    expect(root.shadowRoot!.querySelector('slot:not([name])')).not.toBeNull();
  });

  it('keeps original actions mounted and renders ordered menu items', async () => {
    const { root, waitForChanges } = await render(
      <ix-content-header ariaLabelMoreActions="Weitere Aktionen">
        <ix-button slot="secondary-actions">Export</ix-button>
        <ix-button slot="secondary-actions" disabled>
          Delete
        </ix-button>
        <ix-button>Save</ix-button>
      </ix-content-header>
    );
    await flushLayout();
    await waitForChanges();

    const items = root.shadowRoot!.querySelectorAll('ix-dropdown-item');
    expect(Array.from(items, (item) => item.label)).toEqual([
      'Export',
      'Delete',
    ]);
    expect(items[1].disabled).toBe(true);
    expect(root.querySelectorAll('ix-button')).toHaveLength(3);
    expect(
      root.shadowRoot!.querySelector('.secondaryActions')!.hasAttribute('inert')
    ).toBe(true);
    expect(
      root.shadowRoot!.querySelector('ix-dropdown')!.getAttribute('aria-label')
    ).toBe('Weitere Aktionen');
  });

  it('forwards menu activation to the original action exactly once', async () => {
    const onClick = vi.fn();
    const { root, waitForChanges } = await render(
      <ix-content-header>
        <ix-button slot="secondary-actions" onClick={onClick}>
          Export
        </ix-button>
      </ix-content-header>
    );
    await flushLayout();
    await waitForChanges();

    root
      .shadowRoot!.querySelector('ix-dropdown-item')!
      .dispatchEvent(new CustomEvent('itemClick'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not activate disabled or loading actions', async () => {
    const onClick = vi.fn();
    const { root, waitForChanges } = await render(
      <ix-content-header>
        <ix-button slot="secondary-actions" disabled onClick={onClick}>
          Delete
        </ix-button>
        <ix-button slot="secondary-actions" loading onClick={onClick}>
          Export
        </ix-button>
      </ix-content-header>
    );
    await flushLayout();
    await waitForChanges();

    for (const item of Array.from(
      root.shadowRoot!.querySelectorAll('ix-dropdown-item')
    )) {
      expect(item.disabled).toBe(true);
      item.dispatchEvent(new CustomEvent('itemClick'));
    }
    expect(onClick).not.toHaveBeenCalled();
  });
});
