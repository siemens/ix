/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, Prop, h, Element } from '@stencil/core';
import { IxComponent } from '../utils/internal';
import { HTMLIxFormComponentElement } from '../utils/field';

// TODO: Do we need this component?
@Component({
  tag: 'ix-label',
  styleUrl: 'label.scss',
  shadow: true,
})
export class Label implements IxComponent {
  @Element() hostElement: HTMLIxLabelElement;

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
    this.observer.observe(window.document, {
      childList: true,
      subtree: true,
    });
  }

  componentWillRender() {
    this.checkForRequired();
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
