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
  OnInit,
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
  value = '3';
  selection = ['3', '4', '5'];

  public updateSelection() {
    this.value = '6';
    this.selection = ['6', '7', '8'];
  }
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
    component.updateSelection();
    fixture.detectChanges();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    debugger;


    expect(select.nativeElement.value).toBe('3');
    expect(component).toBeDefined();
  });
});
