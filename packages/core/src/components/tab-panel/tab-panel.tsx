/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, Host, Mixin, Prop, h } from '@stencil/core';
import { DefaultMixins } from '../utils/internal/component';
import {
  ComponentIdMixin,
  ComponentIdMixinContract,
} from '../utils/internal/mixins/id.mixin';

/**
 * @internal
 * @since 5.0.0
 * */
@Component({
  tag: 'ix-tab-panel',
  styleUrl: 'tab-panel.scss',
  shadow: true,
})
export class TabPanel
  extends Mixin(...DefaultMixins, ComponentIdMixin)
  implements ComponentIdMixinContract
{
  @Element() override hostElement!: HTMLIxTabPanelElement;

  /**
   * Key of the tab panel, has to be the same as the tabKey of the corresponding ix-tab-item
   */
  @Prop({ reflect: true }) tabKey!: string;

  override render() {
    return (
      <Host role="tabpanel" id={this.getHostElementId()}>
        <slot></slot>
      </Host>
    );
  }
}
