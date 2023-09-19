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

export const ValidDateValidator: Validator<DateValidatorParam> = {
  validate: (value: DateValidatorParam) => {
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
  errorMessage: 'One or both dates are invalid',
};

export const ToDateAfterFromDateValidator: Validator<DateValidatorParam> = {
  validate: (value: DateValidatorParam) => {
    if (value.from && value.to && value.format) {
      const _from = dayjs(value.from, value.format, true);
      const _to = dayjs(value.to, value.format, true);

      return _to.isAfter(_from, 'day') || _to.isSame(_from, 'day');
    }

    return true;
  },
  errorMessage: 'Second date must be after first date',
};

export const DateWithinMinMaxValidator: Validator<DateValidatorParam> = {
  validate: (value: DateValidatorParam) => {
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
  errorMessage: 'Date must be within min/max date',
};
