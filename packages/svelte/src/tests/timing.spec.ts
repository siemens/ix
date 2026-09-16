/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { tick } from 'svelte';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import IxButton from '../lib/components/IxButton.svelte';
import LifecycleHost from './fixtures/LifecycleHost.svelte';
import {
  LIFECYCLE_TAG,
  type LifecycleTestElement,
} from './fixtures/lifecycle-element.js';

function lifecycleElement(container: HTMLElement): LifecycleTestElement {
  const element = container.querySelector(LIFECYCLE_TAG);
  expect(element).not.toBeNull();
  return element as LifecycleTestElement;
}

/**
 * These tests exist to pin down *when* a proxy's props reach the element,
 * because every prop- and event-timing divergence from plain HTML usage traces
 * back to the same seam: `bind:this` cannot report the element until Svelte has
 * already inserted it, so anything the runtime applies is applied afterwards.
 *
 * The split the proxy makes -- attributes through the template, properties and
 * listeners through the runtime -- is the same one Stencil's own React output
 * target makes (it delegates to `@lit/react`, which applies properties and
 * listeners in `useLayoutEffect`, also post-insertion, and passes everything
 * else to `createElement`). So the guarantees below are parity guarantees, not
 * Svelte-specific concessions.
 */
describe('useStencilElement: application timing', () => {
  it('has undeclared attributes on the element before it is connected', async () => {
    const { container } = render(LifecycleHost, {
      'data-testid': 'connected',
      'aria-label': 'Label',
      id: 'the-id',
    });
    await tick();

    const snapshot = lifecycleElement(container).connectedSnapshot;

    // Spread in the template, so Svelte sets them during element creation.
    expect(snapshot?.attributes).toEqual([
      'aria-label',
      'data-testid',
      'id',
    ]);
  });

  /**
   * The known gap, asserted rather than left to be discovered. Declared
   * properties and event listeners are *not* visible at `connectedCallback`.
   * This is only observable to a component that reads its props synchronously
   * in `connectedCallback`; Stencil schedules `componentWillLoad` and its first
   * render asynchronously, so real `ix-*` components never do.
   */
  it('applies declared properties and listeners after connection', async () => {
    const { container } = render(LifecycleHost, {
      stringProp: 'hello',
      onValueChange: vi.fn(),
    });
    await tick();

    const element = lifecycleElement(container);

    expect(element.connectedSnapshot?.stringProp).toBeUndefined();
    expect(element.connectedSnapshot?.listeners).toEqual([]);

    // ...but they are there by the time the caller regains control.
    expect(element.stringProp).toBe('hello');
  });

  it('applies declared properties and listeners in the same task as mount', async () => {
    const onValueChange = vi.fn();

    // Deliberately no `await` -- this asserts that nothing is deferred to a
    // microtask, a timer or a frame, which is what keeps the proxy ahead of
    // Stencil's asynchronous first render.
    const { container } = render(LifecycleHost, {
      stringProp: 'hello',
      onValueChange,
    });

    const element = lifecycleElement(container);
    expect(element.stringProp).toBe('hello');

    element.emit('valueChange');
    expect(onValueChange).toHaveBeenCalledTimes(1);
  });

  /**
   * The guarantee that actually matters for real components: props are on the
   * element before Stencil renders for the first time, so no one ever sees a
   * frame rendered with default props.
   */
  it('applies props before a real Stencil component first renders', async () => {
    const { container } = render(IxButton, { variant: 'secondary' });

    const button = container.querySelector('ix-button') as HTMLElement & {
      variant?: string;
    };

    expect(button.variant).toBe('secondary');
    // Stencil has not rendered yet at this point...
    expect(button.shadowRoot?.childElementCount ?? 0).toBe(0);

    await vi.waitFor(() => {
      expect(button.shadowRoot?.childElementCount).toBeGreaterThan(0);
    });

    // ...and when it does, it renders with the prop already applied, never
    // with the default first.
    expect(button.shadowRoot?.querySelector('button')?.className).toContain(
      'btn-secondary'
    );
  });
});
