import dayjs from 'dayjs';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Validator } from '../validator';
dayjs.extend(customParseFormat);

export type TimeValidatorParam = {
  fromTime: string;
  toTime?: string;
  format: string;
};

export function getValidTimeValidator(
  customErrorMessage?: string
): Validator<TimeValidatorParam> {
  return {
    validate: (value: TimeValidatorParam): boolean => {
      if (value.fromTime && value.toTime && value.format) {
        return (
          dayjs(value.fromTime, value.format, true).isValid() &&
          dayjs(value.toTime, value.format, true).isValid()
        );
      }

      if (value.fromTime && value.format) {
        return dayjs(value.fromTime, value.format, true).isValid();
      }

      return true;
    },
    errorMessage: customErrorMessage ?? 'One or both times are invalid.',
  };
}
