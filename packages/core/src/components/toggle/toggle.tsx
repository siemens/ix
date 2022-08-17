/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'ix-toggle',
  styleUrl: 'toggle.scss',
  scoped: true,
})
export class CuiToggle {
  /**
   * Whether the slide-toggle element is checked or not.
   */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /**
   * Whether the slide-toggle element is disabled or not.
   */
  @Prop() disabled = false;

  /**
   * If true the control is in indeterminate state
   */
  @Prop() indeterminate = false;

  /**
   * Basic and status colors from color palette
   * @deprecated - Has no effect on the rendered control
   */
  @Prop() color = 'accent';

  /**
   * Text for on state
   */
  @Prop() textOn = 'On';

  /**
   * Text for off state
   */
  @Prop() textOff = 'Off';

  /**
   * Text for indeterminate state
   */
  @Prop() textIndeterminate = 'Mixed';

  /**
   * Hide `on` and `off` text
   */
  @Prop() hideText = false;

  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  @Event() checkedChange: EventEmitter<boolean>;

  @Element() hostElement!: HTMLIxToggleElement;

  @Listen('keydown', { target: 'window' })
  async onKeyDown(event: KeyboardEvent) {
    const targetElement = event.target as HTMLElement;

    if (!this.hostElement.contains(targetElement)) {
      return;
    }

    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.emitChange(event);
    }
  }

  private emitChange(event: Event) {
    if (this.disabled || this.indeterminate) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  private getText() {
    if (this.indeterminate || this.checked === undefined) {
      return this.textIndeterminate;
    }

    return this.checked ? this.textOn : this.textOff;
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
          checked: this.checked,
          indeterminate: this.indeterminate || this.checked === undefined,
        }}
      >
        <label class="switch" tabindex={this.disabled ? -1 : 0}>
          <input
            tabindex="-1"
            type="checkbox"
            checked={this.checked}
            disabled={this.disabled}
            indeterminate={this.indeterminate || this.checked === undefined}
            id={this.hostElement.id}
            onChange={(e) => this.emitChange(e)}
          />
          <span class="slider">
            <span class="slider-track"></span>
          </span>
        </label>
        {!this.hideText ? (
          <span
            title={this.getText()}
            class="text"
            onClick={(e) => this.emitChange(e)}
          >
            {this.getText()}
          </span>
        ) : null}
      </Host>
    );
  }
}
