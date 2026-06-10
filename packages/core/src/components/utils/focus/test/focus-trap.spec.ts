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
  filterFocusTrapFocusables,
  findActiveFocusableIndex,
} from '../focus-trap';

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
