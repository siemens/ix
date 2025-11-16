/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type TimePickerDescriptorUnit =
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond'
  | 'timeReference';

export interface TimePickerDescriptor {
  unit: TimePickerDescriptorUnit;
  header: string;
  hidden: boolean;
  values: number[] | string[];
  selectedValue: number | string;
  focusedValue: number | string;
  scrollable: boolean;
  interval?: number;
  formatValue?: (val: number | string) => string;
}

export interface TimeOutputFormat {
  hour: string;
  minute: string;
  second: string;
  millisecond: string;
}

export type TimePickerCorners = 'rounded' | 'straight';

export const LUXON_FORMAT_PATTERNS = {
  // h, hh, H, HH and various time formats that include hours
  hours: /\b[Hh]\b|HH|hh|H{3,4}|h{3,4}|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // m, mm and time formats that include minutes
  minutes: /\bm\b|mm|t|tt|ttt|tttt|T|TT|TTT|TTTT/,
  // s, ss and time formats that include seconds
  seconds: /\bs\b|ss|tt|ttt|tttt|TT|TTT|TTTT/,
  // S, SSS (milliseconds), u/uu/uuu (fractional seconds), x/X (timestamps)
  milliseconds: /\bS\b|SSS|u|uu|uuu/,
};
