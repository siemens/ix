import dayjs from 'dayjs';
import { Validator } from '../validator';

import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export type DateValidatorParam = {
  from: string;
  to?: string;
  format: string;
  min?: string;
  max?: string;
};

export function getValidDateValidator(
  customErrorMessage?: string
): Validator<DateValidatorParam> {
  return {
    validate: (value: DateValidatorParam): boolean => {
      if (value.from && value.to && value.format) {
        return (
          dayjs(value.from, value.format, true).isValid() &&
          dayjs(value.to, value.format, true).isValid()
        );
      }

      if (value.from && value.format) {
        return dayjs(value.from, value.format, true).isValid();
      }

      return true;
    },
    errorMessage: customErrorMessage ?? 'One or both dates are invalid.',
  };
}

export function getToDateAfterFromDateValidator(
  customErrorMessage?: string
): Validator<DateValidatorParam> {
  return {
    validate: (value: DateValidatorParam): boolean => {
      if (value.from && value.to && value.format) {
        const _from = dayjs(value.from, value.format, true);
        const _to = dayjs(value.to, value.format, true);

        return _to.isAfter(_from, 'day') || _to.isSame(_from, 'day');
      }

      return true;
    },
    errorMessage: customErrorMessage ?? 'Second date must be after first date.',
  };
}

export function getDateWithinMinMaxValidator(
  customErrorMessage?: string
): Validator<DateValidatorParam> {
  return {
    validate: (value: DateValidatorParam): boolean => {
      if (value.from && value.format && value.min && value.max) {
        const _date = dayjs(value.from, value.format, true);
        const _min = dayjs(value.min, value.format, true);
        const _max = dayjs(value.max, value.format, true);

        return (
          (_date.isAfter(_min, 'day') || _date.isSame(_min, 'day')) &&
          (_date.isBefore(_max, 'day') || _date.isSame(_max, 'day'))
        );
      }

      return true;
    },
    errorMessage: customErrorMessage ?? 'Date must be within min/max date.',
  };
}
