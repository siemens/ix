/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type DismissAllOptions = {
  /**
   * Skip the outside-dismiss guard for these instance ids.
   * Escape handling passes all registered ids (same as legacy dropdown behavior).
   */
  ignorePolicyForIds?: string[];
  /** When true with a non-empty ignore list, only dismiss instances related in the hierarchy. */
  ignoreRelatedInHierarchy?: boolean;
};

export type OverlayDismissPolicy<T> = {
  /** When true, the instance is not closed on outside click / dismissOthers (unless policy is ignored). */
  blocksOutsideDismiss: (instance: T) => boolean;
};
