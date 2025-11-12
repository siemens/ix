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
  private formSubmitHandler?: () => void;

  private readonly groupRef = makeRef<HTMLElement>();

  get checkboxElements(): HTMLIxCheckboxElement[] {
    return Array.from(this.hostElement.querySelectorAll('ix-checkbox'));
  }

  private checkForRequiredCheckbox() {
    this.required = this.checkboxElements.some((checkbox) => checkbox.required);
  }

  private get parentForm(): HTMLFormElement | null {
    return this.hostElement.closest('form');
  }

  private shouldSuppressValidation(): boolean {
    const form = this.parentForm;
    if (!form) return false;
    return (
      form.hasAttribute('novalidate') ||
      form.hasAttribute('data-novalidate')
    );
  }

  connectedCallback(): void {
    const form = this.parentForm;
    if (form) {
      this.formSubmitHandler = () => {
        this.formSubmissionAttempted = true;
        this.syncValidationClasses();
      };
      form.addEventListener('submit', this.formSubmitHandler);
    }
  }

  componentWillLoad(): void {
    this.checkForRequiredCheckbox();
  }

  disconnectedCallback(): void {
    const form = this.parentForm;
    if (form && this.formSubmitHandler) {
      form.removeEventListener('submit', this.formSubmitHandler);
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
    const checkboxes = this.checkboxElements;
    if (checkboxes.length > 0 && checkboxes[0].name) {
      const name = checkboxes[0].name;
      const form = this.parentForm;
      const allWithSameName: NodeListOf<HTMLElement> = (form
        ? form.querySelectorAll(`ix-checkbox[name="${name}"]`)
        : document.querySelectorAll(`ix-checkbox[name="${name}"]`)) as any;
      return Array.from(allWithSameName).some((el: any) => el.checked);
    }
    return checkboxes.some((checkbox) => (checkbox as any).checked);
  }

  async syncValidationClasses() {
    if (this.shouldSuppressValidation()) {
      this.hostElement.classList.remove('ix-invalid--required');
      this.hostElement.classList.remove('ix-invalid');
      if (this.invalidText) {
        this.invalidText = '';
      }
      this.checkboxElements.forEach((el: any) => {
        el.classList.remove('ix-invalid', 'ix-invalid--required');
      });
      return;
    }
    if (this.required) {
      const isChecked = this.hasAnyChecked();
      const anyTouched = this.checkboxElements.some((el: any) => el.touched || el.formSubmissionAttempted);
      const isRequiredInvalid = !isChecked && (this.touched || this.formSubmissionAttempted || anyTouched);
      this.hostElement.classList.toggle('ix-invalid--required', isRequiredInvalid);
      if (isRequiredInvalid) {
        this.hostElement.classList.add('ix-invalid');
      } else {
        this.hostElement.classList.remove('ix-invalid', 'ix-invalid--required');
      }
      if (isRequiredInvalid) {
        this.invalidText =
          this.invalidText && this.invalidText.trim().length > 0
            ? this.invalidText
            : 'Please select at least one option.';
      } else if (this.invalidText === 'Please select at least one option.') {
        this.invalidText = '';
      }
      this.checkboxElements.forEach((el: any) => {
        if (isChecked) {
          el.classList.remove('ix-invalid', 'ix-invalid--required');
        } else if (isRequiredInvalid) {
          el.classList.add('ix-invalid', 'ix-invalid--required');
        }
      });
      if (isChecked) {
        this.hostElement.classList.remove('ix-invalid', 'ix-invalid--required');
      }
    } else {
      this.hostElement.classList.remove('ix-invalid--required');
      this.hostElement.classList.remove('ix-invalid');
      if (this.invalidText) {
        this.invalidText = '';
      }
      this.checkboxElements.forEach((el: any) => {
        el.classList.remove('ix-invalid', 'ix-invalid--required');
      });
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
