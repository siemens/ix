import { p as parseWithLocale, c as convertDateFormat, f as formatWithLocale, D as DateTime } from "./date-time-locale-C13R3CVg-B8iN9_Qn.js";
const MERGEABLE_UNITS = [
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function getDisplayFormatParts(format, locale) {
  const sample = formatWithLocale(DateTime.local(2e3, 1, 1), format, locale);
  const { result, tokens } = DateTime.fromFormatExplain(sample, format, {
    locale
  });
  if (!result) {
    return void 0;
  }
  const units = Object.keys(result);
  const isMergeable = units.every((unit) => unit === "weekday" || MERGEABLE_UNITS.includes(unit));
  if (!isMergeable) {
    return void 0;
  }
  const twoDigitYear = tokens.some((token) => !token.literal && token.val === "yy");
  return {
    units: MERGEABLE_UNITS.filter((unit) => unit in result),
    twoDigitYearTokens: twoDigitYear ? tokens : void 0
  };
}
function getClosestYear(twoDigitYear, referenceYear) {
  const year = referenceYear - referenceYear % 100 + twoDigitYear;
  if (year - referenceYear > 50) {
    return year - 100;
  }
  if (referenceYear - year > 50) {
    return year + 100;
  }
  return year;
}
class DateDisplayFormat {
  host;
  reference;
  typedValue;
  unparsableText;
  partsCache;
  constructor(host) {
    this.host = host;
  }
  get format() {
    return this.host.displayFormat ?? this.host.format;
  }
  /**
   * Text to display for the current value. Also remembers the value as
   * reference for typed text.
   */
  toText() {
    const { value = "", format, locale } = this.host;
    const date = parseWithLocale(value, format, locale);
    this.reference = date.isValid ? date : void 0;
    this.typedValue = void 0;
    this.unparsableText = void 0;
    return convertDateFormat(value, format, this.format, locale);
  }
  /**
   * Value in `format` for text typed in `displayFormat`. The text is returned
   * unchanged if it does not match `displayFormat`, see {@link parseValue}.
   */
  toValue(text) {
    const { format, locale } = this.host;
    let value = text;
    this.unparsableText = void 0;
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
  parseValue(value) {
    if (this.isUnparsableText(value)) {
      return DateTime.invalid("unparsable");
    }
    return parseWithLocale(value, this.host.format, this.host.locale);
  }
  /**
   * Whether `value` is the result of the last {@link toValue} call, i.e. the
   * input text must be kept instead of being reformatted while typing.
   */
  isTypedValue(value) {
    return this.typedValue !== void 0 && value === this.typedValue;
  }
  /** Whether `value` is typed text which does not match `displayFormat` */
  isUnparsableText(value) {
    return this.unparsableText !== void 0 && value === this.unparsableText;
  }
  /**
   * Parse text typed in `displayFormat`. Units missing in the text are merged
   * from the reference before the date is validated, so e.g. a leap day is
   * valid if the reference is in a leap year.
   */
  parseText(text) {
    const { locale } = this.host;
    const parts = this.getParts();
    if (!parts || !this.reference) {
      const date = parseWithLocale(text, this.format, locale);
      return !date.isValid || this.hasTypedTwoDigitYear(text, date.year) ? date : DateTime.invalid("unparsable");
    }
    const { rawMatches, result, zone } = DateTime.fromFormatExplain(text, this.format, { locale });
    if (!rawMatches || !result || !this.hasTypedTwoDigitYear(text, result.year)) {
      return DateTime.invalid("unparsable");
    }
    return this.mergeWithReference(result, parts, this.reference, zone);
  }
  /**
   * Luxon also parses three- and four-digit years for `yy`, which would not
   * look like `displayFormat`. Check that the year was typed with two digits
   * by parsing the text again with the parsed year as literal.
   */
  hasTypedTwoDigitYear(text, parsedYear) {
    const tokens = this.getParts()?.twoDigitYearTokens;
    if (parsedYear === void 0 || !tokens) {
      return true;
    }
    const year = String(parsedYear % 100).padStart(2, "0");
    const format = tokens.map((token) => {
      if (token.literal) {
        return `'${token.val}'`;
      }
      return token.val === "yy" ? `'${year}'` : token.val;
    }).join("");
    return !!DateTime.fromFormatExplain(text, format, {
      locale: this.host.locale
    }).rawMatches;
  }
  /**
   * A zone typed in `displayFormat` (e.g. `ZZ` or `z`) applies to the typed
   * units, so the result is the typed instant in the zone of the reference.
   */
  mergeWithReference(parsed, parts, reference, parsedZone) {
    const units = {};
    parts.units.forEach((unit) => units[unit] = parsed[unit]);
    if (parts.twoDigitYearTokens && units.year !== void 0) {
      units.year = getClosestYear(units.year % 100, reference.year);
    }
    const zone = parsedZone ?? reference.zone;
    const merged = reference.setZone(zone).set(units);
    return DateTime.fromObject({ ...merged.toObject(), ...units, weekday: parsed.weekday }, { zone, locale: reference.locale ?? void 0 }).setZone(reference.zone);
  }
  getParts() {
    const { format } = this;
    const { locale } = this.host;
    if (this.partsCache?.format !== format || this.partsCache.locale !== locale) {
      this.partsCache = {
        format,
        locale,
        parts: getDisplayFormatParts(format, locale)
      };
    }
    return this.partsCache.parts;
  }
}
export {
  DateDisplayFormat as D
};
