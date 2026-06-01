/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Luxon format patterns used to decide which time-picker columns are shown.
 */
export const LUXON_FORMAT_PATTERNS = {
  // h, hh, H, HH and various time formats that include hours
  hours: /\b[Hh]\b|HH|hh|H{3,4}|h{3,4}|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // m, mm and time formats that include minutes
  minutes: /\bm\b|mm|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // s, ss and time formats that include seconds
  seconds: /\bs\b|ss|tt|ttt|tttt|TT|TTT|TTTT/,
  // S–SSS, u–uuu (fractional seconds); ttt/tttt/TTT/TTTT include sub-second parts
  milliseconds: /S{1,3}|u{1,3}|[tT]{3,4}/,
};

/**
 * Whether the Luxon format string uses 12-hour clock semantics for the picker.
 */
export function isFormat12Hour(format: string): boolean {
  // Remove any text that's inside quotes (literal text in Luxon format strings)
  let cleanFormat = '';
  let inQuote = false;

  for (const char of format) {
    if (char === "'") {
      inQuote = !inQuote;
    } else if (!inQuote) {
      cleanFormat += char;
    }
  }

  // Check for specific 12-hour format tokens
  // Case-sensitive matching to distinguish between 'h' and 'H'
  return /[hat]/.test(cleanFormat);
}
