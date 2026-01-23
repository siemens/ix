# DateTime Input - Props Reference

**Component:** `ix-datetime-input`  
**Last Updated:** January 25, 2026

---

## Props Overview (28 total)

| #   | Prop Name                      | Type               | Default                    | Source                     | Category   | Description                                                                        |
| --- | ------------------------------ | ------------------ | -------------------------- | -------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| 1   | `name`                         | `string?`          | `undefined`                | `date-input`, `time-input` | Basic      | Form control name for submission                                                   |
| 2   | `value`                        | `string?`          | `undefined`                | `date-input`, `time-input` | Basic      | Datetime value in display format (e.g., "2026/01/25 14:30:00" for default formats) |
| 3   | `placeholder`                  | `string?`          | `undefined`                | `date-input`, `time-input` | Basic      | Placeholder text when empty                                                        |
| 4   | `dateFormat`                   | `string`           | `'yyyy/LL/dd'`             | `date-input`               | Formatting | Luxon date format for display                                                      |
| 5   | `timeFormat`                   | `string`           | `'HH:mm:ss'`               | `time-input`               | Formatting | Luxon time format for display                                                      |
| 6   | `locale`                       | `string?`          | `undefined`                | `date-input`, `time-input` | Formatting | BCP 47 locale (e.g., `'en-US'`, `'de-DE'`)                                         |
| 7   | `required`                     | `boolean`          | `false`                    | `date-input`, `time-input` | Validation | Mark field as required                                                             |
| 8   | `disabled`                     | `boolean`          | `false`                    | `date-input`, `time-input` | Validation | Disable input (grayed out, icon visible)                                           |
| 9   | `readonly`                     | `boolean`          | `false`                    | `date-input`, `time-input` | Validation | Read-only (icon hidden, value submitted)                                           |
| 10  | `minDate`                      | `string?`          | `undefined`                | `date-input`               | Validation | Minimum allowed date (date format only, e.g., "2026/01/20")                        |
| 11  | `maxDate`                      | `string?`          | `undefined`                | `date-input`               | Validation | Maximum allowed date (date format only, e.g., "2026/12/31")                        |
| 12  | `label`                        | `string?`          | `undefined`                | `date-input`, `time-input` | Labels     | Label text above input                                                             |
| 13  | `helperText`                   | `string?`          | `undefined`                | `date-input`, `time-input` | Labels     | Helper text below input or tooltip                                                 |
| 14  | `invalidText`                  | `string?`          | `undefined`                | `date-input`, `time-input` | Labels     | Validation error message (red)                                                     |
| 15  | `infoText`                     | `string?`          | `undefined`                | `date-input`, `time-input` | Labels     | Informational message (blue)                                                       |
| 16  | `warningText`                  | `string?`          | `undefined`                | `date-input`, `time-input` | Labels     | Warning message (orange)                                                           |
| 17  | `validText`                    | `string?`          | `undefined`                | `date-input`, `time-input` | Labels     | Success message (green)                                                            |
| 18  | `showTextAsTooltip`            | `boolean`          | `false`                    | `date-input`, `time-input` | Labels     | Show helper text as tooltip                                                        |
| 19  | `i18nErrorDateTimeUnparsable`  | `string`           | `'Date time is not valid'` | `date-input` (adapted)     | i18n       | Error message for unparsable input                                                 |
| 20  | `i18nDone`                     | `string`           | `'Confirm'`                | `datetime-picker`          | i18n       | Confirm button text in picker                                                      |
| 21  | `i18nTime`                     | `string`           | `'Time'`                   | `datetime-picker`          | i18n       | Time picker header text                                                            |
| 22  | `ariaLabelPreviousMonthButton` | `string?`          | `undefined`                | `date-input`               | ARIA       | ARIA label for previous month button                                               |
| 23  | `ariaLabelNextMonthButton`     | `string?`          | `undefined`                | `date-input`               | ARIA       | ARIA label for next month button                                                   |
| 24  | `ariaLabelCalendarButton`      | `string?`          | `undefined`                | `date-input`               | ARIA       | ARIA label for calendar icon button                                                |
| 25  | `showWeekNumbers`              | `boolean`          | `false`                    | `date-input`               | Picker     | Show ISO week numbers in calendar                                                  |
| 26  | `weekStartIndex`               | `number`           | `0`                        | `date-input`               | Picker     | Week start day (0=Sun, 1=Mon)                                                      |
| 27  | `suppressSubmitOnEnter`        | `boolean`          | `false`                    | `date-input`, `time-input` | Behavior   | Prevent form submit on Enter key                                                   |
| 28  | `textAlignment`                | `'start' \| 'end'` | `'start'`                  | `date-input`, `time-input` | Behavior   | Text alignment in input field                                                      |

---

## Format Examples

### Date Formats (`dateFormat`)

| Format           | Example Output | Use Case          |
| ---------------- | -------------- | ----------------- |
| `'yyyy/LL/dd'`   | `2026/01/25`   | Default (numeric) |
| `'yyyy-MM-dd'`   | `2026-01-25`   | ISO style         |
| `'MM/dd/yyyy'`   | `01/25/2026`   | US format         |
| `'dd.MM.yyyy'`   | `25.01.2026`   | European          |
| `'LLL dd, yyyy'` | `Jan 25, 2026` | Readable          |

### Time Formats (`timeFormat`)

| Format           | Example Output | Use Case                       |
| ---------------- | -------------- | ------------------------------ |
| `'HH:mm:ss'`     | `14:30:00`     | Default (24-hour with seconds) |
| `'HH:mm'`        | `14:30`        | 24-hour without seconds        |
| `'HH:mm:ss.SSS'` | `14:30:00.500` | With milliseconds              |
| `'hh:mm a'`      | `02:30 PM`     | 12-hour with AM/PM             |
| `'hh:mm:ss a'`   | `02:30:00 PM`  | 12-hour with seconds           |

### Locales

| Locale    | Region     | Example Date |
| --------- | ---------- | ------------ |
| `'en-US'` | US English | `1/25/2026`  |
| `'en-GB'` | UK English | `25/1/2026`  |
| `'de-DE'` | German     | `25.1.2026`  |
| `'fr-FR'` | French     | `25/1/2026`  |
| `'ja-JP'` | Japanese   | `2026/1/25`  |

---

## Props by Source Component

| Source Component     | Props Count | Props List                                                                                                                                                                                                                                                                                                       |
| -------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ix-date-input`      | 15          | `name`, `value`, `placeholder`, `dateFormat`, `locale`, `required`, `disabled`, `readonly`, `minDate`, `maxDate`, `label`, `helperText`, validation messages, `showTextAsTooltip`, `i18nErrorDateTimeUnparsable`, ARIA labels (3), `showWeekNumbers`, `weekStartIndex`, `suppressSubmitOnEnter`, `textAlignment` |
| `ix-time-input`      | 3           | `timeFormat`, `locale` (shared), standard form props (shared)                                                                                                                                                                                                                                                    |
| `ix-datetime-picker` | 2           | ~~`showTimeReference`~~, ~~`timeReference`~~, `i18nDone`, `i18nTime` (**2 props removed**)                                                                                                                                                                                                                       |
| Combined/Adapted     | 9           | `value` format, validation props, form integration                                                                                                                                                                                                                                                               |

---

## Props NOT Included (Omitted from Source Components)

### From `ix-time-input` - 9 props omitted

| Prop                          | Reason                                                       |
| ----------------------------- | ------------------------------------------------------------ |
| `hideHeader`                  | Time picker always shows header in datetime context          |
| `hourInterval`                | `datetime-picker` doesn't expose interval configuration      |
| `minuteInterval`              | Not supported by underlying `datetime-picker`                |
| `secondInterval`              | Not supported by underlying `datetime-picker`                |
| `millisecondInterval`         | Not supported by underlying `datetime-picker`                |
| `i18nHourColumnHeader`        | `datetime-picker` doesn't expose column header customization |
| `i18nMinuteColumnHeader`      | Not exposed by `datetime-picker`                             |
| `i18nSecondColumnHeader`      | Not exposed by `datetime-picker`                             |
| `i18nMillisecondColumnHeader` | Not exposed by `datetime-picker`                             |

### From `ix-date-input` - 1 prop omitted

| Prop     | Reason                                                                                |
| -------- | ------------------------------------------------------------------------------------- |
| `format` | Split into separate `dateFormat` + `timeFormat` props (matches `datetime-picker` API) |

### From `ix-datetime-picker` - 2 props omitted (**NEW**)

| Prop                | Reason                                                                        |
| ------------------- | ----------------------------------------------------------------------------- |
| `showTimeReference` | Not in `time-input` - users handle AM/PM via `timeFormat` (e.g., `'hh:mm a'`) |
| `timeReference`     | Not in `time-input` - controlled by format string only                        |

**Total Omitted:** 12 props

---

## Key Differences: readonly vs disabled

| Feature                 | `readonly`    | `disabled`          |
| ----------------------- | ------------- | ------------------- |
| Value submitted in form | ✅ Yes        | ❌ No               |
| Calendar icon           | ❌ Hidden     | ✅ Visible (grayed) |
| Text style              | Normal        | Faded/dimmed        |
| Validation              | ✅ Applied    | ❌ Skipped          |
| User interaction        | ❌ No editing | ❌ No editing       |

---

## Usage Examples

### Basic Usage

```html
<ix-datetime-input label="Appointment Time" placeholder="Select date and time"></ix-datetime-input>
```

### With Validation

```html
<ix-datetime-input label="Start Time*" required="true" min-date="2026-01-25T09:00:00" invalid-text="Must be after 9:00 AM"></ix-datetime-input>
```

### Custom Format (Figma style with milliseconds)

```html
<ix-datetime-input date-format="LLL-dd-yyyy" time-format="HH:mm:ss.SSS" value="2026-05-22T20:00:00.000"></ix-datetime-input>
<!-- Displays: "May-22-2026 20:00:00.000" -->
```

### 12-Hour Format

```html
<ix-datetime-input time-format="hh:mm:ss a" value="2026-01-25T14:30:00"></ix-datetime-input>
<!-- Displays: "2026/01/25 02:30:00 PM" (format string controls AM/PM display) -->
```

### Localized (German)

```html
<ix-datetime-input locale="de-DE" date-format="dd.MM.yyyy" week-start-index="1" i18n-done="Bestätigen"></ix-datetime-input>
```

---

## Summary Statistics

| Category                    | Count |
| --------------------------- | ----- |
| **Total Props**             | 28    |
| Basic Properties            | 3     |
| Formatting                  | 3     |
| Validation & Constraints    | 5     |
| Labels & Messages           | 7     |
| Internationalization (i18n) | 3     |
| Accessibility (ARIA)        | 3     |
| Picker Configuration        | 2     |
| Behavior                    | 2     |
| **Omitted from sources**    | 12    |

---

**Document Status:** ✅ Complete  
**Format:** Quick reference table  
**Purpose:** API implementation guide
