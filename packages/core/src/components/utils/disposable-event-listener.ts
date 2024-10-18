/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type DisposableEventListener = () => void;

export const addDisposableEventListener = (
  element: Element | Window | Document,
  eventType: string,
  callback: EventListenerOrEventListenerObject
): DisposableEventListener => {
  element.addEventListener(eventType, callback);

  return () => {
    element.removeEventListener(eventType, callback);
  };
};

export const addDisposableEventListenerAsArray = (
  listener: {
    element: Element | Window | Document;
    eventType: string;
    callback: EventListenerOrEventListenerObject;
  }[]
) => {
  const disposables = listener.map(({ callback, element, eventType }) =>
    addDisposableEventListener(element, eventType, callback)
  );

  return () => disposables.forEach((dispose) => dispose());
};
