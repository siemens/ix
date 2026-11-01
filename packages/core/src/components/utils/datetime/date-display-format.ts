/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { DateTime, WeekdayNumbers } from 'luxon';
import {
  convertDateFormat,
  formatWithLocale,
  parseWithLocale,
} from './date-time-locale';

export type DateDisplayFormatHost = {
  value?: string;
  format: string;
  displayFormat?: string;
  locale?: string;
};

const MERGEABLE_UNITS = [
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'millisecond',
] as const;

type MergeableUnit = (typeof MERGEABLE_UNITS)[number];

type FormatToken = { literal: boolean; val: string };

type DisplayFormatParts = {
  units: MergeableUnit[];
  /** Tokens of the format if it contains a two-digit year */
  twoDigitYearTokens?: FormatToken[];
};

/**
 * Detect which date and time units a format contains. Returns `undefined`
 * for week-based or ordinal formats, which cannot be merged into a calendar date.
 */
function getDisplayFormatParts(
  format: string,
  locale?: string
): DisplayFormatParts | undefined {
  const sample = formatWithLocale(DateTime.local(2000, 1, 1), format, locale);
  const { result, tokens } = DateTime.fromFormatExplain(sample, format, {
    locale,
  });

  if (!result) {
    return undefined;
  }

  const units = Object.keys(result);
  const isMergeable = units.every(
    (unit) =>
      unit === 'weekday' || MERGEABLE_UNITS.includes(unit as MergeableUnit)
  );

  if (!isMergeable) {
    return undefined;
  }

  const twoDigitYear = tokens.some(
    (token) => !token.literal && token.val === 'yy'
  );

  return {
    units: MERGEABLE_UNITS.filter((unit) => unit in result),
    twoDigitYearTokens: twoDigitYear ? tokens : undefined,
  };
}

/**
 * Year ending in `twoDigitYear` which is closest to `referenceYear`, e.g.
 * `00` resolves to 2000 for 1999 instead of 1900.
 */
function getClosestYear(twoDigitYear: number, referenceYear: number): number {
  const year = referenceYear - (referenceYear % 100) + twoDigitYear;

  if (year - referenceYear > 50) {
    return year - 100;
  }

  if (referenceYear - year > 50) {
    return year + 100;
  }

  return year;
}

/**
 * Converts between the `value` of a date input (in `format`) and the text
 * shown in its input field (in `displayFormat`).
 *
 * Units that `displayFormat` does not contain, e.g. seconds, are taken from
 * the last valid value, so they are not lost when the user types a date in a
 * less precise `displayFormat`. A two-digit year resolves to the year closest
 * to the last valid value.
 */
export class DateDisplayFormat {
  private reference?: DateTime;
  private typedValue?: string;
  private unparsableText?: string;
  private partsCache?: {
    format: string;
    locale?: string;
    parts?: DisplayFormatParts;
  };

  constructor(private readonly host: DateDisplayFormatHost) {}

  get format(): string {
    return this.host.displayFormat ?? this.host.format;
  }

  /**
   * Text to display for the current value. Also remembers the value as
   * reference for typed text.
   */
  toText(): string {
    const { value = '', format, locale } = this.host;
    const date = parseWithLocale(value, format, locale);

    this.reference = date.isValid ? date : undefined;
    this.typedValue = undefined;
    this.unparsableText = undefined;

    return convertDateFormat(value, format, this.format, locale);
  }

  /**
   * Value in `format` for text typed in `displayFormat`. The text is returned
   * unchanged if it does not match `displayFormat`, see {@link parseValue}.
   */
  toValue(text: string): string {
    const { format, locale } = this.host;
    let value = text;
    this.unparsableText = undefined;

    if (text && this.format !== format) {
      const date = this.parseText(text);

      if (date.isValid) {
        this.reference = date;
        value = formatWithLocale(date, format, locale);
      } else {
        this.unparsableText = text;
      }
    }

    this.typedValue = value;
    return value;
  }

  /**
   * Parse `value` with `format`. Typed text which does not match
   * `displayFormat` is invalid, even if it happens to match `format`.
   */
  parseValue(value: string): DateTime {
    if (this.isUnparsableText(value)) {
      return DateTime.invalid('unparsable');
    }

    return parseWithLocale(value, this.host.format, this.host.locale);
  }

  /**
   * Whether `value` is the result of the last {@link toValue} call, i.e. the
   * input text must be kept instead of being reformatted while typing.
   */
  isTypedValue(value?: string): boolean {
    return this.typedValue !== undefined && value === this.typedValue;
  }

  /** Whether `value` is typed text which does not match `displayFormat` */
  isUnparsableText(value?: string): boolean {
    return this.unparsableText !== undefined && value === this.unparsableText;
  }

  /**
   * Parse text typed in `displayFormat`. Units missing in the text are merged
   * from the reference before the date is validated, so e.g. a leap day is
   * valid if the reference is in a leap year.
   */
  private parseText(text: string): DateTime {
    const { locale } = this.host;
    const parts = this.getParts();

    if (!parts || !this.reference) {
      const date = parseWithLocale(text, this.format, locale);
      return !date.isValid || this.hasTypedTwoDigitYear(text, date.year)
        ? date
        : DateTime.invalid('unparsable');
    }

    const { rawMatches, result } = DateTime.fromFormatExplain(
      text,
      this.format,
      { locale }
    );

    if (
      !rawMatches ||
      !result ||
      !this.hasTypedTwoDigitYear(text, result.year)
    ) {
      return DateTime.invalid('unparsable');
    }

    return this.mergeWithReference(result, parts, this.reference);
  }

  /**
   * Luxon also parses three- and four-digit years for `yy`, which would not
   * look like `displayFormat`. Check that the year was typed with two digits
   * by parsing the text again with the parsed year as literal.
   */
  private hasTypedTwoDigitYear(text: string, parsedYear?: number): boolean {
    const tokens = this.getParts()?.twoDigitYearTokens;

    if (parsedYear === undefined || !tokens) {
      return true;
    }

    const year = String(parsedYear % 100).padStart(2, '0');
    const format = tokens
      .map((token) => {
        if (token.literal) {
          return `'${token.val}'`;
        }
        return token.val === 'yy' ? `'${year}'` : token.val;
      })
      .join('');

    return !!DateTime.fromFormatExplain(text, format, {
      locale: this.host.locale,
    }).rawMatches;
  }

  private mergeWithReference(
    parsed: Partial<Record<MergeableUnit, number>> & {
      weekday?: WeekdayNumbers;
    },
    parts: DisplayFormatParts,
    reference: DateTime
  ): DateTime {
    const units: Partial<Record<MergeableUnit, number>> = {};
    parts.units.forEach((unit) => (units[unit] = parsed[unit]));

    if (parts.twoDigitYearTokens && units.year !== undefined) {
      units.year = getClosestYear(units.year % 100, reference.year);
    }

    const merged = reference.set(units);

    return DateTime.fromObject(
      { ...merged.toObject(), ...units, weekday: parsed.weekday },
      { zone: reference.zone, locale: reference.locale ?? undefined }
    );
  }

  private getParts(): DisplayFormatParts | undefined {
    const { format } = this;
    const { locale } = this.host;

    if (
      this.partsCache?.format !== format ||
      this.partsCache.locale !== locale
    ) {
      this.partsCache = {
        format,
        locale,
        parts: getDisplayFormatParts(format, locale),
      };
    }

    return this.partsCache.parts;
  }
}
