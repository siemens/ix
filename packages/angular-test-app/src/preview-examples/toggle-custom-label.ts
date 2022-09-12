import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-custom-label',
  template: ` <ix-toggle text-off="Offline" text-on="Online"></ix-toggle> `,
})
export class ToggleCustomLabel {}
