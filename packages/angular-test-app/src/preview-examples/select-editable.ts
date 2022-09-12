import { Component } from '@angular/core';

@Component({
  selector: 'app-select-editable',
  template: `
    <ix-select editable [selectedIndices]="selectedIndices">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export class SelectEditable {
  selectedIndices = '1';
}
