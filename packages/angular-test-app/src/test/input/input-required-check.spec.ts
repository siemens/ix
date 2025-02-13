import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ApplicationInitStatus, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  flush,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import { waitForHydration } from '../utils/wait-for-hydration';
import { TestInputFormRequired } from './form-ix-input-required';
import { TestInputFormWithValidators } from './form-ix-input-with-validators';

describe('ix-input required', () => {
  let component: TestInputFormRequired;
  let fixture: ComponentFixture<TestInputFormRequired>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestInputFormRequired, TestInputFormWithValidators],
      schemas: [],
      imports: [FormsModule, ReactiveFormsModule, IxModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestInputFormRequired);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    // until https://github.com/angular/angular/issues/24218 is fixed
    await TestBed.inject(ApplicationInitStatus).donePromise;
  });

  it('show no invalid state after first validation', fakeAsync(() => {
    const input = fixture.debugElement.query(
      By.css('ix-input[formControlName="name"]')
    );

    fixture.detectChanges();
    tick(100);
    flush();

    fixture.detectChanges();

    expect(component).toBeDefined();
    expect(input.nativeElement.classList).not.toContain('ix-invalid');

    input.nativeElement.dispatchEvent(new Event('ixBlur'));
    fixture.detectChanges();

    tick(100);
    flush();
    expect(input.nativeElement.classList).toContain('ix-invalid');

    component.form.get('name')!.setValue('test');
    input.nativeElement.dispatchEvent(new Event('ixBlur'));
    fixture.detectChanges();

    tick(100);
    flush();
    expect(input.nativeElement.classList).not.toContain('ix-invalid');
  }));
});

describe('ix-input required + additional validators', () => {
  let component: TestInputFormWithValidators;
  let fixture: ComponentFixture<TestInputFormRequired>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestInputFormRequired, TestInputFormWithValidators],
      schemas: [],
      imports: [FormsModule, ReactiveFormsModule, IxModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestInputFormWithValidators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(async () => {
    // until https://github.com/angular/angular/issues/24218 is fixed
    await TestBed.inject(ApplicationInitStatus).donePromise;
  });

  it('should show invalid state if another validator is added', fakeAsync(() => {
    const input = fixture.debugElement.query(
      By.css('ix-input[formControlName="name"]')
    );

    fixture.detectChanges();
    tick(100);
    flush();

    fixture.detectChanges();

    expect(component).toBeDefined();
    // Validators.required = true, but not showing invalid state, because the input is not touched
    expect(input.nativeElement.classList).not.toContain('ix-invalid');

    input.nativeElement.dispatchEvent(new Event('ixBlur'));
    fixture.detectChanges();

    tick(100);
    flush();
    // Validators.required = true
    expect(input.nativeElement.classList).toContain('ix-invalid');

    component.form.get('name')!.setValue('1');
    input.nativeElement.dispatchEvent(new Event('ixBlur'));
    fixture.detectChanges();

    tick(100);
    flush();
    // Validators.minLength = true
    expect(input.nativeElement.classList).toContain('ix-invalid');

    component.form.get('name')!.setValue('1234');
    input.nativeElement.dispatchEvent(new Event('ixBlur'));
    fixture.detectChanges();

    tick(100);
    flush();
    expect(input.nativeElement.classList).not.toContain('ix-invalid');
  }));
});
