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
import { HTMLIxFormComponentElement } from '../utils/field';

@Component({
  tag: 'ix-field-label',
  styleUrl: 'field-label.scss',
  shadow: true,
})
export class FormFieldLabel implements IxComponent {
  @Element() hostElement: HTMLIxFieldLabelElement;

  /**
   * A value is required or must be checked for the form to be submittable
   */
  @Prop({ reflect: true, mutable: true }) required?: boolean;

  /**
   * The id of the form element that the label is associated with
   */
  @Prop() htmlFor?: string;

  private observer = new MutationObserver(() => this.checkForRequired());

  connectedCallback() {
    this.registerObserver();
  }

  disconnectedCallback(): void {
    this.destroyObserver();
  }

  componentWillRender() {
    this.checkForRequired();
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
    const forElement = document.getElementById(
      this.htmlFor
    ) as HTMLIxFormComponentElement<unknown>;
    if (forElement && typeof forElement.required === 'boolean') {
      this.required = forElement.required;
    }
  }

  render() {
    return (
      <Host>
        <ix-typography color="soft" format="label">
          <slot></slot>
          {this.required && <span>&nbsp;*</span>}
        </ix-typography>
      </Host>
    );
  }
}
