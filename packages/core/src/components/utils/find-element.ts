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
 * @param hostElement The element to start the search from
 * @returns Promise with the resolved elements
 */
export async function resolveSelector(
  selector: string,
  hostElement?: HTMLElement
): Promise<HTMLElement[] | undefined> {
  const elementsInLightDom: HTMLElement[] = Array.from(
    document.querySelectorAll(selector)
  );

  if (elementsInLightDom.length > 0) {
    return Promise.resolve(elementsInLightDom);
  }

  if (hostElement === undefined) {
    return Promise.resolve(undefined);
  }

  const shadowRoot = getRootFor(hostElement);

  if (shadowRoot === undefined || !(shadowRoot instanceof ShadowRoot)) {
    return Promise.resolve(undefined);
  }

  let elementsInSlot: HTMLElement[] = getSlottedElements(shadowRoot, selector);

  if (elementsInSlot.length > 0) {
    return Promise.resolve(elementsInSlot);
  }

  const elementsInShadowRoot: HTMLElement[] = Array.from(
    shadowRoot.querySelectorAll(selector)
  );

  if (elementsInShadowRoot.length > 0) {
    return Promise.resolve(elementsInShadowRoot);
  }
  
  return Promise.resolve(undefined);
}

function getSlottedElements(shadowRoot: ShadowRoot, selector: string) {
  const slots = shadowRoot.querySelectorAll('slot');
  let elementsInSlot: HTMLElement[] = [];

  slots.forEach((slot) => {
    const assignedElements = slot.assignedElements({ flatten: true });
    assignedElements.forEach((element) => {
      if (element.matches(selector)) {
        elementsInSlot.push(element as HTMLElement);
      } else {
        const elementInSlot = element.querySelector(selector);

        if (elementInSlot) {
          elementsInSlot.push(elementInSlot as HTMLElement);
        }
      }
    });
  });

  return elementsInSlot;
}

/**
 * Walk up the DOM to find the nearest shadow root
 * @param element The element to get the root for
 * @param parent This will determine how far up the DOM to travel to find the root
 * @returns The root element
 */
export function getRootFor(element: HTMLElement, parent = document.body) {
  if (!element.parentElement && !element.parentNode) {
    return undefined;
  }

  if (element.parentNode instanceof ShadowRoot) {
    return element.parentNode;
  }

  let currentNode = element.parentElement;

  while (currentNode) {
    if (currentNode.shadowRoot) {
      return currentNode.shadowRoot;
    } else if (currentNode.parentNode instanceof ShadowRoot) {
      return currentNode.parentNode;
    }

    currentNode = currentNode.parentElement;
  }

  return parent;
}

export function waitForSelector(
  selector: string,
  node = document,
  hostElement?: HTMLElement
): Promise<Element> {
  return new Promise((resolve) => {
    const waitForElements = () => {
      resolveSelector(selector, hostElement).then((elements) => {
        if (elements && elements.length > 0) {
          resolve(elements[0]);
          observer?.disconnect();
        }
      });
    };

    waitForElements();

    const observer = new MutationObserver(() => {
      waitForElements();
    });

    observer.observe(node.body, {
      childList: true,
      subtree: true,
    });
  });
}

/**
 * Find an element by ID or reference
 * @param element The element to find
 * @param hostElement The element to start the search from
 * @returns A promise that will resolve to the element
 */
export function findElement(
  element: string | HTMLElement | Promise<HTMLElement>,
  hostElement?: HTMLElement
): Promise<Element> {
  if (element instanceof Promise) {
    return element;
  }

  if (typeof element === 'object') {
    return Promise.resolve(element);
  }

  const selector = `#${element}`;
  return waitForSelector(selector, document, hostElement);
}
