/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {
  arrow,
  autoUpdate,
  computePosition,
  ComputePositionConfig,
  flip,
  inline,
  offset,
  shift,
} from '@floating-ui/dom';
import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { Side } from '../dropdown/placement';

type Position = { x: number; y: number };

/**
 * @slot tooltip-message - Custom tooltip message with html support
 *
 * @deprecated Will be removed with 4.0.0
 */
@Component({
  tag: 'ix-validation-tooltip',
  styleUrl: 'validation-tooltip.scss',
  shadow: true,
})
export class ValidationTooltip {
  @Element() hostElement!: HTMLIxValidationTooltipElement;

  /**
   * Message of the tooltip
   */
  @Prop() message?: string;

  /**
   * Placement of the tooltip
   */
  @Prop() placement: Side = 'top';

  /**
   * Suppress the automatic placement of the dropdown.
   *
   * @since 2.0.0
   */
  @Prop() suppressAutomaticPlacement = false;

  @State() isInputValid = true;
  @State() tooltipPosition?: Position;
  @State() arrowPosition?: Position;

  private onSubmitBind = this.onSubmit.bind(this);
  private onInputFocusBind = this.onInputFocus.bind(this);
  private autoUpdateCleanup?: () => void;
  private observer?: MutationObserver;

  get arrow() {
    return this.hostElement.shadowRoot!.querySelector('#arrow') as HTMLElement;
  }

  get inputElement() {
    return this.hostElement.querySelector('input');
  }

  get formElement() {
    return this.inputElement?.form;
  }

  get tooltipElement(): HTMLElement {
    return this.hostElement.shadowRoot!.querySelector('.validation-tooltip')!;
  }

  private destroyAutoUpdate() {
    if (this.tooltipElement) {
      this.tooltipElement.style.display = 'none';
    }

    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }

  private applyTooltipPosition() {
    this.tooltipElement.style.display = 'block';

    let positionConfig: Partial<ComputePositionConfig> = {
      strategy: 'fixed',
      middleware: [
        inline(),
        shift(),
        offset({
          mainAxis: 8,
        }),
      ],
    };

    if (!positionConfig.middleware) {
      positionConfig.middleware = [];
    }

    if (!this.suppressAutomaticPlacement) {
      positionConfig.middleware.push(
        flip({ fallbackStrategy: 'initialPlacement' })
      );
    }
    positionConfig.placement = this.placement;

    this.autoUpdateCleanup = autoUpdate(
      this.inputElement!,
      this.tooltipElement,
      async () => {
        positionConfig.middleware = [
          ...positionConfig.middleware!,
          arrow({
            element: this.arrow,
          }),
        ];
        const computeResponse = await computePosition(
          this.inputElement!,
          this.tooltipElement,
          positionConfig
        );

        if (computeResponse.middlewareData.arrow) {
          const { x, y } = computeResponse.middlewareData.arrow as {
            x: number;
            y: number;
          };
          this.arrowPosition = {
            x,
            y,
          };
          Object.assign(this.arrow.style, {
            left: x != null ? `${x}px` : '',
            top: y != null ? `${y}px` : '',
          });
        }

        this.tooltipPosition = {
          x: computeResponse.x,
          y: computeResponse.y,
        };
      },
      {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
      }
    );
  }

  componentDidLoad() {
    if (!this.inputElement) {
      throw Error(
        'Validation tooltip is only working with an direct input child.'
      );
    }

    if (!this.formElement) {
      throw Error('Validation tooltip is only working with an form element.');
    }

    this.formElement.addEventListener('submit', this.onSubmitBind);
    this.inputElement.addEventListener('focus', this.onInputFocusBind);

    this.observer = new MutationObserver(() => {
      if (this.inputElement!.classList.contains('is-invalid')) {
        this.isInputValid = false;
        this.validationChanged();
      }
    });

    this.observer.observe(this.inputElement, {
      childList: false,
      subtree: false,
      attributes: true,
      attributeFilter: ['class'],
    });
  }

  private onInputFocus() {
    this.isInputValid = true;
  }

  private onSubmit() {
    if (this.formElement!.classList.contains('needs-validation')) {
      this.isInputValid = this.inputElement!.validity.valid;
    }
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    this.destroyAutoUpdate();

    this.formElement?.removeEventListener('submit', this.onSubmitBind);
    this.inputElement?.removeEventListener('focus', this.onInputFocusBind);
  }

  @Watch('isInputValid')
  validationChanged() {
    if (!this.isInputValid) {
      this.applyTooltipPosition();
    } else {
      this.destroyAutoUpdate();
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <div
          role="tooltip"
          style={{
            display: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            transform: `translate(${Math.round(
              this.tooltipPosition?.x ?? 0
            )}px,${Math.round(this.tooltipPosition?.y ?? 0)}px)`,
          }}
          class="validation-tooltip text-default"
        >
          {this.message}
          <slot name="tooltip-message"></slot>
          <div id="arrow"></div>
        </div>
      </Host>
    );
  }
}
