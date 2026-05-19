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
  Mixin,
  Prop,
  Watch,
} from '@stencil/core';
import { BaseTabMixin, BaseTabMixinContract } from '../tab-item/tab.mixin';
import { CustomLabelChangeEvent } from '../utils/menu-tabs/menu-tabs-utils';

/**
 * @deprecated since 5.0.0, use ix-tab-item instead of ix-menu-settings-item
 */
@Component({
  tag: 'ix-menu-settings-item',
  shadow: false,
})
export class MenuSettingsItem
  extends Mixin(BaseTabMixin)
  implements BaseTabMixinContract
{
  /**
   * Settings Item label
   */
  @Prop({ reflect: true }) label?: string;

  /**
   * @internal
   */
  @Event() labelChange!: EventEmitter<CustomLabelChangeEvent>;

  @Watch('label')
  watchLabel(newValue: string, oldValue: string) {
    this.labelChange.emit({
      name: 'ix-menu-settings-item',
      oldLabel: oldValue,
      newLabel: newValue,
    });
  }

  override render() {
    return (
      <Host>
        <ix-tab-panel tabKey={this.tabKey}>
          <slot></slot>
        </ix-tab-panel>
      </Host>
    );
  }
}
