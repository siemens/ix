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
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  Watch,
} from '@stencil/core';
import { CustomLabelChangeEvent } from '../utils/menu-tabs/menu-tabs-utils';

@Component({
  tag: 'ix-menu-about-item',
  styleUrl: 'menu-about-item.css',
  shadow: true,
})
export class MenuAboutItem {
  /**
   * About Item label
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * Label changed
   */
  @Event() labelChange!: EventEmitter<CustomLabelChangeEvent>;

  @Watch('label')
  watchLabel(newValue: string, oldValue: string) {
    this.labelChange.emit({
      name: 'ix-menu-about-item',
      oldLabel: oldValue,
      newLabel: newValue,
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
