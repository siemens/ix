import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <ix-button id="triggerId">Open</ix-button>
    <ix-dropdown trigger="triggerId">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export class Dropdown {}
