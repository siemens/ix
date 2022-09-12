import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list-compact',
  template: `
    <ix-event-list compact>
      <ix-event-list-item color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 2</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `,
})
export class EventListCompact {}
