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
  Prop,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'ix-blind-group',
  styleUrl: 'blind-group.scss',
  shadow: true,
})
export class BlindGroup {
  @Element() hostElement!: HTMLIxBlindGroupElement;

  /**
   * Index of the opened blind
   */
  @Prop({ mutable: true, reflect: true }) expandedIndex: number = 0;

  /**
   * Allow only one blind to be opened at time
   */
  @Prop() individualBlindOpen: boolean = true;

  /**
   * Disable accordion
   */
  @Prop() disableAccordion: boolean = false;

  /**
   * `expandedIndex` changed
   */
  @Event() expandedIndexChange: EventEmitter<number>;

  getBlinds() {
    return Array.from(this.hostElement.querySelectorAll('ix-blind'));
  }

  @Watch('expandedIndex')
  onCurrentlyOpenedChange() {
    const blinds = this.getBlinds();

    blinds.forEach((blind, index) => {
      blind.collapsed = index !== this.expandedIndex;
      blind.id = index.toString();
    });

    this.expandedIndexChange.emit(this.expandedIndex);
  }

  @Watch('disableAccordion')
  onDisableAccordionChange() {
    const blinds = this.getBlinds();
    blinds.forEach((blind) => {
      blind.disabled = this.disableAccordion;
    });
    this.expandedIndex = undefined;
  }

  componentWillLoad() {
    this.onCurrentlyOpenedChange();
    this.onDisableAccordionChange();

    if (this.individualBlindOpen) {
      const blinds = this.getBlinds();
      blinds.forEach((blind) => {
        blind.addEventListener('collapsedChange', () => {
          this.expandedIndex = Number(blind.id);
        });
      });
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
