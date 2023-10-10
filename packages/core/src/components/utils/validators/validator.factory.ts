import {
  getDateWithinMinMaxValidator,
  getToDateAfterFromDateValidator,
  getValidDateValidator,
} from './datetime-input/date-input-validators';
import { getValidTimeValidator } from './datetime-input/time-input-validators';
import { InputValidator, Validator } from './validator';

export enum ValidatorName {
  validDate = 'validDate',
  toAfterFrom = 'toAfterFrom',
  withinMinMax = 'withinMinMax',
  validTime = 'validTime',
}

export const TIME_VALIDATORS = [ValidatorName.validTime];
export const DATE_VALIDATORS = [
  ValidatorName.validDate,
  ValidatorName.toAfterFrom,
  ValidatorName.withinMinMax,
];

export interface ValidatorEntry {
  name: string;
  options?: any;
}

export function convertInputValidators(
  validators: InputValidator[] | string[]
): ValidatorEntry[] {
  return validators.map((v) => {
    return {
      name: v.validator ?? v,
      options: {
        errorMessage: v.errorMessage ?? undefined,
      },
    };
  });
}

export function getValidator(
  list: Array<string | ValidatorEntry>
): Validator<any> {
  return (list || [])
    .map((v) => {
      if (typeof v === 'string') {
        return validatorFactory(v);
      }

      return validatorFactory(v.name, v.options);
    })
    .reduce(combineValidator, defaultValidator);
}

function validatorFactory(name: string, options?: any): Validator<any> {
  options ? options : {};

  switch (name) {
    case ValidatorName.validDate:
      return getValidDateValidator(options?.errorMessage);
    case ValidatorName.toAfterFrom:
      return getToDateAfterFromDateValidator(options?.errorMessage);
    case ValidatorName.withinMinMax:
      return getDateWithinMinMaxValidator(options?.errorMessage);
    case ValidatorName.validTime:
      return getValidTimeValidator(options?.errorMessage);
    default:
      return defaultValidator;
  }
}

const defaultValidator: Validator<any> = {
  validate: (_x: any) => true,
};

export function combineValidator<A>(
  v1: Validator<A>,
  v2: Validator<A>
): Validator<A> {
  let combined: Validator<A>;
  combined = {
    validate: (x: A) => {
      let res1: boolean = v1.validate(x);
      let res2: boolean = v2.validate(x);
      if (!res1) {
        combined.errorMessage = v1.errorMessage;
      } else if (!res2) {
        combined.errorMessage = v2.errorMessage;
      }

      return res1 && res2;
    },
  };
  return combined;
}
