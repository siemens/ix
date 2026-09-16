/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * A stand-in for a Stencil custom element.
 *
 * The runtime is tested against this instead of a real `ix-*` component so the
 * assertions can be exact: every property assignment and every
 * `addEventListener` / `removeEventListener` call is recorded, which is what
 * the property-vs-attribute and listener-identity guarantees are made of.
 */
export const TEST_TAG = 'runtime-test-element';

/** Properties the element *declares*, i.e. what a Stencil `@Prop()` would be. */
export const TEST_PROPS = [
  'objectProp',
  'arrayProp',
  'dateProp',
  'stringProp',
  'value',
  // A *declared property* that happens to be named like an event handler and
  // holds a function -- e.g. a custom label formatter. It must be assigned as
  // a property, not mistaken for a listener subscription.
  'onSelect',
] as const;

/** Events the element *declares*, i.e. what a Stencil `@Event()` would be. */
export const TEST_EVENTS = ['valueChange', 'ixBlur'] as const;

export class RuntimeTestElement extends HTMLElement {
  // Declared properties are installed on the prototype below, so they are only
  // declared -- never initialised -- here.
  declare objectProp: unknown;
  declare arrayProp: unknown;
  declare dateProp: unknown;
  declare stringProp: unknown;
  declare value: unknown;
  declare onSelect: unknown;

  /** Every declared-property assignment, in order. */
  readonly propertyAssignments: Array<{ name: string; value: unknown }> = [];

  /** Number of `addEventListener` calls per event name. */
  readonly listenersAdded: Record<string, number> = {};

  /** Number of `removeEventListener` calls per event name. */
  readonly listenersRemoved: Record<string, number> = {};

  /** Backing store for the declared properties. */
  readonly values: Record<string, unknown> = {};

  override addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ): void {
    this.listenersAdded[type] = (this.listenersAdded[type] ?? 0) + 1;
    super.addEventListener(
      type,
      listener as EventListenerOrEventListenerObject,
      options
    );
  }

  override removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | EventListenerOptions
  ): void {
    this.listenersRemoved[type] = (this.listenersRemoved[type] ?? 0) + 1;
    super.removeEventListener(
      type,
      listener as EventListenerOrEventListenerObject,
      options
    );
  }

  /** Emit a Stencil-style custom event. */
  emit(name: string, detail?: unknown): void {
    this.dispatchEvent(new CustomEvent(name, { detail }));
  }
}

for (const name of TEST_PROPS) {
  Object.defineProperty(RuntimeTestElement.prototype, name, {
    configurable: true,
    enumerable: true,
    get(this: RuntimeTestElement) {
      return this.values[name];
    },
    set(this: RuntimeTestElement, value: unknown) {
      this.values[name] = value;
      this.propertyAssignments.push({ name, value });
    },
  });
}

if (!customElements.get(TEST_TAG)) {
  customElements.define(TEST_TAG, RuntimeTestElement);
}

/** Count of property assignments recorded for `name`. */
export function assignmentsFor(
  element: RuntimeTestElement,
  name: string
): unknown[] {
  return element.propertyAssignments
    .filter((entry) => entry.name === name)
    .map((entry) => entry.value);
}
