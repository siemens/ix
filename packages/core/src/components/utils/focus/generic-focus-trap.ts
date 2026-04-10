/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface GenericFocusTrapResult {
  destroy: () => void;
}

/**
 * Returns true if the element can receive focus.
 *
 * Uses the computed `tabIndex` property, which returns >= 0 for all natively
 * focusable elements (input, button, a[href], select, textarea, …) without
 * requiring an explicit `tabindex` attribute, and for any custom element that
 * has set `tabIndex` or uses `delegatesFocus`.
 */
function isElementFocusable(el: HTMLElement): boolean {
  if (el.hidden) return false;

  if ((el as HTMLInputElement).disabled) {
    return false;
  }

  const style = window.getComputedStyle(el);

  if (style.display === 'none' || style.visibility === 'hidden') {
    return false;
  }

  if (style.position !== 'fixed' && el.offsetParent === null) {
    return false;
  }

  return el.tabIndex >= 0;
}

/**
 * Traverses the deep, shadow-aware DOM tree rooted at `root` and collects
 * all leaf focusable elements in DOM order.
 *
 * - `<slot>` elements are expanded to their assigned nodes.
 * - Shadow roots are descended into so that the actual focusable leaf is
 *   collected (e.g. the `<input>` inside `ix-input`) rather than the host.
 */
function collectFocusable(
  root: Element | ShadowRoot,
  into: HTMLElement[]
): void {
  for (const child of Array.from(root.children)) {
    const el = child as HTMLElement;

    if (el.tagName === 'SLOT') {
      for (const assigned of (el as HTMLSlotElement).assignedElements({
        flatten: true,
      })) {
        collectFromElement(assigned as HTMLElement, into);
      }
      continue;
    }

    collectFromElement(el, into);
  }
}

function collectFromElement(el: HTMLElement, into: HTMLElement[]): void {
  if (el.shadowRoot) {
    collectFocusable(el.shadowRoot, into);
    return;
  }

  if (isElementFocusable(el)) {
    into.push(el);
  }

  collectFocusable(el, into);

  collectFocusable(el, into);
}

/**
 * Returns the deepest currently focused element by piercing all shadow roots.
 */
function getDeepActiveElement(): Element | null {
  let el: Element | null = document.activeElement;
  while (el?.shadowRoot?.activeElement) {
    el = el.shadowRoot.activeElement;
  }
  return el;
}

/**
 * Installs a generic focus trap on `host`.
 *
 * Focusable elements are discovered by walking the full shadow-aware DOM tree
 * (shadow roots and slot assignments are expanded) and using the computed
 * `tabIndex` property rather than a fixed CSS selector list. This makes the
 * trap work with any element, including web components that expose focusable
 * content only inside their shadow root (e.g. `ix-input`, `ix-button`).
 *
 * @returns A `GenericFocusTrapResult` with a `destroy()` method that removes
 *          the trap.
 */
export function addGenericFocusTrap(host: HTMLElement): GenericFocusTrapResult {
  let cachedFocusable: HTMLElement[] | null = null;

  const invalidateCache = () => {
    cachedFocusable = null;
  };

  const getFocusable = (): HTMLElement[] => {
    if (!cachedFocusable) {
      cachedFocusable = [];
      collectFocusable(host.shadowRoot ?? host, cachedFocusable);
    }
    return cachedFocusable;
  };

  const observerConfig: MutationObserverInit = {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['hidden', 'disabled', 'tabindex'],
  };

  const observer = new MutationObserver(invalidateCache);
  observer.observe(host, observerConfig);
  if (host.shadowRoot) {
    observer.observe(host.shadowRoot, observerConfig);
  }

  const onKeydown = (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return;

    const focusable = getFocusable();
    if (focusable.length === 0) return;

    const active = getDeepActiveElement();
    const first = focusable.at(0);
    const last = focusable.at(-1);

    if (event.shiftKey) {
      if (active === first) {
        event.preventDefault();
        last?.focus();
      }
    } else if (active === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  host.addEventListener('keydown', onKeydown);

  return {
    destroy: () => {
      host.removeEventListener('keydown', onKeydown);
      observer.disconnect();
    },
  };
}
