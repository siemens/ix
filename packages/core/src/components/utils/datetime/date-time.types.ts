/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * A range from `from` to `to`, e.g. of Luxon `DateTime`s or formatted date
 * strings. Either end may be unset, e.g. while only a start date is picked.
 */
export type DateRange<T> = {
  from?: T;
  to?: T;
};

/** A range of formatted dates with their ISO 8601 dates. */
export type DateRangeWithIso = DateRange<string> & {
  isoFrom?: string;
  isoTo?: string;
};
