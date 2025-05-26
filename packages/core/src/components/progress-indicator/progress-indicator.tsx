/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, Element, Fragment, Host, Prop, h } from '@stencil/core';
import { LinearBar } from './linear';
import {
  iconCirclePause,
  iconError,
  iconInfo,
  iconSuccess,
  iconWarning,
} from '@siemens/ix-icons/icons';
import { CircularProgress } from './circular';
import { makeRef } from '../utils/make-ref';

export type ProgressIndicatorSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Component({
  tag: 'ix-progress-indicator',
  styleUrl: 'progress-indicator.scss',
  shadow: true,
})
export class ProgressIndicator {
  @Element() hostElement!: HTMLIxProgressIndicatorElement;

  /**
   * The type of progress indicator to use.
   */
  @Prop() type: 'linear' | 'circular' = 'linear';

  /**
   * The size of the progress indicator.
   */
  @Prop() size: ProgressIndicatorSize = 'md';

  /**
   * The value of the progress indicator.
   */
  @Prop() value: number = 0;

  /**
   * The minimum value of the progress indicator.
   */
  @Prop() min: number = 0;

  /**
   * The maximum value of the progress indicator.
   */
  @Prop() max: number = 100;

  /**
   * The state of the progress indicator.
   * This is used to indicate the current state of the progress indicator.
   */
  @Prop() status:
    | 'default'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'paused' = 'default';

  /**
   * The label for the progress indicator.
   */
  @Prop() label?: string;

  /**
   * The helper text for the progress indicator.
   */
  @Prop() helperText?: string;

  /**
   * The text alignment for the helper text.
   * Can be 'left', 'center', or 'right'.
   */
  @Prop() textAlignment: 'left' | 'center' | 'right' = 'left';

  /**
   * Show the helper text as a tooltip
   */
  @Prop() showTextAsTooltip: boolean = false;

  private anchorRef = makeRef<Element>();

  private getHelperText() {
    let icon: string | null = null;

    switch (this.status) {
      case 'error':
        icon = iconError;
        break;
      case 'info':
        icon = iconInfo;
        break;
      case 'warning':
        icon = iconWarning;
        break;
      case 'success':
        icon = iconSuccess;
        break;
      case 'paused':
        icon = iconCirclePause;
        break;
      default:
        icon = null;
    }

    if (!this.helperText) {
      return <slot name="helper-text"></slot>;
    }

    return (
      <div
        class={{
          'helper-text': true,
          [this.status]: true,
          'text-left': this.textAlignment === 'left',
          'text-center': this.textAlignment === 'center',
          'text-right': this.textAlignment === 'right',
        }}
      >
        {icon && <ix-icon name={icon} size="16"></ix-icon>}
        <div class="text">{this.helperText}</div>
        <slot name="helper-text"></slot>
      </div>
    );
  }

  render() {
    const normalizedValue =
      ((this.value - this.min) / (this.max - this.min)) * 100;

    const clampedValue = Math.max(0, Math.min(normalizedValue, 100));

    return (
      <Host
        class={{
          linear: this.type === 'linear',
          circular: this.type === 'circular',
        }}
      >
        <div
          class={{
            'progress-indicator': true,
            [this.size]: true,
            [this.status]: true,
          }}
        >
          {this.label && (
            <ix-typography
              format="label"
              textColor={this.status === 'error' ? 'alarm' : 'soft'}
              class={'label'}
            >
              {this.label}
            </ix-typography>
          )}

          <div class="progress-container">
            {this.type === 'linear' ? (
              <Fragment>
                <LinearBar
                  value={clampedValue}
                  referRef={this.anchorRef}
                ></LinearBar>
                <slot></slot>
              </Fragment>
            ) : (
              <Fragment>
                <CircularProgress
                  value={clampedValue}
                  size={this.size}
                  referRef={this.anchorRef}
                >
                  <slot></slot>
                </CircularProgress>
              </Fragment>
            )}
          </div>
          {this.showTextAsTooltip === true && this.helperText ? (
            <ix-tooltip
              for={this.anchorRef.waitForCurrent() as Promise<HTMLElement>}
              showDelay={500}
              placement="bottom"
            >
              {this.getHelperText()}
            </ix-tooltip>
          ) : (
            this.getHelperText()
          )}
        </div>
      </Host>
    );
  }
}
