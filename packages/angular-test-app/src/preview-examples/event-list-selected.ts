import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list-selected',
  template: `
    <ix-event-list>
      <ix-event-list-item color="color-primary">Text 1</ix-event-list-item>
      <ix-event-list-item color="color-primary" selected
        >Text 2</ix-event-list-item
      >
      <ix-event-list-item color="color-primary">Text 3</ix-event-list-item>
      <ix-event-list-item color="color-primary">Text 4</ix-event-list-item>
    </ix-event-list>
  `,
})
export class EventListSelected {}
