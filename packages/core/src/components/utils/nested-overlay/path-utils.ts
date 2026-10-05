/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function pathIncludesTrigger(
  eventTargets: EventTarget[],
  triggerAttribute: string
): HTMLElement | undefined {
  for (const eventTarget of eventTargets) {
    if (
      eventTarget instanceof HTMLElement &&
      eventTarget.hasAttribute(triggerAttribute)
    ) {
      return eventTarget;
    }
  }

  return undefined;
}
