/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Placement } from './placement';

export function getAlignment(placement: Placement) {
  if (placement.includes('-end')) {
    return 'end';
  } else if (placement.includes('-start')) {
    return 'start';
  }

  return undefined;
}
