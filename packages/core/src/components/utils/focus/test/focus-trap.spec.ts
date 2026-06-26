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
  getFocusTrapFocusables,
} from '../focus-trap';

const dispatchTab = (target: EventTarget = document) => {
  target.dispatchEvent(
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

  it('allows Tab keydown to reach nested listeners when not at trap boundary', async () => {
    const trapHost = document.createElement('div');
    const first = document.createElement('button');
    const second = document.createElement('button');
    trapHost.append(first, second);
    document.body.appendChild(trapHost);

    let tabSeenOnSecond = false;
    second.addEventListener('keydown', (event) => {
      if (event.key === 'Tab') {
        tabSeenOnSecond = true;
      }
    });

    second.focus();

    const trap = await addFocusTrap(trapHost, {
      listenOnDocument: true,
      trapFocusInShadowDom: 'both',
    });

    dispatchTab(second);

    expect(tabSeenOnSecond).toBe(true);
    trap.destroy();
  });

  it('wraps focus at trap boundary inside an ancestor shadow root', async () => {
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
    second.focus();

    const trap = await addFocusTrap(trapHost, {
      trapFocusInShadowDom: 'both',
    });

    dispatchTab(second);

    expect(getDeepActiveElement()).toBe(first);
    trap.destroy();
  });

  it('does not redirect Tab when focus is inside trap but not in the focusable list', async () => {
    const trapHost = document.createElement('div');
    const close = document.createElement('button');
    close.id = 'close';
    const widget = document.createElement('div');
    const widgetShadow = widget.attachShadow({ mode: 'open' });
    const inner = document.createElement('button');
    inner.id = 'inner';
    widgetShadow.append(inner);
    trapHost.append(close, widget);
    document.body.appendChild(trapHost);
    inner.focus();

    const trap = await addFocusTrap(trapHost, {
      listenOnDocument: true,
      trapFocusInShadowDom: 'both',
    });

    dispatchTab(inner);

    expect(getDeepActiveElement()).toBe(inner);
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

    dispatchTab(second);

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

    dispatchTab(first);

    expect(document.activeElement).toBe(first);
    trap.destroy();
  });

  it('wraps focus when a non-tabbable button is between trap focusables', async () => {
    const trapHost = document.createElement('div');
    const first = document.createElement('button');
    first.id = 'one';
    const hidden = document.createElement('button');
    hidden.id = 'two';
    hidden.style.display = 'none';
    const last = document.createElement('button');
    last.id = 'three';
    trapHost.append(first, hidden, last);
    document.body.appendChild(trapHost);
    last.focus();

    const trap = await addFocusTrap(trapHost, {
      listenOnDocument: true,
      trapFocusInShadowDom: 'both',
    });

    dispatchTab(last);

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

  it('excludes display none and inert elements from getFocusTrapFocusables', () => {
    const trapHost = document.createElement('div');
    const first = document.createElement('button');
    const hidden = document.createElement('button');
    hidden.style.display = 'none';
    const inertButton = document.createElement('button');
    inertButton.inert = true;
    const last = document.createElement('button');
    trapHost.append(first, hidden, inertButton, last);
    document.body.appendChild(trapHost);

    expect(getFocusTrapFocusables(trapHost)).toEqual([first, last]);
  });
});
