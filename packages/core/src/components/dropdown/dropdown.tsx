/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  autoPlacement,
  autoUpdate,
  computePosition,
  ComputePositionConfig,
  inline,
  offset,
  shift,
} from '@floating-ui/dom';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import { getAlignment } from './alignment';
import { BasePlacement, Placement, PlacementWithAlignment } from './placement';

@Component({
  tag: 'ix-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: true,
})
export class Dropdown {
  @Element() hostElement!: HTMLIxDropdownElement;

  /**
   * Show dropdown
   */
  @Prop({ mutable: true, reflect: true }) show = false;

  /**
   * Define an element that triggers the dropdown.
   * A trigger can either be a string that will be interprated as id attribute or a DOM element.
   */
  @Prop() trigger: string | HTMLElement;

  /**
   * Define an anchor element
   */
  @Prop() anchor: string | HTMLElement;

  /**
   * Close behavior
   */
  @Prop() closeBehavior: 'inside' | 'outside' | 'both' | boolean = 'both';

  /**
   * Placement of the dropdown
   */
  @Prop() placement: Placement = 'bottom-start';

  /**
   * Position strategy
   */
  @Prop() positioningStrategy: 'absolute' | 'fixed' = 'fixed';

  /**
   * Adjust dropdown width to the parent width
   * @deprecated Will be removed in 2.0.0. Property has a typo use `adjustDropdownWidthToReferenceWidth` instead.
   */
  @Prop() adjustDropdownWidthToReferenceWith = false;

  /**
   * Adjust dropdown width to the parent width
   *
   * @deprecated Will be removed. Not used anymore
   */
  @Prop() adjustDropdownWidthToReferenceWidth = false;

  /**
   * An optional header shown at the top of the dropdown
   */
  @Prop() header?: string;

  /**
   * Move dropdown along main axis of alignment
   *
   * @internal
   */
  @Prop() offset: {
    mainAxis?: number;
    crossAxis?: number;
    alignmentAxis?: number;
  };

  /**
   * Fire event after visibility of dropdown has changed
   */
  @Event() showChanged: EventEmitter<boolean>;

  private autoUpdateCleanup: () => void = null;

  private triggerElement?: Element;
  private anchorElement?: Element;

  private dropdownRef: HTMLElement;

  private openBind: any;

  constructor() {
    this.openBind = this.open.bind(this);
  }

  get dropdownItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-dropdown-item'));
  }

  private async registerListener(element: string | HTMLElement) {
    this.triggerElement = await this.resolveElement(element);
    if (this.triggerElement) {
      this.triggerElement.addEventListener('click', this.openBind);
    }
  }

  private async unregisterListener(element: string | HTMLElement) {
    const trigger = await this.resolveElement(element);
    trigger.removeEventListener('click', this.openBind);
  }

  private resolveElement(element: string | HTMLElement): Promise<Element> {
    if (typeof element !== 'string') {
      return Promise.resolve(element);
    }

    const selector = `#${element}`;
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  @Watch('show')
  async changedShow(newShow: boolean) {
    if (newShow) {
      this.anchorElement = await (this.anchor
        ? this.resolveElement(this.anchor)
        : this.resolveElement(this.trigger));

      if (this.anchorElement) {
        this.applyDropdownPosition();
      }
    }
  }

  @Watch('trigger')
  changedTrigger(
    newTriggerValue: string | HTMLElement,
    oldTriggerValue: string | HTMLElement
  ) {
    if (newTriggerValue) {
      this.registerListener(newTriggerValue);
    }

    if (oldTriggerValue) {
      this.unregisterListener(oldTriggerValue);
    }
  }

  @Listen('click', {
    target: 'window',
  })
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (
      this.show === false ||
      this.closeBehavior === false ||
      this.anchorElement === target ||
      this.triggerElement === target
    ) {
      return;
    }

    switch (this.closeBehavior) {
      case 'outside':
        if (!this.dropdownRef.contains(target)) {
          this.close();
        }
        break;

      case 'inside':
        if (this.dropdownRef.contains(target)) {
          this.close();
        }
        break;

      default:
        this.close();
    }
  }

  private open(event?: Event) {
    event?.preventDefault();
    event?.stopPropagation();

    this.show = !this.show;
    this.showChanged.emit(this.show);
  }

  private close() {
    this.show = false;
    this.showChanged.emit(this.show);
  }

  private async applyDropdownPosition() {
    if (this.anchorElement && this.dropdownRef) {
      let positionConfig: Partial<ComputePositionConfig> = {
        strategy: this.positioningStrategy,
        middleware: [],
      };

      if (this.placement.includes('auto')) {
        positionConfig.middleware.push(
          autoPlacement({
            alignment: getAlignment(this.placement),
          })
        );
      } else {
        positionConfig.placement = this.placement as
          | BasePlacement
          | PlacementWithAlignment;
      }

      positionConfig.middleware = [
        ...positionConfig.middleware,
        inline(),
        shift(),
      ];

      if (this.offset) {
        positionConfig.middleware.push(offset(this.offset));
      }

      if (this.autoUpdateCleanup) {
        this.autoUpdateCleanup();
        this.autoUpdateCleanup = null;
      }
      this.autoUpdateCleanup = autoUpdate(
        this.anchorElement,
        this.dropdownRef,
        async () => {
          const computeResponse = await computePosition(
            this.anchorElement,
            this.dropdownRef,
            positionConfig
          );
          Object.assign(this.dropdownRef.style, {
            top: '0',
            left: '0',
            transform: `translate(${Math.round(
              computeResponse.x
            )}px,${Math.round(computeResponse.y)}px)`,
          });
        },
        {
          ancestorResize: true,
          ancestorScroll: true,
          elementResize: true,
        }
      );
    }
  }

  async componentDidLoad() {
    if (this.trigger) {
      this.registerListener(this.trigger);
    }
  }

  async componentDidRender() {
    await this.applyDropdownPosition();
  }

  disconnectedCallback() {
    if (this.autoUpdateCleanup) {
      this.autoUpdateCleanup();
    }
  }

  /**
   * Update position of dropdown
   */
  @Method()
  async updatePosition() {
    this.applyDropdownPosition();
  }

  render() {
    return (
      <Host
        ref={(ref) => (this.dropdownRef = ref)}
        class={{
          'dropdown-menu': true,
          show: this.show,
        }}
        style={{
          margin: '0',
          minWidth: '0px',
          position: this.positioningStrategy,
        }}
      >
        <div style={{ display: 'contents' }}>
          {this.header ? <div class="dropdown-header">{this.header}</div> : ''}
          <slot></slot>
        </div>
      </Host>
    );
  }
}
