import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-indeterminate',
  template: `
    <div>
      <input type="checkbox" id="checkbox_01" [indeterminate]="true" />
      <label for="checkbox_01">Simple checkbox</label>
    </div>
  `,
})
export class CheckboxIndeterminate {}
