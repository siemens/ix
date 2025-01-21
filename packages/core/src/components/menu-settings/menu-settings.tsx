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
import { MenuTabs } from '../utils/menu-tabs/menu-tabs-fc';
import {
  CustomCloseEvent,
  initialize,
  setTab,
} from '../utils/menu-tabs/menu-tabs-utils';

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
  // eslint-disable-next-line @stencil-community/strict-mutable
  @Prop({ mutable: true }) activeTabLabel?: string;

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
  @Event() close!: EventEmitter<CustomCloseEvent>;

  @State() items!: HTMLIxMenuSettingsItemElement[];

  @Watch('activeTabLabel')
  updateTab(label: string) {
    setTab(this, label);
  }

  componentWillLoad() {
    initialize(this);
  }

  componentDidLoad() {
    forceUpdate(this.el);
  }

  render() {
    return <MenuTabs context={this} />;
  }
}
