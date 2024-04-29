/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { getElement } from '@stencil/core';

export type ListenerOptions = {
  target?: 'window';
  defaultEnabled?: boolean;
};

const defaultOptions: ListenerOptions = {
  target: 'window',
  defaultEnabled: true,
};

export function createListener(event: string, options: ListenerOptions = {}) {
  const opts = {
    ...defaultOptions,
    ...options,
  };

  let callback: any;
  const onEvent = (event: Event) => {
    callback(event);
  };

  const resultObject = {
    on: (onEventCallback: any) => {
      callback = onEventCallback;
    },

    isEnabled: opts.defaultEnabled,

    enable: (state?: boolean) => {
      resultObject.isEnabled = state;

      if (state) {
        addEventListener(event, onEvent);
      } else {
        removeEventListener(event, onEvent);
      }
    },

    destroy: () => {
      resultObject.enable(false);
    },
  };

  resultObject.enable(opts.defaultEnabled);
  return resultObject;
}

export function OnListener<T>(event: string, fnExp?: (self: T) => boolean) {
  return (proto: any, methodName: string) => {
    const { componentWillLoad, componentWillRender, disconnectedCallback } =
      proto;

    if (fnExp) {
      proto.componentWillRender = function () {
        const host = getElement(this);
        (host as any)[`__ix__${methodName}`]?.enable(fnExp(this));
        return componentWillRender && componentWillRender.call(this);
      };
    }

    proto.componentWillLoad = function () {
      const listener = createListener(event);
      const host = getElement(this);
      const method = this[methodName];

      (host as any)[`__ix__${methodName}`] = listener;

      listener.on(method.bind(this));
      return componentWillLoad && componentWillLoad.call(this);
    };

    proto.disconnectedCallback = function () {
      const host = getElement(this);

      if (host && (host as any)[`__ix__${methodName}`]) {
        (host as any)[`__ix__${methodName}`]?.destroy();
        (host as any)[`__ix__${methodName}`] = null;
      }

      return disconnectedCallback && disconnectedCallback.call(this);
    };
  };
}
