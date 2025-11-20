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
import { getParentForm, hasAnyCheckboxChecked, isFormNoValidate, setupFormSubmitListener, updateCheckboxValidationClasses } from '../utils/checkbox-validation';


/**
 * @form-ready
 */
@Component({
  tag: 'ix-checkbox-group',
  styleUrl: 'checkbox-group.scss',
  shadow: true,
})
export class CheckboxGroup
  implements FieldWrapperInterface, IxFormValidationState, IxComponent {
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
  private formSubmissionAttempted = false;
  private cleanupFormListener?: () => void;
  private readonly groupRef = makeRef<HTMLElement>();

  get checkboxElements(): HTMLIxCheckboxElement[] {
    return Array.from(this.hostElement.querySelectorAll('ix-checkbox'));
  }

  private checkForRequiredCheckbox() {
    this.required = this.checkboxElements.some((checkbox) => checkbox.required);
  }

  connectedCallback(): void {
    this.cleanupFormListener = setupFormSubmitListener(this.hostElement, () => {
      this.formSubmissionAttempted = true;
      this.syncValidationClasses();
    });
  }

  componentWillLoad(): void | Promise<void> {
    this.checkForRequiredCheckbox();
  }

  disconnectedCallback(): void {
    if (this.cleanupFormListener) {
      this.cleanupFormListener();
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

  private hasAnyChecked(): boolean {
    const checkboxes = this.checkboxElements.filter((el) => el.required);
    if (checkboxes.length > 0 && checkboxes[0].name) {
      const name = checkboxes[0].name;
      const form = getParentForm(this.hostElement);
      const allWithSameName: NodeListOf<HTMLElement> = form
        ? form.querySelectorAll(`ix-checkbox[name="${name}"]`)
        : document.querySelectorAll(`ix-checkbox[name="${name}"]`);
      return hasAnyCheckboxChecked(Array.from(allWithSameName).filter((el: any) => el.required));
    }
    return checkboxes.some((checkbox) => (checkbox as any).checked);
  }

  private clearValidationState() {
    this.hostElement.classList.remove('ix-invalid--required', 'ix-invalid');
    if (this.invalidText) {
      this.invalidText = '';
    }
    this.checkboxElements.forEach((el: any) => {
      el.classList.remove('ix-invalid', 'ix-invalid--required');
    });
  }

  private handleRequiredValidation() {
    if (isFormNoValidate(this.hostElement)) {
      this.clearValidationState();
      return;
    }

    const requiredCheckboxes = this.checkboxElements.filter((el) => el.required);
    const isChecked = this.hasAnyChecked();
    const anyTouched = requiredCheckboxes.some(
      (el: any) => el.touched || el.formSubmissionAttempted
    );
    const isRequiredInvalid =
      !isChecked && (this.touched || this.formSubmissionAttempted || anyTouched);

    this.hostElement.classList.toggle('ix-invalid--required', isRequiredInvalid);

    if (isRequiredInvalid) {
      this.hostElement.classList.add('ix-invalid');
      this.invalidText =
        this.invalidText && this.invalidText.trim().length > 0
          ? this.invalidText
          : 'Please select the required field.';
    } else {
      this.hostElement.classList.remove('ix-invalid', 'ix-invalid--required');
      if (this.invalidText === 'Please select the required field.') {
        this.invalidText = '';
      }
    }

    if (!isFormNoValidate(this.hostElement)) {
      updateCheckboxValidationClasses(
        this.checkboxElements,
        isChecked,
        this.touched,
        this.formSubmissionAttempted
      );
    }

    if (isChecked) {
      this.hostElement.classList.remove('ix-invalid', 'ix-invalid--required');
    }
  }

  async syncValidationClasses() {
    if (isFormNoValidate(this.hostElement)) {
      this.clearValidationState();
      return;
    }

    if (this.required) {
      this.handleRequiredValidation();
    } else {
      this.clearValidationState();
    }
  }

  render() {
    return (
      <Host
        onIxBlur={() => {
          if (!this.touched) {
            this.touched = true;
            this.syncValidationClasses();
          }
        }}
      >
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
