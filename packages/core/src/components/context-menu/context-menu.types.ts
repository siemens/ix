/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type ContextMenuOpenEventDetail = {
  /**
   * The `contextmenu` event that requested the context menu.
   * Its `target` is the element that was right-clicked.
   */
  originalEvent: MouseEvent;

  /**
   * The target element the context menu is registered on.
   */
  target: HTMLElement;
};
