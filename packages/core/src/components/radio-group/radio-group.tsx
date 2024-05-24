import {
  Component,
  Element,
  EventEmitter,
  Host,
  Event,
  Listen,
  Prop,
  State,
  h,
  Watch,
} from '@stencil/core';
import {
  ValidationResults,
  HelperText,
  ListenOnValidation,
} from '../utils/field';
import { IxComponent } from '../utils/internal';

@Component({
  tag: 'ix-radio-group',
  styleUrl: 'radio-group.scss',
  shadow: true,
})
export class RadiobuttonGroup implements IxComponent, HelperText {
  @Element() hostElement: HTMLIxRadioGroupElement;
  /**
   * Show text below the field component
   */
  @Prop() helperText: string;

  /**
   * Label for the field component
   */
  @Prop() label: string;

  /**
   * Value of the radiobutton group component
   */
  @Prop() value: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) errorText: string;

  /**
   * Event emitted when the value of the radiobutton group changes
   */
  @Event() valueChange!: EventEmitter<string>;

  @State() isInvalid: boolean;

  private observer = new MutationObserver(() => {
    this.ensureOnlyLastRadioChecked();
  });

  private get radiobuttonElements() {
    return Array.from(this.hostElement.querySelectorAll('ix-radio'));
  }

  connectedCallback(): void {
    this.observer.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['checked'],
    });
  }

  componentWillLoad(): void | Promise<void> {
    this.selectInitialValue();
    this.ensureOnlyLastRadioChecked();
  }

  disconnectedCallback(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private selectInitialValue() {
    if (!this.value) {
      return;
    }
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === this.value;
    });
  }

  private ensureOnlyLastRadioChecked() {
    const checkedRadios = this.radiobuttonElements.filter(
      (radio) => radio.checked
    );
    checkedRadios.forEach((radio, index) => {
      if (index === checkedRadios.length - 1) {
        return;
      }
      radio.checked = false;
    });
  }

  @Watch('value')
  onValueChangeHandler(newValue: string) {
    this.radiobuttonElements.forEach((radiobutton) => {
      radiobutton.checked = radiobutton.value === newValue;
    });
  }

  @Listen('checkedChange')
  onCheckedChangeHandler(event: CustomEvent<boolean>) {
    this.radiobuttonElements.forEach((radiobutton) => {
      if (radiobutton !== event.target) {
        radiobutton.checked = false;
        return;
      }
      radiobutton.checked = true;
      this.valueChange.emit(radiobutton.value);
    });
  }

  @ListenOnValidation({
    includeChildren: true,
  })
  onClassField({ isInvalid }: ValidationResults) {
    this.isInvalid = isInvalid;
  }

  render() {
    return (
      <Host>
        <ix-helper-text-wrapper
          label={this.label}
          helperText={this.helperText}
          errorText={this.errorText}
          isInvalid={this.isInvalid}
        >
          <slot></slot>
        </ix-helper-text-wrapper>
      </Host>
    );
  }
}
