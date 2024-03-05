/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export function waitForElement<R extends HTMLElement>(
  selector: string,
  doc: any,
  timeout = 3000
): Promise<R> {
  return new Promise<R>((resolve, reject) => {
    const startTime = Date.now();

    const checkIfElementExist = () => {
      const dialog = doc.querySelector(selector) satisfies R;

      if (dialog) {
        resolve(dialog);
      } else {
        if (Date.now() - startTime < timeout) {
          setTimeout(checkIfElementExist);
        } else {
          reject();
        }
      }
    };

    checkIfElementExist();
  });
}
