/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import { ButtonVariant } from '../button/button';
import { IxButtonComponent } from '../button/button-component';

@Component({
  tag: 'ix-expanding-search',
  styleUrl: 'expanding-search.scss',
  shadow: true,
})
export class ExpandingSearch
  implements Omit<IxButtonComponent, 'type' | 'icon' | 'disabled'>
{
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

  /**
   * If true the search field will fill all available horizontal space of it's parent container when expanded.
   * @since 1.6.0
   */
  @Prop() fullWidth = false;

  /**
   * button variant
   */
  @Prop() variant: ButtonVariant = 'primary';

  /**
   * Outline button
   */
  @Prop() outline = false;

  /**
   * Button with no background or outline
   */
  @Prop() ghost = true;

  /**
   * Loading button
   */
  @Prop() loading: boolean = false;

  @State() isFieldChanged = false;
  @State() expanded = false;
  @State() hasFocus = false;

  /**
   * Value changed
   */
  @Event() valueChange!: EventEmitter<string>;

  private expandInput() {
    setTimeout(this.focusTextInput, 300);
    this.expanded = true;
  }

  private collapseInput() {
    if (!this.isFieldChanged && this.expanded) {
      this.expanded = false;
    }
  }

  private clearInput() {
    this.value = '';
    this.isFieldChanged = false;
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
      <Host
        class={{
          expanded: this.expanded,
          'right-position': this.expanded,
          fullWidth: this.fullWidth,
        }}
      >
        <ix-icon-button
          size={this.expanded ? '16' : '24'}
          icon={this.icon}
          variant={this.variant}
          ghost={this.ghost || this.expanded}
          outline={this.outline}
          loading={this.loading}
          data-testid="button"
          onClick={() => this.expandInput()}
          tabindex={this.expanded ? -1 : 0}
          color={this.hasFocus ? 'input-search-icon--color--focus' : undefined}
          class={{
            'btn-search': true,
            'btn-search--expanded': this.expanded,
          }}
        ></ix-icon-button>

        <div
          class={{
            expanded: this.expanded,
            fullWidth: this.fullWidth,
            collapsed: !this.expanded,
            'disable-pointer': !this.expanded,
            'input-container': true,
          }}
          data-testid="input-wrapper"
        >
          <input
            class={{
              'form-control': true,
              input: this.expanded,
              'disable-pointer': !this.expanded,
              'opacity-before': !this.expanded,
              'opacity-after': this.expanded,
            }}
            ref={(el) => (this.textInput = el)}
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
            tabindex={this.expanded ? 0 : -1}
          />

          {this.isFieldChanged ? (
            <ix-icon-button
              class="btn-clear"
              icon={'clear'}
              ghost={true}
              size="16"
              data-testid="clear-button"
              onClick={() => this.clearClicked()}
            />
          ) : null}
        </div>
      </Host>
    );
  }
}
