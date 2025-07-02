/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { A11yAttributes, a11yHostAttributes } from '../utils/a11y';
import { OnListener } from '../utils/listener';
import { makeRef } from '../utils/make-ref';
import {
  ValidationResults,
  HookValidationLifecycle,
  FieldWrapperInterface,
  IxFormValidationState,
} from '../utils/input';

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
 * @form-ready
 * @slot label-start - Element will be displayed at the start of the slider
 * @slot label-end - Element will be displayed at the end of the slider
 */
@Component({
  tag: 'ix-slider',
  styleUrl: 'slider.scss',
  shadow: true,
  formAssociated: true,
})
export class Slider implements FieldWrapperInterface, IxFormValidationState {
  @AttachInternals() formInternals!: ElementInternals;
  @Element() hostElement!: HTMLIxSliderElement;
  /**
   * Show text below the field component
   */
  @Prop() helperText?: string;

  /**
   * Label for the field component
   */
  @Prop() label?: string;
  /**
   * Error text for the field component
   */
  @Prop() invalidText?: string;

  /**
   * Info text for the field component
   */
  @Prop() infoText?: string;

  /**
   * Warning text for the field component
   */
  @Prop() warningText?: string;

  /**
   * Valid text for the field component
   */
  @Prop() validText?: string;

  /**
   * Show helper, info, warning, error and valid text as tooltip
   */
  @Prop() showTextAsTooltip?: boolean;

  /**
   * Legal number intervals
   *
   * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step
   */
  @Prop() step: number = 1;

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
  @Prop() marker?: SliderMarker;

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
   *
   */
  @Event() valueChange!: EventEmitter<number>;

  @State() rangeInput = 0;
  @State() rangeMin = 0;
  @State() rangeMax = 100;
  @State() rangeTraceReference = 0;
  @State() showTooltip = false;
  @State() isInvalid = false;
  @State() isValid = false;
  @State() isInfo = false;
  @State() isWarning = false;

  private touched = false;

  private a11yAttributes?: A11yAttributes;
  private readonly controlRef = makeRef<HTMLElement>();
  private readonly thumbRef = makeRef<HTMLDivElement>();
  private readonly tooltipRef = makeRef<HTMLIxTooltipElement>();

  get tooltip() {
    return this.tooltipRef.current;
  }

  get pseudoThumb() {
    return this.thumbRef.current;
  }

  get slider() {
    return this.hostElement.shadowRoot?.getElementById(
      'slider'
    ) as HTMLInputElement;
  }

  @Watch('showTooltip')
  onShowTooltipChange() {
    if (this.showTooltip && this.pseudoThumb) {
      this.tooltip?.showTooltip(this.pseudoThumb);
      return;
    }

    this.tooltip?.hideTooltip();
  }
  @HookValidationLifecycle()
  onClassField({
    isInvalid,
    isInfo,
    isValid,
    isWarning,
    isInvalidByRequired,
  }: ValidationResults) {
    this.isInvalid = isInvalid || isInvalidByRequired;
    this.isInfo = isInfo;
    this.isValid = isValid;
    this.isWarning = isWarning;
  }

  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement, [
      'role',
      'aria-valuemin',
      'aria-valuemax',
      'aria-valuenow',
    ]);
    this.updateRangeVariables();
    this.formInternals.setFormValue(this.value.toString());
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
    if (this.value !== undefined) {
      this.formInternals.setFormValue(this.value.toString());
    }
  }
  private updateFormInternalValue(value: number) {
    this.formInternals.setFormValue(value.toString());
    this.value = value;
  }

  private onInput(event: InputEvent) {
    event.stopPropagation();
    const value = parseFloat(this.slider.value);

    if (!isNaN(value)) {
      const oldValue = this.rangeInput;
      this.rangeInput = value;

      const { defaultPrevented } = this.emitInputEvent();

      if (defaultPrevented) {
        this.rangeInput = oldValue;
        this.slider.value = oldValue.toString();
      } else {
        this.updateFormInternalValue(value);
      }
    }
  }

  private emitInputEvent() {
    return this.valueChange.emit(this.rangeInput);
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
  @OnListener<Slider>('pointerup', (self) => self.showTooltip)
  onPointerUp() {
    this.showTooltip = false;
  }
  /** @internal */
  @Method()
  hasValidValue(): Promise<boolean> {
    return Promise.resolve(true);
  }

  /** @internal */
  @Method()
  isTouched(): Promise<boolean> {
    return Promise.resolve(this.touched);
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
          invalid: this.isInvalid,
          info: this.isInfo,
          valid: this.isValid,
          warning: this.isWarning,
        }}
        onPointerDown={() => setTimeout(() => (this.showTooltip = true))}
      >
        <ix-field-wrapper
          label={this.label}
          helperText={this.helperText}
          invalidText={this.invalidText}
          infoText={this.infoText}
          warningText={this.warningText}
          validText={this.validText}
          showTextAsTooltip={this.showTextAsTooltip}
          isValid={this.isValid}
          isInfo={this.isInfo}
          isWarning={this.isWarning}
          isInvalid={this.isInvalid}
          controlRef={this.controlRef}
        >
          <div class="slider-container">
            <div class="slider">
              <div class="track">
                <div
                  ref={this.thumbRef}
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
                ref={this.controlRef}
                type="range"
                list={this.marker ? 'markers' : undefined}
                step={this.step}
                min={this.min}
                max={this.max}
                value={this.rangeInput}
                tabindex={this.disabled ? -1 : 0}
                onInput={(event) => this.onInput(event)}
                onFocus={() => {
                  this.showTooltip = true;
                  this.touched = true;
                }}
                onBlur={() => {
                  this.showTooltip = false;
                }}
                style={{
                  '--value': `${valueInPercentage}`,
                  '--trace-reference': `${traceReferenceInPercentage}`,
                  '--trace-start': `${traceStart}`,
                  '--trace-end': `${traceEnd}`,
                }}
                class={{
                  trace:
                    this.trace &&
                    traceReferenceInPercentage !== valueInPercentage,
                  'hide-trace-reference':
                    this.trace &&
                    (this.traceReference <= this.min ||
                      this.traceReference >= this.max),
                }}
                role="slider"
                aria-valuenow={this.rangeInput}
                aria-valuemin={this.min}
                aria-valuemax={this.max}
                {...this.a11yAttributes}
              />

              <ix-tooltip
                ref={this.tooltipRef}
                class={{
                  'hide-tooltip': !this.showTooltip,
                }}
                animationFrame={true}
                for={this.thumbRef.waitForCurrent()}
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
          </div>
        </ix-field-wrapper>
      </Host>
    );
  }
}
