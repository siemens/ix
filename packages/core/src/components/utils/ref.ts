// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

export interface CreateRef<T = HTMLElement> {
  (newRef: T): void;
  current: Promise<T>;
  _ref: T;
}

export function createRef<T = HTMLElement>(): CreateRef<T> {
  let ref: T;
  let resolveFn: (value: T | PromiseLike<T>) => void;

  const updateRef = (newRef: T) => {
    ref = newRef;
    resolveFn(ref);
  };

  updateRef.current = new Promise<T>(r => (resolveFn = r));

  Object.defineProperty(updateRef, 'current', {
    get: () => {
      const promise = new Promise<T>(r => (resolveFn = r));
      if (ref) {
        resolveFn(ref);
      }
      return promise;
    },
  });

  updateRef._ref = ref;
  return updateRef;
}
