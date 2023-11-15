import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ix-select[ngModel],ix-select[formControlName],ix-select[formControl]',
  host: {
    '(valueChange)': 'handleChangeEvent($event.target.value)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectValueAccessor,
      multi: true
    }
  ]
})
export class SelectValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
