/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function generateUUID(): string {
  const randomValues = globalThis.crypto.getRandomValues(new Uint32Array(4));
  const randomString = Array.from(randomValues, (value) =>
    value.toString(36)
  ).join('');

  const timestampString = Date.now().toString(36);

  return randomString + timestampString;
}

export const createSequentialId = (prefix: string, sequenceId: number) => {
  return `${prefix}-${sequenceId++}`;
};
