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
import { useFieldGroupValidation } from '../utils/field-group-utils';
import { makeRef } from '../utils/make-ref';
import {
  isFormNoValidate,
  setupFormSubmitListener,
  updateCheckboxValidationClasses,
} from '../checkbox/checkbox-validation';
import { clearInputValue } from '../input/input.util';

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
  private formSubmissionAttempt = false;
  private cleanFormListener?: () => void;
  private readonly groupRef = makeRef<HTMLElement>();

  private readonly observer = new MutationObserver(() => {
    this.hasNestedRequiredCheckbox();
  });

  private readonly validation = useFieldGroupValidation<HTMLIxCheckboxElement>(
    this.hostElement,
    {
      selector: 'ix-checkbox',
      isChecked: (el) => el.checked,
      isRequired: (el) => el.required,
      updateValidationClasses: updateCheckboxValidationClasses,
      clearValidationState: this.clearValidationState.bind(this),
    }
  );

  get checkboxElements(): HTMLIxCheckboxElement[] {
    return this.validation.getElements();
  }

  private setupFormListener() {
    this.cleanFormListener = setupFormSubmitListener(this.hostElement, () => {
      this.formSubmissionAttempt = true;
      this.syncValidationClasses();
    });
  }

  connectedCallback(): void {
    this.setupFormListener();
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['checked', 'required'],
    });
  }

  componentWillLoad(): void | Promise<void> {
    this.hasNestedRequiredCheckbox();
  }

  disconnectedCallback(): void {
    if (this.cleanFormListener) {
      this.cleanFormListener();
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private hasNestedRequiredCheckbox() {
    this.required = this.checkboxElements.some((checkbox) => checkbox.required);
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

  /**
   * Clear all checked checkboxes and reset validation state
   */
  @Method()
  async clear(): Promise<void> {
    await clearInputValue(this.hostElement);
  }

  private hasAnyChecked(): boolean {
    return this.validation.hasAnyChecked();
  }

  private clearValidationState() {
    this.hostElement.classList.remove('ix-invalid--required', 'ix-invalid');
    this.checkboxElements.forEach((el: any) => {
      el.classList.remove('ix-invalid', 'ix-invalid--required');
    });
  }

  private handleRequiredValidationShared(params: {
    elements: HTMLElement[];
    hasAnyChecked: boolean;
    touched: boolean;
    formSubmissionAttempt: boolean;
    hostElement: HTMLElement;
    clearValidationState: () => void;
    updateValidationClasses: (
      elements: HTMLElement[],
      isChecked: boolean,
      touched: boolean,
      formSubmissionAttempt: boolean
    ) => void;
  }) {
    const {
      elements,
      hasAnyChecked,
      touched,
      formSubmissionAttempt,
      hostElement,
      clearValidationState,
      updateValidationClasses,
    } = params;

    if (isFormNoValidate(hostElement)) {
      clearValidationState();
      return;
    }
    const requiredElements = elements.filter(
      (el) => (el as HTMLIxCheckboxElement).required
    );
    const isChecked = hasAnyChecked;
    const anyTouched = requiredElements.some(
      (el) =>
        (
          el as HTMLIxCheckboxElement & {
            touched?: boolean;
            formSubmissionAttempted?: boolean;
          }
        ).touched ||
        (
          el as HTMLIxCheckboxElement & {
            touched?: boolean;
            formSubmissionAttempted?: boolean;
          }
        ).formSubmissionAttempted
    );
    const isRequiredInvalid =
      !isChecked && (touched || formSubmissionAttempt || anyTouched);
    hostElement.classList.toggle('ix-invalid--required', isRequiredInvalid);
    if (isRequiredInvalid) {
      hostElement.classList.add('ix-invalid');
    } else {
      hostElement.classList.remove('ix-invalid', 'ix-invalid--required');
    }
    if (!isFormNoValidate(hostElement)) {
      updateValidationClasses(
        elements,
        isChecked,
        touched,
        formSubmissionAttempt
      );
    }
    if (isChecked) {
      hostElement.classList.remove('ix-invalid', 'ix-invalid--required');
    }
  }

  private handleRequiredValidation() {
    this.handleRequiredValidationShared({
      elements: this.checkboxElements,
      hasAnyChecked: this.hasAnyChecked(),
      touched: this.touched,
      formSubmissionAttempt: this.formSubmissionAttempt,
      hostElement: this.hostElement,
      clearValidationState: this.clearValidationState.bind(this),
      updateValidationClasses: updateCheckboxValidationClasses,
    });
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
          required={this.required}
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
