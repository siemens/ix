/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export type Composition = 'top' | 'left' | 'bottom' | 'right';
export type ExpandedChangedEvent = {
  slot: string;
  expanded: boolean;
};
export type SlotChangedEvent = {
  slot: string;
  newSlot: string;
};
export type HideOnCollapseChangedEvent = {
  slot: string;
  hideOnCollapse: boolean;
};
export type VariantChangedEvent = {
  slot: string;
  variant: 'floating' | 'inline';
};
export type BorderlessChangedEvent = {
  slot: string;
  borderless: boolean;
};
