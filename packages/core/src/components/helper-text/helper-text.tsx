import { Component, Host, Prop, State, h, Element } from '@stencil/core';
import {
  ClassMutationObserver,
  HTMLIxFormComponentElement,
  ValidationResults,
  checkFieldClasses,
  createClassMutationObserver,
} from '../utils/input';
import { renderHelperText } from '../field-wrapper/helper-text-util';
import { IxComponent } from '../utils/internal';

@Component({
  tag: 'ix-helper-text',
  styleUrl: 'helper-text.scss',
  shadow: true,
})
export class HelperText implements IxComponent {
  @Element() hostElement!: HTMLIxHelperTextElement;
  /**
   * The id of the form element that the label is associated with
   */
  @Prop() htmlFor?: string;

  /**
   * Show text below the field component
   */
  @Prop() helperText?: string;

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

  @State() validationResults: ValidationResults = {
    isInfo: false,
    isInvalid: false,
    isValid: false,
    isWarning: false,
    isInvalidByRequired: false,
  };

  private readonly observer = new MutationObserver(() =>
    this.checkForRequired()
  );
  private classObserver?: ClassMutationObserver;

  connectedCallback() {
    this.observer.observe(window.document, {
      childList: true,
      subtree: true,
    });
  }

  disconnectedCallback(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  componentWillRender() {
    this.checkForRequired();
  }

  private async checkForRequired() {
    if (!this.htmlFor) {
      return;
    }
    const forElement = document.getElementById(
      this.htmlFor
    ) as HTMLIxFormComponentElement<unknown>;
    if (!forElement) {
      return;
    }

    if (this.classObserver) {
      this.classObserver.destroy();
    }
    this.classObserver = createClassMutationObserver(forElement, () => {
      this.validationResults = checkFieldClasses(forElement);
    });
    this.validationResults = checkFieldClasses(forElement);
  }

  render() {
    return (
      <Host>
        {renderHelperText({
          helperText: this.helperText,
          invalidText: this.invalidText,
          validText: this.validText,
          infoText: this.infoText,
          warningText: this.warningText,
          ...this.validationResults,
        })}
      </Host>
    );
  }
}
