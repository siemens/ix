<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/pill.ts -->
```typescript
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-pill',
  template: `
    <ix-pill variant="custom" color="white" background="purple">
      Label
    </ix-pill>

    <ix-pill>Label</ix-pill>
    <ix-pill outline>Label</ix-pill>
    <ix-pill style="width: 8rem">Label</ix-pill>

    <ix-pill icon="star">Label</ix-pill>
    <ix-pill icon="star" style="width: 8rem"> Label </ix-pill>
    <ix-pill outline alignLeft icon="star" style="width: 8rem"> Label </ix-pill>

    <ix-pill variant="alarm">Label</ix-pill>
    <ix-pill variant="alarm" outline> Label </ix-pill>
    <ix-pill variant="alarm" style="width: 8rem"> Label </ix-pill>

    <ix-pill variant="alarm" icon="star"> Label </ix-pill>
    <ix-pill variant="alarm" icon="star" style="width: 8rem"> Label </ix-pill>
    <ix-pill variant="alarm" outline alignLeft icon="star" style="width: 8rem">
      Label
    </ix-pill>
  `,
})
export class Pill {}
```
