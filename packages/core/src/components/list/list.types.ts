/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type ListItemGap = 0 | 4 | 8 | 12;
export type ListDragBehavior = 'dynamic' | 'separator';

export type ListItemOrderChangeEvent = {
  item: HTMLIxListItemElement;
  oldIndex: number;
  newIndex: number;
};
