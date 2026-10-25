/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * SSR-safe replacement for the browser build of
 * `decode-named-character-reference`, which touches `document` at module load.
 * The decoding element is created on first use instead.
 */
let element: HTMLElement | undefined;

export function decodeNamedCharacterReference(value: string): string | false {
  element ??= document.createElement('i');
  const characterReference = '&' + value + ';';
  element.innerHTML = characterReference;
  const character = element.textContent ?? '';

  // References without a required semicolon (e.g. `&not`) would otherwise
  // match a longer name like `&notit;` partially.
  if (character.charCodeAt(character.length - 1) === 59 && value !== 'semi') {
    return false;
  }

  return character === characterReference ? false : character;
}
