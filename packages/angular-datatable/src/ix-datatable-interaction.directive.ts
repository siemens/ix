/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  booleanAttribute,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  isSignal,
  OnDestroy,
  OnInit,
  Signal,
} from '@angular/core';
import { DatatableComponent } from '@siemens/ngx-datatable';

const unwrapSignalOrValue = <T>(valueOrSignal: T | Signal<T>): T => {
  if (isSignal(valueOrSignal)) {
    return valueOrSignal();
  }
  return valueOrSignal;
};

/**
 * Adds keyboard navigation and auto-selection behavior to `ngx-datatable`.
 *
 * - Arrow keys (Up/Down) focus the first or last row/cell.
 * - On focus, can auto-select the focused row or cell when `datatableInteractionAutoSelect` is enabled.
 * - Handles virtual scroll by adjusting scroll position when navigating to the first or last visible rows.
 *
 * @since 4.5.0
 *
 * @example
 * ```html
 * <ngx-datatable ixDatatableInteraction></ngx-datatable>
 *
 * <!-- with auto-select -->
 * <ngx-datatable ixDatatableInteraction datatableInteractionAutoSelect></ngx-datatable>
 * ```
 */
@Directive({
  selector: 'ngx-datatable[ixDatatableInteraction]',
  exportAs: 'ixDatatableInteraction',
})
export class IxDatatableInteractionDirective implements OnDestroy, OnInit {
  private table = inject(DatatableComponent, { self: true });

  /**
   * Automatically select every row or cell that is navigated through.
   * Is ignored unless `selectionType` is `single` or `cell`.
   *
   * @defaultValue false
   *
   * @since 4.5.0
   */
  readonly datatableInteractionAutoSelect = input(false, {
    transform: booleanAttribute,
  });

  @HostBinding('attr.tabindex') protected tabIndex = '0';

  private element: HTMLElement = inject(ElementRef).nativeElement;
  private tableBody?: HTMLElement;
  private autoSelectTimeout: any;
  private isMousedown = false;

  @HostListener('keydown', ['$event'])
  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown') {
      const first =
        unwrapSignalOrValue(this.table.selectionType) === 'cell'
          ? this.element.querySelector(
              '.datatable-row-wrapper > .datatable-body-row .datatable-body-cell'
            )
          : this.element.querySelector(
              '.datatable-row-wrapper > .datatable-body-row'
            );
      if (first) {
        (first as HTMLElement).focus();
        event.preventDefault();
      }
    } else if (event.key === 'ArrowUp') {
      const last =
        unwrapSignalOrValue(this.table.selectionType) === 'cell'
          ? this.element.querySelector(
              '.datatable-row-wrapper:last-child > .datatable-body-row .datatable-body-cell'
            )
          : this.element.querySelector(
              '.datatable-row-wrapper:last-child > .datatable-body-row'
            );
      if (last) {
        (last as HTMLElement).focus();
        event.preventDefault();
      }
    }
  }

  @HostListener('mousedown')
  protected onMousedown(): void {
    this.isMousedown = true;
  }

  @HostListener('mouseup')
  protected onMouseup(): void {
    this.isMousedown = false;
  }

  @HostListener('focusin', ['$event'])
  protected onFocusin(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    if (!target) {
      return;
    }

    clearTimeout(this.autoSelectTimeout);

    const selectionType = unwrapSignalOrValue(this.table.selectionType);
    if (
      !this.isMousedown &&
      this.datatableInteractionAutoSelect() &&
      (selectionType === 'single' || selectionType === 'cell')
    ) {
      const rowOrCell = target.closest(
        selectionType === 'cell'
          ? 'datatable-body-cell'
          : 'datatable-body-row'
      );
      if (!rowOrCell) {
        return;
      }
      this.autoSelectTimeout = setTimeout(() => {
        rowOrCell.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13 })
        );
      }, 100);
    }

    if (unwrapSignalOrValue(this.table.virtualization)) {
      if (this.tableBody) {
        const lastList =
          selectionType === 'cell'
            ? this.tableBody.querySelectorAll(
                '.datatable-row-wrapper:last-child > .datatable-body-row .datatable-body-cell'
              )
            : this.tableBody.querySelectorAll(
                '.datatable-row-wrapper:last-child > .datatable-body-row'
              );
        if (Array.from(lastList).includes(target)) {
          this.tableBody.scrollTop =
            this.tableBody.scrollTop + lastList[0].clientHeight;
        } else {
          const firstList =
            selectionType === 'cell'
              ? this.tableBody.querySelectorAll(
                  '.datatable-row-wrapper:first-child > .datatable-body-row .datatable-body-cell'
                )
              : this.tableBody.querySelectorAll(
                  '.datatable-row-wrapper:first-child > .datatable-body-row'
                );
          if (Array.from(firstList).includes(target)) {
            this.tableBody.scrollTop =
              this.tableBody.scrollTop - firstList[0].clientHeight;
          }
        }
      }
    }
  }

  ngOnInit(): void {
    this.tableBody = this.element.querySelector(
      'datatable-body'
    ) as HTMLElement;
    if (this.tableBody) {
      this.tableBody.tabIndex = -1;
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.autoSelectTimeout);
  }
}
