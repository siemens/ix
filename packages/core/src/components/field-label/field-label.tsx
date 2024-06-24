/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, Prop, h, Element, Watch } from '@stencil/core';
import { IxComponent } from '../utils/internal';
import {
  HTMLIxFormComponentElement,
  isIxInputFieldComponent,
} from '../utils/field';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';
import { MakeRef, makeRef } from '../utils/make-ref';

@Component({
  tag: 'ix-field-label',
  styleUrl: 'field-label.scss',
  shadow: true,
})
export class FormFieldLabel implements IxComponent {
  @Element() hostElement!: HTMLIxFieldLabelElement;

  /**
   * A value is required or must be checked for the form to be submittable
   */
  @Prop({ reflect: true, mutable: true }) required?: boolean;

  /**
   * The id of the form element that the label is associated with
   */
  @Prop({ reflect: true }) htmlFor?: string;

  /** @internal */
  @Prop() controlRef?: MakeRef<HTMLElement>;

  private observer = new MutationObserver(() => this.checkForRequired());
  private a11yAttributes: A11yAttributes = {};
  private labelRef = makeRef<HTMLLabelElement>();

  connectedCallback() {
    this.registerObserver();
  }

  disconnectedCallback(): void {
    this.destroyObserver();
  }

  componentWillRender() {
    this.checkForRequired();
  }

  componentWillLoad(): void | Promise<void> {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
  }

  private destroyObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @Watch('htmlFor')
  private registerObserver() {
    if (typeof window === 'undefined') {
      return;
    }

    this.destroyObserver();

    if (!this.htmlFor) {
      return;
    }

    this.observer.observe(window.document, {
      childList: true,
      subtree: true,
    });
  }

  private async checkForRequired() {
    if (!this.htmlFor) {
      return;
    }

    const forElement = document.getElementById(
      this.htmlFor
    ) as HTMLIxFormComponentElement<unknown>;
    if (forElement && typeof forElement.required === 'boolean') {
      this.required = forElement.required;
    }
  }

  private async focusOnClick() {
    if (!this.htmlFor) {
      return;
    }
    const target = document.getElementById(this.htmlFor);
    if (target && isIxInputFieldComponent(target)) {
      const input = await target.getNativeInputElement();
      input.focus();
    }

    if (this.controlRef) {
      (await this.controlRef.waitForCurrent()).focus();
    }
  }

  render() {
    return (
      <Host onClick={() => this.focusOnClick()}>
        <label
          htmlFor={this.htmlFor}
          {...this.a11yAttributes}
          ref={this.labelRef}
        >
          <ix-typography color="soft" format="label">
            <slot></slot>
            {this.required && <span>&nbsp;*</span>}
          </ix-typography>
        </label>
      </Host>
    );
  }
}
