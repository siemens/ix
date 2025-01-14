import { IxBooleanValueAccessorDirective } from './boolean-value-accessor';
import { IxRadioValueAccessorDirective } from './radio-value-accessor';
import { IxSelectValueAccessorDirective } from './select-value-accessor';
import { IxTextValueAccessorDirective } from './text-value-accessor';
import { IxDateValueAccessorDirective } from './date-value-accessor';

/**
 * Value Accessor bundle to reduce import complexity
 *
 * Incudes:
 *  - IxBooleanValueAccessorDirective
 *  - IxRadioValueAccessorDirective
 *  - IxSelectValueAccessorDirective
 *  - IxTextValueAccessorDirective
 *  - IxDateValueAccessorDirective
 */
export const IxValueAccessorDirectives = [
  IxBooleanValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
  IxDateValueAccessorDirective,
] as const;
