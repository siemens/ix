import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  Watch,
  h,
} from '@stencil/core';
import { DateTime } from 'luxon';
import { dropdownController } from '../dropdown/dropdown-controller';
import { IxFieldComponent } from '../utils/field';
import { makeRef } from '../utils/make-ref';

@Component({
  tag: 'ix-date-field',
  styleUrl: 'date-field.scss',
  shadow: true,
  formAssociated: true,
})
export class DateField implements IxFieldComponent {
  @Element() hostElement: HTMLIxDateFieldElement;
  @AttachInternals() formInternals: ElementInternals;

  /**
   * tbd
   */
  @Prop({ reflect: true }) name: string;

  /**
   * tbd
   */
  @Prop({ reflect: true }) placeholder: string;

  /**
   * tbd
   */
  @Prop({ reflect: true, mutable: true }) value: any;

  /**
   * Date format string.
   * See {@link "https://moment.github.io/luxon/#/formatting?id=table-of-tokens"} for all available tokens.
   */
  @Prop() format: string = 'yyyy/LL/dd';

  /**
   * tbd
   */
  @Prop() isInvalid: boolean;

  /**
   * tbd
   */
  @Prop() required: boolean;

  /** @internal */
  @Prop() combineDateStart = false;

  /** @internal */
  @Prop() combineDateEnd = false;

  /**
   * tbd
   */
  @Event() valueChanged: EventEmitter<string>;

  @State() show = false;
  @State() from: string;
  @State() isInputInvalid = false;

  private inputElementRef = makeRef<HTMLInputElement>();
  private dropdownElementRef = makeRef<HTMLIxDropdownElement>();

  /**
   * tbd
   */
  updateFormInternalValue(value: any): void {
    this.formInternals.setFormValue(value);
    this.value = value;
  }

  componentWillLoad(): void {
    this.onInput(this.value);
    if (this.isInputInvalid) {
      this.from = null;
    } else {
      this.watchValue();
    }
  }

  @Watch('value')
  watchValue() {
    this.from = this.value;
  }

  async onInput(value: string) {
    if (DateTime.fromFormat(value, this.format).isValid) {
      this.isInputInvalid = false;

      this.updateFormInternalValue(value);
      this.valueChanged.emit(value);

      this.closeDropdown();
    } else {
      this.isInputInvalid = true;
    }
  }

  async openDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute('data-ix-dropdown');

    dropdownController.dismissAll();
    dropdownController.present(dropdownController.getDropdownById(id));
  }

  async closeDropdown() {
    const dropdownElement = await this.dropdownElementRef.waitForCurrent();
    const id = dropdownElement.getAttribute('data-ix-dropdown');

    if (id) {
      dropdownController.dismiss(dropdownController.getDropdownById(id));
    }
  }

  render() {
    return (
      <Host>
        <input
          class={{
            'is-invalid': this.isInputInvalid,
            'combine-start': this.combineDateStart,
            'combine-end': this.combineDateEnd,
          }}
          required={this.required}
          ref={this.inputElementRef}
          type="text"
          value={this.value}
          onInput={(event) => {
            const target = event.target as HTMLInputElement;
            this.onInput(target.value);
          }}
          onClick={(event) => {
            if (this.show) {
              event.stopPropagation();
              event.preventDefault();
            }
          }}
          onFocus={async () => {
            this.openDropdown();
          }}
        ></input>
        <ix-dropdown
          trigger={this.inputElementRef.waitForCurrent()}
          ref={this.dropdownElementRef}
          closeBehavior="outside"
          show={this.show}
          onShowChanged={(event) => {
            this.show = event.detail;
          }}
        >
          <ix-date-picker
            format={this.format}
            range={false}
            from={this.from}
            onDateChange={(event) => {
              const { from } = event.detail;
              this.onInput(from);
            }}
          ></ix-date-picker>
        </ix-dropdown>
      </Host>
    );
  }
}
