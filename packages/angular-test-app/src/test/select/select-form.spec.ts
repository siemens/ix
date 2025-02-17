import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  ApplicationInitStatus,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IxModule } from '@siemens/ix-angular';
import { By } from '@angular/platform-browser';
import { waitForHydration } from '../utils/wait-for-hydration';
import { checkForError } from '../utils/check-for-error';

@Component({
  selector: 'ix-example-select-form',
  template: `
    <form [formGroup]="form">
      <ix-select formControlName="select">
        <ix-select-item label="Item 1" value="1"></ix-select-item>
        <ix-select-item label="Item 2" value="2"></ix-select-item>
        <ix-select-item label="Item 3" value="3"></ix-select-item>
        <ix-select-item label="Item 4" value="4"></ix-select-item>
      </ix-select>
    </form>
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
class SelectFormComponent {
  public form = new FormGroup({ select: new FormControl('1') });
  value = '3';
  selection = ['3', '4', '5'];

  public updateSelection() {
    this.value = '6';
    this.selection = ['6', '7', '8'];
  }
}

describe('SelectFormComponent', () => {
  let component: SelectFormComponent;
  let fixture: ComponentFixture<SelectFormComponent>;
  let consoleSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule, IxModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectFormComponent);
    component = fixture.componentInstance;

    consoleSpy = spyOn(console, 'error').and.callThrough();

    fixture.detectChanges();
  });

  beforeEach(async () => {
    // until https://github.com/angular/angular/issues/24218 is fixed
    await TestBed.inject(ApplicationInitStatus).donePromise;
  });

  it('should change the form control value', async () => {
    const select = fixture.debugElement.query(
      By.css('ix-select[formControlName="select"]')
    );

    await waitForHydration(select.nativeElement);

    component.form.get('select')!.setValue('2');
    fixture.detectChanges();

    expect(select.nativeElement.value).toBe('2');
    expect(component).toBeDefined();
  });

  it('should change the input value and check for errors', async () => {
    const select = fixture.debugElement.query(
      By.css('ix-select:not([formControlName="select"])')
    );

    await waitForHydration(select.nativeElement);

    component.updateSelection();
    fixture.detectChanges();

    expect(checkForError(consoleSpy, 'TypeError')).toBe(false);
    expect(select.nativeElement.value).toBe('6');
    expect(component).toBeDefined();
  });
});
