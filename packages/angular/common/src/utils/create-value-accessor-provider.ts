/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export function createValueAccessorProvider(useExisting: any): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting,
    multi: true,
  };
}
