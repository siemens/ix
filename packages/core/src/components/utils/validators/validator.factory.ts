import {
  DateWithinMinMaxValidator,
  ToDateAfterFromDateValidator,
  ValidDateValidator,
} from './date-input/date-input-validators';
import { Validator } from './validator';

export enum ValidatorNames {
  valid = 'valid',
  toAfterFrom = 'toAfterFrom',
  withinMinMax = 'withinMinMax',
}

export function getValidator(list: Array<string>): Validator<any> {
  return (list || [])
    .map((v) => validatorFactory(v))
    .reduce(combineValidator, defaultValidator);
}

function validatorFactory(name: string): Validator<any> {
  switch (name) {
    case ValidatorNames.valid:
      return ValidDateValidator;
    case ValidatorNames.toAfterFrom:
      return ToDateAfterFromDateValidator;
    case ValidatorNames.withinMinMax:
      return DateWithinMinMaxValidator;
    default:
      return defaultValidator;
  }
}

const defaultValidator: Validator<any> = {
  validate: (_x: any) => true,
};

function combineValidator<A>(v1: Validator<A>, v2: Validator<A>): Validator<A> {
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
