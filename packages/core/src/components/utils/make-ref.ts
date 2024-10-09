/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type MakeRef<T> = {
  (ref: T): void;
  current: T;
  waitForCurrent(): Promise<T>;
};

export function makeRef<T>(
  currentChangedCallback?: (element: T) => void
): MakeRef<T> {
  let resolve = null;
  let currentPromise = new Promise((res) => (resolve = res));
  let current: T = null;

  const setRefFunction = (ref: T) => {
    current = ref;
    currentChangedCallback?.(ref);
    resolve();
  };

  setRefFunction.current = current;
  setRefFunction.waitForCurrent = async () => {
    await currentPromise;
    return current;
  };

  Object.defineProperty(setRefFunction, 'current', {
    get() {
      return current;
    },
  });

  return setRefFunction;
}
