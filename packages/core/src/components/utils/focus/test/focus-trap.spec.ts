/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { afterEach, describe, expect, it } from 'vitest';
import {
  addFocusTrap,
  filterFocusTrapFocusables,
  findActiveFocusableIndex,
  getDeepActiveElement,
} from '../focus-trap';

const dispatchTab = () => {
  document.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    })
  );
};

describe('findActiveFocusableIndex', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('matches the active element inside a shadow host listed in the trap', () => {
    const host = document.createElement('div');
    const shadowRoot = host.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    shadowRoot.appendChild(button);
    document.body.appendChild(host);
    button.focus();

    expect(findActiveFocusableIndex(button, [host])).toBe(0);
  });

  it('matches a direct listed element', () => {
    const button = document.createElement('button');
    document.body.appendChild(button);
    button.focus();

    expect(findActiveFocusableIndex(button, [button])).toBe(0);
  });

  it('returns -1 when the active element is outside the trap list', () => {
    const inside = document.createElement('button');
    const outside = document.createElement('button');
    document.body.append(inside, outside);
    outside.focus();

    expect(findActiveFocusableIndex(outside, [inside])).toBe(-1);
  });
});

describe('getDeepActiveElement', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('walks into shadowRoot.activeElement when document.activeElement is the host', () => {
    const host = document.createElement('ix-popover-in-shadow-demo');
    const shadow = host.attachShadow({ mode: 'open' });
    const button = document.createElement('button');
    button.id = 'inner';
    shadow.appendChild(button);
    document.body.appendChild(host);
    button.focus();

    expect(document.activeElement).toBe(host);
    expect(getDeepActiveElement()).toBe(button);
    expect(findActiveFocusableIndex(getDeepActiveElement(), [button])).toBe(0);
  });
});

describe('addFocusTrap', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('advances focus with listenOnDocument inside an ancestor shadow root', async () => {
    const demo = document.createElement('div');
    const shadow = demo.attachShadow({ mode: 'open' });
    const trapHost = document.createElement('div');
    const first = document.createElement('button');
    first.id = 'first';
    const second = document.createElement('button');
    second.id = 'second';
    trapHost.append(first, second);
    shadow.appendChild(trapHost);
    document.body.appendChild(demo);
    first.focus();

    const trap = await addFocusTrap(trapHost, {
      listenOnDocument: true,
      trapFocusInShadowDom: 'both',
    });

    dispatchTab();

    expect(getDeepActiveElement()).toBe(second);
    trap.destroy();
  });

  it('wraps focus at the last focusable with listenOnDocument', async () => {
    const trapHost = document.createElement('div');
    const first = document.createElement('button');
    const second = document.createElement('button');
    trapHost.append(first, second);
    document.body.appendChild(trapHost);
    second.focus();

    const trap = await addFocusTrap(trapHost, {
      listenOnDocument: true,
      trapFocusInShadowDom: 'both',
    });

    dispatchTab();

    expect(document.activeElement).toBe(first);
    trap.destroy();
  });

  it('defers tab handling when shouldDeferTabTrap returns true', async () => {
    const trapHost = document.createElement('div');
    const first = document.createElement('button');
    const second = document.createElement('button');
    trapHost.append(first, second);
    document.body.appendChild(trapHost);
    first.focus();

    const trap = await addFocusTrap(trapHost, {
      listenOnDocument: true,
      trapFocusInShadowDom: 'both',
      shouldDeferTabTrap: () => true,
    });

    dispatchTab();

    expect(document.activeElement).toBe(first);
    trap.destroy();
  });
});

describe('filterFocusTrapFocusables', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('removes focusables owned by a nested child popover host', () => {
    const outer = document.createElement('ix-popover');
    outer.classList.add('visible');
    const inner = document.createElement('ix-popover');
    const outerButton = document.createElement('button');
    const innerButton = document.createElement('button');
    inner.appendChild(innerButton);
    outer.append(outerButton, inner);
    document.body.appendChild(outer);

    const filtered = filterFocusTrapFocusables(
      [outerButton, innerButton],
      outer
    );

    expect(filtered).toEqual([outerButton]);
  });

  it('removes focusables inside an inert subtree', () => {
    const outer = document.createElement('ix-popover');
    outer.classList.add('visible');
    const dialog = document.createElement('dialog');
    dialog.inert = true;
    const inertButton = document.createElement('button');
    const activeButton = document.createElement('button');
    dialog.appendChild(inertButton);
    outer.append(dialog, activeButton);
    document.body.appendChild(outer);

    const filtered = filterFocusTrapFocusables(
      [inertButton, activeButton],
      outer
    );

    expect(filtered).toEqual([activeButton]);
  });
});
