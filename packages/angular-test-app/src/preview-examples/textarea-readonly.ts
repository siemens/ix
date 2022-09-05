/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea-readonly',
  template: `
    <textarea class="form-control" placeholder="Enter text here" readonly>
  Some example text
</textarea>
  `,
})
export class TextareaReadonly {}
