/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';
import {
  ClassMutationObserver,
  createClassMutationObserver,
  HTMLIxFormComponentElement,
  isIxInputFieldComponent,
} from '../utils/input';
import { IxComponent } from '../utils/internal';
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
  @Prop() controlRef?:
    | MakeRef<HTMLElement>
    | MakeRef<HTMLInputElement>
    | MakeRef<HTMLTextAreaElement>;

  /** @internal */
  @Prop({ mutable: true }) isInvalid: boolean = false;

  private readonly htmlForObserver = new MutationObserver(() =>
    this.checkForInternalState()
  );
  private htmlForClassObserver?: ClassMutationObserver;
  private controlRefClassObserver?: ClassMutationObserver;
  private a11yAttributes: A11yAttributes = {};
  private readonly labelRef = makeRef<HTMLLabelElement>();

  connectedCallback() {
    this.registerHtmlForObserver();
    this.registerControlRefObserver();
  }

  disconnectedCallback(): void {
    if (this.htmlForObserver) {
      this.htmlForObserver.disconnect();
    }
    if (this.htmlForClassObserver) {
      this.htmlForClassObserver.destroy();
    }
    if (this.controlRefClassObserver) {
      this.controlRefClassObserver.destroy();
    }
  }

  componentWillRender() {
    this.checkForInternalState();
  }

  componentWillLoad(): void | Promise<void> {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
  }

  @Watch('htmlFor')
  private registerHtmlForObserver() {
    if (typeof window === 'undefined') {
      return;
    }

    if (this.htmlForObserver) {
      this.htmlForObserver.disconnect();
    }

    if (this.htmlFor) {
      this.htmlForObserver.observe(window.document, {
        childList: true,
        subtree: true,
      });
    }
  }

  @Watch('controlRef')
  private async registerControlRefObserver() {
    if (typeof window === 'undefined') {
      return;
    }

    if (this.controlRefClassObserver) {
      this.controlRefClassObserver.destroy();
    }

    if (this.controlRef) {
      const input = await this.controlRef.waitForCurrent();

      this.controlRefClassObserver = createClassMutationObserver(input, () =>
        this.checkForInvalidState(input)
      );
    }
  }

  private registerHtmlForClassObserver(
    forElement: HTMLIxFormComponentElement<unknown>
  ) {
    if (this.htmlForClassObserver) {
      this.htmlForClassObserver.destroy();
    }

    this.htmlForClassObserver = createClassMutationObserver(forElement, () =>
      this.checkForInvalidState(forElement)
    );
  }

  private checkForInvalidState(elementToCheck: HTMLElement) {
    this.isInvalid =
      elementToCheck.classList.contains('is-invalid') ||
      elementToCheck.classList.contains('ix-invalid');
  }

  private async checkForInternalState() {
    if (this.htmlFor) {
      const forElement = document.getElementById(
        this.htmlFor
      ) as HTMLIxFormComponentElement<unknown>;
      if (forElement) {
        if (typeof forElement.required === 'boolean') {
          this.required = forElement.required;
        }

        this.registerHtmlForClassObserver(forElement);
        this.checkForInvalidState(forElement);
      }
    }

    if (this.controlRef) {
      const input = await this.controlRef.waitForCurrent();
      this.required = (
        input as HTMLInputElement | HTMLTextAreaElement
      ).required;
    }
  }

  private async focusOnClick() {
    if (this.htmlFor) {
      const target = document.getElementById(this.htmlFor);
      if (target) {
        let input: HTMLElement | null = null;
        if (isIxInputFieldComponent(target)) {
          input = await target.getNativeInputElement();
        } else {
          input = target;
        }
        if (typeof input.focus === 'function') {
          input.focus();
        }
      }
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
          <ix-typography
            textColor={this.isInvalid ? 'alarm' : 'soft'}
            format="label"
          >
            <slot></slot>
            {this.required && <span>*</span>}
          </ix-typography>
        </label>
      </Host>
    );
  }
}
