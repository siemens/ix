import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IxModule } from '@siemens/ix-angular';
import { waitForTimeout } from '../utils/wait-for-timeout';

@Component({
  selector: 'ix-example-dropdown-floating-ui',
  styles: [
    `
      .dialog {
        animation: fade-in 0.2s forwards;
        overflow: visible;
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
          transform: translate(0, -50px);
        }
        100% {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    `,
  ],
  template: `
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
    await waitForTimeout(200);

    component.openDropdown();
    await waitForTimeout(200);

    const dropdown = document.getElementById('dropdown');
    const trigger = document.getElementById('trigger');

    const dropdownRect = dropdown!.getBoundingClientRect();
    const triggerRect = trigger!.getBoundingClientRect();

    expect(Math.round(dropdownRect.x)).toBe(Math.round(triggerRect.x));
    expect(Math.round(dropdownRect.y)).toBe(
      Math.round(triggerRect.y + triggerRect.height)
    );
  });
});
