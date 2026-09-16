/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { tick } from 'svelte';
import { describe, expect, it, vi } from 'vitest';
import { render, type Exports } from 'vitest-browser-svelte';
import DynamicPropHost from './fixtures/DynamicPropHost.svelte';
import ModelHost from './fixtures/ModelHost.svelte';
import PropHost from './fixtures/PropHost.svelte';
import {
  assignmentsFor,
  TEST_TAG,
  type RuntimeTestElement,
} from './fixtures/test-element.js';

function hostElement(container: HTMLElement): RuntimeTestElement {
  const element = container.querySelector(TEST_TAG);
  expect(element).not.toBeNull();
  return element as RuntimeTestElement;
}

/**
 * `render()` types `component` as the component itself, while at runtime it is
 * the object of values the component `export`s.
 */
function exportsOf<C>(component: C): Exports<C> {
  return component as unknown as Exports<C>;
}

describe('useStencilElement: property assignment', () => {
  it('assigns declared props as properties, never as attributes', async () => {
    const objectProp = { nested: { a: 1 } };
    const arrayProp = [1, 2, 3];
    const dateProp = new Date('2026-01-01T00:00:00.000Z');

    const { container } = render(PropHost, { objectProp, arrayProp, dateProp });
    await tick();

    const element = hostElement(container);

    // Live values, not stringified copies -- this is the whole point of
    // applying props imperatively instead of spreading them in the template.
    expect(element.dateProp).toBe(dateProp);
    expect(element.objectProp).toEqual(objectProp);
    expect(element.arrayProp).toEqual(arrayProp);

    expect(element.getAttribute('objectProp')).toBeNull();
    expect(element.getAttribute('arrayProp')).toBeNull();
    expect(element.getAttribute('dateProp')).toBeNull();
  });

  it('forwards object and array props to the element by reference', async () => {
    const objectProp = { nested: { a: 1 } };
    const arrayProp = [1, 2, 3];

    const { container, component } = render(PropHost, {
      objectProp,
      arrayProp,
    });
    await tick();

    const element = hostElement(container);
    const props = exportsOf(component).getProps();

    // The harness deep-proxies plain objects and arrays via `$state()`, so the
    // reference the component receives is the one that must reach the element.
    expect(element.objectProp).toBe(props['objectProp']);
    expect(element.arrayProp).toBe(props['arrayProp']);

    // ...and it arrives as a live object, not a stringified copy.
    expect(typeof element.objectProp).toBe('object');
    expect(Array.isArray(element.arrayProp)).toBe(true);
  });

  it('sets undeclared props as attributes', async () => {
    const { container } = render(PropHost, {
      'data-testid': 'undeclared',
      'aria-label': 'Label',
    });
    await tick();

    const element = hostElement(container);

    expect(element.getAttribute('data-testid')).toBe('undeclared');
    expect(element.getAttribute('aria-label')).toBe('Label');
  });

  /**
   * Undeclared props are spread into the template, so Svelte -- not this
   * runtime -- decides how the values are serialised. That is deliberate: it
   * is the behaviour a Svelte author already expects from every other element,
   * and it is the right one for ARIA, where `aria-hidden="true"` is meaningful
   * and `aria-hidden=""` is not.
   */
  it('serialises undeclared attribute values the way Svelte does', async () => {
    const { container, rerender } = render(PropHost, { 'data-flag': true });
    await tick();

    const element = hostElement(container);
    expect(element.getAttribute('data-flag')).toBe('true');

    await rerender({ 'data-flag': 'on' });
    expect(element.getAttribute('data-flag')).toBe('on');

    await rerender({ 'data-flag': null });
    expect(element.hasAttribute('data-flag')).toBe(false);

    await rerender({ 'data-flag': undefined });
    expect(element.hasAttribute('data-flag')).toBe(false);
  });

  it('resets a declared property when the prop disappears', async () => {
    const { component } = render(DynamicPropHost, {
      initial: { stringProp: 'first', objectProp: { a: 1 } },
    });
    await tick();

    const host = exportsOf(component);
    const element = host.getElement() as RuntimeTestElement;
    expect(element.stringProp).toBe('first');

    host.setProps({ objectProp: { a: 1 } });
    await tick();

    // Without stale tracking the last value would stick on the element for the
    // rest of its life, with nothing in the consumer's markup to explain it.
    expect(element.stringProp).toBeUndefined();
    expect(element.objectProp).toEqual({ a: 1 });
  });

  it('removes an undeclared attribute when the prop disappears', async () => {
    const { component } = render(DynamicPropHost, {
      initial: { 'data-testid': 'first', 'aria-label': 'Label' },
    });
    await tick();

    const host = exportsOf(component);
    const element = host.getElement() as RuntimeTestElement;
    expect(element.getAttribute('aria-label')).toBe('Label');

    host.setProps({ 'data-testid': 'first' });
    await tick();

    expect(element.hasAttribute('aria-label')).toBe(false);
    expect(element.getAttribute('data-testid')).toBe('first');
  });

  /**
   * A component may declare a property that is named like an event handler and
   * holds a function -- a formatter callback, say. Treating it as a listener
   * subscription instead of a property is silent: the property is never set and
   * no event named `select` is ever dispatched.
   */
  it('assigns a declared function property rather than subscribing to it', async () => {
    const onSelect = vi.fn();

    const { container } = render(PropHost, { onSelect });
    await tick();

    const element = hostElement(container);

    expect(element.onSelect).toBe(onSelect);
    expect(element.listenersAdded['select']).toBeUndefined();
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('does not reassign a declared property whose value is unchanged', async () => {
    const objectProp = { nested: { a: 1 } };

    const { container, rerender } = render(PropHost, {
      objectProp,
      stringProp: 'first',
    });
    await tick();

    const element = hostElement(container);
    expect(assignmentsFor(element, 'objectProp')).toHaveLength(1);

    // Touching an unrelated prop re-runs the effect, but must not re-assign
    // the object -- a fresh assignment would make Stencil re-render.
    await rerender({ stringProp: 'second' });

    expect(assignmentsFor(element, 'objectProp')).toHaveLength(1);
    expect(assignmentsFor(element, 'stringProp')).toEqual(['first', 'second']);
  });
});

describe('useStencilElement: event listeners', () => {
  it('preserves the camelCase of Stencil event names', async () => {
    const onValueChange = vi.fn();

    const { container } = render(PropHost, { onValueChange });
    await tick();

    const element = hostElement(container);

    expect(element.listenersAdded['valueChange']).toBe(1);
    expect(element.listenersAdded['valuechange']).toBeUndefined();

    element.emit('valueChange', 'payload');

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange.mock.calls[0][0]).toBeInstanceOf(CustomEvent);
    expect(onValueChange.mock.calls[0][0].detail).toBe('payload');
  });

  it('does not detach and reattach listeners when a handler is replaced', async () => {
    const first = vi.fn();
    const second = vi.fn();

    const { container, rerender } = render(PropHost, {
      onValueChange: first,
    });
    await tick();

    const element = hostElement(container);
    expect(element.listenersAdded['valueChange']).toBe(1);

    await rerender({ onValueChange: second });

    // The listener is stable; only the handler it reads changed.
    expect(element.listenersAdded['valueChange']).toBe(1);
    expect(element.listenersRemoved['valueChange']).toBeUndefined();

    element.emit('valueChange');

    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(1);
  });

  it('attaches handlers for undeclared native DOM events', async () => {
    const onclick = vi.fn();

    const { container } = render(PropHost, { onclick });
    await tick();

    const element = hostElement(container);
    expect(element.listenersAdded['click']).toBe(1);

    element.dispatchEvent(new MouseEvent('click'));
    expect(onclick).toHaveBeenCalledTimes(1);
  });

  /**
   * Native DOM event names are lowercase, so the camelCase a Svelte author
   * writes has to be folded down. Getting this wrong is invisible: the
   * listener attaches to `mouseEnter`, which nothing ever dispatches.
   */
  it('lowercases camelCase handler names for native DOM events', async () => {
    const onMouseEnter = vi.fn();

    const { container } = render(PropHost, { onMouseEnter });
    await tick();

    const element = hostElement(container);
    expect(element.listenersAdded['mouseenter']).toBe(1);
    expect(element.listenersAdded['mouseEnter']).toBeUndefined();

    element.dispatchEvent(new MouseEvent('mouseenter'));
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
  });

  /**
   * ...but a custom event the component emits without declaring it must keep
   * its camelCase, which is the opposite fold. The two are told apart by
   * whether the platform defines a matching `on*` property on the element.
   */
  it('keeps camelCase for undeclared custom events', async () => {
    const onIxSomething = vi.fn();

    const { container } = render(PropHost, { onIxSomething });
    await tick();

    const element = hostElement(container);
    expect(element.listenersAdded['ixSomething']).toBe(1);
    expect(element.listenersAdded['ixsomething']).toBeUndefined();

    element.emit('ixSomething', 'payload');
    expect(onIxSomething).toHaveBeenCalledTimes(1);
  });

  it('does not reattach listeners when an unrelated prop changes', async () => {
    const onMouseEnter = vi.fn();

    const { container, rerender } = render(PropHost, {
      onMouseEnter,
      stringProp: 'first',
    });
    await tick();

    const element = hostElement(container);
    expect(element.listenersAdded['mouseenter']).toBe(1);

    await rerender({ stringProp: 'second' });

    expect(element.listenersAdded['mouseenter']).toBe(1);
    expect(element.listenersRemoved['mouseenter']).toBeUndefined();
  });

  it('detaches listeners when the component is unmounted', async () => {
    const onValueChange = vi.fn();

    const { container, unmount } = render(PropHost, { onValueChange });
    await tick();

    const element = hostElement(container);
    expect(element.listenersAdded['valueChange']).toBe(1);

    unmount();
    await tick();

    expect(element.listenersRemoved['valueChange']).toBe(1);

    element.emit('valueChange');
    expect(onValueChange).not.toHaveBeenCalled();
  });
});

describe('useStencilElement: model binding', () => {
  it('pushes the bound value onto the element', async () => {
    const { component } = render(ModelHost, { initial: 'initial' });
    await tick();

    const host = exportsOf(component);
    const element = host.getElement()!;
    expect(element.value).toBe('initial');

    host.setValue('updated');
    await tick();

    expect(element.value).toBe('updated');
  });

  it('reads the value back out of the element on the model event', async () => {
    const { component } = render(ModelHost, { initial: 'initial' });
    await tick();

    const host = exportsOf(component);
    const element = host.getElement()!;

    element.values['value'] = 'from-element';
    element.emit('valueChange');
    await tick();

    expect(host.getValue()).toBe('from-element');
  });

  it('round-trips a value driven from both ends', async () => {
    const { component } = render(ModelHost, { initial: 'a' });
    await tick();

    const host = exportsOf(component);
    const element = host.getElement()!;

    host.setValue('b');
    await tick();
    expect(element.value).toBe('b');

    element.values['value'] = 'c';
    element.emit('valueChange');
    await tick();
    expect(host.getValue()).toBe('c');

    host.setValue('d');
    await tick();
    expect(element.value).toBe('d');
    expect(host.getValue()).toBe('d');
  });

  /**
   * Clearing a bound value is an ordinary thing to do -- a reset button sets
   * the state back to `undefined` -- and it has to reach the element like any
   * other value.
   */
  it('pushes a later undefined through to the element', async () => {
    const { component } = render(ModelHost, { initial: 'initial' });
    await tick();

    const host = exportsOf(component);
    const element = host.getElement()!;
    expect(element.value).toBe('initial');

    host.setValue(undefined);
    await tick();

    expect(element.value).toBeUndefined();
  });

  /**
   * ...but the *first* undefined is not a clear, it is an unbound
   * `let value = $state()`. Pushing it would wipe whatever default the
   * component set for itself before the consumer ever said anything.
   */
  it('does not clobber the element default with an initial undefined', async () => {
    const { component } = render(ModelHost, {});
    await tick();

    const host = exportsOf(component);
    const element = host.getElement()!;

    expect(assignmentsFor(element, 'value')).toEqual([]);
  });
});
