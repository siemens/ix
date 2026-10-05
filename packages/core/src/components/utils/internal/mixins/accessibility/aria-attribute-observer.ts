/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { A11yAttributeName, a11yAttributes } from './../../../a11y';

type AriaMutationHandler = (
  attributeNames: ReadonlySet<A11yAttributeName>
) => void;

interface AriaObserverRegistration {
  handler: AriaMutationHandler;
}

const reportMutationError = (error: unknown) => {
  if (typeof reportError === 'function') {
    reportError(error);
    return;
  }

  console.error(error);
};

// A MutationObserver can watch many direct targets and keeps only weak references
// to them, so all IX hosts can share one observer without observing a whole subtree.
const registrations = new WeakMap<HTMLElement, AriaObserverRegistration>();
const suppressedHosts = new WeakSet<HTMLElement>();
let observer: MutationObserver | undefined;
let registrationCount = 0;

const dispatchMutations: MutationCallback = (mutations) => {
  const changesByHandler = new Map<
    AriaMutationHandler,
    Set<A11yAttributeName>
  >();

  mutations.forEach((mutation) => {
    const hostElement = mutation.target as HTMLElement;
    if (suppressedHosts.has(hostElement)) {
      return;
    }

    const registration = registrations.get(hostElement);
    const attributeName = mutation.attributeName as A11yAttributeName | null;
    if (!registration || !attributeName) {
      return;
    }

    let changedAttributes = changesByHandler.get(registration.handler);
    if (!changedAttributes) {
      changedAttributes = new Set();
      changesByHandler.set(registration.handler, changedAttributes);
    }
    changedAttributes.add(attributeName);
  });

  changesByHandler.forEach((attributeNames, handler) => {
    try {
      handler(attributeNames);
    } catch (error) {
      reportMutationError(error);
    }
  });
};

const getObserver = () => {
  if (typeof MutationObserver === 'undefined') {
    return undefined;
  }

  observer ??= new MutationObserver(dispatchMutations);
  return observer;
};

export const observeAriaAttributes = (
  hostElement: HTMLElement,
  handler: AriaMutationHandler
): boolean => {
  const ariaObserver = getObserver();
  if (!ariaObserver) {
    return false;
  }

  if (!registrations.has(hostElement)) {
    registrationCount++;
  }
  registrations.set(hostElement, { handler });
  ariaObserver.observe(hostElement, {
    attributeFilter: a11yAttributes,
    attributes: true,
  });
  return true;
};

export const unobserveAriaAttributes = (hostElement: HTMLElement) => {
  if (!registrations.delete(hostElement)) {
    return;
  }

  registrationCount--;
  if (registrationCount === 0) {
    observer?.disconnect();
    observer = undefined;
  }
};

export const runWithoutAriaAttributeObservation = <T>(
  hostElement: HTMLElement,
  callback: () => T
): T => {
  const registration = registrations.get(hostElement);
  if (!registration || !observer) {
    return callback();
  }

  const activeObserver = observer;
  dispatchMutations(activeObserver.takeRecords(), activeObserver);
  suppressedHosts.add(hostElement);

  try {
    return callback();
  } finally {
    const remainingMutations = activeObserver
      .takeRecords()
      .filter((mutation) => mutation.target !== hostElement);
    suppressedHosts.delete(hostElement);
    dispatchMutations(remainingMutations, activeObserver);
  }
};

export const flushAriaAttributeMutations = () => {
  if (observer) {
    dispatchMutations(observer.takeRecords(), observer);
  }
};
