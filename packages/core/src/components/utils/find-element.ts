/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Will try to resolve the selector in the light dom, shadow dom or slot
 * @param selector The selector to resolve
 * @returns Promse with the resolved elements
 */
export async function resolveSelector(
  selector: string,
  hostElement?: HTMLElement
): Promise<HTMLElement[] | undefined> {
  const elementsInLightDom: HTMLElement[] = Array.from(
    document.querySelectorAll(selector)
  );

  if (elementsInLightDom.length === 0) {
    const shadowRoot = getRootFor(hostElement);

    if (shadowRoot === undefined) {
      return Promise.resolve(undefined);
    }

    const slots = shadowRoot.querySelectorAll('slot');
    let elementsInSlot: HTMLElement[] = [];

    slots.forEach((slot) => {
      const assignedElements = slot.assignedElements({ flatten: true });
      assignedElements.forEach((element) => {
        if (element.matches(selector)) {
          elementsInSlot.push(element as HTMLElement);
        } else if (element.querySelector(selector)) {
          elementsInSlot.push(element.querySelector(selector) as HTMLElement);
        }
      });
    });

    if (elementsInSlot.length > 0) {
      return Promise.resolve(elementsInSlot);
    }

    const elementsInShadowRoot: HTMLElement[] = Array.from(
      shadowRoot.querySelectorAll(selector)
    );

    return Promise.resolve(elementsInShadowRoot);
  } else {
    return Promise.resolve(elementsInLightDom);
  }
}

/**
 * Walk up the DOM to find the nearest shadow root
 * @param element The element to get the root for
 * @param parent This will determine how far up the DOM to travel to find the root
 * @returns The root element
 */
export function getRootFor(element: HTMLElement, parent = document.body) {
  if (!element.parentElement) {
    return undefined;
  }

  let currentNode = element.parentElement;

  while (currentNode) {
    if (currentNode.shadowRoot) {
      return currentNode.shadowRoot;
    }

    currentNode = currentNode.parentElement;
  }

  return parent;
}

export function waitForSelector(
  selector: string,
  node = document
): Promise<Element> {
  return new Promise((resolve) => {
    if (node.querySelector(selector)) {
      return resolve(node.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (node.querySelector(selector)) {
        resolve(node.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(node.body, {
      childList: true,
      subtree: true,
    });
  });
}

export function findElement(
  element: string | HTMLElement | Promise<HTMLElement>
): Promise<Element> {
  if (element instanceof Promise) {
    return element;
  }

  if (typeof element === 'object') {
    return Promise.resolve(element);
  }

  if (typeof element != 'string') {
    return;
  }

  const selector = `#${element}`;
  return waitForSelector(selector);
}
