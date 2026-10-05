/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect, Locator, Page } from '@playwright/test';
import { DateTime } from 'luxon';
import { formatWithLocale } from '../../../components/utils/date-time-locale';
import type { Mount } from './page';

/**
 * Helpers for date and time component tests. Define test dates once as Luxon
 * `DateTime` values and derive mount attributes, locators and expected values
 * from them, so the dates can be changed in one place.
 */

/** Default `format` of the date components. */
export const DEFAULT_DATE_FORMAT = 'yyyy/LL/dd';

/** Default `format` of `ix-datetime-input`. */
export const DEFAULT_DATETIME_FORMAT = 'yyyy/LL/dd HH:mm:ss';

/** {@link formatWithLocale} with the default date format of the components. */
export const formatDateTime = (
  date: DateTime,
  format: string = DEFAULT_DATE_FORMAT,
  locale?: string
) => formatWithLocale(date, format, locale);

/** Trigger label of `ix-date-dropdown` for a range, e.g. "2024/05/10 - 2024/05/12". */
export const formatDateRange = (
  from: DateTime,
  to: DateTime,
  format: string = DEFAULT_DATE_FORMAT
) => `${formatDateTime(from, format)} - ${formatDateTime(to, format)}`;

/**
 * Expected `DateChangeEvent` payload of a date picker. Leave out `to` in
 * single selection mode.
 */
export const dateChangeDetail = (
  from: DateTime,
  to?: DateTime,
  format: string = DEFAULT_DATE_FORMAT
) => ({
  from: formatDateTime(from, format),
  isoFrom: from.toISODate(),
  ...(to ? { to: formatDateTime(to, format), isoTo: to.toISODate() } : {}),
});

/** Day cell of a date picker inside `scope`, e.g. the cell named "20 May 2024". */
export const calendarDayCell = (scope: Locator, date: DateTime) =>
  scope.getByRole('gridcell', {
    name: date.toFormat('d MMMM yyyy', { locale: 'en' }),
    exact: true,
  });

export type TimePickerUnit = 'hr' | 'min' | 'sec';

/** Option of a time picker column inside `scope`, e.g. the option named "hr: 11". */
export const timePickerCell = (
  scope: Locator,
  unit: TimePickerUnit,
  value: number
) =>
  scope.getByRole('option', {
    name: `${unit}: ${value}`,
    exact: true,
  });

/** Hour option of a time picker for the hour of `time`. */
export const timePickerHourCell = (scope: Locator, time: DateTime) =>
  timePickerCell(scope, 'hr', time.hour);

export type MountAttributes = Record<string, string | boolean | undefined>;

/**
 * Mounts `<tag ...attributes>` and waits until it is hydrated. `true` renders
 * a boolean attribute; `false` and `undefined` leave the attribute out.
 */
export const mountHydrated = async (
  mount: Mount,
  page: Page,
  tag: string,
  attributes: MountAttributes = {}
) => {
  const attributeString = Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== false)
    .map(([name, value]) => (value === true ? name : `${name}="${value}"`))
    .join(' ');

  await mount(`<${tag} ${attributeString}></${tag}>`);

  const host = page.locator(tag).first();
  await expect(host).toHaveClass(/hydrated/);
  return host;
};

/** Ways to close a picker dropdown without confirming the pending selection. */
export const PENDING_SELECTION_DISMISSALS = [
  'cancel button',
  'escape',
  'outside click',
] as const;

export type PendingSelectionDismissal =
  (typeof PENDING_SELECTION_DISMISSALS)[number];

/**
 * Accessor for a component that shows its picker in a dropdown, such as
 * `ix-date-input` or `ix-date-dropdown`.
 */
export const createDropdownPickerAccessor = (
  page: Page,
  options: {
    host: string;
    trigger: (host: Locator) => Locator;
    dropdown: (host: Locator) => Locator;
  }
) => {
  const host = page.locator(options.host);
  const dropdown = options.dropdown(host);

  return {
    host,
    open: async () => {
      await options.trigger(host).click();
      await expect(dropdown).toHaveClass(/show/);
    },
    expectOpen: () => expect(dropdown).toHaveClass(/show/),
    expectClosed: () => expect(dropdown).not.toHaveClass(/show/),
    dismiss: async (dismissal: PendingSelectionDismissal) => {
      switch (dismissal) {
        case 'cancel button':
          return host.getByTestId('cancel').click();
        case 'escape':
          return page.keyboard.press('Escape');
        case 'outside click':
          return page.mouse.click(1200, 700);
      }
    },
  };
};
