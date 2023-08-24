/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';

export type SliderMarker = Record<number, string>;

@Component({
  tag: 'ix-slider',
  styleUrl: 'slider.scss',
  shadow: true,
})
export class IxSlider {
  @Element() hostElement!: HTMLIxSliderElement;

  @Prop() step: number;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() value: number;
  @Watch('value')
  onValueChange() {
    this.rangeInput = this.value;
  }
  @Prop() marker: SliderMarker;

  @Prop() trace = false;

  @Prop() traceReference = 0;

  /**
   * Show control as disabled
   */
  @Prop() disabled = false;

  @State() rangeInput: number;

  componentWillLoad() {
    this.rangeInput = this.value;
  }

  get slider() {
    return this.hostElement.shadowRoot.getElementById(
      'slider'
    ) as HTMLInputElement;
  }

  private onInput() {
    const value = parseInt(this.slider.value);

    if (!isNaN(value)) {
      this.rangeInput = value;
    }
  }

  render() {
    const traceReferenceInPercentage =
      this.traceReference / (this.max - this.min);
    const valueInPercentage = this.rangeInput / (this.max - this.min);

    const distance = valueInPercentage - traceReferenceInPercentage;

    let traceStart = traceReferenceInPercentage;
    let traceEnd = valueInPercentage;

    if (distance <= 0) {
      traceStart = valueInPercentage;
      traceEnd = traceReferenceInPercentage;
    }

    let listLength = 0;

    if (this.marker) {
      listLength = Object.keys(this.marker).length;
    }

    const absDistance = Math.abs(distance);

    return (
      <Host
        class={{
          disabled: this.disabled,
        }}
        style={{
          '--list-length': `${listLength}`,
        }}
      >
        <input
          id="slider"
          type="range"
          list={this.marker ? 'markers' : undefined}
          step={this.step}
          min={this.min}
          max={this.max}
          value={this.rangeInput}
          tabindex={this.disabled ? -1 : 0}
          onInput={() => this.onInput()}
          style={{
            '--value': `${valueInPercentage}`,
            '--trace-reference': `${traceReferenceInPercentage}`,
            '--trace-start': `${traceStart}`,
            '--trace-end': `${traceEnd}`,
          }}
          class={{
            trace: this.trace,
          }}
        />

        {this.marker ? (
          <datalist id="markers">
            {Object.keys(this.marker).map((markerValue) => (
              <option
                value={markerValue}
                class={{
                  'marker-active': parseInt(markerValue) <= this.rangeInput,
                }}
                style={{
                  '--marker-pos': `${
                    parseInt(markerValue) / (this.max - this.min)
                  }`,
                }}
              ></option>
            ))}
          </datalist>
        ) : null}
      </Host>
    );
  }
}
