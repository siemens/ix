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

/**
 * A single step within a workflow step sequence.
 *
 * @documentation https://ix.siemens.io/docs/components/workflow/code.md
 * @slot custom-icon - Custom step icon.
 * @slot - Workflow step content.
 */
@Component({
  tag: 'ix-workflow-step',
  styleUrl: 'workflow-step.scss',
  shadow: true,
})
export class WorkflowStep {
  @Element() hostElement!: HTMLIxWorkflowStepElement;

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

  /**
   * @internal
   */
  @Event() selectedChanged!: EventEmitter<HTMLIxWorkflowStepElement>;

  private customIconSlot: boolean = false;

  @Watch('selected')
  selectedHandler() {
    this.setWorkflowStepStyles();
  }

  @Watch('disabled')
  @Watch('status')
  watchPropHandler() {
    this.setWorkflowStepStyles();
  }

  setWorkflowStepStyles() {
    switch (this.status) {
      case 'open':
        this.iconName = this.selected ? iconCircleDot : iconCircle;
        break;
      case 'success':
        this.iconName = iconSuccess;
        break;
      case 'done':
        this.iconName = iconCircleFilled;
        break;
      case 'warning':
        this.iconName = iconWarning;
        break;
      case 'error':
        this.iconName = iconError;
        break;
      default:
        this.iconName = iconCircle;
        break;
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

  onKeyDown(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this.onStepClick();
    }
  }

  getIconAriaLabel() {
    switch (this.iconName) {
      case iconCircle:
        return 'Circle';
      case iconCircleDot:
        return 'Circle dot';
      case iconCircleFilled:
        return 'Done';
      case iconError:
        return 'Error';
      case iconSuccess:
        return 'Success';
      case iconTriangleFilled:
        return 'Warning';
      case iconWarning:
        return 'Warning';
      default:
        return 'Step';
    }
  }

  render() {
    const icons = !this.customIconSlot ? (
      <Fragment>
        <ix-icon
          color="--si-sys-color-background-0"
          name={
            this.status === 'warning' ? iconTriangleFilled : iconCircleFilled
          }
          class="absolute"
          aria-hidden="true"
        ></ix-icon>
        <ix-icon
          name={this.iconName}
          class={{ absolute: true, 'status-icon': true, [this.status]: true }}
          aria-label={this.getIconAriaLabel()}
        ></ix-icon>
      </Fragment>
    ) : null;

    return (
      <Host class={{ 'host-vertical': this.vertical }}>
        <div
          tabIndex={this.disabled || !this.clickable ? -1 : 0}
          role={this.clickable ? 'button' : undefined}
          aria-disabled={this.disabled ? 'true' : undefined}
          aria-current={this.selected ? 'step' : undefined}
          onClick={() => this.onStepClick()}
          onKeyDown={(e) => this.onKeyDown(e)}
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
