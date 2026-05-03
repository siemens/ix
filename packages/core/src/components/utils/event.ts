/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EventEmitter } from '@stencil/core/internal';

export function emitEvent<T>(
  action: () => { new: T; old: T },
  emitter: EventEmitter<T>,
  rollback: (oldValue: T) => void
) {
  const result = action();
  const { defaultPrevented } = emitter.emit(result.new);

  if (defaultPrevented) {
    rollback(result.old);
  }
  return result;
}
