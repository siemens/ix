import { Component } from '@angular/core';

@Component({
  selector: 'app-group-header-suppressed',
  template: `
    <ix-group
      header="Header text"
      sub-header="Subheader text"
      suppress-header-selection
    >
      <ix-group-item text="Example text 1"></ix-group-item>
      <ix-group-item text="Example text 2"></ix-group-item>
      <ix-group-item text="Example text 3"></ix-group-item>
    </ix-group>
  `,
})
export class GroupHeaderSuppressed {}
