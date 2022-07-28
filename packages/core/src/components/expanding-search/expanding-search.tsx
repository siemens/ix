/**
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import { Component, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'cw-expanding-search',
  styleUrl: 'expanding-search.scss',
  scoped: true,
})
export class ExpandingSearch {
  /**
   * Search icon
   */
  @Prop() icon = 'search';

  /**
   * Placeholder text
   */
  @Prop() placeholder = 'Enter text here';

  /**
   * Default value
   */
  @Prop({ mutable: true }) value = '';

  @State() isFieldChanged = false;

  @State() size: '32' | '24' | '16' = '24';

  @State() toggle = false;

  @State() hasFocus = false;

  /**
   * Value changed
   */
  @Event() valueChange: EventEmitter<string>;

  private expandInput() {
    window.removeEventListener('click', this.callback);
    setTimeout(this.focusTextInput, 300);
    this.toggle = true;
    this.size = '16';
  }

  private collapseInput() {
    if (!this.isFieldChanged && this.toggle) {
      this.toggle = false;
      this.size = '24';
    }
  }

  private mouseDown() {
    window.addEventListener('click', this.callback);
    this.size = '16';
  }

  private clearInput() {
    this.value = '';
    this.isFieldChanged = false;
  }

  private readonly callback = this.clickEvent.bind(this);

  private clickEvent() {
    this.size = '24';
  }

  private onChange(e: InputEvent) {
    this.value = (e.target as HTMLInputElement).value;
    if (this.isFieldChanged && this.value === '') {
      this.isFieldChanged = false;
    } else {
      this.isFieldChanged = true;
    }

    this.valueChange.emit(this.value);
  }

  private textInput?: HTMLInputElement;

  constructor() {
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  private focusTextInput() {
    this.textInput?.focus();
  }

  private clearClicked() {
    this.clearInput();
    this.textInput?.focus();
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <Host>
        <div class="exp-container">
          <button
            class={{ 'btn': true, 'btn-invisible-secondary': true, 'btn-icon': true, 'btn-search': true, 'disable-pointer': this.toggle }}
            data-testid="button"
            onClick={() => this.expandInput()}
            onMouseDown={() => this.mouseDown()}
          >
            <cw-icon
              class={{
                ['btn-search-icon']: true,
              }}
              name={this.icon}
              size={this.size}
              color={this.hasFocus ? 'input-search-icon--color' : undefined}
            ></cw-icon>
          </button>

          <div class={{ 'expanded': this.toggle, 'collapsed': !this.toggle, 'disable-pointer': !this.toggle, 'input-container': true }} data-testid="input-wrapper">
            <input
              class={{ 'form-control': true, 'input': this.toggle, 'disable-pointer': !this.toggle, 'opacityBefore': !this.toggle, 'opacityAfter': this.toggle }}
              ref={el => (this.textInput = el)}
              data-testid="input"
              placeholder={this.placeholder}
              type="text"
              value={this.value}
              onBlur={() => {
                this.collapseInput();
                this.hasFocus = false;
              }}
              onFocus={() => (this.hasFocus = true)}
              onInput={(e: InputEvent) => this.onChange(e)}
            />

            {this.isFieldChanged ? <cw-icon-button class="btn-clear" icon="clear" ghost={true} size="24" data-testid="clear-button" onClick={() => this.clearClicked()} /> : null}
          </div>
        </div>
      </Host>
    );
  }
}
