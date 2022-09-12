import { Component } from '@angular/core';

@Component({
  selector: 'app-button-selected',
  template: `
    <ix-button class="m-1" variant="Secondary" invisible
      >Not selected</ix-button
    >
    <ix-button class="m-1" variant="Secondary" invisible selected
      >Selected</ix-button
    >
  `,
})
export class ButtonSelected {}
