// SPDX-FileCopyrightText: 2022 Siemens AG
//
// SPDX-License-Identifier: MIT

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <ix-basic-navigation>
      <ix-menu #menu>
        <ix-menu-settings>
          <ix-menu-settings-item
            label="Example Setting 1"
          ></ix-menu-settings-item>
          <ix-menu-settings-item
            label="Example Setting 2"
          ></ix-menu-settings-item>
        </ix-menu-settings>
      </ix-menu>
    </ix-basic-navigation>
  `,
})
export class Settings implements AfterViewInit {
  @ViewChild('menu', { read: ElementRef })
  menuRef!: ElementRef<HTMLIxMenuElement>;

  ngAfterViewInit() {
    const { nativeElement } = this.menuRef;
    nativeElement.toggleSettings(true);
  }
}
