import { Component } from '@angular/core';

@Component({
  selector: 'app-split-button',
  template: `
    <ix-split-button label="Action text">
      <ix-split-button-item label="Item 1"></ix-split-button-item>
      <ix-split-button-item label="Item 2"></ix-split-button-item>
    </ix-split-button>
  `,
})
export class SplitButton {}
