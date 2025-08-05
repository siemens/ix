import {
  Component,
  Element,
  Host,
  Method,
  Prop,
  State,
  h,
} from '@stencil/core';
import {
  FieldWrapperInterface,
  HookValidationLifecycle,
  IxFormValidationState,
  ValidationResults,
} from '../utils/input';
import { IxComponent } from '../utils/internal';
import { makeRef } from '../utils/make-ref';

/**
 * @form-ready
 */
@Component({
  tag: 'ix-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true,
})
export class CheckboxGroup
  implements FieldWrapperInterface, IxFormValidationState, IxComponent
{
  @Element() hostElement!: HTMLIxCheckboxGroupElement;
  /**
   * Optional helper text displayed below the checkbox group
   */
  @Prop() helperText?: string;

  /**
   * Label for the checkbox group
   */
  @Prop() label?: string;

  /**
   * Alignment of the checkboxes in the group
   */
  @Prop() direction: 'row' | 'column' = 'column';

  /**
   * Error text for the checkbox group
   */
  @Prop() invalidText?: string;

  /**
   * Info text for the checkbox group
   */
  @Prop() infoText?: string;
  /**
   * Valid text for the checkbox group
   */
  @Prop() validText?: string;
  /**
   * Warning text for the checkbox group
   */
  @Prop() warningText?: string;

  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  @Prop() showTextAsTooltip = false;

  /**
   * @internal
   */
  @Prop() required = false;

  @State() isInvalid = false;
  @State() isInfo = false;
  @State() isValid = false;
  @State() isWarning = false;

  private touched = false;
  private readonly groupRef = makeRef<HTMLElement>();

  get checkboxElements(): HTMLIxCheckboxElement[] {
    return Array.from(this.hostElement.querySelectorAll('ix-checkbox'));
  }

  private readonly observer = new MutationObserver(() => {
    this.checkForRequiredCheckbox();
  });

  private checkForRequiredCheckbox() {
    this.required = this.checkboxElements.some((checkbox) => checkbox.required);
  }

  connectedCallback(): void {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['checked', 'required'],
    });
  }

  componentWillLoad(): void | Promise<void> {
    this.checkForRequiredCheckbox();
  }

  disconnectedCallback(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  @HookValidationLifecycle({
    includeChildren: true,
  })
  onClassFieldUpdate({
    isInvalid,
    isInvalidByRequired,
    isInfo,
    isValid,
    isWarning,
  }: ValidationResults) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }

  /**
   * @internal
   */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
  }

  /**
   * @internal
   */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(
      this.checkboxElements.some((checkbox) => checkbox.checked)
    );
  }

  render() {
    return (
      <Host ref={this.groupRef} onIxBlur={() => (this.touched = true)}>
        <ix-field-wrapper
          label={this.label}
          helperText={this.helperText}
          invalidText={this.invalidText}
          infoText={this.infoText}
          validText={this.validText}
          warningText={this.warningText}
          showTextAsTooltip={this.showTextAsTooltip}
          isInvalid={this.isInvalid}
          isInfo={this.isInfo}
          isValid={this.isValid}
          isWarning={this.isWarning}
          controlRef={this.groupRef}
        >
          <div
            class={{
              'checkbox-container': true,
              'row-layout': this.direction === 'row',
            }}
          >
            <slot></slot>
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}
