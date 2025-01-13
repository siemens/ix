import { NgModule } from '@angular/core';
import {
  IxBooleanValueAccessorDirective,
  IxDateValueAccessorDirective,
  IxRadioValueAccessorDirective,
  IxSelectValueAccessorDirective,
  IxTextValueAccessorDirective,
} from '../directives/control-value-accessors';

@NgModule({
  imports: [
    IxBooleanValueAccessorDirective,
    IxDateValueAccessorDirective,
    IxRadioValueAccessorDirective,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
  ],
  exports: [
    IxBooleanValueAccessorDirective,
    IxDateValueAccessorDirective,
    IxRadioValueAccessorDirective,
    IxSelectValueAccessorDirective,
    IxTextValueAccessorDirective,
  ],
})
export class IxFormsModule {}
