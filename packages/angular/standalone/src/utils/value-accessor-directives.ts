import { IxBooleanValueAccessorDirective } from '../directives/control-value-accessors/boolean-value-accessor';
import { IxRadioValueAccessorDirective } from '../directives/control-value-accessors/radio-value-accessor';
import { IxSelectValueAccessorDirective } from '../directives/control-value-accessors/select-value-accessor';
import { IxTextValueAccessorDirective } from '../directives/control-value-accessors/text-value-accessor';
import { IxDateValueAccessorDirective } from '../directives/control-value-accessors/date-value-accessor';
import { IxTimeValueAccessorDirective } from '../directives/control-value-accessors/time-value-accessor';

/**
 * Value Accessor bundle to reduce import complexity
 *
 * Incudes:
 *  - IxBooleanValueAccessorDirective
 *  - IxRadioValueAccessorDirective
 *  - IxSelectValueAccessorDirective
 *  - IxTextValueAccessorDirective
 *  - IxDateValueAccessorDirective
 *  - IxTimeValueAccessorDirective
 */
export const IxValueAccessorDirectives = [
  IxBooleanValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
  IxDateValueAccessorDirective,
  IxTimeValueAccessorDirective,
] as const;
