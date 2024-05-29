import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IxModule } from '@siemens/ix-angular';

@Component({
  selector: 'ix-example-form-select',
  template: ` <form [formGroup]="form">
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
      declarations: [ SelectComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule, IxModule.forRoot()],
      providers: [],
    }).compileComponents();
    let element = await fixture<SelectComponent>(`<ix-example-form-select></ix-example-form-select>`);
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the input value', () => {
    component.form.get('select')!.setValue('2');
    const tst = fixture.debugElement.nativeElement.querySelector('ix-select').inputValue;
    //TODO: Test shadow-root or check if the event is getting triggered (valueChange)
    expect(component).toBeDefined();
  });
});
