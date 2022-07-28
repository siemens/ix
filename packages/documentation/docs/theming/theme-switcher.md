# Theme Switcher (Angular)

:::warning
Will be removed in 7.0.0.
:::

Inject `ThemeSwitcherService` from `@siemens/core-ui`

## Toggle Theme

```typescript
import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../service/theme-switcher.service';

@Component({
  selector: 'example-component',
  template: `<button class="btn btn-primary" (click)="toggleTheme()">
    Change
  </button>`,
})
export class VerticalTabsComponent {
  constructor(private readonly themeSwitcherService: ThemeSwitcherService) {}

  toggleTheme() {
    this.themeSwitcherService.toggleTheme();
  }
}
```

## Callback after a theme Change

The `ThemeSwitcherService` expose a observable `themeChanged` with the latest theme change.

```typescript
import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../service/theme-switcher.service';

@Component({
  selector: 'example-component',
  template: `<button class="btn btn-primary" (click)="toggleTheme()">
    Change
  </button>`,
})
export class VerticalTabsComponent {
  constructor(themeSwitcherService: ThemeSwitcherService) {
    // Dont forget to cleanup the subscription
    themeSwitcherService.themeChanged.subscribe(console.log);
  }
}
```
