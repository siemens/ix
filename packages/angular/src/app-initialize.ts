// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';

let didInitialize = false;

export const appInitialize = (doc: Document) => {
  return () => {
    const win: Window | undefined = doc.defaultView as any;
    if (win && typeof (window as any) !== 'undefined') {
      if (didInitialize) {
        return;
      }

      didInitialize = true;

      applyPolyfills().then(() => {
        return defineCustomElements();
      });
    }
  };
};
