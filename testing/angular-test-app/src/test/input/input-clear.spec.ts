/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 */

import { ApplicationInitStatus, Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IxModule } from '@siemens/ix-angular';
import {
  IxDateInput,
  IxInput,
  IxNumberInput,
  IxTextarea,
  IxValueAccessorDirectives,
} from '@siemens/ix-angular/standalone';

@Component({
  imports: [FormsModule, ReactiveFormsModule, IxModule],
  template: `
    <div class="template-driven">
      <ix-input label="Input" required [(ngModel)]="input" />
      <ix-number-input
        label="Number"
        required
        [allowEmptyValueChange]="true"
        [(ngModel)]="number"
      />
      <ix-textarea label="Textarea" required [(ngModel)]="textarea" />
      <ix-date-input label="Date" required [(ngModel)]="date" />
    </div>
    <form [formGroup]="form">
      <ix-input label="Input" required formControlName="input" />
      <ix-number-input
        label="Number"
        required
        [allowEmptyValueChange]="true"
        formControlName="number"
      />
      <ix-textarea label="Textarea" required formControlName="textarea" />
      <ix-date-input label="Date" required formControlName="date" />
    </form>
  `,
})
class TestClearInputs {
  input = '';
  number: number | undefined;
  textarea = '';
  date = '';

  form = new FormGroup({
    input: new FormControl('', Validators.required),
    number: new FormControl<number | undefined>(undefined, Validators.required),
    textarea: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });
}

type ClearableInput =
  | HTMLIxInputElement
  | HTMLIxNumberInputElement
  | HTMLIxTextareaElement
  | HTMLIxDateInputElement;

async function settle(fixture: ComponentFixture<TestClearInputs>) {
  fixture.detectChanges();
  await fixture.whenStable();
  // Class mapping is deferred to the next task by the value accessor.
  await new Promise<void>((resolve) => setTimeout(resolve));
  fixture.detectChanges();
  await fixture.whenStable();
}

for (const standalone of [false, true]) {
  describe(`clear() with ${
    standalone ? 'standalone' : 'NgModule'
  } value accessors`, () => {
    let fixture: ComponentFixture<TestClearInputs>;

    beforeEach(async () => {
      TestBed.configureTestingModule({
        imports: [TestClearInputs, IxModule.forRoot()],
      });
      if (standalone) {
        TestBed.overrideComponent(TestClearInputs, {
          set: {
            imports: [
              FormsModule,
              ReactiveFormsModule,
              IxInput,
              IxNumberInput,
              IxTextarea,
              IxDateInput,
              IxValueAccessorDirectives,
            ],
          },
        });
      }
      await TestBed.compileComponents();
      await TestBed.inject(ApplicationInitStatus).donePromise;
      fixture = TestBed.createComponent(TestClearInputs);
      await settle(fixture);
    });

    for (const binding of ['ngModel', 'formControlName']) {
      for (const tag of [
        'ix-input',
        'ix-number-input',
        'ix-textarea',
        'ix-date-input',
      ]) {
        for (const initiallyEmpty of [true, false]) {
          it(`${tag} resets ${binding} touched state when ${
            initiallyEmpty ? 'empty' : 'populated'
          }`, async () => {
            const field = fixture.debugElement.query(
              By.css(
                binding === 'ngModel'
                  ? `.template-driven ${tag}`
                  : `form ${tag}`
              )
            );
            const input: ClearableInput = field.nativeElement;
            const control = field.injector.get(NgControl).control!;
            if (!initiallyEmpty) {
              control.setValue(
                tag === 'ix-number-input'
                  ? 42
                  : tag === 'ix-date-input'
                  ? '2026/10/27'
                  : 'Value'
              );
              await settle(fixture);
            }

            await input.focusInput();
            (await input.getNativeInputElement()).blur();
            control.markAsDirty();
            await settle(fixture);
            expect(control.touched).toBeTrue();
            if (initiallyEmpty) {
              expect(input.classList).toContain('ix-invalid');
            }

            for (let i = 0; i < 2; i++) {
              await input.clear();
              await settle(fixture);

              expect(control.value).toBe(
                tag === 'ix-number-input' ? undefined : ''
              );
              expect(control.hasError('required')).toBeTrue();
              expect(control.touched).toBeFalse();
              expect(control.dirty).toBeTrue();
              expect(input.classList).toContain('ix-untouched');
              expect(input.classList).not.toContain('ix-invalid');
              if (binding === 'formControlName') {
                expect(fixture.componentInstance.form.touched).toBeFalse();
              }
            }

            control.markAsTouched();
            await settle(fixture);
            expect(input.classList).toContain('ix-invalid');

            await input.clear();
            await settle(fixture);
            await input.focusInput();
            (await input.getNativeInputElement()).blur();
            await settle(fixture);
            expect(control.touched).toBeTrue();
            expect(input.classList).toContain('ix-invalid');
          });
        }
      }
    }
  });
}
