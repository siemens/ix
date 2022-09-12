import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  template: `
    <ix-drawer [closeOnClickOutside]="true" [show]="show">
      <span>Some content of drawer</span>
    </ix-drawer>

    <ix-button (click)="show = !show">Toggle drawer</ix-button>
  `,
})
export class Drawer {
  show = false;
}
