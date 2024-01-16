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
  tag: 'ix-menu-about',
  styleUrl: 'menu-about.scss',
  shadow: true,
})
export class MenuAbout {
  @Element() el!: HTMLIxMenuAboutElement;

  /**
   * Active tab
   */
  @Prop({ mutable: true }) activeTabLabel: string;

  /**
   * Label of first tab
   */
  @Prop() label = 'About & legal information';

  /**
   * Internal
   */
  @Prop() show = false;

  /**
   * About and Legal closed
   */
  @Event() close: EventEmitter<CustomCloseEvent>;

  @State() items: HTMLIxMenuAboutItemElement[];

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
