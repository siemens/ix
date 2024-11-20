import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ApplicationInitStatus,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IxModule } from '@siemens/ix-angular';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'ix-example-form-select',
  template: `
    <h1>TypeError-Example</h1>
    <ix-select [value]="value">
      <ix-select-item
        *ngFor="let item of selection"
        [label]="item"
        [value]="item"
      ></ix-select-item>
    </ix-select>
  `,
})
class SelectComponent {
  value?: string;
  selection?: string[];

  public updateSelection() {
    this.value = '6';
    this.selection = ['6', '7', '8'];
  }

  ngOnInit() {
    this.value = '3';
    this.selection = ['3', '4', '5'];
  }
}

function waitForHydration(element: HTMLElement, timeout = 5000): Promise<void> {
  return new Promise((resolve, reject) => {
    const interval = 50;
    let elapsedTime = 0;

    const checkClass = () => {
      if (element.classList.contains('hydrated')) {
        resolve();
      } else if (elapsedTime >= timeout) {
        reject(new Error(`Timeout waiting for hydration`));
      } else {
        elapsedTime += interval;
        setTimeout(checkClass, interval);
      }
    };

    checkClass();
  });
}

function checkForError(consoleSpy: jasmine.Spy, errorName: string): boolean {
  return consoleSpy.calls
    .allArgs()
    .some((arg) => arg[0].toString().includes(errorName));
}

describe('SelectFormComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  let consoleSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule, IxModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;

    // Spy on console.log
    consoleSpy = spyOn(console, 'error').and.callThrough();

    // Trigger ngOnInit and other lifecycle hooks
    fixture.detectChanges();
  });

  beforeEach(async () => {
    // until https://github.com/angular/angular/issues/24218 is fixed
    await TestBed.inject(ApplicationInitStatus).donePromise;
  });

  it('should change the input value', async () => {
    const select = fixture.debugElement.query(By.css('ix-select'));

    await waitForHydration(select.nativeElement);

    component.updateSelection();
    fixture.detectChanges();

    expect(checkForError(consoleSpy, 'TypeError')).toBe(false);
    expect(select.nativeElement.value).toBe('6');
    expect(component).toBeDefined();
  });
});
