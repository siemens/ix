/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cw-toggle',
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
   * Basic and status colors from color palette
   */
  @Prop() color = 'accent';

  /**
   * Text for toggle on
   */
  @Prop() textOn = 'On';

  /**
   * Test for toggle off
   */
  @Prop() textOff = 'Off';

  /**
   * Hide `on` and `off` text
   */
  @Prop() hideText = false;

  /**
   * An event will be dispatched each time the slide-toggle changes its value.
   */
  @Event() checkedChange: EventEmitter<boolean>;

  @Element() hostElement!: HTMLCwToggleElement;

  private emitChange(event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  render() {
    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
      >
        <label class={`switch slide-toggle-color-${this.color}`}>
          <input tabindex="-1" type="checkbox" checked={this.checked} disabled={this.disabled} id={this.hostElement.id} onChange={e => this.emitChange(e)} />
          <span class="slider">
            <span class="slider-track"></span>
          </span>
          {!this.hideText ? <span class="text">{this.checked ? this.textOn : this.textOff}</span> : null}
        </label>
      </Host>
    );
  }
}
