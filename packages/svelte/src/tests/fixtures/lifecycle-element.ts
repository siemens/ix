/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * An element that records what it can see of itself at `connectedCallback`.
 *
 * This is how the proxy's *timing* guarantees are pinned down: which of the
 * things a consumer wrote in their markup are already on the element at the
 * moment it enters the document, and which only arrive afterwards.
 */
export const LIFECYCLE_TAG = 'lifecycle-test-element';

export const LIFECYCLE_PROPS = ['stringProp'] as const;
export const LIFECYCLE_EVENTS = ['valueChange'] as const;

export type ConnectedSnapshot = {
  attributes: string[];
  stringProp: unknown;
  listeners: string[];
};

export class LifecycleTestElement extends HTMLElement {
  declare stringProp: unknown;

  /** What the element saw at `connectedCallback`, or `undefined` if never connected. */
  connectedSnapshot: ConnectedSnapshot | undefined;

  private readonly listeners: string[] = [];

  connectedCallback(): void {
    this.connectedSnapshot = {
      attributes: this.getAttributeNames().sort(),
      stringProp: this.stringProp,
      listeners: [...this.listeners].sort(),
    };
  }

  override addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ): void {
    this.listeners.push(type);
    super.addEventListener(
      type,
      listener as EventListenerOrEventListenerObject,
      options
    );
  }

  emit(name: string, detail?: unknown): void {
    this.dispatchEvent(new CustomEvent(name, { detail }));
  }
}

for (const name of LIFECYCLE_PROPS) {
  Object.defineProperty(LifecycleTestElement.prototype, name, {
    configurable: true,
    enumerable: true,
    get(this: { __values?: Record<string, unknown> }) {
      return this.__values?.[name];
    },
    set(this: { __values?: Record<string, unknown> }, value: unknown) {
      (this.__values ??= {})[name] = value;
    },
  });
}

if (!customElements.get(LIFECYCLE_TAG)) {
  customElements.define(LIFECYCLE_TAG, LifecycleTestElement);
}
