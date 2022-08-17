/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-group',
  template: `
    <div class="btn-group">
      <ix-button variant="Primary" outline> Left </ix-button>
      <ix-button variant="Primary">Middle</ix-button>
      <ix-button variant="Primary" outline> Right </ix-button>
    </div>
  `,
})
export class ButtonGroup {}
