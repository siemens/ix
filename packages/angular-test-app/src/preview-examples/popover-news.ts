/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-news',
  template: `
    <ix-basic-navigation>
      <ix-menu>
        <ix-menu-about>
          <ix-menu-about-item label="Example"> </ix-menu-about-item>
        </ix-menu-about>
        <ix-menu-about-news label="Test" show about-item-label="Example">
          Test
        </ix-menu-about-news>
      </ix-menu>
    </ix-basic-navigation>
  `,
})
export class PopoverNews {}
