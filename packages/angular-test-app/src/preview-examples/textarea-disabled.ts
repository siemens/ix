import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea-disabled',
  template: `
    <textarea class="form-control" placeholder="Enter text here" disabled>
  Some example text
</textarea>
  `,
})
export class TextareaDisabled {}
