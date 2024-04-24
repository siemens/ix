/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function createEnterLeaveDebounce(
  enterCallback: Function,
  leaveCallback: Function,
  {
    debounceTimeEnter,
    debounceTimeLeave,
  }: {
    debounceTimeEnter: number;
    debounceTimeLeave: number;
  } = {
    debounceTimeEnter: 0,
    debounceTimeLeave: 500,
  }
) {
  let enterTimeout: NodeJS.Timeout;
  let leaveTimeout: NodeJS.Timeout;

  return {
    onEnter: () => {
      clearTimeout(leaveTimeout);
      enterTimeout = setTimeout(() => {
        enterCallback();
      }, debounceTimeEnter);
    },
    onLeave: () => {
      clearTimeout(enterTimeout);
      leaveTimeout = setTimeout(() => {
        leaveCallback();
      }, debounceTimeLeave);
    },
  };
}
