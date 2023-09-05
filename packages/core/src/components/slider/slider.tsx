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
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';

export type SliderMarker = Array<number>;

function between(min: number, value: number, max: number) {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

/**
 * @since 2.0.0
 *
 * @slot label-start - Element will be displayed at the start of the slider
 * @slot label-end - Element will be displayed at the end of the slider
 */
@Component({
  tag: 'ix-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class IxSlider {
  @Element() hostElement!: HTMLIxSliderElement;

  /**
   * Legal number intervals
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step
   */
  @Prop() step: number;

  /**
   * Minimum slider value
   */
  @Prop() min = 0;

  /**
   * Maximum slider value
   */
  @Prop() max = 100;

  /**
   * Current value of the slider
   */
  @Prop() value = 0;

  /**
   * Define tick marker on the slider. Marker has to be within slider min/max
   */
  @Prop() marker: SliderMarker;

  /**
   * Show a trace line
   */
  @Prop() trace = false;

  /**
   * Define the start point of the trace line
   */
  @Prop() traceReference = 0;

  /**
   * Show control as disabled
   */
  @Prop() disabled = false;

  /**
   * Show error state and message
   */
  @Prop() error: boolean | string;

  /**
   *
   */
  @Event() valueChange: EventEmitter<number>;

  @State() rangeInput = 0;
  @State() rangeMin = 0;
  @State() rangeMax = 100;
  @State() rangeTraceReference = 0;
  @State() showTooltip = false;

  private a11yAttributes: A11yAttributes;

  get tooltip() {
    return this.hostElement.shadowRoot.querySelector('ix-tooltip');
  }

  get pseudoThumb() {
    return this.hostElement.shadowRoot.querySelector('.thumb') as HTMLElement;
  }

  get slider() {
    return this.hostElement.shadowRoot.getElementById(
      'slider'
    ) as HTMLInputElement;
  }

  @Watch('showTooltip')
  onShowTooltipChange() {
    if (this.showTooltip) {
      this.tooltip.showTooltip(this.pseudoThumb);
      return;
    }

    this.tooltip.hideTooltip();
  }

  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement, [
      'role',
      'aria-valuemin',
      'aria-valuemax',
      'aria-valuenow',
    ]);
    this.updateRangeVariables();
  }

  @Watch('value')
  @Watch('max')
  @Watch('min')
  @Watch('traceReference')
  private updateRangeVariables() {
    this.rangeInput = between(this.min, this.value, this.max);
    this.rangeTraceReference = between(this.min, this.traceReference, this.max);
    this.rangeMin = Math.min(this.min, this.max);
    this.rangeMax = Math.max(this.min, this.max);
  }

  private onInput(event: InputEvent) {
    event.stopPropagation();
    const value = parseInt(this.slider.value);

    if (!isNaN(value)) {
      this.rangeInput = value;
      this.emitInputEvent();
    }
  }

  private emitInputEvent() {
    this.valueChange.emit(this.rangeInput);
  }

  private isMarkerActive(markerValue: number) {
    const start = Math.min(this.traceReference, this.rangeInput);
    const end = Math.max(this.traceReference, this.rangeInput);
    const value = markerValue;

    return value >= start && value <= end;
  }

  // Listen globally on window because sometimes the event listener
  // of the DOM element input itself is not called if the release
  // click is not inside the element anymore
  @Listen('pointerup', {
    target: 'window',
  })
  onPointerUp() {
    this.showTooltip = false;
  }

  render() {
    const range = this.rangeMax - this.rangeMin;

    let traceReferenceInPercentage =
      (this.rangeTraceReference - this.rangeMin) / range;

    let valueInPercentage = (this.rangeInput - this.rangeMin) / range;

    const distance = valueInPercentage - traceReferenceInPercentage;

    let traceStart = traceReferenceInPercentage;
    let traceEnd = valueInPercentage;

    if (distance <= 0) {
      traceStart = valueInPercentage;
      traceEnd = traceReferenceInPercentage;
    }

    return (
      <Host
        class={{
          disabled: this.disabled,
          error: !!this.error,
        }}
        onPointerDown={() => setTimeout(() => (this.showTooltip = true))}
      >
        <div class="slider">
          <div class="track">
            <div
              class="thumb"
              style={{
                left: `calc(${valueInPercentage} * 100% - 8px)`,
              }}
            ></div>
            <div class="ticks">
              {this.marker
                ? this.marker.map((markerValue) => {
                    if (markerValue > this.max || markerValue < this.min) {
                      return;
                    }

                    let left = (markerValue - this.rangeMin) / range;

                    return (
                      <div
                        class={{
                          tick: true,
                          'tick-active':
                            this.isMarkerActive(markerValue) && this.trace,
                        }}
                        style={{
                          '--tick-value': `${left}`,
                        }}
                      ></div>
                    );
                  })
                : null}
            </div>
          </div>

          <input
            id="slider"
            type="range"
            list={this.marker ? 'markers' : undefined}
            step={this.step}
            min={this.min}
            max={this.max}
            value={this.rangeInput}
            tabindex={this.disabled ? -1 : 0}
            onInput={(event) => this.onInput(event)}
            style={{
              '--value': `${valueInPercentage}`,
              '--trace-reference': `${traceReferenceInPercentage}`,
              '--trace-start': `${traceStart}`,
              '--trace-end': `${traceEnd}`,
            }}
            class={{
              trace:
                this.trace && traceReferenceInPercentage !== valueInPercentage,
            }}
            onFocus={() => {
              this.showTooltip = true;
            }}
            onBlur={() => {
              this.showTooltip = false;
            }}
            role="slider"
            aria-valuenow={this.rangeInput}
            aria-valuemin={this.min}
            aria-valuemax={this.max}
            {...this.a11yAttributes}
          />

          <ix-tooltip
            class={{
              'hide-tooltip': !this.showTooltip,
            }}
            animationFrame={true}
          >
            {this.rangeInput}
          </ix-tooltip>
        </div>
        <div class="label">
          <div class="label-start">
            <slot name="label-start"></slot>
          </div>
          <div class="label-end">
            <slot name="label-end"></slot>
          </div>
        </div>
        {this.error ? (
          <ix-typography class={'label-error'} color="alarm">
            {this.error}
          </ix-typography>
        ) : null}
      </Host>
    );
  }
}
