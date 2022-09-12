import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-icon',
  template: `
    <ix-button id="iconTriggerId">Open</ix-button>
    <ix-dropdown trigger="iconTriggerId">
      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export class DropdownIcon {}
