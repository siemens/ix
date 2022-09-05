<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/about-and-legal.ts -->
```typescript
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-and-legal',
  template: `
    <ix-basic-navigation>
      <ix-menu #menu>
        <ix-menu-about>
          <ix-menu-about-item label="Tab 1">Content 1</ix-menu-about-item>
          <ix-menu-about-item label="Tab 2">Content 2</ix-menu-about-item>
        </ix-menu-about>
      </ix-menu>
    </ix-basic-navigation>
  `,
})
export class AboutAndLegal implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleAbout(true);
  }
}
```
