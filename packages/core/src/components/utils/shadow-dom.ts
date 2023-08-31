/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function closestElement(selector: string, el: any) {
  return (
    el.closest(selector) ||
    closestElement(selector, (el.getRootNode() as any).host)
  );
}

export function getSlottedElements<R = any>(slot: any): R[] {
  return slot.assignedElements({ flatten: true });
}

export function hasSlottedElements(slot: any) {
  if (!slot) {
    return false;
  }
  return slot.assignedElements({ flatten: true }).length !== 0;
}
