import { Component } from '@angular/core';

@Component({
  selector: 'app-input-disabled',
  template: `
    <form class="needs-validation m-2">
      <input
        class="form-control"
        defaultValue="Some example text"
        placeholder="Enter text here"
        type="text"
        disabled
      />
    </form>
  `,
})
export class InputDisabled {}
