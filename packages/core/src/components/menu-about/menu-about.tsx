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
  tag: 'ix-menu-about',
  styleUrl: 'menu-about.scss',
  shadow: true,
})
export class MenuAbout {
  @Element() el!: HTMLIxMenuAboutElement;

  /**
   * Active tab
   */
  // eslint-disable-next-line @stencil-community/strict-mutable
  @Prop({ mutable: true }) activeTabLabel?: string;

  /**
   * Content of the header
   */
  @Prop() label = 'About & legal information';

  /** @internal */
  @Prop() show = false;

  /**
   * Active tab changed
   * @since 3.0.0
   */
  @Event() tabChange!: EventEmitter<string>;

  /**
   * About and Legal closed
   */
  @Event() close!: EventEmitter<CustomCloseEvent>;

  @State() items!: HTMLIxMenuAboutItemElement[];

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
