/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
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
  Method,
  Mixin,
  Prop,
  Watch,
  h,
} from '@stencil/core';
import { FieldWrapperInterface } from '../utils/input';
import { MakeRef, makeRef } from '../utils/make-ref';
import {
  hasAnyText,
  HelperText,
  resolveTextFromValidationState,
} from './helper-text-util';
import { DefaultMixins } from '../utils/internal/component';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';

/** @internal */
@Component({
  tag: 'ix-field-wrapper',
  styleUrl: 'field-wrapper.scss',
  shadow: true,
})
export class FieldWrapper
  extends Mixin(...DefaultMixins, ComponentIdMixin)
  implements FieldWrapperInterface, ComponentIdMixinContract
{
  @Element() override hostElement!: HTMLIxFieldWrapperElement;

  /**
   * Show text below the field component
   */
  @Prop() helperText?: string;

  /**
   * Label for the field component
   */
  @Prop() label?: string;

  /**
   * Error text for the field component
   */
  @Prop() invalidText?: string;

  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText?: string;

  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

  /**
   * Is the field component invalid
   */
  @Prop() isInvalid: boolean = false;

  /**
   * Is the field component valid
   */
  @Prop() isValid: boolean = false;

  /**
   * Is the field component info
   */
  @Prop() isInfo: boolean = false;

  /**
   * Is the field component warning
   */
  @Prop() isWarning: boolean = false;

  /**
   * Show helper, error, info, warning text as tooltip
   */
  @Prop() showTextAsTooltip: boolean = false;

  /**
   * Show label as required
   */
  @Prop() required: boolean = false;

  /**
   * The control element that the label is associated with
   */
  @Prop() controlRef?:
    | MakeRef<HTMLElement>
    | MakeRef<HTMLInputElement>
    | MakeRef<HTMLTextAreaElement>;

  private readonly slotRef = makeRef<HTMLDivElement>();
  private hasExplicitAriaLabel = false;

  override componentDidLoad() {
    this.syncAriaLabel(true);
  }

  @Watch('label')
  syncAriaLabel(initialSync = false) {
    if (!this.controlRef || this.hasExplicitAriaLabel) {
      return;
    }

    this.controlRef.waitForCurrent().then((el) => {
      if (
        initialSync &&
        (el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby'))
      ) {
        this.hasExplicitAriaLabel = true;

        return;
      }

      if (this.label) {
        el.setAttribute('aria-label', this.label);
      } else {
        el.removeAttribute('aria-label');
      }
    });
  }

  override componentWillLoad(): Promise<void> | void {
    if (!this.hostElement.querySelector('.error-message-container')) {
      const errorMessageContainer = document.createElement('span');
      errorMessageContainer.classList.add('error-message-container');
      errorMessageContainer.id = `${this.getHostElementId()}-errormessage`;
      errorMessageContainer.hidden = true;
      this.hostElement.appendChild(errorMessageContainer);
    }

    if (!this.hostElement.querySelector('.helper-message-container')) {
      const helperMessageContainer = document.createElement('span');
      helperMessageContainer.classList.add('helper-message-container');
      helperMessageContainer.id = `${this.getHostElementId()}-helpermessage`;
      helperMessageContainer.hidden = true;
      this.hostElement.appendChild(helperMessageContainer);
    }
  }

  override componentWillRender() {
    const errorMessageElement = this.hostElement.querySelector(
      `#${this.getHostElementId()}-errormessage`
    );

    const helperMessageElement = this.hostElement.querySelector(
      `#${this.getHostElementId()}-helpermessage`
    );

    if (this.isInvalid && this.invalidText && errorMessageElement) {
      errorMessageElement.textContent = this.invalidText;
    }

    if (helperMessageElement) {
      helperMessageElement.textContent = resolveTextFromValidationState({
        isInvalid: this.isInvalid,
        invalidText: this.invalidText,
        isWarning: this.isWarning,
        warningText: this.warningText,
        isInfo: this.isInfo,
        infoText: this.infoText,
        isValid: this.isValid,
        validText: this.validText,
        helperText: this.helperText,
      });
    }
  }

  /** @internal */
  @Method()
  getAriaErrorMessageElement(): Promise<HTMLElement | null> {
    return Promise.resolve(
      this.hostElement.querySelector(`#${this.getHostElementId()}-errormessage`)
    );
  }

  /** @internal */
  @Method()
  getAriaHelperMessageElement(): Promise<HTMLElement | null> {
    return Promise.resolve(
      this.hostElement.querySelector(
        `#${this.getHostElementId()}-helpermessage`
      )
    );
  }

  override render() {
    const textOptions = {
      invalidText: this.invalidText,
      isInvalid: this.isInvalid,
      isValid: this.isValid,
      validText: this.validText,
      isWarning: this.isWarning,
      warningText: this.warningText,
      isInfo: this.isInfo,
      infoText: this.infoText,
      helperText: this.helperText,
    };

    let additionalAriaAttributes = {};
    if (this.isInvalid && this.invalidText) {
      additionalAriaAttributes = {
        role: 'alert',
        'aria-live': 'polite',
      };
    }
    return (
      <Host {...additionalAriaAttributes}>
        {this.label && (
          <div class="field-top">
            <ix-field-label
              required={this.required}
              controlRef={this.controlRef}
              isInvalid={this.isInvalid}
              ariaHidden={true}
            >
              {this.label}
            </ix-field-label>
          </div>
        )}
        <div
          class={{
            'slot-wrapper': true,
          }}
          ref={this.slotRef}
        >
          <slot></slot>
        </div>
        <div class={'field-bottom'}>
          {!this.showTextAsTooltip && <HelperText {...textOptions} />}
          <div class="bottom-right">
            <slot name="bottom-right"></slot>
          </div>
        </div>

        {this.showTextAsTooltip === true && hasAnyText(textOptions) && (
          <ix-tooltip
            for={this.slotRef.waitForCurrent()}
            showDelay={500}
            placement="bottom"
          >
            <HelperText {...textOptions} />
          </ix-tooltip>
        )}
      </Host>
    );
  }
}
