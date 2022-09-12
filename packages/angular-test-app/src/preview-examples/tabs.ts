import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <ix-tabs selected="1">
      <ix-tab-item>Tab 1</ix-tab-item>
      <ix-tab-item>Tab 2</ix-tab-item>
      <ix-tab-item>Tab 3</ix-tab-item>
    </ix-tabs>
  `,
})
export class Tabs {}
