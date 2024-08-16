/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TypedEvent } from './typed-event';

/**
 * A Context object defines an optional initial value for a Context, as well as a name identifier for debugging purposes.
 */
export type Context<T> = {
  name: string;
  initialValue?: T;
};

/**
 * An unknown context type
 */
export type UnknownContext = Context<unknown>;

/**
 * A helper type which can extract a Context value type from a Context type
 */
export type ContextType<T extends UnknownContext> =
  T extends Context<infer Y> ? Y : never;

/**
 * A function which creates a Context value object
 */
export function createContext<T>(
  name: string,
  initialValue?: T
): Readonly<Context<T>> {
  return {
    name,
    initialValue,
  };
}

/**
 * A callback which is provided by a context requester and is called with the value satisfying the request.
 * This callback can be called multiple times by context providers as the requested value is changed.
 */
export type ContextCallback<ValueType> = (
  value: ValueType,
  unsubscribe?: () => void
) => void;

/**
 * An event fired by a context requester to signal it desires a named context.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 *
 * If the requested context event contains a truthy `subscribe` value, then a provider can call the callback
 * multiple times if the value is changed, if this is the case the provider should pass an `unsubscribe`
 * function to the callback which requesters can invoke to indicate they no longer wish to receive these updates.
 */
export class ContextEvent<T extends UnknownContext> extends Event {
  public constructor(
    public readonly context: T,
    public readonly callback: ContextCallback<ContextType<T>>,
    public readonly subscribe?: boolean
  ) {
    super('context-request', { bubbles: true, composed: true });
  }
}

declare global {
  interface HTMLElementEventMap {
    /**
     * A 'context-request' event can be emitted by any element which desires
     * a context value to be injected by an external provider.
     */
    'context-request': ContextEvent<UnknownContext>;
  }
}

export type ContextConsumerSubscription = {
  unsubscribe: () => void;
};

export function useContextConsumer<
  T extends HTMLElement,
  C extends UnknownContext,
>(
  hostElement: T,
  context: C,
  onContextReceived: (
    context: ContextType<C>,
    unsubscribe?: () => void
  ) => void,
  subscribe?: boolean
): ContextConsumerSubscription {
  let _unsubscribe: () => void;
  hostElement.dispatchEvent(
    new ContextEvent(
      context,
      (ctx, unSub) => {
        onContextReceived(ctx, unSub);
        _unsubscribe = unSub;
      },
      subscribe
    )
  );

  return {
    unsubscribe: () => {
      _unsubscribe();
    },
  };
}
export type ContextProvider<C extends Context<{}> = Context<any>> = {
  emit: (context: ContextType<C>) => void;
};

export function useContextProvider<
  X extends {},
  C extends Context<X>,
  T extends HTMLElement = HTMLElement,
>(
  hostElement: T,
  context: C,
  contextPayload?: ContextType<C>
): ContextProvider<C> {
  const requestContext = new TypedEvent<ContextEvent<C>>();
  const updateContext = new TypedEvent<ContextType<C>>();

  const requests = new Set<ContextEvent<UnknownContext>>();

  hostElement.addEventListener(
    'context-request',
    (requestContextEvent: ContextEvent<C>) => {
      if (requestContextEvent?.context.name !== context.name) {
        return;
      }

      requestContextEvent.stopPropagation();

      if (requestContextEvent.subscribe) {
        requests.add(requestContextEvent);
      }
      requestContext.emit(requestContextEvent);

      if (contextPayload) {
        requestContextEvent.callback(contextPayload, () => {
          requests.delete(requestContextEvent);
        });
      }
    }
  );

  updateContext.on((context: ContextType<C>) => {
    requests.forEach((r) =>
      r.callback(context, () => {
        requests.delete(r);
      })
    );
  });

  return {
    emit: (context: ContextType<C>) => {
      updateContext.emit(context);
    },
  };
}
