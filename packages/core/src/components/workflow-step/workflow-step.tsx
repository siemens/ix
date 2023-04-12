/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */

import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'ix-workflow-step',
  styleUrl: 'workflow-step.scss',
  scoped: true,
})
export class WorkflowStep {
  @Element() hostElement: HTMLIxWorkflowStepElement;

  /**
   * Select orientation
   */
  @Prop() vertical: boolean = false;

  /**
   * Set disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * Set status
   */
  @Prop() status: 'open' | 'success' | 'done' | 'warning' | 'error' = 'open';

  /**
   * Activate navigation click
   */
  @Prop() clickable: boolean = false;

  /**
   * Set selected
   */
  @Prop({ mutable: true }) selected: boolean = false;

  /**
   * Activate navigation click
   *
   * @deprecated Will be changed to '@internal' in 2.0.0
   */
  @Prop() position: 'first' | 'last' | 'single' | 'undefined' = 'undefined';

  @State() iconName: 'circle' | 'circle-dot' | 'success' | 'warning' | 'error' =
    'circle';
  @State() iconColor: string = 'workflow-step-icon-default--color';

  /**
   * Selection changed
   */
  @Event() selectedChanged: EventEmitter<HTMLIxWorkflowStepElement>;

  private customIconSlot: boolean;

  private select() {
    if (!this.clickable) return;
    if (this.disabled) return;

    this.selected = true;
    this.selectedHandler();
  }

  @Watch('selected')
  selectedHandler() {
    const selectedStyle = this.selected ? '--selected' : '';

    if (this.status === 'open') {
      this.iconName = this.selected ? 'circle-dot' : 'circle';
      this.iconColor = `workflow-step-icon-default--color${selectedStyle}`;
    }

    if (this.status === 'done' && !this.disabled) {
      this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
    }
  }

  @Watch('status')
  watchPropHandler() {
    switch (this.status) {
      case 'open':
        this.iconName = 'circle';
        this.iconColor = 'workflow-step-icon-default--color';
        break;
      case 'success':
        this.iconName = 'success';
        this.iconColor = 'color-success';
        break;
      case 'done':
        this.iconName = 'success';
        this.iconColor = 'workflow-step-icon-done--color';
        break;
      case 'warning':
        this.iconName = 'warning';
        this.iconColor = 'color-warning';
        break;
      case 'error':
        this.iconName = 'error';
        this.iconColor = 'color-alarm';
        break;

      default:
        this.iconName = 'circle';
        break;
    }

    if (this.disabled) {
      this.iconColor = 'workflow-step-icon-success--color--disabled';
    }
  }

  componentDidLoad() {
    this.watchPropHandler();
    this.selectedHandler();

    this.customIconSlot = !!this.hostElement.querySelector(
      '[slot="custom-icon"]'
    );
  }

  @Listen('click', { passive: true })
  clickFunction() {
    if (!this.disabled) {
      this.selectedChanged.emit(this.hostElement);
    }
  }

  render() {
    const icons = !this.customIconSlot ? (
      <Fragment>
        <ix-icon
          color="color-1"
          name={
            this.iconName === 'warning' ? 'triangle-filled' : 'circle-filled'
          }
          class="absolute"
          size="24"
        ></ix-icon>
        <ix-icon
          color={this.iconColor}
          name={this.iconName}
          class="absolute"
          size="24"
        ></ix-icon>
      </Fragment>
    ) : (
      ''
    );

    return (
      <Host>
        <div
          tabIndex={0}
          onClick={() => this.select()}
          class={{
            step: true,
            selected: this.selected,
            vertical: this.vertical,
            disabled: this.disabled,
          }}
        >
          <div class="wrapper">
            <div
              class={{
                line: true,
                selected: this.selected,
                [this.status]: true,
                [this.position]: true,
              }}
            ></div>
            <div class="iconWrapper">
              {icons}
              <slot name="custom-icon"></slot>
            </div>
          </div>
          <div class="text">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
