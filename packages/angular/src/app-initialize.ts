/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { defineCustomElements as iconsDefineCustomElements } from '@siemens/ix-icons/loader';
import { defineCustomElements } from '@siemens/ix/loader';

let didInitialize = false;

export const appInitialize = (preloadIcons?: () => void) => (doc: Document) => {
  return () => {
    const win: Window | undefined = doc.defaultView as any;
    if (win && typeof (window as any) !== 'undefined') {
      if (didInitialize) {
        return;
      }

      if (preloadIcons) {
        preloadIcons();
      }

      didInitialize = true;

      iconsDefineCustomElements();
      defineCustomElements();
    }
  };
};
