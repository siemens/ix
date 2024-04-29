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
  currentChangedCallback?: (element: T | undefined) => void
): MakeRef<T | undefined> {
  let resolve: (value: void | PromiseLike<void>) => void;
  let currentPromise = new Promise<void>((res) => (resolve = res));
  let current: T | undefined;

  const setRefFunction = (ref: T | undefined) => {
    current = ref;
    currentChangedCallback?.(ref);
    resolve?.();
  };

  setRefFunction.current = current;
  setRefFunction.waitForCurrent = async () => {
    await currentPromise;
    return current;
  };

  return setRefFunction;
}
