/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-tabs',
  template: `
    <ix-menu>
      <ix-menu-item home-tab tab-icon="home"> Home </ix-menu-item>
      <ix-menu-item tab-icon="globe"> Normal Tab </ix-menu-item>
      <ix-menu-item tab-icon="star" disabled> Disabled Tab </ix-menu-item>
      <ix-menu-item tab-icon="star"> With other Icon </ix-menu-item>
      <ix-menu-item tab-icon="globe" style="display: none">
        Should not visible
      </ix-menu-item>
    </ix-menu>
  `,
})
export class VerticalTabs {}
