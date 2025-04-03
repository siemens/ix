/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export function fromKebabCaseToCamelCase(str: string): string {
  const camelCase = str
    .split('-')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');

  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
}

export function capitalize(
  input: string,
  firstLetterOnly = false
): string {
  if (!input) {
    return input;
  }

  const firstLetter = input[0].toUpperCase();
  const tail = firstLetterOnly ? input.slice(1) : input.slice(1).toLowerCase();

  return firstLetter + tail;
}
