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
