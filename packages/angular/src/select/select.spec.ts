import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Component, PlatformRef } from '@angular/core';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-select-form',
  template: `
    <form [formGroup]="form">
      <ix-select formControlName="select">
        <ix-select-item label="Item 1" value="1"></ix-select-item>
        <ix-select-item label="Item 2" value="2"></ix-select-item>
        <ix-select-item label="Item 3" value="3"></ix-select-item>
        <ix-select-item label="Item 4" value="4"></ix-select-item>
      </ix-select>
    </form>
  `,
})
class SelectFormComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      select: new FormControl(''),
    });
  }
}

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting() as PlatformRef,
  { teardown: { destroyAfterEach: false } }
);

describe('SelectFormComponent', () => {
  let component: SelectFormComponent;
  let fixture: ComponentFixture<SelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectFormComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set value in the form control', () => {
    component.form.get('select').setValue('2');
    expect(component.form.get('select').value).toBe('2');
  });
});
