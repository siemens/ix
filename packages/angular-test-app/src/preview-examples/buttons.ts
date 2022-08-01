/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <cw-button class="m-1" variant="primary">Webcomponents button</cw-button>
    <cw-button class="m-1" variant="secondary">Webcomponents button</cw-button>
    <cw-button class="m-1" outline>Webcomponents button</cw-button>
    <cw-button class="m-1" invisible>Webcomponents button</cw-button>
  `,
})
export class Buttons {}
