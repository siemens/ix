import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IxModule } from '@siemens/ix-angular';

@Component({
  selector: 'ix-example-dropdown-floating-ui',
  template: `
    <ix-button (click)="openDialog()">Open Dialog</ix-button>
    <dialog #myDialog class="dialog">
      <ix-button id="trigger">Open</ix-button>
      <ix-dropdown id="dropdown" trigger="trigger">
        <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      </ix-dropdown>
    </dialog>
  `,
})
class DropdownFloatingUIComponent {
  @ViewChild('myDialog') myDialog!: ElementRef;

  openDialog() {
    this.myDialog.nativeElement.showModal();
  }

  openDropdown() {
    const button = document.getElementById('trigger');

    if (button) {
      button.click();
    }
  }
}

describe('DropdownFloatingUIComponent', () => {
  let component: DropdownFloatingUIComponent;
  let fixture: ComponentFixture<DropdownFloatingUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownFloatingUIComponent],
      imports: [IxModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownFloatingUIComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should open the dialog and then open the dropdown', async () => {
    component.openDialog();

    component.openDropdown();

    expect(document.getElementById('dropdown')).not.toBeNull();
  });
});
