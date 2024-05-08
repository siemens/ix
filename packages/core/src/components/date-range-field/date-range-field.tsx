/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, h, Element, Listen, State } from '@stencil/core';
import { IxComponent } from '../utils/internal';

@Component({
  tag: 'ix-date-range-field',
  styleUrl: 'date-range-field.scss',
  shadow: true,
})
export class DateRangeField implements IxComponent {
  @Element() hostElement: HTMLIxDateRangeFieldElement;

  @State() focus = false;

  private dateField1: HTMLIxDateFieldElement;
  private dateField2: HTMLIxDateFieldElement;

  observer = new MutationObserver(() => {
    this.updateLocalElementRef();
  });

  componentWillLoad(): void | Promise<void> {
    this.updateLocalElementRef();
    this.observer.observe(this.hostElement, {
      childList: true,
    });
  }

  disconnectedCallback(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private updateLocalElementRef() {
    this.validateChildren();

    const [picker1, picker2] = this.hostElement.children;
    this.dateField1 = picker1 as HTMLIxDateFieldElement;
    this.dateField2 = picker2 as HTMLIxDateFieldElement;

    this.dateField1.combineDateStart = true;
    this.dateField1.combineDateEnd = false;

    this.dateField2.combineDateStart = false;
    this.dateField2.combineDateEnd = true;
  }

  private validateChildren() {
    const children = Array.from(this.hostElement.children);
    if (children.length !== 2) {
      throw new Error('ix-date-range-field must have exactly two children');
    }

    children.forEach((child) => {
      if (child.tagName !== 'IX-DATE-FIELD') {
        throw new Error(
          `ix-date-range-field children must be ix-date-field (found: ${child.tagName})}`
        );
      }
    });
  }

  @Listen('ixFocus')
  onFocus() {
    this.focus = true;
  }

  @Listen('ixBlur')
  onBlur() {
    this.focus = false;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'date-field-wrapper': true,
            focus: this.focus,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
