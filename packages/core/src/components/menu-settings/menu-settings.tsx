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
  forceUpdate,
  h,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { CustomCloseEvent, setTab, initialize } from '../utils/menu-tabs/menu-tabs-utils';
import { MenuTabs } from '../utils/menu-tabs/menu-tabs-fc';

@Component({
  tag: 'ix-menu-settings',
  styleUrl: 'menu-settings.scss',
  shadow: true,
})
export class MenuSettings {
  @Element() el!: HTMLIxMenuSettingsElement;

  /**
   * Active tab
   */
  @Prop({ mutable: true }) activeTabLabel: string;

  /**
   * Label of first tab
   */
  @Prop() label = 'Settings';

  /**
   * Internal
   */
  @Prop() show = false;

  /**
   * Popover closed
   */
  @Event() close: EventEmitter<CustomCloseEvent>;

  @State() items: HTMLIxMenuSettingsItemElement[];

  @Watch('activeTabLabel')
  setTab(label: string) {
    setTab(this, label)
  }

  componentWillLoad() {
    initialize(this)
  }

  componentDidLoad() {
    forceUpdate(this.el);
  }

  render() {
    return (
      <MenuTabs context={this}/>
    );
  }
}
