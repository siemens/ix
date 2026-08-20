/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { HTMLStencilElement } from '@stencil/core/internal';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { A11yAttributeName } from './../../../../a11y';

type InheritAriaAttributesMixinModule =
  typeof import('../inherit-aria-attributes.mixin');
type AriaAttributeObserverModule = typeof import('../aria-attribute-observer');

const originalGlobalMutationObserver = Object.getOwnPropertyDescriptor(
  globalThis,
  'MutationObserver'
);
const originalWindowMutationObserver = Object.getOwnPropertyDescriptor(
  window,
  'MutationObserver'
);
const originalReportError = Object.getOwnPropertyDescriptor(
  globalThis,
  'reportError'
);

function restoreProperty(
  target: object,
  key: string,
  descriptor?: PropertyDescriptor
) {
  if (descriptor) {
    Object.defineProperty(target, key, descriptor);
    return;
  }

  Reflect.deleteProperty(target, key);
}

class MutationObserverMock {
  static instances: MutationObserverMock[] = [];

  readonly observations: {
    target: Node;
    options?: MutationObserverInit;
  }[] = [];
  readonly disconnect = vi.fn(() => {
    this.records = [];
  });
  readonly takeRecords = vi.fn(() => this.records.splice(0));

  private records: MutationRecord[] = [];

  constructor(private readonly callback: MutationCallback) {
    MutationObserverMock.instances.push(this);
  }

  observe(target: Node, options?: MutationObserverInit) {
    this.observations.push({ target, options });
  }

  queue(...records: MutationRecord[]) {
    this.records.push(...records);
  }

  notify(...records: MutationRecord[]) {
    this.callback(records, this as unknown as MutationObserver);
  }
}

const createMutationRecord = (
  target: HTMLElement,
  attributeName: A11yAttributeName
) =>
  ({
    attributeName,
    target,
    type: 'attributes',
  }) as unknown as MutationRecord;

describe('InheritAriaAttributesMixin', () => {
  let mixinModule: InheritAriaAttributesMixinModule;
  let observerModule: AriaAttributeObserverModule;
  let reportErrorMock: ReturnType<typeof vi.fn>;

  const createComponent = () => {
    class BaseComponent {
      hostElement?: HTMLStencilElement;
    }

    const MixedComponent =
      mixinModule.InheritAriaAttributesMixin(BaseComponent);
    const component = new MixedComponent();
    const hostElement = document.createElement(
      'div'
    ) as unknown as HTMLStencilElement;
    component.hostElement = hostElement;

    return { component, hostElement };
  };

  beforeEach(async () => {
    vi.resetModules();
    MutationObserverMock.instances = [];
    reportErrorMock = vi.fn();
    vi.doMock('@stencil/core', () => ({
      State: () => () => undefined,
    }));

    Object.defineProperty(globalThis, 'MutationObserver', {
      configurable: true,
      writable: true,
      value: MutationObserverMock,
    });
    Object.defineProperty(window, 'MutationObserver', {
      configurable: true,
      writable: true,
      value: MutationObserverMock,
    });
    Object.defineProperty(globalThis, 'reportError', {
      configurable: true,
      writable: true,
      value: reportErrorMock,
    });

    mixinModule = await import('../inherit-aria-attributes.mixin');
    observerModule = await import('../aria-attribute-observer');
  });

  afterEach(() => {
    vi.doUnmock('@stencil/core');
    restoreProperty(
      globalThis,
      'MutationObserver',
      originalGlobalMutationObserver
    );
    restoreProperty(window, 'MutationObserver', originalWindowMutationObserver);
    restoreProperty(globalThis, 'reportError', originalReportError);
    vi.restoreAllMocks();
  });

  it('forwards initial attributes and shares one observer between hosts', () => {
    const first = createComponent();
    const second = createComponent();
    first.hostElement.setAttribute('aria-label', 'First');
    second.hostElement.setAttribute('aria-label', 'Second');

    first.component.componentWillLoad();
    second.component.componentWillLoad();

    expect(first.component.inheritAriaAttributes).toEqual({
      'aria-label': 'First',
    });
    expect(second.component.inheritAriaAttributes).toEqual({
      'aria-label': 'Second',
    });
    expect(first.hostElement).not.toHaveAttribute('aria-label');
    expect(second.hostElement).not.toHaveAttribute('aria-label');

    expect(MutationObserverMock.instances).toHaveLength(1);
    const [observer] = MutationObserverMock.instances;
    expect(observer.observations).toHaveLength(2);
    expect(observer.observations[0]).toMatchObject({
      target: first.hostElement,
      options: {
        attributes: true,
      },
    });
    expect(observer.observations[0].options?.subtree).toBeUndefined();
    expect(observer.observations[0].options?.attributeFilter).toContain(
      'aria-label'
    );

    first.component.disconnectedCallback();
    expect(observer.disconnect).not.toHaveBeenCalled();
    second.component.disconnectedCallback();
    expect(observer.disconnect).toHaveBeenCalledOnce();
  });

  it('batches multiple mutations into one state update per host', () => {
    const { component, hostElement } = createComponent();
    component.componentWillLoad();
    const [observer] = MutationObserverMock.instances;

    let inheritedAttributes = component.inheritAriaAttributes;
    let stateUpdates = 0;
    Object.defineProperty(component, 'inheritAriaAttributes', {
      configurable: true,
      get: () => inheritedAttributes,
      set: (value) => {
        inheritedAttributes = value;
        stateUpdates++;
      },
    });

    hostElement.setAttribute('aria-label', 'Updated');
    hostElement.setAttribute('aria-level', '2');
    observer.notify(
      createMutationRecord(hostElement, 'aria-label'),
      createMutationRecord(hostElement, 'aria-level'),
      createMutationRecord(hostElement, 'aria-label')
    );

    expect(component.inheritAriaAttributes).toEqual({
      'aria-label': 'Updated',
      'aria-level': '2',
    });
    expect(stateUpdates).toBe(1);

    component.disconnectedCallback();
  });

  it('removes disconnected hosts from the weak handler registry', () => {
    const { component, hostElement } = createComponent();
    component.componentWillLoad();
    const [observer] = MutationObserverMock.instances;

    hostElement.setAttribute('aria-label', 'Queued');
    observer.queue(createMutationRecord(hostElement, 'aria-label'));
    component.disconnectedCallback();

    expect(component.inheritAriaAttributes['aria-label']).toBe('Queued');
    expect(observer.takeRecords).toHaveBeenCalled();
    expect(observer.disconnect).toHaveBeenCalledOnce();

    hostElement.setAttribute('aria-label', 'While disconnected');
    observer.notify(createMutationRecord(hostElement, 'aria-label'));
    expect(component.inheritAriaAttributes['aria-label']).toBe('Queued');

    component.connectedCallback();
    expect(component.inheritAriaAttributes['aria-label']).toBe(
      'While disconnected'
    );
    expect(MutationObserverMock.instances).toHaveLength(2);

    component.disconnectedCallback();
  });

  it('reconciles a removed and reapplied attribute after reconnect', () => {
    const { component, hostElement } = createComponent();
    hostElement.setAttribute('aria-label', 'Initial');
    component.componentWillLoad();

    component.disconnectedCallback();
    hostElement.removeAttribute('aria-label');
    expect(component.inheritAriaAttributes).toEqual({});

    hostElement.setAttribute('aria-label', 'Initial');
    component.connectedCallback();

    expect(component.inheritAriaAttributes).toEqual({
      'aria-label': 'Initial',
    });

    component.disconnectedCallback();
  });

  it('continues dispatching when one host handler throws', () => {
    const first = createComponent();
    const second = createComponent();
    first.component.componentWillLoad();
    second.component.componentWillLoad();
    const [observer] = MutationObserverMock.instances;
    const error = new Error('ARIA handler failed');
    first.component.getIgnoredAriaAttributes = () => {
      throw error;
    };

    first.hostElement.setAttribute('aria-label', 'First');
    second.hostElement.setAttribute('aria-label', 'Second');
    observer.notify(
      createMutationRecord(first.hostElement, 'aria-label'),
      createMutationRecord(second.hostElement, 'aria-label')
    );

    expect(reportErrorMock).toHaveBeenCalledWith(error);
    expect(second.component.inheritAriaAttributes).toEqual({
      'aria-label': 'Second',
    });

    first.component.getIgnoredAriaAttributes = () => [];
    first.component.disconnectedCallback();
    second.component.disconnectedCallback();
  });

  it('waits for the base componentWillLoad before initializing', async () => {
    let resolveBaseLoad!: () => void;
    const baseLoad = new Promise<void>((resolve) => {
      resolveBaseLoad = resolve;
    });
    class AsyncBaseComponent {
      hostElement?: HTMLStencilElement;

      componentWillLoad() {
        return baseLoad;
      }
    }
    const MixedComponent =
      mixinModule.InheritAriaAttributesMixin(AsyncBaseComponent);
    const component = new MixedComponent();
    component.hostElement = document.createElement(
      'div'
    ) as unknown as HTMLStencilElement;

    const componentLoad = component.componentWillLoad();
    expect(MutationObserverMock.instances).toHaveLength(0);

    resolveBaseLoad();
    await componentLoad;

    expect(MutationObserverMock.instances).toHaveLength(1);
    component.disconnectedCallback();
  });

  it('defers initialization when disconnected during an async base load', async () => {
    let resolveBaseLoad!: () => void;
    const baseLoad = new Promise<void>((resolve) => {
      resolveBaseLoad = resolve;
    });
    class AsyncBaseComponent {
      hostElement?: HTMLStencilElement;

      componentWillLoad() {
        return baseLoad;
      }
    }
    const MixedComponent =
      mixinModule.InheritAriaAttributesMixin(AsyncBaseComponent);
    const component = new MixedComponent();
    const hostElement = document.createElement(
      'div'
    ) as unknown as HTMLStencilElement;
    component.hostElement = hostElement;
    hostElement.setAttribute('aria-label', 'Deferred');

    const componentLoad = component.componentWillLoad();
    component.disconnectedCallback();
    resolveBaseLoad();
    await componentLoad;

    expect(MutationObserverMock.instances).toHaveLength(0);
    expect(hostElement.getAttribute('aria-label')).toBe('Deferred');

    component.connectedCallback();

    expect(component.inheritAriaAttributes).toEqual({
      'aria-label': 'Deferred',
    });
    expect(hostElement).not.toHaveAttribute('aria-label');
    expect(MutationObserverMock.instances).toHaveLength(1);

    component.disconnectedCallback();
  });

  it('does not restore a registration released during suppression', () => {
    const hostElement = document.createElement('div');
    const handler = vi.fn();
    observerModule.observeAriaAttributes(hostElement, handler);
    const [observer] = MutationObserverMock.instances;

    expect(() =>
      observerModule.runWithoutAriaAttributeObservation(hostElement, () =>
        observerModule.unobserveAriaAttributes(hostElement)
      )
    ).not.toThrow();

    expect(observer.disconnect).toHaveBeenCalledOnce();
    hostElement.setAttribute('aria-label', 'Ignored');
    observer.notify(createMutationRecord(hostElement, 'aria-label'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('does not process attributes removed during internal extraction', () => {
    const { component, hostElement } = createComponent();
    component.componentWillLoad();
    const [observer] = MutationObserverMock.instances;

    hostElement.setAttribute('aria-label', 'Extracted');
    observer.queue(createMutationRecord(hostElement, 'aria-label'));

    const removeAttribute = hostElement.removeAttribute.bind(hostElement);
    hostElement.removeAttribute = (attributeName) => {
      removeAttribute(attributeName);
      observer.queue(
        createMutationRecord(hostElement, attributeName as A11yAttributeName)
      );
    };

    const extractedAttributes = component.readAriaAttributesFromHost();

    expect(extractedAttributes).toEqual({ 'aria-label': 'Extracted' });
    expect(component.inheritAriaAttributes).toEqual({
      'aria-label': 'Extracted',
    });
    expect(hostElement).not.toHaveAttribute('aria-label');

    component.disconnectedCallback();
  });
});
