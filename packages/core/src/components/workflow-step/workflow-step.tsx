/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconCircle,
  iconCircleDot,
  iconCircleFilled,
  iconError,
  iconSuccess,
  iconTriangleFilled,
  iconWarning,
} from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'ix-workflow-step',
  styleUrl: 'workflow-step.scss',
  shadow: true,
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
  @Prop() selected: boolean = false;

  /**
   * Activate navigation click
   *
   * @internal
   */
  @Prop() position: 'first' | 'last' | 'single' | 'undefined' = 'undefined';

  @State() iconName?: string;

  @State() iconColor: string = 'workflow-step-icon-default--color';

  /**
   * @internal
   */
  @Event() selectedChanged!: EventEmitter<HTMLIxWorkflowStepElement>;

  private customIconSlot: boolean = false;

  @Watch('selected')
  selectedHandler() {
    const selectedStyle = this.selected ? '--selected' : '';

    if (this.status === 'open') {
      this.iconName = this.selected ? iconCircleDot : iconCircle;
      this.iconColor = `workflow-step-icon-default--color${selectedStyle}`;
    }

    if (this.status === 'done' && !this.disabled) {
      this.iconColor = `workflow-step-icon-done--color${selectedStyle}`;
    }
  }

  @Watch('disabled')
  @Watch('status')
  watchPropHandler() {
    switch (this.status) {
      case 'open':
        this.iconName = iconCircle;
        this.iconColor = 'workflow-step-icon-default--color';
        break;
      case 'success':
        this.iconName = iconSuccess;
        this.iconColor = 'color-success';
        break;
      case 'done':
        this.iconName = iconSuccess;
        this.iconColor = 'workflow-step-icon-done--color';
        break;
      case 'warning':
        this.iconName = iconWarning;
        this.iconColor = 'color-warning';
        break;
      case 'error':
        this.iconName = iconError;
        this.iconColor = 'color-alarm';
        break;

      default:
        this.iconName = iconCircle;
        break;
    }

    if (this.disabled) {
      this.iconColor = 'workflow-step-icon-success--color--disabled';
    }
  }

  componentWillLoad() {
    this.watchPropHandler();
    this.selectedHandler();

    this.customIconSlot = !!this.hostElement.querySelector(
      '[slot="custom-icon"]'
    );
  }

  onStepClick() {
    if (!this.disabled && this.clickable) {
      this.selectedChanged.emit(this.hostElement);
    }
  }

  render() {
    const icons = !this.customIconSlot ? (
      <Fragment>
        <ix-icon
          color="color-1"
          name={
            this.status === 'warning' ? iconTriangleFilled : iconCircleFilled
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
    ) : null;

    return (
      <Host
        class={{ 'host-vertical': this.vertical }}
        onClick={() => this.onStepClick()}
      >
        <div
          tabIndex={0}
          class={{
            step: true,
            selected: this.selected,
            vertical: this.vertical,
            disabled: this.disabled,
            clickable: this.clickable && !this.disabled,
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
