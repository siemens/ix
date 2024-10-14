/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type MakeRef<T> = {
  (ref: T | undefined): void;
  current: T | null;
  waitForCurrent(): Promise<T>;
};

type Resolve<T> = (value: T) => void;

export function makeRef<T>(
  currentChangedCallback?: (element: T) => void
): MakeRef<T> {
  let resolve: Resolve<T> | undefined = undefined;
  let currentPromise = new Promise<T>((res) => (resolve = res));
  let current: T | undefined = undefined;

  const setRefFunction = (ref: T | undefined) => {
    if (ref === undefined) {
      return;
    }
    current = (setRefFunction as MakeRef<T>).current = ref;
    currentChangedCallback?.(ref);
    resolve?.(ref);
  };

  setRefFunction.current = current as T | null;

  setRefFunction.waitForCurrent = async () => {
    await currentPromise;
    return current;
  };

  return setRefFunction as MakeRef<T>;
}
