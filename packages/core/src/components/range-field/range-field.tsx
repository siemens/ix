/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Host,
  Listen,
  Mixin,
  Prop,
  State,
  h,
} from '@stencil/core';
import { DefaultMixins } from '../utils/internal/component';
import { isIxInputFieldComponent } from '../utils/input';
import { hasKeyboardMode } from '../utils/internal/mixins/setup.mixin';
import { iconArrowRight } from '@siemens/ix-icons/icons';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';

@Component({
  tag: 'ix-range-field',
  styleUrl: 'range-field.scss',
  shadow: true,
})
export class RangeField extends Mixin(...DefaultMixins) {
  @Element() override hostElement!: HTMLIxRangeFieldElement;

  /**
   * The type of the input range. If set to "time-range", the input range will be displayed as a time range.
   */
  @Prop() type?: 'time-range' | 'date-range' | 'datetime-range';

  /**
   * Hides the arrow icon between the two input fields. This can be used when the input range is used in a context where the arrow icon is not desired, such as in a form field with a custom label.
   */
  @Prop() hideArrow = false;

  private observeElements?: MutationObserver;

  @State() hasLabel = false;

  private elements?:
    | Array<HTMLIxTimeInputElement>
    | Array<HTMLIxDateInputElement>
    | Array<HTMLIxDatetimeInputElement>;

  override componentWillLoad(): void {
    this.observeElements = new MutationObserver(() => {
      this.validateRangeElements();
    });

    this.observeElements.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['label'],
    });
    this.validateRangeElements();
  }

  override disconnectedCallback(): void {
    this.observeElements?.disconnect();
  }

  private validateRangeElements() {
    if (!this.type) {
      throw new Error('Input range type is not specified.');
    }

    const elements = this.hostElement?.children;

    if (!elements) {
      return;
    }

    if (elements?.length !== 2) {
      throw new Error('Input range must have exactly two child elements.');
    }

    let validElements = false;

    if (this.type === 'time-range') {
      validElements = Array.from(elements).every(
        (element) => element.tagName.toLowerCase() === 'ix-time-input'
      );
    } else if (this.type === 'date-range') {
      validElements = Array.from(elements).every(
        (element) => element.tagName.toLowerCase() === 'ix-date-input'
      );
    } else if (this.type === 'datetime-range') {
      validElements = Array.from(elements).every(
        (element) => element.tagName.toLowerCase() === 'ix-datetime-input'
      );
    }

    if (!validElements) {
      throw new Error(
        `Input range elements are not valid for the specified type (type=${this.type}). Current elements: ${Array.from(
          elements
        )
          .map((el) => el.tagName.toLowerCase())
          .join(', ')}`
      );
    }

    this.elements = Array.from(elements) as
      | Array<HTMLIxTimeInputElement>
      | Array<HTMLIxDateInputElement>
      | Array<HTMLIxDatetimeInputElement>;

    this.hasLabel = this.elements.some((element) => !!element.label);

    if (!this.hasLabel) {
      return;
    }

    this.elements.forEach((element) => {
      if (!element.label) {
        element.classList.add('fallback-label-margin');
        return;
      }

      element.classList.remove('fallback-label-margin');
    });
  }

  @Listen('ixChange')
  async onValueChange(evt: CustomEvent) {
    if (!this.elements) {
      return;
    }

    const [firstElement, secondElement] = this.elements;

    if (hasKeyboardMode()) {
      return;
    }

    if (
      evt.detail &&
      evt.target === firstElement &&
      isIxInputFieldComponent(firstElement) &&
      isIxInputFieldComponent(secondElement)
    ) {
      if (isIxInputFieldComponent(secondElement)) {
        const input = await secondElement.getNativeInputElement();
        if (input) {
          input.focus();
        }
      }
      requestAnimationFrameNoNgZone(() => secondElement.openPicker());
    }
  }

  override render() {
    return (
      <Host class={{ 'hide-arrow': this.hideArrow }} role="group">
        {!this.hideArrow && (
          <ix-icon
            aria-hidden="true"
            class={{
              'range-delimiter': true,
              'has-label': this.hasLabel,
            }}
            name={iconArrowRight}
          ></ix-icon>
        )}
        <slot></slot>
      </Host>
    );
  }
}
