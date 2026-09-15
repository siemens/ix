import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IxModule } from '@siemens/ix-angular';
import { AppComponent } from './app.component';

@Component({
  template: `
    <ix-menu [expand]="true" aria-label="Main navigation">
      @for (item of navigationItems; track item.label) {
      <ix-menu-category
        [label]="item.label"
        [attr.aria-label]="item.label"
        aria-level="0"
      >
        @for (nestedItem of item.items; track nestedItem) {
        <ix-menu-item
          [label]="nestedItem"
          [attr.aria-label]="nestedItem"
          aria-level="1"
        ></ix-menu-item>
        }
      </ix-menu-category>
      }
    </ix-menu>
  `,
  standalone: false,
})
class DynamicMenuComponent {
  readonly navigationItems = [
    {
      label: 'Category',
      items: ['Item'],
    },
  ];
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

describe('Dynamic menu ARIA bindings', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IxModule.forRoot()],
      declarations: [DynamicMenuComponent],
    }).compileComponents();
  });

  it('initializes interpolated ARIA attributes without runtime errors', async () => {
    const errors: unknown[] = [];
    const errorHandler = (event: ErrorEvent) => {
      errors.push(event.error ?? event.message);
      event.preventDefault();
    };
    const rejectionHandler = (event: PromiseRejectionEvent) => {
      errors.push(event.reason);
      event.preventDefault();
    };
    window.addEventListener('error', errorHandler);
    window.addEventListener('unhandledrejection', rejectionHandler);

    try {
      const fixture = TestBed.createComponent(DynamicMenuComponent);
      fixture.detectChanges();
      await fixture.whenStable();
      const menuCategory = fixture.nativeElement.querySelector(
        'ix-menu-category'
      ) as HTMLIxMenuCategoryElement;
      await menuCategory.componentOnReady();
      const categoryMenuItem = menuCategory.shadowRoot?.querySelector(
        'ix-menu-item.category-parent'
      ) as HTMLIxMenuItemElement;
      await categoryMenuItem.componentOnReady();
      const categoryButton =
        categoryMenuItem.shadowRoot?.querySelector('button');

      expect(errors).toEqual([]);
      expect(menuCategory.classList.contains('hydrated')).toBeTrue();
      expect(categoryButton?.getAttribute('aria-label')).toBe('Category');
      expect(categoryButton?.getAttribute('aria-level')).toBe('0');
    } finally {
      window.removeEventListener('error', errorHandler);
      window.removeEventListener('unhandledrejection', rejectionHandler);
    }
  });
});
