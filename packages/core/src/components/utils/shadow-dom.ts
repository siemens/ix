/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function closestElement(selector: string, el: any): null | Element {
  if (!el) {
    return null;
  }
  return (
    el.closest(selector) ||
    closestElement(selector, (el.getRootNode() as any).host)
  );
}

export function getSlottedElements<R = any>(slot: any): R[] {
  return slot.assignedElements({ flatten: true });
}

export function hasSlottedElements(slot: any) {
  if (!slot) {
    return false;
  }
  return slot.assignedElements({ flatten: true }).length !== 0;
}

export function containsElement(target: Element, element: Element) {
  const hasShadowDom = target.shadowRoot;

  if (hasShadowDom) {
    target.contains(element) || target.shadowRoot.contains(element);
  }

  return target.contains(element);
}

export function closestPassShadow(node: Node, selector: string) {
  if (!node) {
    return null;
  }

  if (node instanceof ShadowRoot) {
    return closestPassShadow(node.host, selector);
  }

  if (node instanceof HTMLElement) {
    if (node.matches(selector)) {
      return node;
    } else {
      return closestPassShadow(node.parentNode!, selector);
    }
  }

  return closestPassShadow(node.parentNode!, selector);
}

/**
 * Returns an array of elements representing the path from the given element
 * to the document root, similar to Event.composedPath().
 * This function respects shadow DOM boundaries and traverses through them.
 *
 * @param element - The HTMLElement to start the path from
 * @returns An array of Elements including the element itself, shadow roots, and parent elements
 *
 * @example
 * ```typescript
 * const button = document.querySelector('ix-button');
 * const path = getComposedPath(button);
 * // Returns: [button, shadow-root, ix-button, body, html, document]
 * ```
 */
export function getComposedPath(element: HTMLElement): Element[] {
  const path: Element[] = [];
  let currentElement: Node | null = element;

  while (currentElement) {
    if (currentElement instanceof Element) {
      path.push(currentElement);

      // Check if we're inside a shadow root
      const rootNode = currentElement.getRootNode();
      if (rootNode instanceof ShadowRoot) {
        // Continue with the shadow host
        currentElement = rootNode.host;
        continue;
      }

      // Move to the parent element
      currentElement = currentElement.parentElement;
    } else if (currentElement instanceof Document) {
      // Reached the document, stop here
      break;
    } else {
      // Move to parent node for other node types
      currentElement = currentElement.parentNode;
    }
  }

  return path;
}
