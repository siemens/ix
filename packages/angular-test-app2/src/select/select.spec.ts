/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
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

@Component({
  selector: 'ix-example-form-select',
  template: ` <form [formGroup]="form">
    <button>Test</button>
    <ix-button>Test</ix-button>
    <ix-select formControlName="select">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  </form>`,
})
class SelectComponent {
  public form = new FormGroup({ select: new FormControl('1') });
}

describe('SelectFormComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule, IxModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
  });

  beforeEach(async () => {
    // until https://github.com/angular/angular/issues/24218 is fixed
    await TestBed.inject(ApplicationInitStatus).donePromise;
  });

  it('should change the input value', async () => {
    const select = fixture.debugElement.query(By.css('ix-select'));
    component.form.get('select')!.setValue('2');
    fixture.detectChanges();

    expect(select.nativeElement.value).toBe('2');
    expect(component).toBeDefined();
  });
});
