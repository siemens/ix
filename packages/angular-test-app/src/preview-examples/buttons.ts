import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <ix-button class="m-1" variant="primary">Webcomponents button</ix-button>
    <ix-button class="m-1" variant="secondary">Webcomponents button</ix-button>
    <ix-button class="m-1" outline>Webcomponents button</ix-button>
    <ix-button class="m-1" invisible>Webcomponents button</ix-button>
  `,
})
export class Buttons {}
